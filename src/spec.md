# Specification

## Summary
**Goal:** Locate the Internet Computer canister ID for the deployed Raavni Agrobyte application and provide comprehensive DNS configuration instructions for pointing raavni.com to the canister using Cloudflare.

**Planned changes:**
- Search deployment configuration files (dfx.json, canister configs, deployment metadata) to extract the canister ID
- Generate a DNS configuration guide document containing the full canister URL (https://[canister-id].ic0.app)
- Provide step-by-step Cloudflare DNS setup instructions with exact CNAME record settings
- Include SSL/TLS configuration recommendations for Cloudflare
- Document DNS propagation timeline and verification steps

**User-visible outcome:** The user receives the full canister URL for their deployed application and a complete, actionable guide for configuring Cloudflare DNS to point raavni.com to the Internet Computer canister, including SSL setup and verification steps.
