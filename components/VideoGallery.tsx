import React, { useState } from 'react';
import TikTokCard from './TikTokCard'; // Make sure TikTokCard supports `thumbnail`

type Video = {
  id: string;
  title: string;
  type: 'youtube' | 'tiktok';
  username?: string;
  thumbnail?: string;
};

export default function VideoGallery() {
  const [activeVideo, setActiveVideo] = useState<Video | null>(null);

  const videos: Video[] = [
    { id: '7AReRD0HFVk', title: 'ZYTO Short 1', type: 'youtube' },
    { id: 'q50v-g9EOjA', title: 'ZYTO Short 2', type: 'youtube' },
    { id: '4NGb0uP3I50', title: 'ZYTO Short 3', type: 'youtube' },
    {
      id: '7503899921330736402',
      title: 'TikTok',
      type: 'tiktok',
      username: 'natura_lista9',
      thumbnail: '/images/tiktok-thumb.jpg' // ✅ Add your local or external image
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
            style={{
              cursor: 'pointer',
              borderRadius: 12,
              overflow: 'hidden',
              boxShadow: '0 4px 12px rgba(0,0,0,0.3)'
            }}
            onClick={() => {
              if (video.type === 'youtube') {
                setActiveVideo(video);
              } else {
                window.open(
                  `https://www.tiktok.com/@${video.username}/video/${video.id}`,
                  '_blank'
                );
              }
            }}
          >
            {video.type === 'youtube' ? (
              <img
                src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
                alt={video.title}
                style={{ width: '100%', display: 'block' }}
              />
            ) : (
              <TikTokCard
                title={video.title}
                username={video.username!}
                videoId={video.id}
                thumbnail={video.thumbnail}
              />
            )}
          </div>
        ))}
      </div>

      {/* Modal for YouTube only */}
      {activeVideo?.type === 'youtube' && (
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
            style={{
              position: 'relative',
              width: '90%',
              maxWidth: 500,
              aspectRatio: '9 / 16',
              backgroundColor: '#000',
              borderRadius: 12,
              overflow: 'hidden',
              padding: 8
            }}
            onClick={(e) => e.stopPropagation()}
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

            <iframe
              src={`https://www.youtube.com/embed/${activeVideo.id}?autoplay=1`}
              title={activeVideo.title}
              style={{ width: '100%', height: '100%', border: 0 }}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </div>
  );
}
