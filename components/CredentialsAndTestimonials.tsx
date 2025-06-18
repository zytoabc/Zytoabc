import React, { useState } from 'react';

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
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

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
            onClick={() => setSelectedImage(src)}
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

      {/* Main Large Image (Now at the Bottom) */}
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

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          onClick={() => setSelectedImage(null)}
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
          <img
            src={selectedImage}
            alt="Enlarged"
            style={{
              maxWidth: '90%',
              maxHeight: '90%',
              borderRadius: 8,
              boxShadow: '0 0 20px rgba(255, 255, 255, 0.3)',
            }}
          />
        </div>
      )}
    </div>
  );
}
