import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import { useSwipeable } from 'react-swipeable';

const images = Array.from({ length: 88 }, (_, i) => `/images/${i + 1}.jpeg`);

export default function ZytoImagesPage() {
  const [darkMode, setDarkMode] = useState(true);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const showModal = selectedImageIndex !== null;

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => {
      if (selectedImageIndex !== null && selectedImageIndex < images.length - 1) {
        setSelectedImageIndex(selectedImageIndex + 1);
      }
    },
    onSwipedRight: () => {
      if (selectedImageIndex !== null && selectedImageIndex > 0) {
        setSelectedImageIndex(selectedImageIndex - 1);
      }
    },
    trackMouse: true,
  });

  return (
    <>
      <Navbar darkMode={darkMode} toggleDarkMode={() => setDarkMode(!darkMode)} />
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
        <h2 style={{ textAlign: 'center', marginBottom: 30 }}>Zyto Album</h2>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <img
            src={images[0]} // Album cover
            alt="Zyto Album Cover"
            onClick={() => setSelectedImageIndex(0)}
            style={{
              width: '100%',
              maxWidth: 300,
              height: 200,
              objectFit: 'cover',
              borderRadius: 12,
              boxShadow: '0 6px 16px rgba(0,0,0,0.3)',
              cursor: 'pointer',
              transition: 'transform 0.3s',
            }}
          />
        </div>
      </div>

      {/* Modal Album Viewer */}
      {showModal && (
        <div
          {...swipeHandlers}
          onClick={(e) => {
            if (e.target === e.currentTarget) setSelectedImageIndex(null);
          }}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0,0,0,0.85)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 2000,
            flexDirection: 'column',
          }}
        >
          {/* Left Arrow */}
          {selectedImageIndex! > 0 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImageIndex(selectedImageIndex! - 1);
              }}
              style={{
                position: 'absolute',
                left: 20,
                top: '50%',
                transform: 'translateY(-50%)',
                fontSize: 40,
                color: '#fff',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
              }}
            >
              ‹
            </button>
          )}

          <img
            src={images[selectedImageIndex!]}
            alt={`Zyto Image ${selectedImageIndex! + 1}`}
            style={{
              maxWidth: '90%',
              maxHeight: '80%',
              borderRadius: 12,
              boxShadow: '0 8px 24px rgba(255,255,255,0.2)',
            }}
          />

          {/* Right Arrow */}
          {selectedImageIndex! < images.length - 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImageIndex(selectedImageIndex! + 1);
              }}
              style={{
                position: 'absolute',
                right: 20,
                top: '50%',
                transform: 'translateY(-50%)',
                fontSize: 40,
                color: '#fff',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
              }}
            >
              ›
            </button>
          )}

          <p style={{ color: '#fff', marginTop: 16 }}>
            Swipe left/right or tap outside the image to close
          </p>
        </div>
      )}
    </>
  );
}
