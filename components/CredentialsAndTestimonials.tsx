import React, { useEffect, useState } from 'react';

interface Props {
  darkMode: boolean;
}

const images = [
  '/images/image5.jpeg',
  '/images/image2.jpeg',
  '/images/image3.jpeg',
  '/images/image4.jpeg',
];

export default function CredentialsAndTestimonials({ darkMode }: Props) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const closeModal = () => setSelectedIndex(null);
  const nextImage = () => setSelectedIndex((prev) => (prev !== null ? (prev + 1) % images.length : null));
  const prevImage = () => setSelectedIndex((prev) => (prev !== null ? (prev - 1 + images.length) % images.length : null));

  // Optional: keyboard support
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex !== null) {
        if (e.key === 'ArrowRight') nextImage();
        if (e.key === 'ArrowLeft') prevImage();
        if (e.key === 'Escape') closeModal();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIndex]);

  return (
    <div style={{ marginTop: 40, maxWidth: 900, marginLeft: 'auto', marginRight: 'auto' }}>
      <h2
        style={{
          color: darkMode ? '#E3F2FD' : '#0D47A1',
          fontSize: '1.5rem',
          fontWeight: 'bold',
          marginBottom: 16,
        }}
      >
        🏅 Credentials & Testimonials
      </h2>

      {/* Thumbnails */}
      <div style={{ display: 'flex', gap: 12, marginTop: 20, flexWrap: 'wrap' }}>
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Thumbnail ${index + 1}`}
            onClick={() => setSelectedIndex(index)}
            style={{
              width: 100,
              height: 100,
              objectFit: 'cover',
              borderRadius: 8,
              cursor: 'pointer',
              border: '2px solid #1976D2',
              transition: 'transform 0.2s',
            }}
          />
        ))}
      </div>

      {/* Lightbox Modal with Swipe + Close */}
      {selectedIndex !== null && (
        <div
          onClick={closeModal}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            backgroundColor: 'rgba(0, 0, 0, 0.85)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 9999,
            cursor: 'zoom-out',
          }}
        >
          {/* Prevent click propagation to close modal when clicking buttons/images */}
          <div
            onClick={(e) => e.stopPropagation()}
            style={{ position: 'relative', maxWidth: '90%', maxHeight: '90%' }}
          >
            {/* Close Button */}
            <button
              onClick={closeModal}
              style={{
                position: 'absolute',
                top: 10,
                right: 10,
                background: 'transparent',
                color: '#fff',
                fontSize: 24,
                border: 'none',
                cursor: 'pointer',
              }}
              aria-label="Close"
            >
              ✕
            </button>

            {/* Prev Button */}
            <button
              onClick={prevImage}
              style={{
                position: 'absolute',
                left: -50,
                top: '50%',
                transform: 'translateY(-50%)',
                fontSize: 32,
                color: '#fff',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
              }}
              aria-label="Previous"
            >
              ‹
            </button>

            {/* Next Button */}
            <button
              onClick={nextImage}
              style={{
                position: 'absolute',
                right: -50,
                top: '50%',
                transform: 'translateY(-50%)',
                fontSize: 32,
                color: '#fff',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
              }}
              aria-label="Next"
            >
              ›
            </button>

            {/* Enlarged Image */}
            <img
              src={images[selectedIndex]}
              alt="Enlarged"
              style={{
                maxWidth: '100%',
                maxHeight: '100%',
                borderRadius: 8,
                boxShadow: '0 0 20px rgba(255, 255, 255, 0.3)',
              }}
            />
          </div>
        </div>
      )}

      {/* Main Large Image at the Bottom */}
      <div
        style={{
          overflow: 'hidden',
          borderRadius: 12,
          boxShadow: '0 8px 16px rgba(13, 71, 161, 0.5)',
          maxWidth: '100%',
          marginTop: 30,
        }}
      >
        <img
          src="/images/credentials.jpg"
          alt="Credentials and Testimonials"
          style={{
            width: '100%',
            height: 'auto',
            display: 'block',
            objectFit: 'contain',
            borderRadius: 12,
          }}
        />
      </div>
    </div>
  );
}
