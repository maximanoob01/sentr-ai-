import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './EnterpriseITPage.css';
import spaceBg from '../assets/solution/space.png';
import car1Img from '../assets/solution/car1.png';
import srv1 from '../assets/solution/enterprise/1.png';
import srv2 from '../assets/solution/enterprise/2.png';
import srv3 from '../assets/solution/enterprise/3.png';
import srv4 from '../assets/solution/enterprise/4.png';
import workplaceHeroBg from '../assets/solution/hero.png';
import emailImg from '../assets/email.png';

const FULL_HERO_SUBTITLE =
  'Build a smarter, more secure and connected workplace with Sentr AI. We help businesses modernise their IT infrastructure, improve employee productivity, optimise technology costs and manage their digital operations.';

const enterpriseServices = [
  {
    num: '01',
    title: 'Digital Workplace Solutions',
    desc: 'Create a connected and productive workplace with Microsoft 365, Google Workspace, AI-powered tools, unified communications and workflow automation.',
    image: srv1,
    alt: 'Digital workplace laptops and collaboration setup',
  },
  {
    num: '02',
    title: 'End User Mobility & Computing',
    desc: 'Equip your workforce with the right devices and computing solutions. We support device deployment, endpoint management, mobility and end-user computing.',
    image: srv2,
    alt: 'End user mobility and computing hardware devices',
  },
  {
    num: '03',
    title: 'Cloud Infrastructure Solutions',
    desc: 'Modernise your IT environment with scalable cloud infrastructure, migration, backup and infrastructure management across leading cloud platforms.',
    image: srv3,
    alt: 'Enterprise cloud infrastructure servers and datacenters',
  },
  {
    num: '04',
    title: 'IT Asset Lifecycle Management',
    desc: 'Manage technology assets throughout their lifecycle, from procurement and deployment to maintenance, refurbishment and responsible end-of-life handling.',
    image: srv4,
    alt: 'IT asset lifecycle management and deployment',
  },
];

const lifecycleServices = [
  'IT asset tracking and inventory management.',
  'Device maintenance and lifecycle planning.',
  'Refurbishment and reuse of eligible IT equipment.',
  'Responsible end-of-life equipment management.',
  'Coordination with authorised e-waste recycling partners where required.',
];

const approachSteps = [
  {
    num: '01',
    title: 'Discovery & Assessment',
    desc: 'Understand your existing IT environment, identify challenges and define a practical technology roadmap.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
    ),
  },
  {
    num: '02',
    title: 'Design & Deployment',
    desc: 'Design, modernise and deploy solutions that align with your business requirements.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
  },
  {
    num: '03',
    title: 'Transformation & Adoption',
    desc: 'Help employees adopt new technologies through training, process improvements and ongoing guidance.',
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
    num: '04',
    title: 'Managed Support & Optimisation',
    desc: 'Provide continuous IT support, system management, security improvements and cost optimisation.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
  },
];

export const EnterpriseITPage: React.FC = () => {
  const [displayedSubtitle, setDisplayedSubtitle] = useState('');
  const [isTypingDone, setIsTypingDone] = useState(false);

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
        const delay = char === '.' ? 160 : char === ',' ? 80 : 12;
        timeoutId = window.setTimeout(typeNextChar, delay);
      } else {
        setIsTypingDone(true);
      }
    };

    timeoutId = window.setTimeout(typeNextChar, 300);

    return () => {
      window.clearTimeout(timeoutId);
    };
  }, []);

  return (
    <main className="eit-page">
      {/* ── 1. HERO SECTION ── */}
      <section className="eit-hero" aria-label="Enterprise IT Solutions Hero">
        {/* Background Image: space.png */}
        <div
          className="eit-hero__bg"
          style={{
            backgroundImage: `url(${spaceBg})`,
          }}
          aria-hidden="true"
        />

        {/* Subtle neutral overlay for readability */}
        <div className="eit-hero__overlay" aria-hidden="true" />

        <div className="eit-container">
          <div className="eit-hero__inner">
            <div className="eit-hero__content">
              {/* Main Headline */}
              <h1 className="eit-hero__title fade-in-up" style={{ transitionDelay: '0.1s' }}>
                Enterprise IT Solutions That Move Your Business Forward
              </h1>

              {/* Animated Subtitle */}
              <p
                className="eit-hero__subtitle fade-in-up"
                style={{ transitionDelay: '0.15s' }}
                aria-label={FULL_HERO_SUBTITLE}
              >
                {displayedSubtitle}
                <span
                  className={`eit-typing-cursor ${isTypingDone ? 'eit-typing-cursor--done' : ''}`}
                  aria-hidden="true"
                />
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. OVERVIEW SECTION ── */}
      <section className="eit-overview" aria-label="Workplace Overview">
        <div className="eit-container">
          <div className="eit-overview__grid">
            {/* LEFT — Text Content */}
            <div className="eit-overview__content fade-in-up">
              <span className="eit-overview__label">Overview</span>
              <h2 className="eit-overview__title">
                Modern businesses need more than technology.
              </h2>
              <p className="eit-overview__lead">
                They need reliable IT systems that support growth, improve productivity and keep operations running smoothly.
              </p>
              <p className="eit-overview__desc">
                Sentr AI delivers enterprise IT solutions that bring together cloud infrastructure, digital workplace services, cybersecurity and IT management. From setting up modern work environments to managing complex IT systems, we help organisations make better use of technology.
              </p>
              <div className="eit-overview__focus">
                <p className="eit-overview__focus-text">
                  Our focus is simple: reduce complexity, improve efficiency and create technology environments that are ready for the future.
                </p>
              </div>
            </div>

            {/* RIGHT — Image */}
            <div className="eit-overview__image-wrap fade-in-up" style={{ transitionDelay: '0.15s' }}>
              <img
                src={car1Img}
                alt="Modern collaborative workplace with team members"
                className="eit-overview__image"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. OUR ENTERPRISE IT SERVICES ── */}
      <section className="eit-services" aria-labelledby="services-heading">
        {/* Dotted pattern in gradient style on the right side */}
        <div className="eit-services-dots" aria-hidden="true">
          <svg
            className="eit-services-dots__svg"
            width="460"
            height="280"
            viewBox="0 0 460 280"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="eitServicesDotsGrad" x1="100%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#0284c7" stopOpacity="0.65" />
                <stop offset="50%" stopColor="#38bdf8" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#2563eb" stopOpacity="0.1" />
              </linearGradient>
              <radialGradient id="eitServicesDotsGlow" cx="100%" cy="0%" r="100%">
                <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.16" />
                <stop offset="50%" stopColor="#0284c7" stopOpacity="0.06" />
                <stop offset="100%" stopColor="#0284c7" stopOpacity="0" />
              </radialGradient>
              <pattern id="eitServicesDotsPattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <circle cx="2.5" cy="2.5" r="2" fill="url(#eitServicesDotsGrad)" />
              </pattern>
              <radialGradient id="eitServicesDotsMaskGrad" cx="100%" cy="0%" r="100%">
                <stop offset="0%" stopColor="#fff" stopOpacity="1" />
                <stop offset="45%" stopColor="#fff" stopOpacity="0.75" />
                <stop offset="85%" stopColor="#fff" stopOpacity="0" />
              </radialGradient>
              <mask id="eitServicesDotsMask">
                <rect width="460" height="280" fill="url(#eitServicesDotsMaskGrad)" />
              </mask>
            </defs>
            <rect width="460" height="280" fill="url(#eitServicesDotsGlow)" />
            <rect width="460" height="280" fill="url(#eitServicesDotsPattern)" mask="url(#eitServicesDotsMask)" />
          </svg>
        </div>

        <div className="eit-container" style={{ position: 'relative', zIndex: 2 }}>
          {/* Section Header: Left Text & Right Quick Links Pills */}
          <div className="eit-services__header fade-in-up">
            <div className="eit-services__header-left">
              <span className="eit-services__label">Our Enterprise IT Services</span>
              <h2 id="services-heading" className="eit-services__title">
                Complete IT Solutions for Modern Enterprises
              </h2>
              <p className="eit-services__sub">
                From employee computing to cloud infrastructure, we provide the technology and support businesses need to operate efficiently.
              </p>
            </div>

            <div className="eit-services__header-right">
              <div className="eit-services__quick-links">
                <span className="eit-services__quick-label">QUICK LINKS</span>
                <div className="eit-services__pills">
                  <Link to="/solutions/ai" className="eit-pill" title="AI Solutions">
                    AI Solutions
                  </Link>
                  <Link to="/products/aindri" className="eit-pill" title="Intelligent Monitoring">
                    Intelligent Monitoring
                  </Link>
                  <Link to="/cloud-solutions#services" className="eit-pill" title="Cloud Infrastructure">
                    Cloud Infrastructure
                  </Link>
                  <Link to="/solutions/cybersecurity" className="eit-pill" title="Cybersecurity">
                    Cybersecurity
                  </Link>
                  <Link to="/solutions/iot" className="eit-pill" title="Smart IoT">
                    Smart IoT
                  </Link>
                  <Link to="/company/contact" className="eit-pill eit-pill--cta" title="Contact Us">
                    <span>Contact Us</span>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* 4 Cards Grid */}
          <div className="eit-services__grid">
            {enterpriseServices.map((service, index) => (
              <article
                key={service.num}
                className="eit-service-card fade-in-up"
                style={{ transitionDelay: `${0.08 * (index + 1)}s` }}
              >
                <div className="eit-service-card__image-wrap">
                  <img
                    src={service.image}
                    alt={service.alt}
                    className="eit-service-card__image"
                    loading="lazy"
                  />
                  <span className="eit-service-card__num">{service.num}</span>
                </div>
                <div className="eit-service-card__body">
                  <h3 className="eit-service-card__title">{service.title}</h3>
                  <p className="eit-service-card__desc">{service.desc}</p>
                  <Link
                    to="/company/contact"
                    className="eit-service-card__link"
                    aria-label={`Learn more about ${service.title}`}
                  >
                    <span>Learn More</span>
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

      {/* ── 4. DIGITAL WORKPLACE SOLUTIONS ── */}
      <section className="eit-workplace" aria-labelledby="workplace-heading">
        {/* Background Image: hero.png */}
        <div
          className="eit-workplace__bg"
          style={{
            backgroundImage: `url(${workplaceHeroBg})`,
          }}
          aria-hidden="true"
        />

        {/* Deep dark gradient overlay for contrast and legibility */}
        <div className="eit-workplace__overlay" aria-hidden="true" />

        <div className="eit-container">
          <div className="eit-workplace__header fade-in-up">
            <span className="eit-workplace__label">Digital Workplace Solutions</span>
            <h2 id="workplace-heading" className="eit-workplace__title">
              Build a High-Performance Digital Workplace
            </h2>
            <p className="eit-workplace__desc">
              A productive workplace starts with the right combination of people, processes and technology. Sentr AI helps organisations create connected digital environments where employees can collaborate, work efficiently and access the tools they need.
            </p>
            <p className="eit-workplace__lead-in">
              Our digital workplace services focus on three important areas:
            </p>
          </div>

          <div className="eit-workplace__grid">
            {/* Card 1: People */}
            <article className="eit-workplace-card fade-in-up" style={{ transitionDelay: '0.1s' }}>
              <div className="eit-workplace-card__top">
                <div className="eit-workplace-card__icon eit-workplace-card__icon--people" aria-hidden="true">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                </div>
                <span className="eit-workplace-card__num">01</span>
              </div>
              <h3 className="eit-workplace-card__title">People</h3>
              <p className="eit-workplace-card__text">
                Empower employees with the right tools, training and support.
              </p>
            </article>

            {/* Card 2: Processes */}
            <article className="eit-workplace-card fade-in-up" style={{ transitionDelay: '0.18s' }}>
              <div className="eit-workplace-card__top">
                <div className="eit-workplace-card__icon eit-workplace-card__icon--processes" aria-hidden="true">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="18" cy="18" r="3" />
                    <circle cx="6" cy="6" r="3" />
                    <path d="M13 6h3a2 2 0 0 1 2 2v7" />
                    <line x1="6" y1="9" x2="6" y2="21" />
                  </svg>
                </div>
                <span className="eit-workplace-card__num">02</span>
              </div>
              <h3 className="eit-workplace-card__title">Processes</h3>
              <p className="eit-workplace-card__text">
                Simplify workflows, automate tasks and improve daily operations.
              </p>
            </article>

            {/* Card 3: Technology */}
            <article className="eit-workplace-card fade-in-up" style={{ transitionDelay: '0.26s' }}>
              <div className="eit-workplace-card__top">
                <div className="eit-workplace-card__icon eit-workplace-card__icon--tech" aria-hidden="true">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="18" height="18" x="3" y="3" rx="2" />
                    <path d="m9 8 3 3-3 3" />
                    <line x1="15" x2="15.01" y1="16" y2="16" />
                  </svg>
                </div>
                <span className="eit-workplace-card__num">03</span>
              </div>
              <h3 className="eit-workplace-card__title">Technology</h3>
              <p className="eit-workplace-card__text">
                Use cloud, AI and modern IT systems to support business growth.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* ── 5. IT ASSET LIFECYCLE & SUSTAINABILITY ── */}
      <section className="eit-lifecycle" aria-labelledby="lifecycle-heading">
        <div className="eit-container">
          <div className="eit-lifecycle__grid">
            {/* LEFT — Text Content */}
            <div className="eit-lifecycle__content fade-in-up">
              <span className="eit-lifecycle__label">IT Asset Lifecycle & Sustainability</span>
              <h2 id="lifecycle-heading" className="eit-lifecycle__title">
                Smarter IT Asset Management
              </h2>
              <p className="eit-lifecycle__desc">
                Technology management doesn't end with deployment. We help businesses manage their IT assets responsibly throughout their lifecycle.
              </p>

              <div className="eit-lifecycle__body">
                <h3 className="eit-lifecycle__subtitle">Our services include:</h3>
                <ul className="eit-lifecycle__list">
                  {lifecycleServices.map((service, idx) => (
                    <li key={idx} className="eit-lifecycle__item">
                      <span className="eit-lifecycle__item-icon" aria-hidden="true">
                        <svg
                          width="15"
                          height="15"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </span>
                      <span className="eit-lifecycle__item-text">{service}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* RIGHT — Image (email.png) with Cursive Overlay Text */}
            <div className="eit-lifecycle__visual fade-in-up" style={{ transitionDelay: '0.15s' }}>
              <div className="eit-lifecycle__image-wrap">
                <img
                  src={emailImg}
                  alt="Sentr AI enterprise team collaborating on smarter IT asset management and sustainability"
                  className="eit-lifecycle__image"
                  loading="lazy"
                />

                {/* Subtle dark gradient scrim for readability */}
                <div className="eit-lifecycle__image-scrim" aria-hidden="true" />

                {/* Floating cursive text over the image */}
                <div className="eit-lifecycle__cursive-card">
                  <p className="eit-lifecycle__cursive-text">
                    This helps organisations improve asset utilisation, reduce unnecessary hardware costs and support more responsible IT practices.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. OUR APPROACH ── */}
      <section className="eit-approach" aria-labelledby="approach-heading">
        {/* Dotted pattern in gradient style on the right side */}
        <div className="eit-approach-dots" aria-hidden="true">
          <svg
            className="eit-approach-dots__svg"
            width="440"
            height="300"
            viewBox="0 0 440 300"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="eitApproachDotsGrad" x1="100%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#0284c7" stopOpacity="0.65" />
                <stop offset="50%" stopColor="#38bdf8" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#2563eb" stopOpacity="0.1" />
              </linearGradient>
              <radialGradient id="eitApproachDotsGlow" cx="100%" cy="0%" r="100%">
                <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.18" />
                <stop offset="50%" stopColor="#0284c7" stopOpacity="0.06" />
                <stop offset="100%" stopColor="#0284c7" stopOpacity="0" />
              </radialGradient>
              <pattern id="eitApproachDotsPattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <circle cx="2.5" cy="2.5" r="2" fill="url(#eitApproachDotsGrad)" />
              </pattern>
              <radialGradient id="eitApproachDotsMaskGrad" cx="100%" cy="0%" r="100%">
                <stop offset="0%" stopColor="#fff" stopOpacity="1" />
                <stop offset="45%" stopColor="#fff" stopOpacity="0.75" />
                <stop offset="85%" stopColor="#fff" stopOpacity="0" />
              </radialGradient>
              <mask id="eitApproachDotsMask">
                <rect width="440" height="300" fill="url(#eitApproachDotsMaskGrad)" />
              </mask>
            </defs>
            <rect width="440" height="300" fill="url(#eitApproachDotsGlow)" />
            <rect width="440" height="300" fill="url(#eitApproachDotsPattern)" mask="url(#eitApproachDotsMask)" />
          </svg>
        </div>

        <div className="eit-container">
          <div className="eit-approach__header fade-in-up">
            <div className="eit-approach__header-left">
              <span className="eit-approach__label">Our Approach</span>
              <h2 id="approach-heading" className="eit-approach__title">
                From IT Planning to <span className="eit-approach__title-accent">Continuous Improvement</span>
              </h2>
              <p className="eit-approach__desc">
                Every organisation has different technology requirements. We follow a structured approach to understand your business, deliver suitable solutions and keep your IT environment performing effectively.
              </p>
            </div>
            <div className="eit-approach__header-right">
              <Link to="/company/contact" className="eit-btn eit-btn--primary eit-approach__cta">
                <span>Contact Now</span>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>

          <div className="eit-approach__grid">
            {approachSteps.map((step, idx) => (
              <article
                key={step.num}
                className="eit-approach-card fade-in-up"
                style={{ transitionDelay: `${0.1 + idx * 0.08}s` }}
              >
                <div className="eit-approach-card__top">
                  <span className="eit-approach-card__num">{step.num}</span>
                  <div className="eit-approach-card__icon" aria-hidden="true">
                    {step.icon}
                  </div>
                </div>
                <h3 className="eit-approach-card__title">{step.title}</h3>
                <p className="eit-approach-card__desc">{step.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

