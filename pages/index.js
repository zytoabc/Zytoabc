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
      padding: 40,
      paddingTop: 80,
      paddingBottom: 60,
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
      cursor: 'pointer'
    },
    section: {
      marginTop: 40,
      maxWidth: 900,
      lineHeight: 1.7
    },
    img: {
      width: '100%',
      borderRadius: 12,
      boxShadow: '0 8px 16px rgba(13, 71, 161, 0.5)',
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
      fontWeight: 'bold'
    }
  };

  return (
    <div style={styles.page}>
      <div style={styles.navbar}>
        <h2>ZYTO BALANCE</h2>
        <button style={styles.button} onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? '🌙 Dark Mode' : '☀️ Light Mode'}
        </button>
      </div>

      <h1>Welcome to ZYTO Balance</h1>
      <p>Empowering personalized wellness through bio-communication technology.</p>

      <div style={styles.section}>
        <h2>What is ZYTO Balance?</h2>
        <p>
          ZYTO Balance uses GSR data to determine biological coherence with over 190 biomarkers. It identifies nutritional supplements, essential oils, and wellness services that align with individual needs. It supports food choices and automates future wellness appointments.
        </p>
        <ul>
          <li>190+ biomarker analysis</li>
          <li>Personalized supplement suggestions</li>
          <li>Emotional wellness via neurofeedback</li>
          <li>Food biosurveys</li>
          <li>Appointment generation</li>
        </ul>
      </div>

      <div style={styles.section}>
        <h2>How ZYTO Measures Coherence</h2>
        <p>
          The ZYTO Hand Cradle gathers GSR data, analyzed by the software to determine coherence. This coherence—how systems harmonize—helps wellness professionals make better-informed decisions.
        </p>
      </div>

      <div style={styles.section}>
        <h2>Why Biological Coherence Matters</h2>
        <p>
          Just as simulators help pilots anticipate reactions, ZYTO software uses virtual items (organs, chemicals, supplements, etc.) to simulate how a body may respond, offering crucial insight.
        </p>
      </div>

      <div style={styles.section}>
        <h2>Improve Emotional Wellness</h2>
        <p>
          ZYTO's perception reframing analyzes voice frequencies to identify emotional blocks and restore balance via neurofeedback. It enhances overall well-being by addressing the subconscious.
        </p>
      </div>

      <div style={styles.section}>
        <h2>Image Gallery</h2>
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

      <a
        href="https://www.facebook.com/joreen.torno.3"
        target="_blank"
        rel="noopener noreferrer"
        style={styles.facebookButton}
      >
        Visit My Facebook
      </a>

      <div style={{ ...styles.section, fontSize: '0.9em', color: darkMode ? '#B0BEC5' : '#455A64' }}>
        <h3>Disclaimer</h3>
        <p>
          This content is for educational purposes only and is not intended to diagnose, treat, cure, or prevent any disease. Consult a licensed health provider before making wellness decisions. Results may vary.
        </p>
      </div>
    </div>
  );
}
