import React, { useState, useEffect } from 'react';
import './BlogPage.css';
import heroBg from '../assets/blog/hero.png';
import blog1 from '../assets/blogs/1.png';
import blog2 from '../assets/blogs/2.png';
import blog3 from '../assets/blogs/3.png';
import blog4 from '../assets/blogs/4.png';
import blog5 from '../assets/blogs/5.png';

interface Blog {
  id: number;
  tag: string;
  tagColor: string;
  title: string;
  desc: string;
  image: string;
  fullContent: string;
  readTime: string;
  date: string;
}

const blogs: Blog[] = [
  {
    id: 1,
    tag: 'Technology',
    tagColor: '#6366f1',
    title: 'Why Business Email Is Essential for Every Organization',
    desc: 'Discover why reliable business email remains a critical communication channel for modern organizations, supporting professional communication, collaboration, and day-to-day business operations.',
    image: blog1,
    readTime: '5 min read',
    date: 'Sep 20, 2026',
    fullContent: `**Introduction**

In today's digital-first world, communication is the backbone of every business. While instant messaging and collaboration tools are popular, email remains the most professional and reliable channel for official communication. For startups, small businesses, and large enterprises alike, having a dedicated business email address (like yourname@company.com) is not just an option—it's a necessity.

**What is a Business Email?**

A business email is an email address that uses your company's domain name instead of a generic provider. For example, a personal email might be john123@gmail.com, while a business email would be john@yourcompany.com. Using a company domain name makes your communication look official, trustworthy, and credible.

**Why Business Email is Required**

Builds Professionalism and Trust — A branded email address immediately establishes credibility with clients, partners, and stakeholders.

Strengthens Brand Identity — Every email you send reinforces your company name and domain, keeping your brand visible.

Enhances Security — Business email platforms offer advanced protection including encryption, phishing filters, spam blocking, and data loss prevention.

Improves Team Collaboration — Integrated tools like shared calendars, cloud storage, and real-time documents help teams work together more effectively.

Easier Management and Control — IT administrators can manage access, enforce policies, and recover accounts centrally.

Increases Customer Confidence — Customers are more likely to trust and respond to communication from a verified company domain.

**Conclusion**

A business email is more than just a communication tool—it is a reflection of your company's identity, professionalism, and credibility. Whether you are running a startup or an established enterprise, investing in a business email is a simple yet powerful step toward building trust, strengthening security, and growing your brand.`,
  },
  {
    id: 2,
    tag: 'Artificial Intelligence',
    tagColor: '#0ea5e9',
    title: 'How AI Is Impacting the Technology Industry',
    desc: 'Artificial Intelligence is reshaping the technology landscape—from everyday digital experiences to cloud computing and enterprise systems. Explore how AI is changing the way businesses use and deliver technology.',
    image: blog2,
    readTime: '6 min read',
    date: 'Sep 22, 2026',
    fullContent: `**Introduction**

Artificial Intelligence (AI) is no longer a futuristic concept—it is already reshaping the technology landscape we live in. From smartphones to cloud computing, AI has become a driving force behind innovation, efficiency, and smarter decision-making. Businesses, governments, and individuals are experiencing its influence in different ways.

**Smarter Software Development**

AI is making software development faster and more reliable. Tools powered by machine learning help developers detect bugs, write cleaner code, and even automate repetitive programming tasks. This not only saves time but also ensures higher-quality applications.

**Revolutionizing Cybersecurity**

With cyber threats becoming more sophisticated, traditional defenses often fall short. AI-driven cybersecurity solutions can detect suspicious behavior, predict possible attacks, and respond automatically. This proactive approach makes digital systems more secure and resilient.

**Enhancing Cloud Computing**

AI and cloud technologies are working hand in hand. Cloud providers are using AI to optimize storage, improve data processing, and enhance security. For businesses, this means cost savings and better performance of digital infrastructure.

**Driving Automation in IT Operations**

AI-powered systems are automating many IT tasks such as monitoring servers, detecting system failures, and managing network traffic. Known as AIOps, this trend is reducing downtime, increasing efficiency, and allowing IT teams to focus on more strategic tasks.

**Powering Smart Devices and IoT**

AI is at the core of smart technology. From voice assistants to connected home appliances, AI enables devices to learn user behavior and deliver personalized experiences. In industries, IoT combined with AI is optimizing manufacturing, logistics, and healthcare.

**Accelerating Data Analytics**

The explosion of data has made manual analysis impossible. AI tools can process massive amounts of information in real-time, uncovering patterns and providing insights that help businesses make better decisions.

**Boosting Innovation in Emerging Tech**

AI is a catalyst for other technologies like robotics, augmented reality (AR), and blockchain. AI-driven robots are improving precision in industries, while AR combined with AI is enhancing user experiences in gaming and retail.

**Conclusion**

Artificial Intelligence is not just impacting technology—it is reshaping the entire digital ecosystem. From cybersecurity to smart devices, AI is enabling innovations that were once unimaginable. As AI continues to evolve, it will create new opportunities, transform industries, and redefine how we interact with technology.`,
  },
  {
    id: 3,
    tag: 'Cloud Infrastructure',
    tagColor: '#00c4a1',
    title: 'Understanding Cloud Management: Why It Matters for Businesses',
    desc: 'As businesses increasingly depend on cloud infrastructure, effective cloud management has become essential. Learn why organizations need better visibility, control, and management across their cloud environments.',
    image: blog3,
    readTime: '5 min read',
    date: 'Sep 24, 2026',
    fullContent: `Cloud computing has become the backbone of modern businesses. From storing files to running critical applications, companies of all sizes are moving their operations to the cloud. But as the use of cloud services grows, so does the need for cloud management. Effective cloud management ensures businesses can control costs, maintain security, and maximize performance while using cloud resources.

**What is Cloud Management?**

Cloud management refers to the process of monitoring, controlling, and optimizing cloud-based services and infrastructure. It involves managing storage, applications, networks, and security across cloud platforms such as AWS, Microsoft Azure, or Google Cloud. Simply put, cloud management is about making sure your cloud resources are running efficiently, securely, and cost-effectively.

**Key Components of Cloud Management**

Resource Allocation — Ensuring the right amount of compute, storage, and network resources are assigned to each workload.

Security and Compliance — Continuously monitoring for threats, misconfigurations, and regulatory requirements.

Cost Optimization — Identifying and eliminating wasted spend across cloud services.

Performance Monitoring — Tracking uptime, latency, and throughput to maintain service quality.

Automation — Using policy-driven tools to provision, scale, and decommission resources without manual intervention.

**Benefits of Cloud Management**

Improved Efficiency, Better Security, Cost Savings, Flexibility, and Compliance Assurance are the core benefits organizations gain from a well-managed cloud environment.

**Why Businesses Need Cloud Management**

As organizations adopt multi-cloud and hybrid environments, managing resources becomes more complex. Without proper management, companies risk overspending, facing security breaches, or suffering downtime. Cloud management provides visibility, control, and governance over all cloud operations, making it a critical part of digital transformation.

**Conclusion**

Cloud computing is a powerful tool, but it must be managed effectively to deliver its full benefits. With proper cloud management, businesses can achieve a balance of performance, security, and cost-efficiency. As the cloud continues to grow, mastering cloud management will be key for businesses that want to stay competitive in the digital era.`,
  },
  {
    id: 4,
    tag: 'Cybersecurity',
    tagColor: '#f43f5e',
    title: 'How AI Is Transforming Cybersecurity in India',
    desc: 'Explore how Artificial Intelligence is being applied to cybersecurity through real-time threat detection, predictive analysis, automated responses, and more proactive security strategies.',
    image: blog4,
    readTime: '7 min read',
    date: 'Sep 26, 2026',
    fullContent: `**Introduction**

India's digital transformation is moving at lightning speed. From UPI payments to cloud adoption, the country is becoming one of the largest digital economies in the world. But with this growth comes a sharp increase in cyber threats. To fight these challenges, Artificial Intelligence (AI) is playing a crucial role in reshaping cybersecurity in India.

**Why Cybersecurity is Critical for India**

With over 800 million internet users, India faces rising risks of cyberattacks such as phishing scams, ransomware, and data leaks. Traditional cybersecurity tools often fail to keep up with evolving threats. This is where AI-driven cybersecurity solutions make a difference by providing faster, smarter, and more accurate protection.

**How AI is Strengthening Cybersecurity in India**

Real-Time Threat Detection — AI algorithms can scan and monitor large data networks instantly. They detect unusual login attempts, suspicious activities, and malware, allowing organizations to respond before damage occurs.

Predictive Cybersecurity — Machine learning models use past attack data to forecast future risks. Indian banks are leveraging AI to identify potential fraud before it affects customers.

Automated Cyber Defense — AI systems can automatically block harmful IP addresses, quarantine infected files, and neutralize threats. This automation reduces response time and minimizes financial and reputational damage.

Cloud Security and Data Protection — With Indian businesses increasingly shifting to the cloud, AI tools are securing sensitive data, detecting unauthorized access, and ensuring compliance with cybersecurity regulations.

Protecting National Infrastructure — The Indian government is adopting AI-based tools to protect critical sectors such as defense, power grids, and healthcare systems, making the country's digital backbone more resilient.

**Challenges in AI-Based Cybersecurity**

Despite its benefits, AI adoption faces hurdles such as high investment costs, shortage of AI and cybersecurity experts in India, and risks of AI systems being exploited by hackers. Addressing these challenges requires collaboration between the government, tech companies, and educational institutions.

**Future of AI in Cybersecurity in India**

The future of AI in cybersecurity looks promising. As India strengthens its digital infrastructure, AI will play a central role in building a safer cyberspace. With advancements in machine learning, big data, and cloud integration, India can transform from being a cyber-attack target to a global leader in cybersecurity innovation.`,
  },
  {
    id: 5,
    tag: 'Security Insights',
    tagColor: '#f59e0b',
    title: 'Understanding EDR & XDR: Strengthening Cybersecurity',
    desc: 'As cyber threats become more sophisticated, traditional antivirus solutions alone may not be enough. Learn how Endpoint Detection and Response (EDR) and Extended Detection and Response (XDR) help organizations identify, investigate, and respond to threats more effectively.',
    image: blog5,
    readTime: '6 min read',
    date: 'Sep 28, 2026',
    fullContent: `Cyberattacks are becoming more advanced every day, making traditional antivirus tools insufficient to defend organizations. Businesses need smarter solutions that not only detect threats but also respond quickly. This is where EDR (Endpoint Detection and Response) and XDR (Extended Detection and Response) come in.

**What is EDR?**

Endpoint Detection and Response (EDR) focuses on protecting endpoints like laptops, desktops, and mobile devices. Since endpoints are the most common entry points for cyberattacks, EDR continuously monitors them to identify suspicious activity.

How EDR Works — Continuous Monitoring: EDR tools track activities on endpoints, such as file changes, logins, and application behavior. Threat Detection: Using machine learning and behavior analytics, EDR identifies unusual or malicious activity. Incident Investigation: When a potential threat is detected, EDR provides detailed insights into how the attack started and spread. Automated Response: EDR can isolate infected devices, block harmful processes, or remove malicious files automatically.

Example: If ransomware tries to encrypt files on an employee's laptop, EDR can quickly stop the process and prevent further damage.

**What is XDR?**

Extended Detection and Response (XDR) is the next level of cybersecurity that goes beyond endpoints. It integrates data from multiple sources like endpoints, servers, cloud applications, and networks. This holistic view allows security teams to detect threats that may move across different layers of the IT environment.

How XDR Works — Data Collection Across Systems: XDR gathers data not just from endpoints but also from emails, cloud services, and networks. Centralized Analysis: All data is analyzed in one platform, giving a complete view of possible attacks. Correlation of Events: XDR connects different security events to identify complex attacks that would be missed by isolated tools. Automated Threat Response: XDR can block malicious emails, isolate devices, and stop suspicious network traffic in real time.

Example: If a hacker sends a phishing email, steals login credentials, and then tries to access cloud storage, XDR can connect all these events and shut down the attack.

**Why Businesses Need Them**

EDR is ideal for organizations that want strong protection for employee devices. XDR is better for businesses with complex IT environments where threats can spread across multiple systems. Together, they create a powerful defense strategy against modern cyberattacks.

**Conclusion**

Cybersecurity threats are evolving, and businesses in every industry need proactive defenses. EDR protects endpoints, while XDR provides a broader, unified defense across networks, cloud, and applications. By adopting these technologies, organizations can improve detection, reduce response time, and strengthen overall security.`,
  },
];

export const BlogPage: React.FC = () => {
  const [selectedBlog, setSelectedBlog] = useState<Blog | null>(null);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedBlog) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [selectedBlog]);

  // Close on Escape
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedBlog(null);
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, []);

  return (
    <main className="blog-page">
      {/* ── Hero ── */}
      <section
        className="blog-page__hero"
        style={{ backgroundImage: `url(${heroBg})` }}
        aria-label="Blog hero"
      >
        <div className="blog-page__hero-overlay" />
        <div className="container blog-page__hero-content">
          <h1 className="blog-page__hero-title">
            Sentr<span className="blog-page__hero-accent">AI</span> Blog
          </h1>
          <p className="blog-page__hero-sub">
            Practical insights across AI, cybersecurity, cloud technology,<br />
            and modern business IT — from the Sentr AI team.
          </p>
        </div>
      </section>

      {/* ── Grid ── */}
      <section className="blog-page__grid-section">
        <div className="container">
          <div className="blog-page__grid">
            {blogs.map((blog) => (
              <article key={blog.id} className="bp-card">
                <div className="bp-card__img-wrap">
                  <img src={blog.image} alt={blog.title} className="bp-card__img" loading="lazy" />
                  <div className="bp-card__img-overlay" />
                  <div className="bp-card__overlay-content">
                    <span className="bp-card__tag" style={{ background: blog.tagColor }}>
                      {blog.tag}
                    </span>
                    <div className="bp-card__meta bp-card__meta--overlay">
                      <span>{blog.date}</span>
                      <span className="bp-card__dot">·</span>
                      <span>{blog.readTime}</span>
                    </div>
                    <h2 className="bp-card__title bp-card__title--overlay">{blog.title}</h2>
                  </div>
                </div>
                <div className="bp-card__body">
                  <p className="bp-card__desc">{blog.desc}</p>
                  <button
                    className="bp-card__btn"
                    onClick={() => setSelectedBlog(blog)}
                    aria-label={`Read article about ${blog.title}`}
                  >
                    Read Article
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14"/><path d="M12 5l7 7-7 7"/>
                    </svg>
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Modal ── */}
      {selectedBlog && (
        <div
          className="blog-modal__backdrop"
          onClick={() => setSelectedBlog(null)}
          role="dialog"
          aria-modal="true"
          aria-label={selectedBlog.title}
        >
          <div
            className="blog-modal"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header image with text overlay */}
            <div className="blog-modal__img-wrap">
              <img src={selectedBlog.image} alt={selectedBlog.title} className="blog-modal__img" />
              <div className="blog-modal__img-overlay" />
              <button
                className="blog-modal__close"
                onClick={() => setSelectedBlog(null)}
                aria-label="Close"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 6L6 18M6 6l12 12"/>
                </svg>
              </button>
              {/* Overlay text */}
              <div className="blog-modal__img-text">
                <span
                  className="blog-modal__tag"
                  style={{ background: selectedBlog.tagColor }}
                >
                  {selectedBlog.tag}
                </span>
                <div className="blog-modal__meta">
                  <span>{selectedBlog.date}</span>
                  <span className="bp-card__dot">·</span>
                  <span>{selectedBlog.readTime}</span>
                </div>
                <h2 className="blog-modal__title">{selectedBlog.title}</h2>
              </div>
            </div>

            {/* Article body only */}
            <div className="blog-modal__content">
              <div className="blog-modal__body">
                {selectedBlog.fullContent.split('\n\n').map((para, i) => {
                  if (para.startsWith('**') && para.endsWith('**')) {
                    return (
                      <h3 key={i} className="blog-modal__subheading">
                        {para.replace(/\*\*/g, '')}
                      </h3>
                    );
                  }
                  // Handle inline bold
                  const parts = para.split(/(\*\*[^*]+\*\*)/g);
                  return (
                    <p key={i} className="blog-modal__para">
                      {parts.map((part, j) =>
                        part.startsWith('**') && part.endsWith('**')
                          ? <strong key={j}>{part.replace(/\*\*/g, '')}</strong>
                          : part
                      )}
                    </p>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
};
