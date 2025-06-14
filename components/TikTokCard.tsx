import React from 'react';

type Props = {
  title: string;
  username: string;
  videoId: string;
  thumbnail?: string; // optional
};

export default function TikTokCard({ title, username, videoId, thumbnail }: Props) {
  const tiktokUrl = `https://www.tiktok.com/@${username}/video/${videoId}`;

  return (
    <a
      href={tiktokUrl}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        display: 'block',
        position: 'relative',
        width: '100%',
        paddingTop: '177%',
        backgroundColor: '#111',
        borderRadius: 12,
        overflow: 'hidden',
        textDecoration: 'none',
        color: 'white',
        boxShadow: '0 4px 12px rgba(0,0,0,0.3)'
      }}
    >
      {thumbnail && (
        <img
          src={thumbnail}
          alt={title}
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            top: 0,
            left: 0,
            objectFit: 'cover'
          }}
        />
      )}

      {/* Play Icon */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          fontSize: 48,
          background: 'rgba(255,255,255,0.2)',
          padding: 12,
          borderRadius: '50%'
        }}
      >
        ▶
      </div>

      {/* Title */}
      <div
        style={{
          position: 'absolute',
          bottom: 10,
          left: 10,
          right: 10,
          fontSize: 14,
          color: '#fff',
          textShadow: '0 1px 2px rgba(0,0,0,0.6)'
        }}
      >
        {title}
      </div>
    </a>
  );
}
