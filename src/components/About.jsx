import React from 'react';
import { Target, Users, MapPin } from 'lucide-react';

const About = () => {
  const stats = [
    { label: 'Founded', value: '2026', icon: <Target size={24} color="var(--accent-cyan)" /> },
    { label: 'Company Size', value: '2-10 Employees', icon: <Users size={24} color="var(--accent-cyan)" /> },
    { label: 'Headquarters', value: 'Trivandrum, Kerala', icon: <MapPin size={24} color="var(--accent-cyan)" /> }
  ];

  return (
    <section id="about" className="section" style={{ backgroundColor: 'white' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '4rem', alignItems: 'center', maxWidth: '900px', margin: '0 auto' }}>
          
          <div style={{ textAlign: 'center' }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', letterSpacing: '-0.02em' }}>Who We Are</h2>
            <div style={{ width: '80px', height: '4px', background: 'var(--gradient-cyan)', margin: '0 auto 2rem', borderRadius: '4px' }}></div>
            
            <p style={{ color: 'var(--text-main)', fontSize: '1.125rem', lineHeight: 1.8, marginBottom: '1.5rem' }}>
              We are a dynamic and forward-thinking company specializing in <strong style={{ color: 'var(--primary-navy)' }}>IT Recruitment</strong>, <strong style={{ color: 'var(--primary-navy)' }}>Onboarding Gift Solutions</strong>, and <strong style={{ color: 'var(--primary-navy)' }}>HR Training Services</strong>. 
              Our mission is to empower organizations by building strong teams, creating memorable employee experiences, and developing high-performing workplaces.
            </p>
            <p style={{ color: 'var(--text-main)', fontSize: '1.125rem', lineHeight: 1.8 }}>
              Whether you are looking for top-tier tech talent, wanting to make a lasting impression on new hires, or aiming to upskill your leadership team, Global Continual is your trusted partner.
            </p>
          </div>

          <div className="grid-responsive-cards" style={{ marginTop: '1rem' }}>
            {stats.map((stat, i) => (
              <div key={i} className="stat-card" style={{ 
                padding: '2rem 1.5rem', 
                backgroundColor: 'white', 
                borderRadius: 'var(--radius-lg)', 
                boxShadow: 'var(--shadow-soft)',
                border: '1px solid rgba(0,0,0,0.03)',
                display: 'flex',
                alignItems: 'center',
                gap: '1.5rem',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease'
              }}>
                <div style={{ 
                  width: '56px', height: '56px', 
                  borderRadius: '50%', 
                  backgroundColor: 'rgba(212, 175, 55, 0.1)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0
                }}>
                  {stat.icon}
                </div>
                <div>
                  <div style={{ fontSize: '0.875rem', color: 'var(--text-light)', marginBottom: '0.25rem', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 600 }}>{stat.label}</div>
                  <div style={{ fontSize: '1.35rem', fontWeight: 700, color: 'var(--primary-navy)' }}>{stat.value}</div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
      <style>{`
        .stat-card:hover {
          transform: translateY(-5px);
          box-shadow: var(--shadow-hover) !important;
        }
      `}</style>
    </section>
  );
};

export default About;
