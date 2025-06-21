import React from 'react';
import Navbar from '../components/Navbar'; // adjust path if needed

const images = [
  '/images/zyto1.jpg',
  '/images/zyto2.jpg',
  '/images/zyto3.jpg',
  // Add more image paths
];

export default function ZytoImagesPage() {
  const darkMode = true; // Set to true or false as needed

  return (
    <>
      <Navbar darkMode={darkMode} toggleDarkMode={() => {}} /> {/* Optional navbar */}
      <div
        style={{
          padding: '80px 40px 40px',
          background: darkMode
            ? 'linear-gradient(to bottom, #0f1c2e, #1b2a40)'
            : 'linear-gradient(to bottom, #ffffff, #e3f2fd)',
          color: darkMode ? '#E3F2FD' : '#0D47A1',
          minHeight: '100vh',
          transition: 'all 0.3s ease',
        }}
      >
        <h2 style={{ textAlign: 'center', marginBottom: 30 }}>Zyto Activities</h2>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
            gap: '20px',
            justifyItems: 'center',
          }}
        >
          {images.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Zyto Activity ${index + 1}`}
              style={{
                width: '100%',
                maxWidth: 250,
                height: 180,
                objectFit: 'cover',
                borderRadius: 10,
                boxShadow: '0 4px 10px rgba(0,0,0,0.25)',
              }}
            />
          ))}
        </div>
      </div>
    </>
  );
}
