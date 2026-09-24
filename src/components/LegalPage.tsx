import React, { useEffect } from 'react';
import { ArrowLeft, ShieldCheck, FileText, Printer, Phone, Mail, MapPin, CheckCircle2, Share2 } from 'lucide-react';
import {
  LegalDocType,
  LEGAL_DOCS_META,
  CustomerPrivacyContent,
  CustomerTermsContent,
  StaffPrivacyContent,
  StaffTermsContent,
  GrievanceSupportBox,
} from '../data/legalDocuments';

interface LegalPageProps {
  activeDoc: LegalDocType;
  onSelectDoc: (type: LegalDocType) => void;
  onBackToHome: () => void;
}

export const LegalPage: React.FC<LegalPageProps> = ({
  activeDoc,
  onSelectDoc,
  onBackToHome,
}) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [activeDoc]);

  const docMeta = LEGAL_DOCS_META[activeDoc];

  const docList: { id: LegalDocType; title: string; subtitle: string; icon: React.ReactNode }[] = [
    {
      id: 'customer-privacy',
      title: 'Customer Privacy Policy',
      subtitle: 'Customer Application & Web Platform',
      icon: <ShieldCheck size={18} />,
    },
    {
      id: 'customer-terms',
      title: 'Customer Terms & Conditions',
      subtitle: 'Customer User Agreement & Delivery Terms',
      icon: <FileText size={18} />,
    },
    {
      id: 'staff-privacy',
      title: 'Staff App Privacy Policy',
      subtitle: 'Delivery Partners & Operational App',
      icon: <ShieldCheck size={18} />,
    },
    {
      id: 'staff-terms',
      title: 'Staff Terms and Conditions',
      subtitle: 'Staff & Contractor Agreement',
      icon: <FileText size={18} />,
    },
  ];

  const handlePrint = () => {
    window.print();
  };

  const handleCopyLink = () => {
    const url = window.location.origin + '#' + (activeDoc === 'customer-privacy' ? 'privacy-policy' : activeDoc === 'customer-terms' ? 'terms-and-conditions' : activeDoc);
    navigator.clipboard.writeText(url);
    alert('Link copied to clipboard: ' + url);
  };

  const renderContent = () => {
    switch (activeDoc) {
      case 'customer-privacy':
        return <CustomerPrivacyContent />;
      case 'customer-terms':
        return <CustomerTermsContent />;
      case 'staff-privacy':
        return <StaffPrivacyContent />;
      case 'staff-terms':
        return <StaffTermsContent />;
    }
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#FAF8F5', display: 'flex', flexDirection: 'column' }}>
      {/* 1. Top Clean Navigation Bar */}
      <header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 100,
          backgroundColor: '#FFFFFF',
          borderBottom: '1px solid var(--border-light)',
          boxShadow: '0 2px 10px rgba(0, 0, 0, 0.03)',
        }}
      >
        <div className="container">
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              height: '4.5rem',
            }}
          >
            {/* Back to Home Button & Brand Logo */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
              <button
                onClick={onBackToHome}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.5rem 1rem',
                  borderRadius: '8px',
                  border: '1px solid var(--border-light)',
                  backgroundColor: '#FFFFFF',
                  color: 'var(--pine-900)',
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'var(--sand-50)';
                  e.currentTarget.style.transform = 'translateX(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#FFFFFF';
                  e.currentTarget.style.transform = 'translateX(0)';
                }}
              >
                <ArrowLeft size={16} />
                <span>Back to Home</span>
              </button>

              <div style={{ height: '24px', width: '1px', backgroundColor: 'var(--border-light)' }} />

              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  onBackToHome();
                }}
                style={{ display: 'flex', flexDirection: 'column', textDecoration: 'none' }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '1.45rem',
                    fontWeight: 700,
                    letterSpacing: '0.12em',
                    color: 'var(--pine-900)',
                    lineHeight: 1,
                  }}
                >
                  MUCIRIZ
                </span>
                <span
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.55rem',
                    fontWeight: 700,
                    letterSpacing: '0.2em',
                    color: 'var(--pine-600)',
                    textTransform: 'uppercase',
                    marginTop: '0.15rem',
                  }}
                >
                  Shore Harvest & Kitchen
                </span>
              </a>
            </div>

            {/* Quick Actions: Print, Copy Link, Helpline */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
              <button
                onClick={handlePrint}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  padding: '0.45rem 0.85rem',
                  borderRadius: '6px',
                  border: '1px solid var(--border-light)',
                  backgroundColor: '#FFFFFF',
                  color: 'var(--text-body)',
                  fontSize: '0.8rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                }}
                title="Print this policy"
              >
                <Printer size={15} />
                <span className="hide-on-mobile">Print</span>
              </button>

              <button
                onClick={handleCopyLink}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  padding: '0.45rem 0.85rem',
                  borderRadius: '6px',
                  border: '1px solid var(--border-light)',
                  backgroundColor: '#FFFFFF',
                  color: 'var(--text-body)',
                  fontSize: '0.8rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                }}
                title="Copy shareable link"
              >
                <Share2 size={15} />
                <span className="hide-on-mobile">Share Link</span>
              </button>

              <a
                href="tel:9447728387"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  fontSize: '0.82rem',
                  fontWeight: 600,
                  color: 'var(--pine-800)',
                  marginLeft: '0.5rem',
                  textDecoration: 'none',
                }}
              >
                <Phone size={14} color="var(--pine-600)" />
                <span className="hide-on-mobile">+91 94477 28387</span>
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* 2. Hero Header Banner */}
      <section
        style={{
          backgroundColor: 'var(--pine-900)',
          color: '#ffffff',
          padding: '3.5rem 0 3.25rem 0',
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
        }}
      >
        <div className="container">
          <div style={{ maxWidth: '850px' }}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.65rem',
                fontSize: '0.75rem',
                fontWeight: 600,
                color: 'var(--gold-light)',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                marginBottom: '1rem',
              }}
            >
              <span>Muciriz Traders</span>
              <span>•</span>
              <span>Legal & Regulatory Governance</span>
              <span>•</span>
              <span
                style={{
                  backgroundColor: 'rgba(207, 164, 90, 0.15)',
                  padding: '0.2rem 0.6rem',
                  borderRadius: '4px',
                  color: '#ffffff',
                }}
              >
                {docMeta.badge}
              </span>
            </div>

            <h1
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(2.2rem, 4vw, 3.2rem)',
                fontWeight: 700,
                letterSpacing: '-0.02em',
                lineHeight: 1.18,
                color: '#ffffff',
                marginBottom: '0.85rem',
              }}
            >
              {docMeta.title}
            </h1>

            <p style={{ fontSize: '1rem', color: '#D1DDD9', lineHeight: 1.6, maxWidth: '640px' }}>
              {docMeta.subtitle}. Official document governing user data, terms of ordering, 
              cold-chain compliance, and statutory customer protections.
            </p>

            <div
              style={{
                marginTop: '1.5rem',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                fontSize: '0.78rem',
                color: '#9AAFA9',
              }}
            >
              <CheckCircle2 size={15} color="#10B981" />
              <span>Compliant with Indian Information Technology Act, 2000 • Effective {docMeta.lastUpdated}</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Main Page Body: 2 Columns (Sidebar Tabs + Legal Content) */}
      <main style={{ flex: 1, padding: '3.5rem 0 5rem 0' }}>
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr',
              gap: '2.5rem',
              alignItems: 'flex-start',
            }}
            className="legal-page-layout"
          >
            {/* Left Sidebar: Document Switcher Tabs + Grievance Card */}
            <aside style={{ position: 'sticky', top: '5.5rem' }}>
              <div
                style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: '16px',
                  border: '1px solid var(--border-light)',
                  padding: '1.5rem',
                  boxShadow: 'var(--shadow-card)',
                  marginBottom: '1.75rem',
                }}
              >
                <div
                  style={{
                    fontSize: '0.72rem',
                    fontWeight: 700,
                    letterSpacing: '0.12em',
                    color: 'var(--pine-600)',
                    textTransform: 'uppercase',
                    marginBottom: '1rem',
                  }}
                >
                  Legal Documents
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  {docList.map((doc) => {
                    const isSelected = activeDoc === doc.id;
                    return (
                      <button
                        key={doc.id}
                        onClick={() => onSelectDoc(doc.id)}
                        style={{
                          width: '100%',
                          textAlign: 'left',
                          padding: '0.85rem 1rem',
                          borderRadius: '10px',
                          border: isSelected ? '1px solid var(--pine-800)' : '1px solid transparent',
                          backgroundColor: isSelected ? 'var(--pine-900)' : '#F8FAFC',
                          color: isSelected ? '#ffffff' : 'var(--pine-900)',
                          cursor: 'pointer',
                          transition: 'all 0.2s ease',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.75rem',
                        }}
                      >
                        <div
                          style={{
                            color: isSelected ? 'var(--gold-light)' : 'var(--pine-700)',
                            display: 'flex',
                            alignItems: 'center',
                            flexShrink: 0,
                          }}
                        >
                          {doc.icon}
                        </div>
                        <div>
                          <div style={{ fontSize: '0.88rem', fontWeight: 700, lineHeight: 1.25 }}>
                            {doc.title}
                          </div>
                          <div
                            style={{
                              fontSize: '0.72rem',
                              color: isSelected ? '#CBD5D1' : 'var(--text-muted)',
                              marginTop: '0.2rem',
                            }}
                          >
                            {doc.subtitle}
                          </div>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Official Grievance Officer Sidebar Card */}
              <div
                style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: '16px',
                  border: '1px solid var(--border-light)',
                  padding: '1.5rem',
                  boxShadow: 'var(--shadow-card)',
                }}
              >
                <div
                  style={{
                    fontSize: '0.72rem',
                    fontWeight: 700,
                    letterSpacing: '0.1em',
                    color: 'var(--pine-600)',
                    textTransform: 'uppercase',
                    marginBottom: '0.75rem',
                  }}
                >
                  Grievance & Support Officer
                </div>

                <div style={{ fontSize: '0.88rem', color: 'var(--text-body)', lineHeight: 1.6 }}>
                  <strong style={{ color: 'var(--pine-900)', fontSize: '0.95rem', display: 'block' }}>
                    Mr. Joben Jose
                  </strong>
                  <div style={{ color: 'var(--text-muted)', fontSize: '0.82rem', marginTop: '0.2rem' }}>
                    Grievance Officer, Muciriz Traders
                  </div>

                  <div style={{ marginTop: '0.85rem', display: 'flex', flexDirection: 'column', gap: '0.35rem', fontSize: '0.82rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
                      <MapPin size={14} color="var(--pine-600)" />
                      <span>Athirampuzha, Kerala - 686562</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
                      <Phone size={14} color="var(--pine-600)" />
                      <a href="tel:9447728387" style={{ color: 'var(--pine-800)', fontWeight: 600 }}>
                        +91 94477 28387
                      </a>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
                      <Mail size={14} color="var(--pine-600)" />
                      <a href="mailto:customercare@muciriz.in" style={{ color: 'var(--pine-700)', textDecoration: 'underline' }}>
                        customercare@muciriz.in
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </aside>

            {/* Right Main Column: Clean Full Legal Document Card */}
            <article
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: '20px',
                border: '1px solid var(--border-light)',
                padding: '3rem 3rem',
                boxShadow: 'var(--shadow-card)',
              }}
              className="legal-document-paper"
            >
              {/* Document Header Inside Card */}
              <div
                style={{
                  borderBottom: '1px solid var(--border-light)',
                  paddingBottom: '1.75rem',
                  marginBottom: '2.25rem',
                  display: 'flex',
                  alignItems: 'baseline',
                  justifyContent: 'space-between',
                  flexWrap: 'wrap',
                  gap: '1rem',
                }}
              >
                <div>
                  <span
                    style={{
                      fontSize: '0.72rem',
                      fontWeight: 700,
                      letterSpacing: '0.1em',
                      color: 'var(--pine-600)',
                      textTransform: 'uppercase',
                      display: 'block',
                      marginBottom: '0.35rem',
                    }}
                  >
                    Official Document
                  </span>
                  <h2
                    style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: '1.85rem',
                      fontWeight: 700,
                      color: 'var(--pine-900)',
                      lineHeight: 1.25,
                    }}
                  >
                    {docMeta.title}
                  </h2>
                </div>

                <div
                  style={{
                    fontSize: '0.78rem',
                    color: 'var(--text-muted)',
                    backgroundColor: 'var(--sand-50)',
                    padding: '0.4rem 0.85rem',
                    borderRadius: '6px',
                    border: '1px solid var(--border-subtle)',
                  }}
                >
                  Last Revised: <strong>{docMeta.lastUpdated}</strong>
                </div>
              </div>

              {/* Rendered Body Text */}
              <div className="legal-body-typography">
                {renderContent()}
              </div>

              {/* Bottom Document Signoff */}
              <div
                style={{
                  marginTop: '3.5rem',
                  paddingTop: '2rem',
                  borderTop: '1px solid var(--border-light)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  flexWrap: 'wrap',
                  gap: '1rem',
                  fontSize: '0.84rem',
                  color: 'var(--text-muted)',
                }}
              >
                <div>
                  Published by <strong>Muciriz Traders</strong> • Viswamatha Building, Athirampuzha, Kerala
                </div>

                <button
                  onClick={onBackToHome}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    background: 'none',
                    border: 'none',
                    color: 'var(--pine-800)',
                    fontWeight: 700,
                    cursor: 'pointer',
                    fontSize: '0.84rem',
                  }}
                >
                  <span>Return to Homepage</span>
                  <ArrowLeft size={14} style={{ transform: 'rotate(180deg)' }} />
                </button>
              </div>
            </article>
          </div>
        </div>
      </main>

      {/* 4. Subfooter */}
      <footer
        style={{
          backgroundColor: 'var(--pine-900)',
          color: '#9AAFA9',
          padding: '2rem 0',
          borderTop: '1px solid rgba(255, 255, 255, 0.08)',
          fontSize: '0.8rem',
        }}
      >
        <div className="container">
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '1rem',
            }}
          >
            <div>
              © 2026 <strong>Muciriz Traders</strong>. All rights reserved.
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
              <button
                onClick={() => onSelectDoc('customer-privacy')}
                style={{ background: 'none', border: 'none', color: '#9AAFA9', cursor: 'pointer', fontSize: '0.8rem' }}
              >
                Privacy Policy
              </button>
              <span>•</span>
              <button
                onClick={() => onSelectDoc('customer-terms')}
                style={{ background: 'none', border: 'none', color: '#9AAFA9', cursor: 'pointer', fontSize: '0.8rem' }}
              >
                Terms of Service
              </button>
              <span>•</span>
              <a href="tel:9447728387" style={{ color: 'var(--gold-light)' }}>
                Helpline: +91 94477 28387
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Clean Document Typography Styles */}
      <style>{`
        @media (min-width: 992px) {
          .legal-page-layout {
            grid-template-columns: 320px 1fr !important;
          }
        }
        @media (max-width: 640px) {
          .hide-on-mobile {
            display: none !important;
          }
          .legal-document-paper {
            padding: 1.75rem 1.25rem !important;
          }
        }

        .legal-body-typography {
          color: #334155;
          line-height: 1.75;
          font-size: 0.95rem;
        }

        .legal-body-typography p {
          margin-bottom: 1.25rem;
          color: #334155;
        }

        .legal-body-typography strong {
          color: var(--pine-900);
          font-weight: 700;
        }

        .legal-block {
          margin-top: 2rem;
          margin-bottom: 1.75rem;
          padding-top: 1.5rem;
          border-top: 1px solid #F1F5F9;
        }

        .legal-block:first-of-type {
          border-top: none;
          padding-top: 0;
        }

        .legal-block h3 {
          font-family: var(--font-sans);
          font-size: 1.12rem;
          font-weight: 700;
          color: var(--pine-900);
          margin-bottom: 0.75rem;
          letter-spacing: -0.01em;
        }

        .legal-block ul {
          margin-left: 1.5rem;
          margin-bottom: 1.25rem;
        }

        .legal-block li {
          margin-bottom: 0.5rem;
          color: #475569;
        }

        @media print {
          header, aside, footer, button {
            display: none !important;
          }
          .legal-page-layout {
            grid-template-columns: 1fr !important;
          }
          .legal-document-paper {
            border: none !important;
            box-shadow: none !important;
            padding: 0 !important;
          }
        }
      `}</style>
    </div>
  );
};
