import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { HomePage } from './pages/HomePage';
import { IndriPage } from './pages/IndriPage';
import { useScrollAnimation } from './hooks/useScrollAnimation';
import heroImg from './assets/contact us/hero.png';
import './styles/globals.css';
import './styles/components.css';

// Simple placeholder pages
const PlaceholderPage: React.FC<{ title: string }> = ({ title }) => (
  <main style={{ paddingTop: 'calc(var(--nav-height) + 4rem)', paddingBottom: '6rem', minHeight: '60vh' }}>
    <div className="container">
      <span className="section-label">Coming Soon</span>
      <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 800, color: 'var(--text-primary)', letterSpacing: '-0.03em', marginBottom: '1rem' }}>
        {title}
      </h1>
      <p style={{ color: 'var(--text-secondary)', fontSize: '1.125rem' }}>
        This page is being built. In the meantime, <a href="mailto:info@sentrai.in" style={{ color: 'var(--accent)' }}>contact us</a> to learn more.
      </p>
    </div>
  </main>
);

const NotFound: React.FC = () => (
  <main style={{ paddingTop: 'calc(var(--nav-height) + 4rem)', paddingBottom: '6rem', minHeight: '60vh', display: 'flex', alignItems: 'center' }}>
    <div className="container" style={{ textAlign: 'center' }}>
      <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--accent)', letterSpacing: '0.12em', marginBottom: '1rem', textTransform: 'uppercase' }}>
        — 404 —
      </div>
      <h1 style={{ fontSize: 'clamp(3rem, 8vw, 6rem)', fontWeight: 900, color: 'var(--text-primary)', letterSpacing: '-0.05em', lineHeight: 1, marginBottom: '1rem' }}>
        Page not found
      </h1>
      <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>
        The page you're looking for doesn't exist or has been moved.
      </p>
      <a href="/" className="btn btn-primary btn-lg btn-arrow">Back to Homepage</a>
    </div>
  </main>
);

const ContactPage: React.FC = () => (
  <main>
    <section style={{ 
      paddingTop: 'calc(var(--nav-height) + 4rem)', 
      paddingBottom: '4rem', 
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: `url(${heroImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        opacity: 0.15,
        zIndex: 0
      }} />
      <div className="container" style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
        <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 800, color: 'var(--text-primary)', letterSpacing: '-0.03em', marginBottom: '1rem', lineHeight: 1.1 }}>
          Contact Sentr AI
        </h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.125rem', maxWidth: '520px', lineHeight: 1.7 }}>
          Whether you have a question about Indri, need enterprise IT support or want to explore how we can work together — we're here.
        </p>
      </div>
    </section>

    <section className="section-y" style={{ paddingTop: '2rem', paddingBottom: '8rem', backgroundColor: '#ffffff' }}>
      <div className="container contact-light-theme">
        <style>{`
          .contact-light-theme {
            --text-primary: #0f172a;
            --text-secondary: #475569;
            --border-default: #e2e8f0;
          }
          .contact-light-theme .form-label {
            color: #475569;
          }
          .contact-light-theme .form-input, 
          .contact-light-theme .form-textarea {
            background: #f8fafc;
            border-color: #cbd5e1;
            color: #0f172a;
          }
          .contact-light-theme .form-input:focus, 
          .contact-light-theme .form-textarea:focus {
            background: #ffffff;
            border-color: var(--accent);
          }
        `}</style>
        <div style={{ display: 'grid', gap: '3rem', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', alignItems: 'start' }}>
          
          {/* Left: Form */}
          <div className="fade-in-up" style={{ background: '#ffffff', padding: '2.5rem', borderRadius: 'var(--radius-xl)', border: '1px solid var(--border-default)', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -2px rgba(0, 0, 0, 0.05)' }}>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '0.5rem', color: 'var(--text-primary)' }}>Send a Message</h3>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', fontSize: '0.95rem' }}>Fill out the form below and our team will get back to you shortly.</p>
            
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="form-group">
                <label className="form-label" htmlFor="name">Name</label>
                <input type="text" id="name" className="form-input" placeholder="Your Name" />
              </div>
              
              <div className="form-group">
                <label className="form-label" htmlFor="email">Email</label>
                <input type="email" id="email" className="form-input" placeholder="you@company.com" />
              </div>
              
              <div className="form-group">
                <label className="form-label" htmlFor="subject">Subject</label>
                <input type="text" id="subject" className="form-input" placeholder="How can we help?" />
              </div>
              
              <div className="form-group">
                <label className="form-label" htmlFor="message">Message</label>
                <textarea id="message" className="form-textarea" placeholder="Your message..." rows={4}></textarea>
              </div>
              
              <button type="submit" className="btn btn-primary btn-lg" style={{ width: '100%', marginTop: '1.5rem', fontSize: '1.1rem', fontWeight: 600, padding: '1rem' }}>Send Message</button>
            </form>
          </div>

          {/* Right: Info Cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            
            {/* Phone */}
            <div className="fade-in-up" style={{ transitionDelay: '0.1s', background: '#2563eb', padding: '2rem', borderRadius: 'var(--radius-xl)', border: '1px solid rgba(255,255,255,0.1)', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', boxShadow: '0 10px 15px -3px rgba(37, 99, 235, 0.3)' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(255,255,255,0.15)', color: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
                <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
              </div>
              <h4 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '0.5rem', color: '#ffffff' }}>Phone Number</h4>
              <a href="tel:+918851847821" style={{ color: '#e0e7ff', textDecoration: 'none', transition: 'color 0.2s' }} onMouseOver={(e) => e.currentTarget.style.color = '#ffffff'} onMouseOut={(e) => e.currentTarget.style.color = '#e0e7ff'}>+91 8851847821</a>
            </div>

            {/* Email */}
            <div className="fade-in-up" style={{ transitionDelay: '0.2s', background: '#2563eb', padding: '2rem', borderRadius: 'var(--radius-xl)', border: '1px solid rgba(255,255,255,0.1)', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', boxShadow: '0 10px 15px -3px rgba(37, 99, 235, 0.3)' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(255,255,255,0.15)', color: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
                <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
              </div>
              <h4 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '0.5rem', color: '#ffffff' }}>Email Address</h4>
              <a href="mailto:info@sentrai.in" style={{ color: '#e0e7ff', textDecoration: 'none', transition: 'color 0.2s' }} onMouseOver={(e) => e.currentTarget.style.color = '#ffffff'} onMouseOut={(e) => e.currentTarget.style.color = '#e0e7ff'}>info@sentrai.in</a>
            </div>

            {/* Location */}
            <div className="fade-in-up" style={{ transitionDelay: '0.3s', background: '#2563eb', padding: '2rem', borderRadius: 'var(--radius-xl)', border: '1px solid rgba(255,255,255,0.1)', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', boxShadow: '0 10px 15px -3px rgba(37, 99, 235, 0.3)' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(255,255,255,0.15)', color: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
                <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
              </div>
              <h4 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '0.5rem', color: '#ffffff' }}>Our Location</h4>
              <span style={{ color: '#e0e7ff' }}>F2, Sector-8, Noida, Uttar Pradesh, India</span>
            </div>

          </div>
        </div>
      </div>
    </section>
  </main>
);

// Inner app that has access to router context for hooks
const AppInner: React.FC = () => {
  const location = useLocation();
  useScrollAnimation();

  // Scroll to top on route change (unless hash anchor)
  useEffect(() => {
    if (!location.hash) {
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  }, [location.pathname]);

  return (
    <>
      {location.pathname !== '/products/indri' && <Navbar />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products/indri" element={<IndriPage />} />
        <Route path="/company/contact" element={<ContactPage />} />
        <Route path="/solutions" element={<PlaceholderPage title="Solutions" />} />
        <Route path="/solutions/:slug" element={<PlaceholderPage title="Solution Detail" />} />
        <Route path="/products" element={<PlaceholderPage title="Products" />} />
        <Route path="/products/roadmap" element={<PlaceholderPage title="Product Roadmap" />} />
        <Route path="/industries" element={<PlaceholderPage title="Industries" />} />
        <Route path="/industries/:slug" element={<PlaceholderPage title="Industry Detail" />} />
        <Route path="/microsoft-azure" element={<PlaceholderPage title="Microsoft & Azure" />} />
        <Route path="/resources" element={<PlaceholderPage title="Resources" />} />
        <Route path="/resources/:slug" element={<PlaceholderPage title="Resource" />} />
        <Route path="/company" element={<PlaceholderPage title="Company" />} />
        <Route path="/company/about" element={<PlaceholderPage title="About Sentr AI" />} />
        <Route path="/company/partners" element={<PlaceholderPage title="Partners" />} />
        <Route path="/company/careers" element={<PlaceholderPage title="Careers" />} />
        <Route path="/privacy" element={<PlaceholderPage title="Privacy Policy" />} />
        <Route path="/terms" element={<PlaceholderPage title="Terms of Use" />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
};

export default function App() {
  return (
    <BrowserRouter>
      <AppInner />
    </BrowserRouter>
  );
}
