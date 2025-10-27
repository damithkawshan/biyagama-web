import React, { useEffect, useState } from "react";

interface NewsItem {
  id: string;
  title: string;
  date: string;
  summary: string;
  content: string;
  thumbnail: string;
}

function News(): JSX.Element {
  const [newsItems, setNewsItems] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedNews, setSelectedNews] = useState<NewsItem | null>(null);
  const [retryCount, setRetryCount] = useState(0);

  useEffect(() => {
    loadNews();
  }, []);

  const handleRetry = () => {
    setError(null);
    setLoading(true);
    setRetryCount(prev => prev + 1);
    loadNews();
  };

  const loadNews = async () => {
    const loadingTimeout = setTimeout(() => {
      console.error('News loading timeout - taking too long');
      setError('Loading timeout. Please refresh the page.');
      setLoading(false);
    }, 10000); // 10 second timeout

    try {
      const items: NewsItem[] = [];
      let fileIndex = 1;
      let consecutiveFailures = 0;
      const maxConsecutiveFailures = 3; // Stop after 3 consecutive missing files
      const maxFiles = 50; // Safety limit to prevent infinite loops
      const maxFileSize = 1024 * 1024; // 1MB max file size

      console.log('Starting to load news files...');

      // Automatically scan for news files starting from news-001, news-002, etc.
      while (consecutiveFailures < maxConsecutiveFailures && fileIndex <= maxFiles) {
        const fileName = `news-${String(fileIndex).padStart(3, '0')}`;
        
        try {
          // Add timeout for individual fetch requests
          const controller = new AbortController();
          const fetchTimeout = setTimeout(() => controller.abort(), 5000); // 5 second timeout per file
          
          const response = await fetch(`/news/${fileName}.txt`, {
            signal: controller.signal
          });
          clearTimeout(fetchTimeout);
          
          console.log(`Trying to fetch: /news/${fileName}.txt - Status: ${response.status}`);
          
          if (response.ok) {
            // Check content length before reading
            const contentLength = response.headers.get('content-length');
            if (contentLength && parseInt(contentLength) > maxFileSize) {
              console.warn(`File ${fileName} exceeds maximum size (${maxFileSize} bytes)`);
              consecutiveFailures++;
              fileIndex++;
              continue;
            }

            const text = await response.text();
            
            // Additional safety check on text length
            if (text.length > maxFileSize) {
              console.warn(`File ${fileName} content exceeds maximum size`);
              consecutiveFailures++;
              fileIndex++;
              continue;
            }

            const newsItem = parseNewsFile(text, fileName);
            items.push(newsItem);
            consecutiveFailures = 0; // Reset counter on success
            console.log(`Successfully loaded: ${fileName}`);
          } else {
            consecutiveFailures++;
            console.log(`File not found: ${fileName} (${consecutiveFailures}/${maxConsecutiveFailures})`);
          }
        } catch (err) {
          consecutiveFailures++;
          if (err instanceof Error && err.name === 'AbortError') {
            console.log(`Timeout fetching ${fileName}`);
          } else {
            console.log(`Error fetching ${fileName}:`, err);
          }
        }
        
        fileIndex++;
      }

      console.log(`Finished loading. Found ${items.length} news items.`);

      // Filter out items with invalid dates or missing required fields
      const validItems = items.filter(item => {
        // Check if date is valid
        const dateObj = new Date(item.date);
        const hasValidDate = !isNaN(dateObj.getTime()) && item.date.trim() !== '';
        
        // Check if required fields are present
        const hasTitle = item.title && item.title.trim() !== '';
        const hasSummary = item.summary && item.summary.trim() !== '';
        
        const isValid = hasValidDate && hasTitle && hasSummary;
        
        if (!isValid) {
          console.warn(`Filtering out ${item.id}:`, {
            hasValidDate,
            hasTitle,
            hasSummary,
            date: item.date,
            title: item.title
          });
        }
        
        return isValid;
      });

      console.log(`After filtering: ${validItems.length} valid news items.`);

      if (validItems.length === 0) {
        console.warn('No valid news files found in /news directory');
      }

      // Sort by date (newest first)
      validItems.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
      setNewsItems(validItems);
      clearTimeout(loadingTimeout);
      setLoading(false);
    } catch (err) {
      console.error('Error in loadNews:', err);
      setError('Failed to load news items');
      clearTimeout(loadingTimeout);
      setLoading(false);
    }
  };

  const sanitizeText = (text: string, maxLength: number): string => {
    // Remove potentially dangerous characters and limit length
    return text
      .replace(/[<>]/g, '') // Remove HTML brackets
      .substring(0, maxLength)
      .trim();
  };

  const parseNewsFile = (text: string, fileName: string): NewsItem => {
    // Safety limits
    const MAX_TITLE_LENGTH = 200;
    const MAX_SUMMARY_LENGTH = 500;
    const MAX_CONTENT_LENGTH = 10000;
    
    const lines = text.split('\n');
    let title = '';
    let date = '';
    let summary = '';
    let content = '';
    let currentSection = '';
    let lineCount = 0;
    const maxLines = 1000; // Prevent processing extremely large files

    for (const line of lines) {
      lineCount++;
      if (lineCount > maxLines) {
        console.warn(`File ${fileName} exceeds maximum line count`);
        break;
      }

      if (line.startsWith('TITLE:')) {
        title = sanitizeText(line.substring(6), MAX_TITLE_LENGTH);
      } else if (line.startsWith('DATE:')) {
        date = line.substring(5).trim();
        // Validate date format (YYYY-MM-DD)
        if (!/^\d{4}-\d{2}-\d{2}$/.test(date)) {
          console.warn(`Invalid date format in ${fileName}: ${date}`);
        }
      } else if (line.startsWith('SUMMARY:')) {
        summary = sanitizeText(line.substring(8), MAX_SUMMARY_LENGTH);
      } else if (line.startsWith('CONTENT:')) {
        currentSection = 'CONTENT';
      } else if (currentSection === 'CONTENT' && line.trim()) {
        if (content.length < MAX_CONTENT_LENGTH) {
          content += sanitizeText(line, 1000) + '\n';
        }
      }
    }

    // Validate thumbnail path to prevent path traversal
    const safeFileName = fileName.replace(/[^a-zA-Z0-9-_]/g, '');
    const thumbnail = `/news/${safeFileName}.png`;

    return {
      id: safeFileName,
      title,
      date,
      summary,
      content: content.trim(),
      thumbnail,
    };
  };

  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const handleReadMore = (item: NewsItem) => {
    setSelectedNews(item);
  };

  const handleCloseModal = () => {
    setSelectedNews(null);
  };

  // Close modal on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && selectedNews) {
        handleCloseModal();
      }
    };
    
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [selectedNews]);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedNews) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedNews]);

  if (loading) {
    return (
      <div className="container" style={{ padding: "40px 0", textAlign: "center" }}>
        <h1> පුවත් සහ නිවේදන</h1>
        <p>Loading news...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container" style={{ padding: "40px 0", textAlign: "center" }}>
        <h1> පුවත් සහ නිවේදන</h1>
        <div style={{ 
          padding: '30px', 
          backgroundColor: '#fee', 
          borderRadius: '8px',
          maxWidth: '600px',
          margin: '20px auto'
        }}>
          <p style={{ color: '#c00', marginBottom: '15px', fontSize: '1.1em' }}>
            ⚠️ {error}
          </p>
          <button 
            onClick={handleRetry}
            className="news-read-more"
            style={{ margin: '0 auto' }}
          >
            🔄 Retry Loading News
          </button>
          {retryCount > 0 && (
            <p style={{ color: '#666', marginTop: '10px', fontSize: '0.9em' }}>
              Retry attempt: {retryCount}
            </p>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="container" style={{ padding: "40px 0" }}>
      <h1> පුවත් සහ නිවේදන</h1>
      <p style={{ color: 'var(--muted)', marginBottom: '30px' }}>
       බියගම ප්‍රාදේශීය සභාවේ නවතම පුවත් සහ නිවේදන පිළිබඳව යාවත්කාලීනව සිටින්න..
      </p>

      {newsItems.length === 0 ? (
        <p>මෙම මොහොතේ පුවත් අයිතම කිසිවක් ලබා ගත නොහැක.</p>
      ) : (
        <div className="news-grid">
          {newsItems.map((item) => (
            <div key={item.id} className="news-card">
              <div className="news-thumbnail">
                <img 
                  src={item.thumbnail} 
                  alt={item.title}
                  onError={(e) => {
                    const img = e.currentTarget;
                    // Prevent infinite error loops
                    if (img.dataset.errorHandled === 'true') {
                      return;
                    }
                    
                    // Try alternate formats: png -> svg -> jpg -> fallback
                    if (img.src.endsWith('.png')) {
                      img.src = img.src.replace('.png', '.svg');
                    } else if (img.src.endsWith('.svg')) {
                      img.src = img.src.replace('.svg', '.jpg');
                    } else if (img.src.endsWith('.jpg')) {
                      img.src = img.src.replace('.jpg', '.jpeg');
                    } else {
                      img.src = '/content/images/person-placeholder.svg';
                      img.dataset.errorHandled = 'true';
                    }
                  }}
                />
              </div>
              <div className="news-content">
                <div className="news-date">{formatDate(item.date)}</div>
                <h3 className="news-title">{item.title}</h3>
                <p className="news-summary">{item.summary}</p>
                <button 
                  className="news-read-more"
                  onClick={() => handleReadMore(item)}
                >
                  තවත් කියවන්න →
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Modal for full news content */}
      {selectedNews && (
        <div className="news-modal-overlay" onClick={handleCloseModal}>
          <div className="news-modal" onClick={(e) => e.stopPropagation()}>
            <button className="news-modal-close" onClick={handleCloseModal}>×</button>
            <img 
              src={selectedNews.thumbnail} 
              alt={selectedNews.title}
              className="news-modal-image"
            />
            <div className="news-modal-date">{formatDate(selectedNews.date)}</div>
            <h2>{selectedNews.title}</h2>
            <div className="news-modal-content">
              {selectedNews.content.split('\n').map((paragraph, idx) => (
                paragraph.trim() && <p key={idx}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default News;
