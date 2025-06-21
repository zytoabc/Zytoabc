import React from 'react';

interface ZytoImagesPageProps {
  darkMode: boolean;
}

const images = [
  '/images/zyto1.jpg',
  '/images/zyto2.jpg',
  '/images/zyto3.jpg',
  // Add more paths as needed
];

export default function ZytoImagesPage({ darkMode }: ZytoImagesPageProps) {
  return (
    <div style={{ color: darkMode ? '#fff' : '#000' }}>
      <h2>Zyto Activities</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16, marginTop: 20 }}>
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Zyto Activity ${index + 1}`}
            style={{
              width: '200px',
              height: '150px',
              objectFit: 'cover',
              borderRadius: 8,
              boxShadow: '0 4px 10px rgba(0,0,0,0.2)',
            }}
          />
        ))}
      </div>
    </div>
  );
}
