import React, { useEffect } from 'react';
import { X, ShieldCheck, FileText, Printer } from 'lucide-react';
import {
  LegalDocType,
  LEGAL_DOCS_META,
  CustomerPrivacyContent,
  CustomerTermsContent,
  StaffPrivacyContent,
  StaffTermsContent,
} from '../data/legalDocuments';

interface LegalModalProps {
  isOpen: boolean;
  activeDoc: LegalDocType;
  onClose: () => void;
  onSelectDoc: (type: LegalDocType) => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({
  isOpen,
  activeDoc,
  onClose,
  onSelectDoc,
}) => {
  // Prevent background scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const docMeta = LEGAL_DOCS_META[activeDoc];

  const handlePrint = () => {
    window.print();
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
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 2000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1rem',
        backgroundColor: 'rgba(15, 23, 42, 0.7)',
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
      }}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '850px',
          maxHeight: '90vh',
          backgroundColor: '#ffffff',
          borderRadius: '24px',
          display: 'flex',
          flexDirection: 'column',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
          overflow: 'hidden',
          border: '1px solid #E2E8F0',
        }}
      >
        {/* Modal Top Bar */}
        <div
          style={{
            padding: '1.25rem 1.75rem',
            borderBottom: '1px solid #E2E8F0',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            backgroundColor: '#F8FAFC',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <div
              style={{
                width: '2.5rem',
                height: '2.5rem',
                borderRadius: '10px',
                backgroundColor: 'var(--color-primary-soft)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--color-primary)',
              }}
            >
              {activeDoc.includes('privacy') ? <ShieldCheck size={20} /> : <FileText size={20} />}
            </div>
            <div>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#0F172A', lineHeight: 1.2 }}>
                {docMeta.title}
              </h3>
              <span style={{ fontSize: '0.75rem', color: '#64748B' }}>
                {docMeta.subtitle} • {docMeta.lastUpdated}
              </span>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <button
              onClick={handlePrint}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.35rem',
                padding: '0.45rem 0.8rem',
                borderRadius: '8px',
                border: '1px solid #CBD5E1',
                backgroundColor: '#ffffff',
                color: '#475569',
                fontSize: '0.8rem',
                fontWeight: 600,
                cursor: 'pointer',
              }}
              title="Print Document"
            >
              <Printer size={15} />
              <span>Print</span>
            </button>

            <button
              onClick={onClose}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '2.25rem',
                height: '2.25rem',
                borderRadius: '8px',
                border: '1px solid #CBD5E1',
                backgroundColor: '#ffffff',
                color: '#64748B',
                cursor: 'pointer',
              }}
              aria-label="Close"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div
          style={{
            padding: '0.75rem 1.75rem',
            borderBottom: '1px solid #E2E8F0',
            display: 'flex',
            gap: '0.5rem',
            overflowX: 'auto',
            backgroundColor: '#ffffff',
          }}
        >
          {(
            [
              { id: 'customer-privacy', label: 'Customer Privacy' },
              { id: 'customer-terms', label: 'Customer Terms' },
              { id: 'staff-privacy', label: 'Staff Privacy' },
              { id: 'staff-terms', label: 'Staff Terms' },
            ] as const
          ).map((tab) => {
            const isSelected = activeDoc === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => onSelectDoc(tab.id)}
                style={{
                  padding: '0.45rem 1rem',
                  borderRadius: '999px',
                  fontSize: '0.82rem',
                  fontWeight: 600,
                  border: isSelected ? '1px solid var(--color-primary)' : '1px solid #E2E8F0',
                  backgroundColor: isSelected ? 'var(--color-primary-soft)' : '#ffffff',
                  color: isSelected ? 'var(--color-primary)' : '#475569',
                  cursor: 'pointer',
                  whiteSpace: 'nowrap',
                  transition: 'all 0.2s ease',
                }}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Scrollable Document Content */}
        <div
          style={{
            padding: '2rem 2.25rem',
            overflowY: 'auto',
            flex: 1,
            lineHeight: 1.7,
            color: '#334155',
            fontSize: '0.92rem',
          }}
          className="legal-doc-scroll"
        >
          {renderContent()}
        </div>

        {/* Modal Bottom Footer */}
        <div
          style={{
            padding: '1rem 1.75rem',
            borderTop: '1px solid #E2E8F0',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            backgroundColor: '#F8FAFC',
          }}
        >
          <span style={{ fontSize: '0.78rem', color: '#64748B' }}>
            Official Legal Text of Muciriz Traders
          </span>
          <button onClick={onClose} className="btn btn-secondary btn-sm">
            Close Viewer
          </button>
        </div>
      </div>

      <style>{`
        .legal-article-content p {
          margin-bottom: 1.15rem;
        }
        .legal-article-content strong {
          color: #0F172A;
        }
        .legal-block {
          margin-top: 1.75rem;
          margin-bottom: 1.75rem;
        }
        .legal-block h3 {
          font-size: 1.05rem;
          font-weight: 700;
          color: #0F172A;
          margin-bottom: 0.65rem;
          border-bottom: 1px solid #F1F5F9;
          padding-bottom: 0.35rem;
          letter-spacing: -0.01em;
        }
        .legal-block ul {
          padding-left: 1.4rem;
          margin-bottom: 1rem;
        }
        .legal-block li {
          margin-bottom: 0.4rem;
        }
      `}</style>
    </div>
  );
};
