import React, { useState, useEffect, useRef } from "react";
import heroImg from "../assets/LEGAL/hero.png";
import "./TermsPage.css";

const tocItems = [
  { id: "acceptance", label: "Acceptance of Terms" },
  { id: "website-use", label: "Website Use" },
  { id: "prohibited", label: "Prohibited Activities" },
  { id: "ip", label: "Intellectual Property" },
  { id: "products", label: "Products & Services" },
  { id: "aindri-ai", label: "Aindri & AI" },
  { id: "third-party", label: "Third-Party Products" },
  { id: "user-content", label: "User-Submitted Info" },
  { id: "privacy", label: "Privacy & Cookies" },
  { id: "disclaimers", label: "Disclaimers" },
  { id: "liability", label: "Limitation of Liability" },
  { id: "governing", label: "Governing Law" },
  { id: "contact-terms", label: "Contact Us" },
];

const SectionBlock: React.FC<{ id: string; title: string; children: React.ReactNode }> = ({ id, title, children }) => (
  <div id={id} className="terms-section-block">
    <h2 className="terms-section-block__title">{title}</h2>
    {children}
  </div>
);

const Prose: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = "" }) => (
  <p className={`terms-prose ${className}`}>{children}</p>
);

const Sub: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h3 className="terms-subheading">{children}</h3>
);

const Bullet: React.FC<{ items: string[] }> = ({ items }) => (
  <ul className="terms-bullet-list">
    {items.map((item) => (
      <li key={item} className="terms-bullet-item">
        <span className="terms-bullet-dot" aria-hidden="true" />
        <span>{item}</span>
      </li>
    ))}
  </ul>
);

export const TermsPage: React.FC = () => {
  const [activeSection, setActiveSection] = useState("acceptance");
  const tocNavRef = useRef<HTMLElement | null>(null);

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
    tocItems.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  // Smooth scroll active mobile pill into view horizontally
  useEffect(() => {
    if (!tocNavRef.current) return;
    const activeBtn = tocNavRef.current.querySelector<HTMLButtonElement>(
      `button[data-id="${activeSection}"]`
    );
    if (activeBtn) {
      activeBtn.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
    }
  }, [activeSection]);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <main className="terms-page">
      {/* ── 1. Hero ── */}
      <section className="terms-hero" aria-label="Terms of Use Banner">
        <img src={heroImg} alt="" className="terms-hero__bg" aria-hidden="true" />
        <div className="terms-hero__overlay" aria-hidden="true" />
        <div className="terms-hero__content">
          <h1 className="terms-hero__title">Terms of Use</h1>
          <p className="terms-hero__subtitle">Please read these terms carefully before using our website.</p>
          <p className="terms-hero__updated">Last Updated: September 2026</p>
        </div>
      </section>

      {/* ── 2. Body Container ── */}
      <div className="terms-container">
        {/* Table of Contents (Sticky sidebar on desktop, swipeable pill bar on mobile) */}
        <aside className="terms-toc" aria-label="Table of contents">
          <p className="terms-toc__heading">Table of Contents</p>
          <nav className="terms-toc__nav" ref={tocNavRef} role="tablist">
            {tocItems.map(({ id, label }) => (
              <button
                key={id}
                data-id={id}
                onClick={() => scrollTo(id)}
                className={`terms-toc__link ${activeSection === id ? "terms-toc__link--active" : ""}`}
                role="tab"
                aria-selected={activeSection === id}
              >
                {label}
              </button>
            ))}
          </nav>
        </aside>

        {/* Content */}
        <article className="terms-content">
          {/* Intro card */}
          <div className="terms-section-block">
            <h2 className="terms-section-block__intro-title">Welcome to Sentr AI</h2>
            <Prose>These Terms of Use govern your access to and use of the Sentr AI website, including its content, pages, resources, features, forms, and other services made available through the website.</Prose>
            <Prose>By accessing or using this website, you acknowledge that you have read, understood, and agree to be bound by these Terms. If you do not agree, please do not use the website.</Prose>
            <Prose>These Terms apply to website visitors, prospective customers, existing customers, business partners, vendors, and other users who access or interact with the website.</Prose>
            <div className="terms-notice-banner">
              <p className="terms-notice-banner__text">Sentr AI Technologies Pvt. Ltd. is headquartered in Noida, Uttar Pradesh, India.</p>
            </div>
          </div>

          <SectionBlock id="acceptance" title="1. About Sentr AI & Acceptance">
            <Prose>Sentr AI provides enterprise technology solutions across intelligent monitoring, AI, cybersecurity, cloud infrastructure, managed services, enterprise IT, and related technology consulting.</Prose>
            <Prose>Our flagship platform, <strong>Aindri</strong>, transforms existing camera infrastructure into a real-time operational intelligence system for industrial and operational environments.</Prose>
            <Prose>By accessing, browsing, or using this website, you agree to:</Prose>
            <Bullet items={[
              "Comply with these Terms",
              "Use the website only for lawful purposes",
              "Respect the rights of Sentr AI and third parties",
              "Provide accurate information when submitting through the website",
              "Not misuse, disrupt, or attempt unauthorized access to the website or its systems"
            ]} />
          </SectionBlock>

          <SectionBlock id="website-use" title="4. Website Use">
            <Prose>You may use this website for legitimate purposes, including:</Prose>
            <Bullet items={[
              "Learning about Sentr AI",
              "Exploring our products and solutions",
              "Reading our articles and resources",
              "Requesting a demonstration",
              "Contacting our team",
              "Making business enquiries",
              "Exploring partnership opportunities",
              "Understanding our technology capabilities"
            ]} />
            <Prose>You must not use the website for unlawful, fraudulent, abusive, malicious, or unauthorized purposes.</Prose>
          </SectionBlock>

          <SectionBlock id="prohibited" title="5. Prohibited Activities">
            <Sub>Unauthorized Access</Sub>
            <Prose>You must not attempt to gain unauthorized access to the website, servers, networks, databases, administrative systems, APIs, accounts, or other systems connected to Sentr AI.</Prose>
            <Sub>Security Testing Without Authorization</Sub>
            <Prose>Unauthorized vulnerability scanning, penetration testing, security testing, port scanning, exploitation attempts, denial-of-service attacks, automated attacks, or other security assessments are strictly prohibited. Authorized security testing requires explicit written permission from Sentr AI.</Prose>
            <Sub>Website Interference</Sub>
            <Bullet items={[
              "Introducing malware or malicious code",
              "Distributing viruses",
              "Attempting to disrupt website availability",
              "Overloading our systems",
              "Circumventing security controls",
              "Interfering with the normal operation of the website"
            ]} />
            <Sub>Automated Scraping</Sub>
            <Prose>You must not use automated systems, bots, crawlers, scripts, or similar tools to systematically extract or harvest website content without prior written permission. This does not restrict legitimate search-engine indexing.</Prose>
          </SectionBlock>

          <SectionBlock id="ip" title="6–7. Intellectual Property & Trademarks">
            <Prose>Unless otherwise stated, the website and its contents — including design, text, graphics, images, logos, branding, icons, videos, product descriptions, documentation, and software — are owned by or licensed to Sentr AI and protected by applicable intellectual-property laws.</Prose>
            <Prose>Nothing in these Terms transfers ownership of Sentr AI's intellectual property to you.</Prose>
            <Sub>Trademarks</Sub>
            <Prose>&quot;Sentr AI&quot;, &quot;Aindri&quot;, associated logos, product names, and branding elements may constitute trademarks or trade names of Sentr AI. You may not use Sentr AI branding in a way that suggests unauthorized endorsement, creates confusion, or misrepresents a business relationship.</Prose>
            <Sub>Limited Website License</Sub>
            <Prose>Subject to these Terms, you are granted a limited, non-exclusive, non-transferable, revocable right to access and use the website for legitimate informational and business purposes. You may not reproduce, modify, distribute, sell, or commercially exploit website materials without prior written permission.</Prose>
          </SectionBlock>

          <SectionBlock id="products" title="9–10. Website Content & Product Information">
            <Prose>Information published on this website is provided for general informational purposes. Sentr AI makes reasonable efforts to keep information accurate but does not guarantee that all content will always be complete, current, error-free, or suitable for a particular purpose.</Prose>
            <Prose>References to Aindri, Enterprise IT, Cybersecurity, Cloud infrastructure, Managed Services, IT Asset Management, or other products and services do not constitute a binding offer, quotation, warranty, or contractual commitment.</Prose>
            <Prose>Actual features, specifications, pricing, availability, and deliverables may depend on:</Prose>
            <Bullet items={[
              "Customer requirements",
              "Technical feasibility",
              "Product configuration",
              "Deployment environment",
              "Third-party technology",
              "Commercial agreements",
              "Applicable statements of work or contracts"
            ]} />
          </SectionBlock>

          <SectionBlock id="aindri-ai" title="11–13. Aindri, AI & Machine Learning">
            <div className="terms-platform-notice">
              <p className="terms-platform-notice__eyebrow">Platform Notice</p>
              <p className="terms-platform-notice__text">Aindri is designed to provide computer-vision-based operational intelligence. Depending on configuration, Aindri may support real-time anomaly detection, object and activity recognition, operational monitoring, tampering alerts, and warehouse monitoring.</p>
            </div>
            <Sub>No Guarantee of Detection</Sub>
            <Prose>Computer-vision and AI systems may not identify every event, object, activity, or anomaly. Performance may be affected by camera quality, lighting, obstructions, network connectivity, system configuration, and other technical factors.</Prose>
            <div className="terms-alert-box">
              <strong>Important:</strong> Aindri should not be treated as a substitute for appropriate human oversight, operational procedures, safety processes, or professional judgment.
            </div>
            <Sub>AI and Machine Learning</Sub>
            <Prose>AI-generated or AI-assisted outputs may not always be accurate, complete, or appropriate. Users remain responsible for reviewing outputs and applying appropriate human judgment. AI-generated information should not be treated as legal, financial, medical, safety, or security advice.</Prose>
          </SectionBlock>

          <SectionBlock id="third-party" title="14–16. Third-Party Products & Links">
            <Prose>Sentr AI may provide, recommend, integrate, resell, deploy, or support third-party products including enterprise hardware, software, cloud services, and security technologies. These may be governed by separate terms, license agreements, warranty terms, and manufacturer policies.</Prose>
            <Sub>Lenovo and Hardware Solutions</Sub>
            <Prose>Where Sentr AI provides or references Lenovo or other third-party hardware solutions, product names, specifications, availability, pricing, warranties, and support are subject to the relevant manufacturer's terms. Final configurations and commercial terms will be governed by the applicable quotation or agreement.</Prose>
            <Sub>Third-Party Links</Sub>
            <Prose>The website may contain links to third-party websites for convenience. Sentr AI does not control and is not responsible for third-party content, availability, security, or privacy practices. Accessing third-party websites is at your own discretion.</Prose>
          </SectionBlock>

          <SectionBlock id="user-content" title="17–18. User-Submitted Information & Confidentiality">
            <Prose>When submitting information through contact forms, demo requests, business enquiries, or other channels, you agree to provide accurate and non-misleading information. You must not submit malicious code, unauthorized confidential information, content that infringes rights, or fraudulent information.</Prose>
            <Sub>Confidential Information</Sub>
            <Prose>The website should not be considered a secure channel for confidential or sensitive business information. If you need to share confidential technical information, proprietary business information, or other sensitive material, please contact Sentr AI first to determine the appropriate secure communication method.</Prose>
            <Prose>Confidentiality obligations between Sentr AI and a customer will generally be governed by a separate confidentiality agreement or contract.</Prose>
          </SectionBlock>

          <SectionBlock id="privacy" title="25–26. Privacy & Cookies">
            <Prose>Your use of this website is also subject to our <strong>Privacy Policy</strong>, which explains how Sentr AI may collect, use, disclose, retain, and protect personal information.</Prose>
            <Prose>Our website may use cookies and similar technologies. Your use of cookies may be governed by our Privacy Policy and, where applicable, a separate Cookie Policy.</Prose>
            <div className="terms-policy-links">
              {[
                { label: "Privacy Policy", href: "/privacy" },
                { label: "Cookie Policy", href: "/cookie" },
              ].map((link) => (
                <a key={link.label} href={link.href} className="terms-policy-link">
                  {link.label} →
                </a>
              ))}
            </div>
          </SectionBlock>

          <SectionBlock id="disclaimers" title="22. Disclaimer of Warranties">
            <Prose>To the maximum extent permitted by applicable law, the website and its content are provided on an <strong>&quot;as is&quot; and &quot;as available&quot;</strong> basis. Sentr AI does not warrant that the website will be uninterrupted, secure, error-free, completely accurate, or suitable for every particular purpose.</Prose>
            <Prose>Nothing in these Terms excludes a warranty, right, or protection that cannot legally be excluded under applicable law.</Prose>
          </SectionBlock>

          <SectionBlock id="liability" title="23–24. Limitation of Liability & Indemnification">
            <Prose>To the maximum extent permitted by applicable law, Sentr AI shall not be liable for indirect, incidental, consequential, special, exemplary, or punitive damages arising from your use of the website, including losses relating to business interruption, loss of profits, loss of data, or loss of business opportunities.</Prose>
            <Prose>Nothing in these Terms is intended to exclude or limit liability where such exclusion is prohibited by applicable law.</Prose>
            <Sub>Indemnification</Sub>
            <Prose>To the extent permitted by applicable law, you agree to indemnify and hold harmless Sentr AI, its affiliates, directors, officers, and employees from claims arising from your violation of these Terms, unauthorized use of the website, or submission of unauthorized or unlawful content.</Prose>
          </SectionBlock>

          <SectionBlock id="governing" title="34. Governing Law & Jurisdiction">
            <Prose>These Terms shall be governed by and interpreted in accordance with the applicable laws of India. Subject to applicable law and any separate contractual agreement, disputes arising in connection with these Terms shall be subject to the jurisdiction of the appropriate courts in Noida, Uttar Pradesh, India.</Prose>
            <Prose>Sentr AI may modify these Terms from time to time. Your continued use of the website after changes are posted constitutes acceptance of the updated Terms.</Prose>
          </SectionBlock>

          {/* Contact CTA */}
          <div id="contact-terms" className="terms-contact-card">
            <h2 className="terms-contact-card__title">Questions About These Terms?</h2>
            <p className="terms-contact-card__desc">
              Our team is available to help you understand our products, services, and business processes. For legal or contractual enquiries, please include &quot;Legal Enquiry&quot; in the subject line.
            </p>
            <div className="terms-contact-card__actions">
              <a href="mailto:info@sentrai.in" className="terms-contact-btn-primary">
                Contact Sentr AI
              </a>
              <a href="tel:+918851847821" className="terms-contact-btn-secondary">
                +91 8851847821
              </a>
            </div>
            <p className="terms-contact-card__address">
              F-2, Block F, Sector 08, Noida, Uttar Pradesh – 201301, India
            </p>
          </div>

          <p className="terms-disclaimer">
            These Terms are governed by the applicable laws and regulations of India. Sentr AI reserves the right to modify these Terms at any time. Last Updated: September 2026.
          </p>
        </article>
      </div>
    </main>
  );
};
