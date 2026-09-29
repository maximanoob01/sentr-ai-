import React, { useState, useEffect } from "react";
import heroImg from "../assets/LEGAL/hero.png";

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
  <div id={id} style={{ background: "#ffffff", borderRadius: "16px", padding: "2.5rem", border: "1px solid #e2e8f0", boxShadow: "0 2px 16px rgba(0,0,0,0.04)", marginBottom: "1.75rem", scrollMarginTop: "110px" }}>
    <h2 style={{ fontSize: "1.3rem", fontWeight: 800, color: "#0f172a", marginBottom: "1.25rem", paddingBottom: "0.75rem", borderBottom: "2px solid #f1f5f9" }}>{title}</h2>
    {children}
  </div>
);

const Prose: React.FC<{ children: React.ReactNode; style?: React.CSSProperties }> = ({ children, style }) => (
  <p style={{ color: "#475569", lineHeight: 1.8, marginBottom: "0.85rem", ...style }}>{children}</p>
);

const Sub: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h3 style={{ fontSize: "1.05rem", fontWeight: 700, color: "#0f172a", margin: "1.25rem 0 0.6rem" }}>{children}</h3>
);

const Bullet: React.FC<{ items: string[] }> = ({ items }) => (
  <ul style={{ listStyle: "none", padding: 0, margin: "0.5rem 0 1rem", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
    {items.map((item) => (
      <li key={item} style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem", color: "#475569", fontSize: "0.93rem", lineHeight: 1.7 }}>
        <span style={{ width: "6px", height: "6px", background: "#3b82f6", borderRadius: "50%", marginTop: "0.55rem", flexShrink: 0 }} />
        {item}
      </li>
    ))}
  </ul>
);

export const CookiePage: React.FC = () => {
  const [activeSection, setActiveSection] = useState("what-are-cookies");

  useEffect(() => {
    window.scrollTo(0, 0);
    const observer = new IntersectionObserver(
      (entries) => { entries.forEach((e) => { if (e.isIntersecting) setActiveSection(e.target.id); }); },
      { rootMargin: "-20% 0px -70% 0px" }
    );
    tocItems.forEach(({ id }) => { const el = document.getElementById(id); if (el) observer.observe(el); });
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <main style={{ background: "#f8fafc", minHeight: "100vh" }}>

      {/* Hero */}
      <section style={{ position: "relative", height: "340px", overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <img src={heroImg} alt="Cookie Policy" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(2,6,23,0.85) 0%, rgba(15,23,42,0.72) 100%)" }} />
        <div style={{ position: "relative", zIndex: 1, textAlign: "center", padding: "0 1.5rem", paddingTop: "5rem" }}>
          <h1 style={{ fontSize: "clamp(2.2rem, 5vw, 3.5rem)", fontWeight: 900, color: "#ffffff", letterSpacing: "-0.03em", lineHeight: 1.1, marginBottom: "0.85rem" }}>Cookie Policy</h1>
          <p style={{ color: "#cbd5e1", fontSize: "1.05rem" }}>How We Use Cookies and Similar Technologies</p>
          <p style={{ color: "#94a3b8", fontSize: "0.85rem", marginTop: "0.5rem" }}>Last Updated: September 2026</p>
        </div>
      </section>

      {/* Body */}
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "4rem 1.5rem", display: "flex", gap: "3.5rem", alignItems: "flex-start" }}>

        {/* TOC */}
        <aside style={{ position: "sticky", top: "100px", width: "230px", flexShrink: 0, background: "#ffffff", borderRadius: "16px", border: "1px solid #e2e8f0", padding: "1.5rem", boxShadow: "0 4px 24px rgba(0,0,0,0.06)" }}>
          <p style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "#94a3b8", marginBottom: "1rem" }}>Table of Contents</p>
          <nav style={{ display: "flex", flexDirection: "column", gap: "0.2rem" }}>
            {tocItems.map(({ id, label }) => (
              <button key={id} onClick={() => scrollTo(id)} style={{ textAlign: "left", background: activeSection === id ? "#eff6ff" : "transparent", border: "none", borderLeft: activeSection === id ? "3px solid #3b82f6" : "3px solid transparent", color: activeSection === id ? "#1d4ed8" : "#64748b", fontWeight: activeSection === id ? 700 : 500, fontSize: "0.82rem", padding: "0.45rem 0.75rem", borderRadius: "0 8px 8px 0", cursor: "pointer", transition: "all 0.2s ease" }}>
                {label}
              </button>
            ))}
          </nav>
        </aside>

        {/* Content */}
        <article style={{ flex: 1, minWidth: 0 }}>

          {/* Intro card */}
          <div style={{ background: "#ffffff", borderRadius: "16px", padding: "2.5rem", border: "1px solid #e2e8f0", boxShadow: "0 2px 16px rgba(0,0,0,0.04)", marginBottom: "1.75rem" }}>
            <h2 style={{ fontSize: "1.6rem", fontWeight: 800, color: "#0f172a", marginBottom: "1rem" }}>About Our Cookie Policy</h2>
            <Prose>This Cookie Policy explains how <strong>Sentr AI Technologies Pvt. Ltd.</strong> ("Sentr AI", "we", "us", or "our") uses cookies and similar tracking technologies on our website.</Prose>
            <Prose>We are committed to being transparent about the technologies we use. This policy explains what cookies are, why we use them, and how you can manage your preferences.</Prose>
            <div style={{ background: "#eff6ff", borderRadius: "12px", padding: "1.25rem 1.5rem", borderLeft: "4px solid #3b82f6", marginTop: "1rem" }}>
              <p style={{ color: "#1d4ed8", fontSize: "0.9rem", fontWeight: 600, margin: 0 }}>This Cookie Policy should be read alongside our <a href="/privacy" style={{ color: "#1d4ed8" }}>Privacy Policy</a>, which explains how we handle personal information more broadly.</p>
            </div>
          </div>

          <SectionBlock id="what-are-cookies" title="1. What Are Cookies?">
            <Prose>Cookies are small text files placed on your device when you visit a website. They help websites remember information about your visit, improve functionality, understand how visitors use the website, and provide a better user experience.</Prose>
            <Prose>Cookies may be stored on your computer, mobile phone, tablet, or other device. Similar technologies — such as pixels, web beacons, local storage, and session storage — may also be used for comparable purposes.</Prose>
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
              <div key={item.title} style={{ display: "flex", gap: "1rem", padding: "1rem 0", borderBottom: "1px solid #f1f5f9" }}>
                <div style={{ width: "8px", height: "8px", background: "#3b82f6", borderRadius: "50%", marginTop: "0.5rem", flexShrink: 0 }} />
                <div>
                  <p style={{ fontWeight: 700, color: "#0f172a", marginBottom: "0.25rem" }}>{item.title}</p>
                  <p style={{ color: "#64748b", fontSize: "0.9rem", lineHeight: 1.7 }}>{item.desc}</p>
                </div>
              </div>
            ))}
            <Prose style={{ marginTop: "1rem", fontStyle: "italic", color: "#94a3b8", fontSize: "0.875rem" }}>We do not use cookies simply because they are available. We use them where they provide a legitimate operational, analytical, security, or user-experience purpose.</Prose>
          </SectionBlock>

          <SectionBlock id="types" title="3. Types of Cookies We May Use">
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "1rem", marginBottom: "1.5rem" }}>
              {[
                { label: "A", title: "Strictly Necessary", color: "#0f172a", bg: "#f1f5f9", desc: "Required for the website to function. Cannot be disabled through preference controls." },
                { label: "B", title: "Performance & Analytics", color: "#1d4ed8", bg: "#eff6ff", desc: "Help us understand how visitors use our website to improve structure and performance." },
                { label: "C", title: "Functional", color: "#065f46", bg: "#ecfdf5", desc: "Allow the website to remember choices or preferences to make your experience more convenient." },
                { label: "D", title: "Marketing", color: "#7c3aed", bg: "#f5f3ff", desc: "Used to measure campaigns, understand marketing interactions, and deliver relevant advertising." },
              ].map((c) => (
                <div key={c.title} style={{ background: c.bg, borderRadius: "12px", padding: "1.25rem", border: "1px solid rgba(0,0,0,0.06)" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", marginBottom: "0.6rem" }}>
                    <span style={{ width: "28px", height: "28px", background: c.color, color: "#fff", borderRadius: "8px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.8rem", fontWeight: 800, flexShrink: 0 }}>{c.label}</span>
                    <p style={{ fontWeight: 700, color: "#0f172a", fontSize: "0.92rem", margin: 0 }}>{c.title}</p>
                  </div>
                  <p style={{ color: "#64748b", fontSize: "0.83rem", lineHeight: 1.6, margin: 0 }}>{c.desc}</p>
                </div>
              ))}
            </div>
            <Sub>A. Strictly Necessary Cookies</Sub>
            <Prose>These cookies support functions such as website security, page navigation, session management, form functionality, cookie preferences, and basic website operations. Because they are necessary, they generally cannot be disabled.</Prose>
            <Sub>B. Performance and Analytics Cookies</Sub>
            <Prose>These cookies may collect information about pages visited, time spent on pages, number of visitors, traffic sources, browser and device information, and website errors. This helps us improve the structure, content, speed, and functionality of our website. Where third-party analytics services are used, those providers may process information according to their own privacy policies.</Prose>
            <Sub>C. Functional Cookies</Sub>
            <Prose>Functional cookies may remember language preferences, region settings, user interface preferences, and previously selected website options — making your experience more convenient.</Prose>
            <Sub>D. Marketing Cookies</Sub>
            <Prose>Marketing cookies may be used to measure advertising campaigns, understand interactions with marketing content, track visits from advertisements, and measure conversions. They will only be used where applicable and subject to permissions required by applicable law.</Prose>
          </SectionBlock>

          <SectionBlock id="third-party" title="4. Third-Party Cookies">
            <Prose>Some cookies may be placed by third-party service providers that help us operate, analyze, secure, or improve our website. These may include:</Prose>
            <Bullet items={["Website analytics platforms","Security and fraud-prevention services","Embedded content providers","Marketing and advertising platforms","Customer communication tools","Social media services"]} />
            <Prose>Third-party providers may collect information through their technologies according to their own privacy policies and terms. We recommend reviewing the privacy and cookie policies of any third-party services used on our website.</Prose>
          </SectionBlock>

          <SectionBlock id="duration" title="5. How Long Cookies Stay on Your Device">
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", margin: "0.5rem 0 1.5rem" }}>
              {[
                { title: "Session Cookies", icon: "⏱", desc: "Temporary cookies deleted automatically when you close your browser. They do not persist after your session ends." },
                { title: "Persistent Cookies", icon: "💾", desc: "Remain on your device for a specified period or until manually deleted. Duration depends on the purpose and service." },
              ].map((c) => (
                <div key={c.title} style={{ background: "#f8fafc", border: "1px solid #e2e8f0", borderRadius: "12px", padding: "1.5rem" }}>
                  <p style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>{c.icon}</p>
                  <p style={{ fontWeight: 700, color: "#0f172a", marginBottom: "0.5rem" }}>{c.title}</p>
                  <p style={{ color: "#64748b", fontSize: "0.85rem", lineHeight: 1.6, margin: 0 }}>{c.desc}</p>
                </div>
              ))}
            </div>
            <Prose>The exact retention period depends on the purpose of the cookie and the service that places it.</Prose>
          </SectionBlock>

          <SectionBlock id="managing" title="6. Managing Your Cookie Preferences">
            <Prose>You can control or manage cookies through your browser settings. Most browsers allow you to:</Prose>
            <Bullet items={["View stored cookies","Delete existing cookies","Block certain cookies","Block all cookies","Receive notifications before cookies are stored","Allow cookies only from selected websites"]} />
            <Prose>Please note that disabling certain cookies may affect the functionality or performance of parts of our website.</Prose>
            <Prose>If our website provides a cookie preference or consent management tool, you may also use that tool to manage the categories of cookies you accept.</Prose>
          </SectionBlock>

          <SectionBlock id="browser" title="7. Browser Controls">
            <Prose>You can manage cookies through commonly used browsers. The exact steps vary depending on the browser and version — refer to your browser's official documentation for current instructions.</Prose>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem", marginTop: "1rem" }}>
              {["Google Chrome","Microsoft Edge","Mozilla Firefox","Apple Safari","Opera"].map((b) => (
                <span key={b} style={{ background: "#eff6ff", border: "1px solid #bfdbfe", color: "#1d4ed8", borderRadius: "999px", padding: "0.4rem 1rem", fontSize: "0.83rem", fontWeight: 600 }}>{b}</span>
              ))}
            </div>
          </SectionBlock>

          <SectionBlock id="personal-data" title="8. Do Cookies Collect Personal Information?">
            <Prose>Some cookies may collect information that can be associated with an individual or device, depending on how they are configured. Examples may include:</Prose>
            <Bullet items={["IP address","Device information","Browser type","Website activity","Approximate geographic information","Online identifiers"]} />
            <Prose>We handle information collected through cookies in accordance with our <a href="/privacy" style={{ color: "#3b82f6", fontWeight: 600 }}>Privacy Policy</a> and applicable data protection laws.</Prose>
          </SectionBlock>

          <SectionBlock id="security" title="9. Cookies and Security">
            <Prose>Cookies and similar technologies may also support website security. For example, they may help us:</Prose>
            <Bullet items={["Detect suspicious activity","Prevent unauthorized access","Protect forms and online services","Maintain secure sessions","Identify potentially fraudulent activity"]} />
            <Prose>Cookies are only one part of our overall security measures and do not guarantee complete protection against unauthorized activity.</Prose>
          </SectionBlock>

          <SectionBlock id="changes" title="10. Changes to This Cookie Policy">
            <Prose>We may update this Cookie Policy from time to time to reflect changes to our website, technologies we use, third-party services, applicable legal or regulatory requirements, or improvements to our privacy practices.</Prose>
            <Prose>When we make changes, we will update the "Last Updated" date at the top of this page. We encourage you to review this page periodically to stay informed about how cookies are used.</Prose>
          </SectionBlock>

          {/* Contact CTA */}
          <div id="contact-cookie" style={{ background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)", borderRadius: "20px", padding: "3rem", textAlign: "center", scrollMarginTop: "110px" }}>
            <h2 style={{ fontSize: "1.75rem", fontWeight: 800, color: "#ffffff", marginBottom: "0.75rem" }}>Questions About Cookies?</h2>
            <p style={{ color: "#94a3b8", lineHeight: 1.8, marginBottom: "2rem", maxWidth: "520px", margin: "0 auto 2rem" }}>
              If you have questions about how we use cookies or similar technologies, please get in touch with our team.
            </p>
            <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
              <a href="mailto:info@sentrai.in" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: "#3b82f6", color: "#ffffff", textDecoration: "none", padding: "0.75rem 1.75rem", borderRadius: "999px", fontWeight: 700, fontSize: "0.9rem" }}>
                info@sentrai.in
              </a>
              <a href="tel:+918851847821" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: "rgba(255,255,255,0.08)", color: "#e2e8f0", textDecoration: "none", padding: "0.75rem 1.75rem", borderRadius: "999px", fontWeight: 600, fontSize: "0.9rem", border: "1px solid rgba(255,255,255,0.15)" }}>
                +91 8851847821
              </a>
            </div>
            <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap", marginTop: "1.5rem" }}>
              {[{ label: "Privacy Policy", href: "/privacy" },{ label: "Terms of Use", href: "/terms" }].map((link) => (
                <a key={link.label} href={link.href} style={{ color: "#64748b", fontSize: "0.83rem", textDecoration: "none", borderBottom: "1px solid #334155", paddingBottom: "2px" }}>
                  {link.label}
                </a>
              ))}
            </div>
            <p style={{ color: "#64748b", fontSize: "0.82rem", marginTop: "1.25rem" }}>
              F-2, Block F, Sector 08, Noida, Uttar Pradesh – 201301, India
            </p>
          </div>

          <p style={{ color: "#94a3b8", fontSize: "0.8rem", textAlign: "center", marginTop: "2.5rem", lineHeight: 1.7 }}>
            This Cookie Policy is governed by the applicable laws and regulations of India. Last Updated: September 2026.
          </p>
        </article>
      </div>
    </main>
  );
};
