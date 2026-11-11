import React, { useState, useEffect } from "react";
import heroImg from "../assets/contact us/hero.png";
import "./PrivacyPage.css";

const tocSections = [
  { id: "introduction", label: "Introduction" },
  { id: "scope", label: "Scope" },
  { id: "information-collected", label: "Information We Collect" },
  { id: "auto-collected", label: "Automatically Collected" },
  { id: "cookies", label: "Cookies" },
  { id: "how-we-use", label: "How We Use Data" },
  { id: "aindri", label: "Aindri & Monitoring" },
  { id: "sharing", label: "How We Share" },
  { id: "security", label: "Data Security" },
  { id: "retention", label: "Data Retention" },
  { id: "your-rights", label: "Your Rights" },
  { id: "contact", label: "Contact Us" },
];

const SectionBlock: React.FC<{ id: string; title: string; children: React.ReactNode }> = ({ id, title, children }) => (
  <div id={id} className="privacy-section-block">
    <h2 className="privacy-section-block__title">{title}</h2>
    {children}
  </div>
);

const Bullet: React.FC<{ items: string[] }> = ({ items }) => (
  <ul className="privacy-bullet-list">
    {items.map((item) => (
      <li key={item} className="privacy-bullet-item">
        <span className="privacy-bullet-dot" aria-hidden="true" />
        <span>{item}</span>
      </li>
    ))}
  </ul>
);

const Prose: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = "" }) => (
  <p className={`privacy-prose ${className}`}>{children}</p>
);

const Sub: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h3 className="privacy-subheading">{children}</h3>
);

export const PrivacyPage: React.FC = () => {
  const [activeSection, setActiveSection] = useState("introduction");

  useEffect(() => {
    window.scrollTo(0, 0);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActiveSection(e.target.id);
        });
      },
      { rootMargin: "-20% 0px -70% 0px" }
    );
    tocSections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <main className="privacy-page">
      {/* ── 1. Hero ── */}
      <section className="privacy-hero" aria-label="Privacy Policy Banner">
        <img src={heroImg} alt="" className="privacy-hero__bg" aria-hidden="true" />
        <div className="privacy-hero__overlay" aria-hidden="true" />
        <div className="privacy-hero__content">
          <h1 className="privacy-hero__title">Privacy Policy</h1>
          <p className="privacy-hero__subtitle">How We Collect, Use, and Protect Your Information</p>
          <p className="privacy-hero__updated">Last Updated: September 2026</p>
        </div>
      </section>

      {/* ── 2. Body Container ── */}
      <div className="privacy-container">
        {/* Table of Contents (Sticky sidebar on desktop, swipeable pill bar on mobile) */}
        <aside className="privacy-toc" aria-label="Table of contents">
          <p className="privacy-toc__heading">Table of Contents</p>
          <nav className="privacy-toc__nav" role="tablist">
            {tocSections.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                className={`privacy-toc__link ${activeSection === id ? "privacy-toc__link--active" : ""}`}
                role="tab"
                aria-selected={activeSection === id}
              >
                {label}
              </button>
            ))}
          </nav>
        </aside>

        {/* Policy Content */}
        <article className="privacy-content">
          <div id="introduction" className="privacy-section-block">
            <h2 className="privacy-section-block__intro-title">Welcome to Our Privacy Policy</h2>
            <Prose>
              <strong>Sentr AI Technologies Pvt. Ltd.</strong> ("Sentr AI", "we", "us", or "our") respects your privacy and is committed to protecting personal information entrusted to us.
            </Prose>
            <Prose>
              This Privacy Policy explains how we collect, use, disclose, store, protect, and otherwise process information when you visit or use our website; contact us; request a product demonstration; enquire about Aindri or our other solutions; or otherwise interact with Sentr AI in connection with our products and services.
            </Prose>
            <Prose>
              Sentr AI is headquartered in Noida, Uttar Pradesh, India.
            </Prose>

            <div className="privacy-contact-box">
              <p className="privacy-contact-box__title">Contact Information</p>
              <p className="privacy-contact-box__text">
                Email: <a href="mailto:info@sentrai.in" className="privacy-contact-box__link">info@sentrai.in</a><br />
                Phone: <a href="tel:+918851847821" className="privacy-contact-box__link">+91 8851847821</a><br />
                Address: F-2, Block F, Sector 08, Noida, Uttar Pradesh - 201301, India
              </p>
            </div>
          </div>

          <SectionBlock id="scope" title="1. Scope of This Privacy Policy">
            <Prose>
              This Privacy Policy applies to personal information collected through the Sentr AI website and through related interactions including contact forms, demo requests, business communications, email interactions, website analytics, and other digital or offline interactions where this policy is referenced.
            </Prose>
            <Prose>
              This Privacy Policy does not apply to third-party websites linked from our website. Those services are governed by their own privacy policies.
            </Prose>
          </SectionBlock>

          <SectionBlock id="information-collected" title="2. Information We Collect">
            <Sub>2.1 Information You Provide Directly</Sub>
            <Prose>When you contact us, request information, or submit an enquiry, we may collect:</Prose>
            <Bullet items={[
              "Full name",
              "Business or organization name",
              "Job title or designation",
              "Work email address",
              "Telephone or mobile number",
              "Business address",
              "Industry or business sector",
              "Information about your technology requirements",
              "Product or service interests",
              "Meeting or demonstration requirements",
              "Other information that you voluntarily provide"
            ]} />
            <p className="privacy-note">You should avoid submitting unnecessary sensitive personal information through general website forms.</p>
          </SectionBlock>

          <SectionBlock id="auto-collected" title="3. Information Collected Automatically">
            <Prose>When you visit our website, certain technical information may be collected automatically, including:</Prose>
            <Bullet items={[
              "IP address",
              "Browser type and version",
              "Device type",
              "Operating system",
              "Approximate geographic region",
              "Website pages visited",
              "Date and time of visits",
              "Referring website or page",
              "Navigation and interaction information",
              "Website performance and error information"
            ]} />
            <Prose>This information may be collected through server logs, analytics technologies, cookies, pixels, or similar technologies.</Prose>
          </SectionBlock>

          <SectionBlock id="cookies" title="4. Cookies and Similar Technologies">
            <Prose>
              Sentr AI may use cookies and similar technologies to operate, secure, analyze, and improve its website. Cookies may help us keep the website functioning correctly, understand how visitors use the website, measure performance, and improve user experience.
            </Prose>
            <div className="privacy-cookies-grid">
              {[
                { title: "Essential Cookies", desc: "Necessary for website functionality, security, and basic operation." },
                { title: "Analytics Cookies", desc: "Help us understand website traffic, visitor behavior, and performance." },
                { title: "Preference Cookies", desc: "Remember certain user preferences or settings." },
                { title: "Marketing Technologies", desc: "Understand campaign performance or deliver relevant communications." }
              ].map((c) => (
                <div key={c.title} className="privacy-cookie-card">
                  <p className="privacy-cookie-card__title">{c.title}</p>
                  <p className="privacy-cookie-card__desc">{c.desc}</p>
                </div>
              ))}
            </div>
            <Prose>You may be able to control cookies through your browser settings or through any cookie-management controls made available on our website.</Prose>
          </SectionBlock>

          <SectionBlock id="how-we-use" title="5. How We Use Personal Information">
            <Prose>Sentr AI may use personal information for legitimate business and operational purposes including:</Prose>
            {[
              { title: "Responding to Enquiries", desc: "Respond to questions, provide requested information, respond to demo requests, and communicate regarding our products and services." },
              { title: "Providing Products and Services", desc: "Deliver services, configure solutions, provide technical assistance, manage customer relationships, and maintain service communications." },
              { title: "Improving Our Website and Services", desc: "Improve website functionality and user experience, understand visitor interests, develop new services, and identify technical issues." },
              { title: "Security and Fraud Prevention", desc: "Protect our website and systems, detect suspicious activity, prevent unauthorized access, and maintain system integrity." },
              { title: "Legal and Regulatory Compliance", desc: "Comply with applicable laws, respond to lawful requests, meet regulatory obligations, or protect our legal rights." }
            ].map((item) => (
              <div key={item.title} className="privacy-use-item">
                <div className="privacy-use-item__dot" aria-hidden="true" />
                <div>
                  <p className="privacy-use-item__title">{item.title}</p>
                  <p className="privacy-use-item__desc">{item.desc}</p>
                </div>
              </div>
            ))}
          </SectionBlock>

          <SectionBlock id="aindri" title="6. Aindri and Intelligent Monitoring Data">
            <div className="privacy-platform-notice">
              <p className="privacy-platform-notice__badge">Platform Notice</p>
              <p className="privacy-platform-notice__text">
                Aindri is Sentr AI's computer-vision platform designed to transform existing security-camera infrastructure into a real-time operational intelligence system. Because Aindri can analyze camera feeds and identify people, objects, activities, and operational anomalies, privacy and security are important considerations.
              </p>
            </div>
            <Sub>6.1 Camera and Video Information</Sub>
            <Prose>
              Where Aindri is deployed by a customer, camera feeds may be processed according to the customer's configuration. This may include video streams, snapshots associated with detected events, objects and activities detected, operational anomalies, product movement, and access-related events.
            </Prose>
            <Sub>6.2 Customer-Controlled Deployments</Sub>
            <Prose>
              In many Aindri deployments, the organization operating the cameras determines which cameras are connected, what areas are monitored, what types of events are detected, and how the system is used. Customers should ensure their use complies with applicable privacy, employment, workplace-monitoring, and other legal requirements.
            </Prose>
          </SectionBlock>

          <SectionBlock id="sharing" title="10. How We Share Information">
            <Prose>Sentr AI does not sell personal information as a business practice. We may share information where reasonably necessary with:</Prose>
            <Bullet items={[
              "Service Providers — third-party providers that help us operate our website, infrastructure, communications, analytics, hosting, or security.",
              "Technology Providers — where required to deliver services through cloud infrastructure, cybersecurity systems, or communication platforms.",
              "Business Partners — where necessary to provide requested products or services.",
              "Professional Advisors — legal, accounting, auditing, or consulting professionals.",
              "Government or Law Enforcement Authorities — where required by applicable law, legal process, or lawful governmental request.",
              "Corporate Transactions — as part of a merger, acquisition, restructuring, or similar business transaction."
            ]} />
          </SectionBlock>

          <SectionBlock id="security" title="13. Data Security">
            <Prose>Sentr AI takes reasonable measures designed to protect personal information against unauthorized access, loss, misuse, alteration, and other unauthorized processing. Security measures may include:</Prose>
            <div className="privacy-security-grid">
              {[
                "Access controls",
                "Authentication mechanisms",
                "Encryption where appropriate",
                "Network security",
                "Monitoring & logging",
                "Secure software development",
                "Backup & recovery",
                "Security testing",
                "Vendor controls",
                "Administrative safeguards"
              ].map((item) => (
                <div key={item} className="privacy-security-badge">
                  <div className="privacy-security-badge__dot" aria-hidden="true" />
                  <span className="privacy-security-badge__text">{item}</span>
                </div>
              ))}
            </div>
            <Prose>However, no website, network, or method of electronic transmission can be guaranteed to be completely secure.</Prose>
          </SectionBlock>

          <SectionBlock id="retention" title="14. Data Retention">
            <Prose>
              We retain personal information only for as long as reasonably necessary for the purposes described in this Privacy Policy, unless a longer period is required by applicable law. Retention periods depend on the purpose of collection, the nature of the information, contractual requirements, legal obligations, and legitimate business requirements.
            </Prose>
            <Prose>When information is no longer required, it may be deleted, anonymized, aggregated, or securely disposed of.</Prose>
          </SectionBlock>

          <SectionBlock id="your-rights" title="15. Your Privacy Rights">
            <Prose>Depending on applicable law, individuals may have rights to:</Prose>
            <Bullet items={[
              "Request information about personal data processed by us",
              "Request correction of inaccurate or incomplete information",
              "Request deletion where applicable",
              "Withdraw consent where processing is based on consent",
              "Request information regarding the purposes of processing",
              "Raise concerns regarding our handling of personal information",
              "Submit a privacy-related request or complaint"
            ]} />
            <Prose>Under India's Digital Personal Data Protection Act, consent is required to meet specified standards, and the Act provides for withdrawal of consent in applicable circumstances.</Prose>
          </SectionBlock>

          <div id="contact" className="privacy-contact-card">
            <span className="privacy-contact-card__pill">Privacy Requests</span>
            <h2 className="privacy-contact-card__title">Submit a Privacy Request</h2>
            <p className="privacy-contact-card__sub">
              To submit a privacy-related request, please contact our team. We may need to verify your identity before processing certain requests.
            </p>
            <div className="privacy-contact-card__actions">
              <a href="mailto:info@sentrai.in" className="privacy-contact-btn privacy-contact-btn--primary">
                info@sentrai.in
              </a>
              <a href="tel:+918851847821" className="privacy-contact-btn privacy-contact-btn--secondary">
                +91 8851847821
              </a>
            </div>
            <p className="privacy-contact-card__addr">F-2, Block F, Sector 08, Noida, Uttar Pradesh - 201301, India</p>
          </div>

          <p className="privacy-disclaimer">
            We may update this Privacy Policy from time to time. Changes will be reflected by the "Last Updated" date. This Privacy Policy is governed by the applicable laws and regulations of India.
          </p>
        </article>
      </div>
    </main>
  );
};
