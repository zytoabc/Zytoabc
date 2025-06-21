import React from 'react';
import { Link } from 'react-router-dom';

interface NavbarProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

export default function Navbar({ darkMode, toggleDarkMode }: NavbarProps) {
  return (
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
      <div style={{ display: 'flex', gap: 20 }}>
        <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
          <h2 style={{ margin: 0 }}>Zyto ScanPH</h2>
        </Link>
        <Link to="/zyto-images" style={{ textDecoration: 'none', color: 'inherit', fontWeight: 'bold' }}>
          Zyto Activities
        </Link>
      </div>

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
  );
}
