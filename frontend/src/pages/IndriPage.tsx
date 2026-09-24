import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './IndriPage.css';

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
import ddImg from '../assets/aindri/dd.png';
import aaImg from '../assets/aindri/aa.png';
import abImg from '../assets/aindri/ab.png';
import acImg from '../assets/aindri/ac.png';
import adImg from '../assets/aindri/ad.png';
import aeImg from '../assets/aindri/ae.png';
import warehouseImg from '../assets/aindri/warehouse.png';
import axImg from '../assets/aindri/ax.png';
import workImg from '../assets/work.png';

const howWorksSteps = [
  { num: '01', title: 'Connect', desc: 'Aindri works with your existing camera infrastructure, reducing the need for a complete hardware overhaul.' },
  { num: '02', title: 'Understand', desc: 'Computer vision models analyze live feeds to identify relevant people, objects, and activities.' },
  { num: '03', title: 'Detect', desc: 'Aindri identifies activity that differs from expected operational patterns, such as unusual product movement or potential tampering.' },
  { num: '04', title: 'Alert', desc: 'Relevant events generate alerts with snapshot evidence so your team can quickly understand what happened.' },
  { num: '05', title: 'Act', desc: 'Depending on the severity, your team can review and intervene. High-priority events can support process-hold workflows.' }
];

const HowWorksStep: React.FC<{ step: any }> = ({ step }) => {
  const [open, setOpen] = useState(false);
  
  return (
    <div className="how-works-hotspot">
      <div className={`how-works-card ${open ? 'open' : ''}`}>
        <span className="how-works-card__num">STEP {step.num}</span>
        <h3 className="how-works-card__title">{step.title}</h3>
        
        <div className="how-works-card__desc-wrap">
          <p className="how-works-card__desc">{step.desc}</p>
        </div>

        <button className="how-works-card__btn" onClick={() => setOpen(!open)}>
          {open ? 'Close' : 'Read more'}
        </button>
      </div>
    </div>
  );
};

/* ============================================
   INDRI PAGE
   ============================================ */
export const IndriPage: React.FC = () => {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    const observer = new IntersectionObserver(
      (entries) => { entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('visible'); }); },
      { threshold: 0.07 }
    );
    document.querySelectorAll('.fade-in-up').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

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
            <a href="#demo" className="indri-btn-nav-primary">Request a Demo &rarr;</a>
          </div>
        </div>
      </nav>

      {/* ======== 1. PRODUCT HERO ======== */}
      <section className="indri-hero" ref={heroRef} aria-labelledby="indri-hero-heading">
        <div className="indri-hero__bg" aria-hidden="true">
          <div style={{ position: 'absolute', inset: 0, backgroundImage: `url(${heroImg})`, backgroundSize: 'cover', backgroundPosition: 'center', opacity: 1 }} />
        </div>
        <div className="container indri-hero__inner">
          <div className="indri-hero__content">
            
            <h1 id="indri-hero-heading" className="indri-hero__heading-main fade-in-up" style={{ transitionDelay: '0.1s' }}>
              TURN YOUR CAMERAS INTO<br />REAL-TIME INTELLIGENCE
            </h1>
            
            <p className="indri-hero__sub-text fade-in-up" style={{ transitionDelay: '0.2s' }}>
              Aindri transforms existing security cameras into an intelligent monitoring layer that detects anomalies, understands activity, and helps teams respond in real time.
            </p>
            
            <div className="indri-hero__cta-group fade-in-up" style={{ transitionDelay: '0.3s' }}>
              <a href="#demo" className="indri-btn-white">Request a Demo &rarr;</a>
              <button className="indri-btn-play">
                <div className="indri-play-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
                </div>
                See How It Works
              </button>
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
                Your Cameras See Everything.<br />But Who Is Watching?
              </h2>
            </div>
            <div className="indri-issues__header-right">
              <p className="indri-issues__subtext">
                Traditional CCTV is excellent at recording what happened. The problem is that someone usually has to discover the incident after it has already happened.
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
        <div className="container">
          <div className="how-aindri-works__interactive fade-in-up" style={{ transitionDelay: '0.2s' }}>
            <div className="how-aindri-works__header fade-in-up">
              <h2 className="how-aindri-works__heading">How Aindri Works</h2>
              <p className="how-aindri-works__sub">See &rarr; Understand &rarr; Alert &rarr; Act</p>
            </div>
            
            <img src={ddImg} alt="How Aindri Works" className="how-aindri-works__bg-img" />
            
            <div className="how-aindri-works__overlay">
              {howWorksSteps.map((step) => (
                <HowWorksStep key={step.num} step={step} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ======== 3.5 WHY AINDRI ======== */}
      <section id="why-aindri" className="why-aindri section-y">
        <div className="container">
          <div className="why-aindri__header fade-in-up">
            <h2 className="why-aindri__heading">Why Aindri?</h2>
            <p className="why-aindri__sub">Because Recording an Incident Isn't the Same as Preventing It</p>
          </div>
          
          <div className="why-aindri__marquee-wrapper fade-in-up" style={{ transitionDelay: '0.2s' }}>
            <div className="why-aindri__marquee">
              {[
                { title: 'Move From Investigation to Intervention', desc: 'Identify important events while they are happening instead of relying entirely on post-incident footage review.', icon: <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/> },
                { title: 'Reduce Manual Monitoring', desc: 'Give security and operations teams intelligent alerts instead of requiring continuous manual monitoring of every camera feed.', icon: <><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><path d="M11 8v4l3 3"/></> },
                { title: 'Use What You Already Have', desc: 'Leverage existing camera infrastructure rather than requiring a complete surveillance hardware replacement.', icon: <><rect x="2" y="7" width="20" height="15" rx="2" ry="2"/><polyline points="17 2 12 7 7 2"/></> },
                { title: 'Protect Against Operational Loss', desc: 'Detect potential tampering, substitution, misloading, and other discrepancies earlier.', icon: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/> },
                { title: 'One Platform, Multiple Use Cases', desc: 'The platform can extend across operational monitoring, warehouse activity, inventory, attendance, dispatch, and access-related workflows.', icon: <><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></> }
              ].map((card, i) => (
                <div key={i} className="why-aindri-card">
                  <div className="why-aindri-card__icon">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      {card.icon}
                    </svg>
                  </div>
                  <h3 className="why-aindri-card__title">{card.title}</h3>
                  <p className="why-aindri-card__desc">{card.desc}</p>
                </div>
              ))}
              {[
                { title: 'Move From Investigation to Intervention', desc: 'Identify important events while they are happening instead of relying entirely on post-incident footage review.', icon: <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/> },
                { title: 'Reduce Manual Monitoring', desc: 'Give security and operations teams intelligent alerts instead of requiring continuous manual monitoring of every camera feed.', icon: <><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><path d="M11 8v4l3 3"/></> },
                { title: 'Use What You Already Have', desc: 'Leverage existing camera infrastructure rather than requiring a complete surveillance hardware replacement.', icon: <><rect x="2" y="7" width="20" height="15" rx="2" ry="2"/><polyline points="17 2 12 7 7 2"/></> },
                { title: 'Protect Against Operational Loss', desc: 'Detect potential tampering, substitution, misloading, and other discrepancies earlier.', icon: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/> },
                { title: 'One Platform, Multiple Use Cases', desc: 'The platform can extend across operational monitoring, warehouse activity, inventory, attendance, dispatch, and access-related workflows.', icon: <><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></> }
              ].map((card, i) => (
                <div key={`dup-${i}`} className="why-aindri-card">
                  <div className="why-aindri-card__icon">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      {card.icon}
                    </svg>
                  </div>
                  <h3 className="why-aindri-card__title">{card.title}</h3>
                  <p className="why-aindri-card__desc">{card.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ======== 3.75 WITH AINDRI STRIP ======== */}
      <div className="aindri-strip">
        <div className="container">
          <div className="aindri-strip__inner fade-in-up">
            <span className="aindri-strip__label">With Aindri</span>
            <h3 className="aindri-strip__text">
              Watch <span className="aindri-strip__arrow">&rarr;</span> Understand <span className="aindri-strip__arrow">&rarr;</span> Detect <span className="aindri-strip__arrow">&rarr;</span> Alert <span className="aindri-strip__arrow">&rarr;</span> Act
            </h3>
          </div>
        </div>
      </div>

      {/* ======== 4. WHO IS AINDRI FOR ======== */}
      <section id="usecases" className="who-aindri-for section-y">
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

      {/* ======== 6.5 SEE WHY IT HAPPENED ======== */}
      <section className="see-why section-y">
        <div className="container">
          <div className="see-why__header fade-in-up">
            <span className="section-label">Evidence & Action</span>
            <h2 className="see-why__heading">Don't Just Get an Alert. See Why It Happened.</h2>
            <p className="see-why__sub">
              When Aindri identifies a relevant anomaly, the system can retain snapshot evidence associated with the flagged event. This gives teams context around the alert without requiring them to search through hours of footage.
            </p>
          </div>

          <div className="see-why__layout fade-in-up" style={{ transitionDelay: '0.2s' }}>
            <div className="see-why__left-col">


              <div className="see-why__center-image fade-in-up">
                <img src={axImg} alt="Intelligence visual" />
              </div>
            </div>

            <div className="see-why__scroll-area">
              <div className="see-why__marquee">
                {[
                  { step: 'Detect', text: 'An unusual event is identified.' },
                  { step: 'Capture', text: 'Relevant visual evidence is associated with the event.' },
                  { step: 'Alert', text: 'The responsible team receives a notification.' },
                  { step: 'Review', text: 'The team evaluates the situation.' },
                  { step: 'Respond', text: 'Appropriate action can be taken.' }
                ].map((s, i) => (
                  <div key={i} className="see-why__step-card">
                    <span className="see-why__step-badge">Step 0{i + 1}</span>
                    <h4 className="see-why__step-title">{s.step}</h4>
                    <p className="see-why__step-desc">{s.text}</p>
                  </div>
                ))}
                {[
                  { step: 'Detect', text: 'An unusual event is identified.' },
                  { step: 'Capture', text: 'Relevant visual evidence is associated with the event.' },
                  { step: 'Alert', text: 'The responsible team receives a notification.' },
                  { step: 'Review', text: 'The team evaluates the situation.' },
                  { step: 'Respond', text: 'Appropriate action can be taken.' }
                ].map((s, i) => (
                  <div key={`dup-${i}`} className="see-why__step-card">
                    <span className="see-why__step-badge">Step 0{i + 1}</span>
                    <h4 className="see-why__step-title">{s.step}</h4>
                    <p className="see-why__step-desc">{s.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ======== 6.75 MAKE THEM WORK SMARTER ======== */}
      <section className="indri-smart section-y">
        <div className="container">
          <div className="indri-smart__card fade-in-up" style={{ backgroundImage: `url(${workImg})` }}>
            <div className="indri-smart__overlay"></div>
            <div className="indri-smart__content">
              <h2 className="indri-smart__heading">
                Your Cameras Are Already Watching.<br />
                <span className="text-gradient">Make Them Work Smarter.</span>
              </h2>
              <p className="indri-smart__desc">
                Turn your existing camera infrastructure into an intelligent, real-time layer for detecting anomalies, understanding activity, and responding to critical events.
              </p>
              
              <div className="indri-smart__challenge">
                <span className="indri-smart__challenge-badge">Have a specific operational challenge?</span>
                <p>Aindri can be adapted to your business requirements and use cases.</p>
              </div>
              
              <div className="indri-smart__actions">
                <a href="#demo" className="indri-btn-white">Request a Demo</a>
                <a href="/contact" className="indri-btn-outline">Explore a Custom Solution &rarr;</a>
              </div>
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
                    Don't worry we're here for cons Don't worry we're free for consultation.
                  </p>
                  <a href="mailto:info@sentrai.in" className="indri-faq__btn">Contact Us</a>
                </div>
              </div>

              <div className="indri-faq__right">
                <FAQAccordion />
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
};
