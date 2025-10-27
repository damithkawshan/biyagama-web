import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, About, Products, News, TownMap } from "./pages";
import Leadership from "./pages/Leadership";
import SecretaryMessage from "./pages/SecretaryMessage";
import WasteManagement from "./pages/WasteManagement";
import Contact from "./pages/Contact";
import { Link } from "react-router-dom";
import "./App.css";

function App(): JSX.Element {
  const [isNavOpen, setIsNavOpen] = useState<boolean>(false);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState<boolean>(false);

  const toggleNav = (): void => setIsNavOpen((v) => !v);
  const closeNav = (): void => setIsNavOpen(false);

  // Dropdown handlers
  const handleAboutMouseEnter = () => setAboutDropdownOpen(true);
  const handleAboutMouseLeave = () => setAboutDropdownOpen(false);
  const handleAboutClick = () => setAboutDropdownOpen((v) => !v);

  return (
    <Router>
      <header className="site-header">
        <div className="header-inner">
          <div className="header-brand">
            <img
              src="/content/logos/sri-lanka-emblem.svg"
              alt="Sri Lanka Emblem"
              className="brand-mark"
            />
            <img
              src="/content/logos/sabha_logo_no_background.png"
              alt="Biyagama Pradeshiya Sabha Logo"
              className="brand-mark"
            />
            <div className="tri-lang-title">
              <span>
                බියගම ප්‍රාදේශීය සභාව<br />பியகம பிரதேச சபை<br />Biyagama
                Pradeshiya Sabha
              </span>
            </div>
          </div>
          <div className="hotline">Hotline: +94-11-2411234</div>
        </div>
      </header>

      <nav className="site-nav">
        <img src="/GOVLKlogo.png" alt="LGC Logo" className="nav-favicon" />
        <button className={`nav-toggle ${isNavOpen ? "open" : ""}`} aria-label="Toggle navigation" onClick={toggleNav}>
          <span className="hamburger">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect y="7" width="32" height="3.5" rx="1.75" fill="#004080" />
              <rect y="14" width="32" height="3.5" rx="1.75" fill="#004080" />
              <rect y="21" width="32" height="3.5" rx="1.75" fill="#004080" />
            </svg>
          </span>
        </button>
        <ul className={`nav-menu ${isNavOpen ? "open" : ""}`} onClick={closeNav}>
          <li>
            <Link to="/" aria-label="Home">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{verticalAlign: 'middle'}}>
                <path d="M3 9.5L12 3l9 6.5V20a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9.5z" />
                <polyline points="9 22 9 12 15 12 15 22" />
              </svg>
            </Link>
          </li>
          <li
            className="nav-dropdown"
            onMouseEnter={handleAboutMouseEnter}
            onMouseLeave={handleAboutMouseLeave}
            onClick={handleAboutClick}
            style={{ position: 'relative' }}
          >
            <span className="nav-link" tabIndex={0}>ABOUT US</span>
            <ul
              className="dropdown-menu"
              style={{
                position: 'absolute',
                left: 0,
                top: '100%',
                background: '#1761a0',
                color: 'white',
                minWidth: '220px',
                borderRadius: '0 0 8px 8px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                padding: '10px 0',
                zIndex: 1001,
                display: aboutDropdownOpen ? 'block' : 'none'
              }}
            >
              <li><Link to="/about">ප්‍රාදේශීය සභාව</Link></li>
              <li><Link to="/about">සාමාන්‍යා කෝට්ටේරු</Link></li>
              <li><Link to="/about">කාර්යයන්</Link></li>
              <li><Link to="/about">කාර්ය මණ්ඩල නිලධාරින්</Link></li>
              <li><Link to="/about">පරිපාලන වාණු</Link></li>
            </ul>
          </li>
          <li><Link to="/leadership">OUR TEAM</Link></li>
          <li><Link to="/town-map">TOWN MAP</Link></li>
          <li><Link to="/">OUR SERVICES</Link></li>
          <li><Link to="/about">OUR TOWN</Link></li>
          <li><Link to="/news">NEWSROOM</Link></li>
          <li><Link to="/waste">SUSTAINABLE TOWN</Link></li>
          <li><Link to="/contact">CONTACT US</Link></li>
          <li><Link to="/secretary">SECRETARY'S MESSAGE</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/news" element={<News />} />
        <Route path="/town-map" element={<TownMap />} />
        <Route path="/leadership" element={<Leadership />} />
        <Route path="/secretary" element={<SecretaryMessage />} />
        <Route path="/waste" element={<WasteManagement />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <footer className="site-footer">
        <p>
          &copy; {new Date().getFullYear()} Biyagama Pradeshiya Sabha. All rights
          reserved. | Updated: {new Date().toLocaleDateString(undefined, {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>
        <p className="footer-links">
          <a href="#privacy">Privacy Policy</a> | <a href="#terms">Terms of Service</a> |
          <a href="#sitemap"> Sitemap</a>
        </p>
      </footer>
    </Router>
  );
}

export default App;
