import React, { useState, useEffect } from "react";
import heroImg from "../assets/contact us/hero.png";

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
  <div id={id} style={{ background: "#ffffff", borderRadius: "16px", padding: "2.5rem", border: "1px solid #e2e8f0", boxShadow: "0 2px 16px rgba(0,0,0,0.04)", marginBottom: "1.75rem", scrollMarginTop: "110px" }}>
    <h2 style={{ fontSize: "1.3rem", fontWeight: 800, color: "#0f172a", marginBottom: "1.25rem", paddingBottom: "0.75rem", borderBottom: "2px solid #f1f5f9" }}>{title}</h2>
    {children}
  </div>
);

const Bullet: React.FC<{ items: string[] }> = ({ items }) => (
  <ul style={{ listStyle: "none", padding: 0, margin: "0.5rem 0 1rem", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
    {items.map((item) => (
      <li key={item} style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem", color: "#475569", fontSize: "0.93rem", lineHeight: 1.7 }}>
        <span style={{ width: "6px", height: "6px", background: "#f97316", borderRadius: "50%", marginTop: "0.55rem", flexShrink: 0 }} />
        {item}
      </li>
    ))}
  </ul>
);

const Prose: React.FC<{ children: React.ReactNode; style?: React.CSSProperties }> = ({ children, style }) => (
  <p style={{ color: "#475569", lineHeight: 1.8, marginBottom: "0.85rem", ...style }}>{children}</p>
);

const Sub: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h3 style={{ fontSize: "1.05rem", fontWeight: 700, color: "#0f172a", margin: "1.25rem 0 0.6rem" }}>{children}</h3>
);

export const PrivacyPage: React.FC = () => {
  const [activeSection, setActiveSection] = useState("introduction");

  useEffect(() => {
    window.scrollTo(0, 0);
    const observer = new IntersectionObserver(
      (entries) => { entries.forEach((e) => { if (e.isIntersecting) setActiveSection(e.target.id); }); },
      { rootMargin: "-20% 0px -70% 0px" }
    );
    tocSections.forEach(({ id }) => { const el = document.getElementById(id); if (el) observer.observe(el); });
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
        <img src={heroImg} alt="Privacy Policy" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(2,6,23,0.85) 0%, rgba(15,23,42,0.72) 100%)" }} />
        <div style={{ position: "relative", zIndex: 1, textAlign: "center", padding: "0 1.5rem" }}>
          <span style={{ display: "inline-block", background: "rgba(249,115,22,0.18)", border: "1px solid rgba(249,115,22,0.4)", color: "#fb923c", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", borderRadius: "999px", padding: "0.35rem 1.1rem", marginBottom: "1.25rem" }}>Legal</span>
          <h1 style={{ fontSize: "clamp(2.2rem, 5vw, 3.5rem)", fontWeight: 900, color: "#ffffff", letterSpacing: "-0.03em", lineHeight: 1.1, marginBottom: "0.85rem" }}>Privacy Policy</h1>
          <p style={{ color: "#cbd5e1", fontSize: "1.05rem" }}>How We Collect, Use, and Protect Your Information</p>
          <p style={{ color: "#94a3b8", fontSize: "0.85rem", marginTop: "0.5rem" }}>Last Updated: September 2026</p>
        </div>
      </section>

      {/* Body */}
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "4rem 1.5rem", display: "flex", gap: "3.5rem", alignItems: "flex-start" }}>
        {/* TOC */}
        <aside style={{ position: "sticky", top: "100px", width: "230px", flexShrink: 0, background: "#ffffff", borderRadius: "16px", border: "1px solid #e2e8f0", padding: "1.5rem", boxShadow: "0 4px 24px rgba(0,0,0,0.06)" }}>
          <p style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "#94a3b8", marginBottom: "1rem" }}>Table of Contents</p>
          <nav style={{ display: "flex", flexDirection: "column", gap: "0.2rem" }}>
            {tocSections.map(({ id, label }) => (
              <button key={id} onClick={() => scrollTo(id)} style={{ textAlign: "left", background: activeSection === id ? "#fff7ed" : "transparent", border: "none", borderLeft: activeSection === id ? "3px solid #f97316" : "3px solid transparent", color: activeSection === id ? "#ea580c" : "#64748b", fontWeight: activeSection === id ? 700 : 500, fontSize: "0.82rem", padding: "0.45rem 0.75rem", borderRadius: "0 8px 8px 0", cursor: "pointer", transition: "all 0.2s ease" }}>
                {label}
              </button>
            ))}
          </nav>
        </aside>

        {/* Content */}
        <article style={{ flex: 1, minWidth: 0 }}>
          <div id="introduction" style={{ background: "#ffffff", borderRadius: "16px", padding: "2.5rem", border: "1px solid #e2e8f0", boxShadow: "0 2px 16px rgba(0,0,0,0.04)", marginBottom: "1.75rem", scrollMarginTop: "110px" }}>
            <h2 style={{ fontSize: "1.6rem", fontWeight: 800, color: "#0f172a", marginBottom: "1rem" }}>Welcome to Our Privacy Policy</h2>
            <Prose><strong>Sentr AI Technologies Pvt. Ltd.</strong> ("Sentr AI", "we", "us", or "our") respects your privacy and is committed to protecting personal information entrusted to us.</Prose>
            <Prose>This Privacy Policy explains how we collect, use, disclose, store, protect, and otherwise process information when you visit or use our website; contact us; request a product demonstration; enquire about Aindri or our other solutions; or otherwise interact with Sentr AI in connection with our products and services.</Prose>
            <Prose>Sentr AI is headquartered in Noida, Uttar Pradesh, India.</Prose>
            <div style={{ background: "#f1f5f9", borderRadius: "12px", padding: "1.5rem", marginTop: "1rem" }}>
              <p style={{ fontWeight: 700, color: "#0f172a", marginBottom: "0.5rem" }}>Contact</p>
              <p style={{ color: "#475569", fontSize: "0.9rem", lineHeight: 1.8 }}>
                Email: <a href="mailto:info@sentrai.in" style={{ color: "#f97316" }}>info@sentrai.in</a><br />
                Phone: +91 8851847821<br />
                Address: F-2, Block F, Sector 08, Noida, Uttar Pradesh - 201301, India
              </p>
            </div>
          </div>

          <SectionBlock id="scope" title="1. Scope of This Privacy Policy">
            <Prose>This Privacy Policy applies to personal information collected through the Sentr AI website and through related interactions including contact forms, demo requests, business communications, email interactions, website analytics, and other digital or offline interactions where this policy is referenced.</Prose>
            <Prose>This Privacy Policy does not apply to third-party websites linked from our website. Those services are governed by their own privacy policies.</Prose>
          </SectionBlock>

          <SectionBlock id="information-collected" title="2. Information We Collect">
            <Sub>2.1 Information You Provide Directly</Sub>
            <Prose>When you contact us, request information, or submit an enquiry, we may collect:</Prose>
            <Bullet items={["Full name","Business or organization name","Job title or designation","Work email address","Telephone or mobile number","Business address","Industry or business sector","Information about your technology requirements","Product or service interests","Meeting or demonstration requirements","Other information that you voluntarily provide"]} />
            <Prose style={{ fontStyle: "italic", color: "#94a3b8", fontSize: "0.875rem" }}>You should avoid submitting unnecessary sensitive personal information through general website forms.</Prose>
          </SectionBlock>

          <SectionBlock id="auto-collected" title="3. Information Collected Automatically">
            <Prose>When you visit our website, certain technical information may be collected automatically, including:</Prose>
            <Bullet items={["IP address","Browser type and version","Device type","Operating system","Approximate geographic region","Website pages visited","Date and time of visits","Referring website or page","Navigation and interaction information","Website performance and error information"]} />
            <Prose>This information may be collected through server logs, analytics technologies, cookies, pixels, or similar technologies.</Prose>
          </SectionBlock>

          <SectionBlock id="cookies" title="4. Cookies and Similar Technologies">
            <Prose>Sentr AI may use cookies and similar technologies to operate, secure, analyze, and improve its website. Cookies may help us keep the website functioning correctly, understand how visitors use the website, measure performance, and improve user experience.</Prose>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1rem", margin: "1.25rem 0" }}>
              {[{ title: "Essential Cookies", desc: "Necessary for website functionality, security, and basic operation." },{ title: "Analytics Cookies", desc: "Help us understand website traffic, visitor behavior, and performance." },{ title: "Preference Cookies", desc: "Remember certain user preferences or settings." },{ title: "Marketing Technologies", desc: "Understand campaign performance or deliver relevant communications." }].map((c) => (
                <div key={c.title} style={{ background: "#f8fafc", border: "1px solid #e2e8f0", borderRadius: "10px", padding: "1rem" }}>
                  <p style={{ fontWeight: 700, color: "#0f172a", fontSize: "0.9rem", marginBottom: "0.4rem" }}>{c.title}</p>
                  <p style={{ color: "#64748b", fontSize: "0.83rem", lineHeight: 1.6 }}>{c.desc}</p>
                </div>
              ))}
            </div>
            <Prose>You may be able to control cookies through your browser settings or through any cookie-management controls made available on our website.</Prose>
          </SectionBlock>

          <SectionBlock id="how-we-use" title="5. How We Use Personal Information">
            <Prose>Sentr AI may use personal information for legitimate business and operational purposes including:</Prose>
            {[{ title: "Responding to Enquiries", desc: "Respond to questions, provide requested information, respond to demo requests, and communicate regarding our products and services." },{ title: "Providing Products and Services", desc: "Deliver services, configure solutions, provide technical assistance, manage customer relationships, and maintain service communications." },{ title: "Improving Our Website and Services", desc: "Improve website functionality and user experience, understand visitor interests, develop new services, and identify technical issues." },{ title: "Security and Fraud Prevention", desc: "Protect our website and systems, detect suspicious activity, prevent unauthorized access, and maintain system integrity." },{ title: "Legal and Regulatory Compliance", desc: "Comply with applicable laws, respond to lawful requests, meet regulatory obligations, or protect our legal rights." }].map((item) => (
              <div key={item.title} style={{ display: "flex", gap: "1rem", padding: "1rem 0", borderBottom: "1px solid #f1f5f9" }}>
                <div style={{ width: "8px", height: "8px", background: "#f97316", borderRadius: "50%", marginTop: "0.5rem", flexShrink: 0 }} />
                <div>
                  <p style={{ fontWeight: 700, color: "#0f172a", marginBottom: "0.25rem" }}>{item.title}</p>
                  <p style={{ color: "#64748b", fontSize: "0.9rem", lineHeight: 1.7 }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </SectionBlock>

          <SectionBlock id="aindri" title="6. Aindri and Intelligent Monitoring Data">
            <div style={{ background: "linear-gradient(135deg, #0f172a 0%, #1e3a5f 100%)", borderRadius: "14px", padding: "2rem", marginBottom: "1.5rem" }}>
              <p style={{ color: "#f97316", fontWeight: 700, fontSize: "0.8rem", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "0.75rem" }}>Platform Notice</p>
              <p style={{ color: "#e2e8f0", lineHeight: 1.8, fontSize: "0.95rem" }}>Aindri is Sentr AI's computer-vision platform designed to transform existing security-camera infrastructure into a real-time operational intelligence system. Because Aindri can analyze camera feeds and identify people, objects, activities, and operational anomalies, privacy and security are important considerations.</p>
            </div>
            <Sub>6.1 Camera and Video Information</Sub>
            <Prose>Where Aindri is deployed by a customer, camera feeds may be processed according to the customer's configuration. This may include video streams, snapshots associated with detected events, objects and activities detected, operational anomalies, product movement, and access-related events.</Prose>
            <Sub>6.2 Customer-Controlled Deployments</Sub>
            <Prose>In many Aindri deployments, the organization operating the cameras determines which cameras are connected, what areas are monitored, what types of events are detected, and how the system is used. Customers should ensure their use complies with applicable privacy, employment, workplace-monitoring, and other legal requirements.</Prose>
          </SectionBlock>

          <SectionBlock id="sharing" title="10. How We Share Information">
            <Prose>Sentr AI does not sell personal information as a business practice. We may share information where reasonably necessary with:</Prose>
            <Bullet items={["Service Providers – third-party providers that help us operate our website, infrastructure, communications, analytics, hosting, or security.","Technology Providers – where required to deliver services through cloud infrastructure, cybersecurity systems, or communication platforms.","Business Partners – where necessary to provide requested products or services.","Professional Advisors – legal, accounting, auditing, or consulting professionals.","Government or Law Enforcement Authorities – where required by applicable law, legal process, or lawful governmental request.","Corporate Transactions – as part of a merger, acquisition, restructuring, or similar business transaction."]} />
          </SectionBlock>

          <SectionBlock id="security" title="13. Data Security">
            <Prose>Sentr AI takes reasonable measures designed to protect personal information against unauthorized access, loss, misuse, alteration, and other unauthorized processing. Security measures may include:</Prose>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "0.75rem", margin: "1rem 0" }}>
              {["Access controls","Authentication mechanisms","Encryption where appropriate","Network security","Monitoring & logging","Secure software development","Backup & recovery","Security testing","Vendor controls","Administrative safeguards"].map((item) => (
                <div key={item} style={{ display: "flex", alignItems: "center", gap: "0.5rem", background: "#f1f5f9", borderRadius: "8px", padding: "0.6rem 0.8rem" }}>
                  <div style={{ width: "6px", height: "6px", background: "#22c55e", borderRadius: "50%", flexShrink: 0 }} />
                  <span style={{ fontSize: "0.82rem", color: "#475569", fontWeight: 500 }}>{item}</span>
                </div>
              ))}
            </div>
            <Prose>However, no website, network, or method of electronic transmission can be guaranteed to be completely secure.</Prose>
          </SectionBlock>

          <SectionBlock id="retention" title="14. Data Retention">
            <Prose>We retain personal information only for as long as reasonably necessary for the purposes described in this Privacy Policy, unless a longer period is required by applicable law. Retention periods depend on the purpose of collection, the nature of the information, contractual requirements, legal obligations, and legitimate business requirements.</Prose>
            <Prose>When information is no longer required, it may be deleted, anonymized, aggregated, or securely disposed of.</Prose>
          </SectionBlock>

          <SectionBlock id="your-rights" title="15. Your Privacy Rights">
            <Prose>Depending on applicable law, individuals may have rights to:</Prose>
            <Bullet items={["Request information about personal data processed by us","Request correction of inaccurate or incomplete information","Request deletion where applicable","Withdraw consent where processing is based on consent","Request information regarding the purposes of processing","Raise concerns regarding our handling of personal information","Submit a privacy-related request or complaint"]} />
            <Prose>Under India's Digital Personal Data Protection Act, consent is required to meet specified standards, and the Act provides for withdrawal of consent in applicable circumstances.</Prose>
          </SectionBlock>

          <div id="contact" style={{ background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)", borderRadius: "20px", padding: "3rem", textAlign: "center", scrollMarginTop: "110px" }}>
            <span style={{ display: "inline-block", background: "rgba(249,115,22,0.2)", border: "1px solid rgba(249,115,22,0.4)", color: "#fb923c", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", borderRadius: "999px", padding: "0.35rem 1rem", marginBottom: "1.25rem" }}>Privacy Requests</span>
            <h2 style={{ fontSize: "1.75rem", fontWeight: 800, color: "#ffffff", marginBottom: "0.75rem" }}>Submit a Privacy Request</h2>
            <p style={{ color: "#94a3b8", lineHeight: 1.8, marginBottom: "2rem", maxWidth: "520px", margin: "0 auto 2rem" }}>To submit a privacy-related request, please contact our team. We may need to verify your identity before processing certain requests.</p>
            <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
              <a href="mailto:info@sentrai.in" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: "#f97316", color: "#ffffff", textDecoration: "none", padding: "0.75rem 1.75rem", borderRadius: "999px", fontWeight: 700, fontSize: "0.9rem" }}>info@sentrai.in</a>
              <a href="tel:+918851847821" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: "rgba(255,255,255,0.08)", color: "#e2e8f0", textDecoration: "none", padding: "0.75rem 1.75rem", borderRadius: "999px", fontWeight: 600, fontSize: "0.9rem", border: "1px solid rgba(255,255,255,0.15)" }}>+91 8851847821</a>
            </div>
            <p style={{ color: "#64748b", fontSize: "0.82rem", marginTop: "1.5rem" }}>F-2, Block F, Sector 08, Noida, Uttar Pradesh - 201301, India</p>
          </div>

          <p style={{ color: "#94a3b8", fontSize: "0.8rem", textAlign: "center", marginTop: "2.5rem", lineHeight: 1.7 }}>We may update this Privacy Policy from time to time. Changes will be reflected by the "Last Updated" date. This Privacy Policy is governed by the applicable laws and regulations of India.</p>
        </article>
      </div>
    </main>
  );
};
