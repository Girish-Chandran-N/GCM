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
      {/* Decorative pulsing background shapes */}
      <div className="animate-pulse-slow" style={{
        position: 'absolute', top: '-10%', right: '-5%', width: '40%', height: '60%', 
        background: 'var(--accent-gold)', borderRadius: '50%', opacity: 0.15, filter: 'blur(80px)'
      }}></div>
      <div className="animate-pulse-slow" style={{
        position: 'absolute', bottom: '-20%', left: '-10%', width: '40%', height: '50%', 
        background: '#FFE58F', borderRadius: '50%', opacity: 0.1, filter: 'blur(100px)',
        animationDelay: '2s'
      }}></div>

      <div className="container" style={{ position: 'relative', zIndex: 10, width: '100%' }}>
        <div style={{ maxWidth: '850px', margin: '0 auto', textAlign: 'center' }}>
          
          <div className="animate-fade-in" style={{ 
            display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.5rem 1.5rem', 
            backgroundColor: 'rgba(255, 255, 255, 0.05)', color: '#FFE58F',
            borderRadius: '50px', fontWeight: 600, marginBottom: '2rem', fontSize: '0.875rem',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(10px)'
          }}>
            <span style={{ width: '8px', height: '8px', backgroundColor: 'var(--accent-gold)', borderRadius: '50%', display: 'inline-block', boxShadow: '0 0 10px var(--accent-gold)' }}></span>
            Established 2026 • IT Services & Consulting
          </div>

          <h1 className="animate-fade-in" style={{ 
            fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', 
            marginBottom: '1.5rem',
            animationDelay: '0.1s',
            lineHeight: 1.15,
            color: 'white',
            letterSpacing: '-0.02em'
          }}>
            Hiring Minds. <br />
            <span className="text-gradient">Welcoming Hearts.</span> <br />
            Building Futures.
          </h1>

          <p className="animate-fade-in" style={{ 
            fontSize: 'clamp(1.125rem, 2vw, 1.25rem)', color: 'rgba(255, 255, 255, 0.85)', 
            marginBottom: '3rem', maxWidth: '650px', margin: '0 auto 3rem',
            animationDelay: '0.2s',
            lineHeight: 1.8
          }}>
            We partner with organizations to build strong teams, create memorable employee experiences, and develop high-performing workplaces.
          </p>

          <div className="animate-fade-in hero-buttons" style={{ 
            display: 'flex', gap: '1rem', justifyContent: 'center', animationDelay: '0.3s' 
          }}>
            <a href="#services" className="btn btn-primary" style={{ 
              display: 'flex', alignItems: 'center', gap: '0.5rem', 
              background: 'var(--gradient-gold)', color: 'var(--primary-navy)',
              boxShadow: '0 10px 25px -5px rgba(212, 175, 55, 0.4)',
              border: 'none',
              padding: '0.875rem 2rem'
            }}>
              Explore Services <ArrowRight size={18} />
            </a>
            <a href="/contact" className="btn" style={{ 
              backgroundColor: 'rgba(255, 255, 255, 0.05)', color: 'white', 
              border: '1px solid rgba(255, 255, 255, 0.2)',
              backdropFilter: 'blur(10px)',
              padding: '0.875rem 2rem'
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
        .hero-buttons .btn {
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .hero-buttons .btn:hover {
          transform: translateY(-4px);
        }
        .hero-buttons .btn-primary:hover {
          box-shadow: 0 15px 35px -5px rgba(212, 175, 55, 0.5);
        }
        .hero-buttons .btn:not(.btn-primary):hover {
          background-color: rgba(255, 255, 255, 0.15);
          border-color: rgba(255, 255, 255, 0.5);
        }
      `}</style>
    </section>
  );
};

export default Hero;
