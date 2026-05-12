import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="section" style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      alignItems: 'center', 
      backgroundImage: 'linear-gradient(rgba(15, 23, 42, 0.85), rgba(15, 23, 42, 0.7)), url("/cover.png")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      position: 'relative',
      overflow: 'hidden',
      paddingTop: '80px'
    }}>
      {/* Decorative background shapes */}
      <div style={{
        position: 'absolute', top: '-10%', right: '-5%', width: '40%', height: '60%', 
        background: 'var(--accent-gold)', borderRadius: '50%', opacity: 0.15, filter: 'blur(80px)'
      }}></div>

      <div className="container" style={{ position: 'relative', zIndex: 10, width: '100%' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          
          <div className="animate-fade-in" style={{ 
            display: 'inline-block', padding: '0.35rem 1.25rem', 
            backgroundColor: 'rgba(212, 175, 55, 0.2)', color: 'var(--accent-gold)',
            borderRadius: '50px', fontWeight: 600, marginBottom: '2rem', fontSize: '0.875rem',
            border: '1px solid rgba(212, 175, 55, 0.3)'
          }}>
            Established 2026 • IT Services & Consulting
          </div>

          <h1 className="animate-fade-in" style={{ 
            fontSize: 'clamp(2.25rem, 6vw, 4.5rem)', 
            marginBottom: '1.5rem',
            animationDelay: '0.1s',
            lineHeight: 1.1,
            color: 'white'
          }}>
            Hiring Minds. <br />
            <span style={{ color: 'var(--accent-gold)' }}>Welcoming Hearts.</span> <br />
            Building Futures.
          </h1>

          <p className="animate-fade-in" style={{ 
            fontSize: 'clamp(1rem, 2vw, 1.25rem)', color: 'rgba(255, 255, 255, 0.9)', 
            marginBottom: '2.5rem', maxWidth: '600px', margin: '0 auto 2.5rem',
            animationDelay: '0.2s',
            lineHeight: 1.7
          }}>
            We partner with organizations to build strong teams, create memorable employee experiences, and develop high-performing workplaces.
          </p>

          <div className="animate-fade-in hero-buttons" style={{ 
            display: 'flex', gap: '1rem', justifyContent: 'center', animationDelay: '0.3s' 
          }}>
            <a href="#services" className="btn btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', backgroundColor: 'var(--accent-gold)', color: 'var(--primary-navy)' }}>
              Explore Services <ArrowRight size={18} />
            </a>
            <a href="/contact" className="btn" style={{ 
              backgroundColor: 'transparent', color: 'white', border: '1px solid rgba(255, 255, 255, 0.5)' 
            }}>
              Contact Us
            </a>
          </div>

        </div>
      </div>
      <style>{`
        @media (max-width: 480px) {
          .hero-buttons { flex-direction: column; width: 100%; padding: 0 1rem; }
          .hero-buttons .btn { width: 100%; justify-content: center; }
        }
        .hero-buttons .btn:hover {
          transform: translateY(-2px);
        }
        .hero-buttons .btn-primary:hover {
          background-color: var(--accent-gold-hover);
        }
        .hero-buttons .btn:not(.btn-primary):hover {
          background-color: rgba(255, 255, 255, 0.1);
          border-color: white;
        }
      `}</style>
    </section>
  );
};

export default Hero;
