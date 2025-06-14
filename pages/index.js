import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import VideoGallery from '../components/VideoGallery';
import OverviewVideo from '../components/OverviewVideo';
import ImageGallery from '../components/ImageGallery';
import FacebookButton from '../components/FacebookButton';
import Disclaimer from '../components/Disclaimer';
import WelcomeSection from '../components/WelcomeSection';
import WhatIsZyto from '../components/WhatIsZyto';
import HowZytoWorks from '../components/HowZytoWorks';
import EmotionalWellness from '../components/EmotionalWellness';

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);

  const styles = {
    page: {
      fontFamily: 'sans-serif',
      padding: '80px 40px 60px',
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
    }
  };

  return (
    <div style={styles.page}>
      {/* Navbar */}
      <div style={styles.navbar}>
        <h2>Zyto Balance</h2>
        <button style={styles.button} onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? '🌙 Dark Mode' : '☀️ Light Mode'}
        </button>
      </div>

      {/* Sections */}
      <WelcomeSection />
      <WhatIsZyto />
      <OverviewVideo />
      <HowZytoWorks />
      <EmotionalWellness />
      <ImageGallery darkMode={darkMode} />
      <VideoGallery />
      <FacebookButton />
      <Disclaimer darkMode={darkMode} />
    </div>
  );
}
