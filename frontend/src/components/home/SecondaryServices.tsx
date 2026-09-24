import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './SecondaryServices.css';

// Import images
import bgImage from '../../assets/why us/ee.png';
import fgImage from '../../assets/indri.png';

export const SecondaryServices: React.FC = () => {
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
    <section className="secondary-services" ref={sectionRef} aria-labelledby="services-heading">
      <div className="container">
        
        <div className="secondary-services__header fade-in-up">
          <span className="section-label">Enterprise Technology</span>
          <h2 id="services-heading" className="secondary-services__heading">
            Beyond Monitoring:<br />Enterprise Technology Capabilities
          </h2>
        </div>

        <div className="secondary-services__grid fade-in-up" style={{ transitionDelay: '0.1s' }}>
          {/* Left Column: Image Composition */}
          <div className="secondary-services__visual">
            <div className="secondary-services__visual-inner">
              <div className="secondary-services__shape" />
              <div className="secondary-services__dots" />
              <img src={bgImage} alt="Enterprise Design Teams" className="secondary-services__img-bg" />
              <img src={fgImage} alt="Robust Solutions" className="secondary-services__img-fg" />
            </div>
          </div>

          {/* Right Column: Text and CTA */}
          <div className="secondary-services__content">
            <p className="secondary-services__desc">
              Alongside Indri, Sentr AI delivers a comprehensive range of enterprise IT services to help organisations build secure, efficient and connected technology environments.
            </p>
            <p className="secondary-services__desc">
              Our engineering direction prioritises open standards, API-first integration and scalable cloud deployment — ensuring that the solutions we build grow with your business.
            </p>
            
            <div className="secondary-services__action">
              <Link to="/solutions/enterprise-it" className="secondary-services__btn">
                Find out more
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="M12 5l7 7-7 7"></path></svg>
              </Link>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
