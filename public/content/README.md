# Content Assets for Biyagama Pradeshiya Sabha Website

## 📁 Folder Structure

```
content/
├── logos/
│   ├── pradeshiya-sabha-logo.svg       # Main organizational logo (cleaned up)
│   ├── sri-lanka-emblem.svg            # Official Sri Lankan state emblem
│   └── favicon-logo.svg                # Circular logo for favicon
├── backgrounds/
│   ├── hero-background.svg             # Hero section gradient background
│   ├── header-background.svg           # Header area background
│   └── footer-background.svg           # Footer area background
├── images/
│   ├── service-*.svg (6 files)         # Service icons
│   └── person-placeholder.svg          # Placeholder avatar
└── PS/
    └── (15 essential Pradeshiya Sabha photos - cleaned up)
```

## 🎨 Logos

### Pradeshiya Sabha Logo
- **File:** `pradeshiya-sabha-logo.svg`
- **Size:** 400x120px
- **Usage:** Header, official documents, letterheads
- **Format:** SVG (scalable)
- **Colors:** #004080 (primary), #0059b3 (secondary), #FFD700 (accent)

### Sri Lanka State Emblem
- **File:** `sri-lanka-emblem.svg`
- **Size:** 150x150px
- **Usage:** Official documents, government correspondence
- **Format:** SVG (scalable)
- **Note:** Simplified artistic representation

### Favicon Logo
- **File:** `favicon-logo.svg`
- **Size:** 100x100px
- **Usage:** Browser tab icon, mobile app icon
- **Format:** SVG (can be converted to ICO/PNG)

## 🖼️ Backgrounds

### Hero Background
- **File:** `hero-background.svg`
- **Size:** 1200x400px
- **Usage:** Main landing section background
- **Features:** Gradient overlay, geometric patterns, wave effects

### Header Background
- **File:** `header-background.svg`
- **Size:** 1920x300px (full width)
- **Usage:** Top header area
- **Features:** Gradient, dot pattern, gold accent line

### Footer Background
- **File:** `footer-background.svg`
- **Size:** 1920x200px (full width)
- **Usage:** Bottom footer area
- **Features:** Dark gradient, wave pattern, subtle stars

## 🎨 Color Palette

### Primary Colors
- **Navy Blue:** #004080 - Main brand color
- **Sky Blue:** #0059b3 - Secondary brand color
- **Light Blue:** #e6f2ff - Backgrounds and highlights

### Accent Colors
- **Gold:** #FFD700 - State emblem, special highlights
- **Dark Blue:** #003366 - Darker elements
- **Dark Navy:** #002850 - Footer, deep backgrounds

### Neutral Colors
- **White:** #ffffff - Text on dark backgrounds
- **Light Gray:** #f4f4f4 - Page backgrounds
- **Dark Gray:** #333333 - Body text

## 📐 Usage Guidelines

### Logo Usage
1. Maintain minimum clear space around logos
2. Don't distort or change aspect ratios
3. Use on contrasting backgrounds
4. Maintain color integrity (don't recolor without approval)

### Background Usage
1. Use as decorative elements
2. Ensure text readability over backgrounds
3. Can be tiled or stretched as needed
4. Maintain opacity for overlays

## 🔧 File Formats

### SVG (Scalable Vector Graphics)
- **Advantages:** Scales without quality loss, small file size
- **Best For:** Logos, icons, backgrounds
- **Browser Support:** All modern browsers

### Converting to Other Formats
If you need PNG, JPG, or ICO formats:
1. Open SVG in browser
2. Use online converter (e.g., CloudConvert)
3. Or use design tools (Adobe Illustrator, Inkscape)

## 📱 Responsive Usage

All assets are designed to work across devices:
- **Desktop:** Full resolution
- **Tablet:** Medium resolution
- **Mobile:** Optimized for smaller screens

## 🚀 Implementation Examples

### HTML Logo Usage
```html
<img src="content/logos/pradeshiya-sabha-logo.svg" alt="Biyagama Pradeshiya Sabha">
```

### CSS Background Usage
```css
.hero {
    background-image: url('content/backgrounds/hero-background.svg');
    background-size: cover;
}
```

### Favicon Usage
```html
<link rel="icon" type="image/svg+xml" href="content/logos/favicon-logo.svg">
```

## 📝 Customization Notes

### To Update Colors
1. Open SVG files in text editor
2. Find color hex codes (e.g., #004080)
3. Replace with new colors
4. Save and test

### To Modify Logos
1. Use vector editing software (Inkscape, Adobe Illustrator)
2. Open SVG files
3. Make changes
4. Export as SVG

## ⚖️ Legal & Usage Rights

- **Organization:** Biyagama Pradeshiya Sabha
- **Usage:** Official use for government purposes
- **State Emblem:** Official emblem of Sri Lanka - use with respect
- **Restrictions:** Don't use for commercial purposes without authorization

## 🔄 Version History

- **v1.0** (October 25, 2025) - Initial asset creation
  - Created main logo
  - Added Sri Lankan state emblem
  - Generated background patterns
  - Established color palette

## 📞 Contact for Assets

For high-resolution versions or custom variations:
- Email: info@biyagama.ps.lk
- Phone: 011-2411234
- Department: IT & Communications

---

**Note:** All SVG files are optimized for web use and maintain quality at any size.
