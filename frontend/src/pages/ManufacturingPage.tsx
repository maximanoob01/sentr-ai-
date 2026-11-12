import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import './ManufacturingPage.css';
import aavImg from '../assets/cloud solutions/aav.png';
import slateImg from '../assets/manfuapp/slate.png';

// Stylized step numbers matching reference image
import step01Gray from '../assets/manfuapp/step-01-gray.png';
import step01Blue from '../assets/manfuapp/step-01-blue.png';
import step02Gray from '../assets/manfuapp/step-02-gray.png';
import step02Blue from '../assets/manfuapp/step-02-blue.png';
import step03Gray from '../assets/manfuapp/step-03-gray.png';
import step03Blue from '../assets/manfuapp/step-03-blue.png';
import step04Gray from '../assets/manfuapp/step-04-gray.png';
import step04Blue from '../assets/manfuapp/step-04-blue.png';

const FULL_HERO_SUBTITLE =
  'Manufapp collects data from your machines and teams in real time, so you can fix problems early and run production with confidence.';

interface ModuleCard {
  id: string;
  number: string;
  title: string;
  desc: string;
  tag: string;
  icon: React.ReactNode;
}

const factoryModules: ModuleCard[] = [
  {
    id: 'inventory',
    number: '01',
    title: 'Inventory',
    desc: 'See stock levels live. Avoid overstock and shortages.',
    tag: 'Real-Time Stock',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      </svg>
    ),
  },
  {
    id: 'production-management',
    number: '02',
    title: 'Production Management',
    desc: 'Track output, machine use and downtime. Cut manual work.',
    tag: 'Shop-Floor Telemetry',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 2 7 12 12 22 7 12 2" />
        <polyline points="2 17 12 22 22 17" />
        <polyline points="2 12 12 17 22 12" />
      </svg>
    ),
  },
  {
    id: 'planning-scheduling',
    number: '03',
    title: 'Planning and Scheduling',
    desc: 'Plan work orders from live data and keep timelines on track.',
    tag: 'Live Work Orders',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
      </svg>
    ),
  },
  {
    id: 'order-management',
    number: '04',
    title: 'Order Management',
    desc: 'Follow each order from creation to delivery.',
    tag: 'End-to-End Tracking',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
        <line x1="3" y1="6" x2="21" y2="6" />
        <path d="M16 10a4 4 0 0 1-8 0" />
      </svg>
    ),
  },
  {
    id: 'quality-inspection',
    number: '05',
    title: 'Quality and Inspection',
    desc: 'Digitize checks for incoming material, in-process work and final products.',
    tag: 'Digitized Checks',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
  },
  {
    id: 'tool-management',
    number: '06',
    title: 'Tool Management',
    desc: 'Track tool use and maintenance, so tools last longer and are replaced on time.',
    tag: 'Tool Lifecycle',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
      </svg>
    ),
  },
  {
    id: 'purchase',
    number: '07',
    title: 'Purchase',
    desc: 'Automate purchase steps and vendor handling.',
    tag: 'Vendor Automation',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="9" cy="21" r="1" />
        <circle cx="20" cy="21" r="1" />
        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
      </svg>
    ),
  },
  {
    id: 'maintenance',
    number: '08',
    title: 'Maintenance',
    desc: 'Study downtime patterns, plan maintenance and reduce breakdowns.',
    tag: 'Breakdown Prevention',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
  },
  {
    id: 'subcontracting',
    number: '09',
    title: 'Subcontracting',
    desc: 'Follow outsourced work step by step.',
    tag: 'Outsourced Tracking',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    id: 'live-dashboards',
    number: '10',
    title: 'Live dashboards',
    desc: 'See key numbers like OEE, downtime and defect rates in one simple view.',
    tag: 'Unified Metrics',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="9" />
        <rect x="14" y="3" width="7" height="5" />
        <rect x="14" y="12" width="7" height="9" />
        <rect x="3" y="16" width="7" height="5" />
      </svg>
    ),
  },
];

const pipelineSteps = [
  {
    num: '01',
    grayImg: step01Gray,
    blueImg: step01Blue,
    isActive: false,
    title: 'Non-Invasive Data Capture',
    desc: 'Deploy industrial edge gateways to interface with PLC controllers, energy meters, optical sensors, and vision cameras.',
  },
  {
    num: '02',
    grayImg: step02Gray,
    blueImg: step02Blue,
    isActive: true, // highlighted in vibrant royal blue per reference image
    title: 'Real-Time Edge Processing',
    desc: 'Cleanse, normalize, and evaluate telemetry at sub-second speeds on the factory floor with continuous offline failover.',
  },
  {
    num: '03',
    grayImg: step03Gray,
    blueImg: step03Blue,
    isActive: false,
    title: 'Automated Actions & Alerts',
    desc: 'Trigger line notifications, pneumatic diverters, and maintenance tickets before minor anomalies turn into shutdown events.',
  },
  {
    num: '04',
    grayImg: step04Gray,
    blueImg: step04Blue,
    isActive: false,
    title: 'Unified Decision Center',
    desc: 'View single-pane factory status on TVs, tablets, or mobiles, and automatically feed reconciled metrics into your ERP.',
  },
];

export const ManufacturingPage: React.FC = () => {
  const [displayedSubtitle, setDisplayedSubtitle] = useState('');
  const [isTypingDone, setIsTypingDone] = useState(false);

  // Stats counting animation
  const statsRef = useRef<HTMLElement>(null);
  const [hasAnimatedStats, setHasAnimatedStats] = useState(false);
  const [statDowntime, setStatDowntime] = useState(0);
  const [statAlertSpeed, setStatAlertSpeed] = useState(0);
  const [statOeeMin, setStatOeeMin] = useState(0);
  const [statOeeMax, setStatOeeMax] = useState(0);
  const [statVisibility, setStatVisibility] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // IntersectionObserver to trigger counting animation on scroll
  useEffect(() => {
    if (!('IntersectionObserver' in window)) {
      setHasAnimatedStats(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setHasAnimatedStats(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  // Smooth counting animation once scrolled into view
  useEffect(() => {
    if (!hasAnimatedStats) return;

    let animId: number;
    const startTime = performance.now();
    const duration = 1600;

    const updateCounters = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Smooth exponential ease-out
      const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);

      setStatDowntime(Math.round(ease * 35));
      setStatAlertSpeed(Math.round(ease * 30));
      setStatOeeMin(Math.round(ease * 15));
      setStatOeeMax(Math.round(ease * 20));
      setStatVisibility(Math.round(ease * 100));

      if (progress < 1) {
        animId = requestAnimationFrame(updateCounters);
      }
    };

    animId = requestAnimationFrame(updateCounters);
    return () => cancelAnimationFrame(animId);
  }, [hasAnimatedStats]);

  // Subtitle typing animation
  useEffect(() => {
    let currentIndex = 0;
    let timeoutId: number;

    const typeNextChar = () => {
      if (currentIndex < FULL_HERO_SUBTITLE.length) {
        currentIndex++;
        setDisplayedSubtitle(FULL_HERO_SUBTITLE.slice(0, currentIndex));
        const char = FULL_HERO_SUBTITLE[currentIndex - 1];
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

  const scrollToModules = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById('modules');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main className="mfg-page">
      {/* ── 1. HERO SECTION ── */}
      <section className="mfg-hero" aria-label="Smart Manufacturing Hero">
        {/* Full Hero Background image using aav.png */}
        <div
          className="mfg-hero__bg"
          style={{
            backgroundImage: `url(${aavImg})`,
          }}
          aria-hidden="true"
        />
        {/* Pure neutral dimming overlay (strictly normal dimness, zero blue screen) */}
        <div className="mfg-hero__overlay" aria-hidden="true" />

        <div className="mfg-container">
          <div className="mfg-hero__inner">
            <div className="mfg-hero__content">
              <h1 className="mfg-hero__title">
                See your whole factory,{' '}
                <span className="mfg-hero__title-accent">
                  live
                  <span className="mfg-hero__live-dot" aria-hidden="true" />
                </span>
              </h1>

              <p className="mfg-hero__subtitle" aria-label={FULL_HERO_SUBTITLE}>
                {displayedSubtitle}
                <span
                  className={`mfg-typing-cursor ${isTypingDone ? 'mfg-typing-cursor--done' : ''}`}
                  aria-hidden="true"
                />
              </p>

              <div className="mfg-hero__actions">
                <Link to="/company/contact" className="mfg-btn-primary">
                  Book a free demo
                  <svg
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
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </Link>

                <a href="#modules" onClick={scrollToModules} className="mfg-btn-secondary">
                  Explore modules
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── ARCHITECTURE SLATE SECTION ── */}
      <section className="mfg-slate-section" aria-label="Manufapp MES System Overview">
        <div className="mfg-container">
          <div className="mfg-slate-wrapper">
            <img
              src={slateImg}
              alt="Manufapp Manufacturing Execution System Architecture"
              className="mfg-slate-img"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* ── 2. WHAT IS AN MES? SECTION ── */}
      <section className="mfg-mes-overview" aria-label="What is an MES">
        <div className="mfg-container">
          <div className="mfg-mes-overview__content">
            <h2 className="mfg-mes-overview__title">
              What is an MES?
            </h2>
            <p className="mfg-mes-overview__lead">
              A Manufacturing Execution System (MES) is the layer between your machines and your business software. It tracks what is being made, how well it is going and what is stopping it, all in real time.
            </p>
            <p className="mfg-mes-overview__desc">
              Manufapp covers production, quality, inventory and machines in one system. It works for a single plant or for many.
            </p>

            {/* 4 Pillars Highlighted from the text */}
            <div className="mfg-mes-pillars">
              <div className="mfg-mes-pillar-item">
                <div className="mfg-mes-pillar-item__icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="12 2 2 7 12 12 22 7 12 2" />
                    <polyline points="2 17 12 22 22 17" />
                    <polyline points="2 12 12 17 22 12" />
                  </svg>
                </div>
                <div>
                  <h4 className="mfg-mes-pillar-item__name">Production</h4>
                  <p className="mfg-mes-pillar-item__sub">Output, cycle times &amp; OEE</p>
                </div>
              </div>

              <div className="mfg-mes-pillar-item">
                <div className="mfg-mes-pillar-item__icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    <path d="m9 12 2 2 4-4" />
                  </svg>
                </div>
                <div>
                  <h4 className="mfg-mes-pillar-item__name">Quality</h4>
                  <p className="mfg-mes-pillar-item__sub">Defects, scrap &amp; inspection</p>
                </div>
              </div>

              <div className="mfg-mes-pillar-item">
                <div className="mfg-mes-pillar-item__icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                  </svg>
                </div>
                <div>
                  <h4 className="mfg-mes-pillar-item__name">Inventory</h4>
                  <p className="mfg-mes-pillar-item__sub">WIP, batch lots &amp; raw materials</p>
                </div>
              </div>

              <div className="mfg-mes-pillar-item">
                <div className="mfg-mes-pillar-item__icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="3" />
                    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
                  </svg>
                </div>
                <div>
                  <h4 className="mfg-mes-pillar-item__name">Machines</h4>
                  <p className="mfg-mes-pillar-item__sub">Telemetry, uptime &amp; health</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. OUR MODULES SECTION ── */}
      <section id="modules" className="mfg-modules-section" aria-label="Our Modules">
        {/* Right side background grid pattern */}
        <div className="mfg-modules-dots" aria-hidden="true" />

        <div className="mfg-container">
          <div className="mfg-section-header">
            <span className="mfg-section-header__badge">COMPREHENSIVE FACTORY SUITE</span>
            <h2 className="mfg-section-header__title">
              Our modules
            </h2>
            <p className="mfg-section-header__desc">
              Manufapp covers production, quality, inventory, and operations in one unified system. Everything you need to eliminate blind spots and run production with confidence.
            </p>
          </div>

          <div className="mfg-modules-grid">
            {factoryModules.map((mod) => (
              <article key={mod.id} className="mfg-module-card">
                <div className="mfg-module-card__top">
                  <div className="mfg-module-card__icon-row">
                    <div className="mfg-module-card__icon" aria-hidden="true">
                      {mod.icon}
                    </div>
                    <span className="mfg-module-card__num">{mod.number}</span>
                  </div>
                  <h3 className="mfg-module-card__title">{mod.title}</h3>
                  <p className="mfg-module-card__desc">{mod.desc}</p>
                </div>

                <div className="mfg-module-card__footer">
                  <span className="mfg-module-card__tag">{mod.tag}</span>
                  <Link to="/company/contact" className="mfg-module-card__btn" aria-label={`Explore ${mod.title}`}>
                    <span>Explore</span>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. METRICS BANNER ── */}
      <section ref={statsRef} className="mfg-stats-strip" aria-label="Key Manufacturing Outcomes">
        <div className="mfg-container">
          <div className="mfg-stats-grid">
            <div className="mfg-stat-box">
              <span className="mfg-stat-box__val">
                {hasAnimatedStats ? `${statDowntime}%` : '0%'}
              </span>
              <span className="mfg-stat-box__lbl">Reduction in Unplanned Downtime</span>
            </div>
            <div className="mfg-stat-box">
              <span className="mfg-stat-box__val">
                {hasAnimatedStats ? `<${statAlertSpeed}s` : '<0s'}
              </span>
              <span className="mfg-stat-box__lbl">Micro-Stoppage Alert Speed</span>
            </div>
            <div className="mfg-stat-box">
              <span className="mfg-stat-box__val">
                {hasAnimatedStats ? `${statOeeMin}-${statOeeMax}%` : '0-0%'}
              </span>
              <span className="mfg-stat-box__lbl">Overall Equipment Effectiveness (OEE) Gain</span>
            </div>
            <div className="mfg-stat-box">
              <span className="mfg-stat-box__val">
                {hasAnimatedStats ? `${statVisibility}%` : '0%'}
              </span>
              <span className="mfg-stat-box__lbl">Real-Time Line Visibility</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. HOW IT WORKS (MACHINE TO DASHBOARD) ── */}
      <section className="mfg-pipeline-section" aria-label="How Manufapp Connects Your Factory">
        <div className="mfg-container">
          <div className="mfg-section-header mfg-section-header--center">
            <span className="mfg-section-header__badge">SEAMLESS INTEGRATION</span>
            <h2 className="mfg-section-header__title">
              From Shop-Floor Machines to Executive Dashboards
            </h2>
            <p className="mfg-section-header__desc">
              Connect legacy machines, modern CNCs, PLCs, and optical sensors into one synchronized data pipeline with zero production halt.
            </p>
          </div>

          <div className="mfg-pipeline-grid">
            {pipelineSteps.map((step) => (
              <div
                key={step.num}
                className={`mfg-pipeline-step ${step.isActive ? 'mfg-pipeline-step--active' : ''}`}
              >
                <div className="mfg-pipeline-step__num-wrap">
                  <img
                    src={step.grayImg}
                    alt={step.num}
                    className="mfg-pipeline-step__num-img mfg-pipeline-step__num-img--gray"
                    loading="lazy"
                  />
                  <img
                    src={step.blueImg}
                    alt={step.num}
                    className="mfg-pipeline-step__num-img mfg-pipeline-step__num-img--blue"
                    loading="lazy"
                  />
                </div>
                <h3 className="mfg-pipeline-step__title">{step.title}</h3>
                <p className="mfg-pipeline-step__desc">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. CALL TO ACTION ── */}
      <section className="mfg-cta-section" aria-label="Book a Free Demo">
        <div className="mfg-container">
          <div className="mfg-cta-card">
            <div className="mfg-cta-card__overlay" aria-hidden="true" />
            <div className="mfg-cta-card__content">
              <span className="mfg-cta-card__eyebrow">TAKE THE NEXT STEP</span>
              <h2 className="mfg-cta-card__title">
                Ready to See Your Whole Factory, Live?
              </h2>
              <p className="mfg-cta-card__desc">
                Schedule a live interactive walkthrough with our industrial automation specialists. We’ll show you how Manufapp connects to your existing machines and teams to stop downtime and drive operational excellence.
              </p>
              <div className="mfg-cta-card__actions">
                <Link to="/company/contact" className="mfg-btn-primary">
                  Book a free demo
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </Link>
                <Link to="/products/aindri" className="mfg-btn-secondary">
                  Explore Aindri Platform
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
