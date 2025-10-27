# Town Map Directory

This directory contains the official town map PDF for the Biyagama Pradeshiya Sabha website.

## Current File

- `18_Gampaha_BiyagamaPS.pdf` - Official administrative map of Biyagama Pradeshiya Sabha division

## How to Update the Map

### To replace the existing map:

1. **Prepare your new PDF file**
   - Ensure it's a valid PDF document
   - Recommended file size: Under 10MB for optimal loading
   - Use a descriptive filename

2. **Replace the file**
   - Delete or rename the old PDF: `18_Gampaha_BiyagamaPS.pdf`
   - Add your new PDF file to this directory

3. **Update the code** (if filename changed)
   - Open: `src/pages/TownMap.tsx`
   - Update line 6: `const pdfUrl = "/townMap/YOUR_NEW_FILENAME.pdf";`

### To add additional maps:

If you want to display multiple maps or allow users to choose between different map views:

1. Add your PDF files to this directory
2. Modify `src/pages/TownMap.tsx` to include a selector/tabs for different maps
3. Update the component to switch between different PDF URLs

## Features

The Town Map page includes:
- ✅ Embedded PDF viewer (displays directly in browser)
- ✅ Download button for offline access
- ✅ Fallback for browsers that can't display PDFs
- ✅ Responsive design for mobile and desktop
- ✅ Bilingual labels (Sinhala/English)

## Technical Notes

- **Path**: Files in this directory are served from `/townMap/` URL path
- **Format**: PDF files only (recommended)
- **Size**: Keep files under 10MB for best performance
- **Compatibility**: Modern browsers will display the PDF inline; older browsers will prompt to download

## Troubleshooting

**PDF doesn't display:**
- Check if the file exists in the `public/townMap/` directory
- Verify the filename matches exactly in `TownMap.tsx`
- Check browser console for errors
- Try using a different browser (some browsers have better PDF support)

**File is too large:**
- Compress the PDF using online tools or Adobe Acrobat
- Consider splitting large maps into multiple sections
- Optimize images within the PDF

**Download button not working:**
- Ensure the PDF path is correct
- Check browser console for 404 errors
- Verify file permissions
