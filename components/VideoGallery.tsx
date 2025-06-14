import React from 'react';

export default function VideoGallery() {
  const videos = [
    { id: '7AReRD0HFVk', title: 'ZYTO Short 1' },
    { id: 'q50v-g9EOjA', title: 'ZYTO Short 2' },
    { id: '4NGb0uP3I50', title: 'ZYTO Short 3' }
  ];

  return (
    <div style={{ marginTop: 40 }}>
      <h2>📹 ZYTO Video Gallery</h2>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: 20,
          marginTop: 20
        }}
      >
        {videos.map((video, index) => (
          <div
            key={index}
            style={{
              position: 'relative',
              paddingBottom: '177.78%',
              height: 0,
              overflow: 'hidden',
              borderRadius: 12,
              boxShadow: '0 8px 16px rgba(13, 71, 161, 0.5)'
            }}
          >
            <iframe
              src={`https://www.youtube.com/embed/${video.id}`}
              title={video.title}
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                border: '0',
                borderRadius: '12px'
              }}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        ))}
      </div>
    </div>
  );
}
