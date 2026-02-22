# Specification

## Summary
**Goal:** Replace founder profile image with new version using ultra-aggressive cache-busting to ensure immediate browser update.

**Planned changes:**
- Process BarnaliFinalSSize.png and save as unique filename (barnali-ceo-v34.dim_400x400.png) in generated assets directory
- Update CoreTeam component to reference new unique filename with timestamp query parameter
- Implement triple-layer cache-busting: unique filename, timestamp query parameter, and React key prop based on build version
- Add explicit cache-control attributes to image element to prevent browser caching

**User-visible outcome:** Founder profile image displays the new professional portrait immediately across all browsers and devices without requiring cache clearing.
