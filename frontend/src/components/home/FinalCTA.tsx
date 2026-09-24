import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './FinalCTA.css';
import bgImg from '../../assets/why us/bg.png';
import logo1 from '../../assets/logo1.png';

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
    <section className="final-cta section-y" ref={sectionRef} aria-labelledby="final-cta-heading">
      <div className="container">
        <div className="final-cta__wrapper">
          {/* Dimmed background image */}
          <div className="final-cta__bg-img" style={{ backgroundImage: `url(${bgImg})` }} aria-hidden="true" />
          <div className="final-cta__bg-accent" aria-hidden="true" />
          {/* Top-left logo */}
          <img src={logo1} alt="Sentr AI" className="final-cta__corner-logo" />

      <div className="final-cta__content">
            <span className="section-label">Get Started</span>
            <h2 id="final-cta-heading" className="final-cta__heading">
              Bring Intelligent Visibility<br />to Your Operations
            </h2>
              <p className="final-cta__sub">
                Explore how Sentr AI can help your organization with intelligent monitoring, enterprise technology, cybersecurity, cloud, and managed services.
              </p>

            <div className="final-cta__actions">
              <Link to="/products/indri#demo" className="btn btn-primary btn-lg btn-arrow">
                Request an Indri Demo
              </Link>
              <Link to="/company/contact" className="btn btn-secondary btn-lg">
                Contact Sentr AI
              </Link>
            </div>

            {/* Contact details */}
            <div className="final-cta__contact-row">
              <a href="tel:+918851847821" className="final-cta__contact-item">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M2.5 2.5C2.5 2.5 3.5 1 5 2.5L6 3.5C6 3.5 6.5 4 5.5 5C4.5 6 5.5 7.5 6.5 8.5C7.5 9.5 9 10.5 10 9.5C11 8.5 11.5 9 11.5 9L13 10.5C14.5 12 13 13 13 13C13 13 9.5 13.5 3 7C-3.5 0.5 2.5 2.5 2.5 2.5Z" stroke="currentColor" strokeWidth="1.3"/>
                </svg>
                +91 8851847821
              </a>
              <span className="final-cta__contact-sep">·</span>
              <a href="mailto:info@sentrai.in" className="final-cta__contact-item">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <rect x="1.5" y="3.5" width="13" height="9" rx="1.5" stroke="currentColor" strokeWidth="1.3"/>
                  <path d="M1.5 5L8 9L14.5 5" stroke="currentColor" strokeWidth="1.3"/>
                </svg>
                info@sentrai.in
              </a>
              <span className="final-cta__contact-sep">·</span>
              <span className="final-cta__contact-item final-cta__contact-item--location">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M8 1.5C5.51 1.5 3.5 3.51 3.5 6C3.5 9.75 8 14.5 8 14.5C8 14.5 12.5 9.75 12.5 6C12.5 3.51 10.49 1.5 8 1.5Z" stroke="currentColor" strokeWidth="1.3"/>
                  <circle cx="8" cy="6" r="1.5" stroke="currentColor" strokeWidth="1.3"/>
                </svg>
                Noida, Uttar Pradesh, India
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
