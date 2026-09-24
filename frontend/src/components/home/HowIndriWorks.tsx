import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './HowIndriWorks.css';
import workBg from '../../assets/work.png';

const steps = [
  {
    title: 'Connect Data Sources',
    description: 'Cameras, industrial sensors, machines, testing equipment, PLCs and ERP/MES systems connect to Indri through standard protocols and APIs.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
      </svg>
    ),
  },
  {
    title: 'Collect & Normalise',
    description: 'Raw operational data from every connected source is collected in real time, normalised into a unified format and stored securely.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
        <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
      </svg>
    ),
  },
  {
    title: 'AI & Intelligent Analysis',
    description: 'Computer vision algorithms and AI models analyse video feeds, sensor data and production metrics to identify patterns, anomalies and deviations.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect>
        <rect x="9" y="9" width="6" height="6"></rect>
        <line x1="9" y1="1" x2="9" y2="4"></line>
        <line x1="15" y1="1" x2="15" y2="4"></line>
        <line x1="9" y1="20" x2="9" y2="23"></line>
        <line x1="15" y1="20" x2="15" y2="23"></line>
        <line x1="20" y1="9" x2="23" y2="9"></line>
        <line x1="20" y1="14" x2="23" y2="14"></line>
        <line x1="1" y1="9" x2="4" y2="9"></line>
        <line x1="1" y1="14" x2="4" y2="14"></line>
      </svg>
    ),
  },
  {
    title: 'Monitor in Real Time',
    description: 'The Indri dashboard gives your teams a clear, live view of production lines, machine status, energy consumption and quality metrics.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
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
              Indri creates a continuous intelligence loop — connecting your operations, analysing what matters and surfacing the insights your team needs to act.
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
