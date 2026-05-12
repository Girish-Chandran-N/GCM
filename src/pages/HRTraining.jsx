import React from 'react';
import { Users, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const HRTraining = () => {
  return (
    <main style={{ paddingTop: '100px', backgroundColor: 'var(--bg-main)', minHeight: '100vh' }}>
      <div className="container" style={{ padding: '4rem 1rem' }}>
        
        <Link to="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '2rem', color: 'var(--text-light)', fontWeight: 500 }}>
          &larr; Back to Home
        </Link>

        <div className="grid-responsive">
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem', padding: '0.5rem 1rem', backgroundColor: 'rgba(212, 175, 55, 0.1)', color: 'var(--accent-gold)', borderRadius: '50px', marginBottom: '1.5rem', fontWeight: 600 }}>
              <Users size={18} />
              Core Platform
            </div>
            <h1 style={{ fontSize: '3rem', marginBottom: '1.5rem', lineHeight: 1.1 }}>HR Training & Activities</h1>
            <p style={{ color: 'var(--text-main)', fontSize: '1.125rem', lineHeight: 1.8, marginBottom: '2rem' }}>
              Continuous development is the key to a competitive edge. Our interactive HR training programs empower your leaders and teams with modern strategies, practical skills, and actionable industry insights. We don't just lecture; we facilitate activities that foster real behavioral change.
            </p>
            <Link to="/contact" className="btn btn-primary">Explore Programs</Link>
          </div>
          
          <div style={{ backgroundColor: 'white', padding: '3rem', borderRadius: 'var(--radius-lg)', boxShadow: '0 20px 40px rgba(0,0,0,0.05)' }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>Key Training Modules</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {[
                { title: 'Modern Leadership', desc: 'Navigating remote teams and empathetic management.' },
                { title: 'Conflict Resolution', desc: 'Turning workplace friction into constructive dialogue.' },
                { title: 'Diversity & Inclusion', desc: 'Building truly inclusive team cultures.' },
                { title: 'Performance Management', desc: 'Setting OKRs and conducting effective reviews.' },
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', gap: '1rem', paddingBottom: '1.5rem', borderBottom: i !== 3 ? '1px solid #f1f5f9' : 'none' }}>
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

export default HRTraining;
