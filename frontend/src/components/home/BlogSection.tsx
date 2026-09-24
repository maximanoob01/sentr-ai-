import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import './BlogSection.css';
import blog1 from '../../assets/blogs/1.png';
import blog2 from '../../assets/blogs/2.png';
import blog3 from '../../assets/blogs/3.png';
import blog4 from '../../assets/blogs/4.png';
import blog5 from '../../assets/blogs/5.png';

const blogs = [
  {
    id: 1,
    tag: 'Technology',
    title: 'Why Business Email Is Essential for Every Organization',
    desc: 'Discover why reliable business email remains a critical communication channel for modern organizations, supporting professional communication, collaboration, and day-to-day business operations.',
    image: blog1,
  },
  {
    id: 2,
    tag: 'Artificial Intelligence',
    title: 'How AI Is Impacting the Technology Industry',
    desc: 'Artificial Intelligence is reshaping the technology landscape—from everyday digital experiences to cloud computing and enterprise systems. Explore how AI is changing the way businesses use and deliver technology.',
    image: blog2,
  },
  {
    id: 3,
    tag: 'Cloud Infrastructure',
    title: 'Understanding Cloud Management: Why It Matters for Businesses',
    desc: 'As businesses increasingly depend on cloud infrastructure, effective cloud management has become essential. Learn why organizations need better visibility, control, and management across their cloud environments.',
    image: blog3,
  },
  {
    id: 4,
    tag: 'Cybersecurity',
    title: 'How AI Is Transforming Cybersecurity in India',
    desc: 'Explore how Artificial Intelligence is being applied to cybersecurity through real-time threat detection, predictive analysis, automated responses, and more proactive security strategies.',
    image: blog4,
  },
  {
    id: 5,
    tag: 'Security Insights',
    title: 'Understanding EDR & XDR: Strengthening Cybersecurity',
    desc: 'As cyber threats become more sophisticated, traditional antivirus solutions alone may not be enough. Learn how Endpoint Detection and Response (EDR) and Extended Detection and Response (XDR) help organizations identify, investigate, and respond to threats more effectively.',
    image: blog5,
  }
];

export const BlogSection: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -400, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 400, behavior: 'smooth' });
    }
  };

  return (
    <section className="blog-section">
      <div className="container">
        <div className="blog-section__header">
          <div className="blog-section__header-content">
            <h2 className="blog-section__heading">Latest Insights & Resources</h2>
            <p className="blog-section__sub">
              Stay informed with practical insights across AI, cybersecurity, cloud technology, and modern business IT.
            </p>
          </div>
          <div className="blog-section__controls">
            <div className="blog-section__controls-dots" aria-hidden="true"></div>
            <button className="blog-section__btn" onClick={scrollLeft} aria-label="Previous blog">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6"/></svg>
            </button>
            <button className="blog-section__btn blog-section__btn--dark" onClick={scrollRight} aria-label="Next blog">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6"/></svg>
            </button>
          </div>
        </div>

        <div className="blog-section__track" ref={scrollRef}>
          {blogs.map(blog => (
            <div key={blog.id} className="blog-card">
              <div className="blog-card__img-wrap">
                <img src={blog.image} alt={blog.title} className="blog-card__img" />
              </div>
              <div className="blog-card__content">
                <span className="blog-card__tag">{blog.tag}</span>
                <h3 className="blog-card__title">{blog.title}</h3>
                <p className="blog-card__desc">{blog.desc}</p>
                <Link to="#" className="blog-card__link">
                  Read Article
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="M12 5l7 7-7 7"></path></svg>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="blog-section__dots">
          {blogs.map((_, i) => (
            <span key={i} className={`blog-section__dot ${i === 0 ? 'active' : ''}`}></span>
          ))}
        </div>

      </div>
    </section>
  );
};
