import React, { useState } from 'react';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import VideoGallery from '../components/VideoGallery';
import OverviewVideo from '../components/OverviewVideo';
import ImageGallery from '../components/ImageGallery';
import SocialButton from '../components/SocialButton';
import Disclaimer from '../components/Disclaimer';
import WelcomeSection from '../components/WelcomeSection';
import WhatIsZyto from '../components/WhatIsZyto';
import HowZytoWorks from '../components/HowZytoWorks';
import EmotionalWellness from '../components/EmotionalWellness';
import CredentialsAndTestimonials from '../components/CredentialsAndTestimonials';

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}>
      {/* Navbar */}
      <Navbar darkMode={darkMode} toggleDarkMode={() => setDarkMode(!darkMode)} />

      {/* Hero Section */}
      <section className="text-white py-20 px-6 bg-gradient-to-br from-blue-900 to-blue-600 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Discover Wellness with ZYTO</h1>
        <p className="text-lg md:text-xl mb-6 max-w-2xl mx-auto">
          Get scanned, gain insights, and start your emotional wellness journey today.
        </p>
        <Link
          href="/zyto-images"
          className="bg-white text-blue-900 font-bold px-6 py-3 rounded-xl shadow hover:bg-gray-200 transition"
        >
          👉 View Zyto Activities
        </Link>
      </section>

      {/* Main Content Container */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        <WelcomeSection />
        <WhatIsZyto />
        <OverviewVideo />
        <HowZytoWorks />
        <EmotionalWellness />

        {/* Image Gallery Section */}
        <section>
          <h2 className="text-3xl font-bold mb-6 text-center">Image Gallery</h2>
          <ImageGallery darkMode={darkMode} />
        </section>

        {/* Video Gallery Section */}
        <section>
          <h2 className="text-3xl font-bold mb-6 text-center">Video Highlights</h2>
          <VideoGallery />
        </section>

        {/* Testimonials Section */}
        <section>
          <h2 className="text-3xl font-bold mb-6 text-center">What People Say</h2>
          <CredentialsAndTestimonials darkMode={darkMode} />
        </section>

        {/* Social Buttons */}
        <section className="text-center space-y-4">
          <h3 className="text-xl font-semibold mb-2">Connect with Me</h3>
          <div className="flex justify-center gap-6">
            <SocialButton
              href="https://www.facebook.com/joreen.torno.3"
              label="Visit My Facebook"
              emoji="📘"
            />
            <SocialButton
              href="https://www.tiktok.com/@natura_lista9"
              label="Visit My TikTok"
              emoji="🎵"
            />
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-10">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-6">
          <div>
            <h3 className="font-bold text-lg mb-2">About</h3>
            <p>
              ZYTO technology empowers emotional and physical wellness through advanced
              biofeedback scanning. Discover insights that lead to better health.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-2">Contact</h3>
            <p>Email: support@zytowellness.com</p>
            <p>Phone: +123 456 7890</p>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-2">Follow</h3>
            <div className="flex space-x-4 mt-2">
              <SocialButton
                href="https://www.facebook.com/joreen.torno.3"
                label="Facebook"
                emoji="📘"
              />
              <SocialButton
                href="https://www.tiktok.com/@natura_lista9"
                label="TikTok"
                emoji="🎵"
              />
            </div>
          </div>
        </div>
        <div className="text-center mt-10 text-sm text-gray-400">
          <Disclaimer darkMode={darkMode} />
        </div>
      </footer>
    </div>
  );
}
