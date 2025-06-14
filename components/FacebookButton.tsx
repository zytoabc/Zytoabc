import React from 'react';

export default function FacebookButton() {
  return (
    <a
      href="https://www.facebook.com/joreen.torno.3"
      target="_blank"
      rel="noopener noreferrer"
      style={{
        display: 'inline-block',
        marginTop: 40,
        padding: '14px 28px',
        background: 'linear-gradient(to right, #00c6ff, #0072ff)',
        color: 'white',
        borderRadius: 10,
        textDecoration: 'none',
        fontWeight: 'bold',
        boxShadow: '0 6px 16px rgba(0, 0, 0, 0.4)'
      }}
    >
      🔗 Visit My Facebook
    </a>
  );
}
