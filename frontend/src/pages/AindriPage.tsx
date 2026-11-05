import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './AindriPage.css';
import { AindriNodeGraph } from '../components/AindriNodeGraph';
import { AindriDemoModal } from '../components/AindriDemoModal';

/* ---- FAQ ---- */
const faqs = [
  { q: 'What is Aindri?', a: 'Aindri is Sentr AI\'s AI-powered video intelligence platform. It analyzes live camera feeds to detect anomalies and generate real-time alerts.' },
  { q: 'Does Aindri require new cameras?', a: 'Aindri is designed to work with a facility\'s existing camera infrastructure, reducing the need for a complete hardware overhaul.' },
  { q: 'What can Aindri detect?', a: 'Current use cases include people, product-level objects such as cases, bottles and pouches, product-handling activity, unexpected movement, and potential tampering.' },
  { q: 'How does Aindri use AI?', a: 'Aindri uses computer vision and machine learning models to identify relevant people and objects and interpret the activity happening between them.' },
  { q: 'Can Aindri trigger an operational response?', a: 'For higher-severity events, Aindri can support intervention workflows such as placing an operational process on hold until the situation is reviewed.' },
  { q: 'Who can use Aindri?', a: 'Aindri is primarily designed for manufacturing plants, warehouses, and distribution environments with continuous movement of goods.' },
  { q: 'Does Aindri store continuous CCTV footage?', a: 'Aindri\'s current positioning emphasizes retaining snapshots and evidence associated with flagged anomalies rather than continuous bulk footage.' },
  { q: 'Can Aindri integrate with existing enterprise systems?', a: 'Its architecture is intended to integrate with customer CRM, dispatch, and enterprise systems. Specific integrations should be confirmed during the implementation discussion.' },
  { q: 'Can Aindri be customized for a specific industry?', a: 'The underlying models are designed to extend to different product-intensive industries and can be trained around relevant objects and activities.' },
  { q: 'How can I see Aindri in action?', a: 'You can request a demo with the Sentr AI team to discuss your environment, camera infrastructure, and specific monitoring requirements.' },
];

const FAQItem: React.FC<{ q: string; a: string; isOpen: boolean; onClick: () => void }> = ({ q, a, isOpen, onClick }) => {
  return (
    <div className={`faq-item ${isOpen ? 'open' : ''}`}>
      <button className="faq-question" onClick={onClick} aria-expanded={isOpen}>
        <div className="faq-question-left">
          <span className="faq-q-text">{q}</span>
        </div>
        <div className={`faq-icon ${isOpen ? 'open' : ''}`}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </div>
      </button>
      <div className="faq-answer">
        <div className="faq-answer-inner">{a}</div>
      </div>
    </div>
  );
};

const FAQAccordion: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="indri-faq__items">
      {faqs.map((faq, index) => (
        <FAQItem
          key={faq.q}
          q={faq.q}
          a={faq.a}
          isOpen={openIndex === index}
          onClick={() => toggleFAQ(index)}
        />
      ))}
    </div>
  );
};

import heroImg from '../assets/aindri/hero.png';
import aindriiImg from '../assets/aindri/aindri.png';
import ccImg from '../assets/aindri/cc.png';
import girlImg from '../assets/aindri/girl.png';
import img1 from '../assets/aindri/1.png';
import img2 from '../assets/aindri/2.png';
import img3 from '../assets/aindri/3.png';
import img4 from '../assets/aindri/4.png';
import img5 from '../assets/aindri/5.png';
import aaImg from '../assets/aindri/aa.png';
import abImg from '../assets/aindri/ab.png';
import acImg from '../assets/aindri/ac.png';
import adImg from '../assets/aindri/ad.png';
import aeImg from '../assets/aindri/ae.png';
import warehouseImg from '../assets/aindri/warehouse.png';
import cctvHardwareImg from '../assets/cctv.png';
import iotFactoryImg from '../assets/solution/iot.png';

const howWorksSteps = [
  {
    num: '01',
    tag: 'Infrastructure',
    title: 'Connect',
    desc: 'Aindri works with your existing camera infrastructure, reducing the need for a complete hardware overhaul.',
  },
  {
    num: '02',
    tag: 'Analysis',
    title: 'Understand',
    desc: 'Computer vision models analyze live feeds to identify relevant people, objects, and activities.',
  },
  {
    num: '03',
    tag: 'Detection',
    title: 'Detect',
    desc: 'Aindri identifies activity that differs from expected operational patterns, such as unusual product movement or potential tampering.',
  },
  {
    num: '04',
    tag: 'Verification',
    title: 'Alert',
    desc: 'Relevant events generate alerts with snapshot evidence so your team can quickly understand what happened.',
  },
  {
    num: '05',
    tag: 'Intervention',
    title: 'Act',
    desc: 'Depending on the severity, your team can review and intervene. High-priority events can support process-hold workflows.',
  },
];



/* ============================================
   AINDRI PAGE
   ============================================ */
export const AindriPage: React.FC = () => {
  const heroRef = useRef<HTMLElement>(null);
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    const observer = new IntersectionObserver(
      (entries) => { entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('visible'); }); },
      { threshold: 0.07 }
    );
    document.querySelectorAll('.fade-in-up').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // Check URL hash for #demo on load or change
  useEffect(() => {
    if (window.location.hash === '#demo') {
      setIsDemoModalOpen(true);
    }
    const handleHashChange = () => {
      if (window.location.hash === '#demo') {
        setIsDemoModalOpen(true);
      }
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleCloseModal = () => {
    setIsDemoModalOpen(false);
    if (window.location.hash === '#demo') {
      window.history.replaceState(null, '', window.location.pathname);
    }
  };

  return (
    <main className="indri-page">

      <nav className="indri-custom-nav">
        <div className="container indri-custom-nav__inner">
          <Link to="/" className="indri-custom-nav__logo">
            <img src={aindriiImg} alt="Aindri by Sentr AI" style={{ height: '48px' }} />
          </Link>
          <ul className="indri-custom-nav__links">
            <li><Link to="/">Home</Link></li>
            <li><a href="#product">Product</a></li>
            <li><a href="#usecases">Use Cases</a></li>
            <li><a href="#technology">Technology</a></li>
            <li><a href="#why-aindri">Why Aindri</a></li>
            <li><a href="#faq">FAQ</a></li>
          </ul>
          <div className="indri-custom-nav__actions">
            <a href="mailto:info@sentrai.in" className="indri-btn-nav-outline">Contact</a>
            <button type="button" onClick={() => setIsDemoModalOpen(true)} className="indri-btn-nav-primary">
              Request a Demo
            </button>
          </div>
        </div>
      </nav>

      {/* ======== 1. PRODUCT HERO ======== */}
      <section className="indri-hero" ref={heroRef} aria-labelledby="indri-hero-heading">
        <div className="indri-hero__bg" aria-hidden="true" />
        <div className="container indri-hero__inner">
          {/* Left: Content */}
          <div className="indri-hero__content">
            <h1 id="indri-hero-heading" className="indri-hero__heading-main fade-in-up" style={{ transitionDelay: '0.1s' }}>
              Turn your cameras into<br />real-time intelligence
            </h1>
            
            <p className="indri-hero__sub-text fade-in-up" style={{ transitionDelay: '0.2s' }}>
              Aindri transforms existing security cameras into an intelligent monitoring layer that detects anomalies, understands activity, and helps teams respond in real time.
            </p>
            
            <div className="indri-hero__cta-group fade-in-up" style={{ transitionDelay: '0.25s' }}>
              <button type="button" onClick={() => setIsDemoModalOpen(true)} className="indri-btn-white">
                Request a Demo
              </button>
              <button
                type="button"
                className="indri-btn-play"
                onClick={() => {
                  const target = document.querySelector('.indri-issues');
                  target?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <div className="indri-play-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
                </div>
                See How It Works
              </button>
            </div>
          </div>

          {/* Right: Reduced Hero Image with White Background */}
          <div className="indri-hero__visual fade-in-up" style={{ transitionDelay: '0.2s' }}>
            <div className="indri-hero__image-card">
              <img
                src={heroImg}
                alt="Aindri AI Smart Camera & Video Intelligence"
                className="indri-hero__image"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ======== 1.5 THE REALITY (NEW SECTION) ======== */}
      <section className="indri-issues section-y">
        <div className="container">
          <div className="indri-issues__header fade-in-up">
            <div className="indri-issues__header-left">
              <h2 className="indri-issues__heading">
                Your Cameras Record Everything.<br />Who Is Watching?
              </h2>
            </div>
            <div className="indri-issues__header-right">
              <p className="indri-issues__subtext">
                Normal CCTV shows you what went wrong after the damage is done. Aindri turns your existing cameras into an AI monitor that spots problems as they happen and alerts your team right away.
              </p>
            </div>
          </div>

          <div className="indri-issues__grid">
            <div className="indri-issues__list">
              {[
                { num: '01', text: 'A tampered package.' },
                { num: '02', text: 'A misloaded shipment.' },
                { num: '03', text: 'Unexpected product movement.' },
                { num: '04', text: 'An unsafe activity.' },
              ].map((item, i) => (
                <div key={item.num} className="indri-issues__card fade-in-up" style={{ transitionDelay: `${i * 0.1}s` }}>
                  <div className="indri-issues__card-num">{item.num}</div>
                  <div className="indri-issues__card-text">{item.text}</div>
                </div>
              ))}
            </div>
            
            <div className="indri-issues__visual fade-in-up" style={{ transitionDelay: '0.4s' }}>
              <div className="indri-issues__image-wrap">
                <img src={ccImg} alt="CCTV Analysis" className="indri-issues__image" />
                <div className="indri-issues__overlay">
                  <h3 className="indri-issues__overlay-title">Aindri changes that.</h3>
                </div>
              </div>
              <div className="indri-issues__floating-card fade-in-up" style={{ transitionDelay: '0.6s' }}>
                <p className="indri-issues__floating-text">
                  Instead of simply recording activity, Aindri continuously analyzes live camera feeds to identify relevant events and bring important anomalies to your team's attention in real time.
                </p>
                <div className="indri-issues__floating-status">
                  <span className="status-dot"></span>
                  Real-time Alert
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* ======== MARQUEE STRIP ======== */}
      <div className="aindri-node__marquee-strip">
        <div className="aindri-node__marquee-content">
          <span>Real-Time Detection</span>
          <span className="aindri-node__marquee-dot">•</span>
          <span>5 Core Capabilities</span>
          <span className="aindri-node__marquee-dot">•</span>
          <span>Existing Camera Infrastructure</span>
          <span className="aindri-node__marquee-dot">•</span>
          <span>Snapshot-Based Evidence</span>
          <span className="aindri-node__marquee-dot">•</span>
          <span>24/7 Operational Visibility</span>
          <span className="aindri-node__marquee-dot">•</span>
          
          {/* Duplicate for infinite loop */}
          <span>Real-Time Detection</span>
          <span className="aindri-node__marquee-dot">•</span>
          <span>5 Core Capabilities</span>
          <span className="aindri-node__marquee-dot">•</span>
          <span>Existing Camera Infrastructure</span>
          <span className="aindri-node__marquee-dot">•</span>
          <span>Snapshot-Based Evidence</span>
          <span className="aindri-node__marquee-dot">•</span>
          <span>24/7 Operational Visibility</span>
          <span className="aindri-node__marquee-dot">•</span>
        </div>
      </div>

      {/* ======== 2. AINDRI AT THE CENTER OF YOUR OPERATIONS ======== */}
      <AindriNodeGraph />

      {/* ======== 2.5 FROM SURVEILLANCE TO INTELLIGENCE ======== */}
      <section id="product" className="surveillance-intel section-y">
        <div className="container">
          <div className="surveillance-intel__header fade-in-up">
            <h2 className="surveillance-intel__heading">From Surveillance to Intelligence.</h2>
            <p className="surveillance-intel__sub">
              Aindri is Sentr AI's computer-vision platform designed to turn a facility's existing camera network into a real-time operational intelligence layer.
              <br/><br/>
              <strong>It uses AI and machine learning models to understand:</strong>
            </p>
          </div>
          
          <div className="surveillance-intel__bento">
            {/* 1. People - Tall */}
            <div className="bento-card bento-card--people fade-in-up" style={{ transitionDelay: '0.1s' }}>
              <div className="bento-card__bg" style={{ backgroundImage: `url(${img1})` }}></div>
              <div className="bento-card__content">
                <span className="bento-card__tag">Monitoring</span>
                <h3 className="bento-card__title">People</h3>
              </div>
              <div className="bento-card__footer">
                <span className="bento-card__action">Explore</span>
              </div>
            </div>
            
            {/* 2. Products - Wide */}
            <div className="bento-card bento-card--products fade-in-up" style={{ transitionDelay: '0.2s' }}>
              <div className="bento-card__bg" style={{ backgroundImage: `url(${img2})` }}></div>
              <div className="bento-card__content">
                <span className="bento-card__tag">Tracking</span>
                <h3 className="bento-card__title">Products and<br/>objects</h3>
              </div>
              <div className="bento-card__footer">
                <span className="bento-card__action">Explore</span>
              </div>
            </div>
            
            {/* 3. Movement - Normal */}
            <div className="bento-card bento-card--movement fade-in-up" style={{ transitionDelay: '0.3s' }}>
              <div className="bento-card__bg" style={{ backgroundImage: `url(${img3})` }}></div>
              <div className="bento-card__content">
                <span className="bento-card__tag">Flow</span>
                <h3 className="bento-card__title">Movement</h3>
              </div>
              <div className="bento-card__footer">
                <span className="bento-card__action">Explore</span>
              </div>
            </div>
            
            {/* 4. Activities - Normal */}
            <div className="bento-card bento-card--activities fade-in-up" style={{ transitionDelay: '0.4s' }}>
              <div className="bento-card__bg" style={{ backgroundImage: `url(${img4})` }}></div>
              <div className="bento-card__content">
                <span className="bento-card__tag">Operations</span>
                <h3 className="bento-card__title">Activities</h3>
              </div>
              <div className="bento-card__footer">
                <span className="bento-card__action">Explore</span>
              </div>
            </div>
            
            {/* 5. Anomalies - Wide */}
            <div className="bento-card bento-card--anomalies fade-in-up" style={{ transitionDelay: '0.5s' }}>
              <div className="bento-card__bg" style={{ backgroundImage: `url(${img5})` }}></div>
              <div className="bento-card__content">
                <span className="bento-card__tag">Alerts</span>
                <h3 className="bento-card__title">Operational<br/>anomalies</h3>
              </div>
              <div className="bento-card__footer">
                <span className="bento-card__action">Explore</span>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* ======== 3. HOW AINDRI WORKS ======== */}
      <section id="technology" className="how-aindri-works section-y">
        <div className="container relative z-10">
          <div className="how-aindri-works__header fade-in-up">
            <h2 className="how-aindri-works__heading">How Aindri Works</h2>
          </div>

          {/* 5-Step Pipeline Grid */}
          <div className="aindri-pipeline__grid fade-in-up" style={{ transitionDelay: '0.2s' }}>
            {howWorksSteps.map((step, i) => (
              <div key={step.num} className="aindri-pipeline__card" style={{ transitionDelay: `${i * 0.08}s` }}>
                <div className="aindri-pipeline__card-top">
                  <span className="aindri-pipeline__card-num">STEP {step.num}</span>
                </div>

                <h3 className="aindri-pipeline__card-title">{step.title}</h3>
                <p className="aindri-pipeline__card-desc">{step.desc}</p>

                <div className="aindri-pipeline__card-footer">
                  <span className="aindri-pipeline__card-tag">{step.tag}</span>
                  <span className="aindri-pipeline__card-step-indicator">{i + 1}/5</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

            {/* ======== 3.5 WHY AINDRI (COLLAGE) ======== */}
      <section id="why-aindri" className="why-aindri">
        <div className="container">
          <div className="why-aindri__header fade-in-up">
            <h2 className="why-aindri__heading">Why Aindri?</h2>
            <p className="why-aindri__sub">Because Recording an Incident Isn't the Same as Preventing It</p>
          </div>
          
          <div className="why-aindri__collage">
            {/* Top Row: Large Featured Card (7 cols) + Tall Card (5 cols) */}
            <div className="why-collage-row why-collage-row--top">
              {/* Card 1: Move From Investigation to Intervention */}
              <div className="why-collage-card why-collage-card--featured fade-in-up">
                <div className="why-collage-card__body">
                  <div className="why-collage-card__tag">
                    <span className="why-collage-card__tag-dot"></span>
                    Real-Time Action
                  </div>
                  <h3 className="why-collage-card__title">
                    Move From Investigation to Intervention
                  </h3>
                  <p className="why-collage-card__desc">
                    Identify important events while they are happening instead of relying entirely on post-incident footage review.
                  </p>
                  <div className="why-collage-card__highlight">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
                    </svg>
                    <span>Instant event detection & operational response</span>
                  </div>
                </div>
                <div className="why-collage-card__image-container">
                  <img
                    src={img5}
                    alt="Move From Investigation to Intervention"
                    className="why-collage-card__img"
                  />
                  <div className="why-collage-card__floating-badge">
                    <span className="live-indicator"></span>
                    Live Anomaly Detection
                  </div>
                </div>
              </div>

              {/* Card 2: Reduce Manual Monitoring */}
              <div className="why-collage-card why-collage-card--tall fade-in-up" style={{ transitionDelay: '0.1s' }}>
                <div className="why-collage-card__image-container">
                  <img
                    src={adImg}
                    alt="Reduce Manual Monitoring"
                    className="why-collage-card__img"
                  />
                  <div className="why-collage-card__floating-badge">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/>
                      <path d="M13.73 21a2 2 0 0 1-3.46 0"/>
                    </svg>
                    Continuous AI Guard
                  </div>
                </div>
                <div className="why-collage-card__body">
                  <div className="why-collage-card__tag">
                    <span className="why-collage-card__tag-dot"></span>
                    Autonomous Alerts
                  </div>
                  <h3 className="why-collage-card__title">
                    Reduce Manual Monitoring
                  </h3>
                  <p className="why-collage-card__desc">
                    Give security and operations teams intelligent alerts instead of requiring continuous manual monitoring of every camera feed.
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom Row: 3 Equal Collage Cards (4 cols each) */}
            <div className="why-collage-row why-collage-row--bottom">
              {/* Card 3: Use What You Already Have */}
              <div className="why-collage-card why-collage-card--standard fade-in-up" style={{ transitionDelay: '0.15s' }}>
                <div className="why-collage-card__image-container">
                  <img
                    src={cctvHardwareImg}
                    alt="Use What You Already Have"
                    className="why-collage-card__img"
                  />
                  <div className="why-collage-card__floating-badge">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/>
                      <circle cx="12" cy="13" r="4"/>
                    </svg>
                    Existing CCTV Cameras
                  </div>
                </div>
                <div className="why-collage-card__body">
                  <div className="why-collage-card__tag">
                    <span className="why-collage-card__tag-dot"></span>
                    Zero Rip-and-Replace
                  </div>
                  <h3 className="why-collage-card__title">
                    Use What You Already Have
                  </h3>
                  <p className="why-collage-card__desc">
                    Leverage existing camera infrastructure rather than requiring a complete surveillance hardware replacement.
                  </p>
                </div>
              </div>

              {/* Card 4: Protect Against Operational Loss */}
              <div className="why-collage-card why-collage-card--standard fade-in-up" style={{ transitionDelay: '0.2s' }}>
                <div className="why-collage-card__image-container">
                  <img
                    src={acImg}
                    alt="Protect Against Operational Loss"
                    className="why-collage-card__img"
                  />
                  <div className="why-collage-card__floating-badge">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                    </svg>
                    Loss Prevention
                  </div>
                </div>
                <div className="why-collage-card__body">
                  <div className="why-collage-card__tag">
                    <span className="why-collage-card__tag-dot"></span>
                    Tampering & Discrepancy
                  </div>
                  <h3 className="why-collage-card__title">
                    Protect Against Operational Loss
                  </h3>
                  <p className="why-collage-card__desc">
                    Detect potential tampering, substitution, misloading, and other discrepancies earlier.
                  </p>
                </div>
              </div>

              {/* Card 5: One Platform, Multiple Use Cases */}
              <div className="why-collage-card why-collage-card--standard fade-in-up" style={{ transitionDelay: '0.25s' }}>
                <div className="why-collage-card__image-container">
                  <img
                    src={iotFactoryImg}
                    alt="One Platform, Multiple Use Cases"
                    className="why-collage-card__img"
                  />
                  <div className="why-collage-card__floating-badge">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polygon points="12 2 2 7 12 12 22 7 12 2"/>
                      <polyline points="2 17 12 22 22 17"/>
                      <polyline points="2 12 12 17 22 12"/>
                    </svg>
                    Multi-Facility Scale
                  </div>
                </div>
                <div className="why-collage-card__body">
                  <div className="why-collage-card__tag">
                    <span className="why-collage-card__tag-dot"></span>
                    Unified Platform
                  </div>
                  <h3 className="why-collage-card__title">
                    One Platform, Multiple Use Cases
                  </h3>
                  <p className="why-collage-card__desc">
                    The platform can extend across operational monitoring, warehouse activity, inventory, attendance, dispatch, and access-related workflows.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======== 4. WHO IS AINDRI FOR ======== */}
      <section id="usecases" className="who-aindri-for">
        <div className="container">
          <div className="who-aindri-for__header fade-in-up">
            <h2 className="who-aindri-for__heading">Who Is Aindri For?</h2>
            <p className="who-aindri-for__sub">Built for the People Responsible for What Happens on the Floor<br/>Aindri is particularly relevant for:</p>
          </div>
          
          <div className="who-aindri-for__marquee-wrapper fade-in-up" style={{ transitionDelay: '0.2s' }}>
            <div className="who-aindri-for__marquee">
              {[
                { title: 'Operations Heads', desc: 'Improve operational visibility and respond to anomalies faster.', img: aaImg },
                { title: 'Plant Managers', desc: 'Gain better visibility into activities across the facility.', img: abImg },
                { title: 'Warehouse Managers', desc: 'Monitor product movement and critical warehouse activities.', img: acImg },
                { title: 'Security Teams', desc: 'Reduce dependence on continuous manual CCTV monitoring.', img: adImg },
                { title: 'Loss Prevention Teams', desc: 'Identify potential discrepancies and tampering earlier.', img: aeImg }
              ].map((role, i) => (
                <div key={i} className="who-for-card">
                  <div className="who-for-card__content">
                    <h3 className="who-for-card__title">{role.title}</h3>
                    <p className="who-for-card__desc">{role.desc}</p>
                    <button className="who-for-card__btn">Learn More</button>
                  </div>
                  <div className="who-for-card__image-wrap">
                    <img src={role.img} alt={role.title} />
                  </div>
                </div>
              ))}
              {/* Duplicate for infinite scrolling effect */}
              {[
                { title: 'Operations Heads', desc: 'Improve operational visibility and respond to anomalies faster.', img: aaImg },
                { title: 'Plant Managers', desc: 'Gain better visibility into activities across the facility.', img: abImg },
                { title: 'Warehouse Managers', desc: 'Monitor product movement and critical warehouse activities.', img: acImg },
                { title: 'Security Teams', desc: 'Reduce dependence on continuous manual CCTV monitoring.', img: adImg },
                { title: 'Loss Prevention Teams', desc: 'Identify potential discrepancies and tampering earlier.', img: aeImg }
              ].map((role, i) => (
                <div key={`dup-${i}`} className="who-for-card">
                  <div className="who-for-card__content">
                    <h3 className="who-for-card__title">{role.title}</h3>
                    <p className="who-for-card__desc">{role.desc}</p>
                    <button className="who-for-card__btn">Learn More</button>
                  </div>
                  <div className="who-for-card__image-wrap">
                    <img src={role.img} alt={role.title} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>



      {/* ======== 6. BUSINESS BENEFITS ======== */}
      <section className="indri-benefits section-y" style={{ backgroundImage: `url(${warehouseImg})` }}>
        <div className="indri-benefits__overlay"></div>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="indri-benefits__header fade-in-up">
            <h2 className="indri-benefits__heading">
              What Aindri Changes<br />for Your Operations
            </h2>
            <p className="indri-benefits__sub">
              Aindri is built to create measurable improvements in how industrial
              teams manage, monitor and respond to operational data.
            </p>
          </div>

          <div className="indri-benefits__grid-glass fade-in-up" style={{ transitionDelay: '0.1s' }}>
            {[
              'Better real-time operational visibility across all connected systems',
              'Faster identification and escalation of production issues',
              'Reduced reliance on manual monitoring and manual data collection',
              'More connected production, quality and energy data',
              'Improved accuracy of operational reporting and records',
              'Better decision-making based on live, structured data',
              'Earlier detection of equipment inefficiencies',
              'Greater oversight of production quality processes',
            ].map((b, i) => (
              <div key={i} className="indri-benefits__glass-item">
                <div className="indri-benefits__glass-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <span>{b}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ======== 6.5 MAKE CAMERAS WORK SMARTER - WAVE PROCESS ======== */}
      <section className="smarter-cameras section-y">
        <div className="smarter-cameras__bg-shape" aria-hidden="true" />

        <div className="container relative z-10">
          {/* Compact Split Header */}
          <div className="smarter-cameras__header-wrap fade-in-up">
            <div className="smarter-cameras__intro-left">
              <span className="smarter-cameras__eyebrow">CONTINUOUS EVIDENCE & ACTION</span>
              <h2 className="smarter-cameras__heading">
                Your Cameras Are Already Watching.<br />
                <span className="smarter-cameras__heading-highlight">Make Them Work Smarter.</span>
              </h2>
            </div>
            <div className="smarter-cameras__intro-right">
              <p className="smarter-cameras__sub">
                Turn your existing camera infrastructure into an intelligent, real-time layer for detecting anomalies, understanding activity, and responding to critical events.
              </p>
              <div className="smarter-cameras__actions">
                <button
                  type="button"
                  onClick={() => setIsDemoModalOpen(true)}
                  className="smarter-cameras__btn"
                >
                  Request a Demo
                </button>
                <Link to="/company/contact" className="smarter-cameras__btn-link">
                  Explore a Custom Solution &rarr;
                </Link>
              </div>
            </div>
          </div>

          {/* Curving Wavy Process Timeline in Blue */}
          <div className="smarter-cameras__timeline fade-in-up" style={{ transitionDelay: '0.2s' }}>
            {/* SVG Curving Ribbon Wave */}
            <div className="smarter-cameras__wave-wrap" aria-hidden="true">
              <svg className="smarter-cameras__wave-svg" viewBox="0 0 1200 100" fill="none" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="waveBlueGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#0284c7" />
                    <stop offset="50%" stopColor="#2563eb" />
                    <stop offset="100%" stopColor="#38bdf8" />
                  </linearGradient>
                  <filter id="waveGlow" x="-10%" y="-10%" width="120%" height="140%">
                    <feDropShadow dx="0" dy="4" stdDeviation="4" floodColor="#2563eb" floodOpacity="0.25" />
                  </filter>
                </defs>
                <path
                  d="M 0 68 C 45 68, 75 68, 110 68 C 190 68, 275 22, 355 22 C 435 22, 520 68, 600 68 C 680 68, 765 22, 845 22 C 925 22, 1010 52, 1090 52 C 1135 52, 1170 54, 1200 54"
                  stroke="url(#waveBlueGrad)"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  filter="url(#waveGlow)"
                />
              </svg>
            </div>

            {/* 5 Step Columns Riding the Curve */}
            <div className="smarter-cameras__steps-grid">
              {[
                { step: 'Detect', text: 'An unusual event is identified.' },
                { step: 'Capture', text: 'Relevant visual evidence is associated with the event.' },
                { step: 'Alert', text: 'The responsible team receives a notification.' },
                { step: 'Review', text: 'The team evaluates the situation.' },
                { step: 'Respond', text: 'Appropriate action can be taken.' },
              ].map((s, i) => (
                <div key={s.step} className={`smarter-cameras__step-col smarter-cameras__step-col--${i + 1}`}>
                  {/* Floating White Circular Node with Center Dot */}
                  <div className="smarter-cameras__node">
                    <span className="smarter-cameras__node-dot" />
                  </div>

                  {/* Step Card with Watermark */}
                  <div className="smarter-cameras__step-content">
                    <div className="smarter-cameras__watermark">{i + 1}</div>
                    <div className="smarter-cameras__step-body">
                      <span className="smarter-cameras__step-tag">Step 0{i + 1}</span>
                      <h4 className="smarter-cameras__step-title">{s.step}</h4>
                      <p className="smarter-cameras__step-desc">{s.text}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>




      {/* ======== 8. FAQ ======== */}
      <section className="indri-faq section-y" id="faq">
        <div className="container">
          <div className="indri-faq__card fade-in-up">
            <div className="indri-faq__inner">
              <div className="indri-faq__left">
                <div className="indri-faq__header">
                  <span className="indri-faq__badge"><span className="indri-faq__badge-dot"></span> FAQ</span>
                  <h2 className="indri-faq__heading">Frequently Asked<br/>Questions</h2>
                </div>
                
                <div className="indri-faq__cta">
                  <div className="indri-faq__cta-visuals">
                    <img src={aindriiImg} alt="Aindri" className="indri-faq__cta-logo" />
                    <div className="indri-faq__cta-avatar">
                      <img src={girlImg} alt="Support" />
                    </div>
                  </div>
                  <h3 className="indri-faq__cta-title">Still have a question?</h3>
                  <p className="indri-faq__cta-desc">
                    Don't worry we're free for consultation.
                  </p>
                  <Link to="/company/contact" className="indri-faq__btn">Contact Us</Link>
                </div>
              </div>

              <div className="indri-faq__right">
                <FAQAccordion />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======== DEMO POPUP MODAL ======== */}
      <AindriDemoModal isOpen={isDemoModalOpen} onClose={handleCloseModal} />

    </main>
  );
};

export const IndriPage = AindriPage;

