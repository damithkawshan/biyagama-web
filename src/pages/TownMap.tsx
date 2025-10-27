import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./TownMap.css";

function TownMap(): JSX.Element {
  const [pdfError, setPdfError] = useState(false);
  const pdfUrl = "/townMap/18_Gampaha_BiyagamaPS.pdf";

  const areaInfo = [
    { label: "පළාත", value: "බස්නාහිර", icon: "🏛️" },
    { label: "පරිපාලන දිස්ත්‍රික්කය", value: "ගම්පහ", icon: "📍" },
    { label: "ප්‍රාදේශීය ලේකම් කොට්ඨාශය", value: "බියගම", icon: "🏢" },
    { label: "මැතිවරණ කොට්ඨාශය", value: "බියගම", icon: "🗳️" },
  ];

  const stats = [
    { label: "වර්ග ප්‍රමාණය (ව.කි.මී)", value: 61.6, icon: "📐" },
    { label: "ජනගහණය (2021)", value: 207714, icon: "👥" },
    { label: "ලියාපදිංචි ඡන්ද සංඛ්‍යාව", value: 126238, icon: "🗳️" },
    { label: "ග්‍රාමසේවා වසම්", value: 49, icon: "🏘️" },
    { label: "සභික සංඛ්‍යාව", value: 55, icon: "👔" },
    { label: "අනුමත සේවක", value: 211, icon: "💼" },
    { label: "උප කාර්යාල", value: 3, icon: "🏢" },
  ];

  const facilities = [
    { label: "ක්‍රීඩා පිට්ටනි", value: 16, icon: "⚽" },
    { label: "ප්‍රජා ශාලා", value: 22, icon: "🏛️" },
    { label: "පොදු නාන තොටුපල", value: 11, icon: "🚿" },
    { label: "සුසාන භූමි", value: 32, icon: "⚰️" },
    { label: "ආදාහනාගාර", value: 3, icon: "🔥" },
  ];

  // Counter animation
  const useCounter = (target: number, duration: number = 2000): number => {
    const [count, setCount] = useState(0);
    useEffect(() => {
      let start = 0;
      const increment = target / (duration / 16);
      const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
          setCount(target);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
      return () => clearInterval(timer);
    }, [target, duration]);
    return count;
  };

  const StatCard = ({ label, value, icon }: { label: string; value: number; icon: string }) => {
    const count = useCounter(value);
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="stat-card"
      >
        <div className="stat-icon">{icon}</div>
        <div className="stat-value">{count.toLocaleString()}</div>
        <div className="stat-label">{label}</div>
      </motion.div>
    );
  };

  const FacilityCard = ({ label, value, icon }: { label: string; value: number; icon: string }) => {
    const count = useCounter(value);
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="facility-card"
      >
        <div className="facility-icon">{icon}</div>
        <div className="facility-value">{count}</div>
        <div className="facility-label">{label}</div>
      </motion.div>
    );
  };

  return (
    <div className="town-map-container">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="town-map-hero"
      >
        <div className="town-map-hero-content">
          <motion.h1 initial={{ y: -20 }} animate={{ y: 0 }}>
            බියගම ප්‍රාදේශීය සභාව
          </motion.h1>
          <motion.div 
            initial={{ y: -20 }} 
            animate={{ y: 0 }} 
            transition={{ delay: 0.1 }}
            className="hero-info-grid"
          >
            {areaInfo.map((item, i) => (
              <div key={i} className="hero-info-item">
                <span className="hero-info-icon">{item.icon}</span>
                <div className="hero-info-content">
                  <strong className="hero-info-label">{item.label}</strong>
                  <span className="hero-info-value">{item.value}</span>
                </div>
              </div>
            ))}
          </motion.div>
          <motion.p initial={{ y: -20 }} animate={{ y: 0 }} transition={{ delay: 0.2 }} align="justify">
            1987 අංක 15 දරණ ප්‍රාදේශීය සභා පනත යටතේ බියගම ප්‍රාදේශීය සභාවට සභාපතිවරයෙකු, උප සභාපතිවරයෙකු සහ තවත් තෝරා පත් කරගත් සභිකයන් 21ක් සමන්විතව 1995 අප්‍රේල් මස 20 වන දින සංස්ථාපනය කරන ලදී.
          </motion.p>
          <motion.p initial={{ y: -20 }} animate={{ y: 0 }} transition={{ delay: 0.25 }} align="justify">
            1995.04.21 වැනි දින අංක 867/21 දරණ අති විශේෂ ගැසට් පත්‍රයේ සඳහන් නියමයන් සංස්ථාපනය වී ඇති බියගම ප්‍රාදේශීය සභාව 1995.06.01 වන දින ආරම්භ විය. වර්තමානයේ මෙය කඩවත, මාකොළ, දෙල්ගොඩ යන උප කාර්යාල 03කින් සමන්විත වන අතර බියගම ප්‍රාදේශීය සභාවේ ප්‍රධාන කාර්යාලය දෙල්ගොඩ නගරයේ පිහිටා ඇත.
          </motion.p>
        </div>
      </motion.div>

      <div className="town-map-content">
        {/* PDF Display */}
        {/* Regional Information */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="section-card"
        >
          <div className="section-header">
            <span className="section-icon">📌</span>
            <h3 className="section-title">ප්‍රාදේශීය තොරතුරු / Regional Information</h3>
          </div>
          <div className="regional-grid">
            {areaInfo.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="regional-item"
              >
                <span className="regional-icon">{item.icon}</span>
                <div className="regional-content">
                  <strong className="regional-label">{item.label}</strong>
                  <span className="regional-value">{item.value}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div> */}

        {/* Statistics Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="section-card"
        >
          <div className="section-header">
            <span className="section-icon">📊</span>
            <h3 className="section-title">සංඛ්‍යාත තොරතුරු / Statistics</h3>
          </div>
          <div className="stats-grid">
            {stats.map((stat, i) => (
              <StatCard key={i} label={stat.label} value={stat.value} icon={stat.icon} />
            ))}
          </div>
        </motion.div>

        {/* Facilities Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="section-card"
        >
          <div className="section-header">
            <span className="section-icon">🏗️</span>
            <h3 className="section-title">පහසුකම් / Facilities</h3>
          </div>
          <div className="facilities-grid">
            {facilities.map((item, i) => (
              <FacilityCard key={i} label={item.label} value={item.value} icon={item.icon} />
            ))}
          </div>
        </motion.div>

                <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="pdf-container"
        >
          <div className="pdf-header">
            <div className="pdf-title">
              <span>📍</span>
              <span>Biyagama Pradeshiya Sabha - Town Map</span>
            </div>
            <a href={pdfUrl} download="Biyagama_Town_Map.pdf" className="pdf-download-btn">
              <span>📥</span>
              <span>Download PDF</span>
            </a>
          </div>
          <div className="pdf-wrapper">
            <iframe
              src={pdfUrl}
              title="Biyagama Town Map"
              className="pdf-iframe"
              onError={() => setPdfError(true)}
            />
          </div>
        </motion.div>

      </div>
    </div>
  );
}

export default TownMap;
