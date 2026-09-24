import React from 'react';
import { Clock, HeartHandshake, ShieldCheck, Snowflake, CheckCircle2 } from 'lucide-react';

export const StandardsSection: React.FC = () => {
  const steps = [
    {
      num: '01',
      icon: <Clock size={24} color="var(--gold-light)" />,
      title: '5:00 AM Harbour Collection',
      tag: 'DAILY FRESH LANDINGS',
      desc: 'Our fleet collects directly at dawn from artisanal small-boat fishermen as trawlers dock at Munambam, Chettuva, and Neendakara harbours.',
      highlight: 'Zero multi-day frozen fish',
    },
    {
      num: '02',
      icon: <HeartHandshake size={24} color="var(--gold-light)" />,
      title: 'Direct Fishermen Equity',
      tag: 'ETHICAL FAIR TRADE',
      desc: 'We pay transparent, premium auction prices directly to traditional coastal seafaring families, completely bypassing middleman markups.',
      highlight: 'Fair pay to artisanal crews',
    },
    {
      num: '03',
      icon: <ShieldCheck size={24} color="#10B981" />,
      title: 'Chilled Ozone Sanitization',
      tag: '100% CHEMICAL FREE',
      desc: 'Every catch is descaled, gutted, and washed with purified chilled RO ozonated water, removing micro-impurities without altering authentic sea flavor.',
      highlight: 'Certified 0% Formalin & Ammonia',
    },
    {
      num: '04',
      icon: <Snowflake size={24} color="var(--gold-light)" />,
      title: 'Sub-3°C Vacuum Sealing',
      tag: 'TRUE-NET WEIGHT',
      desc: 'Hermetically packed in odor-free food-grade vacuum trays. Stays ultra-fresh in your fridge with zero fish smell, and you only pay for usable net weight.',
      highlight: 'Zero kitchen mess or odor',
    },
  ];

  return (
    <section
      id="standards"
      style={{
        backgroundColor: 'var(--pine-900)',
        color: '#ffffff',
        padding: '5rem 0',
        borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 3.5rem auto' }}>
          <span
            style={{
              display: 'inline-block',
              fontFamily: 'var(--font-sans)',
              fontSize: '0.72rem',
              fontWeight: 700,
              letterSpacing: '0.14em',
              color: 'var(--gold-light)',
              textTransform: 'uppercase',
              marginBottom: '0.9rem',
            }}
          >
            WHO WE ARE & WHAT WE DO • THE MUCIRIZ STANDARD
          </span>

          <h2
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(2.1rem, 3.8vw, 3rem)',
              letterSpacing: '-0.015em',
              lineHeight: 1.2,
              color: '#ffffff',
              marginBottom: '1rem',
            }}
          >
            Kerala's Honest Harbour-to-Kitchen Cold Chain
          </h2>

          <p style={{ fontSize: '1rem', color: '#CBD5D1', lineHeight: 1.65 }}>
            No chemical baths, no water-weight trickery, and no multi-day frozen storage. 
            Here is how we bring fresh harbour landings and stone-ground provisions directly to your home.
          </p>
        </div>

        {/* 4 Process Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '1.5rem',
            marginBottom: '3rem',
          }}
        >
          {steps.map((step) => (
            <div
              key={step.num}
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.04)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '16px',
                padding: '2rem 1.75rem',
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
                  marginBottom: '1.25rem',
                }}
              >
                <div
                  style={{
                    width: '3rem',
                    height: '3rem',
                    borderRadius: '12px',
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
                    fontSize: '1.5rem',
                    fontWeight: 700,
                    color: 'rgba(255, 255, 255, 0.25)',
                  }}
                >
                  {step.num}
                </span>
              </div>

              <div
                style={{
                  fontSize: '0.68rem',
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
                  fontSize: '1.25rem',
                  fontWeight: 700,
                  color: '#ffffff',
                  marginBottom: '0.75rem',
                  lineHeight: 1.3,
                }}
              >
                {step.title}
              </h3>

              <p style={{ fontSize: '0.86rem', color: '#CBD5D1', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                {step.desc}
              </p>

              <div
                style={{
                  marginTop: 'auto',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.45rem',
                  fontSize: '0.78rem',
                  color: '#10B981',
                  fontWeight: 600,
                  paddingTop: '0.75rem',
                  borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                }}
              >
                <CheckCircle2 size={14} />
                <span>{step.highlight}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Quality Guarantee Footnote Strip */}
        <div
          style={{
            padding: '1.25rem 1.75rem',
            borderRadius: '12px',
            backgroundColor: 'rgba(255, 255, 255, 0.05)',
            border: '1px solid rgba(255, 255, 255, 0.12)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1rem',
            fontSize: '0.85rem',
            color: '#E2ECE9',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
            <span
              style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                backgroundColor: '#10B981',
                boxShadow: '0 0 10px #10B981',
                flexShrink: 0,
              }}
            />
            <span>
              <strong>The Muciriz Promise:</strong> 100% return or replacement if fish is not pristine fresh. 
              Orders placed before 10:00 PM are delivered directly to your kitchen the next morning.
            </span>
          </div>

          <a
            href="#products"
            style={{
              color: 'var(--gold-light)',
              fontWeight: 700,
              textDecoration: 'none',
              fontSize: '0.84rem',
            }}
          >
            Explore Today's Catch Cuts →
          </a>
        </div>
      </div>
    </section>
  );
};
