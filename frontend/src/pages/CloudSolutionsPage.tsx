import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './CloudSolutionsPage.css';
import herooBg from '../assets/heroo.png';
import msLogo from '../assets/alliance logo/2.png';
import amazonLogo from '../assets/cloud solutions/amazon.png';
import cloudLogo from '../assets/cloud solutions/cloud.png';
import m365Bg from '../assets/cloud solutions/365.png';
import azureBg from '../assets/cloud solutions/azure.png';
import awsBg from '../assets/cloud solutions/aws.png';
import rdsBg from '../assets/cloud solutions/rds.png';
import abcBg from '../assets/cloud solutions/abc.png';
import hhhBg from '../assets/cloud solutions/hhh.png';
import ind1 from '../assets/cloud solutions/1.png';
import ind2 from '../assets/cloud solutions/2.png';
import ind3 from '../assets/cloud solutions/3.png';
import ind4 from '../assets/cloud solutions/4.png';
import buildingBg from '../assets/cloud solutions/building.png';
import oracleImg from '../assets/alliance logo/oracle.png';
import googleCloudImg from '../assets/alliance logo/googlecloud.png';

const FULL_CLOUD_SUBTITLE =
  'Modernize infrastructure, migrate workloads, strengthen cloud security, and build scalable solutions with Microsoft and Azure technologies.';

/* ── SVG Icons ── */
const IconCompass = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/>
  </svg>
);
const IconServer = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="8" rx="2"/><rect x="2" y="14" width="20" height="8" rx="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/>
  </svg>
);
const IconArrow = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
  </svg>
);
const IconShield = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
  </svg>
);
const IconCode = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
  </svg>
);
const IconDatabase = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>
  </svg>
);
const IconCloud = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/>
  </svg>
);
const IconMonitor = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>
  </svg>
);

/* ── Data ── */
const IconSearch = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>
);
const IconFileText = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><path d="M14 2v6h6"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
);
const IconLayers = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>
);
const IconCloudUpload = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 16l-4-4-4 4"/><path d="M12 12v9"/><path d="M20.39 18.39A5 5 0 0018 9h-1.26A8 8 0 103 16.3"/></svg>
);
const IconChart = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>
);

const services = [
  {
    icon: <IconCompass />,
    title: 'Cloud Strategy & Consulting',
    desc: 'Understand your current environment, define your cloud goals and create a practical roadmap for moving forward.',
    caps: ['Cloud assessment', 'Architecture planning', 'Workload planning', 'Technology roadmap', 'Cloud readiness'],
    cta: 'Explore Strategy',
  },
  {
    icon: <IconServer />,
    title: 'Cloud Infrastructure',
    desc: 'Build reliable cloud infrastructure for your applications, workloads, data and business operations.',
    caps: ['Compute', 'Storage', 'Networking', 'Virtual infrastructure', 'Resource management'],
    cta: 'Explore Infrastructure',
  },
  {
    icon: <IconArrow />,
    title: 'Cloud Migration',
    desc: 'Move applications, workloads and data from traditional infrastructure to the cloud through a structured migration process.',
    caps: ['Migration assessment', 'Workload planning', 'Application migration', 'Data migration', 'Post-migration support'],
    cta: 'Explore Migration',
  },
  {
    icon: <IconShield />,
    title: 'Cloud Security',
    desc: 'Protect your cloud environment with security controls across identity, access, infrastructure, applications and data.',
    caps: ['Identity & access', 'Cloud security', 'Infrastructure protection', 'Security monitoring', 'Access controls'],
    cta: 'Explore Cloud Security',
  },
  {
    icon: <IconCode />,
    title: 'Application Modernization',
    desc: 'Modernize existing applications and prepare them for scalable, cloud-based environments.',
    caps: ['Application assessment', 'Modernization planning', 'Cloud deployment', 'Integration', 'Performance improvement'],
    cta: 'Explore Modernization',
  },
  {
    icon: <IconDatabase />,
    title: 'Data & Analytics',
    desc: 'Create a stronger cloud foundation for managing data, analytics, reporting and intelligent applications.',
    caps: ['Cloud data infrastructure', 'Data storage', 'Data integration', 'Analytics', 'Reporting'],
    cta: 'Explore Data Solutions',
  },
  {
    icon: <IconCloud />,
    title: 'Backup & Disaster Recovery',
    desc: 'Build resilient cloud environments designed to protect important workloads and support business continuity.',
    caps: ['Cloud backup', 'Recovery planning', 'Disaster recovery', 'Business continuity', 'Workload protection'],
    cta: 'Explore Business Continuity',
  },
  {
    icon: <IconMonitor />,
    title: 'Managed Cloud Services',
    desc: 'Keep your cloud environment secure, available and optimized with ongoing monitoring and operational support.',
    caps: ['Cloud monitoring', 'Performance monitoring', 'Security monitoring', 'Resource management', 'Optimization'],
    cta: 'Explore Managed Cloud',
  },
];

const journeySteps = [
  { num: '01', icon: <IconSearch />, title: 'Discover', desc: 'Understand your infrastructure, applications, data and business requirements.' },
  { num: '02', icon: <IconFileText />, title: 'Assess', desc: 'Identify workloads, dependencies, risks and opportunities.' },
  { num: '03', icon: <IconLayers />, title: 'Design', desc: 'Create a cloud architecture aligned with your business and technical needs.' },
  { num: '04', icon: <IconCloudUpload />, title: 'Migrate', desc: 'Move workloads and data through a structured and controlled process.' },
  { num: '05', icon: <IconShield />, title: 'Secure', desc: 'Protect users, infrastructure, applications and information.' },
  { num: '06', icon: <IconChart />, title: 'Manage & Optimize', desc: 'Monitor your environment and continuously improve performance, security and efficiency.' },
];

const platforms = [
  {
    badgeImg: msLogo,
    title: 'Microsoft Azure',
    desc: 'Build, migrate, secure and manage enterprise workloads using Microsoft Azure.',
    midImg: [azureBg, m365Bg, hhhBg],
    caps: ['Azure infrastructure', 'Cloud migration', 'Microsoft 365', 'Cloud security', 'Application modernization', 'Data & AI'],
    cta: 'Explore Microsoft & Azure',
    href: '/microsoft-azure-solutions',
  },
  {
    badgeImg: amazonLogo,
    title: 'AWS',
    desc: 'Build scalable cloud environments for applications, infrastructure, data and modern workloads using AWS.',
    midImg: [awsBg, rdsBg, abcBg],
    caps: ['AWS infrastructure', 'Cloud migration', 'Application hosting', 'Storage & databases', 'Security', 'Monitoring'],
    cta: 'Explore AWS Solutions',
    href: '/aws-cloud-solutions',
  },
  {
    badgeImg: cloudLogo,
    title: 'Other Cloud Environments',
    desc: 'Technology environments may include multiple cloud platforms, private infrastructure or hybrid architectures. Sentr AI can help organizations design an approach around their specific requirements.',
    midImg: [oracleImg, googleCloudImg],
    caps: ['Hybrid cloud', 'Multi-cloud', 'Private infrastructure', 'Cloud integration', 'Workload planning', 'Infrastructure management'],
    cta: 'Discuss Your Requirements',
    href: '/company/contact',
  },
];

const cloudDeliveryModels = [
  {
    num: '01',
    title: 'Private Cloud',
    desc: 'Get the control and security of your own cloud environment. We help you decide which applications to move, when to move them and how to manage everything easily.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a7 7 0 0 0-6.9 6A5 5 0 0 0 2 13a5 5 0 0 0 5 5h1" />
        <rect width="10" height="7" x="11" y="14" rx="1.5" />
        <path d="M14 14v-2a2 2 0 1 1 4 0v2" />
      </svg>
    ),
  },
  {
    num: '02',
    title: 'Managed Hosting',
    desc: 'Already have servers and systems? We manage them for you, with clear monitoring, faster issue fixing and strong security. We also help you move toward a modern setup over time.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="8" x="2" y="2" rx="2" ry="2" />
        <rect width="20" height="8" x="2" y="14" rx="2" ry="2" />
        <line x1="6" x2="6.01" y1="6" y2="6" />
        <line x1="6" x2="6.01" y1="18" y2="18" />
      </svg>
    ),
  },
  {
    num: '03',
    title: 'Public Cloud',
    desc: 'We help you plan, move and manage your workloads on major cloud platforms. From first advice to daily operations, one team looks after it.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
      </svg>
    ),
  },
  {
    num: '04',
    title: 'Cloud Platforms and Automation',
    desc: 'Deploy applications faster using containers and automation. We set up your platform so it runs smoothly with less manual work.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z" />
        <path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65" />
        <path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65" />
      </svg>
    ),
  },
  {
    num: '05',
    title: 'Network Services',
    desc: 'A strong network keeps your business connected. We design, upgrade and support networks that are reliable, fast and secure.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="16" y="16" width="6" height="6" rx="1" />
        <rect x="2" y="16" width="6" height="6" rx="1" />
        <rect x="9" y="2" width="6" height="6" rx="1" />
        <path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3" />
        <path d="M12 12V8" />
      </svg>
    ),
  },
];

const industries = [
  { img: ind1, title: 'Manufacturing', desc: 'Support modern manufacturing environments with scalable infrastructure, connected systems and intelligent technology.' },
  { img: ind2, title: 'Warehousing & Logistics', desc: 'Build technology environments that support connected operations, applications and data.' },
  { img: ind3, title: 'Enterprise', desc: 'Modernize enterprise infrastructure, applications, security and workplace technology.' },
  { img: ind4, title: 'Growing Businesses', desc: 'Build scalable cloud infrastructure that can evolve with changing business requirements.' },
];

const faqs = [
  {
    q: 'What cloud services does Sentr AI provide?',
    a: 'Sentr AI provides cloud-related services across strategy, infrastructure, migration, security, application modernization, data, backup, disaster recovery and managed cloud operations, depending on the customer\'s requirements.',
  },
  {
    q: 'Does Sentr AI work with Microsoft Azure?',
    a: 'Yes. Microsoft Azure is one of the cloud platforms covered within Sentr AI\'s cloud solutions. Dedicated information about Microsoft and Azure services is available on our Microsoft & Azure Solutions page.',
  },
  {
    q: 'Does Sentr AI work with AWS?',
    a: 'Sentr AI can support AWS-related cloud requirements depending on the customer\'s environment and project requirements. Contact our team to discuss your specific needs.',
  },
  {
    q: 'Can you migrate our existing infrastructure to the cloud?',
    a: 'Yes. Cloud migration can include assessment, planning, workload migration, application migration, data migration and post-migration support depending on the project.',
  },
  {
    q: 'Can you manage our cloud environment after migration?',
    a: 'Managed cloud services can include monitoring, maintenance, security support, resource management and optimization depending on the engagement.',
  },
  {
    q: 'Can you help with hybrid or multi-cloud environments?',
    a: 'Where appropriate, Sentr AI can help organizations plan technology environments that combine multiple cloud platforms or cloud infrastructure with existing private infrastructure.',
  },
  {
    q: 'How do we get started?',
    a: 'Contact our team and share your current environment, business requirements and objectives. We can then discuss an appropriate cloud strategy.',
  },
];

/* Ecosystem node positions & icons */
const ecoNodes = [
  {
    label: 'Cybersecurity',
    top: '12%',
    left: '50%',
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        <path d="m9 12 2 2 4-4"/>
      </svg>
    ),
  },
  {
    label: 'Data Protection',
    top: '24%',
    left: '77%',
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="5" rx="9" ry="3"/>
        <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/>
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>
      </svg>
    ),
  },
  {
    label: 'Microsoft Azure',
    top: '50%',
    left: '86%',
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
      </svg>
    ),
  },
  {
    label: 'Hybrid Infrastructure',
    top: '76%',
    left: '77%',
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="8" x="2" y="2" rx="2" ry="2"/>
        <rect width="20" height="8" x="2" y="14" rx="2" ry="2"/>
        <line x1="6" x2="6.01" y1="6" y2="6"/>
        <line x1="6" x2="6.01" y1="18" y2="18"/>
      </svg>
    ),
  },
  {
    label: 'Zero Trust Access',
    top: '88%',
    left: '50%',
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
        <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
      </svg>
    ),
  },
  {
    label: 'AWS Cloud',
    top: '76%',
    left: '23%',
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"/>
        <path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65"/>
      </svg>
    ),
  },
  {
    label: 'Identity & IAM',
    top: '50%',
    left: '14%',
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M22 21v-2a4 4 0 0 0-3-3.87"/>
      </svg>
    ),
  },
  {
    label: 'AI Threat Telemetry',
    top: '24%',
    left: '23%',
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
      </svg>
    ),
  },
];

export const CloudSolutionsPage: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [activeAzureImg, setActiveAzureImg] = useState(0);
  const [displayedSubtitle, setDisplayedSubtitle] = useState('');
  const [isTypingDone, setIsTypingDone] = useState(false);
  const servicesScrollRef = React.useRef<HTMLDivElement>(null);
  const location = useLocation();

  // Subtitle typing animation
  useEffect(() => {
    let currentIndex = 0;
    let timeoutId: number;

    const typeNextChar = () => {
      if (currentIndex < FULL_CLOUD_SUBTITLE.length) {
        currentIndex++;
        setDisplayedSubtitle(FULL_CLOUD_SUBTITLE.slice(0, currentIndex));
        const char = FULL_CLOUD_SUBTITLE[currentIndex - 1];
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

  const scrollServices = (dir: 'left' | 'right') => {
    if (servicesScrollRef.current) {
      // Scroll by exactly the width of the container
      const scrollAmount = servicesScrollRef.current.clientWidth;
      servicesScrollRef.current.scrollBy({ left: dir === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    if (location.hash) {
      const scrollToHash = () => {
        const element = document.querySelector(location.hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      };
      const t1 = setTimeout(scrollToHash, 80);
      const t2 = setTimeout(scrollToHash, 250);
      return () => {
        clearTimeout(t1);
        clearTimeout(t2);
      };
    } else {
      window.scrollTo(0, 0);
    }
  }, [location.pathname, location.hash]);

  // Auto-scroll the services carousel every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      if (servicesScrollRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = servicesScrollRef.current;
        // If reached the end, scroll back to start
        if (scrollLeft + clientWidth >= scrollWidth - 10) {
          servicesScrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          scrollServices('right');
        }
      }
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Alternate platform card images every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveAzureImg((prev) => prev + 1);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  /* Scroll-reveal */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.1 }
    );
    document.querySelectorAll('.fade-in-up').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <main className="cs-page">
      {/* ── HERO ── */}
      <section className="cs-hero" aria-label="Cloud Solutions Hero">
        {/* Photo background */}
        <div
          className="cs-hero__bg"
          style={{
            backgroundImage: `url(${herooBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'brightness(0.65) contrast(1.05)',
            opacity: 0.78,
          }}
        />
        {/* Dark overlay */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(135deg, rgba(6,12,26,0.82) 0%, rgba(10,22,40,0.76) 100%)',
            zIndex: 1,
          }}
          aria-hidden="true"
        />
        <div className="cs-hero__glow-1" aria-hidden="true" />
        <div className="cs-hero__glow-2" aria-hidden="true" />

        <div className="cs-container">
          <div className="cs-hero__inner">
            {/* Content */}
            <div className="cs-hero__content">
              <h1 className="cs-hero__headline fade-in-up" style={{ transitionDelay: '0.1s' }}>
                <span className="cs-hero__headline-main">Modern Cloud Infrastructure.</span>
              </h1>
              <p
                className="cs-hero__sub fade-in-up"
                style={{ transitionDelay: '0.15s' }}
                aria-label={FULL_CLOUD_SUBTITLE}
              >
                {displayedSubtitle}
                <span
                  className={`cs-typing-cursor ${isTypingDone ? 'cs-typing-cursor--done' : ''}`}
                  aria-hidden="true"
                />
              </p>

              <div className="cs-hero__actions fade-in-up" style={{ transitionDelay: '0.2s' }}>
                <Link to="/products/aindri" className="cs-btn-primary">
                  Explore Aindri
                </Link>
                <Link to="/solutions" className="cs-btn-white">
                  Explore Our Solutions
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PLATFORMS ── */}
      <section className="cs-platforms" aria-labelledby="platforms-heading">
        <div className="cs-container">
          <div className="cs-eyebrow fade-in-up">Cloud Platforms</div>
          <h2 id="platforms-heading" className="cs-section-heading cs-platforms__heading fade-in-up">
            Cloud Solutions Across Leading Platforms
          </h2>
          <p className="cs-section-sub fade-in-up">
            Different businesses have different technology requirements. Sentr AI can help organizations evaluate and work with the cloud platform that best fits their workloads, architecture, security requirements and business objectives.
          </p>
          <div className="cs-platforms__grid">
            {platforms.map((p, i) => (
              <article key={p.title} className="cs-platform-card fade-in-up" style={{ transitionDelay: `${i * 0.1}s` }}>
                {p.badgeImg ? (
                  <img src={p.badgeImg} alt={p.title} style={{ height: '48px', marginBottom: '1.25rem', alignSelf: 'flex-start', objectFit: 'contain' }} />
                ) : (
                  <span className="cs-platform-card__badge">{(p as any).badge}</span>
                )}
                <h3 className="cs-platform-card__title">{p.title}</h3>
                <p className="cs-platform-card__desc">{p.desc}</p>
                {p.midImg && Array.isArray(p.midImg) ? (
                  <div style={{ position: 'relative', width: '85%', height: '130px', margin: '0 auto 1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    {p.midImg.map((imgSrc, idx) => (
                      <img 
                        key={idx}
                        src={imgSrc} 
                        alt="" 
                        style={{ 
                          position: 'absolute', 
                          top: 0, 
                          left: 0, 
                          width: '100%', 
                          height: '100%', 
                          borderRadius: '8px', 
                          objectFit: 'contain', 
                          transition: 'opacity 0.6s ease-in-out', 
                          opacity: (activeAzureImg % p.midImg.length) === idx ? 1 : 0 
                        }} 
                      />
                    ))}
                  </div>
                ) : p.midImg ? (
                  <img src={p.midImg as unknown as string} alt="" style={{ width: '80%', height: 'auto', margin: '0 auto 1.5rem', borderRadius: '8px', objectFit: 'contain' }} />
                ) : null}
                <div className="cs-platform-card__caps" aria-label="Platform capabilities">
                  {p.caps.map((cap) => (
                    <span key={cap} className="cs-platform-card__cap-tag">{cap}</span>
                  ))}
                </div>
                <Link to={p.href} className="cs-btn-primary" style={{ alignSelf: 'flex-start' }}>
                  {p.cta} <IconArrow />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── CLOUD DELIVERY MODELS & SERVICES ── */}
      <section className="cs-delivery" aria-label="Cloud Delivery Models">
        <div
          className="cs-delivery__bg"
          style={{ backgroundImage: `url(${buildingBg})` }}
          aria-hidden="true"
        />
        <div className="cs-delivery__overlay" aria-hidden="true" />
        <div className="cs-container">
          <div className="cs-delivery-grid">
            {cloudDeliveryModels.map((item, i) => (
              <article
                key={item.title}
                className={`cs-delivery-card cs-delivery-card--color-${i + 1} fade-in-up`}
                style={{ transitionDelay: `${0.1 + i * 0.08}s` }}
              >
                <div className="cs-delivery-card__top">
                  <div className="cs-delivery-card__icon" aria-hidden="true">
                    {item.icon}
                  </div>
                  <span className="cs-delivery-card__num">{item.num}</span>
                </div>
                <h3 className="cs-delivery-card__title">{item.title}</h3>
                <p className="cs-delivery-card__desc">{item.desc}</p>
                <Link
                  to="/company/contact"
                  className="cs-delivery-card__link"
                  aria-label={`Know more about ${item.title}`}
                >
                  <span className="cs-delivery-card__link-text">Know More</span>
                  <IconArrow />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section id="services" className="cs-services" aria-labelledby="services-heading">
        <div className="cs-services__dots" aria-hidden="true" />
        <div className="cs-container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="cs-services__header-wrapper">
            <div className="cs-services__header-text">
              <div className="cs-eyebrow fade-in-up" style={{ color: '#2563eb', justifyContent: 'flex-start' }}>Cloud Services</div>
              <h2 id="services-heading" className="cs-section-heading fade-in-up" style={{ textAlign: 'left' }}>
                Everything You Need to Build and Manage Your Cloud
              </h2>
              <p className="cs-section-sub fade-in-up" style={{ textAlign: 'left', margin: '0', maxWidth: '680px' }}>
                From your first cloud migration to ongoing optimization, our services cover the complete cloud journey.
              </p>
            </div>
            <div className="cs-services__controls fade-in-up">
              <button onClick={() => scrollServices('left')} className="cs-carousel-btn" aria-label="Previous services">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 18l-6-6 6-6"/></svg>
              </button>
              <button onClick={() => scrollServices('right')} className="cs-carousel-btn" aria-label="Next services">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6"/></svg>
              </button>
            </div>
          </div>
          <div className="cs-services__grid" ref={servicesScrollRef}>
            {services.map((svc, i) => (
              <article key={svc.title} className="cs-service-card fade-in-up" style={{ transitionDelay: `${i * 0.05}s` }}>
                <div className="cs-service-card__icon" aria-hidden="true">{svc.icon}</div>
                <h3 className="cs-service-card__title">{svc.title}</h3>
                <p className="cs-service-card__desc">{svc.desc}</p>
                <ul className="cs-service-card__caps" aria-label="Capabilities">
                  {svc.caps.map((cap) => (
                    <li key={cap} className="cs-service-card__cap">{cap}</li>
                  ))}
                </ul>
                <Link to="/company/contact" className="cs-service-card__cta">
                  {svc.cta} <IconArrow />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>




      {/* ── CLOUD SECURITY ── */}
      <section className="cs-security" aria-labelledby="security-heading">
        <div className="cs-container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="cs-security__grid">
            <div className="cs-security__left">
              <h2 id="security-heading" className="cs-security__heading fade-in-up">
                Security Built Into Your <span className="cs-security__heading-accent">Cloud Environment</span>
              </h2>

              {/* Security Pillars */}
              <div className="cs-security__pillars fade-in-up">
                <div className="cs-sec-pillar">
                  <div className="cs-sec-pillar__icon">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                      <path d="m9 12 2 2 4-4"/>
                    </svg>
                  </div>
                  <div className="cs-sec-pillar__body">
                    <h4 className="cs-sec-pillar__title">Zero Trust Security</h4>
                    <p className="cs-sec-pillar__desc">Every user is verified. Everyone gets only the access they need.</p>
                  </div>
                </div>

                <div className="cs-sec-pillar">
                  <div className="cs-sec-pillar__icon">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
                    </svg>
                  </div>
                  <div className="cs-sec-pillar__body">
                    <h4 className="cs-sec-pillar__title">Round-the-Clock Threat Watch</h4>
                    <p className="cs-sec-pillar__desc">Live monitoring that spots risks and stops them fast.</p>
                  </div>
                </div>

                <div className="cs-sec-pillar">
                  <div className="cs-sec-pillar__icon">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                      <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                    </svg>
                  </div>
                  <div className="cs-sec-pillar__body">
                    <h4 className="cs-sec-pillar__title">Complete Security and Compliance</h4>
                    <p className="cs-sec-pillar__desc">Your data stays encrypted and your systems stay in line with the rules, across Azure, AWS and private clouds.</p>
                  </div>
                </div>
              </div>

              <div className="cs-security__actions fade-in-up">
                <Link to="/solutions/cybersecurity" className="cs-security__btn-primary">
                  Explore Cybersecurity
                </Link>
              </div>
            </div>

            {/* Ecosystem Diagram */}
            <div className="cs-ecosystem-wrapper fade-in-up" style={{ transitionDelay: '0.15s' }}>
              <div className="cs-ecosystem" aria-label="Cloud security ecosystem" role="img">
                {/* Ambient Glow */}
                <div className="cs-eco__glow-backdrop" aria-hidden="true" />

                {/* Radar Sweep Scanner */}
                <div className="cs-eco__radar-sweep" aria-hidden="true" />

                {/* Sonar Pulse Waves */}
                <div className="cs-eco__sonar-pulse cs-eco__sonar-1" aria-hidden="true" />
                <div className="cs-eco__sonar-pulse cs-eco__sonar-2" aria-hidden="true" />
                <div className="cs-eco__sonar-pulse cs-eco__sonar-3" aria-hidden="true" />

                {/* Concentric Rings */}
                <div className="cs-eco__ring cs-eco__ring-inner" aria-hidden="true" />
                <div className="cs-eco__ring cs-eco__ring-mid" aria-hidden="true" />
                <div className="cs-eco__ring cs-eco__ring-outer" aria-hidden="true" />

                {/* Connecting Rays SVG */}
                <svg className="cs-eco__rays-svg" viewBox="0 0 500 500" aria-hidden="true">
                  {ecoNodes.map((node, idx) => {
                    const nx = parseFloat(node.left) * 5;
                    const ny = parseFloat(node.top) * 5;
                    return (
                      <line
                        key={`ray-${idx}`}
                        x1="250"
                        y1="250"
                        x2={nx}
                        y2={ny}
                        stroke="rgba(56, 189, 248, 0.22)"
                        strokeWidth="1.2"
                        strokeDasharray="4 4"
                      />
                    );
                  })}
                </svg>

                {/* Center Core */}
                <div className="cs-eco__center">
                  <div className="cs-eco__center-shield-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                      <path d="m9 12 2 2 4-4"/>
                    </svg>
                  </div>
                  <span className="cs-eco__center-title">SENTR AI</span>
                  <span className="cs-eco__center-tag">CLOUD DEFENSE</span>
                  <span className="cs-eco__center-status">
                    <span className="cs-eco__center-status-dot" />
                    ACTIVE
                  </span>
                </div>

                {/* Orbit Nodes */}
                <div className="cs-eco__nodes-layer">
                  {ecoNodes.map((node) => (
                    <div
                      key={node.label}
                      className="cs-eco__node"
                      style={{ top: node.top, left: node.left }}
                    >
                      <span className="cs-eco__node-icon">{node.icon}</span>
                      <span className="cs-eco__node-text">{node.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CLOUD JOURNEY ── */}
      <section className="cs-journey" aria-labelledby="journey-heading">
        <div className="cs-container">
          <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 4rem' }}>
            <h2 id="journey-heading" className="cs-journey__heading fade-in-up">
              From Cloud Planning to <span style={{ color: '#2563eb' }}>Continuous Improvement</span>
            </h2>
          </div>
          <div className="cs-journey__steps">
            <div className="cs-journey__moving-arrow" aria-hidden="true">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="M12 5l7 7-7 7"/></svg>
            </div>
            {journeySteps.map((step, i) => (
              <div key={step.num} className="cs-journey__step fade-in-up" style={{ transitionDelay: `${i * 0.08}s` }}>
                <div className="cs-journey__num">{step.num}</div>
                <div className="cs-journey__icon-wrap">
                  {step.icon}
                </div>
                <div className="cs-journey__title">{step.title}</div>
                <p className="cs-journey__desc">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY SENTR AI ── */}
      <section 
        className="cs-why" 
        aria-labelledby="why-heading"
        style={{
          backgroundImage: `url(${ind1})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          position: 'relative'
        }}
      >
        <div className="cs-why__overlay"></div>
        <div className="cs-container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="cs-why__layout">
            <div className="cs-why__header fade-in-up">
              <div className="cs-eyebrow" style={{ color: '#2563eb' }}>Why Sentr AI</div>
              <h2 id="why-heading" className="cs-section-heading">Why Work With Sentr AI?</h2>
            </div>

            <div className="cs-why__body fade-in-up" style={{ transitionDelay: '0.1s' }}>
              <p className="cs-why__text">
                We start with your business and technology needs, not a fixed architecture. Cloud work sits alongside cybersecurity, enterprise IT, infrastructure and intelligent technologies, so nothing is planned in isolation. Security is part of every stage, from planning to implementation. We design environments that can grow and change as your business does. And depending on the engagement, our support can continue after launch into monitoring, management and optimization.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHAT DOES YOUR BUSINESS NEED ── */}
      <section 
        className="cs-needs" 
        aria-labelledby="needs-heading"
        style={{
          backgroundImage: `url(${buildingBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          position: 'relative'
        }}
      >
        <div className="cs-needs__overlay" style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(15, 23, 42, 0.75)', zIndex: 0 }}></div>
        <div className="cs-container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="cs-eyebrow fade-in-up" style={{ color: '#60a5fa' }}>Quick Guide</div>
          <h2 id="needs-heading" className="cs-section-heading cs-needs__heading fade-in-up">
            What Does Your Business Need?
          </h2>
          <div className="cs-needs__grid">
            {[
              { need: 'Need to move to cloud?', service: 'Cloud Migration', desc: 'Move existing workloads, applications and data into a modern cloud environment.', link: '/company/contact' },
              { need: 'Need to build new infrastructure?', service: 'Cloud Infrastructure', desc: 'Build scalable infrastructure for modern applications and business operations.', link: '/company/contact' },
              { need: 'Already running in the cloud?', service: 'Managed Cloud', desc: 'Monitor, secure and optimize your existing cloud environment.', link: '/company/contact' },
            ].map((card, i) => {
              const variantClass = i === 0 ? 'cs-need-card--white' : i === 1 ? 'cs-need-card--dark' : 'cs-need-card--blue';
              return (
                <Link
                  key={card.service}
                  to={card.link}
                  className={`cs-need-card fade-in-up ${variantClass}`}
                  style={{ transitionDelay: `${i * 0.1}s`, display: 'block', textDecoration: 'none' }}
                >
                  <div className="cs-need-card__need">{card.need}</div>
                  <div className="cs-need-card__service">{card.service}</div>
                  <div className="cs-need-card__desc">{card.desc}</div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── INDUSTRIES ── */}
      <section className="cs-industries" aria-labelledby="industries-heading">
        <div className="cs-container">
          <div className="cs-eyebrow fade-in-up" style={{ color: '#2563eb' }}>Industries</div>
          <h2 id="industries-heading" className="cs-section-heading fade-in-up">
            Cloud Solutions for Different Business Needs
          </h2>
          <div className="cs-industries__grid">
            {industries.map((ind, i) => (
              <div key={ind.title} className="cs-industry-card fade-in-up" style={{ transitionDelay: `${i * 0.07}s` }}>
                <div className="cs-industry-card__img-wrap">
                  <img src={ind.img} alt={ind.title} className="cs-industry-card__img" />
                </div>
                <div className="cs-industry-card__content">
                  <div className="cs-industry-card__title">{ind.title}</div>
                  <div className="cs-industry-card__desc">{ind.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="cs-faq" aria-labelledby="faq-heading">
        <div className="cs-container cs-faq__container">
          <div className="cs-faq__left">
            <div className="cs-faq__eyebrow">
              <span className="cs-faq__dot"></span> FAQ
            </div>
            <h2 id="faq-heading" className="cs-faq__heading">
              Frequently Asked<br/>Questions
            </h2>
            <div className="cs-faq__contact-block">
              <h3>Still have a question?</h3>
              <p>Don't worry we're free for consultation.</p>
              <Link to="/company/contact" className="cs-faq__contact-btn">
                Contact Us
              </Link>
            </div>
          </div>
          <div className="cs-faq__right">
            <div className="cs-faq__list" role="list">
              {faqs.map((faq, i) => (
                <div
                  key={i}
                  className={`cs-faq-item${openFaq === i ? ' open' : ''}`}
                  role="listitem"
                >
                  <button
                    className="cs-faq-item__q"
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    aria-expanded={openFaq === i}
                    aria-controls={`faq-answer-${i}`}
                  >
                    <div className="cs-faq-item__q-content">
                      <span className="cs-faq-item__text">{faq.q}</span>
                    </div>
                    <span className="cs-faq-item__icon" aria-hidden="true">
                      {openFaq === i ? '-' : '+'}
                    </span>
                  </button>
                  <div className="cs-faq-item__a" id={`faq-answer-${i}`} role="region">
                    <p>{faq.a}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

    </main>
  );
};
