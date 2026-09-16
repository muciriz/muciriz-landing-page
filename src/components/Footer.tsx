import React from 'react';
import { LegalDocType } from '../data/legalDocuments';

interface FooterProps {
  onOpenLegal: (type: LegalDocType) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenLegal }) => {
  return (
    <footer style={{ backgroundColor: 'var(--pine-900)', color: '#9AAFA9', paddingTop: '5rem', paddingBottom: '2.5rem' }}>
      <div className="container">
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

            <div style={{ fontSize: '0.8rem', color: '#889C96', lineHeight: 1.5 }}>
              <div>Central Helpline: <strong style={{ color: '#ffffff' }}>+91 94477 28387</strong></div>
              <div>Head Office: Viswamatha Building, Athirampuzha, Kottayam</div>
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

          {/* Column 4: Legal & Governance */}
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
              Legal & Governance
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
                  onClick={() => onOpenLegal('customer-privacy')}
                  style={{ background: 'none', border: 'none', color: 'var(--gold-light)', cursor: 'pointer', textAlign: 'left', fontSize: '0.86rem', padding: 0, fontWeight: 600 }}
                >
                  Grievance Officer / Support
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
            © 2026 <strong>Muciriz Traders (ShoreCatch)</strong>. All rights reserved.
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <span>100% Formalin-Free</span>
            <span>•</span>
            <span>Cold-Chain Direct</span>
            <span>•</span>
            <span>Download on Google Play Store</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
