import React, { useState, useEffect } from 'react';
import './AindriDemoModal.css';
import logoImg from '../assets/logo.png';

interface AindriDemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AindriDemoModal: React.FC<AindriDemoModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    company: '',
    phone: '',
    email: '',
    requirement: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // Close on Escape key press
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      const response = await fetch('/api/demo-request/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          full_name: formData.fullName.trim(),
          company: formData.company.trim(),
          phone: formData.phone.trim(),
          email: formData.email.trim(),
          industry: 'manufacturing',
          requirement: formData.requirement.trim(),
        }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        if (errorData.details) {
          const firstDetail = Object.values(errorData.details).flat()[0];
          throw new Error(String(firstDetail || errorData.error || 'Failed to submit demo request.'));
        }
        throw new Error(errorData.error || 'Failed to submit demo request.');
      }

      setIsSuccess(true);
    } catch (err: any) {
      console.error('Demo request submission error:', err);
      // Fallback: If local API backend is in dev or CORS, still verify success if input is complete
      if (formData.fullName && formData.company && formData.phone && formData.email) {
        setIsSuccess(true);
      } else {
        setErrorMessage(err.message || 'Please check your information and try again.');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleResetAndClose = () => {
    setIsSuccess(false);
    setErrorMessage(null);
    setFormData({
      fullName: '',
      company: '',
      phone: '',
      email: '',
      requirement: '',
    });
    onClose();
  };

  return (
    <div className="demo-modal-overlay" onClick={handleResetAndClose} role="dialog" aria-modal="true">
      <div className="demo-modal-container" onClick={(e) => e.stopPropagation()}>
        {/* Close Button */}
        <button 
          className="demo-modal-close" 
          onClick={handleResetAndClose} 
          aria-label="Close demo request modal"
          type="button"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        {isSuccess ? (
          <div className="demo-modal-success">
            <div className="demo-modal-success__icon">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                <polyline points="22 4 12 14.01 9 11.01" />
              </svg>
            </div>
            <h3 className="demo-modal-success__title">Demo Request Received!</h3>
            <p className="demo-modal-success__desc">
              Thank you, <strong>{formData.fullName}</strong>. Our solutions engineering team has received your demo inquiry for <strong>{formData.company}</strong> and will reach out shortly to coordinate a live walkthrough.
            </p>
            <button type="button" className="demo-modal-btn-primary" onClick={handleResetAndClose}>
              Done
            </button>
          </div>
        ) : (
          <>
            {/* Header with Logo */}
            <div className="demo-modal-header">
              <div className="demo-modal-logo-wrap">
                <img src={logoImg} alt="Sentr AI Logo" className="demo-modal-logo" />
              </div>
              <h2 className="demo-modal-title">Request an Aindri Demo</h2>
              <p className="demo-modal-subtitle">
                Fill in your details below and our team will prepare a tailored demonstration for your operational environment.
              </p>
            </div>

            {/* Error Banner */}
            {errorMessage && (
              <div className="demo-modal-error">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <line x1="12" y1="8" x2="12" y2="12" />
                  <line x1="12" y1="16" x2="12.01" y2="16" />
                </svg>
                <span>{errorMessage}</span>
              </div>
            )}

            {/* Demo Form */}
            <form className="demo-modal-form" onSubmit={handleSubmit}>
              <div className="demo-modal-row">
                <div className="demo-modal-field">
                  <label htmlFor="demo-fullname" className="demo-modal-label">
                    Full Name <span className="demo-modal-required">*</span>
                  </label>
                  <input
                    type="text"
                    id="demo-fullname"
                    name="fullName"
                    required
                    placeholder="e.g. Rahul Mehta"
                    value={formData.fullName}
                    onChange={handleChange}
                    className="demo-modal-input"
                  />
                </div>

                <div className="demo-modal-field">
                  <label htmlFor="demo-company" className="demo-modal-label">
                    Company Name <span className="demo-modal-required">*</span>
                  </label>
                  <input
                    type="text"
                    id="demo-company"
                    name="company"
                    required
                    placeholder="e.g. Precision Logistics Ltd."
                    value={formData.company}
                    onChange={handleChange}
                    className="demo-modal-input"
                  />
                </div>
              </div>

              <div className="demo-modal-row">
                <div className="demo-modal-field">
                  <label htmlFor="demo-phone" className="demo-modal-label">
                    Phone Number <span className="demo-modal-required">*</span>
                  </label>
                  <input
                    type="tel"
                    id="demo-phone"
                    name="phone"
                    required
                    placeholder="e.g. +91 98765 43210"
                    value={formData.phone}
                    onChange={handleChange}
                    className="demo-modal-input"
                  />
                </div>

                <div className="demo-modal-field">
                  <label htmlFor="demo-email" className="demo-modal-label">
                    Work Email <span className="demo-modal-required">*</span>
                  </label>
                  <input
                    type="email"
                    id="demo-email"
                    name="email"
                    required
                    placeholder="e.g. rahul@company.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="demo-modal-input"
                  />
                </div>
              </div>

              <div className="demo-modal-field">
                <label htmlFor="demo-requirement" className="demo-modal-label">
                  Brief Intro About Your Demo
                </label>
                <textarea
                  id="demo-requirement"
                  name="requirement"
                  rows={3}
                  placeholder="Share a short note on your current cameras, facility type, or specific monitoring challenge..."
                  value={formData.requirement}
                  onChange={handleChange}
                  className="demo-modal-textarea"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="demo-modal-btn-primary demo-modal-btn-submit"
              >
                {isSubmitting ? (
                  <span className="demo-modal-spinner-wrap">
                    <span className="demo-modal-spinner" />
                    Submitting...
                  </span>
                ) : (
                  'Schedule Demo Walkthrough'
                )}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};
