import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './IndriIntro.css';
import indriiBg from '../../assets/cctv.png';
import aindriLogo from '../../assets/aindrii.png';

export const IndriIntro: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );
    const elements = sectionRef.current?.querySelectorAll('.fade-in-up');
    elements?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="aindri-hero" ref={sectionRef} style={{ backgroundImage: `url(${indriiBg})` }}>
      <div className="aindri-hero__overlay"></div>
      
      <div className="aindri-hero__content container">
        {/* Top Header */}
        <header className="aindri-hero__header fade-in-up">
          <div className="aindri-hero__logo-wrapper">
            <img src={aindriLogo} alt="Aindri" className="aindri-hero__logo" />
          </div>

        </header>

        {/* Main Center Content */}
        <div className="aindri-hero__main fade-in-up" style={{ transitionDelay: '0.1s' }}>
          <div className="aindri-hero__label">
            <span className="aindri-hero__label-line"></span>
            INDUSTRIAL AI VISION
          </div>
          <h1 className="aindri-hero__title">
            Turn Every Camera Into <br/>
            <span className="aindri-hero__title-highlight">Operational Intelligence</span>
          </h1>
          <p className="aindri-hero__description">
            <strong>Aindri</strong> transforms ordinary security cameras into a real-time operational intelligence system for factories and warehouses.
          </p>
          <div className="aindri-hero__actions">
            <Link to="/products/indri" className="aindri-hero__btn aindri-hero__btn--primary">
              Get Started
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </Link>
            <button className="aindri-hero__btn aindri-hero__btn--video">
              <span className="aindri-hero__play-icon">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <polygon points="5 3 19 12 5 21 5 3"></polygon>
                </svg>
              </span>
              Watch Video
            </button>
          </div>
        </div>


      </div>
    </section>
  );
};
