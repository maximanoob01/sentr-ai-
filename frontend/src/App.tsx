import React, { useEffect, useRef } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { HomePage } from './pages/HomePage';
import { IndriPage } from './pages/IndriPage';
import { AboutPage } from './pages/AboutPage';
import { PrivacyPage } from './pages/PrivacyPage';
import { TermsPage } from './pages/TermsPage';
import { CookiePage } from './pages/CookiePage';
import { CareerPage } from './pages/CareerPage';
import { BlogPage } from './pages/BlogPage';
import { CloudSolutionsPage } from './pages/CloudSolutionsPage';
import { useScrollAnimation } from './hooks/useScrollAnimation';
import heroImg from './assets/contact us/hero.png';
import workImg from './assets/work.png';
import siliconImg from './assets/alliance logo/silicon.png';
import oceanImg from './assets/ocean.png';
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

const ContactPage: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const scrollLeft = () => { if (scrollRef.current) scrollRef.current.scrollBy({ left: -366, behavior: 'smooth' }); };
  const scrollRight = () => { if (scrollRef.current) scrollRef.current.scrollBy({ left: 366, behavior: 'smooth' }); };

  return (
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
        <div style={{ 
          background: '#ffffff', 
          borderRadius: '24px', 
          boxShadow: '0 20px 40px rgba(0,0,0,0.08)',
          display: 'grid',
          gridTemplateColumns: '1fr 1.3fr',
          overflow: 'hidden'
        }} className="contact-grid-override fade-in-up">
          <style>{`
            @media (max-width: 900px) {
              .contact-grid-override {
                grid-template-columns: 1fr !important;
              }
              .contact-left-panel {
                padding: 2.5rem !important;
              }
              .contact-right-panel {
                padding: 2.5rem !important;
              }
            }
          `}</style>

          {/* Left Panel */}
          <div className="contact-left-panel" style={{ background: '#f8fafc', padding: '4rem 3.5rem' }}>
            <h3 style={{ fontSize: '1.75rem', fontWeight: 800, color: '#0f172a', marginBottom: '1rem' }}>Get in touch</h3>
            <p style={{ color: '#64748b', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '2.5rem' }}>
              Fill out the form or reach out to us using the contact details provided. We would love to hear from you.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              {/* Location */}
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                <div style={{ width: '44px', height: '44px', borderRadius: '50%', background: '#2563eb', color: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                </div>
                <div>
                  <h4 style={{ fontSize: '1rem', fontWeight: 700, color: '#0f172a', marginBottom: '0.25rem' }}>Our Location</h4>
                  <p style={{ color: '#475569', fontSize: '0.9rem', lineHeight: 1.5 }}>F2, Sector-8, Noida,<br/>Uttar Pradesh, India</p>
                </div>
              </div>

              {/* Email */}
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                <div style={{ width: '44px', height: '44px', borderRadius: '50%', background: '#2563eb', color: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                </div>
                <div>
                  <h4 style={{ fontSize: '1rem', fontWeight: 700, color: '#0f172a', marginBottom: '0.25rem' }}>Email Address</h4>
                  <a href="mailto:info@sentrai.in" style={{ color: '#475569', fontSize: '0.9rem', textDecoration: 'none' }}>info@sentrai.in</a>
                </div>
              </div>

              {/* Phone */}
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                <div style={{ width: '44px', height: '44px', borderRadius: '50%', background: '#2563eb', color: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                </div>
                <div>
                  <h4 style={{ fontSize: '1rem', fontWeight: 700, color: '#0f172a', marginBottom: '0.25rem' }}>Phone Number</h4>
                  <a href="tel:+918851847821" style={{ color: '#475569', fontSize: '0.9rem', textDecoration: 'none' }}>+91 8851847821</a>
                </div>
              </div>
            </div>

            {/* Socials */}
            <div style={{ marginTop: '3.5rem' }}>
              <h4 style={{ fontSize: '0.9rem', fontWeight: 700, color: '#0f172a', marginBottom: '1rem' }}>Follow our social media</h4>
              <div style={{ display: 'flex', gap: '0.75rem' }}>
                <a href="#" style={{ width: '36px', height: '36px', borderRadius: '50%', background: '#2563eb', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg></a>
                <a href="#" style={{ width: '36px', height: '36px', borderRadius: '50%', background: '#2563eb', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/></svg></a>
                <a href="#" style={{ width: '36px', height: '36px', borderRadius: '50%', background: '#2563eb', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg></a>
              </div>
            </div>
          </div>

          {/* Right Panel */}
          <div className="contact-right-panel" style={{ padding: '4rem 3.5rem', background: '#ffffff' }}>
            <h3 style={{ fontSize: '1.75rem', fontWeight: 800, color: '#0f172a', marginBottom: '2rem' }}>Send us a message</h3>
            
            <form onSubmit={(e) => e.preventDefault()}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '1.25rem' }}>
                <div className="form-group" style={{ marginBottom: 0 }}>
                  <label className="form-label" style={{ fontSize: '0.8rem', fontWeight: 700, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.05em' }} htmlFor="name">Name</label>
                  <input type="text" id="name" className="form-input" placeholder="Name" style={{ background: '#f8fafc', border: '1px solid transparent', borderRadius: '12px' }} />
                </div>
                <div className="form-group" style={{ marginBottom: 0 }}>
                  <label className="form-label" style={{ fontSize: '0.8rem', fontWeight: 700, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.05em' }} htmlFor="company">Company</label>
                  <input type="text" id="company" className="form-input" placeholder="Company" style={{ background: '#f8fafc', border: '1px solid transparent', borderRadius: '12px' }} />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '1.25rem' }}>
                <div className="form-group" style={{ marginBottom: 0 }}>
                  <label className="form-label" style={{ fontSize: '0.8rem', fontWeight: 700, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.05em' }} htmlFor="phone">Phone</label>
                  <input type="tel" id="phone" className="form-input" placeholder="Phone" style={{ background: '#f8fafc', border: '1px solid transparent', borderRadius: '12px' }} />
                </div>
                <div className="form-group" style={{ marginBottom: 0 }}>
                  <label className="form-label" style={{ fontSize: '0.8rem', fontWeight: 700, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.05em' }} htmlFor="email">Email</label>
                  <input type="email" id="email" className="form-input" placeholder="Email" style={{ background: '#f8fafc', border: '1px solid transparent', borderRadius: '12px' }} />
                </div>
              </div>
              
              <div className="form-group" style={{ marginBottom: '1.25rem' }}>
                <label className="form-label" style={{ fontSize: '0.8rem', fontWeight: 700, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.05em' }} htmlFor="subject">Subject</label>
                <input type="text" id="subject" className="form-input" placeholder="Subject" style={{ background: '#f8fafc', border: '1px solid transparent', borderRadius: '12px' }} />
              </div>
              
              <div className="form-group" style={{ marginBottom: '2rem' }}>
                <label className="form-label" style={{ fontSize: '0.8rem', fontWeight: 700, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.05em' }} htmlFor="message">Message</label>
                <textarea id="message" className="form-textarea" placeholder="Message" rows={4} style={{ background: '#f8fafc', border: '1px solid transparent', borderRadius: '12px', resize: 'vertical' }}></textarea>
              </div>
              
              <button type="submit" className="btn btn-primary btn-lg" style={{ width: '100%', borderRadius: '100px', fontSize: '1.05rem', fontWeight: 600, padding: '1rem', backgroundColor: '#1d4ed8', color: '#ffffff', border: 'none', transition: 'all 0.2s', cursor: 'pointer', boxShadow: '0 4px 14px 0 rgba(29, 78, 216, 0.39)' }} onMouseOver={(e) => { e.currentTarget.style.backgroundColor = '#1e40af'; e.currentTarget.style.transform = 'translateY(-2px)' }} onMouseOut={(e) => { e.currentTarget.style.backgroundColor = '#1d4ed8'; e.currentTarget.style.transform = 'translateY(0)' }}>Send</button>
            </form>
          </div>
        </div>
      </div>
    </section>

    {/* SiliconIndia Feature Section */}
    <section className="section-y" style={{ background: '#374151', borderTop: '1px solid var(--border-default)' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '4rem', alignItems: 'center' }}>
          
          <div className="fade-in-up" style={{ order: 2 }}>
            <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '1rem', lineHeight: 1.2, display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem' }}>
              Featured in <img src={siliconImg} alt="SiliconIndia" style={{ height: '1.2em', objectFit: 'contain', verticalAlign: 'middle' }} /> Magazine
            </h2>
            <h3 style={{ fontSize: '1.25rem', color: '#3b82f6', fontWeight: 600, marginBottom: '1.5rem' }}>
              Recognized for Intelligent Monitoring & Enterprise Technology
            </h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
              Sentr AI has been shortlisted for SiliconIndia Magazine's “Top Company in Intelligent Monitoring System Solution of the Year 2026” special edition.
            </p>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: 1.7, marginBottom: '2rem' }}>
              The feature highlights Sentr AI's work across intelligent monitoring, cybersecurity, enterprise IT, cloud and managed services.
            </p>
            <a href="#" className="btn btn-primary btn-lg" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', backgroundColor: '#2563eb', color: '#ffffff', borderColor: '#2563eb', padding: '1rem 2rem', fontSize: '1.1rem', fontWeight: 600 }}>
              Read the Feature 
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
            </a>
          </div>

          <div className="fade-in-up" style={{ order: 1 }}>
            <div style={{ position: 'relative', borderRadius: 'var(--radius-2xl)', overflow: 'hidden', boxShadow: '0 20px 40px -10px rgba(0,0,0,0.3)' }}>
              <img src={workImg} alt="Sentr AI Workspace" style={{ width: '100%', height: 'auto', display: 'block' }} />
              <div style={{ position: 'absolute', inset: 0, border: '1px solid rgba(255,255,255,0.1)', borderRadius: 'var(--radius-2xl)', pointerEvents: 'none' }}></div>
            </div>
          </div>

        </div>
      </div>
    </section>

    {/* Insights / Blog Section */}
    <section className="section-y" style={{ background: '#ffffff', borderTop: '1px solid var(--border-default)', paddingTop: '5rem', paddingBottom: '6rem' }}>
      <div className="container">
        <div style={{ marginBottom: '3rem', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '1rem' }}>
          <div style={{ textAlign: 'left' }}>
            <span className="section-label" style={{ color: '#475569' }}>Latest Insights</span>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, color: '#0f172a', letterSpacing: '-0.03em', margin: 0 }}>
              News & Resources
            </h2>
          </div>
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            <button onClick={scrollLeft} style={{ width: '48px', height: '48px', borderRadius: '50%', background: '#f1f5f9', border: '1px solid #e2e8f0', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: '#0f172a', transition: 'all 0.2s' }} onMouseOver={(e) => { e.currentTarget.style.background = '#2563eb'; e.currentTarget.style.color = '#ffffff'; e.currentTarget.style.borderColor = '#2563eb'; }} onMouseOut={(e) => { e.currentTarget.style.background = '#f1f5f9'; e.currentTarget.style.color = '#0f172a'; e.currentTarget.style.borderColor = '#e2e8f0'; }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"></path></svg>
            </button>
            <button onClick={scrollRight} style={{ width: '48px', height: '48px', borderRadius: '50%', background: '#f1f5f9', border: '1px solid #e2e8f0', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: '#0f172a', transition: 'all 0.2s' }} onMouseOver={(e) => { e.currentTarget.style.background = '#2563eb'; e.currentTarget.style.color = '#ffffff'; e.currentTarget.style.borderColor = '#2563eb'; }} onMouseOut={(e) => { e.currentTarget.style.background = '#f1f5f9'; e.currentTarget.style.color = '#0f172a'; e.currentTarget.style.borderColor = '#e2e8f0'; }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"></path></svg>
            </button>
          </div>
        </div>
        <div ref={scrollRef} style={{ display: 'flex', gap: '2rem', overflowX: 'auto', paddingBottom: '2rem', scrollSnapType: 'x mandatory', scrollbarWidth: 'none', msOverflowStyle: 'none', WebkitOverflowScrolling: 'touch' }}>
          
          {/* Card 1 */}
          <div className="fade-in-up" style={{ flex: '0 0 min(100%, 350px)', scrollSnapAlign: 'start', transitionDelay: '0.1s', background: '#ffffff', padding: '2rem', borderRadius: 'var(--radius-xl)', border: '1px solid #e2e8f0', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05), 0 2px 4px -2px rgba(0,0,0,0.05)', display: 'flex', flexDirection: 'column' }}>
            <span style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#3b82f6', fontWeight: 700, marginBottom: '0.75rem', display: 'block' }}>Technology</span>
            <h4 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#0f172a', marginBottom: '0.75rem', lineHeight: 1.4 }}>Why Business Email Is Essential for Every Organization</h4>
            <p style={{ color: '#475569', fontSize: '0.95rem', lineHeight: 1.6, flexGrow: 1, marginBottom: '2rem' }}>
              Discover why reliable business email remains a critical communication channel for modern organizations, supporting professional communication, collaboration, and day-to-day business operations.
            </p>
            <div style={{ alignSelf: 'flex-start', borderTop: '1px solid #e2e8f0', paddingTop: '1.25rem', width: '100%' }}>
              <a href="http://localhost:5173/" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: '#0f172a', fontSize: '0.95rem', fontWeight: 600, textDecoration: 'none', transition: 'color 0.2s' }} onMouseOver={(e) => e.currentTarget.style.color = '#3b82f6'} onMouseOut={(e) => e.currentTarget.style.color = '#0f172a'}>
                Read Article <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
              </a>
            </div>
          </div>

          {/* Card 2 */}
          <div className="fade-in-up" style={{ flex: '0 0 min(100%, 350px)', scrollSnapAlign: 'start', transitionDelay: '0.2s', background: '#ffffff', padding: '2rem', borderRadius: 'var(--radius-xl)', border: '1px solid #e2e8f0', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05), 0 2px 4px -2px rgba(0,0,0,0.05)', display: 'flex', flexDirection: 'column' }}>
            <span style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#3b82f6', fontWeight: 700, marginBottom: '0.75rem', display: 'block' }}>Artificial Intelligence</span>
            <h4 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#0f172a', marginBottom: '0.75rem', lineHeight: 1.4 }}>How AI Is Impacting the Technology Industry</h4>
            <p style={{ color: '#475569', fontSize: '0.95rem', lineHeight: 1.6, flexGrow: 1, marginBottom: '2rem' }}>
              Artificial Intelligence is reshaping the technology landscape—from everyday digital experiences to cloud computing and enterprise systems. Explore how AI is changing the way businesses use and deliver technology.
            </p>
            <div style={{ alignSelf: 'flex-start', borderTop: '1px solid #e2e8f0', paddingTop: '1.25rem', width: '100%' }}>
              <a href="http://localhost:5173/" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: '#0f172a', fontSize: '0.95rem', fontWeight: 600, textDecoration: 'none', transition: 'color 0.2s' }} onMouseOver={(e) => e.currentTarget.style.color = '#3b82f6'} onMouseOut={(e) => e.currentTarget.style.color = '#0f172a'}>
                Read Article <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
              </a>
            </div>
          </div>

          {/* Card 3 */}
          <div className="fade-in-up" style={{ flex: '0 0 min(100%, 350px)', scrollSnapAlign: 'start', transitionDelay: '0.3s', background: '#ffffff', padding: '2rem', borderRadius: 'var(--radius-xl)', border: '1px solid #e2e8f0', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05), 0 2px 4px -2px rgba(0,0,0,0.05)', display: 'flex', flexDirection: 'column' }}>
            <span style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#3b82f6', fontWeight: 700, marginBottom: '0.75rem', display: 'block' }}>Cloud Infrastructure</span>
            <h4 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#0f172a', marginBottom: '0.75rem', lineHeight: 1.4 }}>Understanding Cloud Management: Why It Matters for Businesses</h4>
            <p style={{ color: '#475569', fontSize: '0.95rem', lineHeight: 1.6, flexGrow: 1, marginBottom: '2rem' }}>
              As businesses increasingly depend on cloud infrastructure, effective cloud management has become essential. Learn why organizations need better visibility, control, and management across their cloud environments.
            </p>
            <div style={{ alignSelf: 'flex-start', borderTop: '1px solid #e2e8f0', paddingTop: '1.25rem', width: '100%' }}>
              <a href="http://localhost:5173/" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: '#0f172a', fontSize: '0.95rem', fontWeight: 600, textDecoration: 'none', transition: 'color 0.2s' }} onMouseOver={(e) => e.currentTarget.style.color = '#3b82f6'} onMouseOut={(e) => e.currentTarget.style.color = '#0f172a'}>
                Read Article <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
              </a>
            </div>
          </div>

          {/* Card 4 */}
          <div className="fade-in-up" style={{ flex: '0 0 min(100%, 350px)', scrollSnapAlign: 'start', transitionDelay: '0.4s', background: '#ffffff', padding: '2rem', borderRadius: 'var(--radius-xl)', border: '1px solid #e2e8f0', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05), 0 2px 4px -2px rgba(0,0,0,0.05)', display: 'flex', flexDirection: 'column' }}>
            <span style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#3b82f6', fontWeight: 700, marginBottom: '0.75rem', display: 'block' }}>Cybersecurity</span>
            <h4 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#0f172a', marginBottom: '0.75rem', lineHeight: 1.4 }}>How AI Is Transforming Cybersecurity in India</h4>
            <p style={{ color: '#475569', fontSize: '0.95rem', lineHeight: 1.6, flexGrow: 1, marginBottom: '2rem' }}>
              Explore how Artificial Intelligence is being applied to cybersecurity through real-time threat detection, predictive analysis, automated responses, and more proactive security strategies.
            </p>
            <div style={{ alignSelf: 'flex-start', borderTop: '1px solid #e2e8f0', paddingTop: '1.25rem', width: '100%' }}>
              <a href="http://localhost:5173/" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: '#0f172a', fontSize: '0.95rem', fontWeight: 600, textDecoration: 'none', transition: 'color 0.2s' }} onMouseOver={(e) => e.currentTarget.style.color = '#3b82f6'} onMouseOut={(e) => e.currentTarget.style.color = '#0f172a'}>
                Read Article <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>

    {/* CTA Section */}
    <section style={{ paddingBottom: '6rem', background: '#ffffff' }}>
      <div className="container">
        <div className="fade-in-up" style={{ backgroundImage: `linear-gradient(135deg, rgba(30,58,138,0.85), rgba(37,99,235,0.7)), url(${oceanImg})`, backgroundSize: 'cover', backgroundPosition: 'center', padding: '4rem 3rem', borderRadius: 'var(--radius-2xl)', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '2rem', boxShadow: '0 20px 40px -10px rgba(37,99,235,0.3)' }}>
          <div style={{ flex: '1 1 400px' }}>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.5rem)', fontWeight: 800, color: '#ffffff', marginBottom: '1rem', lineHeight: 1.2 }}>
              Have a Challenge in Mind?
            </h2>
            <p style={{ color: '#e0e7ff', fontSize: '1.125rem', margin: 0, maxWidth: '500px', lineHeight: 1.6 }}>
              Tell us what you need. Let's find the right solution.
            </p>
          </div>
          <div>
            <a href="#" style={{ background: '#ffffff', color: '#1e3a8a', padding: '1.25rem 2.5rem', fontSize: '1.1rem', fontWeight: 700, borderRadius: 'var(--radius-full)', display: 'inline-flex', alignItems: 'center', gap: '0.75rem', textDecoration: 'none', transition: 'transform 0.2s', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)' }} onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-2px)'} onMouseOut={(e) => e.currentTarget.style.transform = 'none'}>
              Contact Sentr AI 
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  </main>
  );
};

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
        <Route path="/cloud-solutions" element={<CloudSolutionsPage />} />
        <Route path="/resources" element={<PlaceholderPage title="Resources" />} />
        <Route path="/resources/:slug" element={<PlaceholderPage title="Resource" />} />
        <Route path="/company" element={<PlaceholderPage title="Company" />} />
        <Route path="/company/about" element={<AboutPage />} />
        <Route path="/company/partners" element={<PlaceholderPage title="Partners" />} />
        <Route path="/company/careers" element={<CareerPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="/cookie" element={<CookiePage />} />
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
