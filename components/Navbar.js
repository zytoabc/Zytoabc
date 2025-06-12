import React from 'react';
import styles from '../styles/Home.module.css';

export default function Navbar({ darkMode, toggleDarkMode }) {
  return (
    <div className={`${styles.navbar} ${darkMode ? styles.darkNavbar : styles.lightNavbar}`}>
      <h2>ZYTO Balance Scanning</h2>
      <div>
        <button className={styles.button} onClick={toggleDarkMode}>
          {darkMode ? '🌙' : '☀️'}
        </button>
      </div>
    </div>
  );
  }
