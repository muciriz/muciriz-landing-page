import React from 'react';

export const HeritageQualitySection: React.FC = () => {
  const pillars = [
    {
      num: '01',
      title: 'Fishermen Equity',
      desc: 'We pay premium fair rates to artisanal small boat crews at Munambam, Chettuva, and Neendakara harbor docks.',
    },
    {
      num: '02',
      title: 'Ozone Sanitation',
      desc: 'Every catch is immediately scaled and washed in chilled ozonated water, removing micro-impurities without altering delicate sea flavor.',
    },
    {
      num: '03',
      title: 'Sub-3°C Chilling',
      desc: 'Continuous chilled cold-chain from harbour to your doorstep. Our fleet vehicles monitor internal temperature in real-time.',
    },
    {
      num: '04',
      title: 'Chilled Seasoning',
      desc: 'Heirloom spice pastes made with native kokum, bird’s eye chillies, and sun-dried coriander, ground on cold stone mills to preserve volatile aroma.',
    },
  ];

  return (
    <section
      id="heritage"
      style={{
        backgroundColor: 'var(--pine-900)',
        color: '#ffffff',
        padding: '6.5rem 0',
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '4rem',
            alignItems: 'center',
          }}
          className="heritage-grid"
        >
          {/* Left Column: Malabar Story & Heritage */}
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
              ANCIENT TRADERS' TRUST
            </span>

            <h2
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(2.4rem, 4vw, 3.4rem)',
                fontWeight: 700,
                lineHeight: 1.18,
                color: '#ffffff',
                marginBottom: '1.5rem',
              }}
            >
              The spirit of the Malabar coast, reclaimed.
            </h2>

            <p style={{ fontSize: '0.98rem', color: '#CBD5D1', lineHeight: 1.7, marginBottom: '1.25rem' }}>
              Two thousand years ago, the port harbor at Muziris was the epicenter of global trade, 
              known for its pepper, cardamom, and pure seafood harvests. Today, that ancient standard of 
              excellence lives on in every vacuum tray and stone-ground pack delivered by Muciriz Traders.
            </p>

            <p style={{ fontSize: '0.98rem', color: '#CBD5D1', lineHeight: 1.7, marginBottom: '2.75rem' }}>
              We are not just a store, we are a cold-chain standard honoring Kerala culinary heritage. 
              Cleaned with pure water, free of chemicals and preservatives, and handled with reverence for the sea and local fishermen.
            </p>

            {/* Metrics Row */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '2rem',
                borderTop: '1px solid rgba(255, 255, 255, 0.12)',
                paddingTop: '2rem',
                maxWidth: '420px',
              }}
            >
              <div>
                <div
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '2.5rem',
                    fontWeight: 700,
                    color: '#ffffff',
                    lineHeight: 1,
                    marginBottom: '0.4rem',
                  }}
                >
                  5:30 AM
                </div>
                <div style={{ fontSize: '0.82rem', color: '#9AAFA9' }}>
                  Daily Harbour Trawler Docking
                </div>
              </div>

              <div>
                <div
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '2.5rem',
                    fontWeight: 700,
                    color: '#ffffff',
                    lineHeight: 1,
                    marginBottom: '0.4rem',
                  }}
                >
                  100%
                </div>
                <div style={{ fontSize: '0.82rem', color: '#9AAFA9' }}>
                  Formalin & Ammonia Free
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: 4 Numbered Dark Cards */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: '1.25rem',
            }}
          >
            {pillars.map((pillar) => (
              <div
                key={pillar.num}
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.04)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '14px',
                  padding: '1.75rem',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'background-color 0.2s ease',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.07)')}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.04)')}
              >
                <div
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '1.25rem',
                    fontWeight: 700,
                    color: 'var(--gold-light)',
                    marginBottom: '0.75rem',
                  }}
                >
                  {pillar.num}
                </div>

                <h3
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '1.2rem',
                    fontWeight: 700,
                    color: '#ffffff',
                    marginBottom: '0.65rem',
                  }}
                >
                  {pillar.title}
                </h3>

                <p style={{ fontSize: '0.85rem', color: '#CBD5D1', lineHeight: 1.6 }}>
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 992px) {
          .heritage-grid { grid-template-columns: 1.05fr 0.95fr !important; }
        }
      `}</style>
    </section>
  );
};
