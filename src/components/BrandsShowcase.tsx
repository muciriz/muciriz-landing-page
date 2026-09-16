import React from 'react';
import { ArrowRight } from 'lucide-react';

export const BrandsShowcase: React.FC = () => {
  return (
    <section id="brands" className="section" style={{ backgroundColor: 'var(--sand-50)' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 3.5rem auto' }}>
          <span className="editorial-label">TWO COMPLEMENTARY TRADITIONS</span>
          <h2 className="editorial-title">Honest Shore Harvest & Heirloom Grinding</h2>
          <p className="editorial-subtitle">
            We reconnect the historic maritime spirit of Muziris with modern hygienic packaging: 
            cold-handled fish cuts, farm bunches, and stone-pounded spice blends.
          </p>
        </div>

        {/* Two Grand Showcase Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '2.5rem',
          }}
        >
          {/* Card 1: Muciriz ShoreCatch */}
          <div
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: '16px',
              border: '1px solid var(--border-light)',
              overflow: 'hidden',
              boxShadow: 'var(--shadow-card)',
              display: 'flex',
              flexDirection: 'column',
              transition: 'all 0.3s ease',
            }}
          >
            <div style={{ width: '100%', height: '270px', overflow: 'hidden' }}>
              <img
                src="/images/fresh_fish_ice.jpg"
                alt="Muciriz ShoreCatch fresh fish steaks on crushed ice"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block',
                  transition: 'transform 0.4s ease',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.03)')}
                onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
              />
            </div>

            <div style={{ padding: '2rem 2.25rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'baseline',
                  justifyContent: 'space-between',
                  marginBottom: '1rem',
                }}
              >
                <h3
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '1.65rem',
                    fontWeight: 700,
                    color: 'var(--pine-900)',
                  }}
                >
                  Muciriz ShoreCatch
                </h3>
                <span
                  style={{
                    fontSize: '0.68rem',
                    fontWeight: 700,
                    color: 'var(--pine-700)',
                    backgroundColor: 'var(--pine-50)',
                    padding: '0.3rem 0.6rem',
                    borderRadius: '4px',
                    letterSpacing: '0.05em',
                  }}
                >
                  0% PRESERVATIVES
                </span>
              </div>

              <p style={{ fontSize: '0.92rem', color: 'var(--text-body)', lineHeight: 1.65, marginBottom: '1.75rem' }}>
                Pristine daily sea and backwater catch, purchased directly from small boat fishermen 
                at Kerala harbours, completely gutted and rinsed in chilled RO water, and sealed 
                in odor-free food-grade packaging.
              </p>

              {/* 2 Feature Boxes Inside Card */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
                  gap: '1rem',
                  marginBottom: '2rem',
                }}
              >
                <div
                  style={{
                    padding: '1.1rem',
                    backgroundColor: 'var(--sand-50)',
                    borderRadius: '10px',
                    border: '1px solid var(--border-subtle)',
                  }}
                >
                  <h4
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.85rem',
                      fontWeight: 700,
                      color: 'var(--pine-900)',
                      marginBottom: '0.35rem',
                    }}
                  >
                    Net-Weight Transparency
                  </h4>
                  <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>
                    Separately listed gross vs net weight so you never pay water weight for descaling.
                  </p>
                </div>

                <div
                  style={{
                    padding: '1.1rem',
                    backgroundColor: 'var(--sand-50)',
                    borderRadius: '10px',
                    border: '1px solid var(--border-subtle)',
                  }}
                >
                  <h4
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.85rem',
                      fontWeight: 700,
                      color: 'var(--pine-900)',
                      marginBottom: '0.35rem',
                    }}
                  >
                    Sanitized Odor-Free Box
                  </h4>
                  <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>
                    Cleaned kitchens, zero fridge odor, and zero bone or scale waste inside your home.
                  </p>
                </div>
              </div>

              {/* Card Action Button */}
              <div style={{ marginTop: 'auto' }}>
                <a
                  href="#products"
                  className="btn-outline"
                  style={{
                    width: '100%',
                    justifyContent: 'center',
                    padding: '0.85rem',
                    fontSize: '0.92rem',
                    borderRadius: '8px',
                  }}
                >
                  <span>View Cleaned Catch & Cuts</span>
                  <ArrowRight size={16} />
                </a>
              </div>
            </div>
          </div>

          {/* Card 2: Zuriyani Kitchen & VegEze */}
          <div
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: '16px',
              border: '1px solid var(--border-light)',
              overflow: 'hidden',
              boxShadow: 'var(--shadow-card)',
              display: 'flex',
              flexDirection: 'column',
              transition: 'all 0.3s ease',
            }}
          >
            <div style={{ width: '100%', height: '270px', overflow: 'hidden' }}>
              <img
                src="/images/coastal_spices.jpg"
                alt="Zuriyani Kitchen stone ground spices and marinades"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block',
                  transition: 'transform 0.4s ease',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.03)')}
                onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
              />
            </div>

            <div style={{ padding: '2rem 2.25rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'baseline',
                  justifyContent: 'space-between',
                  marginBottom: '1rem',
                }}
              >
                <h3
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '1.65rem',
                    fontWeight: 700,
                    color: 'var(--pine-900)',
                  }}
                >
                  Zuriyani Kitchen & VegEze
                </h3>
                <span
                  style={{
                    fontSize: '0.68rem',
                    fontWeight: 700,
                    color: '#B45309',
                    backgroundColor: '#FEF3C7',
                    padding: '0.3rem 0.6rem',
                    borderRadius: '4px',
                    letterSpacing: '0.05em',
                  }}
                >
                  TRADITIONAL STONE
                </span>
              </div>

              <p style={{ fontSize: '0.92rem', color: 'var(--text-body)', lineHeight: 1.65, marginBottom: '1.75rem' }}>
                Authentic coastal cooking companions crafted for modern homes. Traditional spice blends 
                stone-pounded without preservatives, plus hand-bundled vegetable packs for everyday Kerala curries.
              </p>

              {/* 2 Feature Boxes Inside Card */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
                  gap: '1rem',
                  marginBottom: '2rem',
                }}
              >
                <div
                  style={{
                    padding: '1.1rem',
                    backgroundColor: 'var(--sand-50)',
                    borderRadius: '10px',
                    border: '1px solid var(--border-subtle)',
                  }}
                >
                  <h4
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.85rem',
                      fontWeight: 700,
                      color: 'var(--pine-900)',
                      marginBottom: '0.35rem',
                    }}
                  >
                    Heirloom Grinding Method
                  </h4>
                  <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>
                    Slow ground spices that lock volatile essential oils for deep aroma and rich color.
                  </p>
                </div>

                <div
                  style={{
                    padding: '1.1rem',
                    backgroundColor: 'var(--sand-50)',
                    borderRadius: '10px',
                    border: '1px solid var(--border-subtle)',
                  }}
                >
                  <h4
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.85rem',
                      fontWeight: 700,
                      color: 'var(--pine-900)',
                      marginBottom: '0.35rem',
                    }}
                  >
                    Meal-Size Veggie Bunches
                  </h4>
                  <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>
                    Pre-portioned shallots, curry leaves, ginger, and green chillies for a single dish.
                  </p>
                </div>
              </div>

              {/* Card Action Button */}
              <div style={{ marginTop: 'auto' }}>
                <a
                  href="#products"
                  className="btn-outline"
                  style={{
                    width: '100%',
                    justifyContent: 'center',
                    padding: '0.85rem',
                    fontSize: '0.92rem',
                    borderRadius: '8px',
                  }}
                >
                  <span>View Seasoned Blends & Produce</span>
                  <ArrowRight size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
