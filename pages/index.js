import React, { useState } from 'react';
import Link from 'next/link';
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
      transition: 'all 0.3s ease',
    },
    linkButton: {
      display: 'inline-block',
      marginTop: 30,
      padding: '12px 24px',
      borderRadius: 8,
      background: darkMode
        ? 'linear-gradient(45deg, #2196f3, #1e88e5)'
        : 'linear-gradient(45deg, #64b5f6, #1976d2)',
      color: '#fff',
      fontWeight: 'bold',
      textDecoration: 'none',
      textAlign: 'center',
      boxShadow: '0 4px 10px rgba(0,0,0,0.25)',
      transition: 'background 0.3s ease',
    },
    socialContainer: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '20px',
      marginTop: 40,
    },
  };

  return (
    <>
      {/* Navbar with toggleable dark mode */}
      <Navbar darkMode={darkMode} toggleDarkMode={() => setDarkMode(!darkMode)} />

      {/* Main Page Content */}
      <div style={styles.page}>
        <WelcomeSection />
        <WhatIsZyto />
        <OverviewVideo />
        <HowZytoWorks />
        <EmotionalWellness />
           <ImageGallery darkMode={darkMode} />

            {/* Zyto Activities Navigation Link */}
        <div style={{ textAlign: 'center' }}>
          <Link href="/zyto-images" style={styles.linkButton}>
            👉 View All Zyto Activities
          </Link>
        </div>

        <VideoGallery />
        <CredentialsAndTestimonials darkMode={darkMode} />

        {/* Social Links */}
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

        {/* Footer Disclaimer */}
        <Disclaimer darkMode={darkMode} />
      </div>
    </>
  );
}
