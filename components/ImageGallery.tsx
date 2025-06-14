import React from 'react';

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

export default function ImageGallery() {
  return (
    <div style={{ marginTop: 40 }}>
      <h2>🖼️ ZYTO Scanning Image Gallery</h2>
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
            style={{
              width: '100%',
              borderRadius: 12,
              boxShadow: '0 8px 16px rgba(13, 71, 161, 0.5)',
              transition: 'transform 0.3s ease'
            }}
            onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
            onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
          />
        ))}
      </div>
    </div>
  );
}
