import React from 'react';
import { Laptop, Gift, Users, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      title: 'IT Services and IT Consultancy',
      description: 'With a deep understanding of the evolving tech industry, we provide end-to-end IT recruitment services, connecting businesses with skilled professionals who drive innovation and growth.',
      icon: <Laptop size={32} color="var(--accent-cyan)" />,
      path: '/it-consultancy'
    },
    {
      title: 'Employee Gift Solutions',
      description: 'Beyond hiring, we enhance the employee journey through thoughtfully curated onboarding gifts that leave a lasting first impression and strengthen company culture.',
      icon: <Gift size={32} color="var(--accent-cyan)" />,
      path: '/gift-solutions'
    },
    {
      title: 'HR Training & Employee Activities',
      description: 'Our HR training programs are designed to empower teams and leaders with practical skills, modern strategies, and industry insights for workplace effectiveness.',
      icon: <Users size={32} color="var(--accent-cyan)" />,
      path: '/hr-training'
    }
  ];

  return (
    <section id="services" className="section" style={{ backgroundColor: 'var(--bg-main)' }}>
      <div className="container">
        
        <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', letterSpacing: '-0.02em' }}>Our Core Platforms</h2>
          <div style={{ width: '80px', height: '4px', background: 'var(--gradient-cyan)', margin: '0 auto', borderRadius: '4px' }}></div>
        </div>

        <div className="grid-responsive">
          {services.map((service, i) => (
            <div key={i} style={{ 
              backgroundColor: 'white', 
              padding: '3rem 2.5rem', 
              borderRadius: 'var(--radius-lg)',
              boxShadow: 'var(--shadow-soft)',
              transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
              display: 'flex',
              flexDirection: 'column',
              position: 'relative',
              overflow: 'hidden'
            }} className="service-card">
              
              {/* Animated top gradient border on hover */}
              <div className="card-top-border" style={{
                position: 'absolute', top: 0, left: 0, width: '100%', height: '6px',
                background: 'var(--gradient-cyan)', opacity: 0, transition: 'opacity 0.4s ease'
              }}></div>
              
              <div style={{ 
                width: '72px', height: '72px', 
                backgroundColor: 'rgba(212, 175, 55, 0.08)', 
                borderRadius: 'var(--radius-md)', 
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                marginBottom: '2rem',
                transition: 'transform 0.4s ease'
              }} className="icon-container">
                {service.icon}
              </div>
              
              <h3 style={{ fontSize: '1.35rem', marginBottom: '1rem', color: 'var(--primary-navy)' }}>
                {service.title}
              </h3>
              
              <p style={{ color: 'var(--text-main)', lineHeight: 1.7, marginBottom: '2.5rem', flexGrow: 1, fontSize: '1.05rem' }}>
                {service.description}
              </p>

              <Link to={service.path} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'var(--accent-cyan)', fontWeight: 600, transition: 'all 0.3s' }} className="learn-more-link">
                Learn More <ArrowRight size={18} />
              </Link>

            </div>
          ))}
        </div>

      </div>
      <style>{`
        .service-card:hover {
          transform: translateY(-12px);
          box-shadow: var(--shadow-hover);
        }
        .service-card:hover .card-top-border {
          opacity: 1 !important;
        }
        .service-card:hover .icon-container {
          transform: scale(1.05);
          background-color: rgba(212, 175, 55, 0.15) !important;
        }
        .service-card:hover .learn-more-link {
          gap: 1rem !important;
          color: #009ACC !important;
        }
      `}</style>
    </section>
  );
};

export default Services;
