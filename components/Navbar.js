import React from 'react';


export default function Navbar({ darkMode, toggleDarkMode }) {
  return (
    <div className={`${styles.navbar} ${darkMode ? styles.darkNavbar : styles.lightNavbar}`}>
      <h2>ZYTO Scan</h2>
      <div>
        <button className={styles.button} onClick={toggleDarkMode}>
          {darkMode ? '🌙' : '☀️'}
        </button>
      </div>
    </div>
  );
  }
