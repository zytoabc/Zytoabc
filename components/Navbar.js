import React from 'react';
import styles from '../styles/Home.module.css';

export default function Navbar({ darkMode, toggleDarkMode }) {
  return (
    <div className={`${styles.navbar} ${darkMode ? styles.darkNavbar : styles.lightNavbar}`}>
      <h2>ABC ZYTO Scanning</h2>
      <div>
        <a href="#about" className={styles.link}>About</a>
        <a href="#coherence" className={styles.link}>Coherence</a>
        <a href="#emotions" className={styles.link}>Emotions</a>
        <a href="#gallery" className={styles.link}>Gallery</a>
        <button className={styles.button} onClick={toggleDarkMode}>
          {darkMode ? '🌙' : '☀️'}
        </button>
      </div>
    </div>
  );
  }
