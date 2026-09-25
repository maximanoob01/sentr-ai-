import React, { useEffect } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import heroImg from '../assets/about us/hero.png';

export const AboutPage: React.FC = () => {
  useScrollAnimation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main style={{ minHeight: '100vh', background: 'var(--bg-base)' }}>
      {/* Hero Section */}
      <section style={{ 
        position: 'relative',
        minHeight: '80vh',
        display: 'flex',
        alignItems: 'center',
        paddingTop: 'calc(var(--nav-height) + 2rem)',
        paddingBottom: '4rem',
        overflow: 'hidden'
      }}>
        {/* Background Image with Overlay */}
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `url(${heroImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          zIndex: 0
        }} />
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to right, rgba(8, 11, 18, 0.95) 0%, rgba(8, 11, 18, 0.7) 50%, rgba(8, 11, 18, 0.3) 100%)',
          zIndex: 0
        }} />

        <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <div className="fade-in-up" style={{ maxWidth: '850px', margin: '0 auto' }}>
            <div style={{ marginBottom: '1rem' }}>
              <span style={{ color: '#ffffff', fontSize: '1.25rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em' }}>About Sentr AI</span>
            </div>
            <h1 style={{ fontSize: 'clamp(2rem, 4.5vw, 3.5rem)', fontWeight: 800, color: '#ffffff', letterSpacing: '-0.03em', marginBottom: '0', lineHeight: 1.1 }}>
              Building Intelligent Technology for a <span style={{ color: '#3b82f6' }}>More Secure Future</span>
            </h1>
          </div>
        </div>
      </section>
    </main>
  );
};
