import React, { useState, useEffect, useRef } from 'react';
import './MagazineFeature.css';
import magzineImg from '../../assets/magzine.png';
import certificateImg from '../../assets/certificate.png';
import siliconLogo from '../../assets/alliance logo/silicon.png';

interface ModalImageState {
  src: string;
  alt: string;
  title: string;
}

export const MagazineFeature: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [modalData, setModalData] = useState<ModalImageState | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );
    const elements = sectionRef.current?.querySelectorAll('.fade-in-up');
    elements?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // Lock body scroll and listen for Escape key when modal is open
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && modalData) {
        setModalData(null);
      }
    };

    if (modalData) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [modalData]);

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
              <div className="magazine-feature__btn-group">
                <button
                  type="button"
                  className="magazine-feature__btn magazine-feature__btn--primary"
                  onClick={() => setModalData({
                    src: magzineImg,
                    alt: 'SiliconIndia Magazine Feature - Sentr AI',
                    title: 'SiliconIndia Magazine Feature'
                  })}
                >
                  Read More
                </button>
                <button
                  type="button"
                  className="magazine-feature__btn magazine-feature__btn--secondary"
                  onClick={() => setModalData({
                    src: certificateImg,
                    alt: 'Certificate of Recognition - Sentr AI',
                    title: 'Certificate of Recognition'
                  })}
                >
                  View Certificate
                </button>
              </div>
            </div>
          </div>

          {/* Right Image Column */}
          <div className="magazine-feature__image-col fade-in-up" style={{ transitionDelay: '0.2s' }}>
            <div
              className="magazine-feature__image-wrapper"
              onClick={() => setModalData({
                src: magzineImg,
                alt: 'SiliconIndia Magazine Feature - Sentr AI',
                title: 'SiliconIndia Magazine Feature'
              })}
              style={{ cursor: 'pointer' }}
              title="Click to view full feature"
            >
              <img src={magzineImg} alt="SiliconIndia Magazine Feature" className="magazine-feature__image" />

              <div className="magazine-feature__floating-card">
                <div className="magazine-feature__card-header">
                  <h3 className="magazine-feature__card-title">The Feature Highlights</h3>
                  <img src={siliconLogo} alt="SiliconIndia" className="magazine-feature__card-logo" />
                </div>
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

      </div>

      {/* Lightbox Pop-up Modal */}
      {modalData && (
        <div
          className="magazine-modal-overlay"
          onClick={() => setModalData(null)}
          role="dialog"
          aria-modal="true"
          aria-label={modalData.title}
        >
          <div
            className="magazine-modal-container"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="magazine-modal-close"
              onClick={() => setModalData(null)}
              aria-label="Close popup"
            >
              ✕
            </button>
            <img
              src={modalData.src}
              alt={modalData.alt}
              className="magazine-modal-img"
            />
          </div>
        </div>
      )}
    </section>
  );
};
