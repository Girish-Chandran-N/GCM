import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Global Continual completely transformed our hiring process. They understood our tech stack perfectly and delivered three senior developers within a month.",
      author: "Sarah J.",
      role: "CTO, TechFlow Solutions",
      service: "IT Recruitment"
    },
    {
      quote: "The onboarding gift packages they curated for our new hires have been a massive hit. It immediately sets the tone for our company culture.",
      author: "David M.",
      role: "Head of People, Innovate Inc.",
      service: "Gift Solutions"
    },
    {
      quote: "The leadership training modules were highly practical. Our mid-level managers walked away with actionable conflict resolution strategies.",
      author: "Priya K.",
      role: "Operations Director, Nexus Group",
      service: "HR Training"
    }
  ];

  return (
    <section className="section" style={{ backgroundColor: 'white' }}>
      <div className="container">
        
        <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', letterSpacing: '-0.02em' }}>Client Success Stories</h2>
          <div style={{ width: '80px', height: '4px', background: 'var(--gradient-gold)', margin: '0 auto', borderRadius: '4px' }}></div>
        </div>

        <div className="grid-responsive">
          {testimonials.map((t, i) => (
            <div key={i} className="testimonial-card" style={{ 
              padding: '2.5rem', 
              backgroundColor: 'white', 
              borderRadius: 'var(--radius-lg)',
              boxShadow: 'var(--shadow-soft)',
              position: 'relative',
              overflow: 'hidden',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              border: '1px solid rgba(0,0,0,0.03)'
            }}>
              {/* Quote Watermark */}
              <div style={{ position: 'absolute', top: '1.5rem', right: '1.5rem', opacity: 0.04 }}>
                <Quote size={80} color="var(--primary-navy)" fill="var(--primary-navy)" />
              </div>

              <div style={{ display: 'flex', gap: '0.25rem', marginBottom: '1.5rem', position: 'relative', zIndex: 10 }}>
                {[1, 2, 3, 4, 5].map(star => (
                  <Star key={star} size={18} color="var(--accent-gold)" fill="var(--accent-gold)" />
                ))}
              </div>
              
              <p style={{ color: 'var(--primary-navy)', fontSize: '1.125rem', fontStyle: 'italic', marginBottom: '2rem', lineHeight: 1.8, position: 'relative', zIndex: 10 }}>
                "{t.quote}"
              </p>
              
              <div style={{ position: 'relative', zIndex: 10 }}>
                <h4 style={{ fontSize: '1.125rem', marginBottom: '0.25rem', color: 'var(--primary-navy)' }}>{t.author}</h4>
                <div style={{ fontSize: '0.875rem', color: 'var(--text-light)', marginBottom: '0.5rem' }}>{t.role}</div>
                <div style={{ 
                  display: 'inline-block', 
                  fontSize: '0.75rem', 
                  padding: '0.25rem 0.75rem', 
                  backgroundColor: 'rgba(212, 175, 55, 0.1)', 
                  color: '#b89221', 
                  borderRadius: '50px',
                  fontWeight: 600
                }}>
                  {t.service}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
      <style>{`
        .testimonial-card:hover {
          transform: translateY(-5px);
          box-shadow: var(--shadow-hover) !important;
        }
      `}</style>
    </section>
  );
};

export default Testimonials;
