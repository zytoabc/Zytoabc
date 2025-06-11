import React from 'react';
import Navbar from '../components/Navbar';
import { useState } from 'react';

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
      paddingBottom: 40,
      paddingLeft: 40,
      paddingRight: 40,
      minHeight: '100vh',
      color: darkMode ? '#E0E1DD' : '#222',
      background: darkMode
        ? 'linear-gradient(to bottom right, #0D1B2A, #1B263B)'
        : '#f4f4f4',
      transition: 'all 0.3s ease'
    },
    navbar: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      height: 60,
      backgroundColor: darkMode ? '#1B263B' : '#ffffff',
      color: darkMode ? '#E0E1DD' : '#222',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '0 30px',
      boxShadow: '0 2px 10px rgba(0,0,0,0.3)',
      zIndex: 1000
    },
    button: {
      padding: '8px 16px',
      borderRadius: 6,
      backgroundColor: darkMode ? '#415A77' : '#1877F2',
      color: '#fff',
      border: 'none',
      fontWeight: 'bold',
      cursor: 'pointer'
    },
    img: {
      width: '100%',
      borderRadius: 8,
      boxShadow: '0 4px 12px rgba(0,0,0,0.4)'
    }
  };

  return (
    <div style={styles.page}>
      {/* Navbar */}
      <div style={styles.navbar}>
        <h2>abc-zyto-scanning</h2>
        <button style={styles.button} onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
        </button>
      </div>

      {/* Main Content */}
      <h1 style={{ marginTop: 0 }}>Welcome to abc-zyto-scanning</h1>
      <p>This project is ready to deploy on Vercel and GitHub.</p>

      <h2 style={{ marginTop: 40 }}>Image Gallery</h2>
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
          />
        ))}
      </div>

      {/* Facebook Button */}
      <a
        href="https://www.facebook.com/joreen.torno.3"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: 'inline-block',
          marginTop: 40,
          padding: '12px 24px',
          backgroundColor: '#1877F2',
          color: 'white',
          borderRadius: 8,
          textDecoration: 'none',
          fontWeight: 'bold'
        }}
      >
        Visit My Facebook
      </a>
    </div>
  );
      }
