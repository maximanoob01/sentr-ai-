import React, { useEffect, useRef } from 'react';
import './CoreCapabilities.css';

const capabilities = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <rect x="2" y="2" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M7 9L9.5 6L12 9L15 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M2 20L8 20M14 20L20 20M11 16V20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="17" cy="5" r="2.5" fill="var(--accent)" opacity="0.8"/>
      </svg>
    ),
    title: 'AI-Driven Camera Vision',
    desc: 'Monitor machine states, detect production anomalies and track operational flow using computer vision on live camera feeds.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M11 2L13.5 7H19L14.5 10.5L16 16L11 12.5L6 16L7.5 10.5L3 7H8.5L11 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
        <circle cx="11" cy="9" r="2" fill="currentColor" opacity="0.3"/>
      </svg>
    ),
    title: 'IoT & Sensor Connectivity',
    desc: 'Connect industrial sensors, measurement devices and field instruments to aggregate real-time operational data from the floor.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <rect x="3" y="3" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.5"/>
        <rect x="12" y="3" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.5"/>
        <rect x="3" y="12" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.5"/>
        <rect x="12" y="12" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M10 6.5H12M10 15.5H12M6.5 10V12M15.5 10V12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: 'OPC Server Integration',
    desc: 'Directly connect machines, PLCs, SCADA systems and industrial controllers using OPC-UA and OPC-DA protocols.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M4 17L4 8M8 17V12M12 17V10M16 17V6M20 17V4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.6"/>
        <path d="M3 7L8 13L12 9L16 11L20 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="8" cy="13" r="2" fill="var(--accent)" opacity="0.7"/>
        <circle cx="16" cy="11" r="2" fill="var(--accent)" opacity="0.7"/>
      </svg>
    ),
    title: 'Real-Time Monitoring',
    desc: 'A unified live dashboard giving your operations team full visibility into production, equipment status and key performance metrics.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M11 3C7.13 3 4 6.13 4 10C4 13.87 7.13 17 11 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M11 17C13.76 17 16 14.76 16 12C16 9.24 13.76 7 11 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="11" cy="10" r="2.5" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M17 15L20 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="19" cy="18" r="2" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    ),
    title: 'Predictive Insights',
    desc: 'AI-assisted pattern recognition helps identify potential issues before they cause downtime or quality failures.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <rect x="2" y="6" width="18" height="12" rx="2" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M6 6V4C6 3.45 6.45 3 7 3H15C15.55 3 16 3.45 16 4V6" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M7 11H10M7 14H12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="15" cy="12.5" r="2.5" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M16.8 14.3L18 15.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Testing Equipment Integration',
    desc: 'Capture and analyse results from quality testing and measurement equipment, reducing manual data entry and improving traceability.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M11 3L20 8V14L11 19L2 14V8L11 3Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
        <path d="M11 3V19M2 8L11 13L20 8" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    ),
    title: 'ERP & MES Integration',
    desc: 'Connect production, inventory and quality data to your existing enterprise systems, eliminating data silos across operations.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M4 14C4 11.8 5.8 10 8 10H14C16.2 10 18 11.8 18 14C18 16.2 16.2 18 14 18H8C5.8 18 4 16.2 4 14Z" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M8 10V7C8 5.3 9.3 4 11 4C12.7 4 14 5.3 14 7V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="11" cy="14" r="1.5" fill="currentColor"/>
        <path d="M11 14V16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Energy Monitoring',
    desc: 'Track power consumption at machine and line level, identify energy wastage and support efficiency improvement initiatives.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M3 9L11 3L19 9V19C19 19.55 18.55 20 18 20H4C3.45 20 3 19.55 3 19V9Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
        <rect x="8" y="14" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.5"/>
        <circle cx="11" cy="11" r="2" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    ),
    title: 'Bottleneck Detection',
    desc: 'Identify production slowdowns, workflow bottlenecks and equipment inefficiencies across the factory floor in real time.',
  },
];

export const CoreCapabilities: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.05 }
    );
    const elements = sectionRef.current?.querySelectorAll('.fade-in-up');
    elements?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="capabilities section-y" ref={sectionRef} aria-labelledby="capabilities-heading">
      <div className="container">
        <div className="capabilities__header fade-in-up">
          <span className="section-label">Core Capabilities</span>
          <h2 id="capabilities-heading" className="capabilities__heading">
            What Indri Connects,<br />Monitors and Analyses
          </h2>
          <p className="capabilities__sub">
            Indri's capabilities are built around the real-world needs of industrial operations —
            connecting every data source that matters and turning it into structured, actionable intelligence.
          </p>
        </div>

        <div className="capabilities__grid">
          {capabilities.map((cap, i) => (
            <div
              key={cap.title}
              className="feature-card capabilities__card fade-in-up"
              style={{ transitionDelay: `${Math.floor(i / 3) * 0.1}s` }}
            >
              <div className="icon-box icon-box-lg">{cap.icon}</div>
              <h3 className="capabilities__card-title">{cap.title}</h3>
              <p className="capabilities__card-desc">{cap.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
