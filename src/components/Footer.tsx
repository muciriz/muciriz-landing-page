import React from 'react';
import { Phone, MessageCircle, ShieldCheck, Mail, MapPin, ArrowRight } from 'lucide-react';
import { LegalDocType } from '../data/legalDocuments';

interface FooterProps {
  onOpenLegal: (type: LegalDocType) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenLegal }) => {
  return (
    <footer style={{ backgroundColor: 'var(--pine-900)', color: '#9AAFA9', paddingTop: '4rem', paddingBottom: '2.5rem' }}>
      <div className="container">
        {/* Top Highlighted Helpline & Support Banner */}
        <div
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.05)',
            border: '1px solid rgba(255, 255, 255, 0.12)',
            borderRadius: '16px',
            padding: '1.5rem 2rem',
            marginBottom: '3.5rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1.5rem',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
            <div
              style={{
                width: '3rem',
                height: '3rem',
                borderRadius: '12px',
                backgroundColor: 'var(--pine-800)',
                color: 'var(--gold-light)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
                border: '1px solid rgba(255, 255, 255, 0.1)',
              }}
            >
              <Phone size={22} />
            </div>
            <div>
              <span style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.1em', color: 'var(--gold-light)', textTransform: 'uppercase', display: 'block' }}>
                MUCIRIZ CUSTOMER HELPLINE & DISPATCH CARE
              </span>
              <div style={{ fontSize: '1.25rem', fontWeight: 700, color: '#ffffff', marginTop: '0.15rem' }}>
                <a href="tel:9447728387" style={{ color: '#ffffff', textDecoration: 'none' }}>
                  +91 94477 28387
                </a>
                <span style={{ fontSize: '0.82rem', fontWeight: 400, color: '#9AAFA9', marginLeft: '0.85rem' }}>
                  (06:00 AM – 08:00 PM Daily)
                </span>
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', flexWrap: 'wrap' }}>
            <a
              href="https://wa.me/919447728387?text=Hi%20Muciriz%20Team%2C%20I%20have%20an%20inquiry%20regarding%20fresh%20catch"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.45rem',
                backgroundColor: '#16A34A',
                color: '#ffffff',
                fontSize: '0.84rem',
                fontWeight: 600,
                padding: '0.6rem 1.15rem',
                borderRadius: '8px',
                textDecoration: 'none',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#15803D')}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#16A34A')}
            >
              <MessageCircle size={16} />
              <span>WhatsApp Helpline</span>
            </a>

            <a
              href="tel:9447728387"
              className="btn-outline"
              style={{
                fontSize: '0.84rem',
                padding: '0.6rem 1.15rem',
                borderRadius: '8px',
                backgroundColor: 'transparent',
                color: '#ffffff',
                borderColor: 'rgba(255, 255, 255, 0.25)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
              }}
            >
              <span>Call Helpline</span>
            </a>
          </div>
        </div>

        {/* Main Footer Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '3rem',
            paddingBottom: '3.5rem',
            borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
          }}
        >
          {/* Column 1: Brand & Contact */}
          <div style={{ maxWidth: '340px' }}>
            <div style={{ marginBottom: '1.25rem' }}>
              <span
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '1.65rem',
                  fontWeight: 700,
                  letterSpacing: '0.12em',
                  color: '#ffffff',
                  display: 'block',
                  lineHeight: 1,
                }}
              >
                MUCIRIZ
              </span>
              <span
                style={{
                  fontSize: '0.62rem',
                  fontWeight: 700,
                  letterSpacing: '0.18em',
                  color: 'var(--gold-light)',
                  textTransform: 'uppercase',
                  display: 'block',
                  marginTop: '0.3rem',
                }}
              >
                SHORE HARVEST & KITCHEN
              </span>
            </div>

            <p style={{ fontSize: '0.85rem', lineHeight: 1.65, color: '#A5B9B3', marginBottom: '1.5rem' }}>
              Honest cold-handled seafood, stone-ground heirloom spice mixes, and curated farm-fresh 
              vegetable bunches. 100% chemical-free with full net-weight transparency. Powered by cold-chain logistics across Kerala.
            </p>

            <div style={{ marginBottom: '1.5rem' }}>
              <a href="#app-download" className="btn-playstore" style={{ padding: '0.45rem 0.95rem' }}>
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
            </div>

            <div style={{ fontSize: '0.8rem', color: '#889C96', lineHeight: 1.6 }}>
              <div>Head Office: Viswamatha Building, Athirampuzha, Kerala - 686562</div>
              <div>Direct Email: <a href="mailto:customercare@muciriz.in" style={{ color: 'var(--gold-light)' }}>customercare@muciriz.in</a></div>
            </div>
          </div>

          {/* Column 2: Fresh Catch Cuts */}
          <div>
            <h4
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '1.05rem',
                fontWeight: 700,
                color: '#ffffff',
                marginBottom: '1.25rem',
              }}
            >
              Fresh Catch Cuts
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.7rem', fontSize: '0.86rem' }}>
              <li><a href="#products" style={{ color: '#A5B9B3' }}>Neymeen (Kingfish) Steaks</a></li>
              <li><a href="#products" style={{ color: '#A5B9B3' }}>Karimeen Whole Cleaned</a></li>
              <li><a href="#products" style={{ color: '#A5B9B3' }}>Chemmeen (Tiger Prawns)</a></li>
              <li><a href="#products" style={{ color: '#A5B9B3' }}>Aavoli (White Pomfret)</a></li>
              <li><a href="#products" style={{ color: '#A5B9B3' }}>Daily Harbour Landings</a></li>
            </ul>
          </div>

          {/* Column 3: Kitchen & Farm */}
          <div>
            <h4
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '1.05rem',
                fontWeight: 700,
                color: '#ffffff',
                marginBottom: '1.25rem',
              }}
            >
              Kitchen & Farm
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.7rem', fontSize: '0.86rem' }}>
              <li><a href="#products" style={{ color: '#A5B9B3' }}>Syrian Fish Curry Paste</a></li>
              <li><a href="#products" style={{ color: '#A5B9B3' }}>Pollichathu Marinade</a></li>
              <li><a href="#products" style={{ color: '#A5B9B3' }}>VegEze Sambar Bunches</a></li>
              <li><a href="#products" style={{ color: '#A5B9B3' }}>Daily Greens & Shallot Toppers</a></li>
              <li><a href="#products" style={{ color: '#A5B9B3' }}>Cold Stone Ground Spices</a></li>
            </ul>
          </div>

          {/* Column 4: Policies, Terms & Governance */}
          <div>
            <h4
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '1.05rem',
                fontWeight: 700,
                color: '#ffffff',
                marginBottom: '1.25rem',
              }}
            >
              Policies & Governance
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.7rem', fontSize: '0.86rem' }}>
              <li>
                <button
                  onClick={() => onOpenLegal('customer-privacy')}
                  style={{ background: 'none', border: 'none', color: '#A5B9B3', cursor: 'pointer', textAlign: 'left', fontSize: '0.86rem', padding: 0 }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#ffffff')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '#A5B9B3')}
                >
                  Customer Privacy Policy
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenLegal('customer-terms')}
                  style={{ background: 'none', border: 'none', color: '#A5B9B3', cursor: 'pointer', textAlign: 'left', fontSize: '0.86rem', padding: 0 }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#ffffff')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '#A5B9B3')}
                >
                  Customer Terms & Conditions
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenLegal('staff-privacy')}
                  style={{ background: 'none', border: 'none', color: '#A5B9B3', cursor: 'pointer', textAlign: 'left', fontSize: '0.86rem', padding: 0 }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#ffffff')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '#A5B9B3')}
                >
                  Staff Privacy Policy
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenLegal('staff-terms')}
                  style={{ background: 'none', border: 'none', color: '#A5B9B3', cursor: 'pointer', textAlign: 'left', fontSize: '0.86rem', padding: 0 }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#ffffff')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '#A5B9B3')}
                >
                  Staff Terms & Conditions
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenLegal('account-deletion')}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: '#F87171',
                    cursor: 'pointer',
                    textAlign: 'left',
                    fontSize: '0.86rem',
                    padding: 0,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    fontWeight: 600,
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#FCA5A5')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '#F87171')}
                >
                  <span>Request Account Deletion</span>
                  <span
                    style={{
                      fontSize: '0.62rem',
                      backgroundColor: 'rgba(239, 68, 68, 0.2)',
                      color: '#FCA5A5',
                      padding: '0.1rem 0.4rem',
                      borderRadius: '4px',
                      textTransform: 'uppercase',
                      letterSpacing: '0.04em',
                    }}
                  >
                    Play Store
                  </span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenLegal('customer-privacy')}
                  style={{ background: 'none', border: 'none', color: 'var(--gold-light)', cursor: 'pointer', textAlign: 'left', fontSize: '0.86rem', padding: 0, fontWeight: 600 }}
                >
                  Grievance Officer Redressal
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Subfooter */}
        <div
          style={{
            paddingTop: '2rem',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1rem',
            fontSize: '0.78rem',
            color: '#71857F',
          }}
        >
          <div>
            © 2026 <strong>Muciriz Traders</strong>. All rights reserved.
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
            <span>Pre-orders before 10:00 PM</span>
            <span>•</span>
            <span>100% Formalin-Free</span>
            <span>•</span>
            <span>Cold-Chain Fleet</span>
            <span>•</span>
            <button
              onClick={() => onOpenLegal('account-deletion')}
              style={{
                background: 'none',
                border: 'none',
                color: '#A5B9B3',
                cursor: 'pointer',
                fontSize: '0.78rem',
                textDecoration: 'underline',
              }}
            >
              Delete Account URL
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
