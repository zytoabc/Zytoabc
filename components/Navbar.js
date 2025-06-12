import React, { useState } from 'react';
import Link from 'next/link';
import styles from './Navbar.module.css';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link href="/">ABC Zyto</Link>
      </div>

      <div className={styles.menuToggle} onClick={toggleMenu}>
        {menuOpen ? <X size={24} /> : <Menu size={24} />}
      </div>

      <ul className={`${styles.navLinks} ${menuOpen ? styles.open : ''}`}>
        <li>
          <Link href="/" onClick={() => setMenuOpen(false)}>Home</Link>
        </li>
        <li>
          <Link href="/scan" onClick={() => setMenuOpen(false)}>Scan</Link>
        </li>
        <li>
          <Link href="/about" onClick={() => setMenuOpen(false)}>About</Link>
        </li>
      </ul>
    </nav>
  );
    }
