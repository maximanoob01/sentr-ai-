import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import './AISolutionsPage.css';
import herooImg from '../assets/solution/heroo.png';
import teamPhoto from '../assets/about us/hero.png';
import card1 from '../assets/solution/card1.png';

const FULL_HERO_SUBTITLE =
  'Build smarter operations with artificial intelligence, machine learning, and computer vision. Sentrai helps businesses connect their data, automate complex workflows, and gain real-time insights to make better decisions.';

export const AISolutionsPage: React.FC = () => {
  const [displayedSubtitle, setDisplayedSubtitle] = useState('');
  const [isTypingDone, setIsTypingDone] = useState(false);
  const [expandedCards, setExpandedCards] = useState<Record<number, boolean>>({});
  const [activeBentoSlide, setActiveBentoSlide] = useState(0);
  const bentoCarouselRef = useRef<HTMLDivElement>(null);

  const toggleCard = (index: number) => {
    setExpandedCards((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const handleBentoScroll = () => {
    if (bentoCarouselRef.current) {
      const { scrollLeft, offsetWidth } = bentoCarouselRef.current;
      if (offsetWidth > 0) {
        const itemWidth = offsetWidth * 0.85;
        const newIndex = Math.round(scrollLeft / itemWidth);
        const clamped = Math.max(0, Math.min(4, newIndex));
        if (clamped !== activeBentoSlide) {
          setActiveBentoSlide(clamped);
        }
      }
    }
  };

  const scrollBentoSlide = (index: number) => {
    if (bentoCarouselRef.current) {
      const cards = bentoCarouselRef.current.querySelectorAll<HTMLElement>('.bento-card');
      if (cards[index]) {
        cards[index].scrollIntoView({
          behavior: 'smooth',
          block: 'nearest',
          inline: 'center',
        });
        setActiveBentoSlide(index);
      }
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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

  return (
    <main className="ai-page">
      {/* ── 1. HERO SECTION ── */}
      <section className="ai-hero" aria-label="AI Solutions Hero">
        <div
          className="ai-hero__bg"
          style={{
            backgroundImage: `url(${herooImg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
          aria-hidden="true"
        />
        <div className="ai-hero__overlay" aria-hidden="true" />
        <div className="ai-hero__glow ai-hero__glow--1" aria-hidden="true" />
        <div className="ai-hero__glow ai-hero__glow--2" aria-hidden="true" />
        <div className="ai-hero__dots" aria-hidden="true" />

        <div className="ai-container">
          <div className="ai-hero__inner">
            <div className="ai-hero__content">
              <h1 className="ai-hero__title">
                AI Solutions That{' '}
                <span className="ai-hero__title-accent">Turn Data Into Action</span>
              </h1>

              <p className="ai-hero__subtitle" aria-label={FULL_HERO_SUBTITLE}>
                {displayedSubtitle}
                <span
                  className={`ai-typing-cursor ${isTypingDone ? 'ai-typing-cursor--done' : ''}`}
                  aria-hidden="true"
                />
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. OUR AI SOLUTIONS (REFERENCE DESIGN) ── */}
      <section className="ai-solutions-section" aria-label="Our AI Solutions">
        {/* Dotted pattern in gradient style on the right side */}
        <div className="ai-solutions-dots" aria-hidden="true">
          <svg
            className="ai-solutions-dots__svg"
            width="480"
            height="340"
            viewBox="0 0 480 340"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="aiSolDotsGrad" x1="100%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#2563eb" stopOpacity="0.65" />
                <stop offset="50%" stopColor="#0ea5e9" stopOpacity="0.45" />
                <stop offset="100%" stopColor="#6366f1" stopOpacity="0.1" />
              </linearGradient>
              <radialGradient id="aiSolDotsGlow" cx="100%" cy="0%" r="100%">
                <stop offset="0%" stopColor="#0ea5e9" stopOpacity="0.18" />
                <stop offset="40%" stopColor="#2563eb" stopOpacity="0.08" />
                <stop offset="100%" stopColor="#2563eb" stopOpacity="0" />
              </radialGradient>
              <pattern id="aiSolDotsPattern" x="0" y="0" width="22" height="22" patternUnits="userSpaceOnUse">
                <circle cx="2.5" cy="2.5" r="2" fill="url(#aiSolDotsGrad)" />
              </pattern>
              <radialGradient id="aiSolDotsMaskGrad" cx="100%" cy="0%" r="100%">
                <stop offset="0%" stopColor="#fff" stopOpacity="1" />
                <stop offset="45%" stopColor="#fff" stopOpacity="0.7" />
                <stop offset="85%" stopColor="#fff" stopOpacity="0" />
              </radialGradient>
              <mask id="aiSolDotsMask">
                <rect width="480" height="340" fill="url(#aiSolDotsMaskGrad)" />
              </mask>
            </defs>
            <rect width="480" height="340" fill="url(#aiSolDotsGlow)" />
            <rect width="480" height="340" fill="url(#aiSolDotsPattern)" mask="url(#aiSolDotsMask)" />
          </svg>
        </div>

        <div className="ai-container">
          <div className="ai-solutions-header">
            <h2 className="ai-solutions-header__title">
              Our AI Solutions
            </h2>
            <p className="ai-solutions-header__desc">
              We build AI-powered solutions that help companies automate daily tasks, understand their business data, monitor operations, and solve real-world problems.
            </p>
          </div>

          <div className="ai-solutions-grid">
            {/* Card 1: AI Computer Vision */}
            <article className={`ai-sol-card ai-sol-card--coral ${expandedCards[0] ? 'ai-sol-card--expanded' : ''}`}>
              <div className="ai-sol-card__top">
                <div className="ai-sol-card__icon ai-sol-card__icon--coral" aria-hidden="true">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
                    <circle cx="12" cy="13" r="4" />
                  </svg>
                </div>
                <h3 className="ai-sol-card__title">AI Computer Vision</h3>
                <p className="ai-sol-card__tagline">
                  Help computers understand and analyze images and videos.
                </p>
                <p className="ai-sol-card__desc">
                  We develop AI systems that use cameras to monitor activities, identify objects, detect unusual events, and improve workplace safety and operations.
                </p>

                {/* Mobile Expand / Read More Toggle */}
                <button
                  type="button"
                  className="ai-sol-card__toggle"
                  onClick={() => toggleCard(0)}
                  aria-expanded={Boolean(expandedCards[0])}
                  aria-controls="sol-card-expand-0"
                >
                  <span>{expandedCards[0] ? 'Show less' : 'Read more'}</span>
                  <span className="ai-sol-card__toggle-icon" aria-hidden="true">
                    {expandedCards[0] ? '−' : '+'}
                  </span>
                </button>

                <div id="sol-card-expand-0" className="ai-sol-card__expandable">
                  <div className="ai-sol-card__offer">
                    <span className="ai-sol-card__offer-title">What we offer:</span>
                    <ul className="ai-sol-card__list">
                      <li>Real-time camera monitoring</li>
                      <li>Object and activity detection</li>
                      <li>Automatic quality inspection</li>
                      <li>Workplace safety monitoring</li>
                      <li>Warehouse and inventory monitoring</li>
                      <li>Unusual activity detection</li>
                    </ul>
                  </div>

                  <div className="ai-sol-card__footer">
                    <div className="ai-sol-card__stat">
                      <span className="ai-sol-card__stat-val">99.2%</span>
                      <span className="ai-sol-card__stat-lbl">Detection Accuracy</span>
                    </div>
                    <div className="ai-sol-card__stat">
                      <span className="ai-sol-card__stat-val">&lt;40ms</span>
                      <span className="ai-sol-card__stat-lbl">Inference Speed</span>
                    </div>
                    <div className="ai-sol-card__stat">
                      <span className="ai-sol-card__stat-val">24/7</span>
                      <span className="ai-sol-card__stat-lbl">Live Monitoring</span>
                    </div>
                  </div>
                </div>
              </div>
            </article>

            {/* Card 2: Generative AI & AI Chatbots */}
            <article className={`ai-sol-card ai-sol-card--violet ${expandedCards[1] ? 'ai-sol-card--expanded' : ''}`}>
              <div className="ai-sol-card__top">
                <div className="ai-sol-card__icon ai-sol-card__icon--violet" aria-hidden="true">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
                    <line x1="9" y1="10" x2="15" y2="10" />
                    <line x1="12" y1="7" x2="12" y2="13" />
                  </svg>
                </div>
                <h3 className="ai-sol-card__title">Generative AI &amp; AI Chatbots</h3>
                <p className="ai-sol-card__tagline">
                  Make it easier for customers and employees to get information using AI.
                </p>
                <p className="ai-sol-card__desc">
                  We build intelligent chatbots and virtual assistants that can answer questions, understand requests, search company information, and support everyday business activities.
                </p>

                {/* Mobile Expand / Read More Toggle */}
                <button
                  type="button"
                  className="ai-sol-card__toggle"
                  onClick={() => toggleCard(1)}
                  aria-expanded={Boolean(expandedCards[1])}
                  aria-controls="sol-card-expand-1"
                >
                  <span>{expandedCards[1] ? 'Show less' : 'Read more'}</span>
                  <span className="ai-sol-card__toggle-icon" aria-hidden="true">
                    {expandedCards[1] ? '−' : '+'}
                  </span>
                </button>

                <div id="sol-card-expand-1" className="ai-sol-card__expandable">
                  <div className="ai-sol-card__offer">
                    <span className="ai-sol-card__offer-title">What we offer:</span>
                    <ul className="ai-sol-card__list">
                      <li>Custom AI chatbots</li>
                      <li>Website AI assistants</li>
                      <li>Business knowledge assistants</li>
                      <li>Document-based question answering</li>
                      <li>Customer support automation</li>
                      <li>AI-powered information search</li>
                    </ul>
                  </div>

                  <div className="ai-sol-card__footer">
                    <div className="ai-sol-card__stat">
                      <span className="ai-sol-card__stat-val">85%+</span>
                      <span className="ai-sol-card__stat-lbl">Resolution Rate</span>
                    </div>
                    <div className="ai-sol-card__stat">
                      <span className="ai-sol-card__stat-val">50+</span>
                      <span className="ai-sol-card__stat-lbl">Languages</span>
                    </div>
                    <div className="ai-sol-card__stat">
                      <span className="ai-sol-card__stat-val">10x</span>
                      <span className="ai-sol-card__stat-lbl">Faster Support</span>
                    </div>
                  </div>
                </div>
              </div>
            </article>

            {/* Card 3: Predictive Analytics & Machine Learning */}
            <article className={`ai-sol-card ai-sol-card--emerald ${expandedCards[2] ? 'ai-sol-card--expanded' : ''}`}>
              <div className="ai-sol-card__top">
                <div className="ai-sol-card__icon ai-sol-card__icon--emerald" aria-hidden="true">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="20" x2="18" y2="10" />
                    <line x1="12" y1="20" x2="12" y2="4" />
                    <line x1="6" y1="20" x2="6" y2="14" />
                    <path d="m3 7 6-4 6 4 6-4" />
                  </svg>
                </div>
                <h3 className="ai-sol-card__title">Predictive Analytics &amp; Machine Learning</h3>
                <p className="ai-sol-card__tagline">
                  Use business data to understand what might happen next.
                </p>
                <p className="ai-sol-card__desc">
                  Our AI solutions analyze past and current data to identify patterns, predict possible problems, and help businesses plan better.
                </p>

                {/* Mobile Expand / Read More Toggle */}
                <button
                  type="button"
                  className="ai-sol-card__toggle"
                  onClick={() => toggleCard(2)}
                  aria-expanded={Boolean(expandedCards[2])}
                  aria-controls="sol-card-expand-2"
                >
                  <span>{expandedCards[2] ? 'Show less' : 'Read more'}</span>
                  <span className="ai-sol-card__toggle-icon" aria-hidden="true">
                    {expandedCards[2] ? '−' : '+'}
                  </span>
                </button>

                <div id="sol-card-expand-2" className="ai-sol-card__expandable">
                  <div className="ai-sol-card__offer">
                    <span className="ai-sol-card__offer-title">What we offer:</span>
                    <ul className="ai-sol-card__list">
                      <li>Equipment failure prediction</li>
                      <li>Production forecasting</li>
                      <li>Demand prediction</li>
                      <li>Performance analysis</li>
                      <li>Unusual data detection</li>
                      <li>Business trend analysis</li>
                    </ul>
                  </div>

                  <div className="ai-sol-card__footer">
                    <div className="ai-sol-card__stat">
                      <span className="ai-sol-card__stat-val">96%</span>
                      <span className="ai-sol-card__stat-lbl">Anomaly Precision</span>
                    </div>
                    <div className="ai-sol-card__stat">
                      <span className="ai-sol-card__stat-val">3.5x</span>
                      <span className="ai-sol-card__stat-lbl">ROI Boost</span>
                    </div>
                    <div className="ai-sol-card__stat">
                      <span className="ai-sol-card__stat-val">99.9%</span>
                      <span className="ai-sol-card__stat-lbl">Model Uptime</span>
                    </div>
                  </div>
                </div>
              </div>
            </article>

            {/* Card 4: AI Automation & Intelligent Agents */}
            <article className={`ai-sol-card ai-sol-card--cyan ${expandedCards[3] ? 'ai-sol-card--expanded' : ''}`}>
              <div className="ai-sol-card__top">
                <div className="ai-sol-card__icon ai-sol-card__icon--cyan" aria-hidden="true">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                  </svg>
                </div>
                <h3 className="ai-sol-card__title">AI Automation &amp; Intelligent Agents</h3>
                <p className="ai-sol-card__tagline">
                  Reduce repetitive work and make business processes faster.
                </p>
                <p className="ai-sol-card__desc">
                  We build AI-powered systems that can handle routine tasks, process information, manage workflows, and connect different business applications.
                </p>

                {/* Mobile Expand / Read More Toggle */}
                <button
                  type="button"
                  className="ai-sol-card__toggle"
                  onClick={() => toggleCard(3)}
                  aria-expanded={Boolean(expandedCards[3])}
                  aria-controls="sol-card-expand-3"
                >
                  <span>{expandedCards[3] ? 'Show less' : 'Read more'}</span>
                  <span className="ai-sol-card__toggle-icon" aria-hidden="true">
                    {expandedCards[3] ? '−' : '+'}
                  </span>
                </button>

                <div id="sol-card-expand-3" className="ai-sol-card__expandable">
                  <div className="ai-sol-card__offer">
                    <span className="ai-sol-card__offer-title">What we offer:</span>
                    <ul className="ai-sol-card__list">
                      <li>Automated business workflows</li>
                      <li>AI-powered task management</li>
                      <li>Data collection and processing</li>
                      <li>Email and document automation</li>
                      <li>Customer request handling</li>
                      <li>Integration with existing business software</li>
                    </ul>
                  </div>

                  <div className="ai-sol-card__footer">
                    <div className="ai-sol-card__stat">
                      <span className="ai-sol-card__stat-val">75%+</span>
                      <span className="ai-sol-card__stat-lbl">Tasks Automated</span>
                    </div>
                    <div className="ai-sol-card__stat">
                      <span className="ai-sol-card__stat-val">5x</span>
                      <span className="ai-sol-card__stat-lbl">Process Speed</span>
                    </div>
                    <div className="ai-sol-card__stat">
                      <span className="ai-sol-card__stat-val">99.8%</span>
                      <span className="ai-sol-card__stat-lbl">Execution Rate</span>
                    </div>
                  </div>
                </div>
              </div>
            </article>

            {/* Card 5: Intelligent Document Processing */}
            <article className={`ai-sol-card ai-sol-card--amber ${expandedCards[4] ? 'ai-sol-card--expanded' : ''}`}>
              <div className="ai-sol-card__top">
                <div className="ai-sol-card__icon ai-sol-card__icon--amber" aria-hidden="true">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <polyline points="14 2 14 8 20 8" />
                    <line x1="16" y1="13" x2="8" y2="13" />
                    <line x1="16" y1="17" x2="8" y2="17" />
                    <polyline points="10 9 9 9 8 9" />
                  </svg>
                </div>
                <h3 className="ai-sol-card__title">Intelligent Document Processing</h3>
                <p className="ai-sol-card__tagline">
                  Turn large amounts of paperwork into useful digital information.
                </p>
                <p className="ai-sol-card__desc">
                  Our AI solutions can read, understand, organize, and extract information from documents, helping businesses reduce manual work and process information faster.
                </p>

                {/* Mobile Expand / Read More Toggle */}
                <button
                  type="button"
                  className="ai-sol-card__toggle"
                  onClick={() => toggleCard(4)}
                  aria-expanded={Boolean(expandedCards[4])}
                  aria-controls="sol-card-expand-4"
                >
                  <span>{expandedCards[4] ? 'Show less' : 'Read more'}</span>
                  <span className="ai-sol-card__toggle-icon" aria-hidden="true">
                    {expandedCards[4] ? '−' : '+'}
                  </span>
                </button>

                <div id="sol-card-expand-4" className="ai-sol-card__expandable">
                  <div className="ai-sol-card__offer">
                    <span className="ai-sol-card__offer-title">What we offer:</span>
                    <ul className="ai-sol-card__list">
                      <li>Invoice and receipt processing</li>
                      <li>Document data extraction</li>
                      <li>Automatic document classification</li>
                      <li>Text recognition (OCR)</li>
                      <li>Document summarization</li>
                      <li>Digital document search</li>
                    </ul>
                  </div>

                  <div className="ai-sol-card__footer">
                    <div className="ai-sol-card__stat">
                      <span className="ai-sol-card__stat-val">99.5%</span>
                      <span className="ai-sol-card__stat-lbl">OCR Accuracy</span>
                    </div>
                    <div className="ai-sol-card__stat">
                      <span className="ai-sol-card__stat-val">10x</span>
                      <span className="ai-sol-card__stat-lbl">Extraction Speed</span>
                    </div>
                    <div className="ai-sol-card__stat">
                      <span className="ai-sol-card__stat-val">80%+</span>
                      <span className="ai-sol-card__stat-lbl">Manual Work Cut</span>
                    </div>
                  </div>
                </div>
              </div>
            </article>

            {/* Card 6: Custom AI Development */}
            <article className={`ai-sol-card ai-sol-card--rose ${expandedCards[5] ? 'ai-sol-card--expanded' : ''}`}>
              <div className="ai-sol-card__top">
                <div className="ai-sol-card__icon ai-sol-card__icon--rose" aria-hidden="true">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="16 18 22 12 16 6" />
                    <polyline points="8 6 2 12 8 18" />
                    <line x1="14" y1="4" x2="10" y2="20" />
                  </svg>
                </div>
                <h3 className="ai-sol-card__title">Custom AI Development</h3>
                <p className="ai-sol-card__tagline">
                  Every business has different needs. We develop AI solutions based on specific business requirements.
                </p>
                <p className="ai-sol-card__desc">
                  From custom AI applications to connecting AI with existing software, we help organizations bring intelligent technology into their operations.
                </p>

                {/* Mobile Expand / Read More Toggle */}
                <button
                  type="button"
                  className="ai-sol-card__toggle"
                  onClick={() => toggleCard(5)}
                  aria-expanded={Boolean(expandedCards[5])}
                  aria-controls="sol-card-expand-5"
                >
                  <span>{expandedCards[5] ? 'Show less' : 'Read more'}</span>
                  <span className="ai-sol-card__toggle-icon" aria-hidden="true">
                    {expandedCards[5] ? '−' : '+'}
                  </span>
                </button>

                <div id="sol-card-expand-5" className="ai-sol-card__expandable">
                  <div className="ai-sol-card__offer">
                    <span className="ai-sol-card__offer-title">What we offer:</span>
                    <ul className="ai-sol-card__list">
                      <li>Custom AI applications</li>
                      <li>Machine learning solutions</li>
                      <li>AI software integration</li>
                      <li>AI-powered web applications</li>
                      <li>Business-specific AI tools</li>
                      <li>AI system development</li>
                    </ul>
                  </div>

                  <div className="ai-sol-card__footer">
                    <div className="ai-sol-card__stat">
                      <span className="ai-sol-card__stat-val">100%</span>
                      <span className="ai-sol-card__stat-lbl">Bespoke Models</span>
                    </div>
                    <div className="ai-sol-card__stat">
                      <span className="ai-sol-card__stat-val">4-6 Wks</span>
                      <span className="ai-sol-card__stat-lbl">Agile Delivery</span>
                    </div>
                    <div className="ai-sol-card__stat">
                      <span className="ai-sol-card__stat-val">Enterprise</span>
                      <span className="ai-sol-card__stat-lbl">Security &amp; SLA</span>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* ── 3. BENTO GRID SECTION (INSPIRED BY REFERENCE DESIGN) ── */}
      <section className="ai-bento-section" aria-label="AI Solutions Bento Grid">
        <div className="ai-container">
          <div className="ai-bento-header">
            <h2 className="ai-bento-header__title">
              Intelligent Capabilities Built for Scale
            </h2>
          </div>

          {/* DESKTOP BENTO GRID (Visible on screens > 768px) */}
          <div className="ai-bento-grid ai-bento-grid--desktop">
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
                src={card1}
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
                <Link to="/company/contact" className="bento-card__btn">
                  Contact Now
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          {/* MOBILE BENTO LAYOUT (Visible only on screens <= 768px) */}
          <div className="ai-bento-mobile">
            {/* 1. Operations Photo Card */}
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

            {/* 2. 4 Mini Icon Tiles in a neat horizontal bar */}
            <div className="bento-card bento-card--tiles">
              <div className="bento-tile bento-tile--blue" title="Computer Vision & Video Analytics">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
              </div>
              <div className="bento-tile bento-tile--light" title="Generative AI & Assistants">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3Z" />
                </svg>
              </div>
              <div className="bento-tile bento-tile--light" title="Predictive Machine Learning">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                </svg>
              </div>
              <div className="bento-tile bento-tile--light" title="Autonomous Workflow Agents">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <path d="m10 15 5-3-5-3v6Z" />
                </svg>
              </div>
            </div>

            {/* 3. The 5 Capability Cards in Horizontal Slideshow */}
            <div className="bento-slider-wrapper">
              <div
                className="bento-slider"
                ref={bentoCarouselRef}
                onScroll={handleBentoScroll}
              >
                {/* Slide 1: 24/7 Real-Time Visibility */}
                <div className="bento-card bento-card--small-white bento-slide">
                  <div className="bento-card__num">24/7</div>
                  <div className="bento-card__title">Real-Time Visibility</div>
                  <div className="bento-card__sub">
                    Autonomous monitoring and alert streams across your facilities.
                  </div>
                </div>

                {/* Slide 2: 01 AI Agents & Workflow Automation */}
                <div className="bento-card bento-card--lime bento-slide">
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

                {/* Slide 3: 100% Predictive Analytics & Machine Learning */}
                <div className="bento-card bento-card--dark bento-slide">
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

                {/* Slide 4: 1 Industrial AI & Computer Vision */}
                <div className="bento-card bento-card--light-1 bento-slide">
                  <div className="bento-card__num">1</div>
                  <h3 className="bento-card__title">
                    Industrial AI &amp; Computer Vision
                  </h3>
                  <p className="bento-card__sub">
                    Give your operations greater visibility with AI systems that interpret visual information and identify important events as they happen.
                  </p>
                </div>

                {/* Slide 5: 100% Generative AI & Intelligent Assistants */}
                <div className="bento-card bento-card--light-2 bento-slide">
                  <div className="bento-card__num">100%</div>
                  <h3 className="bento-card__title">
                    Generative AI &amp; Intelligent Assistants
                  </h3>
                  <p className="bento-card__sub">
                    Make business knowledge easier to access with AI assistants designed around your organization's information and workflows.
                  </p>
                </div>
              </div>

              {/* Slider Dots */}
              <div className="bento-slider-dots" aria-label="Slideshow pagination">
                {[0, 1, 2, 3, 4].map((idx) => (
                  <button
                    key={idx}
                    type="button"
                    className={`bento-slider-dot ${activeBentoSlide === idx ? 'bento-slider-dot--active' : ''}`}
                    onClick={() => scrollBentoSlide(idx)}
                    aria-label={`Go to slide ${idx + 1} of 5`}
                  />
                ))}
              </div>
            </div>

            {/* 4. Custom AI Photo Card with Contact Now button */}
            <div className="bento-card bento-card--photo-bottom">
              <img
                src={card1}
                alt="Custom AI Development and Integration"
                className="bento-card__bg-img"
              />
              <div className="bento-card__overlay">
                <span className="bento-card__tag">Bespoke Engineering</span>
                <h3 className="bento-card__headline">
                  Custom AI Development &amp; Integration
                </h3>
                <p style={{ color: '#cbd5e1', fontSize: '0.82rem', marginTop: '0.25rem', lineHeight: '1.4' }}>
                  Build AI solutions that fit your business instead of forcing your business to fit a generic tool.
                </p>
                <Link to="/company/contact" className="bento-card__btn">
                  Contact Now
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. CALL TO ACTION ── */}
      <section className="ai-cta-section" aria-label="Get Started">
        <div className="ai-container">
          <div className="ai-cta-wrapper">
            {/* Dotted pattern on either side of the card */}
            <div className="ai-cta-dots ai-cta-dots--left" aria-hidden="true" />
            <div className="ai-cta-dots ai-cta-dots--right" aria-hidden="true" />

            <div className="ai-cta-card">
              <img
                src={card1}
                alt=""
                aria-hidden="true"
                className="ai-cta-card__bg-img"
              />
              <div className="ai-cta-card__overlay" aria-hidden="true" />
              <div className="ai-cta-card__content">
                <h2 className="ai-cta-card__title">
                  Let's Build Something Smarter
                </h2>
                <p className="ai-cta-card__lead">
                  Every business has opportunities to work better with AI.
                </p>
                <p className="ai-cta-card__desc">
                  Whether you want to automate a process, build an intelligent assistant, or improve factory operations, Sentrai can help you identify the right AI solution.
                </p>
                <p className="ai-cta-card__closing">
                  Let's discuss how AI can make a difference in your business.
                </p>
                <div className="ai-cta-card__actions">
                  <Link to="/company/contact" className="ai-btn-primary">
                    Contact Us
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
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
