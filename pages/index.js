import React, { useState } from 'react';
import Navbar from '../components/Navbar';

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);

  const images = [
    'Messenger_creation_4F759699-F60C-4ABE-BE29-5C1532358AEB.jpeg',
    'Messenger_creation_A5E20197-3662-47DE-821C-A8E698AF7431.jpeg',
    'received_1224910739346831.jpeg',
    'received_1457436602288731.jpeg',
    'received_1934050417398656.jpeg',
    'received_2214373082353312.jpeg',
    'received_691148193771669.jpeg',
    'received_710740961547251.jpeg',
    'received_9828388613863441.jpeg'
  ];

  const styles = {
    page: {
      fontFamily: 'sans-serif',
      paddingTop: 80,
      paddingBottom: 60,
      paddingLeft: 40,
      paddingRight: 40,
      minHeight: '100vh',
      color: darkMode ? '#E3F2FD' : '#0D47A1',
      background: darkMode
        ? 'linear-gradient(to bottom right, #0d1b2a, #1b263b, #415a77)'
        : 'linear-gradient(to bottom right, #e3f2fd, #ffffff)',
      transition: 'all 0.3s ease'
    },
    navbar: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      height: 60,
      backgroundColor: darkMode ? '#0b0f2c' : '#ffffff',
      color: darkMode ? '#BBDEFB' : '#0D47A1',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '0 30px',
      boxShadow: '0 4px 20px rgba(13, 71, 161, 0.4)',
      zIndex: 1000
    },
    button: {
      padding: '10px 18px',
      borderRadius: 8,
      background: darkMode
        ? 'linear-gradient(45deg, #2196f3, #1e88e5)'
        : 'linear-gradient(45deg, #64b5f6, #1976d2)',
      color: '#fff',
      border: 'none',
      fontWeight: 'bold',
      cursor: 'pointer',
      transition: 'transform 0.2s ease'
    },
    section: {
      marginTop: 40,
      lineHeight: 1.7,
      maxWidth: 900
    },
    img: {
      width: '100%',
      borderRadius: 12,
      boxShadow: '0 8px 16px rgba(13, 71, 161, 0.5)',
      transform: 'scale(1)',
      transition: 'transform 0.3s ease'
    },
    facebookButton: {
      display: 'inline-block',
      marginTop: 40,
      padding: '14px 28px',
      background: 'linear-gradient(to right, #00c6ff, #0072ff)',
      color: 'white',
      borderRadius: 10,
      textDecoration: 'none',
      fontWeight: 'bold',
      boxShadow: '0 6px 16px rgba(0, 0, 0, 0.4)'
    }
  };

  return (
    <div style={styles.page}>
      {/* Navbar */}
      <div style={styles.navbar}>
        <h2>abc-zyto-scanning</h2>
        <button style={styles.button} onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? '🌙 Dark Mode' : '☀️ Light Mode'}
        </button>
      </div>

      {/* Welcome Section */}
      <h1 style={{ marginTop: 0 }}>🌈 Welcome to ABC ZYTO Scanning</h1>
      <p>Empowering personalized wellness through bio-communication technology.</p>

      {/* About ZYTO Balance */}
      <div style={styles.section}>
        <h2>🔍 What is ZYTO Balance?</h2>
        <p>
          ZYTO Balance uses galvanic skin response (GSR) technology to measure your body's biological coherence with over 190 biomarkers. Through virtual testing and biosurveys, the software identifies nutritional supplements, essential oils, and wellness services that support your unique physiology.
        </p>
        <ul>
          <li>✅ Personalized supplement & essential oil suggestions</li>
          <li>✅ 190+ biomarker analysis for customized wellness</li>
          <li>✅ Emotional health tools via voice-mapped neurofeedback</li>
          <li>✅ Food biosurveys for better dietary decisions</li>
          <li>✅ Future appointment generation for your practice</li>
        </ul>
      </div>

      {/* Image Gallery */}
      <div style={styles.section}>
        <h2>🖼️ ZYTO Scanning Image Gallery</h2>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
            gap: 20,
            marginTop: 20
          }}
        >
          {images.map((img, index) => (
            <img
              key={index}
              src={`/images/${img}`}
              alt={`Image ${index + 1}`}
              style={styles.img}
              onMouseOver={e => (e.currentTarget.style.transform = 'scale(1.05)')}
              onMouseOut={e => (e.currentTarget.style.transform = 'scale(1)')}
            />
          ))}
        </div>
      </div>

      {/* Emotional Wellness */}
      <div style={styles.section}>
        <h2>🧠 Emotional Wellness Support</h2>
        <p>
          The ZYTO Perception Reframing feature analyzes subtle frequencies in your voice to uncover subconscious emotional blocks. Then, using a proprietary neurofeedback process, the software helps balance and reframe perceptions—contributing to greater emotional well-being.
        </p>
      </div>

      {/* Facebook Button */}
      <a
        href="https://www.facebook.com/joreen.torno.3"
        target="_blank"
        rel="noopener noreferrer"
        style={styles.facebookButton}
      >
        🔗 Visit My Facebook
      </a>

      {/* Disclaimer */}
      <div style={{ ...styles.section, fontSize: '0.9em', color: darkMode ? '#B0BEC5' : '#455A64' }}>
        <h3>⚠️ Disclaimer</h3>
        <p>
          This website and the ZYTO Balance technology are intended for informational and educational purposes only. They are not intended to diagnose, treat, cure, or prevent any medical condition. Always consult with a licensed healthcare provider before making any wellness decisions. Results may vary between individuals.
        </p>
      </div>
    </div>
  );
    }
