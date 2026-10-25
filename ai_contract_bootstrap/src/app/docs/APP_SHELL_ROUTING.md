# App Shell Routing

The Next.js App Router is the approved route and composition shell (`DEC-DR03`). Route `/` maps directly to `FEAT-02-HOME` (`DEC-DR04`), displaying the Home hero immediately without mandatory onboarding gates. Domain behavior remains in feature modules. Route files should import feature public exports only, and route metadata should be derived from approved content contracts rather than invented in route components.

The route map in `APP_SHELL_ROUTING.toml` is the confirmed canonical baseline aligned to Information Architecture v2.0, `DEC-DR03`, and `DEC-DR04`. Reconcile it with the actual App Router tree before implementation.
