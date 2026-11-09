import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './IoTSolutionsPage.css';
import iotBg from '../assets/solution/iot.png';
import aboutImg from '../assets/solution/112.png';

const FULL_IOT_SUBTITLE =
  'Sentr AI connects your production line, inspection and warehouse with software and AI vision, so every product is tracked, checked and accounted for.';

interface IoTServiceCard {
  id: number;
  number: string;
  theme: 'blue' | 'grey';
  title: string;
  tagline: string;
  detail: string;
  benefits: string[];
  icon: React.ReactNode;
}

const iotServices: IoTServiceCard[] = [
  {
    id: 1,
    number: '01',
    theme: 'blue',
    title: 'Track and Trace',
    tagline: 'Follow every product, from your line to your customer.',
    detail:
      'Each product, box and pallet gets a unique code. We record every step: when it was made, which batch it belongs to, where it was packed and where it went. If a problem appears, you can find the exact batch in minutes and avoid recalling everything.',
    benefits: [
      'A full history for every product',
      'Faster, smaller recalls',
      'Clear records ready for audits',
    ],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
  },
  {
    id: 2,
    number: '02',
    theme: 'grey',
    title: 'Machine Vision',
    tagline: 'Smart cameras that never get tired.',
    detail:
      'Cameras watch your production line and check each product as it passes. They read printed batch codes, check labels and spot defects like wrong prints, missing labels or damaged packs. Our AI learns what “good” looks like, so errors are flagged right away, before they leave the factory.',
    benefits: [
      'Fewer defective products reaching customers',
      'Less manual checking',
      'Quality data you can review any time',
    ],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
        <circle cx="12" cy="13" r="4" />
      </svg>
    ),
  },
  {
    id: 3,
    number: '03',
    theme: 'blue',
    title: 'Anti-Counterfeiting',
    tagline: 'Protect your brand from fake products.',
    detail:
      'Fake products hurt your sales and your reputation. We add unique, verifiable codes to your products, so your buyers and partners can check if an item is genuine. Fakes are easier to spot, and you can see where they appear.',
    benefits: [
      'Products customers can verify',
      'Better brand trust',
      'Early warning when fakes show up',
    ],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
  },
  {
    id: 4,
    number: '04',
    theme: 'grey',
    title: 'Barcoding and Coding',
    tagline: 'Mark it. Scan it. Capture it.',
    detail:
      'Everything starts with a clear, readable code. We help set up the marking, scanning and data capture that fits your line, whether it is a simple barcode or a unique code on every unit. The data goes straight into your system, with no manual typing.',
    benefits: [
      'Clean, readable codes',
      'Fewer data entry mistakes',
      'Setup matched to your line speed',
    ],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="3" y1="5" x2="3" y2="19" />
        <line x1="7" y1="5" x2="7" y2="19" />
        <line x1="11" y1="5" x2="11" y2="19" />
        <line x1="15" y1="5" x2="15" y2="19" />
        <line x1="19" y1="5" x2="19" y2="19" />
        <line x1="21" y1="5" x2="21" y2="19" />
      </svg>
    ),
  },
  {
    id: 5,
    number: '05',
    theme: 'blue',
    title: 'Warehouse Management',
    tagline: 'Know what you have, and where it is.',
    detail:
      'We give you a live view of your stock. Items are scanned when they come in, when they are stored and when they leave. You always know quantities, locations and what is ready to ship, which means fewer lost items and fewer wrong dispatches.',
    benefits: [
      'Live stock and location view',
      'Faster, more accurate dispatch',
      'Less time spent searching and counting',
    ],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
        <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
        <line x1="12" y1="22.08" x2="12" y2="12" />
      </svg>
    ),
  },
  {
    id: 6,
    number: '06',
    theme: 'grey',
    title: 'Factory Integration',
    tagline: 'One place for all your data.',
    detail:
      'Tracking, inspection and warehouse data are only useful when they are connected. We link everything to your MES, IMS and ERP, so production, quality and stock all show up in one dashboard. Your team stops switching between tools and starts making decisions from one clear picture.',
    benefits: [
      'A single view of your factory',
      'Less manual reporting',
      'Easy connection with systems you already use',
    ],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
        <path d="M7 8h10" />
        <path d="M7 12h6" />
      </svg>
    ),
  },
];

export const IoTSolutionsPage: React.FC = () => {
  const [displayedSubtitle, setDisplayedSubtitle] = useState('');
  const [isTypingDone, setIsTypingDone] = useState(false);
  const [expandedCards, setExpandedCards] = useState<Record<number, boolean>>({});

  const toggleCard = (id: number) => {
    setExpandedCards((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    let currentIndex = 0;
    let timeoutId: number;

    const typeNextChar = () => {
      if (currentIndex < FULL_IOT_SUBTITLE.length) {
        currentIndex++;
        setDisplayedSubtitle(FULL_IOT_SUBTITLE.slice(0, currentIndex));
        const char = FULL_IOT_SUBTITLE[currentIndex - 1];
        const delay = char === '.' ? 180 : char === ',' ? 90 : 16;
        timeoutId = window.setTimeout(typeNextChar, delay);
      } else {
        setIsTypingDone(true);
      }
    };

    timeoutId = window.setTimeout(typeNextChar, 350);

    return () => {
      window.clearTimeout(timeoutId);
    };
  }, []);

  return (
    <main className="iot-page">
      {/* ── 1. HERO SECTION ── */}
      <section className="iot-hero" aria-label="IoT & Smart Manufacturing Hero">
        <div
          className="iot-hero__bg"
          style={{
            backgroundImage: `url(${iotBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
          aria-hidden="true"
        />
        <div className="iot-hero__overlay" aria-hidden="true" />

        <div className="iot-container">
          <div className="iot-hero__inner">
            <div className="iot-hero__content">
              <h1 className="iot-hero__title">
                Smart tracking for{' '}
                <span className="iot-hero__title-accent">modern manufacturing</span>
              </h1>

              <p className="iot-hero__subtitle" aria-label={FULL_IOT_SUBTITLE}>
                {displayedSubtitle}
                <span
                  className={`iot-typing-cursor ${isTypingDone ? 'iot-typing-cursor--done' : ''}`}
                  aria-hidden="true"
                />
              </p>

              <div className="iot-hero__actions">
                <Link to="/company/contact" className="iot-btn iot-btn--primary">
                  Speak with an Expert
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </Link>
                <Link to="/products/aindri" className="iot-btn iot-btn--secondary">
                  Explore Aindri Platform
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. WHO WE ARE SECTION ── */}
      <section className="iot-about" aria-label="Who We Are">
        <div className="iot-about__dots" aria-hidden="true" />
        <div className="iot-container">
          <div className="iot-about__inner">
            {/* LEFT — Text Content */}
            <div className="iot-about__content">
              <span className="iot-about__label">Who We Are</span>
              <h2 className="iot-about__title">
                Sentr AI helps manufacturers see exactly what is happening on their lines and in their supply chain.
              </h2>
              <p className="iot-about__desc">
                We combine software, AI-powered vision and factory systems (MES and IMS). Where hardware is needed, we work with trusted equipment partners and handle the full integration for you.
              </p>

              <div className="iot-about__tags">
                <span className="iot-about__tag">
                  <span className="iot-about__tag-dot" />
                  AI-Powered Vision
                </span>
                <span className="iot-about__tag">
                  <span className="iot-about__tag-dot" />
                  Factory Systems (MES & IMS)
                </span>
                <span className="iot-about__tag">
                  <span className="iot-about__tag-dot" />
                  Full Hardware Integration
                </span>
                <span className="iot-about__tag">
                  <span className="iot-about__tag-dot" />
                  Supply Chain Tracking
                </span>
              </div>
            </div>

            {/* RIGHT — Image */}
            <div className="iot-about__image-wrap">
              <img
                src={aboutImg}
                alt="Sentr AI Production Line & Supply Chain Tracking"
                className="iot-about__image"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. WHAT WE DO SECTION ── */}
      <section className="iot-services" aria-label="What We Do">
        <div className="iot-services__glow iot-services__glow--1" aria-hidden="true" />
        <div className="iot-services__glow iot-services__glow--2" aria-hidden="true" />

        <div className="iot-container relative z-10">
          <div className="iot-services__header">
            <h2 className="iot-services__title">
              What <span className="iot-services__title-accent">We Do</span>
            </h2>
            <p className="iot-services__sub">
              Software, machine vision, and intelligent tracking built to connect every stage of your manufacturing and distribution.
            </p>
          </div>

          <div className="iot-services__grid">
            {iotServices.map((service) => {
              const isExpanded = Boolean(expandedCards[service.id]);
              return (
                <article
                  key={service.id}
                  className={`iot-card iot-card--${service.theme} ${isExpanded ? 'iot-card--expanded' : ''}`}
                >
                  <div className="iot-card__header">
                    <div className="iot-card__icon-box" aria-hidden="true">
                      {service.icon}
                    </div>
                    <span className="iot-card__num">{service.number}</span>
                  </div>

                  <h3 className="iot-card__title">{service.title}</h3>
                  <p className="iot-card__tagline">{service.tagline}</p>

                  {/* Read More / Show Less Toggle Button */}
                  <button
                    type="button"
                    className="iot-card__toggle"
                    onClick={() => toggleCard(service.id)}
                    aria-expanded={isExpanded}
                    aria-controls={`iot-card-detail-${service.id}`}
                  >
                    <span>{isExpanded ? 'Show less' : 'Read more'}</span>
                    <svg
                      className={`iot-card__toggle-icon ${isExpanded ? 'iot-card__toggle-icon--open' : ''}`}
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </button>

                  {/* Hidden Detail Area */}
                  <div
                    id={`iot-card-detail-${service.id}`}
                    className="iot-card__expandable"
                    aria-hidden={!isExpanded}
                  >
                    <div className="iot-card__expandable-inner">
                      <p className="iot-card__detail">{service.detail}</p>

                      <div className="iot-card__benefits">
                        <span className="iot-card__benefits-heading">What you get:</span>
                        <ul className="iot-card__benefits-list">
                          {service.benefits.map((benefit, idx) => (
                            <li key={idx} className="iot-card__benefit-item">
                              <svg
                                className="iot-card__benefit-check"
                                width="14"
                                height="14"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="3"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                aria-hidden="true"
                              >
                                <polyline points="20 6 9 17 4 12" />
                              </svg>
                              <span>{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 4. CALL TO ACTION & QUICK LINKS ── */}
      <section className="iot-cta-section" aria-label="Ready to track your products">
        <div className="iot-container">
          <div className="iot-cta-card">
            {/* Ambient Lighting */}
            <div className="iot-cta-card__glow iot-cta-card__glow--1" aria-hidden="true" />
            <div className="iot-cta-card__glow iot-cta-card__glow--2" aria-hidden="true" />

            <div className="iot-cta-card__grid">
              {/* Left Column: CTA Content */}
              <div className="iot-cta-card__main">
                <span className="iot-cta-card__badge">GET IN TOUCH</span>
                <h2 className="iot-cta-card__heading">
                  Ready to track your products with{' '}
                  <span className="iot-cta-card__heading-accent">confidence?</span>
                </h2>
                <p className="iot-cta-card__text">
                  Tell us about your production line, and we will suggest a practical plan.
                </p>
                <div className="iot-cta-card__actions">
                  <Link to="/company/contact" className="iot-btn iot-btn--primary">
                    Contact us
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>

              {/* Right Column: Quick Links to Other Solutions */}
              <div className="iot-cta-links">
                <div className="iot-cta-links__header">
                  <span className="iot-cta-links__label">QUICK LINKS</span>
                  <h3 className="iot-cta-links__title">Explore Other Solutions</h3>
                </div>

                <div className="iot-cta-pills">
                  <Link to="/solutions/ai" className="iot-cta-pill" title="Machine learning & computer vision">
                    AI Solutions
                  </Link>
                  <Link to="/products/aindri" className="iot-cta-pill" title="Aindri real-time camera analytics">
                    Intelligent Monitoring
                  </Link>
                  <Link to="/cloud-solutions#services" className="iot-cta-pill" title="Scalable hybrid cloud environments">
                    Cloud Infrastructure
                  </Link>
                  <Link to="/solutions/cybersecurity" className="iot-cta-pill" title="Threat defense & network security">
                    Cybersecurity
                  </Link>
                  <Link to="/solutions/enterprise-it" className="iot-cta-pill" title="Managed IT & digital workplace">
                    Enterprise IT Services
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

