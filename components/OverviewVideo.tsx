import React from 'react';

export default function OverviewVideo() {
  return (
    <div style={{ marginTop: 40, maxWidth: 900 }}>
      <h2>🎥 ZYTO Balance Overview Video</h2>
      <div
        style={{
          position: 'relative',
          paddingBottom: '56.25%',
          paddingTop: 25,
          height: 0,
          overflow: 'hidden',
          borderRadius: 12,
          boxShadow: '0 8px 16px rgba(13, 71, 161, 0.5)'
        }}
      >
        <iframe
          src="https://www.youtube.com/embed/dFNnGsnMZxc"
          title="ZYTO Balance Overview"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            border: 0,
            borderRadius: 12
          }}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}
