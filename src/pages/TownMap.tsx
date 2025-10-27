import React, { useState } from "react";

function TownMap(): JSX.Element {
  const [pdfError, setPdfError] = useState(false);
  const pdfUrl = "/townMap/18_Gampaha_BiyagamaPS.pdf";

  return (
    <div className="container" style={{ padding: "40px 0" }}>
      <h1>නගර සිතියම / Town Map</h1>
      <p style={{ color: 'var(--muted)', marginBottom: '30px' }}>
        බියගම ප්‍රාදේශීය ලේකම් කොට්ඨාසයේ නිල සිතියම / Official map of Biyagama Pradeshiya Sabha division
      </p>

      {pdfError ? (
        <div style={{ 
          padding: '30px', 
          backgroundColor: '#f0f9ff', 
          borderRadius: '8px',
          textAlign: 'center',
          maxWidth: '600px',
          margin: '20px auto'
        }}>
          <p style={{ marginBottom: '20px' }}>
            Unable to display the PDF in your browser.
          </p>
          <a 
            href={pdfUrl} 
            download="Biyagama_Town_Map.pdf"
            className="news-read-more"
            style={{ display: 'inline-block' }}
          >
            📥 Download Town Map PDF
          </a>
        </div>
      ) : (
        <div style={{ 
          width: '100%', 
          backgroundColor: '#f3f4f6',
          borderRadius: '8px',
          overflow: 'hidden',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
        }}>
          <div style={{ 
            padding: '15px', 
            backgroundColor: 'var(--primary)', 
            color: 'white',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '10px'
          }}>
            <span style={{ fontWeight: '600' }}>
              📍 Biyagama Pradeshiya Sabha - Town Map
            </span>
            <a 
              href={pdfUrl} 
              download="Biyagama_Town_Map.pdf"
              style={{ 
                color: 'white', 
                textDecoration: 'none',
                padding: '8px 16px',
                backgroundColor: 'rgba(255, 255, 255, 0.2)',
                borderRadius: '4px',
                fontWeight: '600',
                transition: 'background 0.2s'
              }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.3)'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.2)'}
            >
              📥 Download PDF
            </a>
          </div>
          
          <iframe
            src={pdfUrl}
            style={{
              width: '100%',
              height: 'calc(100vh - 300px)',
              minHeight: '600px',
              border: 'none',
              display: 'block'
            }}
            title="Biyagama Town Map"
            onError={() => setPdfError(true)}
          />
        </div>
      )}

      <div style={{ 
        marginTop: '30px', 
        padding: '20px', 
        backgroundColor: '#f9fafb',
        borderRadius: '8px',
        borderLeft: '4px solid var(--primary)'
      }}>
        <h3 style={{ marginTop: 0, color: 'var(--primary)' }}>
          ℹ️ About the Town Map
        </h3>
        <ul style={{ lineHeight: '1.8', color: 'var(--text)' }}>
          <li>Official administrative boundaries of Biyagama Pradeshiya Sabha</li>
          <li>Grama Niladhari divisions within the area</li>
          <li>Key landmarks and facilities</li>
          <li>Road network and infrastructure</li>
        </ul>
        <p style={{ marginBottom: 0, fontSize: '0.9em', color: 'var(--muted)' }}>
          💡 <strong>Tip:</strong> Use the download button above to save the map for offline reference.
          Most browsers allow zooming within the PDF viewer for better detail.
        </p>
      </div>
    </div>
  );
}

export default TownMap;
