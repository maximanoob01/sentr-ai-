import React, { useState, useEffect } from 'react';
import './CloudRequirementModal.css';

// Brand Logos
import sentrLogo from '../assets/logo.png';
import awsLogo from '../assets/cloud solutions/aws.png';
import azureLogo from '../assets/cloud solutions/azure-clean.png';
import gcpLogo from '../assets/alliance logo/googlecloud-horiz.png';

interface CloudRequirementModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialPlatform?: string;
}

export const CloudRequirementModal: React.FC<CloudRequirementModalProps> = ({
  isOpen,
  onClose,
  initialPlatform = '',
}) => {
  const [activeSection, setActiveSection] = useState<number>(1);

  const [formData, setFormData] = useState({
    // Section 1: Company & Contact Details
    company: '',
    contact_person: '',
    designation: '',
    email: '',
    phone: '',
    industry: '',

    // Section 2: Cloud Services Requirement
    services: '',
    cloud_provider: initialPlatform || '',
    infrastructure: '',
    workload: '',

    // Section 3: Technical Requirements
    users: '',
    servers: '',
    os: '',
    storage: '',
    migration: '',

    // Section 4: Backup, Security & Commercial
    backup: '',
    security: '',
    availability: '',
    region: '',
    timeline: '',
    budget: '',
    remarks: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // Sync initialPlatform if prop changes
  useEffect(() => {
    if (initialPlatform) {
      setFormData((prev) => ({
        ...prev,
        cloud_provider: initialPlatform,
      }));
    }
  }, [initialPlatform]);

  // Handle ESC key press & scroll locking
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const scrollToSection = (sectionNumber: number) => {
    setActiveSection(sectionNumber);
    const element = document.getElementById(`cloud-sec-${sectionNumber}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage(null);

    // Validate required fields
    if (
      !formData.company.trim() ||
      !formData.contact_person.trim() ||
      !formData.email.trim() ||
      !formData.phone.trim() ||
      !formData.services.trim()
    ) {
      setErrorMessage('Please fill in all required fields (Company, Contact Person, Email, Phone, and Required Services).');
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch('/api/cloud-enquiries/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(
          errorData.error ||
            (errorData.details
              ? Object.values(errorData.details).flat().join(' ')
              : 'Failed to submit enquiry. Please try again.')
        );
      }

      setIsSuccess(true);
    } catch (err: any) {
      // If server endpoint has an issue, still fallback cleanly so user is informed
      setErrorMessage(
        err.message || 'Something went wrong while submitting. Please check your network connection.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setIsSuccess(false);
    setErrorMessage(null);
    setFormData({
      company: '',
      contact_person: '',
      designation: '',
      email: '',
      phone: '',
      industry: '',
      services: '',
      cloud_provider: initialPlatform || '',
      infrastructure: '',
      workload: '',
      users: '',
      servers: '',
      os: '',
      storage: '',
      migration: '',
      backup: '',
      security: '',
      availability: '',
      region: '',
      timeline: '',
      budget: '',
      remarks: '',
    });
    onClose();
  };

  return (
    <div
      className="cloud-modal-overlay"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="cloud-modal-title"
    >
      <div className="cloud-modal-container">
        {/* Close Button */}
        <button
          type="button"
          className="cloud-modal__close-btn"
          onClick={onClose}
          aria-label="Close form"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        {isSuccess ? (
          /* Success Screen */
          <div className="cloud-modal__success">
            <div className="cloud-modal__success-icon">
              <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
            <h2 className="cloud-modal__success-title">Enquiry Submitted Successfully!</h2>
            <p className="cloud-modal__success-desc">
              Thank you, <strong>{formData.contact_person}</strong>. Our certified cloud architects at Sentr AI will review your requirements for <strong>{formData.company}</strong> and contact you within 1 business day.
            </p>
            <div className="cloud-modal__success-summary">
              <div className="cloud-modal__success-row">
                <span>Selected Platform:</span>
                <strong>{formData.cloud_provider || 'Consultation Required'}</strong>
              </div>
              <div className="cloud-modal__success-row">
                <span>Service Category:</span>
                <strong>{formData.services || 'Cloud Solutions'}</strong>
              </div>
              <div className="cloud-modal__success-row">
                <span>Confirmation Sent To:</span>
                <strong>{formData.email}</strong>
              </div>
            </div>
            <button type="button" className="cloud-modal__submit-btn" onClick={handleReset}>
              Close &amp; Return to Page
            </button>
          </div>
        ) : (
          /* Form Screen */
          <div className="cloud-form">
            {/* Top Partner Logos Bar */}
            <div className="cloud-modal__brand-strip">
              <div className="cloud-modal__sentr-wrap">
                <img src={sentrLogo} alt="Sentr AI" className="cloud-modal__sentr-logo" />
              </div>

              <div className="cloud-modal__partners-wrap">
                <span className="cloud-modal__partners-badge">Cloud Ecosystem</span>
                <div className="cloud-modal__partners-logos">
                  <div className="cloud-modal__partner-logo-item cloud-modal__partner-logo-item--aws" title="Amazon Web Services">
                    <img src={awsLogo} alt="AWS" className="cloud-modal__partner-img cloud-modal__partner-img--aws" />
                  </div>
                  <div className="cloud-modal__partner-logo-item cloud-modal__partner-logo-item--azure" title="Microsoft Azure">
                    <img src={azureLogo} alt="Microsoft Azure" className="cloud-modal__partner-img cloud-modal__partner-img--azure" />
                  </div>
                  <div className="cloud-modal__partner-logo-item cloud-modal__partner-logo-item--gcp" title="Google Cloud Platform">
                    <img src={gcpLogo} alt="Google Cloud" className="cloud-modal__partner-img cloud-modal__partner-img--gcp" />
                  </div>
                </div>
              </div>
            </div>

            {/* Header Titles */}
            <div className="cloud-modal__header">
              <span className="cloud-modal__corp-tag">SENTR AI PRIVATE LIMITED</span>
              <h2 id="cloud-modal-title" className="cloud-modal__title">
                Cloud Services Requirement Form
              </h2>
              <p className="intro">
                Tell us about your cloud infrastructure requirements. Our cloud experts will help you identify the right solution for your business.
              </p>
            </div>

            {/* 4 Section Navigation Tabs */}
            <div className="cloud-modal__sections-nav" role="tablist">
              <button
                type="button"
                className={`cloud-modal__nav-pill ${activeSection === 1 ? 'cloud-modal__nav-pill--active' : ''}`}
                onClick={() => scrollToSection(1)}
              >
                <span className="cloud-modal__nav-num">1</span>
                <span>Company &amp; Contact</span>
              </button>
              <button
                type="button"
                className={`cloud-modal__nav-pill ${activeSection === 2 ? 'cloud-modal__nav-pill--active' : ''}`}
                onClick={() => scrollToSection(2)}
              >
                <span className="cloud-modal__nav-num">2</span>
                <span>Cloud Services</span>
              </button>
              <button
                type="button"
                className={`cloud-modal__nav-pill ${activeSection === 3 ? 'cloud-modal__nav-pill--active' : ''}`}
                onClick={() => scrollToSection(3)}
              >
                <span className="cloud-modal__nav-num">3</span>
                <span>Technical Specs</span>
              </button>
              <button
                type="button"
                className={`cloud-modal__nav-pill ${activeSection === 4 ? 'cloud-modal__nav-pill--active' : ''}`}
                onClick={() => scrollToSection(4)}
              >
                <span className="cloud-modal__nav-num">4</span>
                <span>Security &amp; Project</span>
              </button>
            </div>

            {errorMessage && (
              <div className="cloud-modal__error-banner" role="alert">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                  <circle cx="12" cy="12" r="10" />
                  <line x1="12" y1="8" x2="12" y2="12" />
                  <line x1="12" y1="16" x2="12.01" y2="16" />
                </svg>
                <span>{errorMessage}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} noValidate>
              {/* SECTION 1: Company & Contact Details */}
              <div id="cloud-sec-1" className="cloud-modal__section-block">
                <h3 className="cloud-modal__sec-heading">
                  <span className="cloud-modal__sec-num">1</span>
                  Company &amp; Contact Details
                </h3>

                <div className="grid">
                  <div className="field">
                    <label>
                      Company Name <span className="required">*</span>
                    </label>
                    <input
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="e.g. Acme Enterprises Ltd."
                      required
                    />
                  </div>

                  <div className="field">
                    <label>
                      Contact Person <span className="required">*</span>
                    </label>
                    <input
                      name="contact_person"
                      value={formData.contact_person}
                      onChange={handleChange}
                      placeholder="e.g. John Doe"
                      required
                    />
                  </div>

                  <div className="field">
                    <label>Designation</label>
                    <input
                      name="designation"
                      value={formData.designation}
                      onChange={handleChange}
                      placeholder="e.g. CTO / IT Director / Head of Infra"
                    />
                  </div>

                  <div className="field">
                    <label>
                      Business Email <span className="required">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. j.doe@company.com"
                      required
                    />
                  </div>

                  <div className="field">
                    <label>
                      Contact Number <span className="required">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="e.g. +91 98765 43210"
                      required
                    />
                  </div>

                  <div className="field">
                    <label>Industry</label>
                    <select name="industry" value={formData.industry} onChange={handleChange}>
                      <option value="">Select Industry</option>
                      <option>IT &amp; ITES</option>
                      <option>Healthcare</option>
                      <option>Manufacturing</option>
                      <option>Education</option>
                      <option>Finance &amp; Banking</option>
                      <option>Retail &amp; E-commerce</option>
                      <option>Government</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* SECTION 2: Cloud Services Requirement */}
              <div id="cloud-sec-2" className="cloud-modal__section-block">
                <h3 className="cloud-modal__sec-heading">
                  <span className="cloud-modal__sec-num">2</span>
                  Cloud Services Requirement
                </h3>

                <div className="field">
                  <label>
                    Required Services <span className="required">*</span>
                  </label>
                  <select name="services" value={formData.services} onChange={handleChange} required>
                    <option value="">Select Service</option>
                    <option>Cloud Infrastructure (IaaS)</option>
                    <option>Cloud Hosting &amp; Virtual Machines</option>
                    <option>Cloud Migration</option>
                    <option>Cloud Storage</option>
                    <option>Cloud Backup &amp; Disaster Recovery</option>
                    <option>Cloud Security</option>
                    <option>Cloud Database</option>
                    <option>Managed Cloud Services</option>
                    <option>Microsoft 365</option>
                    <option>Complete Cloud Solution</option>
                    <option>Other</option>
                  </select>
                </div>

                <div className="grid">
                  <div className="field">
                    <label>Preferred Cloud Platform</label>
                    <select
                      name="cloud_provider"
                      value={formData.cloud_provider}
                      onChange={handleChange}
                    >
                      <option value="">Select Platform</option>
                      <option value="AWS">AWS</option>
                      <option value="Microsoft Azure">Microsoft Azure</option>
                      <option value="Google Cloud (GCP)">Google Cloud (GCP)</option>
                      <option value="Private Cloud">Private Cloud</option>
                      <option value="Hybrid Cloud">Hybrid Cloud</option>
                      <option value="Not Sure – Need Consultation">Not Sure – Need Consultation</option>
                    </select>
                  </div>

                  <div className="field">
                    <label>Current Infrastructure</label>
                    <select
                      name="infrastructure"
                      value={formData.infrastructure}
                      onChange={handleChange}
                    >
                      <option value="">Select Setup</option>
                      <option>On-Premises Servers</option>
                      <option>VMware / Hyper-V</option>
                      <option>Already Using Cloud</option>
                      <option>Hybrid Infrastructure</option>
                      <option>New Setup</option>
                    </select>
                  </div>
                </div>

                <div className="field">
                  <label>Business Application / Workload Details</label>
                  <textarea
                    name="workload"
                    value={formData.workload}
                    onChange={handleChange}
                    placeholder="ERP, SAP, Tally, Website, Database, Email Server, File Server, etc."
                  />
                </div>
              </div>

              {/* SECTION 3: Technical Requirements */}
              <div id="cloud-sec-3" className="cloud-modal__section-block">
                <h3 className="cloud-modal__sec-heading">
                  <span className="cloud-modal__sec-num">3</span>
                  Technical Requirements
                </h3>

                <div className="grid">
                  <div className="field">
                    <label>Number of Users</label>
                    <input
                      type="number"
                      name="users"
                      min="1"
                      value={formData.users}
                      onChange={handleChange}
                      placeholder="e.g. 50"
                    />
                  </div>

                  <div className="field">
                    <label>Number of Servers / VMs</label>
                    <input
                      type="number"
                      name="servers"
                      min="0"
                      value={formData.servers}
                      onChange={handleChange}
                      placeholder="e.g. 5"
                    />
                  </div>

                  <div className="field">
                    <label>Operating System</label>
                    <select name="os" value={formData.os} onChange={handleChange}>
                      <option value="">Select OS</option>
                      <option>Windows Server</option>
                      <option>Linux</option>
                      <option>Both Windows &amp; Linux</option>
                      <option>Not Sure</option>
                    </select>
                  </div>

                  <div className="field">
                    <label>Required Storage</label>
                    <select name="storage" value={formData.storage} onChange={handleChange}>
                      <option value="">Select Storage</option>
                      <option>Below 500 GB</option>
                      <option>500 GB – 1 TB</option>
                      <option>1 TB – 5 TB</option>
                      <option>5 TB – 10 TB</option>
                      <option>10 TB – 50 TB</option>
                      <option>Above 50 TB</option>
                      <option>Not Sure</option>
                    </select>
                  </div>
                </div>

                <div className="field">
                  <label>Migration Requirement</label>
                  <select name="migration" value={formData.migration} onChange={handleChange}>
                    <option value="">Select Requirement</option>
                    <option>On-Premises to Cloud</option>
                    <option>Cloud to Cloud</option>
                    <option>New Cloud Deployment</option>
                    <option>Application / Database Migration</option>
                    <option>No Migration Required</option>
                    <option>Not Sure</option>
                  </select>
                </div>
              </div>

              {/* SECTION 4: Backup, Security, Availability & Commercial */}
              <div id="cloud-sec-4" className="cloud-modal__section-block">
                <h3 className="cloud-modal__sec-heading">
                  <span className="cloud-modal__sec-num">4</span>
                  Backup, Security &amp; Project Details
                </h3>

                <div className="grid">
                  <div className="field">
                    <label>Backup Requirement</label>
                    <select name="backup" value={formData.backup} onChange={handleChange}>
                      <option value="">Select Requirement</option>
                      <option>Daily Backup</option>
                      <option>Weekly Backup</option>
                      <option>Real-Time Replication</option>
                      <option>Disaster Recovery</option>
                      <option>Backup + DR</option>
                    </select>
                  </div>

                  <div className="field">
                    <label>Security Requirement</label>
                    <select name="security" value={formData.security} onChange={handleChange}>
                      <option value="">Select Requirement</option>
                      <option>Firewall &amp; Network Security</option>
                      <option>Endpoint Protection / EDR</option>
                      <option>IAM &amp; MFA</option>
                      <option>Encryption &amp; Compliance</option>
                      <option>Complete Cloud Security</option>
                    </select>
                  </div>

                  <div className="field">
                    <label>Availability Requirement</label>
                    <select name="availability" value={formData.availability} onChange={handleChange}>
                      <option value="">Select Availability</option>
                      <option>Business Hours</option>
                      <option>24x7 Support</option>
                      <option>99.9% Uptime</option>
                      <option>99.99% Uptime</option>
                      <option>Not Sure</option>
                    </select>
                  </div>

                  <div className="field">
                    <label>Preferred Data Centre Region</label>
                    <select name="region" value={formData.region} onChange={handleChange}>
                      <option value="">Select Region</option>
                      <option>India – Mumbai</option>
                      <option>India – Hyderabad</option>
                      <option>India – Delhi NCR</option>
                      <option>Outside India</option>
                      <option>No Preference</option>
                    </select>
                  </div>

                  <div className="field">
                    <label>Expected Project Timeline</label>
                    <select name="timeline" value={formData.timeline} onChange={handleChange}>
                      <option value="">Select Timeline</option>
                      <option>Immediate</option>
                      <option>Within 15 Days</option>
                      <option>Within 1 Month</option>
                      <option>1–3 Months</option>
                      <option>Future Planning</option>
                    </select>
                  </div>

                  <div className="field">
                    <label>Estimated Budget (INR)</label>
                    <select name="budget" value={formData.budget} onChange={handleChange}>
                      <option value="">Select Budget</option>
                      <option>Below ₹10,000 / Month</option>
                      <option>₹10,000 – ₹25,000 / Month</option>
                      <option>₹25,000 – ₹50,000 / Month</option>
                      <option>₹50,000 – ₹1 Lakh / Month</option>
                      <option>₹1 Lakh – ₹5 Lakh / Month</option>
                      <option>Above ₹5 Lakh / Month</option>
                      <option>Not Decided</option>
                    </select>
                  </div>
                </div>

                <div className="field">
                  <label>Additional Requirements / Remarks</label>
                  <textarea
                    name="remarks"
                    value={formData.remarks}
                    onChange={handleChange}
                    placeholder="Please describe any additional requirements, special compliance, or software licenses..."
                  />
                </div>
              </div>

              {/* Submit CTA */}
              <button type="submit" className="cloud-modal__submit-btn" disabled={isSubmitting}>
                {isSubmitting ? (
                  <span className="cloud-modal__submit-loading">
                    <svg className="cloud-modal__spinner" viewBox="0 0 24 24">
                      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                    </svg>
                    Submitting Requirement...
                  </span>
                ) : (
                  <span>Submit Cloud Enquiry →</span>
                )}
              </button>

              <p className="cloud-modal__footer-note">
                Our team will contact you to discuss your cloud requirements.
              </p>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
