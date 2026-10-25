'use client';

/**
 * useDisclosure — Reusable Hook for Accessible Disclosures, Accordions & Expandable Panels
 *
 * Authority: Level 3 Screen, View, Layout, Motion & Sensory Contract (§7.4)
 * Authority: Level 4 DDD Architectural Guidelines (§5.4)
 * Architectural Boundary: src/core/interaction/ (Shared Infrastructure)
 *
 * Implements:
 * - Controlled and uncontrolled disclosure state
 * - ARIA trigger and panel attribute generators
 * - Keyboard support (Enter, Space to toggle)
 * - Safe transition callback hooks
 */

import { useState, useCallback, useId } from 'react';

export interface UseDisclosureOptions {
  /** Initial open state (default: false) */
  defaultIsOpen?: boolean;
  /** Controlled open state */
  isOpen?: boolean;
  /** Callback fired on state change */
  onToggle?: (isOpen: boolean) => void;
  /** Custom base ID for aria controls linkage */
  id?: string;
}

export interface UseDisclosureReturn {
  /** Current open state */
  isOpen: boolean;
  /** Open the disclosure */
  open: () => void;
  /** Close the disclosure */
  close: () => void;
  /** Toggle the disclosure */
  toggle: () => void;
  /** Props to spread onto the toggle button element */
  getButtonProps: (
    overrideProps?: React.ButtonHTMLAttributes<HTMLButtonElement>
  ) => React.ButtonHTMLAttributes<HTMLButtonElement> & {
    id: string;
    type: 'button';
    'aria-expanded': boolean;
    'aria-controls': string;
  };
  /** Props to spread onto the collapsible panel element */
  getPanelProps: (
    overrideProps?: React.HTMLAttributes<HTMLElement>
  ) => React.HTMLAttributes<HTMLElement> & {
    id: string;
    'aria-labelledby': string;
    hidden?: boolean;
  };
}

export function useDisclosure({
  defaultIsOpen = false,
  isOpen: controlledIsOpen,
  onToggle,
  id: customId,
}: UseDisclosureOptions = {}): UseDisclosureReturn {
  const [internalIsOpen, setInternalIsOpen] = useState<boolean>(defaultIsOpen);
  const generatedId = useId();
  const baseId = customId || generatedId;

  const isControlled = controlledIsOpen !== undefined;
  const isOpen = isControlled ? controlledIsOpen : internalIsOpen;

  const buttonId = `disclosure-btn-${baseId}`;
  const panelId = `disclosure-panel-${baseId}`;

  const open = useCallback(() => {
    if (!isControlled) {
      setInternalIsOpen(true);
    }
    onToggle?.(true);
  }, [isControlled, onToggle]);

  const close = useCallback(() => {
    if (!isControlled) {
      setInternalIsOpen(false);
    }
    onToggle?.(false);
  }, [isControlled, onToggle]);

  const toggle = useCallback(() => {
    const next = !isOpen;
    if (!isControlled) {
      setInternalIsOpen(next);
    }
    onToggle?.(next);
  }, [isControlled, isOpen, onToggle]);

  const getButtonProps = useCallback(
    (
      overrideProps: React.ButtonHTMLAttributes<HTMLButtonElement> = {}
    ): React.ButtonHTMLAttributes<HTMLButtonElement> & {
      id: string;
      type: 'button';
      'aria-expanded': boolean;
      'aria-controls': string;
    } => {
      const { onClick, onKeyDown, ...rest } = overrideProps;
      return {
        ...rest,
        id: buttonId,
        type: 'button',
        'aria-expanded': isOpen,
        'aria-controls': panelId,
        onClick: (e: React.MouseEvent<HTMLButtonElement>) => {
          onClick?.(e);
          if (!e.defaultPrevented) {
            toggle();
          }
        },
        onKeyDown: (e: React.KeyboardEvent<HTMLButtonElement>) => {
          onKeyDown?.(e);
          if (!e.defaultPrevented && (e.key === 'Enter' || e.key === ' ')) {
            e.preventDefault();
            toggle();
          }
        },
      };
    },
    [buttonId, isOpen, panelId, toggle]
  );

  const getPanelProps = useCallback(
    (
      overrideProps: React.HTMLAttributes<HTMLElement> = {}
    ): React.HTMLAttributes<HTMLElement> & {
      id: string;
      'aria-labelledby': string;
      hidden?: boolean;
    } => {
      return {
        ...overrideProps,
        id: panelId,
        'aria-labelledby': buttonId,
        hidden: !isOpen,
      };
    },
    [buttonId, isOpen, panelId]
  );

  return {
    isOpen,
    open,
    close,
    toggle,
    getButtonProps,
    getPanelProps,
  };
}
