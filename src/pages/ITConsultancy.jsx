import React from 'react';
import { Laptop, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const ITConsultancy = () => {
  const benefits = [
    "End-to-end IT recruitment services",
    "Pre-vetted, highly skilled professionals",
    "Deep understanding of evolving tech stacks",
    "Cultural fit assessment",
    "Rapid scaling capabilities"
  ];

  return (
    <main style={{ paddingTop: '100px', backgroundColor: 'var(--bg-main)', minHeight: '100vh' }}>
      <div className="container" style={{ padding: '4rem 1rem' }}>
        
        <Link to="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '2rem', color: 'var(--text-light)', fontWeight: 500 }}>
          &larr; Back to Home
        </Link>

        <div className="grid-responsive">
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem', padding: '0.5rem 1rem', backgroundColor: 'rgba(212, 175, 55, 0.1)', color: 'var(--accent-gold)', borderRadius: '50px', marginBottom: '1.5rem', fontWeight: 600 }}>
              <Laptop size={18} />
              Core Platform
            </div>
            <h1 style={{ fontSize: '3rem', marginBottom: '1.5rem', lineHeight: 1.1 }}>IT Services & Consultancy</h1>
            <p style={{ color: 'var(--text-main)', fontSize: '1.125rem', lineHeight: 1.8, marginBottom: '2rem' }}>
              Finding the right technical talent in today's fast-paced digital landscape is challenging. We bridge the gap between innovative organizations and top-tier IT professionals. Whether you need a single specialized developer or an entire engineering team, our rigorous vetting process ensures you only meet candidates who can drive your projects forward.
            </p>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2.5rem' }}>
              {benefits.map((benefit, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', color: 'var(--primary-navy)', fontWeight: 500 }}>
                  <CheckCircle size={20} color="var(--accent-gold)" style={{ flexShrink: 0, marginTop: '0.2rem' }} />
                  {benefit}
                </li>
              ))}
            </ul>
            <Link to="/contact" className="btn btn-primary">Partner With Us</Link>
          </div>
          
          <div style={{ backgroundColor: 'white', padding: '3rem', borderRadius: 'var(--radius-lg)', boxShadow: '0 20px 40px rgba(0,0,0,0.05)' }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>Our Process</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {[
                { step: '01', title: 'Needs Analysis', desc: 'Understanding your tech stack and team culture.' },
                { step: '02', title: 'Sourcing', desc: 'Tapping into our extensive global network.' },
                { step: '03', title: 'Vetting', desc: 'Rigorous technical and behavioral screening.' },
                { step: '04', title: 'Placement', desc: 'Seamless integration into your workflow.' },
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', gap: '1.5rem' }}>
                  <div style={{ color: 'var(--accent-gold)', fontSize: '1.5rem', fontWeight: 700, opacity: 0.5 }}>{item.step}</div>
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

export default ITConsultancy;
