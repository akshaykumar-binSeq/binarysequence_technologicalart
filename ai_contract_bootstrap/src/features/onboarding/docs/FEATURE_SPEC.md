# Onboarding Feature Specification

**Feature ID:** `FEAT-01-ONB`  
**Status:** Planned contract; not evidence of implementation.

## Purpose

Provide an optional introduction without blocking access to essential site content. The implementation must degrade safely when browser storage is unavailable and must respect reduced-motion preferences.

## Decisions requiring implementation review

- The onboarding state machine is only justified if the user experience requires persistent completion/skipping. Keep it simpler if a dismissal preference is sufficient.
- Crawler handling must not be the primary SEO strategy. Essential page content must remain available in server-rendered/static HTML or progressive enhancement paths.
- The contract's `IN_MEMORY` fallback cannot persist state across reloads; its behavior must be documented as session-only.
- Focus management, Escape behavior, dialog semantics, and restoring focus must be tested with keyboard and assistive technology.

## Invariants

- `ONB-INV-001`: Reduced-motion preference bypasses non-essential introduction motion.
- `ONB-INV-002`: Crawlers must not be trapped behind a blocking client-only gate; core content remains accessible.
- `ONB-INV-003`: Storage failures do not produce unhandled exceptions.
- `ONB-INV-004`: Escape dismisses the sequence when it is safe and appropriate to do so.

## Acceptance evidence

Unit tests for state transitions; storage adapter tests; keyboard/focus tests; reduced-motion test; production build; and manual verification that essential content remains accessible without client storage.
