'use client';

/**
 * useDialogLifecycle — Reusable Lifecycle Hook for Accessible Dialogs & Overlays
 *
 * Authority: Level 3 Screen, View, Layout, Motion & Sensory Contract (§37, §24)
 * Authority: Level 4 DDD Architectural Guidelines (§5.4)
 * Architectural Boundary: src/core/interaction/ (Shared Infrastructure)
 *
 * Implements:
 * - Safe 4-phase dialog lifecycle: 'unmounted' -> 'entering' -> 'entered' -> 'exiting' -> 'unmounted'
 * - Controlled (via isOpen) and self-managed (via open/requestClose/toggle) execution
 * - Clean enter and exit transitions without abrupt DOM removal
 * - Re-entrant safety: Reopening during exit sequence cancels exit timer and enters smoothly
 * - Escape key dismissal with stable listener reference
 * - Optional Tab / Shift+Tab focus containment (trapFocus: true by default for modals)
 * - Safe focus restoration to trigger element only after exit unmount completes
 * - Leak-proof body scroll locking without mid-transition flickering
 * - Reduced-motion support with clean phase progression
 */

import { useState, useRef, useEffect, useCallback } from 'react';

export type DialogAnimationPhase = 'unmounted' | 'entering' | 'entered' | 'exiting';

export interface UseDialogLifecycleOptions {
  /** Controlled open state (optional) */
  isOpen?: boolean;
  /** Initial open state when self-managed (default: false) */
  defaultIsOpen?: boolean;
  /** Callback fired when the dialog completes its exit sequence */
  onClose?: () => void;
  /** Callback fired when the dialog enters */
  onOpen?: () => void;
  /** Duration in ms for the enter transition (default: 300ms, matching --duration-medium) */
  enterDurationMs?: number;
  /** Duration in ms for the exit transition (default: 200ms, matching --duration-exit) */
  exitDurationMs?: number;
  /** Ref to the trigger element that opened the dialog, for focus restoration */
  triggerRef?: React.RefObject<HTMLElement | null>;
  /** Optional initial element to focus upon dialog opening (default: first focusable) */
  initialFocusRef?: React.RefObject<HTMLElement | null>;
  /** Whether to trap Tab focus inside the dialog (default: true for modal dialogs) */
  trapFocus?: boolean;
}

export interface UseDialogLifecycleReturn {
  /** Current logical open state */
  isOpen: boolean;
  /** Whether the dialog element should be present in the DOM */
  isMounted: boolean;
  /** Current animation phase: 'unmounted' | 'entering' | 'entered' | 'exiting' */
  animationPhase: DialogAnimationPhase;
  /** Ref to be attached to the dialog container element for focus trapping */
  dialogRef: React.RefObject<HTMLDivElement | null>;
  /** Safe trigger to open or reopen the dialog */
  open: () => void;
  /** Safe trigger to initiate the exit transition and subsequent close */
  requestClose: () => void;
  /** Toggle dialog open/close state */
  toggle: () => void;
}

export function useDialogLifecycle({
  isOpen: controlledIsOpen,
  defaultIsOpen = false,
  onClose,
  onOpen,
  enterDurationMs = 300,
  exitDurationMs = 200,
  triggerRef,
  initialFocusRef,
  trapFocus = true,
}: UseDialogLifecycleOptions = {}): UseDialogLifecycleReturn {
  const isControlled = controlledIsOpen !== undefined;
  const initialOpen = isControlled ? controlledIsOpen : defaultIsOpen;

  const [isOpenState, setIsOpenState] = useState<boolean>(initialOpen);
  const [isMounted, setIsMounted] = useState<boolean>(initialOpen);
  const [animationPhase, setAnimationPhase] = useState<DialogAnimationPhase>(
    initialOpen ? 'entered' : 'unmounted'
  );

  const logicalIsOpen = isControlled ? controlledIsOpen : isOpenState;

  const dialogRef = useRef<HTMLDivElement>(null);
  const exitTimerRef = useRef<NodeJS.Timeout | null>(null);
  const enterTimerRef = useRef<NodeJS.Timeout | null>(null);
  const enterRafRef = useRef<number | null>(null);
  const focusTimerRef = useRef<NodeJS.Timeout | null>(null);
  const prevActiveElementRef = useRef<HTMLElement | null>(null);
  const originalOverflowRef = useRef<string | null>(null);
  const originalPaddingRightRef = useRef<string | null>(null);

  // Keep latest callbacks and values in stable refs
  const onCloseRef = useRef(onClose);
  onCloseRef.current = onClose;

  const onOpenRef = useRef(onOpen);
  onOpenRef.current = onOpen;

  const animationPhaseRef = useRef<DialogAnimationPhase>(animationPhase);
  animationPhaseRef.current = animationPhase;

  const isMountedRef = useRef<boolean>(isMounted);
  isMountedRef.current = isMounted;

  const exitDurationRef = useRef(exitDurationMs);
  exitDurationRef.current = exitDurationMs;

  const enterDurationRef = useRef(enterDurationMs);
  enterDurationRef.current = enterDurationMs;

  const triggerRefCurrent = useRef(triggerRef);
  triggerRefCurrent.current = triggerRef;

  const initialFocusRefCurrent = useRef(initialFocusRef);
  initialFocusRefCurrent.current = initialFocusRef;

  const trapFocusRef = useRef(trapFocus);
  trapFocusRef.current = trapFocus;

  // Safe open implementation (STABLE REFERENCE)
  const open = useCallback(() => {
    // If currently exiting, cancel exit timer immediately
    if (exitTimerRef.current) {
      clearTimeout(exitTimerRef.current);
      exitTimerRef.current = null;
    }
    if (enterRafRef.current) {
      cancelAnimationFrame(enterRafRef.current);
      enterRafRef.current = null;
    }

    if (!isControlled) {
      setIsOpenState(true);
    }

    // Capture active element for focus restoration before dialog mounts
    if (typeof document !== 'undefined' && !isMountedRef.current) {
      prevActiveElementRef.current = document.activeElement as HTMLElement | null;
      if (originalOverflowRef.current === null) {
        const currentScrollY = window.scrollY || document.documentElement.scrollTop;
        originalOverflowRef.current = document.body.style.overflow;
        // Compensate for scrollbar removal to prevent layout shift
        const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
        if (scrollbarWidth > 0 && originalPaddingRightRef.current === null) {
          originalPaddingRightRef.current = document.body.style.paddingRight;
          document.body.style.paddingRight = `${scrollbarWidth}px`;
        }
        document.body.style.overflow = 'hidden';
        if ((window.scrollY || document.documentElement.scrollTop) !== currentScrollY) {
          const prevScrollBehavior = document.documentElement.style.scrollBehavior;
          document.documentElement.style.scrollBehavior = 'auto';
          window.scrollTo(0, currentScrollY);
          document.documentElement.style.scrollBehavior = prevScrollBehavior;
        }
      }
    }

    setIsMounted(true);
    setAnimationPhase('entering');

    const isReduced =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches &&
      document.documentElement.getAttribute('data-motion') !== 'standard';

    if (isReduced) {
      setAnimationPhase('entered');
    } else {
      // Two consecutive requestAnimationFrames guarantee the browser has painted
      // the initial 'entering' frame in the DOM before triggering the transition to 'entered'.
      enterRafRef.current = requestAnimationFrame(() => {
        enterRafRef.current = requestAnimationFrame(() => {
          setAnimationPhase('entered');
        });
      });
    }

    // Initial focus with strict preventScroll to stop browser from scrolling window
    if (focusTimerRef.current) clearTimeout(focusTimerRef.current);
    focusTimerRef.current = setTimeout(() => {
      const currentScrollY = window.scrollY || document.documentElement.scrollTop;
      if (initialFocusRefCurrent.current?.current) {
        initialFocusRefCurrent.current.current.focus({ preventScroll: true });
      } else if (dialogRef.current) {
        const focusable = dialogRef.current.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        if (focusable.length > 0) {
          focusable[0].focus({ preventScroll: true });
        } else {
          dialogRef.current.focus({ preventScroll: true });
        }
      }
      if ((window.scrollY || document.documentElement.scrollTop) !== currentScrollY) {
        const prevScrollBehavior = document.documentElement.style.scrollBehavior;
        document.documentElement.style.scrollBehavior = 'auto';
        window.scrollTo(0, currentScrollY);
        document.documentElement.style.scrollBehavior = prevScrollBehavior;
      }
    }, isReduced ? 10 : 35);

    onOpenRef.current?.();
  }, [isControlled]);

  // Safe close implementation (STABLE REFERENCE)
  const requestClose = useCallback(() => {
    if (animationPhaseRef.current === 'exiting' || animationPhaseRef.current === 'unmounted') {
      return;
    }

    // Cancel pending enter or focus timers
    if (enterRafRef.current) {
      cancelAnimationFrame(enterRafRef.current);
      enterRafRef.current = null;
    }
    if (enterTimerRef.current) {
      clearTimeout(enterTimerRef.current);
      enterTimerRef.current = null;
    }
    if (focusTimerRef.current) {
      clearTimeout(focusTimerRef.current);
      focusTimerRef.current = null;
    }

    if (!isControlled) {
      setIsOpenState(false);
    }

    const isReduced =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches &&
      document.documentElement.getAttribute('data-motion') !== 'standard';

    setAnimationPhase('exiting');

    const closeFinalizer = () => {
      setAnimationPhase('unmounted');
      setIsMounted(false);

      // Restore body scroll and scrollbar padding on complete exit
      if (typeof document !== 'undefined') {
        if (originalOverflowRef.current !== null) {
          document.body.style.overflow = originalOverflowRef.current;
          originalOverflowRef.current = null;
        }
        if (originalPaddingRightRef.current !== null) {
          document.body.style.paddingRight = originalPaddingRightRef.current;
          originalPaddingRightRef.current = null;
        }
      }

      // Restore focus to trigger or previous active element without causing window scroll
      const currentScrollY = window.scrollY || document.documentElement.scrollTop;
      if (triggerRefCurrent.current?.current) {
        triggerRefCurrent.current.current.focus({ preventScroll: true });
      } else if (prevActiveElementRef.current && typeof prevActiveElementRef.current.focus === 'function') {
        prevActiveElementRef.current.focus({ preventScroll: true });
      }
      if ((window.scrollY || document.documentElement.scrollTop) !== currentScrollY) {
        const prevScrollBehavior = document.documentElement.style.scrollBehavior;
        document.documentElement.style.scrollBehavior = 'auto';
        window.scrollTo(0, currentScrollY);
        document.documentElement.style.scrollBehavior = prevScrollBehavior;
      }

      onCloseRef.current?.();
    };

    if (isReduced) {
      closeFinalizer();
    } else {
      if (exitTimerRef.current) clearTimeout(exitTimerRef.current);
      exitTimerRef.current = setTimeout(closeFinalizer, exitDurationRef.current);
    }
  }, [isControlled]);

  const toggle = useCallback(() => {
    if (animationPhaseRef.current === 'entered' || animationPhaseRef.current === 'entering') {
      requestClose();
    } else {
      open();
    }
  }, [open, requestClose]);

  // Synchronize when controlledIsOpen changes externally
  useEffect(() => {
    if (!isControlled) return;

    if (controlledIsOpen) {
      if (animationPhaseRef.current !== 'entered' && animationPhaseRef.current !== 'entering') {
        open();
      }
    } else {
      if (isMountedRef.current && animationPhaseRef.current !== 'exiting' && animationPhaseRef.current !== 'unmounted') {
        requestClose();
      }
    }
  }, [isControlled, controlledIsOpen, open, requestClose]);

  // Keyboard navigation (Escape & Focus Trap) — active while dialog is mounted
  useEffect(() => {
    if (!isMounted) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        requestClose();
        return;
      }

      // Optional Tab focus trap inside dialog
      if (trapFocusRef.current && event.key === 'Tab' && dialogRef.current) {
        const focusableElements = dialogRef.current.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        if (focusableElements.length === 0) return;

        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (event.shiftKey) {
          if (document.activeElement === firstElement) {
            event.preventDefault();
            lastElement.focus({ preventScroll: true });
          }
        } else {
          if (document.activeElement === lastElement) {
            event.preventDefault();
            firstElement.focus({ preventScroll: true });
          }
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isMounted, requestClose]);

  // Final cleanup on component unmount (fail-safe for body scroll lock)
  useEffect(() => {
    return () => {
      if (enterRafRef.current) cancelAnimationFrame(enterRafRef.current);
      if (enterTimerRef.current) clearTimeout(enterTimerRef.current);
      if (exitTimerRef.current) clearTimeout(exitTimerRef.current);
      if (focusTimerRef.current) clearTimeout(focusTimerRef.current);

      if (typeof document !== 'undefined') {
        if (originalOverflowRef.current !== null) {
          document.body.style.overflow = originalOverflowRef.current;
          originalOverflowRef.current = null;
        }
        if (originalPaddingRightRef.current !== null) {
          document.body.style.paddingRight = originalPaddingRightRef.current;
          originalPaddingRightRef.current = null;
        }
      }
    };
  }, []);

  return {
    isOpen: logicalIsOpen,
    isMounted,
    animationPhase,
    dialogRef,
    open,
    requestClose,
    toggle,
  };
}
