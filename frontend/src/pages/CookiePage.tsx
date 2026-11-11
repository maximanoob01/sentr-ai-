import React, { useState, useEffect, useRef } from "react";
import heroImg from "../assets/LEGAL/hero.png";
import "./CookiePage.css";

const tocItems = [
  { id: "what-are-cookies", label: "What Are Cookies?" },
  { id: "why-we-use", label: "Why We Use Cookies" },
  { id: "types", label: "Types of Cookies" },
  { id: "third-party", label: "Third-Party Cookies" },
  { id: "duration", label: "Cookie Duration" },
  { id: "managing", label: "Managing Preferences" },
  { id: "browser", label: "Browser Controls" },
  { id: "personal-data", label: "Personal Information" },
  { id: "security", label: "Cookies & Security" },
  { id: "changes", label: "Changes to Policy" },
  { id: "contact-cookie", label: "Contact Us" },
];

const SectionBlock: React.FC<{ id: string; title: string; children: React.ReactNode }> = ({ id, title, children }) => (
  <div id={id} className="cookie-section-block">
    <h2 className="cookie-section-block__title">{title}</h2>
    {children}
  </div>
);

const Prose: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = "" }) => (
  <p className={`cookie-prose ${className}`}>{children}</p>
);

const Sub: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h3 className="cookie-subheading">{children}</h3>
);

const Bullet: React.FC<{ items: string[] }> = ({ items }) => (
  <ul className="cookie-bullet-list">
    {items.map((item) => (
      <li key={item} className="cookie-bullet-item">
        <span className="cookie-bullet-dot" />
        <span>{item}</span>
      </li>
    ))}
  </ul>
);

export const CookiePage: React.FC = () => {
  const [activeSection, setActiveSection] = useState("what-are-cookies");
  const tocNavRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setActiveSection(e.target.id);
          }
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
    <main className="cookie-page">
      {/* Hero */}
      <section className="cookie-hero">
        <img src={heroImg} alt="Cookie Policy" className="cookie-hero__bg" />
        <div className="cookie-hero__overlay" />
        <div className="cookie-hero__content">
          <h1 className="cookie-hero__title">Cookie Policy</h1>
          <p className="cookie-hero__subtitle">How We Use Cookies and Similar Technologies</p>
          <p className="cookie-hero__updated">Last Updated: September 2026</p>
        </div>
      </section>

      {/* Body */}
      <div className="cookie-container">
        {/* Table of Contents */}
        <aside className="cookie-toc">
          <p className="cookie-toc__heading">Table of Contents</p>
          <nav ref={tocNavRef} className="cookie-toc__nav" aria-label="Table of contents">
            {tocItems.map(({ id, label }) => (
              <button
                key={id}
                data-id={id}
                onClick={() => scrollTo(id)}
                className={`cookie-toc__link ${activeSection === id ? "cookie-toc__link--active" : ""}`}
                aria-current={activeSection === id ? "true" : undefined}
              >
                {label}
              </button>
            ))}
          </nav>
        </aside>

        {/* Content */}
        <article className="cookie-content">
          {/* Intro card */}
          <div className="cookie-section-block">
            <h2 className="cookie-section-block__intro-title">About Our Cookie Policy</h2>
            <Prose>
              This Cookie Policy explains how <strong>Sentr AI Technologies Pvt. Ltd.</strong> ("Sentr AI", "we", "us", or "our") uses cookies and similar tracking technologies on our website.
            </Prose>
            <Prose>
              We are committed to being transparent about the technologies we use. This policy explains what cookies are, why we use them, and how you can manage your preferences.
            </Prose>
            <div className="cookie-notice-banner">
              <p className="cookie-notice-banner__text">
                This Cookie Policy should be read alongside our{" "}
                <a href="/privacy" className="cookie-notice-banner__link">
                  Privacy Policy
                </a>
                , which explains how we handle personal information more broadly.
              </p>
            </div>
          </div>

          <SectionBlock id="what-are-cookies" title="1. What Are Cookies?">
            <Prose>
              Cookies are small text files placed on your device when you visit a website. They help websites remember information about your visit, improve functionality, understand how visitors use the website, and provide a better user experience.
            </Prose>
            <Prose>
              Cookies may be stored on your computer, mobile phone, tablet, or other device. Similar technologies — such as pixels, web beacons, local storage, and session storage — may also be used for comparable purposes.
            </Prose>
          </SectionBlock>

          <SectionBlock id="why-we-use" title="2. Why We Use Cookies">
            <Prose>Sentr AI may use cookies and similar technologies for several purposes, including:</Prose>
            {[
              { title: "Essential website functionality", desc: "To make sure important parts of the website work properly." },
              { title: "Website performance", desc: "To understand how visitors interact with our website and identify technical issues." },
              { title: "Analytics", desc: "To measure website traffic, page views, and general usage patterns." },
              { title: "User preferences", desc: "To remember certain settings or preferences where applicable." },
              { title: "Security", desc: "To help detect suspicious activity and protect our website and users." },
              { title: "Marketing and advertising", desc: "Where applicable, to understand campaign performance or deliver more relevant communications." },
            ].map((item) => (
              <div key={item.title} className="cookie-why-item">
                <span className="cookie-why-item__dot" />
                <div>
                  <p className="cookie-why-item__title">{item.title}</p>
                  <p className="cookie-why-item__desc">{item.desc}</p>
                </div>
              </div>
            ))}
            <Prose className="cookie-prose--italic">
              We do not use cookies simply because they are available. We use them where they provide a legitimate operational, analytical, security, or user-experience purpose.
            </Prose>
          </SectionBlock>

          <SectionBlock id="types" title="3. Types of Cookies We May Use">
            <div className="cookie-types-grid">
              {[
                { label: "A", title: "Strictly Necessary", color: "#0f172a", bg: "#f1f5f9", desc: "Required for the website to function. Cannot be disabled through preference controls." },
                { label: "B", title: "Performance & Analytics", color: "#1d4ed8", bg: "#eff6ff", desc: "Help us understand how visitors use our website to improve structure and performance." },
                { label: "C", title: "Functional", color: "#065f46", bg: "#ecfdf5", desc: "Allow the website to remember choices or preferences to make your experience more convenient." },
                { label: "D", title: "Marketing", color: "#7c3aed", bg: "#f5f3ff", desc: "Used to measure campaigns, understand marketing interactions, and deliver relevant advertising." },
              ].map((c) => (
                <div key={c.title} className="cookie-type-card" style={{ background: c.bg }}>
                  <div className="cookie-type-card__header">
                    <span className="cookie-type-card__badge" style={{ background: c.color }}>
                      {c.label}
                    </span>
                    <p className="cookie-type-card__title">{c.title}</p>
                  </div>
                  <p className="cookie-type-card__desc">{c.desc}</p>
                </div>
              ))}
            </div>
            <Sub>A. Strictly Necessary Cookies</Sub>
            <Prose>
              These cookies support functions such as website security, page navigation, session management, form functionality, cookie preferences, and basic website operations. Because they are necessary, they generally cannot be disabled.
            </Prose>
            <Sub>B. Performance and Analytics Cookies</Sub>
            <Prose>
              These cookies may collect information about pages visited, time spent on pages, number of visitors, traffic sources, browser and device information, and website errors. This helps us improve the structure, content, speed, and functionality of our website. Where third-party analytics services are used, those providers may process information according to their own privacy policies.
            </Prose>
            <Sub>C. Functional Cookies</Sub>
            <Prose>
              Functional cookies may remember language preferences, region settings, user interface preferences, and previously selected website options — making your experience more convenient.
            </Prose>
            <Sub>D. Marketing Cookies</Sub>
            <Prose>
              Marketing cookies may be used to measure advertising campaigns, understand interactions with marketing content, track visits from advertisements, and measure conversions. They will only be used where applicable and subject to permissions required by applicable law.
            </Prose>
          </SectionBlock>

          <SectionBlock id="third-party" title="4. Third-Party Cookies">
            <Prose>
              Some cookies may be placed by third-party service providers that help us operate, analyze, secure, or improve our website. These may include:
            </Prose>
            <Bullet
              items={[
                "Website analytics platforms",
                "Security and fraud-prevention services",
                "Embedded content providers",
                "Marketing and advertising platforms",
                "Customer communication tools",
                "Social media services",
              ]}
            />
            <Prose>
              Third-party providers may collect information through their technologies according to their own privacy policies and terms. We recommend reviewing the privacy and cookie policies of any third-party services used on our website.
            </Prose>
          </SectionBlock>

          <SectionBlock id="duration" title="5. How Long Cookies Stay on Your Device">
            <div className="cookie-duration-grid">
              {[
                { title: "Session Cookies", icon: "⏱", desc: "Temporary cookies deleted automatically when you close your browser. They do not persist after your session ends." },
                { title: "Persistent Cookies", icon: "💾", desc: "Remain on your device for a specified period or until manually deleted. Duration depends on the purpose and service." },
              ].map((c) => (
                <div key={c.title} className="cookie-duration-card">
                  <p className="cookie-duration-card__icon">{c.icon}</p>
                  <p className="cookie-duration-card__title">{c.title}</p>
                  <p className="cookie-duration-card__desc">{c.desc}</p>
                </div>
              ))}
            </div>
            <Prose>The exact retention period depends on the purpose of the cookie and the service that places it.</Prose>
          </SectionBlock>

          <SectionBlock id="managing" title="6. Managing Your Cookie Preferences">
            <Prose>You can control or manage cookies through your browser settings. Most browsers allow you to:</Prose>
            <Bullet
              items={[
                "View stored cookies",
                "Delete existing cookies",
                "Block certain cookies",
                "Block all cookies",
                "Receive notifications before cookies are stored",
                "Allow cookies only from selected websites",
              ]}
            />
            <Prose>
              Please note that disabling certain cookies may affect the functionality or performance of parts of our website.
            </Prose>
            <Prose>
              If our website provides a cookie preference or consent management tool, you may also use that tool to manage the categories of cookies you accept.
            </Prose>
          </SectionBlock>

          <SectionBlock id="browser" title="7. Browser Controls">
            <Prose>
              You can manage cookies through commonly used browsers. The exact steps vary depending on the browser and version — refer to your browser's official documentation for current instructions.
            </Prose>
            <div className="cookie-browser-pills">
              {["Google Chrome", "Microsoft Edge", "Mozilla Firefox", "Apple Safari", "Opera"].map((b) => (
                <span key={b} className="cookie-browser-pill">
                  {b}
                </span>
              ))}
            </div>
          </SectionBlock>

          <SectionBlock id="personal-data" title="8. Do Cookies Collect Personal Information?">
            <Prose>
              Some cookies may collect information that can be associated with an individual or device, depending on how they are configured. Examples may include:
            </Prose>
            <Bullet
              items={[
                "IP address",
                "Device information",
                "Browser type",
                "Website activity",
                "Approximate geographic information",
                "Online identifiers",
              ]}
            />
            <Prose>
              We handle information collected through cookies in accordance with our{" "}
              <a href="/privacy" style={{ color: "#3b82f6", fontWeight: 600 }}>
                Privacy Policy
              </a>{" "}
              and applicable data protection laws.
            </Prose>
          </SectionBlock>

          <SectionBlock id="security" title="9. Cookies and Security">
            <Prose>
              Cookies and similar technologies may also support website security. For example, they may help us:
            </Prose>
            <Bullet
              items={[
                "Detect suspicious activity",
                "Prevent unauthorized access",
                "Protect forms and online services",
                "Maintain secure sessions",
                "Identify potentially fraudulent activity",
              ]}
            />
            <Prose>
              Cookies are only one part of our overall security measures and do not guarantee complete protection against unauthorized activity.
            </Prose>
          </SectionBlock>

          <SectionBlock id="changes" title="10. Changes to This Cookie Policy">
            <Prose>
              We may update this Cookie Policy from time to time to reflect changes to our website, technologies we use, third-party services, applicable legal or regulatory requirements, or improvements to our privacy practices.
            </Prose>
            <Prose>
              When we make changes, we will update the "Last Updated" date at the top of this page. We encourage you to review this page periodically to stay informed about how cookies are used.
            </Prose>
          </SectionBlock>

          {/* Contact CTA */}
          <div id="contact-cookie" className="cookie-contact-card">
            <h2 className="cookie-contact-card__title">Questions About Cookies?</h2>
            <p className="cookie-contact-card__subtitle">
              If you have questions about how we use cookies or similar technologies, please get in touch with our team.
            </p>
            <div className="cookie-contact-card__actions">
              <a href="mailto:info@sentrai.in" className="cookie-contact-card__btn-primary">
                info@sentrai.in
              </a>
              <a href="tel:+918851847821" className="cookie-contact-card__btn-secondary">
                +91 8851847821
              </a>
            </div>
            <div className="cookie-contact-card__links">
              {[
                { label: "Privacy Policy", href: "/privacy" },
                { label: "Terms of Use", href: "/terms" },
              ].map((link) => (
                <a key={link.label} href={link.href} className="cookie-contact-card__link">
                  {link.label}
                </a>
              ))}
            </div>
            <p className="cookie-contact-card__address">
              F-2, Block F, Sector 08, Noida, Uttar Pradesh – 201301, India
            </p>
          </div>

          <p className="cookie-footer-note">
            This Cookie Policy is governed by the applicable laws and regulations of India. Last Updated: September 2026.
          </p>
        </article>
      </div>
    </main>
  );
};
