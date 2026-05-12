import React from 'react';
import { Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Jenkins",
      role: "VP of Engineering, TechFlow",
      text: "Global Continual completely transformed our hiring pipeline. They didn't just send us resumes; they sent us perfectly vetted candidates who fit our culture flawlessly.",
    },
    {
      name: "David Chen",
      role: "HR Director, InnovateX",
      text: "The onboarding gift solutions they curated for our new hires have dramatically improved our day-one employee experience. It sets exactly the right tone for our brand.",
    },
    {
      name: "Priya Sharma",
      role: "Operations Manager, BuildRight",
      text: "Their HR training programs are exceptional. Our management team came away with practical, actionable strategies that we implemented the very next week.",
    }
  ];

  return (
    <section className="section" style={{ backgroundColor: 'white' }}>
      <div className="container">
        
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Client Success Stories</h2>
          <div style={{ width: '60px', height: '4px', backgroundColor: 'var(--accent-gold)', margin: '0 auto', borderRadius: '2px' }}></div>
        </div>

        <div className="grid-responsive">
          {testimonials.map((t, i) => (
            <div key={i} style={{ 
              padding: '2.5rem 2rem', 
              backgroundColor: 'var(--bg-main)', 
              borderRadius: 'var(--radius-lg)',
              position: 'relative'
            }}>
              
              <div style={{ display: 'flex', gap: '4px', marginBottom: '1.5rem' }}>
                {[1,2,3,4,5].map(star => (
                  <Star key={star} size={18} fill="var(--accent-gold)" color="var(--accent-gold)" />
                ))}
              </div>
              
              <p style={{ 
                color: 'var(--text-main)', 
                fontSize: '1.125rem', 
                fontStyle: 'italic',
                lineHeight: 1.7,
                marginBottom: '2rem'
              }}>
                "{t.text}"
              </p>
              
              <div>
                <h4 style={{ color: 'var(--primary-navy)', fontSize: '1.125rem', marginBottom: '0.25rem' }}>{t.name}</h4>
                <div style={{ color: 'var(--text-light)', fontSize: '0.875rem' }}>{t.role}</div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
