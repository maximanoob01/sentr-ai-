import React, { useEffect, useRef } from 'react';
import { BrowserRouter, Routes, Route, useLocation, Link, Navigate } from 'react-router-dom';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { HomePage } from './pages/HomePage';
import { AindriPage } from './pages/AindriPage';
import { AboutPage } from './pages/AboutPage';
import { PrivacyPage } from './pages/PrivacyPage';
import { TermsPage } from './pages/TermsPage';
import { CookiePage } from './pages/CookiePage';
import { CareerPage } from './pages/CareerPage';
import { BlogPage } from './pages/BlogPage';
import { CloudSolutionsPage } from './pages/CloudSolutionsPage';
import { AISolutionsPage } from './pages/AISolutionsPage';
import { useScrollAnimation } from './hooks/useScrollAnimation';
import { AdminApp } from './admin/AdminApp';
import heroImg from './assets/contact us/hero.png';
import workImg from './assets/work.png';
import siliconImg from './assets/alliance logo/silicon.png';
import oceanImg from './assets/ocean.png';
import './styles/globals.css';
import './styles/components.css';
import './pages/ContactPage.css';

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
  const scrollLeft = () => { if (scrollRef.current) scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' }); };
  const scrollRight = () => { if (scrollRef.current) scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' }); };

  return (
    <main className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero">
        <div
          className="contact-hero__bg"
          style={{ backgroundImage: `url(${heroImg})` }}
        />
        <div className="container contact-hero__content">
          <h1 className="contact-hero__title">
            Contact Sentr AI
          </h1>
          <p className="contact-hero__desc">
            Whether you have a question about Aindri, need enterprise IT support or want to explore how we can work together — we're here.
          </p>
        </div>
      </section>

      {/* Main Contact Card */}
      <section className="contact-form-section">
        <div className="container">
          <div className="contact-card fade-in-up">
            {/* Left Panel */}
            <div className="contact-card__left">
              <h3 className="contact-card__heading">Get in touch</h3>
              <p className="contact-card__lead">
                Fill out the form or reach out to us using the contact details provided. We would love to hear from you.
              </p>

              <div className="contact-card__info-list">
                {/* Location */}
                <div className="contact-info-item">
                  <div className="contact-info-icon">
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                  </div>
                  <div>
                    <h4>Our Location</h4>
                    <p>F2, Sector-8, Noida,<br/>Uttar Pradesh, India</p>
                  </div>
                </div>

                {/* Email */}
                <div className="contact-info-item">
                  <div className="contact-info-icon">
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                  </div>
                  <div>
                    <h4>Email Address</h4>
                    <a href="mailto:info@sentrai.in">info@sentrai.in</a>
                  </div>
                </div>

                {/* Phone */}
                <div className="contact-info-item">
                  <div className="contact-info-icon">
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                  </div>
                  <div>
                    <h4>Phone Number</h4>
                    <a href="tel:+918851847821">+91 8851847821</a>
                  </div>
                </div>
              </div>

              {/* Socials */}
              <div className="contact-card__socials">
                <h4>Follow our social media</h4>
                <div className="contact-card__social-links">
                  <a href="#" aria-label="Facebook"><svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg></a>
                  <a href="#" aria-label="Twitter"><svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/></svg></a>
                  <a href="#" aria-label="LinkedIn"><svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg></a>
                </div>
              </div>
            </div>

            {/* Right Panel */}
            <div className="contact-card__right">
              <h3 className="contact-card__heading">Send us a message</h3>
              
              <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
                <div className="contact-form__row">
                  <div className="form-group">
                    <label className="form-label" htmlFor="name">Name</label>
                    <input type="text" id="name" className="form-input" placeholder="Name" />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="company">Company</label>
                    <input type="text" id="company" className="form-input" placeholder="Company" />
                  </div>
                </div>

                <div className="contact-form__row">
                  <div className="form-group">
                    <label className="form-label" htmlFor="phone">Phone</label>
                    <input type="tel" id="phone" className="form-input" placeholder="Phone" />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="email">Email</label>
                    <input type="email" id="email" className="form-input" placeholder="Email" />
                  </div>
                </div>
                
                <div className="form-group">
                  <label className="form-label" htmlFor="subject">Subject</label>
                  <input type="text" id="subject" className="form-input" placeholder="Subject" />
                </div>
                
                <div className="form-group form-group--last">
                  <label className="form-label" htmlFor="message">Message</label>
                  <textarea id="message" className="form-textarea" placeholder="Message" rows={4}></textarea>
                </div>
                
                <button type="submit" className="contact-form__btn">Send</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* SiliconIndia Feature Section */}
      <section className="contact-feature-section">
        <div className="container">
          <div className="contact-feature__grid">
            <div className="fade-in-up contact-feature__text">
              <h2 className="contact-feature__title">
                Featured in <img src={siliconImg} alt="SiliconIndia" style={{ height: '1.2em', objectFit: 'contain', verticalAlign: 'middle' }} /> Magazine
              </h2>
              <h3 className="contact-feature__subtitle">
                Recognized for Intelligent Monitoring & Enterprise Technology
              </h3>
              <p className="contact-feature__desc">
                Sentr AI has been shortlisted for SiliconIndia Magazine's “Top Company in Intelligent Monitoring System Solution of the Year 2026” special edition.
              </p>
              <p className="contact-feature__desc">
                The feature highlights Sentr AI's work across intelligent monitoring, cybersecurity, enterprise IT, cloud and managed services.
              </p>
              <a href="#" className="contact-feature__btn">
                Read the Feature 
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
              </a>
            </div>

            <div className="fade-in-up contact-feature__visual">
              <div className="contact-feature__img-wrap">
                <img src={workImg} alt="Sentr AI Workspace" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Insights / Blog Section */}
      <section className="contact-insights-section">
        <div className="container">
          <div className="contact-insights__header">
            <div>
              <span className="section-label">Latest Insights</span>
              <h2 className="contact-insights__title">
                News & Resources
              </h2>
            </div>
            <div className="contact-insights__nav">
              <button onClick={scrollLeft} className="contact-insights__nav-btn" aria-label="Previous insight">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m15 18-6-6 6-6"></path></svg>
              </button>
              <button onClick={scrollRight} className="contact-insights__nav-btn" aria-label="Next insight">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m9 18 6-6-6-6"></path></svg>
              </button>
            </div>
          </div>
          <div ref={scrollRef} className="contact-insights__carousel">
            {/* Card 1 */}
            <div className="fade-in-up contact-insight-card" style={{ transitionDelay: '0.1s' }}>
              <span className="contact-insight-card__tag">Technology</span>
              <h4 className="contact-insight-card__title">Why Business Email Is Essential for Every Organization</h4>
              <p className="contact-insight-card__desc">
                Discover why reliable business email remains a critical communication channel for modern organizations, supporting professional communication, collaboration, and day-to-day business operations.
              </p>
              <div className="contact-insight-card__footer">
                <Link to="/blog">
                  Read Article <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                </Link>
              </div>
            </div>

            {/* Card 2 */}
            <div className="fade-in-up contact-insight-card" style={{ transitionDelay: '0.2s' }}>
              <span className="contact-insight-card__tag">Artificial Intelligence</span>
              <h4 className="contact-insight-card__title">How AI Is Impacting the Technology Industry</h4>
              <p className="contact-insight-card__desc">
                Artificial Intelligence is reshaping the technology landscape—from everyday digital experiences to cloud computing and enterprise systems. Explore how AI is changing the way businesses use and deliver technology.
              </p>
              <div className="contact-insight-card__footer">
                <Link to="/blog">
                  Read Article <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                </Link>
              </div>
            </div>

            {/* Card 3 */}
            <div className="fade-in-up contact-insight-card" style={{ transitionDelay: '0.3s' }}>
              <span className="contact-insight-card__tag">Cloud Infrastructure</span>
              <h4 className="contact-insight-card__title">Understanding Cloud Management: Why It Matters for Businesses</h4>
              <p className="contact-insight-card__desc">
                As businesses increasingly depend on cloud infrastructure, effective cloud management has become essential. Learn why organizations need better visibility, control, and management across their cloud environments.
              </p>
              <div className="contact-insight-card__footer">
                <Link to="/blog">
                  Read Article <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                </Link>
              </div>
            </div>

            {/* Card 4 */}
            <div className="fade-in-up contact-insight-card" style={{ transitionDelay: '0.4s' }}>
              <span className="contact-insight-card__tag">Cybersecurity</span>
              <h4 className="contact-insight-card__title">How AI Is Transforming Cybersecurity in India</h4>
              <p className="contact-insight-card__desc">
                Explore how Artificial Intelligence is being applied to cybersecurity through real-time threat detection, predictive analysis, automated responses, and more proactive security strategies.
              </p>
              <div className="contact-insight-card__footer">
                <Link to="/blog">
                  Read Article <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="contact-bottom-cta">
        <div className="container">
          <div
            className="fade-in-up contact-bottom-cta__card"
            style={{
              backgroundImage: `linear-gradient(135deg, rgba(30,58,138,0.85), rgba(37,99,235,0.7)), url(${oceanImg})`,
            }}
          >
            <div className="contact-bottom-cta__content">
              <h2 className="contact-bottom-cta__title">
                Have a Challenge in Mind?
              </h2>
              <p className="contact-bottom-cta__desc">
                Tell us what you need. Let's find the right solution.
              </p>
            </div>
            <div className="contact-bottom-cta__action">
              <a
                href="#"
                className="contact-bottom-cta__btn"
                onMouseOver={(e) => (e.currentTarget.style.transform = 'translateY(-2px)')}
                onMouseOut={(e) => (e.currentTarget.style.transform = 'none')}
              >
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

const IndriRedirect: React.FC = () => {
  const location = useLocation();
  return <Navigate to={`/products/aindri${location.hash || ''}`} replace />;
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
      {!location.pathname.startsWith('/admin') && location.pathname !== '/products/indri' && location.pathname !== '/products/aindri' && <Navbar />}
      <Routes>
        <Route path="/admin/*" element={<AdminApp />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/products/indri" element={<IndriRedirect />} />
        <Route path="/products/aindri" element={<AindriPage />} />
        <Route path="/company/contact" element={<ContactPage />} />
        <Route path="/contact" element={<Navigate to="/company/contact" replace />} />
        <Route path="/solutions" element={<PlaceholderPage title="Solutions" />} />
        <Route path="/solutions/ai" element={<AISolutionsPage />} />
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
      {!location.pathname.startsWith('/admin') && <Footer />}
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
