import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import './SolutionsPage.css';

// Asset imports
import spaceHeroBg from '../assets/solution/space.png';
import cctvImg from '../assets/aindri/cctv.png';
import card1Img from '../assets/solution/card1.png';
import iotImg from '../assets/solution/iot.png';
import cloudImg from '../assets/solution/enterprise/3.png';
import secuImg from '../assets/solution/secu.png';
import enterpriseImg from '../assets/solution/enterprise/1.png';
import lenovoImg from '../assets/lenvo.png';

const FULL_HERO_SUBTITLE =
  'From real-time industrial computer vision and bespoke artificial intelligence to resilient cloud infrastructure, cybersecurity, and enterprise IT — Sentr AI delivers full-spectrum technology solutions tailored for operational excellence.';

interface SolutionOffering {
  id: string;
  title: string;
  tagline: string;
  description: string;
  category: 'CORE OFFERINGS' | 'INFRASTRUCTURE' | 'SECURITY & IT';
  href: string;
  image: string;
  alt: string;
  badge: string;
  highlights: string[];
  ctaText: string;
  icon: React.ReactNode;
}

const offeringsData: SolutionOffering[] = [
  // ── CORE OFFERINGS ──
  {
    id: 'intelligent-monitoring',
    title: 'Intelligent Monitoring',
    tagline: 'AI-powered industrial visibility',
    description:
      'Transform existing security and CCTV camera streams into a proactive operational intelligence layer that identifies anomalies, tracks movement, and alerts your team in real time.',
    category: 'CORE OFFERINGS',
    href: '/products/aindri',
    image: cctvImg,
    alt: 'Live computer vision feed identifying industrial activity',
    badge: 'Flagship Platform',
    highlights: [
      'Real-time CCTV stream analysis',
      'Defect and anomaly detection',
      'Instant verified incident alerts',
      'Plant and warehouse safety tracking',
    ],
    ctaText: 'Explore Intelligent Monitoring',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
        <circle cx="12" cy="13" r="4" />
      </svg>
    ),
  },
  {
    id: 'ai-solutions',
    title: 'AI Solutions',
    tagline: 'Machine learning & computer vision',
    description:
      'Deploy custom computer vision models, bespoke machine learning algorithms, and intelligent workflow automations engineered to solve high-friction operational bottlenecks.',
    category: 'CORE OFFERINGS',
    href: '/solutions/ai',
    image: card1Img,
    alt: 'Machine learning algorithms and predictive analytics dashboard',
    badge: 'Bespoke AI',
    highlights: [
      'Custom machine learning models',
      'Automated visual inspections',
      'Predictive process intelligence',
      'End-to-end workflow automation',
    ],
    ctaText: 'Explore AI Solutions',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a8 8 0 0 0-8 8c0 3.31 2.01 6.16 4.9 7.35L8.5 21h7l-.4-3.65C17.99 16.16 20 13.31 20 10a8 8 0 0 0-8-8z" />
        <path d="M9 10h.01M15 10h.01M10 14h4" />
      </svg>
    ),
  },

  // ── INFRASTRUCTURE ──
  {
    id: 'iot-industrial-tech',
    title: 'IoT & Industrial Tech',
    tagline: 'Sensors, OPC & device connectivity',
    description:
      'Connect plant machinery, edge sensors, PLCs, and warehouse equipment into a unified data backbone for end-to-end trace, quality checks, and real-time operational telemetry.',
    category: 'INFRASTRUCTURE',
    href: '/solutions/iot',
    image: iotImg,
    alt: 'Connected industrial IoT sensors and manufacturing line',
    badge: 'Edge & Devices',
    highlights: [
      'PLC, SCADA and OPC UA integration',
      'Batch track & trace serialization',
      'Machine vision quality inspection',
      'Low-latency edge sensor processing',
    ],
    ctaText: 'Explore IoT & Industrial Tech',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
  },
  {
    id: 'cloud-infrastructure',
    title: 'Cloud Infrastructure',
    tagline: 'Scalable cloud environments',
    description:
      'Modernize, migrate, and scale critical enterprise workloads across AWS, Microsoft Azure, and Google Cloud with high-availability architecture and cost governance.',
    category: 'INFRASTRUCTURE',
    href: '/cloud-solutions#services',
    image: cloudImg,
    alt: 'Enterprise cloud datacenter and scalable infrastructure',
    badge: 'Cloud & DevOps',
    highlights: [
      'Multi-cloud strategy and migration',
      'High-availability cloud architecture',
      'Kubernetes and container orchestration',
      'Continuous infrastructure management',
    ],
    ctaText: 'Explore Cloud Infrastructure',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
      </svg>
    ),
  },

  // ── SECURITY & IT ──
  {
    id: 'cybersecurity',
    title: 'Cybersecurity',
    tagline: 'Enterprise threat protection',
    description:
      'Protect employees, cloud workloads, and operational networks with 24/7 threat detection, endpoint security (EDR), Zero Trust access, and vulnerability management.',
    category: 'SECURITY & IT',
    href: '/solutions/cybersecurity',
    image: secuImg,
    alt: 'Cybersecurity operations center and threat defense',
    badge: 'Zero Trust Security',
    highlights: [
      '24/7 SOC threat monitoring',
      'Endpoint Detection & Response (EDR)',
      'Data Loss Prevention (DLP)',
      'Cloud compliance and security posture',
    ],
    ctaText: 'Explore Cybersecurity',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    id: 'enterprise-it',
    title: 'Enterprise IT Services',
    tagline: 'Managed IT & digital workplace',
    description:
      'Equip and manage your modern digital workforce with unified collaboration suites, end-user device mobility, proactive IT administration, and asset lifecycle management.',
    category: 'SECURITY & IT',
    href: '/solutions/enterprise-it',
    image: enterpriseImg,
    alt: 'Modern digital workplace and enterprise IT support',
    badge: 'Managed Services',
    highlights: [
      'Microsoft 365 and Google Workspace',
      'End-user computing and mobility',
      'Unified enterprise communications',
      'IT asset procurement and lifecycle',
    ],
    ctaText: 'Explore Enterprise IT Services',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
  },
];

export const SolutionsPage: React.FC = () => {
  const [displayedSubtitle, setDisplayedSubtitle] = useState('');
  const [isTypingDone, setIsTypingDone] = useState(false);
  const [activeFilter, setActiveFilter] = useState<'ALL' | 'CORE OFFERINGS' | 'INFRASTRUCTURE' | 'SECURITY & IT'>('ALL');
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Subtitle typing effect
  useEffect(() => {
    let currentIndex = 0;
    let timeoutId: number;

    const typeNextChar = () => {
      if (currentIndex < FULL_HERO_SUBTITLE.length) {
        currentIndex++;
        setDisplayedSubtitle(FULL_HERO_SUBTITLE.slice(0, currentIndex));
        const char = FULL_HERO_SUBTITLE[currentIndex - 1];
        const delay = char === '.' ? 160 : char === ',' ? 80 : 14;
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

  // Intersection observer for fade-in animations
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
  }, [activeFilter]);

  const scrollToOfferings = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const target = document.getElementById('offerings');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const filteredOfferings = activeFilter === 'ALL'
    ? offeringsData
    : offeringsData.filter((item) => item.category === activeFilter);

  return (
    <main className="solutions-page" ref={sectionRef}>
      {/* ================================================================
          1. HERO SECTION
          ================================================================ */}
      <section className="solutions-hero" aria-label="Sentr AI Solutions Hero">
        <div
          className="solutions-hero__bg"
          style={{
            backgroundImage: `url(${spaceHeroBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
          aria-hidden="true"
        />
        <div className="solutions-hero__overlay" aria-hidden="true" />
        <div className="solutions-hero__glow solutions-hero__glow--1" aria-hidden="true" />
        <div className="solutions-hero__glow solutions-hero__glow--2" aria-hidden="true" />
        <div className="solutions-hero__dots" aria-hidden="true" />

        <div className="solutions-container">
          <div className="solutions-hero__inner">
            <div className="solutions-hero__content">
              {/* Headline */}
              <h1 className="solutions-hero__title">
                Intelligent Technology Solutions That{' '}
                <span className="solutions-hero__title-accent">Power Modern Industry</span>
              </h1>

              {/* Subtitle with Typing Animation */}
              <p className="solutions-hero__subtitle" aria-label={FULL_HERO_SUBTITLE}>
                {displayedSubtitle}
                <span
                  className={`solutions-typing-cursor ${isTypingDone ? 'solutions-typing-cursor--done' : ''}`}
                  aria-hidden="true"
                />
              </p>

              {/* CTAs */}
              <div className="solutions-hero__actions">
                <a
                  href="#offerings"
                  onClick={scrollToOfferings}
                  className="solutions-btn solutions-btn--primary"
                >
                  Explore Offerings
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="12" y1="5" x2="12" y2="19"></line>
                    <polyline points="19 12 12 19 5 12"></polyline>
                  </svg>
                </a>
                <Link to="/company/contact" className="solutions-btn solutions-btn--outline">
                  Schedule Consultation
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </Link>
              </div>

              {/* Trust Indicators / Badges */}
              <div className="solutions-hero__stats">
                <div className="solutions-hero__stat-item">
                  <span className="solutions-hero__stat-num">6</span>
                  <span className="solutions-hero__stat-label">Core Pillars</span>
                </div>
                <div className="solutions-hero__stat-divider" />
                <div className="solutions-hero__stat-item">
                  <span className="solutions-hero__stat-num">100%</span>
                  <span className="solutions-hero__stat-label">Production Ready</span>
                </div>
                <div className="solutions-hero__stat-divider" />
                <div className="solutions-hero__stat-item">
                  <span className="solutions-hero__stat-num">24/7</span>
                  <span className="solutions-hero__stat-label">SOC & Monitoring</span>
                </div>
                <div className="solutions-hero__stat-divider" />
                <div className="solutions-hero__stat-item">
                  <span className="solutions-hero__stat-num">Zero</span>
                  <span className="solutions-hero__stat-label">Trust Security</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================
          2. CORE OFFERINGS SECTION (3 PILLARS)
          ================================================================ */}
      <section id="offerings" className="solutions-offerings-section" aria-label="Sentr AI Solutions Offerings">
        <div className="solutions-container">
          {/* Section Header */}
          <div className="solutions-section-header fade-in-up">
            <span className="solutions-section-tag">COMPREHENSIVE TECHNOLOGY ECOSYSTEM</span>
            <h2 className="solutions-section-title">
              Our Technology Offerings
            </h2>
            <p className="solutions-section-desc">
              Explore Sentr AI’s integrated portfolio across artificial intelligence, connected industrial infrastructure, cloud systems, and enterprise cybersecurity.
            </p>

            {/* Category Filter Tabs */}
            <div className="solutions-filter-tabs">
              <button
                type="button"
                className={`solutions-filter-btn ${activeFilter === 'ALL' ? 'solutions-filter-btn--active' : ''}`}
                onClick={() => setActiveFilter('ALL')}
              >
                All Solutions (6)
              </button>
              <button
                type="button"
                className={`solutions-filter-btn ${activeFilter === 'CORE OFFERINGS' ? 'solutions-filter-btn--active' : ''}`}
                onClick={() => setActiveFilter('CORE OFFERINGS')}
              >
                Core Offerings (2)
              </button>
              <button
                type="button"
                className={`solutions-filter-btn ${activeFilter === 'INFRASTRUCTURE' ? 'solutions-filter-btn--active' : ''}`}
                onClick={() => setActiveFilter('INFRASTRUCTURE')}
              >
                Infrastructure (2)
              </button>
              <button
                type="button"
                className={`solutions-filter-btn ${activeFilter === 'SECURITY & IT' ? 'solutions-filter-btn--active' : ''}`}
                onClick={() => setActiveFilter('SECURITY & IT')}
              >
                Security & IT (2)
              </button>
            </div>
          </div>

          {/* Offerings Grid */}
          <div className="solutions-grid">
            {filteredOfferings.map((item, index) => (
              <article
                key={item.id}
                className="solution-card fade-in-up"
                style={{ transitionDelay: `${index * 0.08}s` }}
              >
                {/* Visual Thumbnail */}
                <div className="solution-card__image-wrap">
                  <img
                    src={item.image}
                    alt={item.alt}
                    className="solution-card__image"
                    loading="lazy"
                  />
                  <div className="solution-card__image-overlay" />
                  <span className="solution-card__category-badge">
                    {item.category}
                  </span>
                  <span className="solution-card__status-badge">
                    {item.badge}
                  </span>
                </div>

                {/* Card Content */}
                <div className="solution-card__body">
                  <div className="solution-card__header">
                    <div className="solution-card__icon-wrap">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="solution-card__title">
                        <Link to={item.href} className="solution-card__title-link">
                          {item.title}
                        </Link>
                      </h3>
                      <p className="solution-card__tagline">{item.tagline}</p>
                    </div>
                  </div>

                  <p className="solution-card__desc">{item.description}</p>

                  {/* Feature Highlights */}
                  <div className="solution-card__highlights">
                    <h4 className="solution-card__highlights-title">Key Capabilities:</h4>
                    <ul className="solution-card__highlights-list">
                      {item.highlights.map((h, i) => (
                        <li key={i} className="solution-card__highlight-item">
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Card Action Link */}
                  <div className="solution-card__footer">
                    <Link to={item.href} className="solution-card__cta-btn">
                      <span>{item.ctaText}</span>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                      </svg>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* ================================================================
              3. LENOVO HARDWARE SOLUTIONS BANNER
              ================================================================ */}
          <div className="solutions-hardware-banner fade-in-up">
            <div className="solutions-hardware-banner__inner">
              <div className="solutions-hardware-banner__left">
                <div className="solutions-hardware-banner__badge">
                  <span>Hardware Partnership</span>
                </div>
                <h3 className="solutions-hardware-banner__title">
                  Enterprise Hardware Solutions Powered by{' '}
                  <span className="solutions-hardware-banner__brand">
                    <img src={lenovoImg} alt="Lenovo" className="solutions-hardware-banner__logo" />
                  </span>
                </h3>
                <p className="solutions-hardware-banner__desc">
                  Deliver robust computing capacity to your factory floors, edge monitoring stations, and corporate offices with enterprise servers, edge nodes, and client hardware supported by Sentr AI.
                </p>
              </div>
              <div className="solutions-hardware-banner__right">
                <Link to="/company/contact" className="solutions-btn solutions-btn--primary">
                  Inquire About Lenovo Hardware
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================
          4. WHY SENTR AI INTEGRATED ARCHITECTURE
          ================================================================ */}
      <section className="solutions-why-section" aria-label="Why Sentr AI Solutions">
        <div className="solutions-container">
          <div className="solutions-section-header fade-in-up">
            <span className="solutions-section-tag">THE SENTR AI ADVANTAGE</span>
            <h2 className="solutions-section-title">
              Engineered for Seamless Integration
            </h2>
            <p className="solutions-section-desc">
              Rather than managing disconnected vendors, Sentr AI aligns computer vision, cloud, IoT, and cybersecurity into one cohesive operational system.
            </p>
          </div>

          <div className="solutions-why-grid">
            <div className="solutions-why-card fade-in-up">
              <div className="solutions-why-icon-wrap">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 6v6l4 2" />
                </svg>
              </div>
              <h3 className="solutions-why-card-title">Real-Time Operational Loop</h3>
              <p className="solutions-why-card-desc">
                From live camera anomaly detection to instant alert routing and automated process holds, data flows without friction between devices and decision-makers.
              </p>
            </div>

            <div className="solutions-why-card fade-in-up" style={{ transitionDelay: '0.1s' }}>
              <div className="solutions-why-icon-wrap">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" />
                  <path d="M12 12v9" />
                  <path d="m8 17 4 4 4-4" />
                </svg>
              </div>
              <h3 className="solutions-why-card-title">Hybrid & Edge Ready</h3>
              <p className="solutions-why-card-desc">
                Run inference at the edge on factory premises or scale data processing in secure multi-cloud environments across AWS, Azure, and Google Cloud.
              </p>
            </div>

            <div className="solutions-why-card fade-in-up" style={{ transitionDelay: '0.2s' }}>
              <div className="solutions-why-icon-wrap">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  <path d="m9 12 2 2 4-4" />
                </svg>
              </div>
              <h3 className="solutions-why-card-title">Defense-in-Depth Security</h3>
              <p className="solutions-why-card-desc">
                Zero Trust architecture, end-to-end data encryption, and 24/7 security monitoring protect both operational technology (OT) and enterprise IT networks.
              </p>
            </div>

            <div className="solutions-why-card fade-in-up" style={{ transitionDelay: '0.3s' }}>
              <div className="solutions-why-icon-wrap">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                </svg>
              </div>
              <h3 className="solutions-why-card-title">Hardware Overhaul Free</h3>
              <p className="solutions-why-card-desc">
                Leverage your existing IP cameras, PLC controllers, and networking infrastructure. We overlay intelligent visibility without costly retrofits.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================
          5. BOTTOM CTA SECTION
          ================================================================ */}
      <section className="solutions-cta-section" aria-label="Solutions Call to Action">
        <div className="solutions-container">
          <div className="solutions-cta-card fade-in-up">
            <div className="solutions-cta-content">
              <h2 className="solutions-cta-title">
                Ready to Modernize Your Operations?
              </h2>
              <p className="solutions-cta-desc">
                Speak directly with our solution architects to evaluate your current setup, discuss technical requirements, and build a tailored deployment roadmap.
              </p>
              <div className="solutions-cta-actions">
                <Link to="/company/contact" className="solutions-btn solutions-btn--primary">
                  Talk to a Solutions Architect
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </Link>
                <Link to="/products/aindri" className="solutions-btn solutions-btn--ghost">
                  Explore Aindri Platform &rarr;
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

