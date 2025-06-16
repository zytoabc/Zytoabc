import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import VideoGallery from '../components/VideoGallery';
import OverviewVideo from '../components/OverviewVideo';
import ImageGallery from '../components/ImageGallery';
import SocialButton from '../components/SocialButton';
import Disclaimer from '../components/Disclaimer';
import WelcomeSection from '../components/WelcomeSection';
import WhatIsZyto from '../components/WhatIsZyto';
import HowZytoWorks from '../components/HowZytoWorks';
import EmotionalWellness from '../components/EmotionalWellness';
import CredentialsAndTestimonials from '../components/CredentialsAndTestimonials';

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
    },
    socialContainer: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '20px',
      marginTop: 40
    }
  };

  return (
    <div style={styles.page}>
      {/* Navbar */}
      <div style={styles.navbar}>
        <h2>Zyto ScanPH</h2>
        <button style={styles.button} onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? '🌙 Dark Mode' : '☀️ Light Mode'}
        </button>
      </div>

      {/* Main Sections */}
      <WelcomeSection />
      <WhatIsZyto />
      <OverviewVideo />
      <HowZytoWorks />
      <EmotionalWellness />
      <ImageGallery darkMode={darkMode} />
      <VideoGallery />
        <CredentialsAndTestimonials darkMode={darkMode} />
<Disclaimer darkMode={darkMode} />

      {/* Social Buttons */}
      <div style={styles.socialContainer}>
        <SocialButton
          href="https://www.facebook.com/joreen.torno.3"
          label="Visit My Facebook"
          emoji="🔗"
        />
        <SocialButton
          href="https://www.tiktok.com/@natura_lista9"
          label="Visit My TikTok"
          emoji="🎵"
        />
      </div>

      {/* Disclaimer */}
      <Disclaimer darkMode={darkMode} />
    </div>
  );
}
