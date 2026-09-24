import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { StandardsSection } from './components/StandardsSection';
import { ProductCatalog } from './components/ProductCatalog';
import { AppDownloadBanner } from './components/AppDownloadBanner';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { LegalModal } from './components/LegalModal';
import { LegalDocType } from './data/legalDocuments';

export function App() {
  const [legalModalOpen, setLegalModalOpen] = useState(false);
  const [activeLegalDoc, setActiveLegalDoc] = useState<LegalDocType>('customer-privacy');

  const handleOpenLegal = (type: LegalDocType) => {
    setActiveLegalDoc(type);
    setLegalModalOpen(true);
  };

  useEffect(() => {
    const hash = window.location.hash;
    if (hash === '#privacy-policy' || hash === '#privacy') {
      handleOpenLegal('customer-privacy');
    } else if (hash === '#terms' || hash === '#terms-and-conditions') {
      handleOpenLegal('customer-terms');
    } else if (hash === '#staff-privacy') {
      handleOpenLegal('staff-privacy');
    } else if (hash === '#staff-terms') {
      handleOpenLegal('staff-terms');
    }
  }, []);

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* 1. Header with Pre-Order Bar & Compact App Action */}
      <Navbar onOpenLegal={handleOpenLegal} />

      {/* Main Page Flow */}
      <main>
        {/* 2. Hero Section: Editorial Story, Download on Playstore, & Brands/Traditions Slider */}
        <Hero />

        {/* 3. Who We Are & What We Do: 5 AM Harbour, Fishermen Equity, Ozone Sanitization & Sub-3°C Bar */}
        <StandardsSection />

        {/* 4. Brief Showcase of Today's Provisions available on the App */}
        <ProductCatalog onOpenLegal={handleOpenLegal} />

        {/* 5. Mobile App Features Banner with Realistic Android Phone Mockup */}
        <AppDownloadBanner />

        {/* 6. Direct Helpline, WhatsApp & Hubs (Zero Complicated Query Forms) */}
        <ContactSection onOpenLegal={handleOpenLegal} />
      </main>

      {/* 7. Heritage Footer with Prominent Helpline Banner & Full Legal Policies */}
      <Footer onOpenLegal={handleOpenLegal} />

      {/* Interactive Legal Documentation Modal */}
      <LegalModal
        isOpen={legalModalOpen}
        activeDoc={activeLegalDoc}
        onClose={() => setLegalModalOpen(false)}
        onSelectDoc={(type) => setActiveLegalDoc(type)}
      />
    </div>
  );
}

export default App;
