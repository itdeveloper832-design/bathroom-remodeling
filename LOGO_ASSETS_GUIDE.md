# ARZ Home Remodeling - Logo Assets Guide

## Logo Files Created

### 1. Horizontal Logo
**File:** `public/images/arz-logo-horizontal.jpg`
- **Purpose:** Primary logo for header, navigation, and main branding
- **Size:** Best for desktop and tablet displays
- **Usage:** Website header, emails, letterheads, large displays
- **Background:** White background
- **Format:** JPG (optimized for web)

### 2. Square Icon Logo
**File:** `public/images/arz-logo-icon.jpg`
- **Purpose:** App icon, favicon, small square spaces
- **Size:** Works at any size from 16px to 512px+
- **Usage:** Favicon, social media profiles, app icons, square badges
- **Background:** White background with safe margins
- **Format:** JPG (optimized for web)

### 3. Vertical Logo
**File:** `public/images/arz-logo-vertical.jpg`
- **Purpose:** Stacked/vertical layout for mobile and small spaces
- **Size:** Icon on top, text below
- **Usage:** Mobile apps, narrow sidebars, vertical spaces, business cards
- **Background:** White background
- **Format:** JPG (optimized for web)

### 4. Dark Background Logo
**File:** `public/images/arz-logo-dark.jpg`
- **Purpose:** Logo for dark backgrounds and footers
- **Size:** Horizontal layout with light colors
- **Usage:** Dark website sections, footers, dark backgrounds
- **Background:** Transparent/dark background with light logo
- **Format:** JPG (optimized for web)

## Design Elements

- **Color Scheme:** Blue and Teal (representing water/bathrooms and professionalism)
- **Style:** Modern, clean, geometric
- **Typography:** Professional sans-serif fonts
- **Icon:** Stylized bathroom/water symbol for instant recognition
- **Vibe:** Trustworthy, professional, modern, local

## Implementation in Website

### Header Logo
Update the header to use the new horizontal logo:
```tsx
src="/images/arz-logo-horizontal.jpg"
alt="ARZ Home Remodeling - Bathroom Remodeling Chandler AZ"
```

### Favicon
Update favicon to use the square icon:
```html
<link rel="icon" href="/images/arz-logo-icon.jpg" type="image/jpeg" />
```

### Footer Logo
Use the dark background version:
```tsx
src="/images/arz-logo-dark.jpg"
alt="ARZ Home Remodeling Logo"
```

### Social Media
Use the square icon for:
- Facebook profile picture
- Instagram profile picture
- LinkedIn company logo
- Twitter profile picture

### Mobile App
Use the vertical logo or icon for:
- App icon
- Splash screen
- App store listing

## Logo Usage Best Practices

1. **Clear Space:** Always maintain clear space around logo (minimum 10% of logo height)
2. **Minimum Size:** Don't use smaller than 32px width on web
3. **Colors:** Use official blue/teal colors consistently
4. **Don't Distort:** Never stretch or squash the logo
5. **Don't Rotate:** Keep logo horizontal/vertical as designed
6. **Backgrounds:** Use white or dark neutral backgrounds only
7. **Contrast:** Ensure sufficient contrast with background

## File Management

All logo files are located in:
```
/public/images/
  ├── arz-logo-horizontal.jpg    (Primary logo)
  ├── arz-logo-icon.jpg           (App icon)
  ├── arz-logo-vertical.jpg       (Mobile/vertical)
  └── arz-logo-dark.jpg           (Dark background)
```

## Future Enhancements

Consider creating additional formats:
- SVG versions for scalability
- PNG with transparency
- WebP versions for better compression
- Different color variations (monochrome, single color)
- High-resolution versions for print (300 DPI)

## Brand Guidelines

**Company Name:** ARZ Home Remodeling
**Primary Colors:** Blue & Teal (professional, trustworthy)
**Secondary Colors:** Gray & White (clean, modern)
**Typography:** Sans-serif (modern, professional)
**Tone:** Professional, local, experienced, trustworthy

---

**Created:** May 21, 2026
**Status:** Ready for Production
**Quality:** Professional Grade
