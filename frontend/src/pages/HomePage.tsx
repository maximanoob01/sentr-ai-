import React from 'react';
import { Link } from 'react-router-dom';
import { Hero } from '../components/home/Hero';
import { TechStrip } from '../components/home/TechStrip';
import { IndriIntro } from '../components/home/IndriIntro';
import { MagazineFeature } from '../components/home/MagazineFeature';
import { HowIndriWorks } from '../components/home/HowIndriWorks';
import { SecondaryServices } from '../components/home/SecondaryServices';
import { FinalCTA } from '../components/home/FinalCTA';
import { BlogSection } from '../components/home/BlogSection';
import { Partnerships } from '../components/home/Partnerships';
import { Testimonials } from '../components/home/Testimonials';
import './HomePage.css';

import whyImg1 from '../assets/why us/1.png';
import whyImg2 from '../assets/why us/2.png';
import whyImg3 from '../assets/why us/3.png';
import whyImg4 from '../assets/why us/4.png';
import whyImg5 from '../assets/why us/5.png';

// Inline Why Sentr AI section
const WhySentrAI: React.FC = () => {
  const pillars = [
    {
      num: '01',
      tag: 'Engineering',
      title: 'Dedicated Engineering Team',
      desc: 'Work with experienced technology professionals who understand your business requirements and build solutions around your operational needs—not one-size-fits-all packages.',
      image: whyImg1,
      color: '#0ea5e9' // sky blue
    },
    {
      num: '02',
      tag: 'Support',
      title: 'Direct, Responsive Support',
      desc: 'Get direct access to the people responsible for your technology environment. We focus on clear communication, faster issue resolution, and dependable ongoing support.',
      image: whyImg2,
      color: '#10b981' // emerald green
    },
    {
      num: '03',
      tag: 'Planning',
      title: 'Proactive Planning',
      desc: 'We identify potential risks, technology gaps, and operational challenges before they become major problems. Our approach focuses on long-term stability, scalability, and business continuity.',
      image: whyImg3,
      color: '#f59e0b' // amber
    },
    {
      num: '04',
      tag: 'Security',
      title: '24/7 Cybersecurity Monitoring',
      desc: 'Protect your digital environment with continuous security monitoring, threat detection, and timely response designed to help reduce exposure to evolving cyber risks.',
      image: whyImg4,
      color: '#ef4444' // red
    },
    {
      num: '05',
      tag: 'Consulting',
      title: 'vCISO Consulting',
      desc: 'Access strategic cybersecurity leadership without the cost of a full-time Chief Information Security Officer. Our vCISO consulting helps strengthen security planning, governance, risk management, and compliance readiness.',
      image: whyImg5,
      color: '#8b5cf6' // purple
    },
  ];

  return (
    <section className="why-sentrai">
      <div className="container">
        <div className="why-sentrai__header fade-in-up">
          <div className="why-sentrai__header-text">
            <span className="section-label">Why Choose Us.</span>
            <h2 className="why-sentrai__heading">
              Technology That Understands<br />Your Business
            </h2>
          </div>
          <div className="why-sentrai__header-action">
            <div className="why-sentrai__header-dots" aria-hidden="true"></div>
            <Link to="/company/contact" className="why-sentrai__header-btn">
              Contact Us
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="M12 5l7 7-7 7"></path></svg>
            </Link>
          </div>
        </div>

        <div className="why-sentrai__track-container fade-in-up" style={{ transitionDelay: '0.1s' }}>
          <div className="why-sentrai__track">
            {pillars.map((p) => (
              <div key={p.num} className="why-sentrai__card">
                <div className="why-sentrai__card-img-wrap">
                  <img src={p.image} alt={p.title} className="why-sentrai__card-img" />
                  <div className="why-sentrai__card-img-overlay"></div>
                  <div className="why-sentrai__card-img-content">
                    <span 
                      className="why-sentrai__card-tag"
                      style={{ backgroundColor: p.color }}
                    >
                      {p.tag}
                    </span>
                    <h3 className="why-sentrai__card-title">{p.title}</h3>
                  </div>
                </div>
                <div className="why-sentrai__card-content">
                  <p className="why-sentrai__card-desc">{p.desc}</p>
                  <div className="why-sentrai__card-actions">
                    <Link to="/company/contact" className="why-sentrai__card-btn">
                      Talk to Our Experts
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="M12 5l7 7-7 7"></path></svg>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Marquee banner (inspired by reference — "Innovate + Inspire + Create" style)
const MarqueeBanner: React.FC = () => {
  const text = ['Monitor · Analyse · Optimise', 'AI-Powered Vision', 'Industrial Intelligence', 'Real-Time Insights', 'Connect Everything'];
  const doubled = [...text, ...text, ...text];

  return (
    <div className="marquee-banner" aria-hidden="true">
      <div className="marquee-banner__track">
        {doubled.map((item, i) => (
          <span key={i} className="marquee-banner__item">
            {item}
            <span className="marquee-banner__sep">+</span>
          </span>
        ))}
      </div>
    </div>
  );
};

// Experience Stats (Floating Box)
const ExperienceStats: React.FC = () => (
  <div className="experience-stats-wrapper" style={{ position: 'relative', width: '100%', zIndex: 10, height: 0 }}>
    <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translate(-50%, -50%)', width: '100%' }}>
      <div className="container">
        <div className="experience-stats">
          <div className="experience-stats__item">
            <span className="experience-stats__icon">01</span>
            <div className="experience-stats__text">
              <strong>24/7/365</strong>
              <span>Cybersecurity Operations</span>
            </div>
          </div>
          <div className="experience-stats__divider" />
          <div className="experience-stats__item">
            <span className="experience-stats__icon">02</span>
            <div className="experience-stats__text">
              <strong>50+</strong>
              <span>Technology Services</span>
            </div>
          </div>
          <div className="experience-stats__divider" />
          <div className="experience-stats__item">
            <span className="experience-stats__icon">03</span>
            <div className="experience-stats__text">
              <strong>100s</strong>
              <span>Clients Supported</span>
            </div>
          </div>
          <div className="experience-stats__divider" />
          <div className="experience-stats__item">
            <span className="experience-stats__icon">04</span>
            <div className="experience-stats__text">
              <strong>Multi-Cloud</strong>
              <span>Enterprise Expertise</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);



export const HomePage: React.FC = () => {
  return (
    <main>
      <Hero />
      <TechStrip />
      <IndriIntro />
      <MagazineFeature />
      <HowIndriWorks />
      <MarqueeBanner />
      <WhySentrAI />
      <SecondaryServices />
      <ExperienceStats />
      <BlogSection />
      <Partnerships />
      <Testimonials />
      <FinalCTA />
    </main>
  );
};
