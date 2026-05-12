import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  return (
    <header className={isScrolled || mobileMenuOpen ? 'glass-nav' : ''} style={{ 
      position: 'fixed', 
      top: 0, 
      left: 0, 
      width: '100%', 
      zIndex: 1000, 
      padding: isScrolled || mobileMenuOpen ? '0.75rem 0' : '1.5rem 0',
      transition: 'all 0.3s ease',
      backgroundColor: isScrolled || mobileMenuOpen ? 'transparent' : 'transparent'
    }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        
        {/* Logo */}
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', zIndex: 60 }}>
          <img src="/logo.png" alt="Global Continual Logo" style={{ height: '36px' }} />
          <span style={{ fontWeight: 700, color: 'var(--primary-navy)', fontSize: '1.25rem', letterSpacing: '-0.5px' }}>
            Global Continual
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav style={{ display: 'none' }} className="desktop-nav">
          <ul style={{ display: 'flex', gap: '2.5rem', alignItems: 'center' }}>
            <li><Link to="/" style={{ fontWeight: 500, transition: 'color 0.2s' }} className="nav-link">Home</Link></li>
            <li><Link to="/it-consultancy" style={{ fontWeight: 500, transition: 'color 0.2s' }} className="nav-link">IT Services</Link></li>
            <li><Link to="/hr-training" style={{ fontWeight: 500, transition: 'color 0.2s' }} className="nav-link">HR Training</Link></li>
            <li><Link to="/contact" className="btn btn-primary">Contact Us</Link></li>
          </ul>
        </nav>

        {/* Mobile Menu Toggle */}
        <button 
          className="mobile-toggle"
          style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', color: 'var(--primary-navy)', zIndex: 60 }}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

      </div>

      {/* Mobile Nav Dropdown */}
      <div className={`mobile-menu-overlay ${mobileMenuOpen ? 'open' : ''}`} style={{ 
        position: 'fixed', top: '0', left: '0', width: '100%', height: '100vh', 
        backgroundColor: 'rgba(255,255,255,0.98)', 
        transform: mobileMenuOpen ? 'translateY(0)' : 'translateY(-100%)',
        transition: 'transform 0.4s ease-in-out',
        display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center',
        zIndex: 50
      }}>
        <ul style={{ display: 'flex', flexDirection: 'column', gap: '2rem', textAlign: 'center', width: '100%' }}>
          <li><Link to="/" className="mobile-link" style={{ fontSize: '1.5rem', fontWeight: 600 }}>Home</Link></li>
          <li><Link to="/it-consultancy" className="mobile-link" style={{ fontSize: '1.5rem', fontWeight: 600 }}>IT Services</Link></li>
          <li><Link to="/gift-solutions" className="mobile-link" style={{ fontSize: '1.5rem', fontWeight: 600 }}>Gift Solutions</Link></li>
          <li><Link to="/hr-training" className="mobile-link" style={{ fontSize: '1.5rem', fontWeight: 600 }}>HR Training</Link></li>
          <li style={{ marginTop: '1rem' }}><Link to="/contact" className="btn btn-primary" style={{ width: '80%', maxWidth: '300px', fontSize: '1.125rem' }}>Contact Us</Link></li>
        </ul>
      </div>

      <style>{`
        @media (min-width: 992px) {
          .desktop-nav { display: block !important; }
          .mobile-toggle { display: none !important; }
          .mobile-menu-overlay { display: none !important; }
        }
        .nav-link { color: var(--primary-navy); }
        .nav-link:hover { color: var(--accent-gold); }
        .mobile-link { color: var(--primary-navy); display: block; padding: 0.5rem; }
      `}</style>
    </header>
  );
};

export default Navbar;
