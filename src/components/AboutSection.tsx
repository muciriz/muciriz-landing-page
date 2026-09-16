import React from 'react';
import { Compass, Anchor, Leaf, Shield, CheckCircle2 } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="section" style={{ backgroundColor: '#F8FAFC' }}>
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '3.5rem',
            alignItems: 'center',
          }}
          className="about-grid"
        >
          {/* Visual Showcase Card */}
          <div>
            <div
              style={{
                backgroundColor: '#ffffff',
                borderRadius: '24px',
                border: '1px solid #E2E8F0',
                padding: '2.5rem 2rem',
                boxShadow: '0 15px 35px -5px rgba(15, 23, 42, 0.06)',
                position: 'relative',
              }}
            >
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.45rem',
                  padding: '0.35rem 0.8rem',
                  borderRadius: '999px',
                  backgroundColor: 'var(--color-primary-soft)',
                  color: 'var(--color-primary)',
                  fontSize: '0.78rem',
                  fontWeight: 700,
                  marginBottom: '1.25rem',
                }}
              >
                <Anchor size={14} />
                <span>Historic Malabar Roots</span>
              </div>

              <h3 style={{ fontSize: '1.6rem', fontWeight: 800, color: '#0F172A', marginBottom: '1rem' }}>
                Inspired by the Ancient Port of Muziris
              </h3>

              <p style={{ fontSize: '0.96rem', color: '#475569', lineHeight: 1.65, marginBottom: '1.5rem' }}>
                Centuries ago, the historic harbour of <strong>Muziris</strong> connected Kerala to the wider world 
                through the timeless trade of rich Malabar spices and abundant coastal sea harvest.
              </p>

              <p style={{ fontSize: '0.96rem', color: '#475569', lineHeight: 1.65, marginBottom: '2rem' }}>
                At <strong>Muciriz Traders</strong>, we carry this timeless legacy into the modern era. 
                By pairing pristine, chemical-free seafood with the precise stone-ground spices and farm-fresh vegetable bunches 
                needed to cook it, we make traditional Kerala seafood dining pure, healthy, and effortless.
              </p>

              {/* 3 Pillars */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
                <div style={{ padding: '1rem', borderRadius: '14px', backgroundColor: '#F8FAFC', border: '1px solid #E2E8F0' }}>
                  <div style={{ fontWeight: 700, color: 'var(--color-primary)', marginBottom: '0.25rem', fontSize: '0.95rem' }}>
                    Ethical Fishermen Fair Pay
                  </div>
                  <div style={{ fontSize: '0.8rem', color: '#64748B' }}>
                    Direct procurement eliminating middleman exploitation.
                  </div>
                </div>

                <div style={{ padding: '1rem', borderRadius: '14px', backgroundColor: '#F8FAFC', border: '1px solid #E2E8F0' }}>
                  <div style={{ fontWeight: 700, color: 'var(--color-accent)', marginBottom: '0.25rem', fontSize: '0.95rem' }}>
                    100% Hygienic Processing
                  </div>
                  <div style={{ fontSize: '0.8rem', color: '#64748B' }}>
                    RO water washing, sanitized cutting boards, sealed vacuum trays.
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Text Information */}
          <div>
            <div className="section-badge">
              <Compass size={15} />
              <span>About Muciriz Traders</span>
            </div>

            <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.6rem)', fontWeight: 800, color: '#0F172A', marginBottom: '1.25rem', lineHeight: 1.2 }}>
              Reimagining Kerala's Kitchen Heritage for Busy Modern Lifestyles
            </h2>

            <p style={{ fontSize: '1.05rem', color: '#475569', lineHeight: 1.65, marginBottom: '1.5rem' }}>
              We observed that while Kerala loves fresh fish, traditional fish markets can be intimidating, 
              time-consuming, and prone to harmful chemicals. Cleaning fish at home often leaves heavy odors 
              and messy kitchen counters.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
              {[
                'Every fish is descaled, gutted, washed, and sliced before packaging.',
                'Our companion spices are blended using age-old slow roast recipes without chemical extracts.',
                'Our fresh vegetable bunches provide exact portions for day-to-day curries, minimizing kitchen waste.',
                'Certified food-grade vacuum trays preserve moisture without chemical ice baths.',
              ].map((point, pIdx) => (
                <div key={pIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                  <CheckCircle2 size={18} color="var(--color-primary)" style={{ flexShrink: 0, marginTop: '0.2rem' }} />
                  <span style={{ fontSize: '0.95rem', color: '#1E293B', fontWeight: 500 }}>
                    {point}
                  </span>
                </div>
              ))}
            </div>

            <a href="#contact" className="btn btn-primary">
              <span>Get in Touch with Our Team</span>
            </a>
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 992px) {
          .about-grid { gridTemplateColumns: 0.95fr 1.05fr !important; }
        }
      `}</style>
    </section>
  );
};
