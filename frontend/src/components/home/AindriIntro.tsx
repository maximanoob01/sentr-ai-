import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './AindriIntro.css';
import aindriVideo from '../../assets/aindri.mp4';
import aindriLogo from '../../assets/aindri/aindri.png';

export const AindriIntro: React.FC = () => {
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
    <section className="aindri-hero" ref={sectionRef} aria-label="Aindri Industrial AI Vision">
      <div className="container aindri-hero__container">
        <div className="aindri-hero__grid">
          {/* Left Column: Content */}
          <div className="aindri-hero__content-col fade-in-up">
            <div className="aindri-hero__logo-wrapper">
              <img src={aindriLogo} alt="Aindri — See More. Prevent More." className="aindri-hero__logo" />
            </div>

            <div className="aindri-hero__label">
              <span className="aindri-hero__label-line"></span>
              INDUSTRIAL AI VISION
            </div>

            <h2 className="aindri-hero__title">
              Turn Every Camera Into <br />
              <span className="aindri-hero__title-highlight">Operational Intelligence</span>
            </h2>

            <p className="aindri-hero__description">
              <strong>Aindri</strong> transforms ordinary security cameras into a real-time operational intelligence system for factories and warehouses.
            </p>

            <div className="aindri-hero__actions">
              <Link to="/products/aindri" className="aindri-hero__btn aindri-hero__btn--primary">
                Get Started
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </Link>
              <Link to="/products/aindri#demo" className="aindri-hero__btn aindri-hero__btn--video">
                <span className="aindri-hero__play-icon">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                    <polygon points="5 3 19 12 5 21 5 3"></polygon>
                  </svg>
                </span>
                Watch Video
              </Link>
            </div>
          </div>

          {/* Right Column: Video */}
          <div className="aindri-hero__video-col fade-in-up" style={{ transitionDelay: '0.15s' }}>
            <div className="aindri-hero__video-wrapper">
              <video
                className="aindri-hero__video"
                autoPlay
                loop
                muted
                playsInline
              >
                <source src={aindriVideo} type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const IndriIntro = AindriIntro;

