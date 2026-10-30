import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import logoImg from '../../assets/logo1.png';

interface FooterSection {
  id: string;
  title: string;
  links: { label: string; to: string }[];
}

const FOOTER_SECTIONS: FooterSection[] = [
  {
    id: 'products',
    title: 'Products',
    links: [
      { label: 'Aindri IMS', to: '/products/aindri' },
      { label: 'Roadmap', to: '/products/roadmap' },
      { label: 'Cloud Solutions', to: '/cloud-solutions' },
    ],
  },
  {
    id: 'solutions',
    title: 'Solutions',
    links: [
      { label: 'Intelligent Monitoring', to: '/solutions/intelligent-monitoring' },
      { label: 'AI Solutions', to: '/solutions/ai' },
      { label: 'IoT & Industrial Tech', to: '/solutions/iot' },
      { label: 'Cybersecurity', to: '/solutions/cybersecurity' },
      { label: 'Cloud Infrastructure', to: '/solutions/cloud-infrastructure' },
      { label: 'Enterprise IT Services', to: '/solutions/enterprise-it' },
    ],
  },
  {
    id: 'industries',
    title: 'Industries',
    links: [
      { label: 'Manufacturing', to: '/industries/manufacturing' },
      { label: 'Industrial Operations', to: '/industries/industrial-operations' },
    ],
  },
  {
    id: 'company',
    title: 'Company',
    links: [
      { label: 'About Us', to: '/company/about' },
      { label: 'Careers', to: '/company/careers' },
      { label: 'Partners', to: '/company/partners' },
      { label: 'Contact Us', to: '/company/contact' },
    ],
  },
];

export const Footer: React.FC = () => {
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({});

  const toggleSection = (sectionId: string) => {
    setOpenSections((prev) => ({
      ...prev,
      [sectionId]: !prev[sectionId],
    }));
  };

  return (
    <footer className="footer-main" role="contentinfo">
      <div className="container footer-main__inner">
        <div className="footer-main__top">
          <div className="footer-main__brand">
            <img src={logoImg} alt="Sentr AI" style={{ height: '40px', marginBottom: 'var(--space-4)' }} />
            <p className="footer-main__desc">
              Intelligent monitoring and enterprise technology solutions for modern industry.
            </p>
            <div className="footer-main__contact-list">
              <div className="footer-main__contact-row">
                <a href="tel:+918851847821" className="footer-contact-item">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                  +91 8851847821
                </a>
                <a href="mailto:info@sentrai.in" className="footer-contact-item">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                  info@sentrai.in
                </a>
              </div>
              <div className="footer-contact-item footer-contact-item--location">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                Noida, Uttar Pradesh, India
              </div>
            </div>
          </div>
          
          <div className="footer-main__links-grid">
            {FOOTER_SECTIONS.map((section) => {
              const isOpen = Boolean(openSections[section.id]);
              return (
                <div key={section.id} className={`footer-main__col ${isOpen ? 'footer-main__col--open' : ''}`}>
                  <button
                    type="button"
                    className="footer-main__heading"
                    onClick={() => toggleSection(section.id)}
                    aria-expanded={isOpen}
                    aria-controls={`footer-menu-${section.id}`}
                  >
                    <span>{section.title}</span>
                    <svg
                      className={`footer-main__chevron ${isOpen ? 'footer-main__chevron--open' : ''}`}
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </button>

                  <ul
                    id={`footer-menu-${section.id}`}
                    className={`footer-main__list ${isOpen ? 'footer-main__list--open' : ''}`}
                  >
                    {section.links.map((link) => (
                      <li key={link.to}>
                        <Link to={link.to}>{link.label}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
        
        <div className="footer-main__bottom">
          <div className="footer-main__social footer-main__social--centered">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
            </a>
            <a href="mailto:info@sentrai.in" aria-label="Email">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"></path></svg>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            </a>
          </div>
          <div className="footer-main__meta">
            <p className="footer-main__copyright">© 2026 Sentr AI Technologies Pvt. Ltd. All rights reserved.</p>
            <div className="footer-credit footer-credit--center">
              Designed and Developed by{' '}
              <a 
                href="mailto:hypenbloom@gmail.com" 
                className="footer-credit__link"
                title="send email to hypenbloom@gmail.com"
              >
                <strong>Hypenbloom</strong>
                <span className="footer-tooltip" role="tooltip">
                  send email to hypenbloom@gmail.com
                </span>
              </a>
            </div>
            <div className="footer-main__legal">
              <Link to="/privacy">Privacy Policy</Link>
              <Link to="/cookie">Cookie Policy</Link>
              <Link to="/terms">Terms of Use</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
