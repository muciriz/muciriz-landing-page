import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { BrandsShowcase } from './components/BrandsShowcase';
import { AppDownloadBanner } from './components/AppDownloadBanner';
import { ProductCatalog } from './components/ProductCatalog';
import { HeritageQualitySection } from './components/HeritageQualitySection';
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
      {/* 1. Header with Top Green Bar and Brand Navigation */}
      <Navbar onOpenLegal={handleOpenLegal} />

      {/* Main Page Flow Matching Reference Design */}
      <main>
        {/* 2. Hero Section: Editorial Sea Freshness with Traditional Fish Curry */}
        <Hero />

        {/* 3. Dual Flagship Brands: ShoreCatch & Zuriyani Kitchen */}
        <BrandsShowcase />

        {/* 4. Dark Pine Android Mobile App Feature Banner with Phone Mockup */}
        <AppDownloadBanner />

        {/* 5. Chilled Daily Provisions: 4-Column Product Catalog */}
        <ProductCatalog onOpenLegal={handleOpenLegal} />

        {/* 6. Ancient Traders' Trust & Quality Promise Section */}
        <HeritageQualitySection />

        {/* 7. Headquarters Physical Hub & Kitchen Inquiries */}
        <ContactSection onOpenLegal={handleOpenLegal} />
      </main>

      {/* 8. Editorial Heritage Footer */}
      <Footer onOpenLegal={handleOpenLegal} />

      {/* Interactive Comprehensive Legal Documentation Modal */}
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
