import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Toast } from './components/Toast';
import { CustomCursor } from './components/CustomCursor';
import { BUSINESS_INFO } from './data/agencyData';
import { ToastMessage } from './types';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [toast, setToast] = useState<ToastMessage | null>(null);

  // Copy phone helper
  const handleCopyPhone = () => {
    navigator.clipboard.writeText(BUSINESS_INFO.phoneRaw).then(() => {
      showToast(`Phone number copied: ${BUSINESS_INFO.phone}`, 'info');
    }).catch(() => {
      showToast(`Direct Call: ${BUSINESS_INFO.phone}`, 'info');
    });
  };

  // Copy email helper
  const handleCopyEmail = () => {
    navigator.clipboard.writeText(BUSINESS_INFO.email).then(() => {
      showToast(`Email copied: ${BUSINESS_INFO.email}`, 'info');
    }).catch(() => {
      showToast(`Email: ${BUSINESS_INFO.email}`, 'info');
    });
  };

  const showToast = (text: string, type: 'success' | 'info' = 'success') => {
    setToast({
      id: Date.now().toString(),
      text,
      type,
    });
  };

  // Active section scroll spy
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#08080a] text-zinc-100 relative font-sans selection:bg-red-600 selection:text-white">
      {/* Ambient Mouse Tracking Light & Custom Cursor */}
      <CustomCursor />

      {/* Main Navigation Header */}
      <Navbar
        activeSection={activeSection}
        onCopyPhone={handleCopyPhone}
      />

      {/* Main Content Sections */}
      <main>
        <Hero
          onCopyPhone={handleCopyPhone}
          onCopyEmail={handleCopyEmail}
        />

        <About />

        <Contact
          onCopyPhone={handleCopyPhone}
          onCopyEmail={handleCopyEmail}
          onShowToast={(msg) => showToast(msg, 'success')}
        />
      </main>

      {/* Footer */}
      <Footer
        onCopyPhone={handleCopyPhone}
        onCopyEmail={handleCopyEmail}
      />

      {/* Global Toast Notification */}
      <Toast toast={toast} onClose={() => setToast(null)} />
    </div>
  );
}
