import React from 'react';
import aindriiImg from '../assets/aindri/aindri.png';

interface Node {
  id: string;
  label: string;
  sublabel: string;
  desc: string;
  icon: React.ReactNode;
  angle: number; // degrees from center
  distance: number; // px from center
}

const nodes: Node[] = [
  {
    id: 'cameras',
    label: '01 — CCTV / IP Cameras',
    sublabel: 'Existing Camera Infrastructure',
    desc: 'Connect existing security cameras and live video feeds without requiring a complete hardware overhaul.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <path d="M23 7l-7 5 7 5V7z"/><rect x="1" y="5" width="15" height="14" rx="2" ry="2"/>
      </svg>
    ),
    angle: 225,
    distance: 220,
  },
  {
    id: 'ai',
    label: '02 — AI + Computer Vision',
    sublabel: 'See & Understand',
    desc: 'Detect people, products, activities, unusual movement, and potential anomalies in real time.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <circle cx="12" cy="12" r="10"/><circle cx="12" cy="10" r="3"/><path d="M7 20.662V19a2 2 0 012-2h6a2 2 0 012 2v1.662"/>
        <path d="M16 3.13a4 4 0 010 7.75M8 3.13a4 4 0 000 7.75"/>
      </svg>
    ),
    angle: 315,
    distance: 220,
  },
  {
    id: 'alerts',
    label: '03 — Alerts & Intervention',
    sublabel: 'Detect → Alert → Act',
    desc: 'Generate real-time alerts with snapshot evidence and support high-priority intervention workflows.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 01-3.46 0"/>
        <circle cx="19" cy="5" r="4" fill="#ef4444" stroke="none"/>
      </svg>
    ),
    angle: 0,
    distance: 220,
  },
  {
    id: 'erp',
    label: '04 — ERP / Enterprise Systems',
    sublabel: 'Connect Your Operations',
    desc: 'Designed to integrate with existing CRM, dispatch, ERP, and other enterprise systems.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>
      </svg>
    ),
    angle: 180,
    distance: 220,
  },
  {
    id: 'warehouse',
    label: '05 — Warehouse & Operations',
    sublabel: 'Operational Intelligence',
    desc: 'Monitor product movement, handling activity, warehouse operations, and process events.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>
      </svg>
    ),
    angle: 135,
    distance: 220,
  },
  {
    id: 'analytics',
    label: '06 — Analytics & Evidence',
    sublabel: 'Actionable Visibility',
    desc: 'Capture relevant event evidence and give teams the information needed to investigate and respond quickly.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
      </svg>
    ),
    angle: 45,
    distance: 220,
  },
];

function toRad(deg: number) {
  return (deg * Math.PI) / 180;
}

export const AindriNodeGraph: React.FC = () => {
  // Center of the SVG viewport
  const cx = 500;
  const cy = 320;
  const viewW = 1000;
  const viewH = 640;

  return (
    <section className="aindri-node-section section-y">
      <div className="container">
        <div className="aindri-node__header fade-in-up">
          <span className="section-label">How It All Connects</span>
          <h2 className="aindri-node__heading">
            Aindri at the Center of Your Operations
          </h2>
          <p className="aindri-node__sub">
            A single intelligence layer that connects your cameras, data, teams, and systems into one unified response network.
          </p>
        </div>

        {/* SVG Graph — desktop */}
        <div className="aindri-node__graph fade-in-up">
          <svg
            viewBox={`0 0 ${viewW} ${viewH}`}
            className="aindri-node__svg"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              {nodes.map((node) => {
                const nx = cx + Math.cos(toRad(node.angle)) * node.distance;
                const ny = cy + Math.sin(toRad(node.angle)) * node.distance;
                return (
                  <linearGradient
                    key={node.id}
                    id={`grad-${node.id}`}
                    x1={cx} y1={cy} x2={nx} y2={ny}
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#818cf8" stopOpacity="0.4" />
                  </linearGradient>
                );
              })}
              <filter id="glow">
                <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
              <filter id="glow-strong">
                <feGaussianBlur stdDeviation="8" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Background dots */}
            <pattern id="dots" x="0" y="0" width="30" height="30" patternUnits="userSpaceOnUse">
              <circle cx="1.5" cy="1.5" r="1" fill="rgba(148,163,184,0.15)" />
            </pattern>
            <rect width={viewW} height={viewH} fill="url(#dots)" />

            {/* Connection lines */}
            {nodes.map((node) => {
              const nx = cx + Math.cos(toRad(node.angle)) * node.distance;
              const ny = cy + Math.sin(toRad(node.angle)) * node.distance;
              return (
                <g key={`line-${node.id}`}>
                  {/* Base dim line */}
                  <line
                    x1={cx} y1={cy} x2={nx} y2={ny}
                    stroke="rgba(99,102,241,0.2)"
                    strokeWidth="1.5"
                    strokeDasharray="6 4"
                  />
                  {/* Animated glowing line */}
                  <line
                    x1={cx} y1={cy} x2={nx} y2={ny}
                    stroke={`url(#grad-${node.id})`}
                    strokeWidth="2"
                    filter="url(#glow)"
                    className={`aindri-node__line aindri-node__line--${node.id}`}
                  />
                  {/* Dot at midpoint */}
                  <circle
                    cx={(cx + nx) / 2}
                    cy={(cy + ny) / 2}
                    r="3"
                    fill="#38bdf8"
                    filter="url(#glow)"
                    className={`aindri-node__dot aindri-node__dot--${node.id}`}
                  />
                </g>
              );
            })}

            {/* Center ring glow */}
            <circle cx={cx} cy={cy} r="64" fill="rgba(56,189,248,0.04)" stroke="rgba(56,189,248,0.15)" strokeWidth="1" />
            <circle cx={cx} cy={cy} r="52" fill="rgba(15,23,42,0.95)" stroke="rgba(56,189,248,0.3)" strokeWidth="1.5" className="aindri-node__center-ring" />

            {/* Center node bg */}
            <rect
              x={cx - 44} y={cy - 44} width="88" height="88"
              rx="20" ry="20"
              fill="url(#centerGrad)"
            />
            <defs>
              <linearGradient id="centerGrad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#0f172a" />
                <stop offset="100%" stopColor="#1e293b" />
              </linearGradient>
            </defs>
            <rect
              x={cx - 44} y={cy - 44} width="88" height="88"
              rx="20" ry="20"
              fill="none"
              stroke="rgba(56,189,248,0.5)"
              strokeWidth="1.5"
              filter="url(#glow)"
            />

            {/* Peripheral nodes */}
            {nodes.map((node) => {
              const nx = cx + Math.cos(toRad(node.angle)) * node.distance;
              const ny = cy + Math.sin(toRad(node.angle)) * node.distance;
              return (
                <g key={`node-${node.id}`} className={`aindri-node__icon-g aindri-node__icon-g--${node.id}`}>
                  <rect
                    x={nx - 38} y={ny - 38} width="76" height="76"
                    rx="16" ry="16"
                    fill="rgba(15,23,42,0.9)"
                  />
                  <rect
                    x={nx - 38} y={ny - 38} width="76" height="76"
                    rx="16" ry="16"
                    fill="none"
                    stroke="rgba(56,189,248,0.3)"
                    strokeWidth="1"
                    filter="url(#glow)"
                  />
                </g>
              );
            })}
          </svg>

          {/* Overlaid HTML icons on nodes */}
          {nodes.map((node) => {
            const nx = cx + Math.cos(toRad(node.angle)) * node.distance;
            const ny = cy + Math.sin(toRad(node.angle)) * node.distance;
            const xPct = (nx / viewW) * 100;
            const yPct = (ny / viewH) * 100;
            return (
              <div
                key={`icon-${node.id}`}
                className="aindri-node__icon-wrapper"
                style={{ left: `${xPct}%`, top: `${yPct}%` }}
              >
                <div className="aindri-node__icon-inner">
                  {node.icon}
                </div>
              </div>
            );
          })}

          {/* Center logo overlay */}
          <div className="aindri-node__center-logo">
            <img src={aindriiImg} alt="Aindri" />
          </div>
        </div>

        {/* Info cards below graph */}
        <div className="aindri-node__cards fade-in-up">
          {nodes.map((node, i) => (
            <div key={node.id} className="aindri-node__card" style={{ animationDelay: `${i * 0.08}s` }}>
              <div className="aindri-node__card-icon">{node.icon}</div>
              <div className="aindri-node__card-body">
                <span className="aindri-node__card-label">{node.label}</span>
                <h4 className="aindri-node__card-title">{node.sublabel}</h4>
                <p className="aindri-node__card-desc">{node.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
