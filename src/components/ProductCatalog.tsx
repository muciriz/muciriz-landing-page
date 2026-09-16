import React, { useState } from 'react';
import { PROVISIONS, ProvisionItem } from '../data/catalog';
import { Search, ArrowRight, Info } from 'lucide-react';
import { LegalDocType } from '../data/legalDocuments';

interface ProductCatalogProps {
  onOpenLegal: (type: LegalDocType) => void;
}

export const ProductCatalog: React.FC<ProductCatalogProps> = ({ onOpenLegal }) => {
  const [activeTab, setActiveTab] = useState<'all' | 'fish' | 'spices' | 'vegetables'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredItems = PROVISIONS.filter((item) => {
    const matchesTab = activeTab === 'all' || item.categoryGroup === activeTab;
    const matchesQuery =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.categoryTag.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTab && matchesQuery;
  });

  const tabList = [
    { id: 'all', label: 'All Provisions (8)' },
    { id: 'fish', label: 'ShoreCatch Fish (4)' },
    { id: 'spices', label: 'Heirloom Spices (2)' },
    { id: 'vegetables', label: 'VegEze Farm Bunches (2)' },
  ];

  return (
    <section id="products" className="section" style={{ backgroundColor: '#FFFFFF' }}>
      <div className="container">
        {/* Section Header */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            gap: '1.5rem',
            marginBottom: '2.5rem',
          }}
        >
          <div>
            <span className="editorial-label">CHILLED DAILY PROVISIONS</span>
            <h2
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(2rem, 3.5vw, 2.85rem)',
                fontWeight: 700,
                color: 'var(--pine-900)',
                marginBottom: '0.65rem',
              }}
            >
              Today's Fresh Provisions
            </h2>
            <p
              style={{
                fontSize: '0.96rem',
                color: 'var(--text-muted)',
                maxWidth: '620px',
                lineHeight: 1.6,
              }}
            >
              Handpicked at dawn, gutted, descaled and vacuum-sealed at sub-4°C. Clean, 
              odor-free, and ready to cook on arrival. Order through the Android app or call helpline.
            </p>
          </div>

          {/* Search Input on Right */}
          <div style={{ position: 'relative', width: '100%', maxWidth: '300px' }}>
            <Search
              size={16}
              color="#94A3B8"
              style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)' }}
            />
            <input
              type="text"
              placeholder="Search fish, cut, masala or veggie..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                width: '100%',
                padding: '0.68rem 1rem 0.68rem 2.5rem',
                borderRadius: '8px',
                border: '1px solid var(--border-light)',
                backgroundColor: '#FFFFFF',
                fontSize: '0.86rem',
                outline: 'none',
                color: 'var(--pine-900)',
              }}
              onFocus={(e) => (e.currentTarget.style.borderColor = 'var(--pine-700)')}
              onBlur={(e) => (e.currentTarget.style.borderColor = 'var(--border-light)')}
            />
          </div>
        </div>

        {/* Filter Pills Row */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.65rem', marginBottom: '3rem' }}>
          {tabList.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                style={{
                  padding: '0.55rem 1.25rem',
                  borderRadius: '999px',
                  fontSize: '0.84rem',
                  fontWeight: 600,
                  border: '1px solid',
                  borderColor: isActive ? 'var(--pine-800)' : 'var(--border-light)',
                  backgroundColor: isActive ? 'var(--pine-800)' : '#ffffff',
                  color: isActive ? '#ffffff' : 'var(--text-body)',
                  cursor: 'pointer',
                  transition: 'all 0.18s ease',
                }}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* 4-Column Product Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
            gap: '1.75rem',
            marginBottom: '3rem',
          }}
        >
          {filteredItems.map((item) => (
            <div
              key={item.id}
              style={{
                backgroundColor: '#ffffff',
                borderRadius: '14px',
                border: '1px solid var(--border-light)',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                transition: 'all 0.25s ease',
                boxShadow: '0 2px 10px rgba(0, 0, 0, 0.03)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-3px)';
                e.currentTarget.style.boxShadow = '0 10px 25px rgba(11, 43, 38, 0.08)';
                e.currentTarget.style.borderColor = 'rgba(11, 43, 38, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.03)';
                e.currentTarget.style.borderColor = 'var(--border-light)';
              }}
            >
              {/* Product Thumbnail */}
              <div style={{ height: '175px', width: '100%', overflow: 'hidden', backgroundColor: '#F8FAFC' }}>
                <img
                  src={item.imageUrl}
                  alt={item.name}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block',
                  }}
                />
              </div>

              {/* Product Info */}
              <div style={{ padding: '1.25rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
                <div
                  style={{
                    fontSize: '0.62rem',
                    fontWeight: 700,
                    letterSpacing: '0.08em',
                    color: 'var(--pine-600)',
                    textTransform: 'uppercase',
                    marginBottom: '0.35rem',
                  }}
                >
                  {item.categoryTag}
                </div>

                <h3
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '1.18rem',
                    fontWeight: 700,
                    color: 'var(--pine-900)',
                    marginBottom: '0.5rem',
                    lineHeight: 1.25,
                  }}
                >
                  {item.name}
                </h3>

                <p
                  style={{
                    fontSize: '0.8rem',
                    color: 'var(--text-muted)',
                    lineHeight: 1.5,
                    marginBottom: '1rem',
                  }}
                >
                  {item.description}
                </p>

                {/* Weight / Size Badges */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '0.5rem 0.65rem',
                    backgroundColor: 'var(--sand-50)',
                    borderRadius: '6px',
                    border: '1px solid var(--border-subtle)',
                    fontSize: '0.72rem',
                    color: 'var(--text-body)',
                    marginBottom: '1.25rem',
                  }}
                >
                  <span style={{ fontWeight: 600 }}>{item.grossWeightBadge}</span>
                  <span style={{ color: 'var(--pine-700)', fontWeight: 700 }}>{item.netWeightBadge}</span>
                </div>

                {/* Price & CTA Button */}
                <div
                  style={{
                    marginTop: 'auto',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    paddingTop: '0.85rem',
                    borderTop: '1px solid var(--border-subtle)',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: '1.05rem',
                      fontWeight: 700,
                      color: 'var(--pine-900)',
                    }}
                  >
                    {item.priceDisplay}
                  </span>

                  <a
                    href="#app-download"
                    className="btn-dark"
                    style={{
                      padding: '0.45rem 0.85rem',
                      fontSize: '0.78rem',
                      borderRadius: '6px',
                    }}
                  >
                    <span>Order in App</span>
                    <ArrowRight size={13} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Notice on Delivery Bar */}
        <div
          style={{
            padding: '1.15rem 1.5rem',
            backgroundColor: 'var(--sand-50)',
            borderRadius: '10px',
            border: '1px solid var(--border-light)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1rem',
            fontSize: '0.85rem',
            color: 'var(--text-body)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
            <Info size={18} color="var(--pine-700)" style={{ flexShrink: 0 }} />
            <span>
              <strong>Notice on Delivery:</strong> Fresh seafood prices change based on daily harbour auction 
              rates. If your order exceeds Rs. 500 within 5km of our local branch, delivery is free. Standard express delivery applies elsewhere.
            </span>
          </div>

          <button
            onClick={() => onOpenLegal('customer-terms')}
            style={{
              background: 'none',
              border: 'none',
              color: 'var(--pine-800)',
              fontWeight: 700,
              fontSize: '0.82rem',
              textDecoration: 'underline',
              cursor: 'pointer',
              whiteSpace: 'nowrap',
            }}
          >
            Read Full Terms of Delivery →
          </button>
        </div>
      </div>
    </section>
  );
};
