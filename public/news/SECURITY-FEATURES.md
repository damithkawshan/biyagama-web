# Security & Safety Features

This document outlines the security and safety measures implemented in the news loading system.

## 🛡️ Security Features

### 1. Input Sanitization
- **HTML Injection Prevention**: Removes `<` and `>` characters from all text content
- **Path Traversal Protection**: Sanitizes filenames to prevent directory traversal attacks
- **Content Length Limits**: Enforces maximum lengths for all fields
  - Title: 200 characters
  - Summary: 500 characters
  - Content: 10,000 characters
  - Line per file: 1000 lines

### 2. File Size Limits
- **Maximum File Size**: 1MB per text file
- **Pre-flight Check**: Validates Content-Length header before downloading
- **Post-download Check**: Validates actual content size after download

### 3. Request Safety
- **Timeout Protection**: 
  - Per-file timeout: 5 seconds
  - Overall loading timeout: 10 seconds
- **Abort Controllers**: Cancels hanging requests automatically
- **Request Limits**: Maximum 50 files scanned to prevent infinite loops

### 4. Data Validation
- **Date Format Validation**: Enforces YYYY-MM-DD format using regex
- **Required Fields Check**: Validates presence of title, summary, and date
- **Date Validity Check**: Ensures dates are parseable JavaScript Date objects
- **Automatic Filtering**: Invalid items are hidden from display

## 🔒 Safety Features

### 1. Error Handling
- **Graceful Degradation**: Shows error messages instead of crashing
- **Retry Mechanism**: Users can retry failed loads
- **Detailed Logging**: Console logs for debugging
- **Error Boundaries**: Catches and handles all errors

### 2. User Experience Protection
- **Loading States**: Clear feedback during file loading
- **Modal Scroll Lock**: Prevents background scrolling when modal is open
- **Escape Key Handler**: Close modals with Escape key
- **Image Fallback**: Multi-format image loading with fallback placeholder

### 3. Performance Protection
- **Consecutive Failure Limit**: Stops after 3 consecutive missing files
- **Maximum File Limit**: Won't process more than 50 files
- **Line Count Limit**: Stops processing after 1000 lines per file
- **No Infinite Loops**: Multiple safeguards prevent infinite error loops

### 4. Image Loading Safety
- **Multiple Format Attempts**: PNG → SVG → JPG → JPEG → Fallback
- **Error Loop Prevention**: Uses `data-errorHandled` flag
- **Safe Filename Handling**: Sanitizes image paths

## 📊 Validation Process

```
File Load → Size Check → Content Check → Parse → Sanitize → Validate → Filter → Display
    ↓           ↓            ↓            ↓         ↓          ↓         ↓        ↓
  Timeout    Max 1MB    Max length   Extract   Remove     Check    Hide      Show
  5 sec                               data      HTML       date    invalid    valid
```

## 🚨 What Gets Blocked/Filtered

### Automatically Filtered Out:
- ❌ Files with invalid dates
- ❌ Files missing required fields (title, summary, date)
- ❌ Files exceeding size limits
- ❌ Files with malformed content
- ❌ Files that timeout during loading

### Automatically Sanitized:
- 🧹 HTML brackets (`<` and `>`)
- 🧹 Excessive whitespace
- 🧹 Content exceeding length limits
- 🧹 Invalid filename characters

## 💡 Best Practices for Content Creators

1. **Keep Files Small**: Under 100KB is recommended
2. **Use Valid Dates**: Always use YYYY-MM-DD format
3. **Include All Fields**: Don't skip TITLE, DATE, SUMMARY, or CONTENT
4. **Avoid HTML**: Plain text only in content files
5. **Test Locally**: Check browser console for validation errors
6. **Sequential Numbering**: Use consecutive numbers (news-001, news-002, etc.)

## 🔍 Debugging

If news items don't appear, check the browser console for:
- File loading errors
- Validation failures
- Size limit violations
- Date format issues

All filtering actions are logged with detailed reasons.

## 📈 Performance Considerations

- Parallel image format attempts are prevented
- Consecutive failure mechanism reduces unnecessary requests
- Content length limits prevent memory issues
- Timeouts prevent hanging requests
- Maximum file limits prevent excessive processing

## 🔄 Future Enhancements

Potential security improvements for future versions:
- Content Security Policy (CSP) headers
- Rate limiting for file requests
- Checksums for file integrity
- Server-side validation endpoint
- File format verification (magic numbers)
