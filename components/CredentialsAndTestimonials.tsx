// components/CredentialsAndTestimonials.tsx
import React from 'react';

interface Props {
  darkMode: boolean;
}

export default function CredentialsAndTestimonials({ darkMode }: Props) {
  return (
    <div style={{ marginTop: 40, maxWidth: 900, marginLeft: 'auto', marginRight: 'auto' }}>
      <h2
        style={{
          color: darkMode ? '#E3F2FD' : '#0D47A1',
          fontSize: '1.5rem',
          fontWeight: 'bold',
          marginBottom: 16
        }}
      >
        🏅 Credentials & Testimonials
      </h2>

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
        <img
          src="/images/credentials.jpg"
          alt="Credentials and Testimonials"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            borderRadius: 12
          }}
        />
      </div>
    </div>
  );
}
