import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './ManufacturingPage.css';
import aavImg from '../assets/cloud solutions/aav.png';

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

      {/* ── 2. WHAT IS AN MES? SECTION ── */}
      <section className="mfg-mes-overview" aria-label="What is an MES">
        <div className="mfg-container">
          <div className="mfg-mes-overview__grid">
            {/* LEFT SIDE: Text Content */}
            <div className="mfg-mes-overview__left">
              <div className="mfg-mes-overview__eyebrow-wrap">
                <span className="mfg-mes-overview__eyebrow">THE REAL-TIME EXECUTION LAYER</span>
              </div>
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
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#38bdf8" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
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
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#38bdf8" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
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
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#38bdf8" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
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
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#38bdf8" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
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

              {/* Plant Scalability Badge */}
              <div className="mfg-mes-scale-badge">
                <span className="mfg-mes-scale-badge__pulse" />
                <span>Scalable across a <strong>single plant</strong> or <strong>multi-site global enterprise</strong></span>
              </div>
            </div>

            {/* RIGHT SIDE: The 3-Tier Layer Architecture Visual */}
            <div className="mfg-mes-overview__right">
              <div className="mfg-mes-diagram">
                {/* Top Tier: Business Software */}
                <div className="mfg-diagram-tier mfg-diagram-tier--business">
                  <div className="mfg-diagram-tier__header">
                    <span className="mfg-diagram-tier__tag">TOP LAYER</span>
                    <h4 className="mfg-diagram-tier__title">Business Software &amp; ERP</h4>
                  </div>
                  <div className="mfg-diagram-tier__chips">
                    <span className="mfg-diagram-chip">SAP</span>
                    <span className="mfg-diagram-chip">Microsoft Dynamics</span>
                    <span className="mfg-diagram-chip">Oracle</span>
                    <span className="mfg-diagram-chip">Custom ERP</span>
                  </div>
                </div>

                {/* Connector Flow 1 */}
                <div className="mfg-diagram-flow">
                  <div className="mfg-diagram-flow__line" />
                  <div className="mfg-diagram-flow__label">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="7 10 12 15 17 10"/><polyline points="17 14 12 9 7 14"/></svg>
                    <span>Bidirectional Production &amp; Order Sync</span>
                  </div>
                </div>

                {/* Middle Tier: MANUFAPP MES (Highlighted) */}
                <div className="mfg-diagram-tier mfg-diagram-tier--mes">
                  <div className="mfg-diagram-tier__badge-row">
                    <span className="mfg-diagram-mes-badge">
                      <span className="mfg-hero__badge-pulse" aria-hidden="true" />
                      THE REAL-TIME LAYER
                    </span>
                    <span className="mfg-diagram-speed-pill">&lt;12ms latency</span>
                  </div>
                  <h4 className="mfg-diagram-mes-title">Manufapp MES System</h4>
                  <p className="mfg-diagram-mes-subtitle">Tracks what is being made, how well it is going &amp; what is stopping it</p>

                  <div className="mfg-diagram-mes-grid">
                    <div className="mfg-diagram-mes-cell">
                      <span className="mfg-diagram-mes-cell__label">Production</span>
                      <span className="mfg-diagram-mes-cell__status">Live Count</span>
                    </div>
                    <div className="mfg-diagram-mes-cell">
                      <span className="mfg-diagram-mes-cell__label">Quality</span>
                      <span className="mfg-diagram-mes-cell__status">Zero Defect</span>
                    </div>
                    <div className="mfg-diagram-mes-cell">
                      <span className="mfg-diagram-mes-cell__label">Inventory</span>
                      <span className="mfg-diagram-mes-cell__status">WIP Sync</span>
                    </div>
                    <div className="mfg-diagram-mes-cell">
                      <span className="mfg-diagram-mes-cell__label">Machines</span>
                      <span className="mfg-diagram-mes-cell__status">99.8% Uptime</span>
                    </div>
                  </div>
                </div>

                {/* Connector Flow 2 */}
                <div className="mfg-diagram-flow">
                  <div className="mfg-diagram-flow__line" />
                  <div className="mfg-diagram-flow__label">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="7 10 12 15 17 10"/><polyline points="17 14 12 9 7 14"/></svg>
                    <span>Continuous Shop-Floor Sensor Telemetry</span>
                  </div>
                </div>

                {/* Bottom Tier: Shop Floor & Machines */}
                <div className="mfg-diagram-tier mfg-diagram-tier--floor">
                  <div className="mfg-diagram-tier__header">
                    <span className="mfg-diagram-tier__tag">FOUNDATION LAYER</span>
                    <h4 className="mfg-diagram-tier__title">Shop-Floor Machines &amp; Teams</h4>
                  </div>
                  <div className="mfg-diagram-tier__chips">
                    <span className="mfg-diagram-chip">PLCs &amp; CNCs</span>
                    <span className="mfg-diagram-chip">IoT Sensors</span>
                    <span className="mfg-diagram-chip">Vision Cameras</span>
                    <span className="mfg-diagram-chip">Operator Tablets</span>
                  </div>
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
