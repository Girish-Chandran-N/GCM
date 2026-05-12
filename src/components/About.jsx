import React from 'react';

const About = () => {
  return (
    <section id="about" className="section" style={{ backgroundColor: 'white' }}>
      <div className="container">
        <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
          
          <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
            <h2 className="animate-slide-right" style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>About Us</h2>
            <div style={{ width: '60px', height: '4px', backgroundColor: 'var(--accent-gold)', margin: '0 auto 2rem', borderRadius: '2px' }}></div>
            <p style={{ fontSize: '1.125rem', color: 'var(--text-main)', lineHeight: 1.8 }}>
              We are a dynamic and forward-thinking company established in 2026, specializing in IT Recruitment, onboarding gift solutions, and HR training services. Our mission is to help organizations build strong teams, create memorable employee experiences, and develop high-performing workplaces.
            </p>
            <p style={{ fontSize: '1.125rem', color: 'var(--text-main)', lineHeight: 1.8, marginTop: '1rem' }}>
              At our core, we believe people are the foundation of every successful business. By combining recruitment expertise, creative onboarding solutions, and impactful training, we partner with organizations to unlock their full potential.
            </p>
          </div>

          <div className="grid-responsive-cards" style={{ marginTop: '2rem' }}>
            {[
              { label: 'Founded', value: '2026' },
              { label: 'Company Size', value: '2-10 Employees' },
              { label: 'Industry', value: 'IT Services & Consulting' },
              { label: 'Headquarters', value: 'Thiruvananthapuram, Kerala' }
            ].map((stat, i) => (
              <div key={i} style={{ 
                padding: '2rem', 
                backgroundColor: 'var(--bg-main)', 
                borderRadius: 'var(--radius-lg)',
                textAlign: 'center',
                transition: 'transform 0.3s ease',
                cursor: 'default'
              }} className="stat-card">
                <div style={{ fontSize: '2rem', fontWeight: 700, color: 'var(--primary-navy)', marginBottom: '0.5rem' }}>
                  {stat.value}
                </div>
                <div style={{ color: 'var(--text-light)', fontWeight: 500, textTransform: 'uppercase', fontSize: '0.875rem', letterSpacing: '1px' }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
      <style>{`
        .stat-card:hover { transform: translateY(-5px); box-shadow: 0 10px 25px rgba(0,0,0,0.05); }
      `}</style>
    </section>
  );
};

export default About;
