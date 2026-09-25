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
        paddingTop: 'calc(var(--nav-height) + 4rem)', 
        paddingBottom: '8rem', 
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '60vh'
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
          background: 'rgba(15, 23, 42, 0.7)',
          zIndex: 0
        }} />

        <div className="container" style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
          <div className="fade-in-up" style={{ maxWidth: '900px', margin: '0 auto' }}>
            <h2 style={{ 
              color: '#ffffff', 
              fontSize: '1.2rem', 
              fontWeight: 700, 
              textTransform: 'uppercase', 
              letterSpacing: '0.15em',
              marginBottom: '1.5rem'
            }}>
              About Sentr AI
            </h2>
            <h1 style={{ 
              fontSize: 'clamp(2rem, 5vw, 3.5rem)', 
              fontWeight: 800, 
              color: '#ffffff', 
              letterSpacing: '-0.02em', 
              lineHeight: 1.2,
              margin: 0
            }}>
              Building Intelligent Technology for a <br />
              <span style={{ color: '#3b82f6' }}>More Secure Future</span>
            </h1>
          </div>
        </div>
      </section>
    </main>
  );
};
