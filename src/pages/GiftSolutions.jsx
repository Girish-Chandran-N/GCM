import React from 'react';
import { Gift, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const GiftSolutions = () => {
  return (
    <main style={{ paddingTop: '100px', backgroundColor: 'var(--bg-main)', minHeight: '100vh' }}>
      <div className="container" style={{ padding: '4rem 1rem' }}>
        
        <Link to="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '2rem', color: 'var(--text-light)', fontWeight: 500 }}>
          &larr; Back to Home
        </Link>

        <div className="grid-responsive">
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem', padding: '0.5rem 1rem', backgroundColor: 'rgba(212, 175, 55, 0.1)', color: 'var(--accent-gold)', borderRadius: '50px', marginBottom: '1.5rem', fontWeight: 600 }}>
              <Gift size={18} />
              Core Platform
            </div>
            <h1 style={{ fontSize: '3rem', marginBottom: '1.5rem', lineHeight: 1.1 }}>Employee Gift Solutions</h1>
            <p style={{ color: 'var(--text-main)', fontSize: '1.125rem', lineHeight: 1.8, marginBottom: '2rem' }}>
              First impressions matter. The moment a new employee joins your team is a critical opportunity to make them feel valued and aligned with your culture. Our curated onboarding gifts are designed to leave a lasting impression, boosting early engagement and retention.
            </p>
            <Link to="/contact" className="btn btn-primary">Request a Custom Box</Link>
          </div>
          
          <div style={{ backgroundColor: 'white', padding: '3rem', borderRadius: 'var(--radius-lg)', boxShadow: '0 20px 40px rgba(0,0,0,0.05)' }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>Popular Packages</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {[
                { title: 'The Essentials Box', desc: 'Branded hoodie, premium notebook, insulated mug.' },
                { title: 'The Remote Worker', desc: 'Ergonomic accessories, noise-canceling earplugs, coffee subscription.' },
                { title: 'The Executive', desc: 'High-end tech accessories, luxury pen, curated leadership book.' },
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', gap: '1rem', paddingBottom: '1.5rem', borderBottom: i !== 2 ? '1px solid #f1f5f9' : 'none' }}>
                  <CheckCircle color="var(--accent-gold)" style={{ flexShrink: 0 }} />
                  <div>
                    <h4 style={{ fontSize: '1.125rem', marginBottom: '0.25rem' }}>{item.title}</h4>
                    <p style={{ color: 'var(--text-main)', fontSize: '0.875rem' }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </main>
  );
};

export default GiftSolutions;
