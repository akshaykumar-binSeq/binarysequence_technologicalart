# App Shell Routing

The Next.js App Router is the route and composition shell. Domain behavior remains in feature modules. Route files should import feature public exports only, and route metadata should be derived from approved content contracts rather than invented in route components.

The route map in `APP_SHELL_ROUTING.toml` is a proposed contract aligned to Information Architecture v2.0. Reconcile it with the actual App Router tree before implementation.
