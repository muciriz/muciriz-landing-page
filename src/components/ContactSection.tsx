import React from 'react';
import { Phone, MessageCircle, Smartphone, Clock, MapPin, ShieldCheck, ArrowRight } from 'lucide-react';
import { LegalDocType } from '../data/legalDocuments';

interface ContactSectionProps {
  onOpenLegal: (type: LegalDocType) => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenLegal }) => {
  const coverageAreas = [
    'Aluva Hub',
    'Kochi Hub',
    'Kottayam Central',
    'Athirampuzha Junction',
    'Angamaly',
    'All Areas within 15 km of Each Hub',
  ];

  return (
    <section id="contact" className="section" style={{ backgroundColor: 'var(--sand-50)' }}>
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '3.5rem',
          }}
          className="contact-layout"
        >
          {/* Left Column: Headquarters & Physical Hub */}
          <div>
            <span className="editorial-label">HEADQUARTERS & DISTRIBUTION HUBS</span>
            <h2
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(2rem, 3.2vw, 2.6rem)',
                fontWeight: 700,
                color: 'var(--pine-900)',
                marginBottom: '0.85rem',
              }}
            >
              Muciriz Traders
            </h2>
            <p
              style={{
                fontSize: '0.94rem',
                color: 'var(--text-muted)',
                lineHeight: 1.6,
                marginBottom: '2rem',
              }}
            >
              Orders are dispatched directly from our central cold facility and local distribution hubs 
              across Kerala. Cleaned, vacuum-sealed, and delivered under continuous sub-3°C chilling.
            </p>

            {/* Official Headquarters Card */}
            <div
              style={{
                backgroundColor: '#ffffff',
                borderRadius: '16px',
                border: '1px solid var(--border-light)',
                padding: '2rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '1.25rem',
                boxShadow: 'var(--shadow-card)',
                marginBottom: '2rem',
              }}
            >
              <div>
                <div style={{ fontSize: '0.72rem', fontWeight: 700, color: 'var(--pine-600)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '0.25rem' }}>
                  Registered Head Office:
                </div>
                <div style={{ fontSize: '0.92rem', color: 'var(--pine-900)', lineHeight: 1.5, fontWeight: 500 }}>
                  Muciriz Traders, 8/614 - Viswamatha Building, Church Junction, Athirampuzha, Kerala - 686562
                </div>
              </div>

              <div>
                <div style={{ fontSize: '0.72rem', fontWeight: 700, color: 'var(--pine-600)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '0.25rem' }}>
                  Customer Care Helpline:
                </div>
                <div style={{ fontSize: '0.92rem', color: 'var(--pine-900)', lineHeight: 1.5 }}>
                  <a href="tel:9447728387" style={{ fontWeight: 700, color: 'var(--pine-800)', textDecoration: 'none' }}>
                    +91 94477 28387
                  </a>
                  {' '}•{' '}
                  <a href="mailto:customercare@muciriz.in" style={{ color: 'var(--pine-700)', textDecoration: 'underline' }}>
                    customercare@muciriz.in
                  </a>
                </div>
              </div>

              <div>
                <div style={{ fontSize: '0.72rem', fontWeight: 700, color: 'var(--pine-600)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '0.25rem' }}>
                  Grievance Officer:
                </div>
                <div style={{ fontSize: '0.92rem', color: 'var(--pine-900)', lineHeight: 1.5 }}>
                  Mr. Joben Jose, Grievance Officer, Muciriz Traders
                </div>
              </div>

              <div>
                <div style={{ fontSize: '0.72rem', fontWeight: 700, color: 'var(--pine-600)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '0.25rem' }}>
                  Operating Dispatch Hours:
                </div>
                <div style={{ fontSize: '0.92rem', color: 'var(--pine-900)', lineHeight: 1.5 }}>
                  06:00 AM - 08:00 PM Daily • Delivery Slots: Morning (07:00 – 11:00 AM) & Evening (04:00 – 08:00 PM)
                </div>
              </div>
            </div>

            {/* Active Day Chilled Coverage */}
            <div>
              <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--pine-700)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
                Active Day Chilled Coverage
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {coverageAreas.map((area, idx) => (
                  <span
                    key={idx}
                    style={{
                      fontSize: '0.78rem',
                      padding: '0.35rem 0.75rem',
                      borderRadius: '999px',
                      backgroundColor: '#ffffff',
                      border: '1px solid var(--border-light)',
                      color: 'var(--text-body)',
                      fontWeight: 500,
                    }}
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Direct Instant Support & 1-Click Ordering (No Complicated Forms) */}
          <div>
            <div
              style={{
                backgroundColor: '#ffffff',
                borderRadius: '16px',
                border: '1px solid var(--border-light)',
                padding: '2.5rem 2.25rem',
                boxShadow: 'var(--shadow-card)',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <span className="editorial-label" style={{ marginBottom: '0.4rem' }}>
                DIRECT ASSISTANCE • NO FORM COMPLICATIONS
              </span>

              <h3
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '1.75rem',
                  fontWeight: 700,
                  color: 'var(--pine-900)',
                  marginBottom: '0.65rem',
                }}
              >
                Instant Kitchen Help & Orders
              </h3>

              <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '2rem' }}>
                Need custom cut styles, bulk festival orders, or daily catch updates? Skip form delays—connect with our team instantly:
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginBottom: '2rem' }}>
                {/* 1. Direct Phone Helpline */}
                <div
                  style={{
                    padding: '1.25rem',
                    borderRadius: '12px',
                    backgroundColor: 'var(--sand-50)',
                    border: '1px solid var(--border-light)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    flexWrap: 'wrap',
                    gap: '1rem',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <div
                      style={{
                        width: '2.75rem',
                        height: '2.75rem',
                        borderRadius: '10px',
                        backgroundColor: 'var(--pine-800)',
                        color: '#ffffff',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                      }}
                    >
                      <Phone size={20} />
                    </div>
                    <div>
                      <strong style={{ fontSize: '0.95rem', color: 'var(--pine-900)', display: 'block' }}>
                        Customer Care Helpline
                      </strong>
                      <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                        Available 06:00 AM – 08:00 PM Daily
                      </span>
                    </div>
                  </div>

                  <a
                    href="tel:9447728387"
                    className="btn-dark"
                    style={{
                      fontSize: '0.86rem',
                      padding: '0.55rem 1.15rem',
                      borderRadius: '8px',
                      textDecoration: 'none',
                    }}
                  >
                    <span>Call +91 94477 28387</span>
                  </a>
                </div>

                {/* 2. Direct WhatsApp Assistance */}
                <div
                  style={{
                    padding: '1.25rem',
                    borderRadius: '12px',
                    backgroundColor: '#F0FDF4',
                    border: '1px solid #BBF7D0',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    flexWrap: 'wrap',
                    gap: '1rem',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <div
                      style={{
                        width: '2.75rem',
                        height: '2.75rem',
                        borderRadius: '10px',
                        backgroundColor: '#16A34A',
                        color: '#ffffff',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                      }}
                    >
                      <MessageCircle size={20} />
                    </div>
                    <div>
                      <strong style={{ fontSize: '0.95rem', color: '#14532D', display: 'block' }}>
                        WhatsApp Direct Chat
                      </strong>
                      <span style={{ fontSize: '0.8rem', color: '#166534' }}>
                        Instant daily catch inquiries & custom cuts
                      </span>
                    </div>
                  </div>

                  <a
                    href="https://wa.me/919447728387?text=Hi%20Muciriz%20Team%2C%20I%20would%20like%20to%20inquire%20about%20today%27s%20fresh%20catch%20and%20pre-order."
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.45rem',
                      backgroundColor: '#16A34A',
                      color: '#ffffff',
                      fontSize: '0.86rem',
                      fontWeight: 600,
                      padding: '0.55rem 1.15rem',
                      borderRadius: '8px',
                      textDecoration: 'none',
                      transition: 'all 0.2s ease',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#15803D')}
                    onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#16A34A')}
                  >
                    <span>Chat on WhatsApp</span>
                  </a>
                </div>

                {/* 3. Android Mobile App Ordering */}
                <div
                  style={{
                    padding: '1.25rem',
                    borderRadius: '12px',
                    backgroundColor: 'var(--sand-50)',
                    border: '1px solid var(--border-light)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    flexWrap: 'wrap',
                    gap: '1rem',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <div
                      style={{
                        width: '2.75rem',
                        height: '2.75rem',
                        borderRadius: '10px',
                        backgroundColor: 'var(--pine-900)',
                        color: 'var(--gold-light)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                      }}
                    >
                      <Smartphone size={20} />
                    </div>
                    <div>
                      <strong style={{ fontSize: '0.95rem', color: 'var(--pine-900)', display: 'block' }}>
                        Muciriz Android App
                      </strong>
                      <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                        Live cold-chain tracking & morning pre-orders
                      </span>
                    </div>
                  </div>

                  <a
                    href="#app-download"
                    className="btn-outline"
                    style={{
                      fontSize: '0.86rem',
                      padding: '0.55rem 1.15rem',
                      borderRadius: '8px',
                    }}
                  >
                    <span>Download App</span>
                    <ArrowRight size={14} />
                  </a>
                </div>
              </div>

              {/* Legal & Policy Note */}
              <div
                style={{
                  marginTop: 'auto',
                  paddingTop: '1.25rem',
                  borderTop: '1px solid var(--border-subtle)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  fontSize: '0.78rem',
                  color: 'var(--text-muted)',
                }}
              >
                <ShieldCheck size={16} color="#10B981" style={{ flexShrink: 0 }} />
                <span>
                  All customer deliveries are backed by our 100% freshness guarantee. Review our{' '}
                  <button
                    onClick={() => onOpenLegal('customer-privacy')}
                    style={{
                      background: 'none',
                      border: 'none',
                      color: 'var(--pine-800)',
                      fontWeight: 600,
                      textDecoration: 'underline',
                      cursor: 'pointer',
                      padding: 0,
                    }}
                  >
                    Privacy Policy
                  </button>
                  {' '}and{' '}
                  <button
                    onClick={() => onOpenLegal('customer-terms')}
                    style={{
                      background: 'none',
                      border: 'none',
                      color: 'var(--pine-800)',
                      fontWeight: 600,
                      textDecoration: 'underline',
                      cursor: 'pointer',
                      padding: 0,
                    }}
                  >
                    Terms of Service
                  </button>
                  .
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 992px) {
          .contact-layout { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>
    </section>
  );
};
