import Head from "next/head";
import { useState, useEffect } from "react";
import Navbar from "../components/Navbar"; // Make sure Navbar.jsx exists
import styles from "../styles/Home.module.css";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const storedMode = localStorage.getItem("darkMode");
    if (storedMode) {
      setDarkMode(storedMode === "true");
    }
  }, []);

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem("darkMode", newMode);
  };

  return (
    <>
      <Head>
        <title>ZYTO Balance</title>
        <meta name="description" content="ZYTO Balance Scanner App" />
        <link rel="icon" href="/favicon.ico" />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXX"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-XXXXXXX');`,
          }}
        />
      </Head>

      <div
        className={[
          styles.page,
          darkMode ? styles.dark : styles.light,
        ].join(" ")}
      >
        <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

        <h1>Welcome to ZYTO Balance</h1>
        {/* Add more content here */}
      </div>
    </>
  );
    }
