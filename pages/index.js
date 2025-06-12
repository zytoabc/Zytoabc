import React, { useState } from 'react';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import styles from '../styles/Home.module.css';

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  const images = [
    'https://example.com/images/img1.jpeg',
    'https://example.com/images/img2.jpeg',
    'https://example.com/images/img3.jpeg',
    'https://example.com/images/img4.jpeg',
    'https://example.com/images/img5.jpeg',
    'https://example.com/images/img6.jpeg',
    'https://example.com/images/img7.jpeg',
    'https://example.com/images/img8.jpeg',
    'https://example.com/images/img9.jpeg'
  ];

  return (
    <>
      <Head>
  <title>ZYTO Balance</title>
  <meta name="description" content="Empowering personalized wellness through ZYTO bio-communication technology." />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta charSet="UTF-8" />
  <meta name="author" content="Joreen Torno" />
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXX"></script>
  <script
    dangerouslySetInnerHTML={{
      __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-XXXXXXX');
      `.trim()
    }}
  />
</Head>

      <div className={\`\${styles.page} \${darkMode ? styles.dark : styles.light}\`}>
        <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

        <h1>Welcome to ZYTO Balance</h1>
        <p>Empowering personalized wellness through bio-communication technology.</p>

        <div id="about" className={styles.section}>
          <h2>What is ZYTO Balance?</h2>
          <p>ZYTO Balance uses GSR data to determine biological coherence with over 190 biomarkers...</p>
          <ul>
            <li>190+ biomarker analysis</li>
            <li>Personalized supplement suggestions</li>
            <li>Emotional wellness via neurofeedback</li>
            <li>Food biosurveys</li>
            <li>Appointment generation</li>
          </ul>
        </div>

        <div id="coherence" className={styles.section}>
          <h2>How ZYTO Measures Coherence</h2>
          <p>The ZYTO Hand Cradle gathers GSR data...</p>
        </div>

        <div className={styles.section}>
          <h2>Why Biological Coherence Matters</h2>
          <p>ZYTO software uses virtual items to simulate how a body may respond...</p>
        </div>

        <div id="emotions" className={styles.section}>
          <h2>Improve Emotional Wellness</h2>
          <p>ZYTO's perception reframing analyzes voice frequencies to restore balance...</p>
        </div>

        <div className={styles.section}>
          <h2>Watch the ZYTO Overview</h2>
          <div className={styles.videoContainer}>
            <iframe
              src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
              title="ZYTO Overview"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className={styles.iframe}
            ></iframe>
          </div>
        </div>

        <div id="gallery" className={styles.section}>
          <h2>Image Gallery</h2>
          <div className={styles.gallery}>
            {images.map((img, index) => (
              <img
                key={index}
                src={img}
                loading="lazy"
                alt={\`Gallery Image \${index + 1}\`}
                className={styles.galleryImage}
              />
            ))}
          </div>
        </div>

        <a
          href="https://www.facebook.com/joreen.torno.3"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.facebookButton}
        >
          Visit My Facebook
        </a>

        <div className={`${styles.section} ${styles.disclaimer}`}>
          <h3>Disclaimer</h3>
          <p>This content is for educational purposes only and is not intended to diagnose, treat, cure, or prevent any disease...</p>
        </div>
      </div>
    </>
  );
}
