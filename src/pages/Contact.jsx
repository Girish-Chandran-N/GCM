import React, { useState } from 'react';
import { Mail, MapPin, Send, Linkedin } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle, submitting, success, error

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      console.warn("EmailJS credentials are missing. Simulating success for development.");
      setTimeout(() => {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      }, 1000);
      return;
    }

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        publicKey
      );
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error("Failed to send email:", error);
      setStatus('error');
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    // Reset status on change if it was an error or success
    if (status === 'error' || status === 'success') {
      setStatus('idle');
    }
  };

  return (
    <main style={{ paddingTop: '100px', backgroundColor: 'var(--bg-main)', minHeight: '100vh' }}>
      <div className="container" style={{ padding: '4rem 1rem' }}>
        
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Get In Touch</h1>
          <div style={{ width: '60px', height: '4px', backgroundColor: 'var(--accent-cyan)', margin: '0 auto 1.5rem', borderRadius: '2px' }}></div>
          <p style={{ color: 'var(--text-main)', fontSize: '1.125rem', maxWidth: '600px', margin: '0 auto' }}>
            Ready to build strong teams and create memorable employee experiences? Reach out to us today.
          </p>
        </div>

        <div className="grid-responsive" style={{ maxWidth: '1000px', margin: '0 auto' }}>
          
          {/* Contact Info */}
          <div>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '2rem' }}>Contact Information</h3>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              <li style={{ display: 'flex', gap: '1rem' }}>
                <div style={{ 
                  width: '50px', height: '50px', backgroundColor: 'white', borderRadius: '50%', 
                  display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                  boxShadow: '0 4px 6px rgba(0,0,0,0.05)'
                }}>
                  <MapPin color="var(--accent-cyan)" />
                </div>
                <div>
                  <h4 style={{ fontSize: '1.125rem', marginBottom: '0.25rem' }}>Headquarters</h4>
                  <p style={{ color: 'var(--text-main)' }}>Thiruvananthapuram,<br/>Kerala 695030, IN</p>
                </div>
              </li>
              <li style={{ display: 'flex', gap: '1rem' }}>
                <div style={{ 
                  width: '50px', height: '50px', backgroundColor: 'white', borderRadius: '50%', 
                  display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                  boxShadow: '0 4px 6px rgba(0,0,0,0.05)'
                }}>
                  <Mail color="var(--accent-cyan)" />
                </div>
                <div>
                  <h4 style={{ fontSize: '1.125rem', marginBottom: '0.25rem' }}>Email Us</h4>
                  <a href="mailto:adarsh@globalcontinual.com" style={{ color: 'var(--text-main)' }}>adarsh@globalcontinual.com</a>
                </div>
              </li>
              <li style={{ display: 'flex', gap: '1rem' }}>
                <div style={{ 
                  width: '50px', height: '50px', backgroundColor: 'white', borderRadius: '50%', 
                  display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                  boxShadow: '0 4px 6px rgba(0,0,0,0.05)'
                }}>
                  <Linkedin color="var(--accent-cyan)" />
                </div>
                <div>
                  <h4 style={{ fontSize: '1.125rem', marginBottom: '0.25rem' }}>LinkedIn</h4>
                  <a href="https://www.linkedin.com/company/global-continual-management-solutions-pvt-ltd/posts/?feedView=all" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-main)', textDecoration: 'underline' }}>Follow our updates</a>
                </div>
              </li>
            </ul>
          </div>

          {/* Form */}
          <div style={{ backgroundColor: 'white', padding: '2.5rem', borderRadius: 'var(--radius-lg)', boxShadow: '0 10px 25px rgba(0,0,0,0.05)' }}>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500, fontSize: '0.875rem' }}>Full Name</label>
                <input 
                  type="text" name="name" value={formData.name} onChange={handleChange} required
                  style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: 'var(--radius-md)', border: '1px solid #e2e8f0', fontFamily: 'inherit' }}
                />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500, fontSize: '0.875rem' }}>Email Address</label>
                <input 
                  type="email" name="email" value={formData.email} onChange={handleChange} required
                  style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: 'var(--radius-md)', border: '1px solid #e2e8f0', fontFamily: 'inherit' }}
                />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500, fontSize: '0.875rem' }}>Subject</label>
                <input 
                  type="text" name="subject" value={formData.subject} onChange={handleChange} required
                  style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: 'var(--radius-md)', border: '1px solid #e2e8f0', fontFamily: 'inherit' }}
                />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500, fontSize: '0.875rem' }}>Message</label>
                <textarea 
                  name="message" value={formData.message} onChange={handleChange} required rows="4"
                  style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: 'var(--radius-md)', border: '1px solid #e2e8f0', fontFamily: 'inherit', resize: 'vertical' }}
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                disabled={status === 'submitting'}
                className="btn btn-primary" 
                style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.5rem', marginTop: '0.5rem', opacity: status === 'submitting' ? 0.7 : 1 }}
              >
                {status === 'submitting' ? 'Sending...' : 'Send Message'}
                <Send size={18} />
              </button>

              {status === 'success' && (
                <div style={{ backgroundColor: '#dcfce7', color: '#166534', padding: '1rem', borderRadius: 'var(--radius-md)', textAlign: 'center', fontSize: '0.875rem' }}>
                  Thank you! Your message has been sent successfully.
                </div>
              )}
              {status === 'error' && (
                <div style={{ backgroundColor: '#fee2e2', color: '#991b1b', padding: '1rem', borderRadius: 'var(--radius-md)', textAlign: 'center', fontSize: '0.875rem' }}>
                  Something went wrong. Please try emailing us directly.
                </div>
              )}
            </form>
          </div>

        </div>
      </div>
    </main>
  );
};

export default Contact;
