import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { StandardsSection } from './components/StandardsSection';
import { ProductCatalog } from './components/ProductCatalog';
import { AppDownloadBanner } from './components/AppDownloadBanner';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { LegalPage } from './components/LegalPage';
import { LegalDocType } from './data/legalDocuments';

export function App() {
  const [currentView, setCurrentView] = useState<'home' | 'legal'>('home');
  const [activeLegalDoc, setActiveLegalDoc] = useState<LegalDocType>('customer-privacy');

  const navigateToLegal = (type: LegalDocType) => {
    setActiveLegalDoc(type);
    setCurrentView('legal');
    const hash =
      type === 'customer-privacy'
        ? '#privacy-policy'
        : type === 'customer-terms'
        ? '#terms-and-conditions'
        : `#${type}`;
    window.location.hash = hash;
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const navigateToHome = () => {
    setCurrentView('home');
    if (
      window.location.hash &&
      (window.location.hash.includes('terms') ||
        window.location.hash.includes('privacy') ||
        window.location.hash.includes('legal'))
    ) {
      history.pushState('', document.title, window.location.pathname + window.location.search);
    }
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  useEffect(() => {
    const handleRouteCheck = () => {
      const hash = window.location.hash.toLowerCase();
      const path = window.location.pathname.toLowerCase();

      if (hash.includes('privacy') || path.includes('privacy')) {
        if (hash.includes('staff')) {
          setActiveLegalDoc('staff-privacy');
        } else {
          setActiveLegalDoc('customer-privacy');
        }
        setCurrentView('legal');
      } else if (hash.includes('terms') || path.includes('terms')) {
        if (hash.includes('staff')) {
          setActiveLegalDoc('staff-terms');
        } else {
          setActiveLegalDoc('customer-terms');
        }
        setCurrentView('legal');
      } else if (hash.includes('legal')) {
        setCurrentView('legal');
      } else if (currentView === 'legal' && !hash) {
        setCurrentView('home');
      }
    };

    handleRouteCheck();
    window.addEventListener('hashchange', handleRouteCheck);
    window.addEventListener('popstate', handleRouteCheck);
    return () => {
      window.removeEventListener('hashchange', handleRouteCheck);
      window.removeEventListener('popstate', handleRouteCheck);
    };
  }, []);

  // When on dedicated Legal Page View
  if (currentView === 'legal') {
    return (
      <LegalPage
        activeDoc={activeLegalDoc}
        onSelectDoc={(type) => {
          setActiveLegalDoc(type);
          const hash =
            type === 'customer-privacy'
              ? '#privacy-policy'
              : type === 'customer-terms'
              ? '#terms-and-conditions'
              : `#${type}`;
          window.location.hash = hash;
        }}
        onBackToHome={navigateToHome}
      />
    );
  }

  // Main Landing Page View
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* 1. Header with Pre-Order Bar & Compact App Action */}
      <Navbar onOpenLegal={navigateToLegal} />

      {/* Main Landing Page Flow */}
      <main>
        {/* 2. Hero Section: Editorial Story, Download on Playstore, & Brands/Traditions Slider */}
        <Hero />

        {/* 3. Who We Are & What We Do: 5 AM Harbour, Fishermen Equity, Ozone Sanitization & Sub-3°C Bar */}
        <StandardsSection />

        {/* 4. Brief Showcase of Today's Provisions available on the App */}
        <ProductCatalog onOpenLegal={navigateToLegal} />

        {/* 5. Mobile App Features Banner with Realistic Android Phone Mockup */}
        <AppDownloadBanner />

        {/* 6. Direct Helpline, WhatsApp & Hubs (Zero Complicated Query Forms) */}
        <ContactSection onOpenLegal={navigateToLegal} />
      </main>

      {/* 7. Heritage Footer with Prominent Helpline Banner & Full Legal Policies */}
      <Footer onOpenLegal={navigateToLegal} />
    </div>
  );
}

export default App;
