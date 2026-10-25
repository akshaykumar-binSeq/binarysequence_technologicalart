# Global Design System

**Version:** 1.1.0 (proposed baseline)  
**Direction:** Swiss Laboratory Meets Natural Observation

The design system should communicate precision without corporate sterility and natural observation without tourism or wellness clichés. Use space deliberately, keep interfaces calm, and ensure the visual system serves content hierarchy and usability.

## Token authority

Exact token values live in `GLOBAL_DESIGN_SYSTEM.toml`. Do not redefine colors, type scales, spacing, breakpoints, or motion values in prose. Feature-specific tokens must reference global tokens or be recorded as an approved exception in that feature's `STYLES_THEME.toml`.

## Accessibility and motion

- Keyboard operation and visible focus are required.
- Respect `prefers-reduced-motion`; reduced-motion mode must remove or materially reduce non-essential motion.
- Contrast thresholds are targets that must be verified for actual foreground/background pairs, not assumed from token names.
- The CLS budget is a target (`<= 0.05`), not a guaranteed outcome. Measure the rendered page.

## Implementation note

The current repository's font-loading method, CSS organization, breakpoints, and token conventions must be inspected before mapping these proposed tokens to production CSS variables.
