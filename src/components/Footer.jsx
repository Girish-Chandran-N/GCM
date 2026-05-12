import React from 'react';
import { Mail, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: 'var(--primary-navy)', color: 'white', padding: '4rem 0 2rem' }}>
      <div className="container">
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
          gap: '3rem',
          marginBottom: '3rem'
        }}>
          
          {/* Brand Col */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
              <img src="/logo.png" alt="Global Continual Logo" style={{ height: '40px', filter: 'brightness(0) invert(1)' }} />
              <span style={{ fontWeight: 700, fontSize: '1.25rem', letterSpacing: '-0.5px' }}>
                Global Continual
              </span>
            </div>
            <p style={{ color: 'var(--text-light)', lineHeight: 1.6, marginBottom: '1.5rem' }}>
              Hiring Minds. Welcoming Hearts. Building Futures.
            </p>
          </div>

          {/* Contact Col */}
          <div>
            <h4 style={{ fontSize: '1.125rem', marginBottom: '1.5rem', color: 'white' }}>Contact Us</h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', color: 'var(--text-light)' }}>
                <MapPin size={20} color="var(--accent-gold)" style={{ flexShrink: 0, marginTop: '0.25rem' }} />
                <span>
                  Primary Headquarters<br />
                  Thiruvananthapuram,<br />
                  Kerala 695030, IN
                </span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--text-light)' }}>
                <Mail size={20} color="var(--accent-gold)" style={{ flexShrink: 0 }} />
                <a href="mailto:adarsh@globalcontinual.com" style={{ transition: 'color 0.2s' }} className="footer-link">
                  adarsh@globalcontinual.com
                </a>
              </li>
            </ul>
          </div>

          {/* Links Col */}
          <div>
            <h4 style={{ fontSize: '1.125rem', marginBottom: '1.5rem', color: 'white' }}>Quick Links</h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <li><Link to="/" className="footer-link">Home</Link></li>
              <li><Link to="/it-consultancy" className="footer-link">IT Services</Link></li>
              <li><Link to="/contact" className="footer-link">Contact Us</Link></li>
              <li><Link to="/hr-training" className="footer-link">HR Training</Link></li>
            </ul>
          </div>

        </div>

        <div style={{ 
          borderTop: '1px solid rgba(255,255,255,0.1)', 
          paddingTop: '2rem', 
          textAlign: 'center',
          color: 'var(--text-light)',
          fontSize: '0.875rem'
        }}>
          &copy; {new Date().getFullYear()} Global Continual Management Solutions Pvt Ltd. All rights reserved.
        </div>
      </div>
      <style>{`
        .footer-link { color: var(--text-light); }
        .footer-link:hover { color: var(--accent-gold); }
      `}</style>
    </footer>
  );
};

export default Footer;
