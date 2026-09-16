import React from 'react';
import { ArrowRight } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section
      style={{
        paddingTop: '4.5rem',
        paddingBottom: '5.5rem',
        backgroundColor: '#FFFFFF',
        borderBottom: '1px solid var(--border-light)',
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '3.5rem',
            alignItems: 'center',
          }}
          className="hero-grid"
        >
          {/* Left Column: Editorial Story & Callouts */}
          <div>
            <span className="editorial-label">
              PLANTATION & SEAFOOD HERITAGE • KERALA HARBOUR
            </span>

            <h1
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(2.5rem, 4.4vw, 3.85rem)',
                fontWeight: 700,
                letterSpacing: '-0.025em',
                lineHeight: 1.15,
                color: 'var(--pine-900)',
                marginBottom: '1.5rem',
              }}
            >
              The freshness of the morning sea, sealed for your kitchen.
            </h1>

            <p
              style={{
                fontSize: '1.05rem',
                color: 'var(--text-body)',
                lineHeight: 1.7,
                marginBottom: '2.25rem',
                maxWidth: '560px',
              }}
            >
              Pure marine and backwater catch cleaned with chilled ozone water, vacuum-wrapped in 
              odor-free weight clarity. Paired with stone-ground heirloom spice pastes and native 
              farm bunches exclusively ordered and tracked on our Android app.
            </p>

            {/* Action Buttons */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: '1.25rem',
                marginBottom: '3.5rem',
              }}
            >
              <a href="#app-download" className="btn-playstore" style={{ padding: '0.65rem 1.4rem' }}>
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

              <a
                href="#products"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.45rem',
                  fontSize: '0.95rem',
                  fontWeight: 600,
                  color: 'var(--pine-800)',
                  textDecoration: 'none',
                }}
              >
                <span>Explore Today's Catch</span>
                <ArrowRight size={16} />
              </a>
            </div>

            {/* 4 Trust Metrics */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(4, 1fr)',
                gap: '1.25rem',
                borderTop: '1px solid var(--border-light)',
                paddingTop: '2rem',
              }}
              className="hero-metrics"
            >
              <div>
                <div
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '1.9rem',
                    fontWeight: 700,
                    color: 'var(--pine-900)',
                    lineHeight: 1,
                    marginBottom: '0.35rem',
                  }}
                >
                  0%
                </div>
                <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', lineHeight: 1.35 }}>
                  Formalin, Ammonia & Chemical Additives
                </div>
              </div>

              <div>
                <div
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '1.9rem',
                    fontWeight: 700,
                    color: 'var(--pine-900)',
                    lineHeight: 1,
                    marginBottom: '0.35rem',
                  }}
                >
                  5:30 AM
                </div>
                <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', lineHeight: 1.35 }}>
                  Harbour Docking Catch Arrives Fresh
                </div>
              </div>

              <div>
                <div
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '1.9rem',
                    fontWeight: 700,
                    color: 'var(--pine-900)',
                    lineHeight: 1,
                    marginBottom: '0.35rem',
                  }}
                >
                  True-Net
                </div>
                <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', lineHeight: 1.35 }}>
                  Odor-Free Vacuum Sealed Trays, Zero Weight Trickery
                </div>
              </div>

              <div>
                <div
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '1.9rem',
                    fontWeight: 700,
                    color: 'var(--pine-900)',
                    lineHeight: 1,
                    marginBottom: '0.35rem',
                  }}
                >
                  &lt; 4°C
                </div>
                <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', lineHeight: 1.35 }}>
                  Cold-Chain Active from Boat to Doorstep
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Culinary Image & Caption */}
          <div>
            <div
              style={{
                borderRadius: '16px',
                overflow: 'hidden',
                boxShadow: '0 12px 35px -5px rgba(11, 43, 38, 0.12)',
                border: '1px solid var(--border-light)',
                backgroundColor: '#ffffff',
              }}
            >
              <img
                src="/images/hero_fish_curry.jpg"
                alt="Kerala traditional fish curry with rice and condiments"
                style={{
                  width: '100%',
                  height: 'auto',
                  aspectRatio: '4/3',
                  objectFit: 'cover',
                  display: 'block',
                }}
              />

              <div
                style={{
                  padding: '1.25rem 1.5rem',
                  display: 'flex',
                  alignItems: 'flex-start',
                  justifyContent: 'space-between',
                  gap: '1.5rem',
                  backgroundColor: '#ffffff',
                }}
              >
                <div>
                  <h4
                    style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: '1.12rem',
                      fontWeight: 700,
                      color: 'var(--pine-900)',
                      marginBottom: '0.2rem',
                    }}
                  >
                    Tradition of Kottayam & Kodungallur
                  </h4>
                  <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', lineHeight: 1.45 }}>
                    Clay-potted fish curries simmered with pure Malabar kudampuli and cold-pressed coconut oils.
                  </p>
                </div>

                <div
                  style={{
                    flexShrink: 0,
                    fontSize: '0.7rem',
                    fontWeight: 700,
                    color: 'var(--pine-700)',
                    backgroundColor: 'var(--pine-50)',
                    padding: '0.35rem 0.65rem',
                    borderRadius: '4px',
                    letterSpacing: '0.04em',
                    textTransform: 'uppercase',
                  }}
                >
                  House Secret Recipe
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 992px) {
          .hero-grid { grid-template-columns: 1.15fr 0.85fr !important; }
        }
        @media (max-width: 640px) {
          .hero-metrics { grid-template-columns: repeat(2, 1fr) !important; gap: 1.5rem !important; }
        }
      `}</style>
    </section>
  );
};
