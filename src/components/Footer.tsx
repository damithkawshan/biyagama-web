import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="products-footer">
      <div className="footer-container">
        <div className="footer-grid">
          <div className="footer-section">
            <h4 className="footer-title">බියගම ප්‍රාදේශීය සභාව</h4>
            <p className="footer-text">දෙල්ගොඩ ප්‍රධාන කාර්යාලය</p>
            <p className="footer-copyright">&copy; 2025 සියලු හිමිකම් ඇවිරිණි.</p>
          </div>
          <div className="footer-section">
            <h4 className="footer-section-title">සම්බන්ධතා</h4>
            <ul className="footer-contact-list">
              <li><span className="footer-label">දුරකථන:</span> 0112402226 / 0112403311</li>
              <li><span className="footer-label">ෆැක්ස්:</span> 0112403194</li>
              <li>
                <span className="footer-label">ඊමේල්:</span>{' '}
                <a href="mailto:biyagama24@gmail.com" className="footer-link">
                  biyagama24@gmail.com
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-section">
            <h4 className="footer-section-title">වෙනත් සබැඳියන්</h4>
            <ul className="footer-links-list">
              <li><a href="#" className="footer-link">ප්‍රධාන ලේකම් කාර්යාලය (බ. ප.)</a></li>
              <li><a href="#" className="footer-link">රාජ්‍ය තොරතුරු කේන්ද්‍රය</a></li>
              <li><a href="#" className="footer-link">බාගත කිරීම් (පෝරම)</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
