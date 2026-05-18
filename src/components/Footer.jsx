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
              <svg width="32" height="32" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0 }}>
                <path d="M 90 90 L 45 90 A 40 40 0 0 1 45 10 L 65 10" stroke="var(--accent-cyan)" strokeWidth="8" strokeLinecap="round" fill="none" />
                <polygon points="60,0 80,10 60,20" fill="var(--accent-cyan)" />
                <text x="20" y="72" fontFamily="Arial, sans-serif" fontWeight="900" fontSize="55" fill="white" letterSpacing="-2px">G</text>
                <text x="55" y="72" fontFamily="Arial, sans-serif" fontWeight="900" fontSize="55" fill="white">M</text>
              </svg>
              <span style={{ fontSize: '1.25rem', fontWeight: 800, color: 'white', letterSpacing: '-0.5px' }}>
                Global Continual
              </span>
            </div>
            <p style={{ color: 'var(--text-light)', lineHeight: 1.6, marginBottom: '1.5rem' }}>
              Hiring Minds. Welcoming Hearts. Building Futures.
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <span style={{ color: 'white', fontWeight: 600, fontSize: '0.875rem' }}>Follow Us:</span>
              <a href="https://www.linkedin.com/company/global-continual-management-solutions-pvt-ltd/posts/?feedView=all" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="LinkedIn">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
            </div>
          </div>

          {/* Contact Col */}
          <div>
            <h4 style={{ fontSize: '1.125rem', marginBottom: '1.5rem', color: 'white' }}>Contact Us</h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', color: 'var(--text-light)' }}>
                <MapPin size={20} color="var(--accent-cyan)" style={{ flexShrink: 0, marginTop: '0.25rem' }} />
                <span>
                  Primary Headquarters<br />
                  Thiruvananthapuram,<br />
                  Kerala 695030, IN
                </span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--text-light)' }}>
                <Mail size={20} color="var(--accent-cyan)" style={{ flexShrink: 0 }} />
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
        .footer-link:hover { color: var(--accent-cyan); }
        .social-icon { color: var(--text-light); transition: all 0.3s; display: inline-flex; }
        .social-icon:hover { color: var(--accent-cyan); transform: translateY(-2px); }
      `}</style>
    </footer>
  );
};

export default Footer;
