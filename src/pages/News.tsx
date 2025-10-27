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

  useEffect(() => {
    loadNews();
  }, []);

  const loadNews = async () => {
    try {
      const items: NewsItem[] = [];
      let fileIndex = 1;
      let consecutiveFailures = 0;
      const maxConsecutiveFailures = 3; // Stop after 3 consecutive missing files
      const maxFiles = 50; // Safety limit to prevent infinite loops

      console.log('Starting to load news files...');

      // Automatically scan for news files starting from news-001, news-002, etc.
      while (consecutiveFailures < maxConsecutiveFailures && fileIndex <= maxFiles) {
        const fileName = `news-${String(fileIndex).padStart(3, '0')}`;
        
        try {
          const response = await fetch(`/news/${fileName}.txt`);
          console.log(`Trying to fetch: /news/${fileName}.txt - Status: ${response.status}`);
          
          if (response.ok) {
            const text = await response.text();
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
          console.log(`Error fetching ${fileName}:`, err);
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
      setLoading(false);
    } catch (err) {
      console.error('Error in loadNews:', err);
      setError('Failed to load news items');
      setLoading(false);
    }
  };

  const parseNewsFile = (text: string, fileName: string): NewsItem => {
    const lines = text.split('\n');
    let title = '';
    let date = '';
    let summary = '';
    let content = '';
    let currentSection = '';

    for (const line of lines) {
      if (line.startsWith('TITLE:')) {
        title = line.substring(6).trim();
      } else if (line.startsWith('DATE:')) {
        date = line.substring(5).trim();
      } else if (line.startsWith('SUMMARY:')) {
        summary = line.substring(8).trim();
      } else if (line.startsWith('CONTENT:')) {
        currentSection = 'CONTENT';
      } else if (currentSection === 'CONTENT' && line.trim()) {
        content += line + '\n';
      }
    }

    // Try common image formats - browser will use the first one that exists
    // The onError handler in the component will handle fallback
    const thumbnail = `/news/${fileName}.png`;

    return {
      id: fileName,
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
      <div className="container" style={{ padding: "40px 0" }}>
        <h1> පුවත් සහ නිවේදන</h1>
        <p style={{ color: 'red' }}>{error}</p>
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
                    // Try alternate formats: png -> svg -> jpg -> fallback
                    if (img.src.endsWith('.png')) {
                      img.src = img.src.replace('.png', '.svg');
                    } else if (img.src.endsWith('.svg')) {
                      img.src = img.src.replace('.svg', '.jpg');
                    } else if (img.src.endsWith('.jpg')) {
                      img.src = img.src.replace('.jpg', '.jpeg');
                    } else {
                      img.src = '/content/images/person-placeholder.svg';
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
