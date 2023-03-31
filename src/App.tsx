import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Home, About, Products } from "./pages";
import "./App.css";

function App(): JSX.Element {
  const [isNavOpen, setIsNavOpen] = useState<boolean>(false);

  // const toggleNav = (): void => setIsNavOpen(!isNavOpen);

  return (
    <Router>
      {/* <header>
        <div className="container">
          <div className="hamburger hb-2" onClick={toggleNav}>
            <i className="fa-solid fa-bars"></i>
          </div>
          <nav>
            <ul className={isNavOpen ? "nav-open" : "nav-closed"}>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/products">Products</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
      </Routes>
      <footer>
        <p>All rights reserved Ceygiri Labs &copy; 2023</p>
      </footer>
    </Router>
  );
}

export default App;
