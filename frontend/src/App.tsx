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
  <main style={{ 
    paddingTop: 'calc(var(--nav-height) + 4rem)', 
    paddingBottom: '6rem', 
    minHeight: '70vh',
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
      <span className="section-label">Get in Touch</span>
      <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 800, color: 'var(--text-primary)', letterSpacing: '-0.03em', marginBottom: '1rem', lineHeight: 1.1 }}>
        Contact Sentr AI
      </h1>
      <p style={{ color: 'var(--text-secondary)', fontSize: '1.125rem', maxWidth: '520px', lineHeight: 1.7, marginBottom: '3rem' }}>
        Whether you have a question about Indri, need enterprise IT support or want to explore how we can work together — we're here.
      </p>
    </div>
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
