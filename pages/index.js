import Navbar from '../components/Navbar';
import React, { useState } from 'react';

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
    color: darkMode ? '#E8F5E9' : '#1B5E20',
    background: darkMode
      ? 'linear-gradient(to bottom right, #0b3d0b, #1b5e20, #2e7d32)'
      : 'linear-gradient(to bottom right, #ffffff, #e8f5e9)',
    transition: 'all 0.3s ease'
  },
  navbar: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    height: 60,
    backgroundColor: darkMode ? '#003300' : '#ffffff',
    color: darkMode ? '#C8E6C9' : '#1B5E20',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0 30px',
    boxShadow: '0 4px 20px rgba(0,64,0,0.4)',
    zIndex: 1000
  },
  button: {
    padding: '10px 18px',
    borderRadius: 8,
    background: darkMode
      ? 'linear-gradient(45deg, #64dd17, #1b5e20)'
      : 'linear-gradient(45deg, #a5d6a7, #66bb6a)',
    color: '#fff',
    border: 'none',
    fontWeight: 'bold',
    cursor: 'pointer',
    transition: 'transform 0.2s ease'
  },
  img: {
    width: '100%',
    borderRadius: 12,
    boxShadow: '0 8px 16px rgba(0,64,0,0.5)',
    transform: 'scale(1)',
    transition: 'transform 0.3s ease'
  },
  imgHover: {
    transform: 'scale(1.05)'
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
      <h1 style={{ marginTop: 0 }}>🌈 Welcome to abc-zyto-scanning</h1>
      <p>Team Ayos</p>

      {/* Image Gallery */}
      <h2 style={{ marginTop: 40 }}>🖼️ Image Gallery</h2>
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

      {/* Facebook Button */}
      <a
        href="https://www.facebook.com/joreen.torno.3"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: 'inline-block',
          marginTop: 40,
          padding: '14px 28px',
          background: 'linear-gradient(to right, #00c6ff, #0072ff)',
          color: 'white',
          borderRadius: 10,
          textDecoration: 'none',
          fontWeight: 'bold',
          boxShadow: '0 6px 16px rgba(0, 0, 0, 0.4)'
        }}
      >
        🔗 Visit My Facebook
      </a>
    </div>
  );
    }
