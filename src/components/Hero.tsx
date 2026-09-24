import React, { useState, useEffect } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight, ShieldCheck } from 'lucide-react';

export const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const brandSlides = [
    {
      id: 'shorecatch',
      tabLabel: 'ShoreCatch (Kodungallur)',
      traditionTag: 'TRADITION OF KODUNGALLUR HARBOUR',
      brandName: 'Muciriz ShoreCatch',
      headline: 'ShoreCatch Cleaned Sea Harvest',
      description: 'Daily small-boat catch from Kodungallur and Munambam harbours. Rinsed with chilled ozonated water, descaled, and sealed in odor-free vacuum trays with true net weight.',
      badge: '0% Formalin Guaranteed',
      badgeColor: '#065F46',
      badgeBg: '#ECFDF5',
      image: '/images/fresh_fish_ice.jpg',
      alt: 'Muciriz ShoreCatch fresh fish steaks on crushed ice',
      actionText: "Explore Fresh Fish Cuts",
      actionHref: '#products',
    },
    {
      id: 'zuriyani',
      tabLabel: 'Zuriyani (Kottayam)',
      traditionTag: 'TRADITION OF KOTTAYAM SYRIAN KITCHEN',
      brandName: 'Zuriyani Kitchen',
      headline: 'Zuriyani Clay-Pot Fish Curry Masala',
      description: 'Clay-potted fish curries simmered with sun-dried Malabar kudampuli, Byadagi chillies, and stone-ground aromatics that preserve volatile aroma and authentic Kottayam taste.',
      badge: 'Stone-Ground Heirloom',
      badgeColor: '#92400E',
      badgeBg: '#FEF3C7',
      image: '/images/hero_fish_curry.jpg',
      alt: 'Kerala traditional fish curry with rice and condiments',
      actionText: 'Explore Spice Blends',
      actionHref: '#products',
    },
    {
      id: 'vegeze',
      tabLabel: 'VegEze (Farms)',
      traditionTag: 'TRADITION OF ATHIRAMPUZHA FARMS',
      brandName: 'VegEze Farm Produce',
      headline: 'VegEze Meal-Size Veggie Bunches',
      description: 'Single-curry portioned native shallots (chuvannulli), fresh ginger root, bird’s eye green chillies, and washed curry leaves harvested fresh for everyday cooking convenience.',
      badge: 'Farm Plucked Daily',
      badgeColor: '#166534',
      badgeBg: '#F0FDF4',
      image: '/images/coastal_spices.jpg',
      alt: 'Fresh curry aromatics and coastal ingredients',
      actionText: 'Explore Veggie Combos',
      actionHref: '#products',
    },
  ];

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % brandSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isPaused, brandSlides.length]);

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? brandSlides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % brandSlides.length);
  };

  const active = brandSlides[currentSlide];

  return (
    <section
      id="brands"
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
          {/* Left Column: Editorial Story & Primary Playstore CTA */}
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

            {/* Action Buttons: Primary Play Store Download right under Header */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: '1.25rem',
                marginBottom: '1rem',
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
          </div>

          {/* Right Column: Sliding Brands & Traditions Showcase */}
          <div
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            style={{ width: '100%' }}
          >
            {/* Interactive Tab Selectors */}
            <div
              style={{
                display: 'flex',
                gap: '0.4rem',
                marginBottom: '0.85rem',
                overflowX: 'auto',
                paddingBottom: '0.2rem',
              }}
            >
              {brandSlides.map((slide, index) => {
                const isSelected = index === currentSlide;
                return (
                  <button
                    key={slide.id}
                    onClick={() => setCurrentSlide(index)}
                    style={{
                      padding: '0.45rem 0.9rem',
                      borderRadius: '999px',
                      fontSize: '0.75rem',
                      fontWeight: 600,
                      border: '1px solid',
                      borderColor: isSelected ? 'var(--pine-800)' : 'var(--border-light)',
                      backgroundColor: isSelected ? 'var(--pine-800)' : '#ffffff',
                      color: isSelected ? '#ffffff' : 'var(--text-body)',
                      cursor: 'pointer',
                      whiteSpace: 'nowrap',
                      transition: 'all 0.2s ease',
                      boxShadow: isSelected ? '0 2px 8px rgba(11, 43, 38, 0.15)' : 'none',
                    }}
                  >
                    {slide.tabLabel}
                  </button>
                );
              })}
            </div>

            {/* Slider Main Showcase Card */}
            <div
              style={{
                borderRadius: '18px',
                overflow: 'hidden',
                boxShadow: '0 16px 40px -8px rgba(11, 43, 38, 0.14)',
                border: '1px solid var(--border-light)',
                backgroundColor: '#ffffff',
                position: 'relative',
                transition: 'all 0.3s ease',
              }}
            >
              {/* Image Frame with Navigation Arrows */}
              <div style={{ position: 'relative', width: '100%', height: '290px', overflow: 'hidden', backgroundColor: '#F8FAFC' }}>
                <img
                  src={active.image}
                  alt={active.alt}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block',
                    transition: 'transform 0.5s ease',
                  }}
                />

                {/* Left/Right Slide Arrows */}
                <button
                  onClick={handlePrev}
                  aria-label="Previous brand tradition"
                  style={{
                    position: 'absolute',
                    left: '0.85rem',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    width: '2.25rem',
                    height: '2.25rem',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(255, 255, 255, 0.88)',
                    backdropFilter: 'blur(4px)',
                    border: '1px solid rgba(0, 0, 0, 0.08)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    color: 'var(--pine-900)',
                    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.15)',
                    transition: 'all 0.2s ease',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#ffffff')}
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.88)')}
                >
                  <ChevronLeft size={18} />
                </button>

                <button
                  onClick={handleNext}
                  aria-label="Next brand tradition"
                  style={{
                    position: 'absolute',
                    right: '0.85rem',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    width: '2.25rem',
                    height: '2.25rem',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(255, 255, 255, 0.88)',
                    backdropFilter: 'blur(4px)',
                    border: '1px solid rgba(0, 0, 0, 0.08)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    color: 'var(--pine-900)',
                    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.15)',
                    transition: 'all 0.2s ease',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#ffffff')}
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.88)')}
                >
                  <ChevronRight size={18} />
                </button>

                {/* Floating Top Badge */}
                <div
                  style={{
                    position: 'absolute',
                    top: '1rem',
                    left: '1rem',
                    backgroundColor: active.badgeBg,
                    color: active.badgeColor,
                    fontSize: '0.68rem',
                    fontWeight: 700,
                    letterSpacing: '0.04em',
                    padding: '0.35rem 0.75rem',
                    borderRadius: '6px',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.35rem',
                  }}
                >
                  <ShieldCheck size={13} />
                  <span>{active.badge}</span>
                </div>
              </div>

              {/* Slider Content Details */}
              <div style={{ padding: '1.5rem 1.75rem', backgroundColor: '#ffffff' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.35rem' }}>
                  <span
                    style={{
                      fontSize: '0.68rem',
                      fontWeight: 700,
                      letterSpacing: '0.12em',
                      color: 'var(--pine-600)',
                      textTransform: 'uppercase',
                    }}
                  >
                    {active.traditionTag}
                  </span>

                  {/* Indicator Dots */}
                  <div style={{ display: 'flex', gap: '0.35rem', alignItems: 'center' }}>
                    {brandSlides.map((_, dotIdx) => (
                      <button
                        key={dotIdx}
                        onClick={() => setCurrentSlide(dotIdx)}
                        aria-label={`Go to slide ${dotIdx + 1}`}
                        style={{
                          width: dotIdx === currentSlide ? '18px' : '6px',
                          height: '6px',
                          borderRadius: '3px',
                          backgroundColor: dotIdx === currentSlide ? 'var(--pine-800)' : '#CBD5E1',
                          border: 'none',
                          cursor: 'pointer',
                          padding: 0,
                          transition: 'all 0.25s ease',
                        }}
                      />
                    ))}
                  </div>
                </div>

                <h3
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '1.35rem',
                    fontWeight: 700,
                    color: 'var(--pine-900)',
                    marginBottom: '0.5rem',
                    lineHeight: 1.25,
                  }}
                >
                  {active.headline}
                </h3>

                <p style={{ fontSize: '0.86rem', color: 'var(--text-muted)', lineHeight: 1.55, marginBottom: '1.25rem' }}>
                  {active.description}
                </p>

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid var(--border-subtle)', paddingTop: '0.9rem' }}>
                  <span style={{ fontSize: '0.78rem', color: 'var(--pine-700)', fontWeight: 600 }}>
                    {active.brandName}
                  </span>

                  <a
                    href={active.actionHref}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.35rem',
                      fontSize: '0.84rem',
                      fontWeight: 700,
                      color: 'var(--pine-800)',
                      textDecoration: 'none',
                    }}
                  >
                    <span>{active.actionText}</span>
                    <ArrowRight size={14} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 992px) {
          .hero-grid { grid-template-columns: 1.12fr 0.88fr !important; }
        }
      `}</style>
    </section>
  );
};
