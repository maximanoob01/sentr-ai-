import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import './CybersecurityPage.css';
import secuImg from '../assets/solution/secu.png';
import buildingImg from '../assets/solution/building.png';
import srv1 from '../assets/solution/enterprise/1.png';
import srv2 from '../assets/solution/enterprise/2.png';
import srv3 from '../assets/solution/enterprise/3.png';
import srv4 from '../assets/solution/enterprise/4.png';
import handshakeImg from '../assets/career/handshake.png';
import serverImg from '../assets/cloud solutions/server.png';
import whyUs1Img from '../assets/why us/1.png';

const FULL_HERO_SUBTITLE =
  'Enterprise-grade cybersecurity solutions to protect your users, applications, infrastructure and critical business data. Sentr AI helps organisations identify threats, strengthen security and maintain control across complex digital environments.';

const cybersecurityServices = [
  {
    id: 'workspace-security',
    title: 'Workspace Security',
    tagline: 'Protect Your People, Applications and Business Data',
    desc: 'Your employees are at the center of your digital workplace. However, email threats, malicious links, compromised accounts and accidental data sharing can expose sensitive business information. Sentr AI Workspace Security helps protect employees and the applications they use every day.',
    image: srv1,
    alt: 'Employees collaborating securely in digital workplace',
    capabilities: [
      'Email security and advanced phishing protection.',
      'Business email compromise and impersonation protection.',
      'Data Loss Prevention (DLP).',
      'Insider risk management.',
      'SaaS application visibility and monitoring.',
      'Secure collaboration across Microsoft Teams, Google Workspace, Slack and Zoom.',
      'Endpoint Detection and Response (EDR).',
      'Secure access for remote and hybrid employees.',
    ],
    ctaText: 'Explore Workspace Security',
    ctaLink: '/company/contact',
  },
  {
    id: 'cloud-security',
    title: 'Cloud Security',
    tagline: 'Secure Your Cloud Infrastructure and Critical Data',
    desc: 'Cloud environments provide flexibility and scalability, but they also introduce security challenges. Misconfigurations, compromised credentials and sophisticated cyberattacks can expose critical business systems. Sentr AI helps organisations strengthen their cloud security through continuous monitoring, security assessments and proactive protection across cloud and hybrid environments. Our solutions support Microsoft Azure, Microsoft 365, AWS and multi-cloud environments.',
    note: 'Our security services can include 24/7 monitoring and protection through Security Operations Centre (SOC) capabilities, depending on the selected service arrangement.',
    image: srv3,
    alt: 'Cloud infrastructure security monitoring and operations',
    capabilities: [
      'Cloud security assessment and configuration monitoring.',
      'Cloud infrastructure protection.',
      'Security monitoring and threat detection.',
      'Vulnerability assessment and penetration testing.',
      'Backup and disaster recovery planning.',
      'Cloud access and security policy management.',
      'Incident response and recovery support.',
      'Regulatory security and compliance support.',
    ],
    ctaText: 'Explore Cloud Security',
    ctaLink: '/company/contact',
  },
  {
    id: 'identity-access-management',
    title: 'Identity & Access Management',
    tagline: 'Make Sure the Right People Have the Right Access',
    desc: 'Every user, device and application accessing your business systems represents a potential security risk. Weak passwords, excessive permissions and compromised credentials can give attackers access to sensitive information. Sentr AI helps organisations control, monitor and secure access across their digital environments. Our Identity & Access Management (IAM) solutions strengthen authentication, reduce unnecessary privileges and support secure access across cloud and on-premises systems.',
    image: srv2,
    alt: 'Identity and access management dashboard and analytics',
    capabilities: [
      'Multi-Factor Authentication (MFA).',
      'Identity and access management.',
      'Privileged Access Management (PAM).',
      'Role-based access control.',
      'Just-in-Time privileged access.',
      'Service account security.',
      'Single Sign-On (SSO).',
      'Zero Trust access policies.',
      'User access monitoring and reporting.',
    ],
    ctaText: 'Explore Identity & Access Management',
    ctaLink: '/company/contact',
  },
];

const industrySecurity = [
  {
    title: 'Financial Services',
    desc: 'Protect financial information, secure transactions and strengthen access controls.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <line x1="3" y1="21" x2="21" y2="21" />
        <line x1="3" y1="10" x2="21" y2="10" />
        <polyline points="5 10 12 3 19 10" />
        <line x1="6" y1="14" x2="6" y2="18" />
        <line x1="10" y1="14" x2="10" y2="18" />
        <line x1="14" y1="14" x2="14" y2="18" />
        <line x1="18" y1="14" x2="18" y2="18" />
      </svg>
    ),
  },
  {
    title: 'Healthcare',
    desc: 'Safeguard sensitive records and control access to critical healthcare systems.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <line x1="12" y1="8" x2="12" y2="14" />
        <line x1="9" y1="11" x2="15" y2="11" />
      </svg>
    ),
  },
  {
    title: 'Manufacturing',
    desc: 'Protect connected infrastructure, industrial systems and operational technology.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M2 20h20" />
        <path d="M5 20V8l5 4V8l5 4V4h5v16" />
      </svg>
    ),
  },
  {
    title: 'Technology',
    desc: 'Secure development environments, cloud applications and privileged access.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
        <path d="m7 8 3 3-3 3" />
        <line x1="13" y1="14" x2="17" y2="14" />
      </svg>
    ),
  },
  {
    title: 'Retail & E-commerce',
    desc: 'Protect customer information, payment systems and digital business platforms.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
        <line x1="3" y1="6" x2="21" y2="6" />
        <path d="M16 10a4 4 0 0 1-8 0" />
      </svg>
    ),
  },
];

interface ExpertCyberService {
  num: string;
  title: string;
  desc: string;
  theme: 'vapt' | 'redteam' | 'soc' | 'compliance' | 'advisory';
  image: string;
  icon: React.ReactNode;
}

const expertCyberServices: ExpertCyberService[] = [
  {
    num: '01',
    title: 'Vulnerability Assessment & Penetration Testing (VAPT)',
    desc: 'Identify and mitigate vulnerabilities before they become threats with our expert VAPT services.',
    theme: 'vapt',
    image: whyUs1Img,
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <line x1="22" y1="12" x2="18" y2="12" />
        <line x1="6" y1="12" x2="2" y2="12" />
        <line x1="12" y1="6" x2="12" y2="2" />
        <line x1="12" y1="22" x2="12" y2="18" />
      </svg>
    ),
  },
  {
    num: '02',
    title: 'Red Teaming',
    desc: 'Simulate real-world attacks to test your defenses with our advanced Red Teaming strategies.',
    theme: 'redteam',
    image: secuImg,
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
  },
  {
    num: '03',
    title: 'Security Operations Center (SOC)',
    desc: 'Monitor, detect, and respond to threats in real time with our 24/7 SOC services.',
    theme: 'soc',
    image: serverImg,
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
  },
  {
    num: '04',
    title: 'Managed Compliance',
    desc: 'Ensure adherence to global security standards with our Managed Compliance solutions.',
    theme: 'compliance',
    image: srv1,
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      </svg>
    ),
  },
  {
    num: '05',
    title: 'Consulting & Advisory',
    desc: 'Receive expert guidance to strengthen your cybersecurity posture and align with industry best practices.',
    theme: 'advisory',
    image: handshakeImg,
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
];

export const CybersecurityPage: React.FC = () => {
  const [displayedSubtitle, setDisplayedSubtitle] = useState('');
  const [isTypingDone, setIsTypingDone] = useState(false);
  const servicesScrollRef = useRef<HTMLDivElement>(null);
  const [activeServiceIndex, setActiveServiceIndex] = useState(0);

  const handleServicesScroll = () => {
    if (servicesScrollRef.current) {
      const { scrollLeft, clientWidth } = servicesScrollRef.current;
      if (clientWidth > 0) {
        const newIndex = Math.round(scrollLeft / clientWidth);
        const clamped = Math.max(0, Math.min(cybersecurityServices.length - 1, newIndex));
        if (clamped !== activeServiceIndex) {
          setActiveServiceIndex(clamped);
        }
      }
    }
  };

  const scrollToServiceIndex = (index: number) => {
    if (servicesScrollRef.current) {
      const cards = servicesScrollRef.current.querySelectorAll<HTMLElement>('.cyber-service-card');
      if (cards[index]) {
        cards[index].scrollIntoView({
          behavior: 'smooth',
          block: 'nearest',
          inline: 'start',
        });
        setActiveServiceIndex(index);
      }
    }
  };

  const scrollService = (dir: 'left' | 'right') => {
    const nextIdx =
      dir === 'left'
        ? Math.max(0, activeServiceIndex - 1)
        : Math.min(cybersecurityServices.length - 1, activeServiceIndex + 1);
    scrollToServiceIndex(nextIdx);
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
        const delay = char === '.' ? 200 : char === ',' ? 100 : 18;
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
    <main className="cyber-page">
      {/* ── 1. HERO SECTION ── */}
      <section className="cyber-hero" aria-label="Cybersecurity Solutions Hero">
        {/* Background Image: building.png */}
        <div
          className="cyber-hero__bg"
          style={{ backgroundImage: `url(${buildingImg})` }}
          aria-hidden="true"
        />

        {/* Pure Neutral Dark Dim Overlay (No Blue Screen) */}
        <div className="cyber-hero__overlay" aria-hidden="true" />

        <div className="cyber-container">
          <div className="cyber-hero__inner">
            {/* Headline with animated fluid cyber gradient */}
            <h1 className="cyber-hero__title fade-in-up">
              <span>Protect Your Business.</span>{' '}
              <span className="cyber-hero__title-accent">Secure Your Digital Future.</span>
            </h1>

            {/* Neon Laser Scanning Divider */}
            <div className="cyber-hero__beam-divider" aria-hidden="true">
              <span className="cyber-hero__beam-pulse" />
            </div>

            {/* Subheading with animated typewriter */}
            <p
              className="cyber-hero__subtitle fade-in-up"
              style={{ transitionDelay: '0.14s' }}
              aria-label={FULL_HERO_SUBTITLE}
            >
              <span className="cyber-hero__subtitle-text">{displayedSubtitle}</span>
              <span
                className={`cyber-typing-cursor ${isTypingDone ? 'cyber-typing-cursor--done' : ''}`}
                aria-hidden="true"
              />
            </p>
          </div>
        </div>
      </section>

      {/* ── 2. ENTERPRISE THREAT PROTECTION SECTION ── */}
      <section className="cyber-threat" aria-labelledby="threat-heading">
        <div className="cyber-container">
          <div className="cyber-threat__grid">
            {/* Left Column: Threat Protection Narrative */}
            <div className="cyber-threat__content fade-in-up">
              <div className="cyber-threat__eyebrow">
                <span className="cyber-threat__eyebrow-dot" aria-hidden="true" />
                <span>Enterprise Threat Protection</span>
              </div>

              <h2 id="threat-heading" className="cyber-threat__title">
                Enterprise Threat Protection for a Connected World
              </h2>

              <p className="cyber-threat__lead">
                As businesses become increasingly dependent on cloud platforms, remote work and connected applications, cybersecurity threats are becoming more complex.
              </p>

              {/* Threat Risk Callout */}
              <div className="cyber-threat__callout">
                <div className="cyber-threat__callout-icon" aria-hidden="true">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
                    <line x1="12" y1="9" x2="12" y2="13" />
                    <line x1="12" y1="17" x2="12.01" y2="17" />
                  </svg>
                </div>
                <p className="cyber-threat__callout-text">
                  Phishing attacks, data breaches, compromised accounts and unauthorised access can put your entire organisation at risk.
                </p>
              </div>

              <p className="cyber-threat__desc">
                Sentr AI provides integrated cybersecurity solutions that help businesses protect their digital environments, secure sensitive information and respond to evolving threats. From employee devices and collaboration platforms to cloud infrastructure and user identities, we help create a safer and more resilient IT environment.
              </p>
            </div>

            {/* Right Column: Visual with Gradient Dotted Pattern Behind secu.png */}
            <div className="cyber-threat__visual fade-in-up" style={{ transitionDelay: '0.15s' }}>
              {/* Dotted pattern in gradient style behind the image */}
              <div className="cyber-threat__dots" aria-hidden="true">
                <svg
                  className="cyber-threat__dots-svg"
                  width="520"
                  height="440"
                  viewBox="0 0 520 440"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <linearGradient id="cyberThreatDotsGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#10b981" stopOpacity="0.8" />
                      <stop offset="50%" stopColor="#06b6d4" stopOpacity="0.6" />
                      <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.25" />
                    </linearGradient>
                    <radialGradient id="cyberThreatDotsGlow" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.16" />
                      <stop offset="65%" stopColor="#10b981" stopOpacity="0.05" />
                      <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
                    </radialGradient>
                    <pattern id="cyberThreatDotsPattern" x="0" y="0" width="22" height="22" patternUnits="userSpaceOnUse">
                      <circle cx="3" cy="3" r="2.2" fill="url(#cyberThreatDotsGrad)" />
                    </pattern>
                    <radialGradient id="cyberThreatDotsMask" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="#fff" stopOpacity="1" />
                      <stop offset="70%" stopColor="#fff" stopOpacity="0.75" />
                      <stop offset="100%" stopColor="#fff" stopOpacity="0" />
                    </radialGradient>
                    <mask id="cyberThreatDotsMaskId">
                      <rect width="520" height="440" fill="url(#cyberThreatDotsMask)" />
                    </mask>
                  </defs>
                  <rect width="520" height="440" fill="url(#cyberThreatDotsGlow)" />
                  <rect width="520" height="440" fill="url(#cyberThreatDotsPattern)" mask="url(#cyberThreatDotsMaskId)" />
                </svg>
              </div>

              {/* Main Image Card */}
              <div className="cyber-threat__image-card">
                <img
                  src={secuImg}
                  alt="Enterprise Threat Protection for a Connected World"
                  className="cyber-threat__image"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. OUR CYBERSECURITY SERVICES SECTION (WHITE BACKGROUND - HORIZONTAL CAROUSEL) ── */}
      <section className="cyber-services" aria-labelledby="services-heading">
        <div className="cyber-container">
          {/* Section Header */}
          <div className="cyber-services__header fade-in-up">
            <span className="cyber-services__label">Comprehensive Protection</span>
            <h2 id="services-heading" className="cyber-services__title">
              Complete Protection Across Your Digital Environment
            </h2>
            <p className="cyber-services__sub">
              We take a comprehensive approach to cybersecurity, bringing together user protection, infrastructure security and identity management.
            </p>
          </div>

          {/* Interactive Navigation Control Bar */}
          <div className="cyber-services__nav-bar fade-in-up">
            {/* Quick-Jump Tabs */}
            <div className="cyber-services__tabs" role="tablist" aria-label="Cybersecurity Services">
              {cybersecurityServices.map((service, idx) => (
                <button
                  key={service.id}
                  type="button"
                  role="tab"
                  aria-selected={activeServiceIndex === idx}
                  className={`cyber-services__tab ${activeServiceIndex === idx ? 'cyber-services__tab--active' : ''}`}
                  onClick={() => scrollToServiceIndex(idx)}
                >
                  <span className="cyber-services__tab-title">{service.title}</span>
                </button>
              ))}
            </div>

            {/* Left / Right Arrow Controls + Counter */}
            <div className="cyber-services__controls">
              <button
                type="button"
                className="cyber-services__arrow-btn"
                onClick={() => scrollService('left')}
                disabled={activeServiceIndex === 0}
                aria-label="Previous cybersecurity service"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </button>
              <div className="cyber-services__counter" aria-live="polite">
                <span className="cyber-services__counter-current">0{activeServiceIndex + 1}</span>
                <span className="cyber-services__counter-sep">/</span>
                <span className="cyber-services__counter-total">0{cybersecurityServices.length}</span>
              </div>
              <button
                type="button"
                className="cyber-services__arrow-btn"
                onClick={() => scrollService('right')}
                disabled={activeServiceIndex === cybersecurityServices.length - 1}
                aria-label="Next cybersecurity service"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </button>
            </div>
          </div>

          {/* Horizontal Slider Track Wrapper */}
          <div className="cyber-services__slider-wrap fade-in-up">
            {/* Floating Left/Right Arrows (Desktop) */}
            <button
              type="button"
              className="cyber-services__float-arrow cyber-services__float-arrow--prev"
              onClick={() => scrollService('left')}
              disabled={activeServiceIndex === 0}
              aria-label="Previous card"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>

            <div
              className="cyber-services__track"
              ref={servicesScrollRef}
              onScroll={handleServicesScroll}
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'ArrowLeft') scrollService('left');
                if (e.key === 'ArrowRight') scrollService('right');
              }}
              aria-label="Horizontal list of cybersecurity services. Use left and right arrow keys or navigation buttons to move."
            >
              {cybersecurityServices.map((service) => (
                <article
                  key={service.id}
                  id={service.id}
                  className="cyber-service-card"
                >
                  {/* Content Side */}
                  <div className="cyber-service-card__content">
                    <div className="cyber-service-card__top">
                      <h3 className="cyber-service-card__title">{service.title}</h3>
                    </div>

                    <h4 className="cyber-service-card__tagline">{service.tagline}</h4>
                    <p className="cyber-service-card__desc">{service.desc}</p>

                    {/* Capabilities Box */}
                    <div className="cyber-service-card__capabilities">
                      <h5 className="cyber-service-card__cap-title">Key capabilities:</h5>
                      <ul className="cyber-service-card__cap-grid">
                        {service.capabilities.map((cap, capIdx) => (
                          <li key={capIdx} className="cyber-service-card__cap-item">
                            <svg
                              className="cyber-service-card__cap-icon"
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
                              <polyline points="20 6 9 17 4 12" />
                            </svg>
                            <span>{cap}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Optional Note (SOC 24/7) */}
                    {service.note && (
                      <div className="cyber-service-card__note">
                        <div className="cyber-service-card__note-icon" aria-hidden="true">
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                            <circle cx="12" cy="11" r="2" />
                          </svg>
                        </div>
                        <p className="cyber-service-card__note-text">{service.note}</p>
                      </div>
                    )}

                    {/* CTA Link */}
                    <div className="cyber-service-card__actions">
                      <Link to={service.ctaLink} className="cyber-service-btn">
                        <span>{service.ctaText}</span>
                      </Link>
                    </div>
                  </div>

                  {/* Image Side */}
                  <div className="cyber-service-card__visual">
                    <div className="cyber-service-card__image-wrap">
                      <img
                        src={service.image}
                        alt={service.alt}
                        className="cyber-service-card__image"
                        loading="lazy"
                      />
                      <div className="cyber-service-card__badge-pill">
                        <span>{service.title}</span>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <button
              type="button"
              className="cyber-services__float-arrow cyber-services__float-arrow--next"
              onClick={() => scrollService('right')}
              disabled={activeServiceIndex === cybersecurityServices.length - 1}
              aria-label="Next card"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>

          {/* Pagination Dots at Bottom */}
          <div className="cyber-services__dots" aria-label="Services carousel pagination">
            {cybersecurityServices.map((service, idx) => (
              <button
                key={service.id}
                type="button"
                className={`cyber-services__dot ${activeServiceIndex === idx ? 'cyber-services__dot--active' : ''}`}
                onClick={() => scrollToServiceIndex(idx)}
                aria-label={`Go to slide ${idx + 1}: ${service.title}`}
              >
                <span className="cyber-services__dot-bar" />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3.5 OUR EXPERT CYBER SECURITY SERVICES (STAGGERED CHECKERBOARD GRID) ── */}
      <section className="cyber-expert-section" aria-labelledby="expert-services-heading">
        <div className="cyber-container">
          {/* Section Header */}
          <div className="cyber-expert__header fade-in-up">
            <h2 id="expert-services-heading" className="cyber-expert__title">
              Our Expert Cyber Security Services <br />
              <span className="cyber-expert__title-accent">To Enhance Your Cyber Defences</span>
            </h2>
            <div className="cyber-expert__sub-group">
              <p className="cyber-expert__sub">
                Let Sentr AI ease the challenge of facing the latest threats alone. Discover our Best Cyber Security Services to reduce the burden and enhance your organisation’s cyber resilience.
              </p>
              <p className="cyber-expert__sub-note">
                Sentr AI stands among the top cybersecurity companies in India, offering end-to-end services designed to fortify your digital ecosystem. Whether you need to protect cloud environments or strengthen internal networks, we provide solutions tailored to your unique challenges.
              </p>
            </div>
          </div>

          {/* 5-Column Checkerboard Grid */}
          <div className="cyber-expert__grid fade-in-up">
            {expertCyberServices.map((service, index) => {
              const isCardOnTop = index % 2 === 0; // 01, 03, 05 have Card on Top; 02, 04 have Photo on Top
              return (
                <div
                  key={service.num}
                  className={`cyber-expert__col cyber-expert__col--${isCardOnTop ? 'card-top' : 'photo-top'} cyber-expert__col--${service.theme}`}
                  style={{ transitionDelay: `${0.08 * (index + 1)}s` }}
                >
                  {isCardOnTop ? (
                    <>
                      {/* Content Card (Top) with pointer down */}
                      <div className={`cyber-expert-card cyber-expert-card--theme-${service.theme} cyber-expert-card--top`}>
                        <h3 className="cyber-expert-card__title">{service.title}</h3>
                        <p className="cyber-expert-card__desc">{service.desc}</p>
                        <div className="cyber-expert-card__pointer cyber-expert-card__pointer--down" aria-hidden="true" />
                      </div>

                      {/* Photo Card (Bottom) with number badge */}
                      <div className="cyber-expert-photo">
                        <img
                          src={service.image}
                          alt={service.title}
                          className="cyber-expert-photo__img"
                          loading="lazy"
                        />
                        <div className="cyber-expert-photo__overlay" />
                        <div className="cyber-expert-photo__badge">
                          <span className="cyber-expert-photo__badge-num">{service.num}</span>
                          <span className="cyber-expert-photo__badge-icon">{service.icon}</span>
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      {/* Photo Card (Top) with number badge */}
                      <div className="cyber-expert-photo">
                        <img
                          src={service.image}
                          alt={service.title}
                          className="cyber-expert-photo__img"
                          loading="lazy"
                        />
                        <div className="cyber-expert-photo__overlay" />
                        <div className="cyber-expert-photo__badge">
                          <span className="cyber-expert-photo__badge-num">{service.num}</span>
                          <span className="cyber-expert-photo__badge-icon">{service.icon}</span>
                        </div>
                      </div>

                      {/* Content Card (Bottom) with pointer up */}
                      <div className={`cyber-expert-card cyber-expert-card--theme-${service.theme} cyber-expert-card--bottom`}>
                        <div className="cyber-expert-card__pointer cyber-expert-card__pointer--up" aria-hidden="true" />
                        <h3 className="cyber-expert-card__title">{service.title}</h3>
                        <p className="cyber-expert-card__desc">{service.desc}</p>
                      </div>
                    </>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 4. INDUSTRY-SPECIFIC SECURITY ── */}
      <section className="cyber-industry" aria-labelledby="industry-heading">
        {/* Dim Neutral Background Image (building.png) */}
        <div
          className="cyber-industry__bg"
          style={{ backgroundImage: `url(${buildingImg})` }}
          aria-hidden="true"
        />
        <div className="cyber-industry__overlay" aria-hidden="true" />

        <div className="cyber-container">
          <div className="cyber-industry__header fade-in-up">
            <span className="cyber-industry__label">Industry-Specific Security</span>
            <h2 id="industry-heading" className="cyber-industry__title">
              Security Solutions for Different Business Environments
            </h2>
            <p className="cyber-industry__sub">
              Every industry faces different security challenges. Our solutions can be aligned with the specific needs of your organisation.
            </p>
          </div>

          <div className="cyber-industry__grid">
            {industrySecurity.map((item, index) => (
              <div
                key={item.title}
                className="cyber-industry-item fade-in-up"
                style={{ transitionDelay: `${0.07 * (index + 1)}s` }}
              >
                <div className="cyber-industry-item__icon-wrap">
                  {item.icon}
                </div>
                <h3 className="cyber-industry-item__title">{item.title}</h3>
                <p className="cyber-industry-item__desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. WHY CHOOSE SENTR AI (BENTO GRID - REFERENCED DESIGN) ── */}
      <section className="cyber-why" aria-labelledby="why-heading">
        <div className="cyber-container">
          {/* Section Header */}
          <div className="cyber-why__header fade-in-up">
            <span className="cyber-why__label">Why Choose Sentr AI for Cybersecurity?</span>
            <h2 id="why-heading" className="cyber-why__title">
              Security That Adapts to Your Business
            </h2>
            <p className="cyber-why__sub">
              Cybersecurity is not just about preventing attacks. It is about creating an environment where your business can operate confidently.
            </p>
            <p className="cyber-why__sub-lead">
              With Sentr AI, organisations benefit from:
            </p>
          </div>

          {/* Bento Grid */}
          <div className="cyber-bento">
            {/* Card 1: Left Tall Card (Integrated Security) */}
            <div className="cyber-bento-card cyber-bento-card--tall fade-in-up">
              <div className="cyber-bento-card__visual">
                <img
                  src={srv4}
                  alt="Integrated cybersecurity infrastructure"
                  className="cyber-bento-card__img"
                  loading="lazy"
                />
                <div className="cyber-bento-card__img-fade" aria-hidden="true" />
              </div>
              <div className="cyber-bento-card__body">
                <div className="cyber-bento-card__tag">
                  <span className="cyber-bento-card__tag-dot" />
                  <span>Integrated Security</span>
                </div>
                <h3 className="cyber-bento-card__title">Integrated Security</h3>
                <p className="cyber-bento-card__desc">
                  Connect user, application, endpoint and cloud security through a coordinated approach.
                </p>
              </div>
            </div>

            {/* Right Bento Group (2 Rows) */}
            <div className="cyber-bento-group">
              {/* Row 1 (Top) */}
              <div className="cyber-bento-row cyber-bento-row--top">
                {/* Card 2: Soft Blue Stat Card (Proactive Threat Protection) */}
                <div className="cyber-bento-card cyber-bento-card--stat-blue fade-in-up">
                  <div className="cyber-bento-card__big-num">95%</div>
                  <h3 className="cyber-bento-card__title">Proactive Threat Protection</h3>
                  <p className="cyber-bento-card__desc">
                    Identify vulnerabilities, monitor suspicious activities and reduce security risks before they disrupt operations.
                  </p>
                </div>

                {/* Card 3: Wide Card with 3D Shield Badge (Improved Visibility) */}
                <div className="cyber-bento-card cyber-bento-card--shield-wide fade-in-up">
                  <div className="cyber-bento-card__shield-badge">
                    <div className="cyber-bento-shield-icon" aria-hidden="true">
                      <svg width="34" height="34" viewBox="0 0 24 24" fill="none">
                        <path
                          d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
                          fill="url(#shieldGlowGrad)"
                          stroke="#0284c7"
                          strokeWidth="1.2"
                        />
                        <path
                          d="m9 12 2 2 4-4"
                          stroke="#ffffff"
                          strokeWidth="2.4"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <defs>
                          <linearGradient id="shieldGlowGrad" x1="4" y1="2" x2="20" y2="22" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#38bdf8" />
                            <stop offset="1" stopColor="#0284c7" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                    <div className="cyber-bento-card__shield-stat">$100M+</div>
                    <div className="cyber-bento-card__shield-caption">Protected Operations</div>
                  </div>
                  <div className="cyber-bento-card__shield-content">
                    <h3 className="cyber-bento-card__title">Improved Visibility</h3>
                    <p className="cyber-bento-card__desc">
                      Gain better visibility into user access, infrastructure activity and sensitive data movement.
                    </p>
                    <Link to="/company/contact" className="cyber-bento-card__link">
                      <span>Explore visibility</span>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <line x1="5" y1="12" x2="19" y2="12" />
                        <polyline points="12 5 19 12 12 19" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Row 2 (Bottom) */}
              <div className="cyber-bento-row cyber-bento-row--bottom">
                {/* Card 4: Wide Card with Mesh Gradient & 2 Pills (Business Continuity) */}
                <div className="cyber-bento-card cyber-bento-card--mesh fade-in-up">
                  <div className="cyber-bento-card__mesh-content">
                    <h3 className="cyber-bento-card__title">Business Continuity</h3>
                    <p className="cyber-bento-card__desc">
                      Strengthen your ability to respond to incidents, recover systems and maintain essential business operations.
                    </p>
                  </div>
                  <div className="cyber-bento-card__mesh-visual" aria-hidden="true">
                    <div className="cyber-bento-mesh-glow" />
                    <div className="cyber-bento-pills">
                      <div className="cyber-bento-pill">
                        <div className="cyber-bento-pill__icon">
                          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
                            <path d="M3 3v5h5" />
                            <polyline points="12 7 12 12 15 15" />
                          </svg>
                        </div>
                        <div className="cyber-bento-pill__text">
                          <strong>Rapid Recovery</strong>
                          <span>Fast incident restoration</span>
                        </div>
                      </div>
                      <div className="cyber-bento-pill">
                        <div className="cyber-bento-pill__icon">
                          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                            <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
                            <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
                            <line x1="6" y1="6" x2="6.01" y2="6" />
                            <line x1="6" y1="18" x2="6.01" y2="18" />
                          </svg>
                        </div>
                        <div className="cyber-bento-pill__text">
                          <strong>System Resilience</strong>
                          <span>Zero downtime operations</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card 5: Mint/Teal Stat with Floating 3D Pink Badge (Scalable Solutions) */}
                <div className="cyber-bento-card cyber-bento-card--mint fade-in-up">
                  <div className="cyber-bento-card__pulse-badge" aria-hidden="true">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                    </svg>
                  </div>
                  <div className="cyber-bento-card__mint-stat">45%</div>
                  <h3 className="cyber-bento-card__title">Scalable Solutions</h3>
                  <p className="cyber-bento-card__desc">
                    Build security capabilities that grow alongside your organisation and changing technology requirements.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default CybersecurityPage;

