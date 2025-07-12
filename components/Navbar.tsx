// components/Navbar.jsx
import React from 'react';
import Link from 'next/link';
import './Navbar.css'; // Make sure this file exists

export default function Navbar({ darkMode, toggleDarkMode }) {
  return (
    <nav className="navbar">
      <div className="logo">
        <Link href="/">ZYTO Wellness</Link>
      </div>

      <ul className="navLinks">
        <li><Link href="/">Home</Link></li>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/zyto-images">Gallery</Link></li>
        <li><Link href="/contact">Contact</Link></li>
      </ul>

      <button onClick={toggleDarkMode} className="toggleBtn">
        {darkMode ? 'Light Mode' : 'Dark Mode'}
      </button>
    </nav>
  );
}
