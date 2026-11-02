import React, { useState, useEffect } from 'react';
import herooImg from '../assets/solution/heroo.png';
import aindriLogo from '../assets/aindrii.png';

interface NodeItem {
  id: string;
  title: string;
  shortLabel: string;
  desc: string;
  angle: number;
  distance: number;
  icon: React.ReactNode;
}

const nodes: NodeItem[] = [
  {
    id: 'cameras',
    title: 'Works with Your Existing Cameras',
    shortLabel: 'Security Cameras',
    desc: 'Connects directly to your CCTV and IP cameras in minutes — no expensive new cameras or rewiring required.',
    angle: 225,
    distance: 220,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <path d="M23 7l-7 5 7 5V7z" />
        <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
      </svg>
    ),
  },
  {
    id: 'ai',
    title: 'Watches & Understands Live Feeds',
    shortLabel: 'Real-Time AI Vision',
    desc: 'Smart computer vision monitors footage 24/7 to detect people, vehicles, package movements, and safety hazards the second they occur.',
    angle: 315,
    distance: 220,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
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
    shortLabel: 'Instant Alerts',
    desc: 'The moment something abnormal is spotted, your team gets an instant alert with clear photo snapshots to intervene immediately.',
    angle: 0,
    distance: 220,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9" />
        <path d="M13.73 21a2 2 0 01-3.46 0" />
      </svg>
    ),
  },
  {
    id: 'erp',
    title: 'Connects with Your Business Tools',
    shortLabel: 'Software Sync',
    desc: 'Easily sends alerts, hold requests, and logs into your warehouse software, ERP, inventory tools, and team chat apps.',
    angle: 180,
    distance: 220,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
      </svg>
    ),
  },
  {
    id: 'warehouse',
    title: 'Keeps Warehouse Work Moving Safely',
    shortLabel: 'Floor Operations',
    desc: 'Tracks package handling, loading bays, forklift paths, and restricted areas to prevent delays and workplace accidents.',
    angle: 135,
    distance: 220,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
  },
  {
    id: 'analytics',
    title: 'Tamper-Proof Records & Reports',
    shortLabel: 'Audit & Evidence',
    desc: 'Preserves timestamped visual proof and incident histories to resolve customer disputes, trace lost goods, and maintain compliance.',
    angle: 45,
    distance: 220,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
        <circle cx="12" cy="17" r="1.5" fill="currentColor" />
      </svg>
    ),
  },
];

function toRad(deg: number) {
  return (deg * Math.PI) / 180;
}

export const AindriNodeGraph: React.FC = () => {
  const [activeNode, setActiveNode] = useState<string>('cameras');
  const [isAutoPlaying, setIsAutoPlaying] = useState<boolean>(true);

  const cx = 500;
  const cy = 320;
  const viewW = 1000;
  const viewH = 640;

  // Auto-cycle through nodes smoothly when user is not actively interacting
  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setActiveNode((current) => {
        const currentIndex = nodes.findIndex((n) => n.id === current);
        const nextIndex = (currentIndex + 1) % nodes.length;
        return nodes[nextIndex].id;
      });
    }, 3800);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const handleMouseEnter = (id: string) => {
    setActiveNode(id);
    setIsAutoPlaying(false);
  };

  const handleMouseLeave = () => {
    setIsAutoPlaying(true);
  };

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

        {/* Side-by-side: Glass Cards LEFT, Interactive Graph RIGHT */}
        <div className="aindri-node__body">
          {/* LEFT — Cards with enhanced typography and icons */}
          <div className="aindri-node__cards-grid fade-in-up">
            {nodes.map((node) => {
              const isActive = activeNode === node.id;
              return (
                <div
                  key={node.id}
                  className={`aindri-node__card ${isActive ? 'aindri-node__card--active' : ''}`}
                  onMouseEnter={() => handleMouseEnter(node.id)}
                  onMouseLeave={handleMouseLeave}
                  onClick={() => handleMouseEnter(node.id)}
                >
                  <div className="aindri-node__card-icon-wrap">
                    {node.icon}
                  </div>
                  <div className="aindri-node__card-content">
                    <h3 className="aindri-node__card-title">{node.title}</h3>
                    <p className="aindri-node__card-desc">{node.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* RIGHT — High-Tech Interactive SVG Graph */}
          <div className="aindri-node__graph-container fade-in-up">
            <svg
              viewBox={`0 0 ${viewW} ${viewH}`}
              className="aindri-node__svg"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                {/* Dynamic Line Gradients */}
                {nodes.map((node) => {
                  const nx = cx + Math.cos(toRad(node.angle)) * node.distance;
                  const ny = cy + Math.sin(toRad(node.angle)) * node.distance;
                  return (
                    <linearGradient
                      key={node.id}
                      id={`beam-${node.id}`}
                      x1={cx}
                      y1={cy}
                      x2={nx}
                      y2={ny}
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.9" />
                      <stop offset="50%" stopColor="#818cf8" stopOpacity="0.75" />
                      <stop offset="100%" stopColor="#0ea5e9" stopOpacity="0.9" />
                    </linearGradient>
                  );
                })}

                <radialGradient id="centerCoreGrad" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#1e293b" />
                  <stop offset="70%" stopColor="#0f172a" />
                  <stop offset="100%" stopColor="#030712" />
                </radialGradient>

                <radialGradient id="nodeFillGrad" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="rgba(30, 41, 59, 0.95)" />
                  <stop offset="100%" stopColor="rgba(15, 23, 42, 0.98)" />
                </radialGradient>

                <radialGradient id="nodeActiveGrad" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="rgba(14, 165, 233, 0.28)" />
                  <stop offset="100%" stopColor="rgba(15, 23, 42, 0.98)" />
                </radialGradient>

                <filter id="softGlow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="3" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>

                <filter id="intenseGlow" x="-40%" y="-40%" width="180%" height="180%">
                  <feGaussianBlur stdDeviation="6" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>

                <filter id="greenGlow" x="-30%" y="-30%" width="160%" height="160%">
                  <feGaussianBlur stdDeviation="4" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {/* Central Ambient Aura */}
              <circle cx={cx} cy={cy} r="260" fill="radial-gradient(circle, rgba(56, 189, 248, 0.08) 0%, transparent 70%)" />
              <circle cx={cx} cy={cy} r="160" fill="none" stroke="rgba(56, 189, 248, 0.08)" strokeWidth="1" strokeDasharray="3 6" />

              {/* Connecting Beams to Nodes */}
              {nodes.map((node, i) => {
                const nx = cx + Math.cos(toRad(node.angle)) * node.distance;
                const ny = cy + Math.sin(toRad(node.angle)) * node.distance;
                const isActive = activeNode === node.id;

                return (
                  <g key={`beam-group-${node.id}`}>
                    {/* Underlying guide conduit */}
                    <line
                      x1={cx}
                      y1={cy}
                      x2={nx}
                      y2={ny}
                      stroke="rgba(56, 189, 248, 0.12)"
                      strokeWidth="1.5"
                      strokeDasharray="4 6"
                    />

                    {/* Animated energy laser beam */}
                    <line
                      x1={cx}
                      y1={cy}
                      x2={nx}
                      y2={ny}
                      stroke={isActive ? '#38bdf8' : `url(#beam-${node.id})`}
                      strokeWidth={isActive ? 3.5 : 2}
                      filter={isActive ? 'url(#intenseGlow)' : 'url(#softGlow)'}
                      className={`aindri-beam-line ${isActive ? 'aindri-beam-line--active' : ''}`}
                    />

                    {/* Traveling data packets */}
                    <circle
                      cx={cx + (nx - cx) * 0.45}
                      cy={cy + (ny - cy) * 0.45}
                      r={isActive ? 4.5 : 3}
                      fill={isActive ? '#ffffff' : '#38bdf8'}
                      filter="url(#softGlow)"
                      className="aindri-packet"
                      style={{ animationDelay: `${(i + 1) * 0.3}s` }}
                    />
                    <circle
                      cx={cx + (nx - cx) * 0.78}
                      cy={cy + (ny - cy) * 0.78}
                      r={isActive ? 4 : 2.5}
                      fill={isActive ? '#67e8f9' : '#818cf8'}
                      filter="url(#softGlow)"
                      className="aindri-packet"
                      style={{ animationDelay: `${(i + 1) * 0.3 + 0.6}s` }}
                    />
                  </g>
                );
              })}

              {/* Center Core Hub */}
              <g className="aindri-center-core" style={{ cursor: 'default' }}>
                {/* Rotating telemetry rings */}
                <circle
                  cx={cx}
                  cy={cy}
                  r="86"
                  fill="none"
                  stroke="rgba(56, 189, 248, 0.22)"
                  strokeWidth="1.5"
                  strokeDasharray="6 8"
                  className="aindri-orbit-ring"
                />
                <circle
                  cx={cx}
                  cy={cy}
                  r="72"
                  fill="none"
                  stroke="rgba(129, 140, 248, 0.25)"
                  strokeWidth="1"
                  strokeDasharray="3 7"
                  className="aindri-orbit-ring-rev"
                />

                {/* Pulsing Core Energy */}
                <circle
                  cx={cx}
                  cy={cy}
                  r="58"
                  fill="rgba(56, 189, 248, 0.08)"
                  stroke="rgba(56, 189, 248, 0.4)"
                  strokeWidth="1.5"
                  className="aindri-core-pulse"
                />

                {/* Main Core Housing */}
                <rect
                  x={cx - 44}
                  y={cy - 44}
                  width="88"
                  height="88"
                  rx="22"
                  ry="22"
                  fill="url(#centerCoreGrad)"
                  stroke="rgba(56, 189, 248, 0.7)"
                  strokeWidth="2"
                  filter="url(#softGlow)"
                />

                {/* Aindri Logo Emblem */}
                <image
                  href={aindriLogo}
                  x={cx - 32}
                  y={cy - 34}
                  width="64"
                  height="44"
                  preserveAspectRatio="xMidYMid meet"
                />

                {/* Center Core Branding */}
                <text
                  x={cx}
                  y={cy + 25}
                  fill="#38bdf8"
                  fontSize="8.5"
                  fontWeight="800"
                  textAnchor="middle"
                  letterSpacing="0.14em"
                >
                  AINDRI CORE
                </text>

                {/* Live Core Status Light */}
                <g transform={`translate(${cx}, ${cy + 58})`}>
                  <rect
                    x="-46"
                    y="-10"
                    width="92"
                    height="20"
                    rx="10"
                    fill="rgba(15, 23, 42, 0.9)"
                    stroke="rgba(16, 185, 129, 0.35)"
                    strokeWidth="1"
                  />
                  <circle cx="-30" cy="0" r="3" fill="#10b981" filter="url(#greenGlow)" />
                  <text
                    x="4"
                    y="3.5"
                    fill="#a7f3d0"
                    fontSize="9"
                    fontWeight="700"
                    textAnchor="middle"
                    letterSpacing="0.06em"
                  >
                    LIVE & SYNCED
                  </text>
                </g>
              </g>

              {/* 6 Peripheral Interactive Nodes */}
              {nodes.map((node) => {
                const nx = cx + Math.cos(toRad(node.angle)) * node.distance;
                const ny = cy + Math.sin(toRad(node.angle)) * node.distance;
                const isActive = activeNode === node.id;

                return (
                  <g
                    key={`svg-node-${node.id}`}
                    className={`aindri-svg-node ${isActive ? 'aindri-svg-node--active' : ''}`}
                    onMouseEnter={() => handleMouseEnter(node.id)}
                    onMouseLeave={handleMouseLeave}
                    onClick={() => handleMouseEnter(node.id)}
                    style={{ cursor: 'pointer' }}
                  >
                    {/* Outer Glow Halo on Active */}
                    {isActive && (
                      <circle
                        cx={nx}
                        cy={ny}
                        r="48"
                        fill="rgba(56, 189, 248, 0.18)"
                        filter="url(#intenseGlow)"
                      />
                    )}

                    {/* Node Box Outer Border */}
                    <rect
                      x={nx - 36}
                      y={ny - 36}
                      width="72"
                      height="72"
                      rx="18"
                      ry="18"
                      fill={isActive ? 'url(#nodeActiveGrad)' : 'url(#nodeFillGrad)'}
                      stroke={isActive ? '#38bdf8' : 'rgba(56, 189, 248, 0.3)'}
                      strokeWidth={isActive ? 2.5 : 1.2}
                      filter={isActive ? 'url(#intenseGlow)' : 'none'}
                      style={{ transition: 'all 0.28s ease' }}
                    />

                    {/* Pill Label underneath Node */}
                    <g transform={`translate(${nx}, ${ny + 50})`}>
                      <rect
                        x="-64"
                        y="-12"
                        width="128"
                        height="24"
                        rx="12"
                        fill={isActive ? 'rgba(2, 132, 199, 0.35)' : 'rgba(15, 23, 42, 0.88)'}
                        stroke={isActive ? '#38bdf8' : 'rgba(56, 189, 248, 0.22)'}
                        strokeWidth={isActive ? 1.5 : 1}
                        style={{ transition: 'all 0.25s ease' }}
                      />
                      <text
                        x="0"
                        y="4"
                        fill={isActive ? '#ffffff' : '#cbd5e1'}
                        fontSize="10"
                        fontWeight="700"
                        textAnchor="middle"
                        letterSpacing="0.02em"
                        style={{ transition: 'fill 0.25s ease' }}
                      >
                        {node.shortLabel}
                      </text>
                    </g>
                  </g>
                );
              })}
            </svg>

            {/* HTML Overlay Icons for crisp rendering and clickability */}
            {nodes.map((node) => {
              const nx = cx + Math.cos(toRad(node.angle)) * node.distance;
              const ny = cy + Math.sin(toRad(node.angle)) * node.distance;
              const isActive = activeNode === node.id;

              return (
                <div
                  key={`html-icon-${node.id}`}
                  className={`aindri-node__icon-overlay ${isActive ? 'aindri-node__icon-overlay--active' : ''}`}
                  style={{
                    left: `${(nx / viewW) * 100}%`,
                    top: `${(ny / viewH) * 100}%`,
                  }}
                  onMouseEnter={() => handleMouseEnter(node.id)}
                  onMouseLeave={handleMouseLeave}
                  onClick={() => handleMouseEnter(node.id)}
                >
                  <div className="aindri-node__icon-glyph">{node.icon}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
