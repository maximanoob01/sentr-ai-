import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';
import logoImg from '../../assets/logo.png';
import siliconImg from '../../assets/alliance logo/silicon.png';

interface NavItem {
  label: string;
  href: string;
  children?: { label: string; href: string; description?: string }[];
  megaMenu?: boolean;
  columns?: {
    title: string;
    items: { label: string; href: string; description?: string }[];
  }[];
  sideCard?: {
    tag: string;
    title: string;
    description: string;
    image?: string;
    buttonText?: string;
    href?: string;
  };
}

const navItems: NavItem[] = [
  { label: 'Home', href: '/' },
  {
    label: 'Solutions',
    href: '/solutions',
    megaMenu: true,
    columns: [
      {
        title: 'CORE OFFERINGS',
        items: [
          { label: 'Intelligent Monitoring', href: '/solutions/intelligent-monitoring', description: 'AI-powered industrial visibility' },
          { label: 'AI Solutions', href: '/solutions/ai', description: 'Machine learning & computer vision' }
        ]
      },
      {
        title: 'INFRASTRUCTURE',
        items: [
          { label: 'IoT & Industrial Tech', href: '/solutions/iot', description: 'Sensors, OPC & device connectivity' },
          { label: 'Cloud Infrastructure', href: '/solutions/cloud-infrastructure', description: 'Scalable cloud environments' }
        ]
      },
      {
        title: 'SECURITY & IT',
        items: [
          { label: 'Cybersecurity', href: '/solutions/cybersecurity', description: 'Enterprise threat protection' },
          { label: 'Enterprise IT Services', href: '/solutions/enterprise-it', description: 'Managed IT & digital workplace' }
        ]
      }
    ],
    sideCard: {
      tag: 'Solutions Overview',
      title: 'End-to-End Industrial Intelligence',
      description: 'Discover how our integrated suite of tools transforms complex operations into actionable insights.',
      buttonText: 'Explore Solutions',
      href: '/solutions'
    }
  },
  {
    label: 'Products',
    href: '/products',
    megaMenu: true,
    columns: [
      {
        title: 'PRODUCTS',
        items: [
          { label: 'Indri', href: '/products/indri', description: 'Intelligent Monitoring System' }
        ]
      },
      {
        title: 'INNOVATION',
        items: [
          { label: 'Roadmap', href: '/products/roadmap', description: 'What we\'re building next' }
        ]
      }
    ],
    sideCard: {
      tag: 'Featured Product',
      title: 'Meet Indri',
      description: 'The ultimate AI companion for your industrial plant operations.',
      buttonText: 'Request Demo',
      href: '/products/indri#demo'
    }
  },
  {
    label: 'Industries',
    href: '/industries',
    megaMenu: true,
    columns: [
      {
        title: 'SECTORS',
        items: [
          { label: 'Manufacturing', href: '/industries/manufacturing', description: 'Factory & production monitoring' },
          { label: 'Industrial Operations', href: '/industries/industrial-operations', description: 'Plant-wide visibility' }
        ]
      }
    ],
    sideCard: {
      tag: 'Industry Focus',
      title: 'Built for Heavy Industry',
      description: 'Learn how our solutions adapt to the unique challenges of manufacturing and continuous operations.',
      buttonText: 'View Case Studies',
      href: '/industries'
    }
  },
  { label: 'Microsoft & Azure', href: '/microsoft-azure' },
  {
    label: 'About Us',
    href: '/company/about',
    megaMenu: true,
    columns: [
      {
        title: 'COMPANY',
        items: [
          { label: 'About Us', description: 'Our mission and values', href: '/company/about' },
          { label: 'Leadership', description: 'Meet our executive team', href: '/company/leadership' },
          { label: 'Careers', description: 'Join our team', href: '/company/careers' }
        ]
      },
      {
        title: 'CUSTOMERS & PARTNERS',
        items: [
          { label: 'Partner Network', description: 'Find a partner or become a partner', href: '/partners' },
          { label: 'Customer Ambassadors', description: 'Become a SentrAI ambassador', href: '/ambassadors' }
        ]
      },
      {
        title: 'CONNECT',
        items: [
          { label: 'Contact Us', description: 'Get in touch with an expert', href: '/company/contact' }
        ]
      }
    ],
    sideCard: {
      tag: 'FEATURED IN',
      title: 'SiliconIndia MAGAZINE',
      description: 'Top Company in Intelligent Monitoring System Solution — 2026',
      image: siliconImg
    }
  }
];

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const dropdownTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const location = useLocation();

  const isItemActive = (item: NavItem) => {
    if (item.href === '/' && location.pathname !== '/') return false;
    if (location.pathname === item.href || location.pathname.startsWith(`${item.href}/`)) return true;
    if (item.children?.some(child => location.pathname === child.href || location.pathname.startsWith(`${child.href}/`))) return true;
    return false;
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setActiveDropdown(null);
  }, [location]);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const handleMouseEnter = (label: string) => {
    if (dropdownTimer.current) clearTimeout(dropdownTimer.current);
    setActiveDropdown(label);
  };

  const handleMouseLeave = () => {
    dropdownTimer.current = setTimeout(() => setActiveDropdown(null), 120);
  };

  return (
    <>
      <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`} role="navigation" aria-label="Main navigation">
        <div className="navbar__inner">
          {/* Logo */}
          <Link to="/" className="navbar__logo" aria-label="Sentr AI — Home">
            <img src={logoImg} alt="Sentr AI" className="navbar__logo-img" style={{ height: '60px', width: 'auto' }} />
          </Link>

          {/* Desktop Nav */}
          <ul className="navbar__links" role="list">
            {navItems.map((item) => (
              <li
                key={item.label}
                className={`navbar__item ${item.children || item.megaMenu ? 'navbar__item--dropdown' : ''}`}
                onMouseEnter={() => (item.children || item.megaMenu) && handleMouseEnter(item.label)}
                onMouseLeave={handleMouseLeave}
              >
                {item.children || item.megaMenu ? (
                  <>
                    <button
                      className={`navbar__link ${isItemActive(item) ? 'navbar__link--active' : ''}`}
                      onClick={() => {
                        if (activeDropdown === item.label) {
                          setActiveDropdown(null);
                        } else {
                          setActiveDropdown(item.label);
                        }
                      }}
                      onMouseEnter={() => handleMouseEnter(item.label)}
                      onMouseLeave={handleMouseLeave}
                      aria-expanded={activeDropdown === item.label}
                      aria-haspopup="true"
                    >
                      {item.label}
                      <svg className="navbar__chevron" width="12" height="12" viewBox="0 0 12 12" fill="none">
                        <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </button>
                    {activeDropdown === item.label && (
                      <div 
                        className={`navbar__dropdown ${item.megaMenu ? 'navbar__dropdown--mega' : ''}`} 
                        role="menu"
                        onMouseEnter={() => handleMouseEnter(item.label)}
                        onMouseLeave={handleMouseLeave}
                      >
                        {item.megaMenu ? (
                          <div className="navbar__mega-inner">
                            <div className="navbar__mega-columns">
                              {item.columns?.map((col) => (
                                <div key={col.title} className="navbar__mega-col">
                                  <h4 className="navbar__mega-col-title">{col.title}</h4>
                                  <div className="navbar__mega-items">
                                    {col.items.map((child) => (
                                      <Link key={child.label} to={child.href} className="navbar__mega-item" role="menuitem">
                                        <span className="navbar__mega-label">{child.label}</span>
                                        {child.description && <span className="navbar__mega-desc">{child.description}</span>}
                                      </Link>
                                    ))}
                                  </div>
                                </div>
                              ))}
                            </div>
                            {item.sideCard && (
                              <div className="navbar__mega-sidecard">
                                <span className="navbar__mega-sidecard-tag">{item.sideCard.tag}</span>
                                {item.sideCard.image && (
                                  <img src={item.sideCard.image} alt={item.sideCard.title} className="navbar__mega-sidecard-img" style={{ maxWidth: '120px', marginBottom: '1rem', objectFit: 'contain' }} />
                                )}
                                <h4 className="navbar__mega-sidecard-title">{item.sideCard.title}</h4>
                                <p className="navbar__mega-sidecard-desc">{item.sideCard.description}</p>
                                {item.sideCard.href && item.sideCard.buttonText && (
                                  <Link to={item.sideCard.href} className="navbar__mega-sidecard-btn">
                                    {item.sideCard.buttonText}
                                  </Link>
                                )}
                              </div>
                            )}
                          </div>
                        ) : (
                          <div className="navbar__dropdown-inner">
                            {item.children?.map((child) => (
                              <Link
                                key={child.label}
                                to={child.href}
                                className={`navbar__dropdown-item ${child.label === 'Indri' ? 'navbar__dropdown-item--featured' : ''}`}
                                role="menuitem"
                              >
                                <span className="navbar__dropdown-label">{child.label}</span>
                                {child.description && (
                                  <span className="navbar__dropdown-desc">{child.description}</span>
                                )}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    to={item.href}
                    className={`navbar__link ${isItemActive(item) ? 'navbar__link--active' : ''}`}
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>

          {/* CTA */}
          <div className="navbar__actions">
            <Link to="/company/contact" className="btn btn-secondary btn-sm">
              Contact
            </Link>
            <Link to="/products/indri#demo" className="btn btn-primary btn-sm">
              Request Demo
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className={`navbar__hamburger ${mobileOpen ? 'navbar__hamburger--open' : ''}`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-expanded={mobileOpen}
            aria-label="Toggle mobile menu"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`mobile-menu ${mobileOpen ? 'mobile-menu--open' : ''}`} aria-hidden={!mobileOpen}>
        <div className="mobile-menu__header">
          <Link to="/" className="navbar__logo">
            <div className="navbar__logo-mark">
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                <rect width="28" height="28" rx="6" fill="var(--accent)"/>
                <path d="M7 14L12 9L17 14L22 9" stroke="#080B12" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M7 19L12 14L17 19L22 14" stroke="#080B12" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.6"/>
              </svg>
            </div>
            <span className="navbar__logo-text">Sentr<span className="navbar__logo-ai">AI</span></span>
          </Link>
          <button
            className="mobile-menu__close"
            onClick={() => setMobileOpen(false)}
            aria-label="Close mobile menu"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M15 5L5 15M5 5L15 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </button>
        </div>

        <nav className="mobile-menu__nav">
          {navItems.map((item) => (
            <div key={item.label} className="mobile-menu__section">
              {item.children || item.megaMenu ? (
                <>
                  <button
                    className="mobile-menu__section-title"
                    onClick={() => setMobileExpanded(mobileExpanded === item.label ? null : item.label)}
                  >
                    {item.label}
                    <svg
                      className={`mobile-menu__chevron ${mobileExpanded === item.label ? 'mobile-menu__chevron--open' : ''}`}
                      width="14" height="14" viewBox="0 0 14 14" fill="none"
                    >
                      <path d="M3.5 5.25L7 8.75L10.5 5.25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                  {mobileExpanded === item.label && (
                    <div className="mobile-menu__children">
                      {item.megaMenu ? (
                        item.columns?.map((col) => (
                          <div key={col.title} style={{ marginBottom: '16px' }}>
                            <div style={{ fontSize: '12px', fontWeight: 700, color: '#64748b', marginBottom: '8px' }}>{col.title}</div>
                            {col.items.map((child) => (
                              <Link key={child.label} to={child.href} className="mobile-menu__child-link" style={{ display: 'block' }}>
                                {child.label}
                              </Link>
                            ))}
                          </div>
                        ))
                      ) : (
                        item.children?.map((child) => (
                          <Link key={child.label} to={child.href} className="mobile-menu__child-link">
                            {child.label}
                          </Link>
                        ))
                      )}
                    </div>
                  )}
                </>
              ) : (
                <Link to={item.href} className="mobile-menu__section-title">
                  {item.label}
                </Link>
              )}
            </div>
          ))}
        </nav>

        <div className="mobile-menu__footer">
          <Link to="/products/indri#demo" className="btn btn-primary btn-lg" style={{ width: '100%' }}>
            Request a Demo
          </Link>
          <div className="mobile-menu__contact">
            <a href="tel:+918851847821">+91 8851847821</a>
            <a href="mailto:info@sentrai.in">info@sentrai.in</a>
          </div>
        </div>
      </div>

      {mobileOpen && (
        <div className="mobile-menu__overlay" onClick={() => setMobileOpen(false)} aria-hidden="true" />
      )}
    </>
  );
};
