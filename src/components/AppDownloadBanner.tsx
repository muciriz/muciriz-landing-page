import React from 'react';
import { Check, Clock, ShoppingBag } from 'lucide-react';

export const AppDownloadBanner: React.FC = () => {
  return (
    <section id="app-download" style={{ padding: '2.5rem 0', backgroundColor: 'var(--sand-50)' }}>
      <div className="container">
        <div
          className="app-banner-grid"
          style={{
            backgroundColor: 'var(--pine-850)',
            borderRadius: '24px',
            padding: '3.5rem 3.5rem',
            color: '#ffffff',
            boxShadow: '0 20px 45px -10px rgba(5, 26, 21, 0.35)',
            border: '1px solid rgba(255, 255, 255, 0.08)',
          }}
        >
          {/* Left Column: Headline, Description, Playstore Button & Bullet Checklist */}
          <div>
            <span
              style={{
                display: 'inline-block',
                fontFamily: 'var(--font-sans)',
                fontSize: '0.72rem',
                fontWeight: 700,
                letterSpacing: '0.14em',
                color: 'var(--gold-light)',
                textTransform: 'uppercase',
                marginBottom: '1rem',
              }}
            >
              EXCLUSIVE ANDROID APP ORDERING
            </span>

            <h2
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(2rem, 3.4vw, 2.75rem)',
                fontWeight: 700,
                lineHeight: 1.2,
                color: '#ffffff',
                marginBottom: '1.25rem',
              }}
            >
              Order fresh daily catch exclusively on the Muciriz Mobile App
            </h2>

            <p
              style={{
                fontSize: '0.98rem',
                color: '#D1DDD9',
                lineHeight: 1.65,
                marginBottom: '2.25rem',
                maxWidth: '540px',
              }}
            >
              Experience transparent net-weight pricing, live cold-chain tracking, morning 
              delivery slots, and everyday cold-chain delivery scheduling. Available now on Google Play Store for Android.
            </p>

            {/* Action Row: Google Play Button on Left, Checklist on Right */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: '2rem',
              }}
            >
              <a
                href="#app-download"
                className="btn-playstore"
                style={{
                  padding: '0.65rem 1.4rem',
                  backgroundColor: '#000000',
                  border: '1px solid rgba(255, 255, 255, 0.25)',
                  flexShrink: 0,
                }}
              >
                <svg width="22" height="24" viewBox="0 0 24 24" fill="none">
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

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                  <Check size={18} color="#10B981" style={{ flexShrink: 0 }} />
                  <span style={{ fontSize: '0.9rem', color: '#E2ECE9', fontWeight: 500 }}>
                    Continuous cold-chain tracking
                  </span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                  <Check size={18} color="#10B981" style={{ flexShrink: 0 }} />
                  <span style={{ fontSize: '0.9rem', color: '#E2ECE9', fontWeight: 500 }}>
                    Zero-scam honest net-weight clarity
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Realistic Clean Smartphone Mockup */}
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div
              style={{
                width: '100%',
                maxWidth: '310px',
                backgroundColor: '#ffffff',
                borderRadius: '30px',
                padding: '1.25rem',
                boxShadow: '0 25px 50px -10px rgba(0, 0, 0, 0.45)',
                border: '6px solid #14352D',
                color: '#0F172A',
                fontFamily: 'var(--font-sans)',
              }}
            >
              {/* Phone Speaker Slit */}
              <div
                style={{
                  width: '60px',
                  height: '4px',
                  backgroundColor: '#E2E8F0',
                  borderRadius: '3px',
                  margin: '0 auto 1.25rem auto',
                }}
              />

              {/* App Header Inside Phone */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  paddingBottom: '0.75rem',
                  borderBottom: '1px solid #F1F5F9',
                  marginBottom: '0.85rem',
                }}
              >
                <div>
                  <span style={{ fontSize: '0.62rem', fontWeight: 700, letterSpacing: '0.12em', color: '#0B2B26', textTransform: 'uppercase' }}>
                    MUCIRIZ APP
                  </span>
                  <div style={{ fontSize: '0.88rem', fontWeight: 800, color: '#0F172A', lineHeight: 1.1 }}>
                    All-in-One Harvest
                  </div>
                </div>
                <span
                  style={{
                    fontSize: '0.65rem',
                    fontWeight: 700,
                    color: '#047857',
                    backgroundColor: '#ECFDF5',
                    padding: '0.2rem 0.55rem',
                    borderRadius: '4px',
                    letterSpacing: '0.02em',
                  }}
                >
                  100% Fresh
                </span>
              </div>

              {/* Product Item 1 Inside Phone */}
              <div
                style={{
                  padding: '0.75rem',
                  borderRadius: '10px',
                  backgroundColor: '#F8FAFC',
                  border: '1px solid #E2E8F0',
                  marginBottom: '0.65rem',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div>
                    <strong style={{ fontSize: '0.82rem', color: '#0F172A', display: 'block' }}>
                      Karimeen Pearl Spot (500g)
                    </strong>
                    <div style={{ fontSize: '0.68rem', color: '#64748B' }}>
                      Gross: 600g • True Net: 500g
                    </div>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
                    <span style={{ fontSize: '0.82rem', fontWeight: 800, color: '#0B2B26' }}>
                      ₹430
                    </span>
                    <button
                      style={{
                        padding: '0.25rem 0.6rem',
                        fontSize: '0.68rem',
                        fontWeight: 700,
                        backgroundColor: '#0B2B26',
                        color: '#ffffff',
                        border: 'none',
                        borderRadius: '4px',
                        cursor: 'pointer',
                      }}
                    >
                      Add
                    </button>
                  </div>
                </div>
              </div>

              {/* Product Item 2 Inside Phone */}
              <div
                style={{
                  padding: '0.75rem',
                  borderRadius: '10px',
                  backgroundColor: '#F8FAFC',
                  border: '1px solid #E2E8F0',
                  marginBottom: '0.65rem',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div>
                    <strong style={{ fontSize: '0.82rem', color: '#0F172A', display: 'block' }}>
                      King Fish Steaks (500g)
                    </strong>
                    <div style={{ fontSize: '0.68rem', color: '#64748B' }}>
                      Gross: 600g • True Net: 500g
                    </div>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
                    <span style={{ fontSize: '0.82rem', fontWeight: 800, color: '#0B2B26' }}>
                      ₹590
                    </span>
                    <button
                      style={{
                        padding: '0.25rem 0.6rem',
                        fontSize: '0.68rem',
                        fontWeight: 700,
                        backgroundColor: '#0B2B26',
                        color: '#ffffff',
                        border: 'none',
                        borderRadius: '4px',
                        cursor: 'pointer',
                      }}
                    >
                      Add
                    </button>
                  </div>
                </div>
              </div>

              {/* Delivery Window Badge */}
              <div
                style={{
                  padding: '0.5rem 0.75rem',
                  borderRadius: '8px',
                  backgroundColor: '#F1F5F9',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.45rem',
                  fontSize: '0.72rem',
                  color: '#475569',
                  marginBottom: '0.85rem',
                }}
              >
                <Clock size={13} color="#0B2B26" />
                <span>Slot: Morning (07:00 – 11:00 AM)</span>
              </div>

              {/* Action Button Inside Phone */}
              <button
                style={{
                  width: '100%',
                  padding: '0.7rem',
                  borderRadius: '8px',
                  backgroundColor: 'var(--pine-800)',
                  color: '#ffffff',
                  border: 'none',
                  fontSize: '0.82rem',
                  fontWeight: 700,
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.4rem',
                }}
              >
                <ShoppingBag size={14} />
                <span>Download on Google Play</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
