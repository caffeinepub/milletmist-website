# Specification

## Summary
**Goal:** Replace the founder profile image with BarnaliFinalSSF.png using v43 versioning and comprehensive cache-busting to ensure the correct image displays across all browsers and CDN layers.

**Planned changes:**
- Process BarnaliFinalSSF.png to 400x400 dimensions with v43 filename (barnali-founder-v43.dim_400x400.png)
- Update CoreTeam component to reference the new v43 image filename
- Implement maximum cache-busting strategy combining unique filename, timestamp query parameter, unique React key prop, cache-control headers, and DOM manipulation
- Verify before deployment that CoreTeam component correctly references barnali-founder-v43.dim_400x400.png

**User-visible outcome:** The Core Team section displays the correct founder profile image from BarnaliFinalSSF.png without any caching issues, maintaining consistency with other team member images.
