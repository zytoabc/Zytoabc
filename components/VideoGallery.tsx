import React, { useState } from 'react';

export default function VideoGallery() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  const videos = [
    { id: '7AReRD0HFVk', title: 'ZYTO Short 1' },
    { id: 'q50v-g9EOjA', title: 'ZYTO Short 2' },
    { id: '4NGb0uP3I50', title: 'ZYTO Short 3' }
  ];

  return (
    <div style={{ marginTop: 40 }}>
      <h2>📹 ZYTO Video Gallery</h2>

      {/* Thumbnail Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
          gap: 20,
          marginTop: 20
        }}
      >
        {videos.map((video) => (
          <div
            key={video.id}
            style={{
              cursor: 'pointer',
              borderRadius: 12,
              overflow: 'hidden',
              boxShadow: '0 4px 12px rgba(0,0,0,0.3)'
            }}
            onClick={() => setActiveVideo(video.id)}
          >
            <img
              src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
              alt={video.title}
              style={{ width: '100%', display: 'block' }}
            />
          </div>
        ))}
      </div>

      {/* Modal */}
      {activeVideo && (
        <div
          onClick={() => setActiveVideo(null)}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            backgroundColor: 'rgba(0,0,0,0.8)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 9999,
            animation: 'fadeIn 0.3s ease'
          }}
        >
          <div
            style={{
              position: 'relative',
              width: '90%',
              maxWidth: 500,
              aspectRatio: '9 / 16',
              backgroundColor: '#000',
              borderRadius: 12,
              overflow: 'hidden',
              animation: 'fadeIn 0.3s ease'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setActiveVideo(null)}
              style={{
                position: 'absolute',
                top: 10,
                right: 10,
                background: 'rgba(255,255,255,0.1)',
                color: '#fff',
                border: 'none',
                fontSize: 24,
                cursor: 'pointer',
                zIndex: 10000
              }}
              aria-label="Close"
            >
              ×
            </button>

            {/* Video iframe */}
            <iframe
              src={`https://www.youtube.com/embed/${activeVideo}?autoplay=1`}
              title="YouTube video"
              style={{
                width: '100%',
                height: '100%',
                border: 0
              }}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}

      {/* Animation Keyframes */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </div>
  );
}
