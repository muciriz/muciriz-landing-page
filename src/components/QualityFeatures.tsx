import React from 'react';
import { ShieldCheck, Snowflake, Wind, Sparkles, Check, HeartHandshake } from 'lucide-react';

export const QualityFeatures: React.FC = () => {
  const pillars = [
    {
      icon: <ShieldCheck size={28} color="var(--color-primary)" />,
      title: 'Zero Chemical Additives',
      description: 'Strict zero-tolerance policy against ammonia, formalin, or artificial color enhancements. Every batch is certified pure fresh catch.',
      badge: '100% Chemical-Free',
    },
    {
      icon: <Wind size={28} color="var(--color-primary)" />,
      title: 'Odor-Free Vacuum Sealed',
      description: 'Hygienically cleaned with purified RO water, descaled, sliced, and packed in hermetic food-grade vacuum trays. No kitchen mess, no fridge smell.',
      badge: 'Kitchen Friendly',
    },
    {
      icon: <Snowflake size={28} color="var(--color-primary)" />,
      title: 'Continuous Cold-Chain',
      description: 'Temperature kept steadily between 0°C and 4°C throughout handling, storage, and bike delivery, locking in ocean nutrients and firm texture.',
      badge: 'Sub-4°C Transit',
    },
    {
      icon: <Sparkles size={28} color="var(--color-accent)" />,
      title: 'The Full Meal Experience',
      description: 'Pairs pristine fish with authentic stone-ground marinades and fresh pre-bundled curry vegetables so you never have to make extra grocery trips.',
      badge: 'All-In-One Box',
    },
  ];

  return (
    <section id="quality" className="section" style={{ backgroundColor: '#ffffff' }}>
      <div className="container">
        <div className="section-title-wrap">
          <div className="section-badge">
            <HeartHandshake size={15} />
            <span>The Muciriz Standard</span>
          </div>
          <h2 className="section-title">Why Families Trust Muciriz Everyday</h2>
          <p className="section-desc">
            We are redefining how seafood and kitchen staples are sourced, packed, and enjoyed across Kerala homes.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '2rem',
          }}
        >
          {pillars.map((pillar, idx) => (
            <div
              key={idx}
              style={{
                backgroundColor: '#F8FAFC',
                borderRadius: '20px',
                border: '1px solid #E2E8F0',
                padding: '2rem 1.75rem',
                display: 'flex',
                flexDirection: 'column',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.borderColor = 'rgba(14, 124, 134, 0.4)';
                e.currentTarget.style.boxShadow = '0 12px 25px -4px rgba(15, 23, 42, 0.08)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = '#E2E8F0';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <div
                style={{
                  width: '3.5rem',
                  height: '3.5rem',
                  borderRadius: '16px',
                  backgroundColor: '#ffffff',
                  border: '1px solid #E2E8F0',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1.25rem',
                  boxShadow: '0 4px 10px rgba(0,0,0,0.03)',
                }}
              >
                {pillar.icon}
              </div>

              <div
                style={{
                  fontSize: '0.72rem',
                  fontWeight: 700,
                  color: 'var(--color-primary)',
                  letterSpacing: '0.04em',
                  textTransform: 'uppercase',
                  marginBottom: '0.4rem',
                }}
              >
                {pillar.badge}
              </div>

              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#0F172A', marginBottom: '0.75rem' }}>
                {pillar.title}
              </h3>

              <p style={{ fontSize: '0.9rem', color: '#64748B', lineHeight: 1.6 }}>
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
