import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './AISolutionsPage.css';
import hero1 from '../assets/solution/hero1.png';
import teamPhoto from '../assets/about us/hero.png';
import collabPhoto from '../assets/work.png';

export const AISolutionsPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="ai-page">
      {/* ── 1. HERO SECTION ── */}
      <section className="ai-hero" aria-label="AI Solutions Hero">
        <div className="ai-hero__glow ai-hero__glow--1" aria-hidden="true" />
        <div className="ai-hero__glow ai-hero__glow--2" aria-hidden="true" />
        <div className="ai-hero__grid-overlay" aria-hidden="true" />

        <div className="ai-container">
          <div className="ai-hero__inner">
            {/* Left Content */}
            <div className="ai-hero__content">
              <h1 className="ai-hero__title">
                AI Solutions That{' '}
                <span className="ai-hero__title-accent">Turn Data Into Action</span>
              </h1>

              <p className="ai-hero__subtitle">
                Build smarter operations with artificial intelligence, machine learning, and computer vision. Sentrai helps businesses connect their data, automate complex workflows, and gain real-time insights to make better decisions.
              </p>

              <div className="ai-hero__cta-row">
                <Link to="/products/aindri#demo" className="ai-btn-primary">
                  Request an Aindri Demo
                </Link>
                <Link to="/company/contact" className="ai-btn-outline">
                  Contact Sentr AI
                </Link>
              </div>
            </div>

            {/* Right Visual Image */}
            <div className="ai-hero__visual">
              <img
                src={hero1}
                alt="AI Solutions That Turn Data Into Action"
                className="ai-hero__visual-img"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. BENTO GRID SECTION (INSPIRED BY REFERENCE DESIGN) ── */}
      <section className="ai-bento-section" aria-label="AI Solutions Bento Grid">
        <div className="ai-container">
          <div className="ai-bento-header">
            <div className="ai-eyebrow">
              Enterprise AI Architecture
            </div>
            <h2 className="ai-bento-header__title">
              Intelligent Capabilities Built for Scale
            </h2>
            <p className="ai-bento-header__desc">
              Discover how our modular AI systems, computer vision models, and autonomous workflow engines power next-generation enterprise operations.
            </p>
          </div>

          <div className="ai-bento-grid">
            {/* Card 1: Top-Left Team/Vision Photo Card (Cols 1-2, Rows 1-2) */}
            <div className="bento-card bento-card--photo-top">
              <img
                src={teamPhoto}
                alt="Industrial AI and Computer Vision Team"
                className="bento-card__bg-img"
              />
              <div className="bento-card__overlay">
                <span className="bento-card__tag">Operations &amp; Vision</span>
                <h3 className="bento-card__headline">
                  Dedicated AI Engineers &amp; Continuous Computer Vision
                </h3>
              </div>
            </div>

            {/* Card 2: 4 Square Icon Tiles (Col 1, Row 3) */}
            <div className="bento-card bento-card--tiles">
              {/* Tile 1 - Blue Active */}
              <div className="bento-tile bento-tile--blue" title="Computer Vision & Video Analytics">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
              </div>
              {/* Tile 2 - Light */}
              <div className="bento-tile bento-tile--light" title="Generative AI & Assistants">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3Z" />
                </svg>
              </div>
              {/* Tile 3 - Light */}
              <div className="bento-tile bento-tile--light" title="Predictive Machine Learning">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                </svg>
              </div>
              {/* Tile 4 - Light */}
              <div className="bento-tile bento-tile--light" title="Autonomous Workflow Agents">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <path d="m10 15 5-3-5-3v6Z" />
                </svg>
              </div>
            </div>

            {/* Card 3: Small White Stat Card (Col 1, Row 4) */}
            <div className="bento-card bento-card--small-white">
              <div className="bento-card__num">24/7</div>
              <div className="bento-card__title">Real-Time Visibility</div>
              <div className="bento-card__sub">
                Autonomous monitoring and alert streams across your facilities.
              </div>
            </div>

            {/* Card 4: Tall Lime Green Accent Card (Col 2, Rows 3-4) */}
            <div className="bento-card bento-card--lime">
              <div>
                <div className="bento-card__num">01</div>
                <h3 className="bento-card__title">
                  AI Agents &amp; Workflow Automation
                </h3>
              </div>
              <p className="bento-card__sub">
                Connect AI with business processes so teams can automate routine work and coordinate tasks across multiple systems.
              </p>
            </div>

            {/* Card 5: Tall Dark High-Contrast Card (Col 3, Rows 1-2) */}
            <div className="bento-card bento-card--dark">
              <div>
                <div className="bento-card__num">100%</div>
                <h3 className="bento-card__title">
                  Predictive Analytics &amp; Machine Learning
                </h3>
              </div>
              <p className="bento-card__sub">
                Use business data to identify patterns, estimate future outcomes, and support decisions before problems become costly.
              </p>
            </div>

            {/* Card 6: Top-Right Light Card 1 (Col 4, Row 1) */}
            <div className="bento-card bento-card--light-1">
              <div className="bento-card__num">1</div>
              <h3 className="bento-card__title">
                Industrial AI &amp; Computer Vision
              </h3>
              <p className="bento-card__sub">
                Give your operations greater visibility with AI systems that interpret visual information and identify important events as they happen.
              </p>
            </div>

            {/* Card 7: Top-Right Light Card 2 (Col 4, Row 2) */}
            <div className="bento-card bento-card--light-2">
              <div className="bento-card__num">100%</div>
              <h3 className="bento-card__title">
                Generative AI &amp; Intelligent Assistants
              </h3>
              <p className="bento-card__sub">
                Make business knowledge easier to access with AI assistants designed around your organization's information and workflows.
              </p>
            </div>

            {/* Card 8: Bottom-Right Collaboration Photo Card (Cols 3-4, Rows 3-4) */}
            <div className="bento-card bento-card--photo-bottom">
              <img
                src={collabPhoto}
                alt="Custom AI Development and Integration"
                className="bento-card__bg-img"
              />
              <div className="bento-card__overlay">
                <span className="bento-card__tag">Bespoke Engineering</span>
                <h3 className="bento-card__headline">
                  Custom AI Development &amp; Integration
                </h3>
                <p style={{ color: '#cbd5e1', fontSize: '0.88rem', marginTop: '0.4rem', lineHeight: '1.5' }}>
                  Build AI solutions that fit your business instead of forcing your business to fit a generic tool.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. DELIVERABLES BREAKDOWN ("WHAT WE DELIVER") ── */}
      <section className="ai-deliver-section" aria-label="Detailed Deliverables">
        <div className="ai-container">
          <div className="ai-bento-header">
            <div className="ai-eyebrow">
              Execution &amp; Delivery
            </div>
            <h2 className="ai-bento-header__title">
              What We Deliver
            </h2>
            <p className="ai-bento-header__desc">
              From autonomous agents to full-stack custom AI engineering, here is exactly what Sentr AI designs, builds, and deploys for your enterprise.
            </p>
          </div>

          <div className="ai-deliver-grid">
            {/* Deliverables Card 1 */}
            <div className="ai-deliver-card">
              <span className="ai-deliver-card__badge">Process &amp; Routing</span>
              <h3 className="ai-deliver-card__title">
                AI Agents &amp; Workflow Automation
              </h3>
              <p className="ai-deliver-card__desc">
                Connect AI with business processes so teams can automate routine work and coordinate tasks across multiple systems.
              </p>

              <div className="ai-deliver-card__subtitle">What we deliver</div>
              <ul className="ai-deliver-list">
                <li className="ai-deliver-item">
                  <span className="ai-deliver-item__check">✓</span>
                  <span>AI agents for specific business tasks</span>
                </li>
                <li className="ai-deliver-item">
                  <span className="ai-deliver-item__check">✓</span>
                  <span>Automated information gathering and processing</span>
                </li>
                <li className="ai-deliver-item">
                  <span className="ai-deliver-item__check">✓</span>
                  <span>Workflow routing and task prioritization</span>
                </li>
                <li className="ai-deliver-item">
                  <span className="ai-deliver-item__check">✓</span>
                  <span>CRM and ERP workflow integrations</span>
                </li>
                <li className="ai-deliver-item">
                  <span className="ai-deliver-item__check">✓</span>
                  <span>Human approval steps for sensitive actions</span>
                </li>
                <li className="ai-deliver-item">
                  <span className="ai-deliver-item__check">✓</span>
                  <span>Multi-step business process automation</span>
                </li>
              </ul>
            </div>

            {/* Deliverables Card 2 */}
            <div className="ai-deliver-card">
              <span className="ai-deliver-card__badge">Bespoke Engineering</span>
              <h3 className="ai-deliver-card__title">
                Custom AI Development &amp; Integration
              </h3>
              <p className="ai-deliver-card__desc">
                Build AI solutions that fit your business instead of forcing your business to fit a generic tool.
              </p>

              <div className="ai-deliver-card__subtitle">What we deliver</div>
              <ul className="ai-deliver-list">
                <li className="ai-deliver-item">
                  <span className="ai-deliver-item__check">✓</span>
                  <span>Custom AI-powered web and business applications</span>
                </li>
                <li className="ai-deliver-item">
                  <span className="ai-deliver-item__check">✓</span>
                  <span>Machine learning model development</span>
                </li>
                <li className="ai-deliver-item">
                  <span className="ai-deliver-item__check">✓</span>
                  <span>AI APIs and application integration</span>
                </li>
                <li className="ai-deliver-item">
                  <span className="ai-deliver-item__check">✓</span>
                  <span>Data preparation and processing pipelines</span>
                </li>
                <li className="ai-deliver-item">
                  <span className="ai-deliver-item__check">✓</span>
                  <span>Model customization and retrieval systems</span>
                </li>
                <li className="ai-deliver-item">
                  <span className="ai-deliver-item__check">✓</span>
                  <span>Cloud, on-premises, and edge deployment options where suitable</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. CALL TO ACTION ── */}
      <section className="ai-cta-section" aria-label="Get Started">
        <div className="ai-container">
          <div className="ai-cta-card">
            <h2 className="ai-cta-card__title">
              Ready to Transform Your Operations with Sentr AI?
            </h2>
            <p className="ai-cta-card__desc">
              Explore how our artificial intelligence, computer vision, and machine learning platforms can bring visibility and automation to your business.
            </p>
            <div className="ai-cta-card__actions">
              <Link to="/products/aindri#demo" className="ai-btn-primary">
                Request an Aindri Demo
              </Link>
              <Link to="/company/contact" className="ai-btn-outline">
                Speak With an AI Specialist
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
