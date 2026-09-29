import React, { useState, useEffect } from "react";
import heroImg from "../assets/LEGAL/hero.png";

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

export const TermsPage: React.FC = () => {
  const [activeSection, setActiveSection] = useState("acceptance");

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
        <img src={heroImg} alt="Terms of Use" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(2,6,23,0.85) 0%, rgba(15,23,42,0.72) 100%)" }} />
        <div style={{ position: "relative", zIndex: 1, textAlign: "center", padding: "0 1.5rem", paddingTop: "5rem" }}>
          <h1 style={{ fontSize: "clamp(2.2rem, 5vw, 3.5rem)", fontWeight: 900, color: "#ffffff", letterSpacing: "-0.03em", lineHeight: 1.1, marginBottom: "0.85rem" }}>Terms of Use</h1>
          <p style={{ color: "#cbd5e1", fontSize: "1.05rem" }}>Please read these terms carefully before using our website.</p>
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
            <h2 style={{ fontSize: "1.6rem", fontWeight: 800, color: "#0f172a", marginBottom: "1rem" }}>Welcome to Sentr AI</h2>
            <Prose>These Terms of Use govern your access to and use of the Sentr AI website, including its content, pages, resources, features, forms, and other services made available through the website.</Prose>
            <Prose>By accessing or using this website, you acknowledge that you have read, understood, and agree to be bound by these Terms. If you do not agree, please do not use the website.</Prose>
            <Prose>These Terms apply to website visitors, prospective customers, existing customers, business partners, vendors, and other users who access or interact with the website.</Prose>
            <div style={{ background: "#eff6ff", borderRadius: "12px", padding: "1.25rem 1.5rem", borderLeft: "4px solid #3b82f6", marginTop: "1rem" }}>
              <p style={{ color: "#1d4ed8", fontSize: "0.9rem", fontWeight: 600, margin: 0 }}>Sentr AI Technologies Pvt. Ltd. is headquartered in Noida, Uttar Pradesh, India.</p>
            </div>
          </div>

          <SectionBlock id="acceptance" title="1. About Sentr AI & Acceptance">
            <Prose>Sentr AI provides enterprise technology solutions across intelligent monitoring, AI, cybersecurity, cloud infrastructure, managed services, enterprise IT, and related technology consulting.</Prose>
            <Prose>Our flagship platform, <strong>Aindri</strong>, transforms existing camera infrastructure into a real-time operational intelligence system for industrial and operational environments.</Prose>
            <Prose>By accessing, browsing, or using this website, you agree to:</Prose>
            <Bullet items={["Comply with these Terms","Use the website only for lawful purposes","Respect the rights of Sentr AI and third parties","Provide accurate information when submitting through the website","Not misuse, disrupt, or attempt unauthorized access to the website or its systems"]} />
          </SectionBlock>

          <SectionBlock id="website-use" title="4. Website Use">
            <Prose>You may use this website for legitimate purposes, including:</Prose>
            <Bullet items={["Learning about Sentr AI","Exploring our products and solutions","Reading our articles and resources","Requesting a demonstration","Contacting our team","Making business enquiries","Exploring partnership opportunities","Understanding our technology capabilities"]} />
            <Prose>You must not use the website for unlawful, fraudulent, abusive, malicious, or unauthorized purposes.</Prose>
          </SectionBlock>

          <SectionBlock id="prohibited" title="5. Prohibited Activities">
            <Sub>Unauthorized Access</Sub>
            <Prose>You must not attempt to gain unauthorized access to the website, servers, networks, databases, administrative systems, APIs, accounts, or other systems connected to Sentr AI.</Prose>
            <Sub>Security Testing Without Authorization</Sub>
            <Prose>Unauthorized vulnerability scanning, penetration testing, security testing, port scanning, exploitation attempts, denial-of-service attacks, automated attacks, or other security assessments are strictly prohibited. Authorized security testing requires explicit written permission from Sentr AI.</Prose>
            <Sub>Website Interference</Sub>
            <Bullet items={["Introducing malware or malicious code","Distributing viruses","Attempting to disrupt website availability","Overloading our systems","Circumventing security controls","Interfering with the normal operation of the website"]} />
            <Sub>Automated Scraping</Sub>
            <Prose>You must not use automated systems, bots, crawlers, scripts, or similar tools to systematically extract or harvest website content without prior written permission. This does not restrict legitimate search-engine indexing.</Prose>
          </SectionBlock>

          <SectionBlock id="ip" title="6–7. Intellectual Property & Trademarks">
            <Prose>Unless otherwise stated, the website and its contents — including design, text, graphics, images, logos, branding, icons, videos, product descriptions, documentation, and software — are owned by or licensed to Sentr AI and protected by applicable intellectual-property laws.</Prose>
            <Prose>Nothing in these Terms transfers ownership of Sentr AI's intellectual property to you.</Prose>
            <Sub>Trademarks</Sub>
            <Prose>"Sentr AI", "Aindri", associated logos, product names, and branding elements may constitute trademarks or trade names of Sentr AI. You may not use Sentr AI branding in a way that suggests unauthorized endorsement, creates confusion, or misrepresents a business relationship.</Prose>
            <Sub>Limited Website License</Sub>
            <Prose>Subject to these Terms, you are granted a limited, non-exclusive, non-transferable, revocable right to access and use the website for legitimate informational and business purposes. You may not reproduce, modify, distribute, sell, or commercially exploit website materials without prior written permission.</Prose>
          </SectionBlock>

          <SectionBlock id="products" title="9–10. Website Content & Product Information">
            <Prose>Information published on this website is provided for general informational purposes. Sentr AI makes reasonable efforts to keep information accurate but does not guarantee that all content will always be complete, current, error-free, or suitable for a particular purpose.</Prose>
            <Prose>References to Aindri, Enterprise IT, Cybersecurity, Cloud infrastructure, Managed Services, IT Asset Management, or other products and services do not constitute a binding offer, quotation, warranty, or contractual commitment.</Prose>
            <Prose>Actual features, specifications, pricing, availability, and deliverables may depend on:</Prose>
            <Bullet items={["Customer requirements","Technical feasibility","Product configuration","Deployment environment","Third-party technology","Commercial agreements","Applicable statements of work or contracts"]} />
          </SectionBlock>

          <SectionBlock id="aindri-ai" title="11–13. Aindri, AI & Machine Learning">
            <div style={{ background: "linear-gradient(135deg, #0f172a 0%, #1e3a5f 100%)", borderRadius: "14px", padding: "2rem", marginBottom: "1.5rem" }}>
              <p style={{ color: "#3b82f6", fontWeight: 700, fontSize: "0.8rem", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "0.75rem" }}>Platform Notice</p>
              <p style={{ color: "#e2e8f0", lineHeight: 1.8, fontSize: "0.95rem" }}>Aindri is designed to provide computer-vision-based operational intelligence. Depending on configuration, Aindri may support real-time anomaly detection, object and activity recognition, operational monitoring, tampering alerts, and warehouse monitoring.</p>
            </div>
            <Sub>No Guarantee of Detection</Sub>
            <Prose>Computer-vision and AI systems may not identify every event, object, activity, or anomaly. Performance may be affected by camera quality, lighting, obstructions, network connectivity, system configuration, and other technical factors.</Prose>
            <Prose style={{ background: "#fef2f2", borderLeft: "4px solid #ef4444", padding: "1rem 1.25rem", borderRadius: "0 8px 8px 0" }}>
              <strong>Important:</strong> Aindri should not be treated as a substitute for appropriate human oversight, operational procedures, safety processes, or professional judgment.
            </Prose>
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
            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", marginTop: "1rem" }}>
              {[{ label: "Privacy Policy", href: "/privacy" },{ label: "Cookie Policy", href: "/cookie" }].map((link) => (
                <a key={link.label} href={link.href} style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "0.6rem 1.25rem", background: "#eff6ff", border: "1px solid #bfdbfe", borderRadius: "8px", color: "#1d4ed8", fontWeight: 600, fontSize: "0.85rem", textDecoration: "none" }}>
                  {link.label} →
                </a>
              ))}
            </div>
          </SectionBlock>

          <SectionBlock id="disclaimers" title="22. Disclaimer of Warranties">
            <Prose>To the maximum extent permitted by applicable law, the website and its content are provided on an <strong>"as is" and "as available"</strong> basis. Sentr AI does not warrant that the website will be uninterrupted, secure, error-free, completely accurate, or suitable for every particular purpose.</Prose>
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
          <div id="contact-terms" style={{ background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)", borderRadius: "20px", padding: "3rem", textAlign: "center", scrollMarginTop: "110px" }}>
            <h2 style={{ fontSize: "1.75rem", fontWeight: 800, color: "#ffffff", marginBottom: "0.75rem" }}>Questions About These Terms?</h2>
            <p style={{ color: "#94a3b8", lineHeight: 1.8, marginBottom: "2rem", maxWidth: "520px", margin: "0 auto 2rem" }}>
              Our team is available to help you understand our products, services, and business processes. For legal or contractual enquiries, please include "Legal Enquiry" in the subject line.
            </p>
            <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
              <a href="mailto:info@sentrai.in" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: "#3b82f6", color: "#ffffff", textDecoration: "none", padding: "0.75rem 1.75rem", borderRadius: "999px", fontWeight: 700, fontSize: "0.9rem" }}>
                Contact Sentr AI
              </a>
              <a href="tel:+918851847821" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: "rgba(255,255,255,0.08)", color: "#e2e8f0", textDecoration: "none", padding: "0.75rem 1.75rem", borderRadius: "999px", fontWeight: 600, fontSize: "0.9rem", border: "1px solid rgba(255,255,255,0.15)" }}>
                +91 8851847821
              </a>
            </div>
            <p style={{ color: "#64748b", fontSize: "0.82rem", marginTop: "1.5rem" }}>
              F-2, Block F, Sector 08, Noida, Uttar Pradesh – 201301, India
            </p>
          </div>

          <p style={{ color: "#94a3b8", fontSize: "0.8rem", textAlign: "center", marginTop: "2.5rem", lineHeight: 1.7 }}>
            These Terms are governed by the applicable laws and regulations of India. Sentr AI reserves the right to modify these Terms at any time. Last Updated: September 2026.
          </p>
        </article>
      </div>
    </main>
  );
};
