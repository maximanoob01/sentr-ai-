import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './ManufacturingPage.css';
import aavImg from '../assets/cloud solutions/aav.png';

const FULL_HERO_SUBTITLE =
  'Manufapp collects data from your machines and teams in real time, so you can fix problems early and run production with confidence.';

interface ModuleCard {
  id: string;
  title: string;
  tagline: string;
  desc: string;
  features: string[];
  stat: string;
  statLabel: string;
  icon: React.ReactNode;
}

const factoryModules: ModuleCard[] = [
  {
    id: 'machine-monitoring',
    title: 'Machine & Line Monitoring',
    tagline: 'Track real-time machine status, cycle times, and OEE.',
    desc: 'Connect directly to PLCs, sensors, and controllers to monitor operating states, cycle times, and output rates without manual operator logging.',
    features: [
      'Live machine status (Running, Idle, Fault)',
      'Automated OEE & availability calculations',
      'Cycle time tracking and micro-stoppage logs',
      'OPC-UA, Modbus, MQTT and legacy protocol support',
    ],
    stat: '99.8%',
    statLabel: 'Data Capture Rate',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="8" rx="2" />
        <rect x="2" y="14" width="20" height="8" rx="2" />
        <line x1="6" y1="6" x2="6.01" y2="6" />
        <line x1="6" y1="18" x2="6.01" y2="18" />
      </svg>
    ),
  },
  {
    id: 'problem-detection',
    title: 'Early Problem Detection',
    tagline: 'Spot line bottlenecks before they cause downtime.',
    desc: 'Intelligent threshold alerts notify supervisors and maintenance engineers instantly when parameters drift, preventing costly batch rejections.',
    features: [
      'Instant SMS/Email/WhatsApp alerts for machine alarms',
      'Automated root-cause categorization',
      'Downtime reason logging and Pareto tracking',
      'Historical incident replay and audit trails',
    ],
    stat: '<30s',
    statLabel: 'Alert Dispatch Time',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
        <line x1="12" y1="9" x2="12" y2="13" />
        <line x1="12" y1="17" x2="12.01" y2="17" />
      </svg>
    ),
  },
  {
    id: 'quality-inspection',
    title: 'Automated Quality Inspection',
    tagline: 'Computer vision and sensory checks at full line speed.',
    desc: 'Verify labels, packaging integrity, fill levels, and surface defects automatically on the conveyor belt to safeguard product standards.',
    features: [
      'AI vision camera integration for defect rejection',
      'Automated 1D/2D barcode and lot code verification',
      'Tolerance and dimensional inspection',
      'Immediate pneumatic reject mechanism triggers',
    ],
    stat: '99.5%',
    statLabel: 'Inspection Accuracy',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
  },
  {
    id: 'operator-workflows',
    title: 'Operator & Shift Workflows',
    tagline: 'Keep teams aligned across every shift handoff.',
    desc: 'Empower shop-floor operators with intuitive tablet interfaces to log setup changes, scrap counts, and handover notes in seconds.',
    features: [
      'Digital shift handover sheets and logs',
      'Operator scrap, rework, and waste attribution',
      'Standard Operating Procedure (SOP) digital displays',
      'Role-based permissions for line workers and plant managers',
    ],
    stat: '4.5x',
    statLabel: 'Faster Shift Handover',
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
    id: 'predictive-maintenance',
    title: 'Predictive Machine Health',
    tagline: 'Anticipate motor, bearing, and thermal failures.',
    desc: 'Manufapp continuously tracks temperature, vibration, and energy draw anomalies to guide predictive servicing before equipment breakdown.',
    features: [
      'Vibration and bearing wear trend analysis',
      'Current draw and electrical signature telemetry',
      'Mean Time Between Failures (MTBF) tracking',
      'Automated maintenance work-order generation',
    ],
    stat: '-42%',
    statLabel: 'Unplanned Downtime',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
      </svg>
    ),
  },
  {
    id: 'erp-mes-sync',
    title: 'ERP & MES Live Integration',
    tagline: 'One single source of truth from line to ledger.',
    desc: 'Eliminate manual paperwork. Manufapp feeds live production output, batch quantities, and material consumptions directly into your enterprise ERP.',
    features: [
      'Bidirectional SAP, Microsoft Dynamics & Oracle connectors',
      'Real-time inventory and BOM consumption sync',
      'Automated job order progress and reconciliation',
      'Secure on-premises edge gateway or cloud deployment',
    ],
    stat: '100%',
    statLabel: 'Paperless Reporting',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 2 7 12 12 22 7 12 2" />
        <polyline points="2 17 12 22 22 17" />
        <polyline points="2 12 12 17 22 12" />
      </svg>
    ),
  },
];

export const ManufacturingPage: React.FC = () => {
  const [displayedSubtitle, setDisplayedSubtitle] = useState('');
  const [isTypingDone, setIsTypingDone] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
        {/* Dim background ambient scrim using aavImg */}
        <div
          className="mfg-hero__bg"
          style={{
            backgroundImage: `url(${aavImg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
          aria-hidden="true"
        />
        <div className="mfg-hero__overlay" aria-hidden="true" />
        <div className="mfg-hero__glow mfg-hero__glow--1" aria-hidden="true" />
        <div className="mfg-hero__glow mfg-hero__glow--2" aria-hidden="true" />
        <div className="mfg-hero__dots" aria-hidden="true" />

        <div className="mfg-container">
          <div className="mfg-hero__inner">
            {/* LEFT: Headline, Subtext & Actions */}
            <div className="mfg-hero__content">
              <div className="mfg-hero__badge">
                <span className="mfg-hero__badge-pulse" aria-hidden="true" />
                <span className="mfg-hero__badge-text">MANUFAPP • SMART MANUFACTURING</span>
              </div>

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

              {/* Quick Trust Highlights */}
              <div className="mfg-hero__highlights">
                <div className="mfg-hero__highlight-item">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#38bdf8" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>Real-Time Machine Telemetry</span>
                </div>
                <div className="mfg-hero__highlight-item">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#38bdf8" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>Instant Problem Alerts</span>
                </div>
                <div className="mfg-hero__highlight-item">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#38bdf8" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>Zero Disruption Setup</span>
                </div>
              </div>
            </div>

            {/* RIGHT: High-Tech Visual Container featuring aav.png */}
            <div className="mfg-hero__visual">
              <div className="mfg-hero__card-frame">
                <img
                  src={aavImg}
                  alt="Manufapp Real-Time Factory Telemetry Server Rack and Edge Intelligence"
                  className="mfg-hero__img"
                />
                <div className="mfg-hero__card-scrim" aria-hidden="true" />

                {/* Floating Telemetry Badges */}
                <div className="mfg-hero__floating-badge mfg-hero__floating-badge--top">
                  <span className="mfg-hero__badge-pulse" aria-hidden="true" />
                  <span>LIVE FACTORY STREAM</span>
                </div>

                <div className="mfg-hero__floating-badge mfg-hero__floating-badge--bottom-left">
                  <div className="mfg-floating-stat">
                    <span className="mfg-floating-stat__val">99.8%</span>
                    <span className="mfg-floating-stat__lbl">Live Line Uptime</span>
                  </div>
                  <div className="mfg-floating-divider" />
                  <div className="mfg-floating-stat">
                    <span className="mfg-floating-stat__val">&lt;12ms</span>
                    <span className="mfg-floating-stat__lbl">Edge Sync Latency</span>
                  </div>
                </div>

                <div className="mfg-hero__floating-badge mfg-hero__floating-badge--bottom-right">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 14 14" />
                  </svg>
                  <span>Machines Connected: Active</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. METRICS BANNER ── */}
      <section className="mfg-stats-strip" aria-label="Key Manufacturing Outcomes">
        <div className="mfg-container">
          <div className="mfg-stats-grid">
            <div className="mfg-stat-box">
              <span className="mfg-stat-box__val">35%</span>
              <span className="mfg-stat-box__lbl">Reduction in Unplanned Downtime</span>
            </div>
            <div className="mfg-stat-box">
              <span className="mfg-stat-box__val">&lt;30s</span>
              <span className="mfg-stat-box__lbl">Micro-Stoppage Alert Speed</span>
            </div>
            <div className="mfg-stat-box">
              <span className="mfg-stat-box__val">15-20%</span>
              <span className="mfg-stat-box__lbl">Overall Equipment Effectiveness (OEE) Gain</span>
            </div>
            <div className="mfg-stat-box">
              <span className="mfg-stat-box__val">100%</span>
              <span className="mfg-stat-box__lbl">Real-Time Line Visibility</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. EXPLORE MODULES SECTION ── */}
      <section id="modules" className="mfg-modules-section" aria-label="Manufapp Modules">
        {/* Right side background grid pattern */}
        <div className="mfg-modules-dots" aria-hidden="true" />

        <div className="mfg-container">
          <div className="mfg-section-header">
            <span className="mfg-section-header__badge">MANUFAPP PLATFORM MODULES</span>
            <h2 className="mfg-section-header__title">
              Built to Solve Real Production Challenges
            </h2>
            <p className="mfg-section-header__desc">
              Every factory operates differently. Manufapp integrates modular intelligence tools that plug directly into your current machinery, control loops, and team operations.
            </p>
          </div>

          <div className="mfg-modules-grid">
            {factoryModules.map((mod) => (
              <article key={mod.id} className="mfg-module-card">
                <div className="mfg-module-card__top">
                  <div className="mfg-module-card__icon" aria-hidden="true">
                    {mod.icon}
                  </div>
                  <h3 className="mfg-module-card__title">{mod.title}</h3>
                  <p className="mfg-module-card__tagline">{mod.tagline}</p>
                  <p className="mfg-module-card__desc">{mod.desc}</p>

                  <div className="mfg-module-card__features-box">
                    <span className="mfg-module-card__features-title">Capabilities:</span>
                    <ul className="mfg-module-card__features-list">
                      {mod.features.map((feat, idx) => (
                        <li key={idx}>{feat}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mfg-module-card__footer">
                  <div className="mfg-module-card__stat">
                    <span className="mfg-module-card__stat-val">{mod.stat}</span>
                    <span className="mfg-module-card__stat-lbl">{mod.statLabel}</span>
                  </div>
                  <Link to="/company/contact" className="mfg-module-card__btn">
                    Request Demo
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
            <div className="mfg-pipeline-step">
              <div className="mfg-pipeline-step__num">01</div>
              <h3 className="mfg-pipeline-step__title">Non-Invasive Data Capture</h3>
              <p className="mfg-pipeline-step__desc">
                Deploy industrial edge gateways to interface with PLC controllers, energy meters, optical sensors, and vision cameras.
              </p>
            </div>
            <div className="mfg-pipeline-step">
              <div className="mfg-pipeline-step__num">02</div>
              <h3 className="mfg-pipeline-step__title">Real-Time Edge Processing</h3>
              <p className="mfg-pipeline-step__desc">
                Cleanse, normalize, and evaluate telemetry at sub-second speeds on the factory floor with continuous offline failover.
              </p>
            </div>
            <div className="mfg-pipeline-step">
              <div className="mfg-pipeline-step__num">03</div>
              <h3 className="mfg-pipeline-step__title">Automated Actions &amp; Alerts</h3>
              <p className="mfg-pipeline-step__desc">
                Trigger line notifications, pneumatic diverters, and maintenance tickets before minor anomalies turn into shutdown events.
              </p>
            </div>
            <div className="mfg-pipeline-step">
              <div className="mfg-pipeline-step__num">04</div>
              <h3 className="mfg-pipeline-step__title">Unified Decision Center</h3>
              <p className="mfg-pipeline-step__desc">
                View single-pane factory status on TVs, tablets, or mobiles, and automatically feed reconciled metrics into your ERP.
              </p>
            </div>
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
