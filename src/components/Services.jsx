import React from 'react';
import { Laptop, Gift, Users, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      title: 'IT Services and IT Consultancy',
      description: 'With a deep understanding of the evolving tech industry, we provide end-to-end IT recruitment services, connecting businesses with skilled professionals who drive innovation and growth.',
      icon: <Laptop size={32} color="var(--accent-gold)" />,
      path: '/it-consultancy'
    },
    {
      title: 'Employee Gift Solutions',
      description: 'Beyond hiring, we enhance the employee journey through thoughtfully curated onboarding gifts that leave a lasting first impression and strengthen company culture.',
      icon: <Gift size={32} color="var(--accent-gold)" />,
      path: '/gift-solutions'
    },
    {
      title: 'HR Training & Employee Activities',
      description: 'Our HR training programs are designed to empower teams and leaders with practical skills, modern strategies, and industry insights for workplace effectiveness.',
      icon: <Users size={32} color="var(--accent-gold)" />,
      path: '/hr-training'
    }
  ];

  return (
    <section id="services" className="section" style={{ backgroundColor: 'var(--bg-main)' }}>
      <div className="container">
        
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Our Core Platforms</h2>
          <div style={{ width: '60px', height: '4px', backgroundColor: 'var(--accent-gold)', margin: '0 auto', borderRadius: '2px' }}></div>
        </div>

        <div className="grid-responsive">
          {services.map((service, i) => (
            <div key={i} style={{ 
              backgroundColor: 'white', 
              padding: '3rem 2rem', 
              borderRadius: 'var(--radius-lg)',
              boxShadow: '0 4px 6px rgba(0,0,0,0.02)',
              transition: 'all 0.3s ease',
              borderTop: '4px solid transparent',
              display: 'flex',
              flexDirection: 'column'
            }} className="service-card">
              
              <div style={{ 
                width: '64px', height: '64px', 
                backgroundColor: 'rgba(212, 175, 55, 0.1)', 
                borderRadius: '50%', 
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                marginBottom: '1.5rem'
              }}>
                {service.icon}
              </div>
              
              <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: 'var(--primary-navy)' }}>
                {service.title}
              </h3>
              
              <p style={{ color: 'var(--text-main)', lineHeight: 1.7, marginBottom: '2rem', flexGrow: 1 }}>
                {service.description}
              </p>

              <Link to={service.path} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'var(--accent-gold)', fontWeight: 600, transition: 'gap 0.2s' }} className="learn-more-link">
                Learn More <ArrowRight size={18} />
              </Link>

            </div>
          ))}
        </div>

      </div>
      <style>{`
        .service-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.08);
          border-top-color: var(--accent-gold);
        }
        .service-card:hover .learn-more-link {
          gap: 0.75rem;
        }
      `}</style>
    </section>
  );
};

export default Services;
