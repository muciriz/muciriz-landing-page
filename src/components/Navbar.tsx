import React, { useState, useEffect } from 'react';
import { Menu, X, ShieldCheck, Phone } from 'lucide-react';
import { LegalDocType } from '../data/legalDocuments';

interface NavbarProps {
  onOpenLegal: (type: LegalDocType) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenLegal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Shore Catch Seafood', href: '#brands' },
    { name: 'Kitchen Masalas', href: '#brands' },
    { name: "Today's Catch", href: '#products' },
    { name: 'Freshness Standard', href: '#heritage' },
    { name: 'Cold-Chain Fleet', href: '#heritage' },
    { name: 'Our Heritage', href: '#heritage' },
  ];

  return (
    <header style={{ position: 'sticky', top: 0, zIndex: 1000, width: '100%' }}>
      {/* Top Announcement Bar */}
      <div
        style={{
          backgroundColor: 'var(--pine-900)',
          color: '#E2ECE9',
          fontSize: '0.75rem',
          padding: '0.45rem 1.5rem',
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
        }}
      >
        <div
          className="container"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '0.5rem',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span
              style={{
                width: '6px',
                height: '6px',
                borderRadius: '50%',
                backgroundColor: '#10B981',
                display: 'inline-block',
              }}
            />
            <span style={{ letterSpacing: '0.01em', fontWeight: 500 }}>
              Pre-order before 10:00 PM for morning delivery • Certified 0% Formalin catch
            </span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', fontSize: '0.75rem' }}>
            <a
              href="tel:9447728387"
              style={{ color: '#E2ECE9', textDecoration: 'none', fontWeight: 500 }}
            >
              Helpline: <strong style={{ color: '#ffffff' }}>+91 94477 28387</strong>
            </a>
            <span style={{ color: 'rgba(255,255,255,0.2)' }}>|</span>
            <button
              onClick={() => onOpenLegal('customer-privacy')}
              style={{
                background: 'none',
                border: 'none',
                color: '#CBD5E1',
                fontSize: '0.75rem',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.3rem',
              }}
            >
              <ShieldCheck size={13} color="#10B981" />
              <span>Policies & Trust</span>
            </button>
          </div>
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

          {/* Right Action: Google Play Store Button */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <a
              href="#app-download"
              className="btn-playstore"
              style={{ padding: '0.42rem 0.95rem' }}
            >
              <svg width="18" height="20" viewBox="0 0 24 24" fill="none">
                <path
                  d="M3.609 1.814L13.793 12 3.61 22.186A1.85 1.85 0 0 1 3 20.875V3.125c0-.498.225-.97.609-1.311z"
                  fill="#00D6FF"
                />
                <path
                  d="M17.18 8.613L4.938 1.488A1.83 1.83 0 0 0 3.61 1.814L13.793 12l3.387-3.387z"
                  fill="#00F076"
                />
                <path
                  d="M3.61 22.186c.384.342.884.444 1.328.186l12.242-7.125L13.793 12 3.61 22.186z"
                  fill="#FF3A44"
                />
                <path
                  d="M20.59 10.603l-3.41 1.984-3.387-3.387 3.387-3.387 3.41 1.984c.983.57 1.41 1.403 1.41 2.403 0 1-.427 1.833-1.41 2.403z"
                  fill="#FFAA00"
                />
              </svg>
              <div>
                <span className="playstore-sub">GET IT ON</span>
                <span className="playstore-main">Google Play</span>
              </div>
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
