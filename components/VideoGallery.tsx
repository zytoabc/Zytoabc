import React, { useState } from 'react';

type Video = {
  id: string;
  title: string;
  type: 'youtube' | 'tiktok' | 'local';
  username?: string;
  thumbnail: string;
  src?: string; // Only for local videos
};

export default function VideoGallery() {
  const [activeVideo, setActiveVideo] = useState<Video | null>(null);

  const videos: Video[] = [
    {
      id: '7AReRD0HFVk',
      title: 'ZYTO Short 1',
      type: 'youtube',
      thumbnail: 'https://img.youtube.com/vi/7AReRD0HFVk/hqdefault.jpg'
    },
    {
      id: 'q50v-g9EOjA',
      title: 'ZYTO Short 2',
      type: 'youtube',
      thumbnail: 'https://img.youtube.com/vi/q50v-g9EOjA/hqdefault.jpg'
    },
    {
      id: '4NGb0uP3I50',
      title: 'ZYTO Short 3',
      type: 'youtube',
      thumbnail: 'https://img.youtube.com/vi/4NGb0uP3I50/hqdefault.jpg'
    },
    {
      id: '7503899921330736402',
      title: 'TikTok Demo',
      type: 'tiktok',
      username: 'natura_lista9',
      thumbnail: '/images/tiktok-thumb.jpg'
    },
    {
      id: 'local-intro',
      title: 'ZYTO Local Video',
      type: 'local',
      thumbnail: '/images/local-thumb.jpg', // Add this thumbnail in /public/images/
      src: '/videos/intro.mp4' // Add this video in /public/videos/
    }
  ];

  return (
    <div style={{ marginTop: 40 }}>
      <h2>📹 ZYTO Video Gallery</h2>

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
            onClick={() => setActiveVideo(video)}
            style={{
              cursor: 'pointer',
              borderRadius: 12,
              overflow: 'hidden',
              boxShadow: '0 4px 12px rgba(0,0,0,0.3)'
            }}
          >
            <img
              src={video.thumbnail}
              alt={video.title}
              style={{ width: '100%', display: 'block' }}
            />
          </div>
        ))}
      </div>

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
            zIndex: 9999
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              position: 'relative',
              width: '90%',
              maxWidth: 500,
              aspectRatio: '9 / 16',
              backgroundColor: '#000',
              borderRadius: 12,
              overflow: 'hidden'
            }}
          >
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

            {activeVideo.type === 'youtube' ? (
              <iframe
                src={`https://www.youtube.com/embed/${activeVideo.id}?autoplay=1`}
                title={activeVideo.title}
                style={{ width: '100%', height: '100%', border: 0 }}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            ) : activeVideo.type === 'tiktok' ? (
              <iframe
                src={`https://www.tiktok.com/embed/${activeVideo.id}`}
                title={activeVideo.title}
                style={{ width: '100%', height: '100%', border: 0 }}
                allow="autoplay; encrypted-media"
              />
            ) : (
              <video
                controls
                autoPlay
                style={{ width: '100%', height: '100%' }}
              >
                <source src={activeVideo.src} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
