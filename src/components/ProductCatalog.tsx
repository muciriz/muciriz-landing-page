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
    <section id="products" className="section" style={{ backgroundColor: '#FFFFFF', paddingBottom: '3.5rem' }}>
      <div className="container">
        {/* Section Header */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            gap: '1.5rem',
            marginBottom: '2rem',
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
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.65rem', marginBottom: '2rem' }}>
          {tabList.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                style={{
                  padding: '0.5rem 1.15rem',
                  borderRadius: '999px',
                  fontSize: '0.82rem',
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

        {/* Side-by-Side Product Grid (2 columns on desktop instead of listing 1 by 1) */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '1.25rem',
            marginBottom: '1.75rem',
          }}
          className="catalog-grid-side-by-side"
        >
          {filteredItems.map((item) => (
            <div
              key={item.id}
              style={{
                backgroundColor: '#ffffff',
                borderRadius: '12px',
                border: '1px solid var(--border-light)',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'row',
                transition: 'all 0.25s ease',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.03)',
                minHeight: '160px',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 8px 20px rgba(11, 43, 38, 0.08)';
                e.currentTarget.style.borderColor = 'rgba(11, 43, 38, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.03)';
                e.currentTarget.style.borderColor = 'var(--border-light)';
              }}
              className="product-card-horizontal"
            >
              {/* Product Thumbnail (Side view) */}
              <div
                style={{
                  width: '145px',
                  minWidth: '145px',
                  backgroundColor: '#F8FAFC',
                  overflow: 'hidden',
                  position: 'relative',
                }}
                className="product-card-thumb"
              >
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

              {/* Product Info (Right Side) */}
              <div
                style={{
                  padding: '1rem 1.15rem',
                  display: 'flex',
                  flexDirection: 'column',
                  flex: 1,
                  justifyContent: 'space-between',
                }}
              >
                <div>
                  <div
                    style={{
                      fontSize: '0.62rem',
                      fontWeight: 700,
                      letterSpacing: '0.08em',
                      color: 'var(--pine-600)',
                      textTransform: 'uppercase',
                      marginBottom: '0.2rem',
                    }}
                  >
                    {item.categoryTag}
                  </div>

                  <h3
                    style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: '1.05rem',
                      fontWeight: 700,
                      color: 'var(--pine-900)',
                      marginBottom: '0.35rem',
                      lineHeight: 1.25,
                    }}
                  >
                    {item.name}
                  </h3>

                  <p
                    style={{
                      fontSize: '0.78rem',
                      color: 'var(--text-muted)',
                      lineHeight: 1.45,
                      marginBottom: '0.65rem',
                      display: '-webkit-box',
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden',
                    }}
                  >
                    {item.description}
                  </p>
                </div>

                <div>
                  {/* Weight / Size Badges */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '0.35rem 0.55rem',
                      backgroundColor: 'var(--sand-50)',
                      borderRadius: '5px',
                      border: '1px solid var(--border-subtle)',
                      fontSize: '0.7rem',
                      color: 'var(--text-body)',
                      marginBottom: '0.65rem',
                    }}
                  >
                    <span style={{ fontWeight: 600 }}>{item.grossWeightBadge}</span>
                    <span style={{ color: 'var(--pine-700)', fontWeight: 700 }}>{item.netWeightBadge}</span>
                  </div>

                  {/* Price & CTA Button */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      paddingTop: '0.5rem',
                      borderTop: '1px solid var(--border-subtle)',
                    }}
                  >
                    <span
                      style={{
                        fontFamily: 'var(--font-serif)',
                        fontSize: '1rem',
                        fontWeight: 700,
                        color: 'var(--pine-900)',
                      }}
                    >
                      {item.priceDisplay}
                    </span>

                    <a
                      href="tel:9447728387"
                      className="btn-dark"
                      style={{
                        padding: '0.38rem 0.75rem',
                        fontSize: '0.75rem',
                        borderRadius: '5px',
                      }}
                    >
                      <span>Pre-Order</span>
                      <ArrowRight size={12} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Notice on Delivery Bar with Clean Balanced Spacing */}
        <div
          style={{
            padding: '1rem 1.35rem',
            backgroundColor: 'var(--sand-50)',
            borderRadius: '10px',
            border: '1px solid var(--border-light)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '0.85rem',
            fontSize: '0.84rem',
            color: 'var(--text-body)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', flex: 1, minWidth: '260px' }}>
            <Info size={17} color="var(--pine-700)" style={{ flexShrink: 0 }} />
            <span style={{ lineHeight: 1.5 }}>
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

        {/* Clean Line Break after Notice on Delivery */}
        <div style={{ marginTop: '2.5rem', borderBottom: '1px solid var(--border-light)' }} />
      </div>

      <style>{`
        @media (max-width: 900px) {
          .catalog-grid-side-by-side {
            grid-template-columns: 1fr !important;
          }
        }
        @media (max-width: 500px) {
          .product-card-horizontal {
            flex-direction: column !important;
          }
          .product-card-thumb {
            width: 100% !important;
            height: 160px !important;
          }
        }
      `}</style>
    </section>
  );
};
