import React, { useEffect } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import heroImg from '../assets/about us/hero.png';
import img1 from '../assets/about us/1.png';
import img2 from '../assets/about us/2.png';
import img3 from '../assets/about us/3.png';
import img4 from '../assets/about us/4.png';
import img5 from '../assets/about us/5.png';
import partner1 from '../assets/alliance logo/1.png';
import partner2 from '../assets/alliance logo/2.png';
import partner3 from '../assets/alliance logo/3.png';
import partner4 from '../assets/alliance logo/4.png';
import partner5 from '../assets/alliance logo/5.png';
import partner6 from '../assets/alliance logo/6.png';
import partner7 from '../assets/alliance logo/7.png';
import partner8 from '../assets/alliance logo/8.png';


export const AboutPage: React.FC = () => {
  useScrollAnimation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main style={{ minHeight: '100vh', background: 'var(--bg-base)' }}>
      {/* Hero Section */}
      <section style={{ 
        paddingTop: 'calc(var(--nav-height) + 4rem)', 
        paddingBottom: '8rem', 
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '60vh'
      }}>
        {/* Background Image with Overlay */}
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `url(${heroImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          zIndex: 0
        }} />
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'rgba(15, 23, 42, 0.7)',
          zIndex: 0
        }} />

        <div className="container" style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
          <div className="fade-in-up" style={{ maxWidth: '900px', margin: '0 auto' }}>
            <h2 style={{ 
              color: '#ffffff', 
              fontSize: 'clamp(2.5rem, 6vw, 4rem)', 
              fontWeight: 700, 
              textTransform: 'uppercase', 
              letterSpacing: '0.15em',
              marginBottom: '1.5rem'
            }}>
              About Sentr AI
            </h2>
            <h1 style={{ 
              fontSize: 'clamp(1.5rem, 3.5vw, 2.5rem)', 
              fontWeight: 800, 
              color: '#ffffff', 
              letterSpacing: '-0.02em', 
              lineHeight: 1.2,
              margin: 0
            }}>
              Building Intelligent Technology for a <br />
              <span style={{ color: '#3b82f6' }}>More Secure Future</span>
            </h1>
          </div>
        </div>
      </section>

      {/* Section 1: Who We Are */}
      <section className="section-y" style={{ background: '#ffffff', paddingTop: '5rem', paddingBottom: '5rem' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center', maxWidth: '1100px', margin: '0 auto' }}>
            
            {/* Left: Image Collage */}
            <div className="fade-in-up" style={{ position: 'relative', height: '400px', width: '100%' }}>
              {/* Image 1 (tall) */}
              <img src={img1} alt="Team" style={{ position: 'absolute', top: 0, left: 0, width: '55%', height: '80%', objectFit: 'cover', borderRadius: 'var(--radius-xl)', boxShadow: '0 15px 30px -10px rgba(0,0,0,0.1)', zIndex: 1 }} />
              {/* Image 2 (square) */}
              <img src={img2} alt="Meeting" style={{ position: 'absolute', top: '10%', right: '5%', width: '45%', height: '40%', objectFit: 'cover', borderRadius: 'var(--radius-xl)', boxShadow: '0 15px 30px -10px rgba(0,0,0,0.15)', zIndex: 2 }} />
              {/* Image 3 (wide) */}
              <img src={img3} alt="Office" style={{ position: 'absolute', bottom: '5%', right: 0, width: '65%', height: '40%', objectFit: 'cover', borderRadius: 'var(--radius-xl)', boxShadow: '0 15px 30px -10px rgba(0,0,0,0.2)', zIndex: 3 }} />
            </div>

            {/* Right: Text */}
            <div className="fade-in-up" style={{ transitionDelay: '0.2s' }}>
              <span className="section-label" style={{ color: '#475569', fontSize: '0.8rem', marginBottom: '0.75rem' }}>ABOUT US</span>
              <h2 style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.25rem)', fontWeight: 800, color: '#0f172a', letterSpacing: '-0.02em', marginBottom: '1.25rem', lineHeight: 1.2 }}>
                Who We Are: <br/>More Than a <span style={{ color: '#2563eb' }}>Technology Provider</span>
              </h2>
              <p style={{ color: '#475569', fontSize: '1rem', lineHeight: 1.6, marginBottom: '1rem' }}>
                Sentr AI helps organizations protect, optimize, and transform their technology environments through intelligent monitoring, cybersecurity, enterprise IT, cloud infrastructure, and managed services.
              </p>
              <p style={{ color: '#475569', fontSize: '1rem', lineHeight: 1.6, marginBottom: '1rem' }}>
                We combine technology expertise with a practical understanding of business operations to build solutions that are secure, scalable, and designed around real-world requirements.
              </p>
              <p style={{ color: '#475569', fontSize: '1rem', lineHeight: 1.6, marginBottom: '2rem' }}>
                Our name reflects our philosophy: Sentr AI acts as a digital sentinel, combining artificial intelligence and technical expertise to help organizations protect their digital assets, improve visibility, and operate more effectively.
              </p>
              
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
                {[
                  'AI & Intelligent Monitoring',
                  'Cybersecurity',
                  'Enterprise IT',
                  'Cloud Infrastructure',
                  'Managed Services',
                  'IT Asset Management',
                  'Digital Workplace',
                  'Compliance & Reporting'
                ].map((item, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <div style={{ width: '6px', height: '6px', background: '#eab308', borderRadius: '50%' }}></div>
                    <span style={{ color: '#0f172a', fontWeight: 600, fontSize: '0.9rem' }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: What Drives Us */}
      <section className="section-y" style={{ background: '#0f172a', paddingTop: '6rem', paddingBottom: '6rem' }}>
        <div className="container">
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4rem', alignItems: 'center' }}>
            <div className="fade-in-up" style={{ flex: '1 1 500px' }}>
              <span className="section-label" style={{ color: '#94a3b8' }}>WHAT DRIVES US</span>
              <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, color: '#ffffff', letterSpacing: '-0.03em', marginBottom: '1.5rem', lineHeight: 1.1 }}>
                Technology Should Solve <span style={{ color: '#eab308' }}>Real Business Problems</span>
              </h2>
              <p style={{ color: '#cbd5e1', fontSize: '1.125rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                Modern businesses depend on increasingly complex technology environments. Infrastructure, cloud, applications, security, data, and operations are all connected.
              </p>
              <p style={{ color: '#cbd5e1', fontSize: '1.125rem', lineHeight: 1.7, marginBottom: '3rem' }}>
                Our role is to help make that complexity easier to manage. We focus on building solutions that help organizations:
              </p>
              
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
                {[
                  { title: 'See Clearly', desc: 'Gain better visibility into technology and operations.' },
                  { title: 'Stay Secure', desc: 'Protect systems, data, identities, and infrastructure.' },
                  { title: 'Work Smarter', desc: 'Use automation and intelligent technology to improve efficiency.' },
                  { title: 'Scale Confidently', desc: 'Build technology foundations that evolve with business needs.' }
                ].map((item, i) => (
                  <div key={i}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
                      <div style={{ width: '8px', height: '8px', background: '#eab308' }}></div>
                      <span style={{ color: '#ffffff', fontWeight: 700, fontSize: '1.1rem' }}>{item.title}</span>
                    </div>
                    <p style={{ color: '#94a3b8', fontSize: '0.95rem', lineHeight: 1.6, margin: 0, paddingLeft: '1.25rem' }}>{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Infinite Logo Slider */}
      <section style={{ background: '#ffffff', padding: '4rem 0', borderTop: '1px solid #f1f5f9', overflow: 'hidden' }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <span style={{ color: '#94a3b8', fontSize: '0.85rem', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase' }}>Our Technology Alliances</span>
        </div>
        <div className="logo-slider-container">
          <div className="logo-slider-track">
            {[partner1, partner2, partner3, partner4, partner5, partner6, partner7, partner8, partner1, partner2, partner3, partner4, partner5, partner6, partner7, partner8].map((logo, index) => (
              <div key={index} className="logo-slide">
                <img src={logo} alt={`Partner ${index + 1}`} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Mission and Vision */}
      <section className="section-y" style={{ background: '#f8fafc', paddingTop: '8rem', paddingBottom: '8rem' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <span className="section-label" style={{ color: '#475569' }}>COMPANY VISION</span>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, color: '#0f172a', letterSpacing: '-0.03em', lineHeight: 1.1 }}>
              Your Success Is Our Top Priority.
            </h2>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
            {/* Card 1: Mission */}
            <div className="fade-in-up" style={{ background: '#ffffff', overflow: 'hidden', boxShadow: '0 15px 30px -10px rgba(0,0,0,0.1)', display: 'flex', flexDirection: 'column' }}>
              <div style={{ position: 'relative' }}>
                <img src={img5} alt="Our Mission" style={{ width: '100%', height: '220px', objectFit: 'cover', display: 'block' }} />
                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '3px', background: '#f97316' }}></div>
              </div>
              <div style={{ padding: '2.5rem 2rem 3rem', flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                <span style={{ color: '#94a3b8', fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '1rem' }}>Our Mission</span>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0f172a', marginBottom: '1.25rem', lineHeight: 1.3 }}>
                  Empower Businesses With Intelligent, Secure & Scalable Technology
                </h3>
                <p style={{ color: '#64748b', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '1rem' }}>
                  Our mission is to help businesses adopt technology with greater confidence.
                </p>
                <p style={{ color: '#64748b', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                  We combine AI, cybersecurity, cloud, enterprise IT, and managed services to create solutions that go beyond basic protection and support long-term business growth.
                </p>
                <p style={{ color: '#0f172a', fontSize: '0.9rem', fontWeight: 600, lineHeight: 1.6, marginBottom: '0', fontStyle: 'italic', marginTop: 'auto' }}>
                  "To become a global technology partner for organizations looking to build secure, intelligent, and scalable digital environments."
                </p>
              </div>
            </div>

            {/* Card 2: Vision */}
            <div className="fade-in-up" style={{ transitionDelay: '0.2s', background: '#ffffff', overflow: 'hidden', boxShadow: '0 15px 30px -10px rgba(0,0,0,0.1)', display: 'flex', flexDirection: 'column' }}>
              <div style={{ position: 'relative' }}>
                <img src={img4} alt="Our Vision" style={{ width: '100%', height: '220px', objectFit: 'cover', display: 'block' }} />
                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '3px', background: '#f97316' }}></div>
              </div>
              <div style={{ padding: '2.5rem 2rem 3rem', flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                <span style={{ color: '#94a3b8', fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '1rem' }}>Our Vision</span>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0f172a', marginBottom: '1.25rem', lineHeight: 1.3 }}>
                  A World Where Innovation and Security Go Hand in Hand
                </h3>
                <p style={{ color: '#64748b', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '1rem' }}>
                  We envision a future where organizations can adopt new technologies without compromising security or operational control.
                </p>
                <p style={{ color: '#64748b', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                  We believe proactive cybersecurity, intelligent monitoring, smart technology management, and continuous improvement should become fundamental parts of modern business.
                </p>
                <p style={{ color: '#0f172a', fontSize: '0.9rem', fontWeight: 600, lineHeight: 1.6, marginBottom: '0', fontStyle: 'italic', marginTop: 'auto' }}>
                  "Make technology more intelligent. Make businesses more secure."
                </p>
              </div>
            </div>

            {/* Card 3: Capabilities */}
            <div className="fade-in-up" style={{ transitionDelay: '0.4s', background: '#ffffff', overflow: 'hidden', boxShadow: '0 15px 30px -10px rgba(0,0,0,0.1)', display: 'flex', flexDirection: 'column' }}>
              <div style={{ position: 'relative' }}>
                <img src={img3} alt="Capabilities" style={{ width: '100%', height: '220px', objectFit: 'cover', display: 'block' }} />
                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '3px', background: '#f97316' }}></div>
              </div>
              <div style={{ padding: '2.5rem 2rem 3rem', flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                <span style={{ color: '#94a3b8', fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '1rem' }}>Our Core Capabilities</span>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0f172a', marginBottom: '1.25rem', lineHeight: 1.3 }}>
                  One Partner. Multiple Technology Capabilities.
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '0', textAlign: 'left', width: '100%', marginTop: 'auto' }}>
                  <div>
                    <span style={{ color: '#0f172a', fontWeight: 700, fontSize: '0.9rem', display: 'block' }}>Intelligent Monitoring</span>
                    <span style={{ color: '#64748b', fontSize: '0.85rem', lineHeight: 1.5 }}>AI-powered vision and real-time monitoring solutions.</span>
                  </div>
                  <div>
                    <span style={{ color: '#0f172a', fontWeight: 700, fontSize: '0.9rem', display: 'block' }}>Cybersecurity</span>
                    <span style={{ color: '#64748b', fontSize: '0.85rem', lineHeight: 1.5 }}>Strengthen cloud, workspace, identity, and access.</span>
                  </div>
                  <div>
                    <span style={{ color: '#0f172a', fontWeight: 700, fontSize: '0.9rem', display: 'block' }}>Enterprise IT</span>
                    <span style={{ color: '#64748b', fontSize: '0.85rem', lineHeight: 1.5 }}>Digital workplace and cloud infrastructure solutions.</span>
                  </div>
                  <div>
                    <span style={{ color: '#0f172a', fontWeight: 700, fontSize: '0.9rem', display: 'block' }}>Managed Services</span>
                    <span style={{ color: '#64748b', fontSize: '0.85rem', lineHeight: 1.5 }}>App & data management, compliance, and IT support.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
