import React from 'react';
import Navbar from '../components/Navbar';


export default function Home() {
  return (
    <>
      <Navbar />
      <main style={{ fontFamily: 'sans-serif', padding: 40 }}>
        <h1>Welcome to abc-zyto-scanning</h1>
        <p>This project is ready to deploy on Vercel and GitHub.</p>
      </main>
    </>
  );
}
