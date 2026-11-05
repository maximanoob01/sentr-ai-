import React from 'react';
import herooImg from '../assets/solution/heroo.png';

interface FeatureItem {
  id: string;
  title: string;
  desc: string;
  icon: React.ReactNode;
}

const features: FeatureItem[] = [
  {
    id: 'cameras',
    title: 'Works with Your Existing Cameras',
    desc: 'Connects directly to your CCTV and IP cameras in minutes — no expensive new cameras or rewiring required.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M23 7l-7 5 7 5V7z" />
        <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
      </svg>
    ),
  },
  {
    id: 'ai',
    title: 'Watches & Understands Live Feeds',
    desc: 'Smart computer vision monitors footage 24/7 to detect people, vehicles, package movements, and safety hazards the second they occur.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a4 4 0 014 4v1h1a3 3 0 013 3v6a3 3 0 01-3 3H7a3 3 0 01-3-3V9a3 3 0 013-3h1V6a4 4 0 014-4z" />
        <circle cx="9" cy="13" r="1.5" fill="currentColor" />
        <circle cx="15" cy="13" r="1.5" fill="currentColor" />
        <path d="M9 17c1 1 2 1.5 3 1.5s2-.5 3-1.5" />
      </svg>
    ),
  },
  {
    id: 'alerts',
    title: 'Instant Alerts with Photo Proof',
    desc: 'The moment something abnormal is spotted, your team gets an instant alert with clear photo snapshots to intervene immediately.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9" />
        <path d="M13.73 21a2 2 0 01-3.46 0" />
      </svg>
    ),
  },
  {
    id: 'erp',
    title: 'Connects with Your Business Tools',
    desc: 'Easily sends alerts, hold requests, and logs into your warehouse software, ERP, inventory tools, and team chat apps.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
      </svg>
    ),
  },
  {
    id: 'warehouse',
    title: 'Keeps Warehouse Work Moving Safely',
    desc: 'Tracks package handling, loading bays, forklift paths, and restricted areas to prevent delays and workplace accidents.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
  },
  {
    id: 'analytics',
    title: 'Tamper-Proof Records & Reports',
    desc: 'Preserves timestamped visual proof and incident histories to resolve customer disputes, trace lost goods, and maintain compliance.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
        <circle cx="12" cy="17" r="1.5" fill="currentColor" />
      </svg>
    ),
  },
];

export const AindriNodeGraph: React.FC = () => {
  return (
    <section className="aindri-node-section section-y" aria-label="Aindri System Architecture">
      {/* Background Ambience & Lighting */}
      <div className="aindri-node__bg" aria-hidden="true">
        <img src={herooImg} alt="" className="aindri-node__bg-img" />
        <div className="aindri-node__bg-overlay"></div>
        <div className="aindri-node__glow aindri-node__glow--1"></div>
        <div className="aindri-node__glow aindri-node__glow--2"></div>
        <div className="aindri-node__glow aindri-node__glow--center"></div>
        <div className="aindri-node__grid-pattern"></div>
      </div>

      <div className="container relative z-10">
        {/* Section Header */}
        <div className="aindri-node__header fade-in-up">
          <h2 className="aindri-node__heading">
            Aindri at the <span className="aindri-node__heading-accent">Center of Your Operations</span>
          </h2>
          <p className="aindri-node__sub">
            Connect your existing cameras, smart AI detection, instant alerts, and everyday business tools into one central hub that spots issues and acts immediately.
          </p>
        </div>

        {/* Cards Grid without the odd circular figure */}
        <div className="aindri-node__cards-grid fade-in-up">
          {features.map((feature) => (
            <div key={feature.id} className="aindri-node__card">
              <div className="aindri-node__card-icon-wrap">
                {feature.icon}
              </div>
              <div className="aindri-node__card-content">
                <h3 className="aindri-node__card-title">{feature.title}</h3>
                <p className="aindri-node__card-desc">{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
