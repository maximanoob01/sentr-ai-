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
        paddingTop: 'calc(var(--nav-height) + 6rem)', 
        paddingBottom: '8rem', 
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Background glow effects for Pro Max UI */}
        <div style={{ position: 'absolute', top: '-10%', left: '-10%', width: '40vw', height: '40vw', background: 'radial-gradient(circle, rgba(37,99,235,0.15) 0%, rgba(8,11,18,0) 70%)', zIndex: 0 }} />
        <div style={{ position: 'absolute', bottom: '-10%', right: '-10%', width: '30vw', height: '30vw', background: 'radial-gradient(circle, rgba(0,196,161,0.1) 0%, rgba(8,11,18,0) 70%)', zIndex: 0 }} />

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '4rem', alignItems: 'center' }}>
            
            {/* Text Content */}
            <div className="fade-in-up" style={{ paddingRight: '1rem' }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem', padding: '0.5rem 1rem', background: 'rgba(37,99,235,0.1)', border: '1px solid rgba(37,99,235,0.2)', borderRadius: 'var(--radius-full)' }}>
                <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#3b82f6', display: 'inline-block' }}></span>
                <span style={{ color: '#60a5fa', fontSize: '0.85rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>About Sentr AI</span>
              </div>
              <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 800, color: 'var(--text-primary)', letterSpacing: '-0.03em', marginBottom: '1.5rem', lineHeight: 1.1 }}>
                Building Intelligent Technology for a <span style={{ color: '#3b82f6' }}>More Secure Future</span>
              </h1>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1.125rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                Sentr AI helps organizations protect, optimize, and transform their technology environments through intelligent monitoring, cybersecurity, enterprise IT, cloud infrastructure, and managed services.
              </p>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1.125rem', lineHeight: 1.7 }}>
                We combine technology expertise with a practical understanding of business operations to build solutions that are secure, scalable, and designed around real-world requirements.
              </p>
            </div>

            {/* Image Content */}
            <div className="fade-in-up" style={{ transitionDelay: '0.2s' }}>
              <div style={{ position: 'relative', borderRadius: 'var(--radius-2xl)', overflow: 'hidden', boxShadow: '0 25px 50px -12px rgba(0,0,0,0.5)' }}>
                <img src={heroImg} alt="Building Intelligent Technology" style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'cover' }} />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(8,11,18,0.8) 0%, transparent 100%)' }}></div>
                <div style={{ position: 'absolute', inset: 0, border: '1px solid rgba(255,255,255,0.1)', borderRadius: 'var(--radius-2xl)', pointerEvents: 'none' }}></div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
};
