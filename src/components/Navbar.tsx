import React, { useState } from 'react';
import { Menu, X, ShieldCheck, Phone, Smartphone } from 'lucide-react';
import { LegalDocType } from '../data/legalDocuments';

interface NavbarProps {
  onOpenLegal: (type: LegalDocType) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenLegal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Our Brands', href: '#brands' },
    { name: 'Quality Standard', href: '#standards' },
    { name: "Today's Catch", href: '#products' },
    { name: 'Headquarters & Hubs', href: '#contact' },
  ];

  return (
    <header style={{ position: 'sticky', top: 0, zIndex: 1000, width: '100%' }}>
      {/* Top Announcement Bar - Focused Exclusively on Daily Pre-Order Notice */}
      <div
        style={{
          backgroundColor: 'var(--pine-900)',
          color: '#E2ECE9',
          fontSize: '0.78rem',
          padding: '0.5rem 1.5rem',
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
        }}
      >
        <div
          className="container"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            gap: '0.65rem',
          }}
        >
          <span
            style={{
              width: '7px',
              height: '7px',
              borderRadius: '50%',
              backgroundColor: '#10B981',
              display: 'inline-block',
              boxShadow: '0 0 8px #10B981',
              flexShrink: 0,
            }}
          />
          <span style={{ letterSpacing: '0.02em', fontWeight: 600 }}>
            Daily Pre-Order: Book before 10:00 PM for morning delivery • Certified 0% Formalin catch • Vacuum Sealed Freshness
          </span>
        </div>
      </div>

      {/* Main Navbar */}
      <div
        style={{
          backgroundColor: '#ffffff',
          borderBottom: '1px solid var(--border-light)',
          boxShadow: '0 2px 10px rgba(0, 0, 0, 0.03)',
        }}
      >
        <div
          className="container"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: '4.75rem',
          }}
        >
          {/* Logo */}
          <a href="#" style={{ display: 'flex', flexDirection: 'column', textDecoration: 'none' }}>
            <span
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '1.75rem',
                fontWeight: 700,
                letterSpacing: '0.12em',
                color: 'var(--pine-900)',
                lineHeight: 1,
              }}
            >
              MUCIRIZ
            </span>
            <span
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.62rem',
                fontWeight: 700,
                letterSpacing: '0.2em',
                color: 'var(--pine-600)',
                textTransform: 'uppercase',
                marginTop: '0.2rem',
              }}
            >
              Shore Harvest & Kitchen
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav
            style={{ display: 'none', alignItems: 'center', gap: '2rem' }}
            className="desktop-menu"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                style={{
                  fontSize: '0.88rem',
                  fontWeight: 600,
                  color: 'var(--text-body)',
                  transition: 'color 0.15s ease',
                  letterSpacing: '-0.01em',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--pine-700)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-body)')}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action: Helpline Button */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <a
              href="tel:9447728387"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.45rem',
                backgroundColor: 'var(--pine-900)',
                color: '#ffffff',
                padding: '0.52rem 1.1rem',
                borderRadius: '8px',
                fontSize: '0.84rem',
                fontWeight: 600,
                textDecoration: 'none',
                transition: 'all 0.2s ease',
                border: '1px solid var(--pine-800)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--pine-800)';
                e.currentTarget.style.transform = 'translateY(-1px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--pine-900)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <Phone size={14} color="var(--gold-light)" />
              <span>Helpline: 94477 28387</span>
            </a>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '2.5rem',
                height: '2.5rem',
                borderRadius: '6px',
                border: '1px solid var(--border-light)',
                backgroundColor: '#ffffff',
                cursor: 'pointer',
              }}
              className="mobile-btn"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X size={20} color="#000000" /> : <Menu size={20} color="#000000" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          style={{
            backgroundColor: '#ffffff',
            borderBottom: '2px solid var(--pine-800)',
            padding: '1.25rem 1.5rem',
            boxShadow: '0 10px 25px rgba(0, 0, 0, 0.08)',
          }}
          className="mobile-menu"
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                style={{
                  fontSize: '0.95rem',
                  fontWeight: 600,
                  color: 'var(--pine-900)',
                  padding: '0.35rem 0',
                }}
              >
                {link.name}
              </a>
            ))}
            <hr style={{ border: 'none', borderTop: '1px solid var(--border-subtle)', margin: '0.5rem 0' }} />
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenLegal('customer-privacy');
              }}
              style={{
                background: 'none',
                border: 'none',
                textAlign: 'left',
                padding: '0.35rem 0',
                color: 'var(--pine-700)',
                fontWeight: 600,
                fontSize: '0.9rem',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
              }}
            >
              <ShieldCheck size={16} color="#10B981" />
              <span>Customer Privacy & Terms</span>
            </button>
          </div>
        </div>
      )}

      <style>{`
        @media (min-width: 992px) {
          .desktop-menu { display: flex !important; }
          .mobile-btn { display: none !important; }
        }
      `}</style>
    </header>
  );
};
