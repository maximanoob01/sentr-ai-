import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './FinalCTA.css';
import emailBg from '../../assets/email.png';
import logoDark from '../../assets/logo.png';

export const FinalCTA: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible');
        });
      },
      { threshold: 0.1 }
    );
    sectionRef.current?.querySelectorAll('.fade-in-up').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section 
      className="final-cta section-y" 
      ref={sectionRef} 
      aria-labelledby="final-cta-heading"
      style={{ backgroundImage: `url(${emailBg})` }}
    >
      {/* Background tint overlay behind the card */}
      <div className="final-cta__overlay" aria-hidden="true" />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="final-cta__wrapper">
          <div className="final-cta__bg-accent" aria-hidden="true" />
          
          {/* Top-left corner logo */}
          <img src={logoDark} alt="Sentr AI" className="final-cta__corner-logo" />

          <div className="final-cta__content">
            <span className="final-cta__badge">Get Started</span>
            <h2 id="final-cta-heading" className="final-cta__heading">
              Bring Intelligent Visibility<br />to Your Operations
            </h2>
            <p className="final-cta__sub">
              Explore how Sentr AI can help your organization with intelligent monitoring, enterprise technology, cybersecurity, cloud, and managed services.
            </p>

            <div className="final-cta__actions">
              <Link to="/products/aindri#demo" className="final-cta__btn-primary">
                Request an Aindri Demo
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="M12 5l7 7-7 7"></path></svg>
              </Link>
              <Link to="/company/contact" className="final-cta__btn-secondary">
                Contact Sentr AI
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
