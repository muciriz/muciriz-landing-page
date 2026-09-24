import React from 'react';
import { Clock, HeartHandshake, ShieldCheck, Snowflake, CheckCircle2 } from 'lucide-react';

export const StandardsSection: React.FC = () => {
  const steps = [
    {
      num: '01',
      icon: <Clock size={22} color="var(--gold-light)" />,
      title: '5:00 AM Harbour Collection',
      tag: 'DAILY FRESH LANDINGS',
      desc: 'Collected directly at dawn from artisanal small-boat fishermen as trawlers dock at Munambam, Chettuva, and Neendakara harbours.',
      highlight: 'Zero multi-day frozen fish',
    },
    {
      num: '02',
      icon: <HeartHandshake size={22} color="var(--gold-light)" />,
      title: 'Direct Fishermen Equity',
      tag: 'ETHICAL FAIR TRADE',
      desc: 'Transparent, premium auction prices paid directly to traditional coastal seafaring families, completely bypassing middlemen.',
      highlight: 'Fair pay to artisanal crews',
    },
    {
      num: '03',
      icon: <ShieldCheck size={22} color="#10B981" />,
      title: 'Chilled Ozone Sanitization',
      tag: '100% CHEMICAL FREE',
      desc: 'Descaled, gutted, and washed with purified chilled RO ozonated water, eliminating impurities without altering delicate sea flavor.',
      highlight: 'Certified 0% Formalin & Ammonia',
    },
    {
      num: '04',
      icon: <Snowflake size={22} color="var(--gold-light)" />,
      title: 'Sub-3°C Vacuum Sealing',
      tag: 'TRUE-NET WEIGHT',
      desc: 'Hermetically packed in odor-free vacuum trays. Stays ultra-fresh in your fridge with zero smell, and you pay only for net usable weight.',
      highlight: 'Zero kitchen mess or odor',
    },
  ];

  return (
    <section
      id="standards"
      style={{
        backgroundColor: 'var(--pine-900)',
        color: '#ffffff',
        padding: '4.5rem 0',
        borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 3rem auto' }}>
          <span
            style={{
              display: 'inline-block',
              fontFamily: 'var(--font-sans)',
              fontSize: '0.72rem',
              fontWeight: 700,
              letterSpacing: '0.14em',
              color: 'var(--gold-light)',
              textTransform: 'uppercase',
              marginBottom: '0.85rem',
            }}
          >
            WHO WE ARE & WHAT WE DO • THE MUCIRIZ STANDARD
          </span>

          <h2
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(2rem, 3.5vw, 2.85rem)',
              letterSpacing: '-0.015em',
              lineHeight: 1.2,
              color: '#ffffff',
              marginBottom: '0.9rem',
            }}
          >
            Kerala's Honest Harbour-to-Kitchen Cold Chain
          </h2>

          <p style={{ fontSize: '0.98rem', color: '#CBD5D1', lineHeight: 1.65 }}>
            No chemical baths, no water-weight trickery, and no multi-day frozen storage. 
            Here is how we bring fresh harbour landings and stone-ground provisions directly to your home.
          </p>
        </div>

        {/* 4 Points Displayed Side by Side (4x1 Columns Grid) */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '1.25rem',
          }}
          className="standards-grid"
        >
          {steps.map((step) => (
            <div
              key={step.num}
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.04)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '14px',
                padding: '1.65rem 1.4rem',
                display: 'flex',
                flexDirection: 'column',
                transition: 'all 0.25s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.08)';
                e.currentTarget.style.borderColor = 'rgba(207, 164, 90, 0.4)';
                e.currentTarget.style.transform = 'translateY(-3px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.04)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '1.1rem',
                }}
              >
                <div
                  style={{
                    width: '2.75rem',
                    height: '2.75rem',
                    borderRadius: '10px',
                    backgroundColor: 'rgba(255, 255, 255, 0.08)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  {step.icon}
                </div>

                <span
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '1.35rem',
                    fontWeight: 700,
                    color: 'rgba(255, 255, 255, 0.22)',
                  }}
                >
                  {step.num}
                </span>
              </div>

              <div
                style={{
                  fontSize: '0.65rem',
                  fontWeight: 700,
                  letterSpacing: '0.08em',
                  color: 'var(--gold-light)',
                  textTransform: 'uppercase',
                  marginBottom: '0.35rem',
                }}
              >
                {step.tag}
              </div>

              <h3
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '1.15rem',
                  fontWeight: 700,
                  color: '#ffffff',
                  marginBottom: '0.65rem',
                  lineHeight: 1.3,
                }}
              >
                {step.title}
              </h3>

              <p style={{ fontSize: '0.82rem', color: '#CBD5D1', lineHeight: 1.55, marginBottom: '1.1rem' }}>
                {step.desc}
              </p>

              <div
                style={{
                  marginTop: 'auto',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  fontSize: '0.75rem',
                  color: '#10B981',
                  fontWeight: 600,
                  paddingTop: '0.65rem',
                  borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                }}
              >
                <CheckCircle2 size={13} />
                <span>{step.highlight}</span>
              </div>
            </div>
          ))}
        </div>

        {/* The Muciriz Promise Displayed as Paragraph */}
        <p
          style={{
            textAlign: 'center',
            maxWidth: '840px',
            margin: '2.75rem auto 0 auto',
            fontSize: '0.94rem',
            color: '#D1DDD9',
            lineHeight: 1.7,
            padding: '0 1rem',
          }}
        >
          <strong style={{ color: 'var(--gold-light)' }}>The Muciriz Promise:</strong> 100% return or replacement if fish is not pristine fresh. All daily pre-orders placed before 10:00 PM are delivered directly to your kitchen the next morning in certified sub-3°C active cold-chain fleet vehicles.
        </p>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .standards-grid { grid-template-columns: repeat(2, 1fr) !important; gap: 1rem !important; }
        }
        @media (max-width: 580px) {
          .standards-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
};
