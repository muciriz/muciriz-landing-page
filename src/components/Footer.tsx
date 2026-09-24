import React from 'react';
import { Phone, MessageCircle, ShieldCheck, Mail, MapPin, ArrowRight } from 'lucide-react';
import { LegalDocType } from '../data/legalDocuments';

interface FooterProps {
  onOpenLegal: (type: LegalDocType) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenLegal }) => {
  const coverageAreas = [
    'Aluva Hub',
    'Kochi Hub',
    'Kottayam Central',
    'Athirampuzha Junction',
    'Angamaly',
    'All Areas within 15 km of Each Hub',
  ];

  return (
    <footer id="contact" style={{ backgroundColor: 'var(--pine-900)', color: '#9AAFA9', paddingTop: '4rem', paddingBottom: '2.5rem' }}>
      <div className="container">
        {/* 1. Headquarters & Distribution Hubs Section inside Last Section (Black Box) */}
        <div
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.04)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: '16px',
            padding: '2rem 2.25rem',
            marginBottom: '3rem',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '0.85rem',
              marginBottom: '1.25rem',
            }}
          >
            <div>
              <span
                style={{
                  fontSize: '0.7rem',
                  fontWeight: 700,
                  letterSpacing: '0.12em',
                  color: 'var(--gold-light)',
                  textTransform: 'uppercase',
                  display: 'block',
                }}
              >
                PHYSICAL FACILITIES & REGISTRATION
              </span>
              <h3
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '1.4rem',
                  fontWeight: 700,
                  color: '#ffffff',
                  marginTop: '0.2rem',
                }}
              >
                Headquarters & Distribution Hubs
              </h3>
            </div>

            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                fontSize: '0.8rem',
                color: '#CBD5D1',
                backgroundColor: 'rgba(255, 255, 255, 0.06)',
                padding: '0.4rem 0.85rem',
                borderRadius: '8px',
                border: '1px solid rgba(255, 255, 255, 0.08)',
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
                }}
              />
              <span>Active Dispatch: 06:00 AM – 08:00 PM Daily (Morning 07:00–11:00 AM & Evening 04:00–08:00 PM)</span>
            </div>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '2rem',
              paddingTop: '1.25rem',
              borderTop: '1px solid rgba(255, 255, 255, 0.08)',
            }}
          >
            {/* Column 1: Registered Head Office & Grievance */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', fontSize: '0.86rem', color: '#CBD5D1' }}>
              <div>
                <strong style={{ color: '#ffffff', display: 'block', fontSize: '0.9rem', marginBottom: '0.2rem' }}>
                  Registered Head Office:
                </strong>
                <span style={{ lineHeight: 1.5 }}>
                  Muciriz Traders, 8/614 - Viswamatha Building, Church Junction, Athirampuzha, Kerala - 686562
                </span>
              </div>

              <div>
                <strong style={{ color: '#ffffff', display: 'block', fontSize: '0.9rem', marginBottom: '0.2rem' }}>
                  Grievance Officer:
                </strong>
                <span>Mr. Joben Jose, Grievance Officer, Muciriz Traders</span>
              </div>
            </div>

            {/* Column 2: Active Day Chilled Coverage Hubs */}
            <div>
              <strong style={{ color: '#ffffff', display: 'block', fontSize: '0.9rem', marginBottom: '0.65rem' }}>
                Active Day Chilled Coverage Hubs:
              </strong>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem' }}>
                {coverageAreas.map((area, idx) => (
                  <span
                    key={idx}
                    style={{
                      fontSize: '0.76rem',
                      padding: '0.35rem 0.75rem',
                      borderRadius: '999px',
                      backgroundColor: 'rgba(255, 255, 255, 0.07)',
                      border: '1px solid rgba(255, 255, 255, 0.12)',
                      color: '#E2ECE9',
                      fontWeight: 500,
                    }}
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* 2. Top Highlighted Helpline & Support Banner */}
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

        {/* 3. Main Footer Grid */}
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
                  Grievance Officer Redressal
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* 4. Subfooter */}
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
