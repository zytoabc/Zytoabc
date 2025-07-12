import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

interface NavbarProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const pages = [
  { name: 'Home', path: '/' },
  { name: 'Zyto Activities', path: '/zyto-images' }, // Matches your actual file name
];

export default function Navbar({ darkMode, toggleDarkMode }: NavbarProps) {
  const router = useRouter();

  return (
    <>
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          height: 60,
          backgroundColor: darkMode ? '#0b0f2c' : '#ffffff',
          color: darkMode ? '#BBDEFB' : '#0D47A1',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '0 30px',
          boxShadow: '0 4px 20px rgba(13, 71, 161, 0.4)',
          zIndex: 1000,
        }}
      >
        <Link href="/" style={{ color: 'inherit', textDecoration: 'none' }}>
          <h2 style={{ margin: 0 }}>Zyto ScanPH</h2>
        </Link>

        <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
          {pages.map((page) => (
            <Link
              key={page.path}
              href={page.path}
              style={{
                color: router.pathname === page.path ? '#42A5F5' : 'inherit',
                textDecoration: 'none',
                fontWeight: router.pathname === page.path ? 'bold' : 'normal',
              }}
            >
              {page.name}
            </Link>
          ))}

          <button
            onClick={toggleDarkMode}
            style={{
              padding: '10px 18px',
              borderRadius: 8,
              background: darkMode
                ? 'linear-gradient(45deg, #2196f3, #1e88e5)'
                : 'linear-gradient(45deg, #64b5f6, #1976d2)',
              color: '#fff',
              border: 'none',
              fontWeight: 'bold',
              cursor: 'pointer',
            }}
          >
            {darkMode ? '🌙 Dark Mode' : '☀️ Light Mode'}
          </button>
        </div>
      </div>

      {/* Spacer to avoid content being hidden under the navbar */}
      <div style={{ height: 60 }} />
    </>
  );
}
