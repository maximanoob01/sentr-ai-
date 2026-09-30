import React, { useEffect, useRef, useState } from 'react';
import './Hero.css';
import oceanBg from '../../assets/bob.png';
import { ParticleWave } from '../ui/particle-wave';

const SLIDES = [
  {
    label: '01 — Industrial AI',
    headline: 'Intelligent Monitoring. Built for Modern Industry.',
    sub: 'Transform factory operations with AI-powered monitoring, real-time insights, IoT integration, and predictive intelligence.',
  },
  {
    label: '02 — Cybersecurity',
    headline: 'Secure Your Business. Strengthen Your Digital Future.',
    sub: 'Protect identities, infrastructure, cloud environments, and digital workplaces with proactive cybersecurity solutions.',
  },
  {
    label: '03 — Cloud & Microsoft Azure',
    headline: 'Modern Cloud Infrastructure. Built Around Your Business.',
    sub: 'Modernize infrastructure, migrate workloads, strengthen cloud security, and build scalable solutions with Microsoft and Azure technologies.',
  },
  {
    label: '04 — Enterprise IT & Infrastructure',
    headline: 'Technology That Keeps Your Business Moving.',
    sub: 'Build a stronger IT foundation with enterprise infrastructure, digital workplace solutions, hardware, asset management, and technology support.',
  },
  {
    label: '05 — Managed Services',
    headline: 'One Technology Partner. Multiple Business Solutions.',
    sub: 'Simplify technology management with enterprise IT, cybersecurity, cloud infrastructure, managed services, and ongoing operational support.',
  },
];

export const Hero: React.FC = () => {
  const heroRef = useRef<HTMLElement>(null);
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);

  // Fade-in-up observer
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

  // Auto-rotate every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setAnimating(true);
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % SLIDES.length);
        setAnimating(false);
      }, 400); // half of CSS transition
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const slide = SLIDES[current];

  return (
    <section className="hero" ref={heroRef} aria-label="Sentr AI hero">
      {/* Background elements */}
      <div
        className="hero__bg"
        aria-hidden="true"
        style={{
          backgroundImage: `url(${oceanBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center 20%',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div
          className="hero__bg-overlay"
          style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(8, 11, 18, 0.5)' }}
        />
        <ParticleWave />
        <div className="hero__glow hero__glow--1" />
        <div className="hero__glow hero__glow--2" />
      </div>

      <div className="container hero__container">
        <div className="hero__content-centered">
          {/* Slide indicator dots */}
          <div className="hero__dots fade-in-up" style={{ transitionDelay: '0.05s' }}>
            {SLIDES.map((_, i) => (
              <button
                key={i}
                className={`hero__dot${i === current ? ' hero__dot--active' : ''}`}
                onClick={() => {
                  setAnimating(true);
                  setTimeout(() => {
                    setCurrent(i);
                    setAnimating(false);
                  }, 400);
                }}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>

          <div className={`hero__slide-wrap${animating ? ' hero__slide-wrap--out' : ' hero__slide-wrap--in'}`}>
            <span className="hero__label">{slide.label}</span>
            <h1 className="hero__headline-new">
              {slide.headline}
            </h1>
            <p className="hero__sub-new">
              {slide.sub}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
