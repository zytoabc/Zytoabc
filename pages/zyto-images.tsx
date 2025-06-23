import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import { useSwipeable } from 'react-swipeable';

const images = Array.from({ length: 91 }, (_, i) => `/images/${i + 1}.jpeg`);
const IMAGES_PER_PAGE = 12;

export default function ZytoImagesPage() {
  const [darkMode, setDarkMode] = useState(true);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const [currentPage, setCurrentPage] = useState(1);

  const showModal = selectedImageIndex !== null;
  const totalPages = Math.ceil(images.length / IMAGES_PER_PAGE);
  const start = (currentPage - 1) * IMAGES_PER_PAGE;
  const currentImages = images.slice(start, start + IMAGES_PER_PAGE);

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
        <h2 style={{ textAlign: 'center', marginBottom: 30 }}>Zyto Activities</h2>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
            gap: '20px',
            justifyItems: 'center',
          }}
        >
          {currentImages.map((src, index) => (
            <img
              key={start + index}
              src={src}
              alt={`Zyto Activity ${start + index + 1}`}
              onClick={() => setSelectedImageIndex(start + index)}
              style={{
                width: '100%',
                maxWidth: 250,
                height: 180,
                objectFit: 'cover',
                borderRadius: 10,
                boxShadow: '0 4px 10px rgba(0,0,0,0.25)',
                cursor: 'pointer',
              }}
            />
          ))}
        </div>

        {/* Pagination Controls */}
<div style={{ marginTop: 30, textAlign: 'center' }}>
  <button
    disabled={currentPage === 1}
    onClick={() => setCurrentPage((p) => p - 1)}
    style={{
      marginRight: 10,
      padding: '8px 16px',
      backgroundColor: darkMode ? '#1565C0' : '#90CAF9',
      color: '#fff',
      border: 'none',
      borderRadius: 6,
      cursor: currentPage === 1 ? 'not-allowed' : 'pointer',
      opacity: currentPage === 1 ? 0.5 : 1,
    }}
  >
    Previous
  </button>
  <span style={{ margin: '0 12px' }}>
    Page {currentPage} of {totalPages}
  </span>
  <button
    disabled={currentPage === totalPages}
    onClick={() => setCurrentPage((p) => p + 1)}
    style={{
      marginLeft: 10,
      padding: '8px 16px',
      backgroundColor: darkMode ? '#1565C0' : '#90CAF9',
      color: '#fff',
      border: 'none',
      borderRadius: 6,
      cursor: currentPage === totalPages ? 'not-allowed' : 'pointer',
      opacity: currentPage === totalPages ? 0.5 : 1,
    }}
  >
    Next
  </button>

  {/* Go to First Page Button */}
  {currentPage !== 1 && (
    <div style={{ marginTop: 10 }}>
      <button
        onClick={() => setCurrentPage(1)}
        style={{
          padding: '6px 12px',
          backgroundColor: darkMode ? '#004ba0' : '#64b5f6',
          color: '#fff',
          border: 'none',
          borderRadius: 6,
          cursor: 'pointer',
        }}
      >
        ⬅️ Go to First Page
      </button>
    </div>
  )}
</div>

      {/* Modal */}
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
            alt={`Selected Zyto ${selectedImageIndex! + 1}`}
            style={{
              maxWidth: '90%',
              maxHeight: '80%',
              borderRadius: 12,
              boxShadow: '0 8px 24px rgba(255,255,255,0.2)',
            }}
          />

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
