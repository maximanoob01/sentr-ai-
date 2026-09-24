import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import './MagazineFeature.css';
import workImg from '../../assets/work.png';
import siliconLogo from '../../assets/alliance logo/silicon.png';

const AnimatedNumber: React.FC<{ target: number; suffix?: string; isVisible: boolean }> = ({ target, suffix = '', isVisible }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;
    
    let startTimestamp: number | null = null;
    const duration = 2000;

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      
      setCount(Math.floor(easeProgress * target));
      
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    
    window.requestAnimationFrame(step);
  }, [target, isVisible]);

  return <>{count.toLocaleString('en-IN')}{suffix}</>;
};

export const MagazineFeature: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isStatsVisible, setIsStatsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            if (entry.target.classList.contains('magazine-feature__bottom')) {
              setIsStatsVisible(true);
            }
          }
        });
      },
      { threshold: 0.1 }
    );
    const elements = sectionRef.current?.querySelectorAll('.fade-in-up');
    elements?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="magazine-feature" ref={sectionRef}>
      <div className="container">
        
        {/* Top Section */}
        <div className="magazine-feature__top">
          
          {/* Left Text Column */}
          <div className="magazine-feature__text-col fade-in-up">
            <div className="magazine-feature__label">
              <span>FEATURED IN</span>
              <div className="magazine-feature__label-logo-row">
                <img src={siliconLogo} alt="SiliconIndia" className="magazine-feature__silicon-logo" />
                <span className="magazine-feature__magazine-text">MAGAZINE</span>
              </div>
            </div>
            <h2 className="magazine-feature__heading">
              Top Company in Intelligent Monitoring System Solution — 2026
            </h2>
            <p className="magazine-feature__desc">
              We’re proud to share that Sentr AI has been shortlisted for SiliconIndia Magazine’s <strong>“Top Company in Intelligent Monitoring System Solution of the Year 2026”</strong> special edition. 
              <br/><br/>
              The recognition highlights Sentr AI’s work across intelligent monitoring, 24×7 threat detection, cloud and workspace security, managed services, and enterprise IT solutions.
            </p>
            <div className="magazine-feature__divider"></div>
            <div className="magazine-feature__btn-wrapper">
              <Link to="/contact" className="magazine-feature__btn">
                Explore the Feature <span>→</span>
              </Link>
            </div>
          </div>

          {/* Right Image Column */}
          <div className="magazine-feature__image-col fade-in-up" style={{ transitionDelay: '0.2s' }}>
            <div className="magazine-feature__image-wrapper">
              <img src={workImg} alt="Sentr AI Team" className="magazine-feature__image" />
              
              <div className="magazine-feature__overlay-logo-wrapper">
                <img src={siliconLogo} alt="SiliconIndia" className="magazine-feature__overlay-logo" />
              </div>

              <div className="magazine-feature__floating-card">
                <h3 className="magazine-feature__card-title">The Feature Highlights</h3>
                <ul className="magazine-feature__card-list">
                  <li>Sentr AI’s journey, vision, and evolution</li>
                  <li>Intelligent monitoring and proactive threat detection</li>
                  <li>Cloud and workspace security capabilities</li>
                  <li>Managed services and enterprise IT expertise</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="magazine-feature__bottom fade-in-up" style={{ transitionDelay: '0.3s' }}>
          <h4 className="magazine-feature__stats-header">Publication Recognition</h4>
          <div className="magazine-feature__stats-grid">
            
            <div className="magazine-feature__stat-item">
              <div className="magazine-feature__stat-val"><AnimatedNumber target={125000} suffix="+" isVisible={isStatsVisible} /></div>
              <div className="magazine-feature__stat-label">Print Circulation</div>
            </div>
            
            <div className="magazine-feature__stat-item">
              <div className="magazine-feature__stat-val"><AnimatedNumber target={480000} suffix="+" isVisible={isStatsVisible} /></div>
              <div className="magazine-feature__stat-label">Monthly Website Readership</div>
            </div>
            
            <div className="magazine-feature__stat-item">
              <div className="magazine-feature__stat-val"><AnimatedNumber target={530000} suffix="+" isVisible={isStatsVisible} /></div>
              <div className="magazine-feature__stat-label">Digital Subscribers</div>
            </div>
            
            <div className="magazine-feature__stat-item">
              <div className="magazine-feature__stat-val">PAN India</div>
              <div className="magazine-feature__stat-label">Publication Reach</div>
            </div>

          </div>
          

        </div>

      </div>
    </section>
  );
};
