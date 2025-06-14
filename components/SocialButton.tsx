// components/SocialButton.tsx
import React from 'react';

interface SocialButtonProps {
  href: string;
  label: string;
  emoji: string;
}

export default function SocialButton({ href, label, emoji }: SocialButtonProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        display: 'inline-block',
        marginTop: 20,
        padding: '14px 28px',
        background: 'linear-gradient(to right, #00c6ff, #0072ff)',
        color: 'white',
        borderRadius: 10,
        textDecoration: 'none',
        fontWeight: 'bold',
        boxShadow: '0 6px 16px rgba(0, 0, 0, 0.4)',
        marginRight: 12,
      }}
    >
      {emoji} {label}
    </a>
  );
}
