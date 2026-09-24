import React, { useEffect, useRef } from 'react';
import './Hero.css';
import oceanBg from '../../assets/bob.png';
import { ParticleWave } from '../ui/particle-wave';

export const Hero: React.FC = () => {
  const heroRef = useRef<HTMLElement>(null);

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

    const elements = heroRef.current?.querySelectorAll('.fade-in-up');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="hero" ref={heroRef} aria-label="Sentr AI hero — Intelligent Monitoring">
      {/* Background elements */}
      <div className="hero__bg" aria-hidden="true" style={{ backgroundImage: `url(${oceanBg})`, backgroundSize: 'cover', backgroundPosition: 'center 20%', backgroundRepeat: 'no-repeat' }}>
        <div className="hero__bg-overlay" style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(8, 11, 18, 0.5)' }} />
        <ParticleWave />
        <div className="hero__glow hero__glow--1" />
        <div className="hero__glow hero__glow--2" />
      </div>

      <div className="container hero__container">
        <div className="hero__content-centered">
          <h1 className="hero__headline-new fade-in-up" style={{ transitionDelay: '0.1s' }}>
            Intelligent Monitoring. Built for Modern Industry.
          </h1>
          <p className="hero__sub-new fade-in-up" style={{ transitionDelay: '0.2s' }}>
            Transform factory operations with AI-powered monitoring, real-time insights, 
            IoT integration, and predictive intelligence.
          </p>
        </div>
      </div>
    </section>
  );
};
