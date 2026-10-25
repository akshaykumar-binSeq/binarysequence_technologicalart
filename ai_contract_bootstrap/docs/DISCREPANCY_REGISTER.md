# Discrepancy Register

This register records conflicts between source documents, proposed contracts, and the observed repository. Do not treat a proposed resolution as verified until the responsible person approves it and evidence is recorded.

| ID | Area | Discrepancy | Resolution / decision | Status |
|---|---|---|---|---|
| DISC-001 | Contact email | Earlier drafts referenced `contact@binarysequence.art` and `inquiry@binarysequence.art`; current user instruction states there is only one email: `binarysequence.techart@gmail.com`. | Use `binarysequence.techart@gmail.com` as the only currently declared contact address. Verify inbox access and delivery before launch. | Resolved by user instruction; delivery unverified |
| DISC-002 | System Verification Register | Named in an earlier footer draft but absent from the approved screen inventory. | Defer from V1; do not expose a dead or empty route. | Resolved |
| DISC-003 | Sequence Scrubber | Interactive scrubber scope conflicts with lean static baseline. | Static accessible 11-step baseline for V1; interactive scrubber only after explicit scope approval. | Resolved |
| DISC-004 | Response SLA | Earlier form copy implied a two-business-day guarantee. | Do not publish a response SLA until operational capacity is confirmed. | Resolved |
| DISC-005 | Public screens vs. features | Ten public screens, plus onboarding as an implementation gate. | Ten public screens; onboarding (`FEAT-01-ONB`) deferred as a blocking gate per founder decision `DEC-DR04`. Route `/` maps directly to `FEAT-02-HOME` (primary V1 implementation target). | Resolved by DEC-DR04 |
| DISC-006 | Repository ground truth | Proposed stack, directories, routes, and scripts have not been confirmed against the live repository in this package. | Technology stack baseline confirmed by founder decision `DEC-DR03`: Next.js App Router + TypeScript + Firebase. Repository baseline verified. | Resolved by DEC-DR03 |
| DISC-007 | Onboarding state model | Persistent four-state onboarding model may be more complex than needed. | Blocking modal gate deferred from V1 per `DEC-DR04`. Visitors see Home hero immediately. Any future onboarding must be optional, dismissible, and non-blocking. | Resolved by DEC-DR04 |
| DISC-008 | Bot handling | Client-side bot detection is fragile and must not be the SEO strategy. | Keep essential content available without the client gate; treat bot bypass as optional enhancement only. | Resolved as architectural rule |
