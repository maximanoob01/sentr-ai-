import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './HowIndriWorks.css';
import workBg from '../../assets/work.png';

const steps = [
  {
    title: 'Connect Your Systems',
    description: 'Bring your cameras, machines, sensors, testing equipment, and business systems together in one place.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
      </svg>
    ),
  },
];

export const HowIndriWorks: React.FC = () => {
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
    <section className="how-works section-y" ref={sectionRef} id="how-it-works" style={{ backgroundImage: `url(${workBg})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
      <div className="how-works__overlay"></div>
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div className="how-works__split">
          
          {/* Left Column */}
          <div className="how-works__content-col fade-in-up">
            <div className="how-works__decorator-bar"></div>
            <h2 className="how-works__title">
              From Data Sources to<br />
              Operational Action
            </h2>
            <p className="how-works__desc">
              Aindri creates a continuous intelligence loop — connecting your operations, analysing what matters and surfacing the insights your team needs to act.
            </p>
            <Link to="/products/indri" className="how-works__btn">
              More Features
            </Link>
          </div>

          {/* Right Column: 2x2 Grid */}
          <div className="how-works__grid-col">
            {steps.map((step, index) => {
              const isDark = index === 1; // Highlight the top-right card
              const isBlue = index === 2; // AI card
              return (
                <div 
                  key={index} 
                  className={`how-works__card fade-in-up ${isDark ? 'how-works__card--dark' : ''} ${isBlue ? 'how-works__card--blue' : ''}`}
                  style={{ transitionDelay: `${index * 0.1}s` }}
                >
                  <div className="how-works__card-icon-wrapper">
                    {step.icon}
                  </div>
                  <h3 className="how-works__card-title">{step.title}</h3>
                  <p className="how-works__card-desc">{step.description}</p>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};
