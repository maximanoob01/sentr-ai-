import React, { useState, useEffect } from 'react';
import './BlogPage.css';
import heroBg from '../assets/blog/hero.png';

interface Blog {
  id: number;
  slug: string;
  category_details: { name: string } | null;
  title: string;
  short_description: string;
  content: string;
  featured_image: string | null;
  created_at: string;
  views: number;
}

export const BlogPage: React.FC = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [selectedBlog, setSelectedBlog] = useState<Blog | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:8000/api/blogs/')
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data)) {
          setBlogs(data);
        } else {
          console.error('Expected array of blogs but got:', data);
          setBlogs([]);
        }
        setLoading(false);
      })
      .catch(err => {
        console.error('Failed to fetch blogs:', err);
        setLoading(false);
      });
  }, []);

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
          {loading ? (
            <div style={{ textAlign: 'center', padding: '4rem 0', color: 'var(--text-secondary)' }}>Loading latest insights...</div>
          ) : blogs.length === 0 ? (
             <div style={{ textAlign: 'center', padding: '4rem 0', color: 'var(--text-secondary)' }}>No blogs have been published yet.</div>
          ) : (
            <div className="blog-page__grid">
              {blogs.map((blog) => (
                <article key={blog.id} className="bp-card">
                  <div className="bp-card__img-wrap">
                    {blog.featured_image ? (
                      <img src={blog.featured_image} alt={blog.title} className="bp-card__img" loading="lazy" />
                    ) : (
                      <div className="bp-card__img" style={{ background: '#e2e8f0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <span style={{ color: '#94a3b8' }}>No Image</span>
                      </div>
                    )}
                    <div className="bp-card__img-overlay" />
                    <div className="bp-card__overlay-content">
                      <span className="bp-card__tag" style={{ background: '#2563eb' }}>
                        {blog.category_details?.name || 'Uncategorized'}
                      </span>
                      <div className="bp-card__meta bp-card__meta--overlay">
                        <span>{new Date(blog.created_at).toLocaleDateString()}</span>
                        <span className="bp-card__dot">·</span>
                        <span>{Math.ceil(blog.content.length / 1000)} min read</span>
                      </div>
                      <h2 className="bp-card__title bp-card__title--overlay">{blog.title}</h2>
                    </div>
                  </div>
                  <div className="bp-card__body">
                    <p className="bp-card__desc">{blog.short_description}</p>
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
          )}
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
            <div className="blog-modal__img-wrap">
              {selectedBlog.featured_image ? (
                <img src={selectedBlog.featured_image} alt={selectedBlog.title} className="blog-modal__img" />
              ) : (
                <div className="blog-modal__img" style={{ background: '#e2e8f0' }} />
              )}
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
              <div className="blog-modal__img-text">
                <span
                  className="blog-modal__tag"
                  style={{ background: '#2563eb' }}
                >
                  {selectedBlog.category_details?.name || 'Uncategorized'}
                </span>
                <div className="blog-modal__meta">
                  <span>{new Date(selectedBlog.created_at).toLocaleDateString()}</span>
                  <span className="bp-card__dot">·</span>
                  <span>{Math.ceil(selectedBlog.content.length / 1000)} min read</span>
                </div>
                <h2 className="blog-modal__title">{selectedBlog.title}</h2>
              </div>
            </div>

            <div className="blog-modal__content">
              <div className="blog-modal__body">
                {selectedBlog.content.split('\n\n').map((para, i) => {
                  if (para.startsWith('**') && para.endsWith('**')) {
                    return (
                      <h3 key={i} className="blog-modal__subheading">
                        {para.replace(/\*\*/g, '')}
                      </h3>
                    );
                  }
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
