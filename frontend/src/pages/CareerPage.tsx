import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import careerHero from '../assets/career/hero.png';
import legalHero from '../assets/LEGAL/hero.png';
import careerAb from '../assets/career/ab.png';
import careerAba from '../assets/career/aba.png';
import careerAbb from '../assets/career/abb.png';
import careerHandshake from '../assets/career/handshake.png';
import careerOwner from '../assets/career/owner.png';
import careerTt from '../assets/career/tt.png';
import logo1 from '../assets/logo1.png';
import './CareerPage.css';

// ─── Types ───────────────────────────────────────────────────────────────────
interface JobPosition {
  id: string;
  title: string;
  department: string;
  location: string;
  experience: string;
  type: string;
  description: string;
  responsibilities: string[];
  requirements: string[];
}

const openPositions: JobPosition[] = [
  {
    id: 'se-001',
    title: 'Software Engineer',
    department: 'Engineering',
    location: 'Noida / Hybrid',
    experience: '0–2 Years',
    type: 'Full-Time',
    description: "We're looking for a motivated software engineer to contribute to the development and improvement of Sentr AI's technology solutions.",
    responsibilities: [
      'Develop and maintain software applications',
      'Work with engineering teams on new features',
      'Debug and troubleshoot technical issues',
      'Write clean and maintainable code',
      'Participate in testing and deployment',
      'Collaborate with other teams',
    ],
    requirements: [
      'Strong programming fundamentals',
      'Knowledge of relevant development technologies',
      'Good problem-solving skills',
      'Ability to work collaboratively',
      'Willingness to learn',
    ],
  },
];

const whyJoinItems = [
  {
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a5 5 0 0 1 5 5c0 2.76-2.24 5-5 5S7 9.76 7 7a5 5 0 0 1 5-5z"/><path d="M2 22c0-4.97 4.03-9 9-9h2c4.97 0 9 4.03 9 9"/><circle cx="18" cy="8" r="3"/><path d="m21 11-1.5-1.5"/></svg>,
    title: 'AI & Intelligent Technology',
    desc: 'Work with artificial intelligence, computer vision, automation, and intelligent monitoring technologies.',
  },
  {
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
    title: 'Cybersecurity',
    desc: 'Contribute to solutions designed to help organizations protect their systems, infrastructure, applications, and data.',
  },
  {
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/><path d="M7 7h.01M11 7h6"/></svg>,
    title: 'Enterprise Technology',
    desc: 'Work across enterprise IT, cloud infrastructure, digital workplace solutions, IT asset management, and managed services.',
  },
  {
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>,
    title: 'Real-World Projects',
    desc: 'Get exposure to practical business requirements and technology implementations rather than purely theoretical projects.',
  },
  {
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>,
    title: 'Continuous Learning',
    desc: 'Technology changes quickly. We encourage curiosity, experimentation, knowledge sharing, and continuous improvement.',
  },
  {
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
    title: 'Grow With the Team',
    desc: 'Take ownership, work alongside experienced professionals, and develop your technical and professional skills over time.',
  },
];




// hiringAreas unused for now
// ─── Form State ───────────────────────────────────────────────────────────────
interface FormData {
  fullName: string;
  email: string;
  phone: string;
  currentRole: string;
  experience: string;
  areaOfInterest: string;
  workLocation: string[];
  linkedin: string;
  portfolio: string;
  resume: File | null;
  coverLetter: string;
  consent: boolean;
}

const defaultForm: FormData = {
  fullName: '', email: '', phone: '', currentRole: '',
  experience: '', areaOfInterest: '', workLocation: [],
  linkedin: '', portfolio: '', resume: null, coverLetter: '', consent: false,
};

// ─── Main Component ────────────────────────────────────────────────────────────
export const CareerPage: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState<JobPosition | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState<FormData>(defaultForm);
  const [expandedJob, setExpandedJob] = useState<string | null>(null);
  const [currentStep, setCurrentStep] = useState(1);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  const openModal = (job?: JobPosition) => {
    setSelectedJob(job || null);
    setForm(defaultForm);
    setSubmitted(false);
    setCurrentStep(1);
    setModalOpen(true);
  };

  useEffect(() => {
    if (!modalOpen) return;
    const handleKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setModalOpen(false); };
    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => { document.removeEventListener('keydown', handleKey); document.body.style.overflow = ''; };
  }, [modalOpen]);

  const handleBackdrop = (e: React.MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) setModalOpen(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      if (name === 'workLocation') {
        setForm(prev => ({ ...prev, workLocation: checked ? [...prev.workLocation, value] : prev.workLocation.filter(l => l !== value) }));
      } else {
        setForm(prev => ({ ...prev, [name]: checked }));
      }
    } else {
      setForm(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm(prev => ({ ...prev, resume: e.target.files?.[0] || null }));
  };

  const handleNext = () => setCurrentStep(prev => Math.min(prev + 1, 3));
  const handleBack = () => setCurrentStep(prev => Math.max(prev - 1, 1));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="career-page">
      {/* HERO */}
      <section className="career-hero">
        <img src={careerHero} alt="Careers at Sentr AI" className="career-hero__bg" />
        <div className="career-hero__overlay" />
        <div className="career-hero__content">
          <h1 className="career-hero__title">Careers</h1>
          <p className="career-hero__subtitle">Join Our Team &amp; Build Technology That Makes a Difference</p>
          <div className="career-hero__cta">
            <a href="#open-positions" className="career-btn career-btn--primary">
              View Open Positions
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </a>
            <button className="career-btn career-btn--outline" onClick={() => openModal()}>
              Submit Your Resume
            </button>
          </div>
        </div>
      </section>

      {/* INTRO BAND */}
      <section className="career-intro">
        {/* dotted pattern top-right */}
        <div className="career-intro__dots" aria-hidden="true" />
        <div className="container career-intro__inner">
          {/* LEFT — text */}
          <div className="career-intro__text">
            <span className="career-label">About Sentr AI</span>
            <p className="career-intro__desc">
              At Sentr AI, we build intelligent, secure, and scalable technology solutions for modern businesses. From AI-powered intelligent monitoring and computer vision to cybersecurity, cloud infrastructure, and managed services — our work sits at the intersection of technology, security, and real-world business challenges.
            </p>
            <p className="career-intro__sub">
              We're looking for curious, driven people who want to learn, build, solve problems, and grow with us.
            </p>
          </div>
          {/* RIGHT — image */}
          <div className="career-intro__image-wrap">
            <img src={legalHero} alt="Team at Sentr AI" className="career-intro__image" />
          </div>
        </div>
      </section>

      {/* WHY JOIN */}
      <section className="career-why">
        {/* Background image with overlay */}
        <img src={careerAb} alt="" className="career-why__bg" aria-hidden="true" />
        <div className="career-why__overlay" />
        <div className="container career-why__inner">
          {/* Header */}
          <div className="career-why__header">
            <span className="career-label career-label--light">Why Join Sentr AI</span>
            <p className="career-why__desc">
              At Sentr AI, you won't just be working on isolated tasks. You'll have the opportunity to contribute to solutions designed to solve real operational and technology challenges for businesses.
            </p>
          </div>
          {/* Cards grid */}
          <div className="career-why__grid">
            {whyJoinItems.map((item, i) => (
              <div key={i} className="career-why-card">
                <div className="career-why-card__icon">{item.icon}</div>
                <h3 className="career-why-card__title">{item.title}</h3>
                <p className="career-why-card__desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LIFE AT SENTR AI (Lifestyle Grid) */}
      <section className="career-section career-section--light career-lifestyle-section">
        <div className="container">
          
          <div className="career-lifestyle-header">
            <h2>Life at Sentr AI.</h2>
            <p>
              We believe good technology comes from people who are willing to ask questions, explore new ideas, and take ownership of their work.
            </p>
          </div>

          <div className="career-lifestyle-grid">
            {/* Card 1: Wide Top Left */}
            <div className="career-lifestyle-card card-1">
              <img src={careerHandshake} alt="Culture" className="career-lifestyle-card__bg" />
              <div className="career-lifestyle-card__overlay" />
              <div className="career-lifestyle-card__content">
                <span className="career-lifestyle-card__tag">CULTURE</span>
                <h3 className="career-lifestyle-card__title">Learn. Build.<br/>Collaborate. Grow.</h3>
              </div>
            </div>

            {/* Card 2: Tall Bottom Left 1 */}
            <div className="career-lifestyle-card card-2">
              <img src={careerAba} alt="Mindset" className="career-lifestyle-card__bg" />
              <div className="career-lifestyle-card__overlay" />
              <div className="career-lifestyle-card__content">
                <span className="career-lifestyle-card__tag">MINDSET</span>
                <h3 className="career-lifestyle-card__title">Curiosity &<br/>Experimentation</h3>
              </div>
            </div>

            {/* Card 3: Tall Bottom Left 2 */}
            <div className="career-lifestyle-card card-3">
              <img src={careerTt} alt="Teamwork" className="career-lifestyle-card__bg" />
              <div className="career-lifestyle-card__overlay" />
              <div className="career-lifestyle-card__content">
                <span className="career-lifestyle-card__tag">TEAMWORK</span>
                <h3 className="career-lifestyle-card__title">Collaboration<br/>Across Teams</h3>
              </div>
            </div>

            {/* Card 4: Tall Top Right 1 */}
            <div className="career-lifestyle-card card-4">
              <img src={careerOwner} alt="Ownership" className="career-lifestyle-card__bg" />
              <div className="career-lifestyle-card__overlay" />
              <div className="career-lifestyle-card__content">
                <span className="career-lifestyle-card__tag">OWNERSHIP</span>
                <h3 className="career-lifestyle-card__title">Accountability &<br/>Problem Solving</h3>
              </div>
            </div>

            {/* Card 5: Tall Top Right 2 */}
            <div className="career-lifestyle-card card-5">
              <img src={careerAbb} alt="Growth" className="career-lifestyle-card__bg" />
              <div className="career-lifestyle-card__overlay" />
              <div className="career-lifestyle-card__content">
                <span className="career-lifestyle-card__tag">GROWTH</span>
                <h3 className="career-lifestyle-card__title">Continuous<br/>Professional Growth</h3>
              </div>
            </div>

            {/* Card 6: Wide Bottom Right */}
            <div className="career-lifestyle-card card-6">
              <div className="career-lifestyle-card__bg gradient-blue" />
              <div className="career-lifestyle-card__overlay" />
              <div className="career-lifestyle-card__content">
                <span className="career-lifestyle-card__tag">IMPACT</span>
                <h3 className="career-lifestyle-card__title">Make an impact whether you're starting out or bringing years of experience.</h3>
                <Link to="/company/contact" className="career-lifestyle-card__cta">Get Started</Link>
              </div>
            </div>
          </div>
        </div>
      </section>




      {/* OPEN POSITIONS */}
      <section id="open-positions" className="career-section career-section--light">
        <div className="container">
          <div className="career-section__header">
            <span className="career-label">Current Open Positions</span>
            <h2 className="career-section__title">Find Your Next Opportunity.</h2>
            <p className="career-section__desc">Explore our current openings and find a role that matches your skills, experience, and interests.</p>
          </div>
          <div className="career-positions">
            {openPositions.map((job) => (
              <div key={job.id} className={`career-job-card ${expandedJob === job.id ? 'career-job-card--expanded' : ''}`}>
                <div className="career-job-card__header" onClick={() => setExpandedJob(expandedJob === job.id ? null : job.id)}>
                  <div className="career-job-card__meta">
                    <span className="career-job-card__dept">{job.department}</span>
                    <h3 className="career-job-card__title">{job.title}</h3>
                    <div className="career-job-card__tags">
                      <span className="career-tag career-tag--location">📍 {job.location}</span>
                      <span className="career-tag career-tag--exp">⏳ {job.experience}</span>
                      <span className="career-tag career-tag--type">💼 {job.type}</span>
                    </div>
                  </div>
                  <div className="career-job-card__actions">
                    <button className="career-btn career-btn--primary career-btn--sm" onClick={(e) => { e.stopPropagation(); openModal(job); }}>
                      Apply Now
                    </button>
                    <span className="career-job-card__toggle">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ transform: expandedJob === job.id ? 'rotate(180deg)' : 'none', transition: 'transform 0.3s' }}>
                        <polyline points="6 9 12 15 18 9"/>
                      </svg>
                    </span>
                  </div>
                </div>
                {expandedJob === job.id && (
                  <div className="career-job-card__body">
                    <p className="career-job-card__desc">{job.description}</p>
                    <div className="career-job-card__cols">
                      <div>
                        <h4 className="career-job-card__section-title">Key Responsibilities</h4>
                        <ul className="career-job-card__list">{job.responsibilities.map((r, i) => <li key={i}>{r}</li>)}</ul>
                      </div>
                      <div>
                        <h4 className="career-job-card__section-title">Requirements</h4>
                        <ul className="career-job-card__list">{job.requirements.map((r, i) => <li key={i}>{r}</li>)}</ul>
                      </div>
                    </div>
                    <button className="career-btn career-btn--primary" onClick={() => openModal(job)}>
                      Apply for this Position
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* No Role Fallback */}
          <div className="career-no-role">
            <div className="career-no-role__icon">📩</div>
            <h3 className="career-no-role__title">Don't See a Role That Fits?</h3>
            <p className="career-no-role__desc">
              We're always interested in connecting with talented people. If you believe your skills and experience could contribute to Sentr AI, you can still send us your resume.
            </p>
            <button className="career-btn career-btn--primary" onClick={() => openModal()}>Submit Your Resume</button>
          </div>
        </div>
      </section>

      {/* APPLICATION MODAL */}
      {modalOpen && (
        <div className="career-modal-backdrop" onClick={handleBackdrop} role="dialog" aria-modal="true" aria-label="Apply at Sentr AI">
          <div className="career-modal" ref={modalRef}>
            <div className="career-modal__header">
              <div>
                <h2 className="career-modal__title">
                  {selectedJob ? (
                    `Apply — ${selectedJob.title}`
                  ) : (
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                      Apply at <img src={logo1} alt="Sentr AI" style={{ height: '1.4em', objectFit: 'contain' }} />
                    </span>
                  )}
                </h2>
                <p className="career-modal__subtitle">Tell us a little about yourself.</p>
              </div>
              <button className="career-modal__close" onClick={() => setModalOpen(false)} aria-label="Close">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
              </button>
            </div>

            <div className="career-modal__body">
              {!submitted ? (
                <>
                  <div className="career-form__steps">
                    {['Personal Information', 'Professional Information', 'Additional Information'].map((label, idx) => (
                      <div key={idx} className={`career-form__step ${currentStep === idx + 1 ? 'active' : ''} ${currentStep > idx + 1 ? 'completed' : ''}`}>
                        <div className="career-form__step-circle">{currentStep > idx + 1 ? '✓' : idx + 1}</div>
                        <span className="career-form__step-label">{label}</span>
                      </div>
                    ))}
                  </div>
                  <form className="career-form" onSubmit={handleSubmit} noValidate>
                    {/* STEP 1: Personal Info */}
                    {currentStep === 1 && (
                      <div className="career-form__section">
                    <h3 className="career-form__section-title">Personal Information</h3>
                    <div className="career-form__row">
                      <div className="career-form__group">
                        <label className="career-form__label" htmlFor="cf-fullName">Full Name <span>*</span></label>
                        <input id="cf-fullName" name="fullName" type="text" required className="career-form__input" placeholder="Enter your full name" value={form.fullName} onChange={handleChange} />
                      </div>
                      <div className="career-form__group">
                        <label className="career-form__label" htmlFor="cf-email">Email Address <span>*</span></label>
                        <input id="cf-email" name="email" type="email" required className="career-form__input" placeholder="Enter your email address" value={form.email} onChange={handleChange} />
                      </div>
                    </div>
                    <div className="career-form__group">
                      <label className="career-form__label" htmlFor="cf-phone">Phone Number <span>*</span></label>
                      <input id="cf-phone" name="phone" type="tel" required className="career-form__input" placeholder="Enter your phone number" value={form.phone} onChange={handleChange} />
                    </div>
                      </div>
                    )}

                    {/* STEP 2: Professional Info */}
                    {currentStep === 2 && (
                      <>
                      <div className="career-form__section">
                    <h3 className="career-form__section-title">Professional Information</h3>
                    <div className="career-form__row">
                      <div className="career-form__group">
                        <label className="career-form__label" htmlFor="cf-currentRole">Current Job Title / Role</label>
                        <input id="cf-currentRole" name="currentRole" type="text" className="career-form__input" placeholder="e.g. Software Developer" value={form.currentRole} onChange={handleChange} />
                      </div>
                      <div className="career-form__group">
                        <label className="career-form__label" htmlFor="cf-experience">Years of Experience <span>*</span></label>
                        <select id="cf-experience" name="experience" required className="career-form__select" value={form.experience} onChange={handleChange}>
                          <option value="">Select experience level</option>
                          <option value="fresher">Fresher</option>
                          <option value="less-than-1">Less than 1 year</option>
                          <option value="1-2">1–2 years</option>
                          <option value="2-3">2–3 years</option>
                          <option value="3-5">3–5 years</option>
                          <option value="5+">5+ years</option>
                        </select>
                      </div>
                    </div>
                    <div className="career-form__row">
                      <div className="career-form__group">
                        <label className="career-form__label" htmlFor="cf-areaOfInterest">Area of Interest <span>*</span></label>
                        <select id="cf-areaOfInterest" name="areaOfInterest" required className="career-form__select" value={form.areaOfInterest} onChange={handleChange}>
                          <option value="">Select an area</option>
                          <option value="software-dev">Software Development</option>
                          <option value="ai-ml">AI / Machine Learning</option>
                          <option value="computer-vision">Computer Vision</option>
                          <option value="cybersecurity">Cybersecurity</option>
                          <option value="cloud">Cloud &amp; Infrastructure</option>
                          <option value="enterprise-it">Enterprise IT</option>
                          <option value="itam">IT Asset Management</option>
                          <option value="devops">DevOps</option>
                          <option value="sales">Sales &amp; Business Development</option>
                          <option value="marketing">Marketing</option>
                          <option value="pm">Project Management</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                      <div className="career-form__group">
                        <label className="career-form__label">Preferred Work Location</label>
                        <div className="career-form__checkbox-group">
                          {['Noida', 'Remote', 'Hybrid', 'Open to relocation', 'Other'].map((loc) => (
                            <label key={loc} className="career-form__checkbox-label">
                              <input type="checkbox" name="workLocation" value={loc} checked={form.workLocation.includes(loc)} onChange={handleChange} className="career-form__checkbox" />
                              {loc}
                            </label>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="career-form__row">
                      <div className="career-form__group">
                        <label className="career-form__label" htmlFor="cf-linkedin">LinkedIn Profile</label>
                        <input id="cf-linkedin" name="linkedin" type="url" className="career-form__input" placeholder="https://linkedin.com/in/..." value={form.linkedin} onChange={handleChange} />
                      </div>
                      <div className="career-form__group">
                        <label className="career-form__label" htmlFor="cf-portfolio">Portfolio / GitHub</label>
                        <input id="cf-portfolio" name="portfolio" type="url" className="career-form__input" placeholder="https://..." value={form.portfolio} onChange={handleChange} />
                      </div>
                    </div>
                  </div>

                  {/* Resume Upload */}
                  <div className="career-form__section">
                    <h3 className="career-form__section-title">Resume</h3>
                    <div className="career-form__group">
                      <label className="career-form__label">Upload Your Resume <span>*</span></label>
                      <div className={`career-form__upload ${form.resume ? 'career-form__upload--has-file' : ''}`} onClick={() => fileInputRef.current?.click()}>
                        <input ref={fileInputRef} type="file" accept=".pdf,.doc,.docx" onChange={handleFileChange} style={{ display: 'none' }} />
                        {form.resume ? (
                          <>
                            <div className="career-form__upload-icon career-form__upload-icon--success">
                              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                            </div>
                            <div>
                              <p className="career-form__upload-filename">{form.resume.name}</p>
                              <p className="career-form__upload-hint">Click to replace</p>
                            </div>
                          </>
                        ) : (
                          <>
                            <div className="career-form__upload-icon">
                              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>
                            </div>
                            <div>
                              <p className="career-form__upload-text">Click to upload your resume</p>
                              <p className="career-form__upload-hint">PDF, DOC, DOCX — Max 5 MB</p>
                            </div>
                          </>
                        )}
                      </div>
                        <p className="career-form__helper">Please upload your latest resume containing your education, experience, skills, and relevant projects.</p>
                      </div>
                    </div>
                    </>
                  )}

                    {/* STEP 3: Additional Info */}
                    {currentStep === 3 && (
                      <div className="career-form__section">
                        <h3 className="career-form__section-title">Additional Information</h3>
                        <div className="career-form__group">
                          <label className="career-form__label" htmlFor="cf-coverLetter">
                            Cover Letter / Message <span className="career-form__optional">(Optional)</span>
                          </label>
                          <textarea id="cf-coverLetter" name="coverLetter" className="career-form__textarea" rows={4} placeholder="Tell us why you would like to work with Sentr AI..." value={form.coverLetter} onChange={handleChange} />
                        </div>

                        {/* Consent */}
                        <div className="career-form__consent" style={{ marginTop: '2rem' }}>
                          <label className="career-form__consent-label">
                            <input type="checkbox" name="consent" required className="career-form__checkbox" checked={form.consent} onChange={handleChange} />
                            <span>
                              I confirm that the information provided above is accurate to the best of my knowledge, and I consent to Sentr AI processing my information for recruitment and employment-related purposes in accordance with its{' '}
                              <a href="/privacy" target="_blank" rel="noopener noreferrer">Privacy Policy</a>.
                            </span>
                          </label>
                        </div>
                      </div>
                    )}

                    {/* FORM FOOTER BUTTONS */}
                    <div className="career-form__footer">
                      {currentStep > 1 && (
                        <button type="button" className="career-btn career-btn--outline" onClick={handleBack}>
                          Back
                        </button>
                      )}
                      
                      {currentStep < 3 ? (
                        <button type="button" className="career-btn career-btn--primary" onClick={handleNext}>
                          Next Step
                        </button>
                      ) : (
                        <button type="submit" className="career-btn career-btn--primary" disabled={!form.consent || !form.resume}>
                          Submit Application
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
                        </button>
                      )}
                    </div>
                  </form>
                </>
              ) : (
                <div className="career-modal__success">
                  <div className="career-modal__success-icon">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                  </div>
                  <h3 className="career-modal__success-title">Thank You for Your Application!</h3>
                  <p className="career-modal__success-desc">
                    Your application has been successfully submitted. Our team will review your application and get back to you shortly if your profile matches a current or upcoming opportunity.
                  </p>
                  <p className="career-modal__success-desc">We appreciate your interest in joining Sentr AI.</p>
                  <button className="career-btn career-btn--outline career-btn--lg" onClick={() => setModalOpen(false)}>
                    Back to Careers
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default CareerPage;
