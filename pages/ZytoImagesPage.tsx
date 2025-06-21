import React from 'react';
import Navbar from '../components/Navbar'; // adjust path if needed

const images = [
  '/images/1.jpeg', '/images/2.jpeg', '/images/3.jpeg', '/images/4.jpeg', '/images/5.jpeg',
  '/images/6.jpeg', '/images/7.jpeg', '/images/8.jpeg', '/images/9.jpeg', '/images/10.jpeg',
  '/images/11.jpeg', '/images/12.jpeg', '/images/13.jpeg', '/images/14.jpeg', '/images/15.jpeg',
  '/images/16.jpeg', '/images/17.jpeg', '/images/18.jpeg', '/images/19.jpeg', '/images/20.jpeg',
  '/images/21.jpeg', '/images/22.jpeg', '/images/23.jpeg', '/images/24.jpeg', '/images/25.jpeg',
  '/images/26.jpeg', '/images/27.jpeg', '/images/28.jpeg', '/images/29.jpeg', '/images/30.jpeg',
  '/images/31.jpeg', '/images/32.jpeg', '/images/33.jpeg', '/images/34.jpeg', '/images/35.jpeg',
  '/images/36.jpeg', '/images/37.jpeg', '/images/38.jpeg', '/images/39.jpeg', '/images/40.jpeg',
  '/images/41.jpeg', '/images/42.jpeg', '/images/43.jpeg', '/images/44.jpeg', '/images/45.jpeg',
  '/images/46.jpeg', '/images/47.jpeg', '/images/48.jpeg', '/images/49.jpeg', '/images/50.jpeg',
  '/images/51.jpeg', '/images/52.jpeg', '/images/53.jpeg', '/images/54.jpeg', '/images/55.jpeg',
  '/images/56.jpeg', '/images/57.jpeg', '/images/58.jpeg', '/images/59.jpeg', '/images/60.jpeg',
  '/images/61.jpeg', '/images/62.jpeg', '/images/63.jpeg', '/images/64.jpeg', '/images/65.jpeg',
  '/images/66.jpeg', '/images/67.jpeg', '/images/68.jpeg', '/images/69.jpeg', '/images/70.jpeg',
  '/images/71.jpeg', '/images/72.jpeg', '/images/73.jpeg', '/images/74.jpeg', '/images/75.jpeg',
  '/images/76.jpeg', '/images/77.jpeg', '/images/78.jpeg', '/images/79.jpeg', '/images/80.jpeg',
  '/images/81.jpeg', '/images/82.jpeg', '/images/83.jpeg', '/images/84.jpeg', '/images/85.jpeg',
  '/images/86.jpeg', '/images/87.jpeg', '/images/88.jpeg',
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
