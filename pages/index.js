import React, { useState } from 'react'; import Head from 'next/head'; import Navbar from '../components/Navbar';

export default function Home() { const [darkMode, setDarkMode] = useState(true);

const images = [ 'https://example.com/images/img1.jpeg', 'https://example.com/images/img2.jpeg', 'https://example.com/images/img3.jpeg', 'https://example.com/images/img4.jpeg', 'https://example.com/images/img5.jpeg', 'https://example.com/images/img6.jpeg', 'https://example.com/images/img7.jpeg', 'https://example.com/images/img8.jpeg', 'https://example.com/images/img9.jpeg' ];

const styles = { page: { fontFamily: 'sans-serif', padding: 40, paddingTop: 100, paddingBottom: 60, minHeight: '100vh', color: darkMode ? '#E3F2FD' : '#0D47A1', background: darkMode ? 'linear-gradient(to bottom right, #0d1b2a, #1b263b, #415a77)' : 'linear-gradient(to bottom right, #e3f2fd, #ffffff)', transition: 'all 0.3s ease' }, navbar: { position: 'fixed', top: 0, left: 0, right: 0, height: 60, backgroundColor: darkMode ? '#0b0f2c' : '#ffffff', color: darkMode ? '#BBDEFB' : '#0D47A1', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 30px', boxShadow: '0 4px 20px rgba(13, 71, 161, 0.4)', zIndex: 1000 }, link: { marginLeft: 20, color: 'inherit', textDecoration: 'none', fontWeight: 'bold' }, button: { padding: '10px 18px', borderRadius: 8, background: darkMode ? 'linear-gradient(45deg, #2196f3, #1e88e5)' : 'linear-gradient(45deg, #64b5f6, #1976d2)', color: '#fff', border: 'none', fontWeight: 'bold', cursor: 'pointer' }, section: { marginTop: 40, maxWidth: 900, lineHeight: 1.7 }, img: { width: '100%', borderRadius: 12, boxShadow: '0 8px 16px rgba(13, 71, 161, 0.5)', transition: 'transform 0.3s ease' }, facebookButton: { display: 'inline-block', marginTop: 40, padding: '14px 28px', background: 'linear-gradient(to right, #00c6ff, #0072ff)', color: 'white', borderRadius: 10, textDecoration: 'none', fontWeight: 'bold' } };

return ( <> <Head> <title>ABC ZYTO Scanning</title> <meta name="description" content="Empowering personalized wellness through ZYTO bio-communication technology." /> <meta name="viewport" content="width=device-width, initial-scale=1" /> <meta charSet="UTF-8" /> <meta name="author" content="Joreen Torno" /> <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXX"></script> <script dangerouslySetInnerHTML={{ __html: window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-XXXXXXX'); }} /> </Head>

<div style={styles.page}>
    <div style={styles.navbar}>
      <h2>ABC ZYTO Scanning</h2>
      <div>
        <a href="#about" style={styles.link}>About</a>
        <a href="#coherence" style={styles.link}>Coherence</a>
        <a href="#emotions" style={styles.link}>Emotions</a>
        <a href="#gallery" style={styles.link}>Gallery</a>
        <button style={styles.button} onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? '🌙' : '☀️'}
        </button>
      </div>
    </div>

    <h1>Welcome to ABC ZYTO Scanning</h1>
    <p>Empowering personalized wellness through bio-communication technology.</p>

    <div id="about" style={styles.section}>
      <h2>What is ZYTO Balance?</h2>
      <p>
        ZYTO Balance uses GSR data to determine biological coherence with over 190 biomarkers...
      </p>
      <ul>
        <li>190+ biomarker analysis</li>
        <li>Personalized supplement suggestions</li>
        <li>Emotional wellness via neurofeedback</li>
        <li>Food biosurveys</li>
        <li>Appointment generation</li>
      </ul>
    </div>

    <div id="coherence" style={styles.section}>
      <h2>How ZYTO Measures Coherence</h2>
      <p>The ZYTO Hand Cradle gathers GSR data...</p>
    </div>

    <div style={styles.section}>
      <h2>Why Biological Coherence Matters</h2>
      <p>ZYTO software uses virtual items to simulate how a body may respond...</p>
    </div>

    <div id="emotions" style={styles.section}>
      <h2>Improve Emotional Wellness</h2>
      <p>ZYTO's perception reframing analyzes voice frequencies to restore balance...</p>
    </div>

    <div style={styles.section}>
      <h2>Watch the ZYTO Overview</h2>
      <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden' }}>
        <iframe
          src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
          title="ZYTO Overview"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
        ></iframe>
      </div>
    </div>

    <div id="gallery" style={styles.section}>
      <h2>Image Gallery</h2>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
          gap: 20,
          marginTop: 20
        }}
      >
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            loading="lazy"
            alt={`Gallery Image ${index + 1}`}
            style={styles.img}
            onMouseOver={e => (e.currentTarget.style.transform = 'scale(1.05)')}
            onMouseOut={e => (e.currentTarget.style.transform = 'scale(1)')}
          />
        ))}
      </div>
    </div>

    <a
      href="https://www.facebook.com/joreen.torno.3"
      target="_blank"
      rel="noopener noreferrer"
      style={styles.facebookButton}
    >
      Visit My Facebook
    </a>

    <div style={{ ...styles.section, fontSize: '0.9em', color: darkMode ? '#B0BEC5' : '#455A64' }}>
      <h3>Disclaimer</h3>
      <p>
        This content is for educational purposes only and is not intended to diagnose, treat, cure, or prevent any disease...
      </p>
    </div>
  </div>
</>

); }

