# Image Optimization & WebP Conversion Strategy

For a high-end remodeling site, image quality is paramount, but payload size must be minimized to ensure fast discovery and a "Green" LCP.

## 1. Current Audit Findings
- **Logo**: `/images/web-log-image.png` (PNG format).
- **Hero**: `/images/hero-bathroom.jpg` (JPG format).
- **Gallery**: `/images/projects/*.png` (**700KB - 720KB each**).
- **Optimized Assets**: `/images/optimized/*.webp` (30KB - 130KB each).

## 2. WebP/AVIF Conversion Plan

### Phase 1: Immediate Conversions (High Impact)
The project-gallery "after" images are the biggest performance bottleneck.
- **Convert**: All PNGs in `public/images/projects/` to WebP with 75% quality.
- **Expected Saving**: 700KB → ~60KB per image (91% reduction).
- **Command**: `magick mogrify -format webp -quality 75 public/images/projects/*.png`

### Phase 2: Branding Assets
- **Logo**: Convert `web-log-image.png` to WebP. Ensure transparency is preserved.
- **Favicon**: Already optimized (`compressed-favicon.png`).

## 3. Image Loading Implementation (Code-Level)

### Priority Loading (Above Fold)
- **Rule**: Never lazy-load the Hero image.
- **Fix**: Use `priority`, `fetchPriority="high"`, and `decoding="sync"` on all `Hero` and `ServiceHero` images.
- **Preload**: Next.js automatically generates `<link rel="preload">` when `priority` is used.

### Lazy Loading (Below Fold)
- **Rule**: All gallery, testimonial, and secondary service images must be lazy-loaded.
- **Implementation**: Next.js `Image` handles this by default. Avoid `priority` for anything below 1000px from the top.

### Responsive Sizes
- **Issue**: Standardizing `sizes` attribute prevents mobile devices from downloading desktop-sized images.
- **Recommendation**:
  ```tsx
  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
  ```

## 4. Blur Placeholders (Perceived Performance)
To eliminate the "white flash" before an image loads:
- Use `placeholder="blur"` for statically imported images.
- For dynamic paths (like in the gallery), use a generic base64 `blurDataURL` or a CSS background color that matches the dominant color of the image.

## 5. Automation Strategy
For future uploads, implement a pre-commit hook or a build script that automatically:
1. Resizes large source images to max 1920px width.
2. Converts to WebP.
3. Generates a low-quality blur preview.
