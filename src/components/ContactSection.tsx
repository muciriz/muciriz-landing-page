import React, { useState } from 'react';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { LegalDocType } from '../data/legalDocuments';

interface ContactSectionProps {
  onOpenLegal: (type: LegalDocType) => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenLegal }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    region: 'Kochi Hub',
    interest: 'ShoreCatch Fresh Fish Cuts',
    notes: '',
    agreed: true,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    setSubmitted(true);
  };

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
            <span className="editorial-label">HEADQUARTERS & PHYSICAL HUB</span>
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
              Orders are processed through our central distribution facility and local branch hubs 
              across Kerala, backed by dedicated cold storage and customer care support.
            </p>

            {/* Official Headquarters Card */}
            <div
              style={{
                backgroundColor: '#ffffff',
                borderRadius: '12px',
                border: '1px solid var(--border-light)',
                padding: '1.75rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '1.25rem',
                boxShadow: '0 2px 10px rgba(0,0,0,0.02)',
                marginBottom: '2rem',
              }}
            >
              <div>
                <div style={{ fontSize: '0.72rem', fontWeight: 700, color: 'var(--pine-600)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '0.2rem' }}>
                  Registered Head Office:
                </div>
                <div style={{ fontSize: '0.9rem', color: 'var(--pine-900)', lineHeight: 1.5, fontWeight: 500 }}>
                  Muciriz Traders, 8/614 - Viswamatha Building, Church Junction, Athirampuzha, Kerala - 686562
                </div>
              </div>

              <div>
                <div style={{ fontSize: '0.72rem', fontWeight: 700, color: 'var(--pine-600)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '0.2rem' }}>
                  Customer Care Helpline:
                </div>
                <div style={{ fontSize: '0.9rem', color: 'var(--pine-900)', lineHeight: 1.5 }}>
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
                <div style={{ fontSize: '0.72rem', fontWeight: 700, color: 'var(--pine-600)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '0.2rem' }}>
                  Grievance Officer Contact:
                </div>
                <div style={{ fontSize: '0.9rem', color: 'var(--pine-900)', lineHeight: 1.5 }}>
                  Mr. Joben Jose, Grievance Officer, Muciriz Traders
                </div>
              </div>

              <div>
                <div style={{ fontSize: '0.72rem', fontWeight: 700, color: 'var(--pine-600)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '0.2rem' }}>
                  Operating Dispatch Hours:
                </div>
                <div style={{ fontSize: '0.9rem', color: 'var(--pine-900)', lineHeight: 1.5 }}>
                  06:00 AM - 08:00 PM Daily • Delivery Slots: Morning (07:00-11:00) & Evening (04:00-08:00)
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

          {/* Right Column: Have Kitchen & Cooking Inquiries? Card */}
          <div>
            <div
              style={{
                backgroundColor: '#ffffff',
                borderRadius: '16px',
                border: '1px solid var(--border-light)',
                padding: '2.5rem 2.25rem',
                boxShadow: 'var(--shadow-card)',
              }}
            >
              <h3
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '1.6rem',
                  fontWeight: 700,
                  color: 'var(--pine-900)',
                  marginBottom: '0.4rem',
                }}
              >
                Have Kitchen & Cooking Inquiries?
              </h3>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: 1.55, marginBottom: '1.75rem' }}>
                Our culinary support team assists with custom cuts, bulk festival pre-orders, and recipe guidance for our seasonal catch.
              </p>

              {submitted ? (
                <div
                  style={{
                    padding: '2.5rem 1.5rem',
                    textAlign: 'center',
                    backgroundColor: 'var(--sand-50)',
                    borderRadius: '12px',
                    border: '1px solid var(--border-light)',
                  }}
                >
                  <div
                    style={{
                      width: '3.25rem',
                      height: '3.25rem',
                      borderRadius: '50%',
                      backgroundColor: 'var(--pine-800)',
                      color: '#ffffff',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0 auto 1.25rem auto',
                    }}
                  >
                    <CheckCircle2 size={28} />
                  </div>
                  <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', fontWeight: 700, color: 'var(--pine-900)', marginBottom: '0.5rem' }}>
                    Inquiry Received, {formData.name}
                  </h4>
                  <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
                    Our customer care team will connect with you at <strong>{formData.phone}</strong> regarding your requirements.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', phone: '', region: 'Kochi Hub', interest: 'ShoreCatch Fresh Fish Cuts', notes: '', agreed: true });
                    }}
                    className="btn-outline"
                    style={{ fontSize: '0.84rem', padding: '0.6rem 1.2rem' }}
                  >
                    Send Another Note
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.15rem' }}>
                  {/* Row 1: Name & Phone */}
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1rem' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 600, color: 'var(--pine-900)', marginBottom: '0.35rem' }}>
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Kurian Varghese"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        style={{
                          width: '100%',
                          padding: '0.68rem 0.9rem',
                          borderRadius: '6px',
                          border: '1px solid var(--border-light)',
                          fontSize: '0.88rem',
                          outline: 'none',
                        }}
                      />
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 600, color: 'var(--pine-900)', marginBottom: '0.35rem' }}>
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98470 12345"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        style={{
                          width: '100%',
                          padding: '0.68rem 0.9rem',
                          borderRadius: '6px',
                          border: '1px solid var(--border-light)',
                          fontSize: '0.88rem',
                          outline: 'none',
                        }}
                      />
                    </div>
                  </div>

                  {/* Row 2: Region & Interest */}
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1rem' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 600, color: 'var(--pine-900)', marginBottom: '0.35rem' }}>
                        Delivery Region *
                      </label>
                      <select
                        value={formData.region}
                        onChange={(e) => setFormData({ ...formData, region: e.target.value })}
                        style={{
                          width: '100%',
                          padding: '0.68rem 0.9rem',
                          borderRadius: '6px',
                          border: '1px solid var(--border-light)',
                          fontSize: '0.88rem',
                          outline: 'none',
                          backgroundColor: '#ffffff',
                        }}
                      >
                        <option value="Kochi Hub">Kochi Hub (Ernakulam, Kakkanad)</option>
                        <option value="Aluva Hub">Aluva Hub (Town, Kalamassery)</option>
                        <option value="Kottayam Central">Kottayam Central</option>
                        <option value="Athirampuzha Hub">Athirampuzha Hub</option>
                        <option value="Other Region">Other Location in Kerala</option>
                      </select>
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 600, color: 'var(--pine-900)', marginBottom: '0.35rem' }}>
                        Interested In
                      </label>
                      <select
                        value={formData.interest}
                        onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                        style={{
                          width: '100%',
                          padding: '0.68rem 0.9rem',
                          borderRadius: '6px',
                          border: '1px solid var(--border-light)',
                          fontSize: '0.88rem',
                          outline: 'none',
                          backgroundColor: '#ffffff',
                        }}
                      >
                        <option value="ShoreCatch Fresh Fish Cuts">ShoreCatch Fresh Fish Cuts</option>
                        <option value="Zuriyani Heirloom Masalas">Zuriyani Heirloom Masalas</option>
                        <option value="VegEze Farm Veggie Bunches">VegEze Farm Veggie Bunches</option>
                        <option value="All Offerings (Whole Meal Box)">All Offerings (Whole Meal Box)</option>
                      </select>
                    </div>
                  </div>

                  {/* Row 3: Custom Notes */}
                  <div>
                    <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 600, color: 'var(--pine-900)', marginBottom: '0.35rem' }}>
                      Custom Notes / Cut Style
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Specify clean fillets, curry cuts, whole with slits, or special delivery timing..."
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '0.68rem 0.9rem',
                        borderRadius: '6px',
                        border: '1px solid var(--border-light)',
                        fontSize: '0.88rem',
                        outline: 'none',
                        resize: 'vertical',
                      }}
                    />
                  </div>

                  {/* Row 4: Agreement Checkbox */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                    <input
                      type="checkbox"
                      id="legal-agree"
                      checked={formData.agreed}
                      onChange={(e) => setFormData({ ...formData, agreed: e.target.checked })}
                      required
                    />
                    <label htmlFor="legal-agree" style={{ cursor: 'pointer' }}>
                      I agree to the{' '}
                      <button
                        type="button"
                        onClick={() => onOpenLegal('customer-privacy')}
                        style={{ background: 'none', border: 'none', color: 'var(--pine-800)', fontWeight: 600, textDecoration: 'underline', cursor: 'pointer', padding: 0 }}
                      >
                        Customer Privacy Policy
                      </button>
                      {' '}and{' '}
                      <button
                        type="button"
                        onClick={() => onOpenLegal('customer-terms')}
                        style={{ background: 'none', border: 'none', color: 'var(--pine-800)', fontWeight: 600, textDecoration: 'underline', cursor: 'pointer', padding: 0 }}
                      >
                        Terms of Service
                      </button>
                      .
                    </label>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="btn-dark"
                    style={{
                      width: '100%',
                      padding: '0.85rem',
                      fontSize: '0.92rem',
                      borderRadius: '8px',
                      marginTop: '0.5rem',
                    }}
                  >
                    <span>Submit Inquiry</span>
                    <ArrowRight size={16} />
                  </button>
                </form>
              )}
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
