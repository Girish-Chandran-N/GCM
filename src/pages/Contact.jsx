import React, { useState } from 'react';
import { Mail, MapPin, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle, submitting, success, error

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');

    const googleFormUrl = "https://docs.google.com/forms/d/e/1FAIpQLScqHVWo0n7oP_6xmIP6wmFk5d3iD0rELK8rvu4d-_z1kJjrQQ/formResponse";
    
    const formDataObj = new FormData();
    formDataObj.append('entry.970972225', formData.name); // Name
    formDataObj.append('entry.1806275524', formData.email); // Email
    formDataObj.append('entry.51092704', formData.subject); // Subject
    formDataObj.append('entry.247705877', formData.message); // Message

    try {
      await fetch(googleFormUrl, {
        method: 'POST',
        mode: 'no-cors', // Required for silent submission to Google Forms
        body: formDataObj
      });
      
      // Because we use no-cors, we always assume success if no network error
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error("Failed to submit to Google Forms:", error);
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
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--accent-cyan)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
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
