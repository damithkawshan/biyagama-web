# News Directory - Complete Guide

This directory contains news articles for the Biyagama Pradeshiya Sabha website.

## ⚡ Quick Steps to Add News

1. **Create text file**: `news-004.txt` (next sequential number)
2. **Add content** using the template below
3. **Add image**: `news-004.png` (or .svg, .jpg, .jpeg)
4. **Done!** Refresh the website - news appears automatically

---

## 📋 File Format Template

Copy and paste this into your new `.txt` file:

```
TITLE: 
DATE: YYYY-MM-DD
SUMMARY: 
CONTENT:

```

### Full Example

**File**: `news-004.txt`
```
TITLE: New Library Opens Next Week
DATE: 2025-11-01
SUMMARY: The new public library will open its doors to residents starting November 5th.
CONTENT:
We are excited to announce the opening of our new public library facility. 

The library features modern reading rooms, computer stations, and a dedicated children's section.

All residents are welcome to visit during opening hours: Monday-Friday 9AM-6PM.
```

**Image**: `news-004.png` or `news-004.svg`

---

## ✅ Pre-Publishing Checklist

Before adding your news file, make sure:

- [ ] File named sequentially (news-004, news-005, etc.)
- [ ] Title filled in and descriptive
- [ ] Date in YYYY-MM-DD format (required!)
- [ ] Summary is 1-2 sentences
- [ ] Content added after "CONTENT:" line
- [ ] Image created with matching name
- [ ] Image is 400x300 pixels (recommended)

---

## 📁 File Structure

```
public/news/
├── README.md          (this file)
├── news-001.txt       (news text file)
├── news-001.png       (thumbnail image)
├── news-002.txt
├── news-002.svg
├── news-003.txt
├── news-003.jpg
└── ...
```

---

## 🖼️ Supported Image Formats

- `.png` (preferred for photos)
- `.svg` (preferred for graphics/icons)
- `.jpg` / `.jpeg` (alternative)

**The system automatically tries all formats**, so use whatever you have!

---

## ✨ Automatic Features

✅ **Auto-Discovery**: Just add files - no need to update code
✅ **Multiple Image Formats**: Supports PNG, SVG, JPG, JPEG automatically
✅ **Sequential Loading**: Files are loaded from news-001 onwards
✅ **Smart Validation**: Invalid dates or missing fields are automatically hidden
✅ **Date Sorting**: Automatically sorted by date (newest first)
✅ **Fallback Images**: Missing thumbnails show a placeholder

---

## 📖 Detailed Instructions

### 1. Create a News Text File

Create a new text file with the naming convention: `news-XXX.txt` where XXX is a zero-padded number (e.g., `news-004.txt`, `news-005.txt`)

**Important:** The system automatically scans for files starting from `news-001.txt` and increments sequentially. Try to avoid skipping numbers for best performance!

The file must follow this exact format:

```
TITLE: Your News Title Here
DATE: YYYY-MM-DD
SUMMARY: A brief one or two sentence summary of the news
CONTENT:
The full content of your news article goes here.

You can write multiple paragraphs. Each paragraph should be separated by a blank line.

Add as much detail as you need.
```

### 2. Create a Thumbnail Image

Create a thumbnail image with the same base name as your text file:
- Format: PNG, SVG, JPG, or JPEG (the system will automatically try all formats)
- Recommended size: 400x300 pixels
- Name: `news-XXX.png` or `news-XXX.svg` or `news-XXX.jpg` (matching your text file name)

Example:
- Text file: `news-004.txt`
- Image file: `news-004.png` (or .svg, .jpg, .jpeg)

### 3. That's It!

**No code changes needed!** The system automatically:
- Scans the directory for all news files
- Tries multiple image formats (PNG → SVG → JPG → JPEG)
- Validates dates and required fields
- Filters out invalid entries
- Sorts news by date (newest first)
- Displays all valid news items

---

## 💡 Tips & Best Practices

- Keep the summary concise (1-2 sentences max)
- Use clear, descriptive titles
- Ensure the date format is exactly YYYY-MM-DD (e.g., 2025-10-27)
- Number your files sequentially without gaps for best performance
- Create eye-catching but relevant thumbnail images
- Test your news by checking the browser console for any validation errors
- Use PNG for photos, SVG for graphics/illustrations

---

## 🔍 Validation Rules

News items will be **automatically hidden** if they have:
- Invalid or missing date
- Empty or missing title
- Empty or missing summary

Check your browser console for detailed validation messages if a news item doesn't appear.

---

## 📚 Example Files

See `news-001.txt`, `news-002.txt`, and `news-003.txt` for examples of properly formatted news files.
