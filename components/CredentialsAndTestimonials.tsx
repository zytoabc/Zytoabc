// components/CredentialsAndTestimonials.tsx
import React from 'react';

interface Props {
  darkMode: boolean;
}

export default function CredentialsAndTestimonials({ darkMode }: Props) {
  return (
    <div
      className="mt-20 p-4 rounded-xl shadow-md text-center mx-auto"
      style={{
        maxWidth: '700px', // controls how wide the section gets
        backgroundColor: darkMode ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.05)',
        backdropFilter: 'blur(8px)',
        color: darkMode ? '#E3F2FD' : '#0D47A1'
      }}
    >
      <h2 className="text-2xl font-bold mb-4">Credentials & Testimonials</h2>
      <img
        src="/images/credentials.jpg"
        alt="Credentials and Testimonials"
        style={{
          width: '100%',
          height: 'auto',
          borderRadius: '12px',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)'
        }}
      />
    </div>
  );
}
