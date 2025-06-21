import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Navbar from './Navbar';
import ZytoImagesPage from './ZytoImagesPage';

function Home() {
  return <h1 style={{ marginTop: 80, textAlign: 'center' }}>Welcome to Zyto ScanPH</h1>;
}

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <Router>
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <div style={{ paddingTop: 60, background: darkMode ? '#121212' : '#f5f5f5', minHeight: '100vh' }}>
        <div style={{ padding: 20 }}>
          <nav>
            <Link to="/" style={{ marginRight: 20 }}>Home</Link>
            <Link to="/zyto-images">Zyto Activities</Link>
          </nav>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/zyto-images" element={<ZytoImagesPage darkMode={darkMode} />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}
