import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// Placeholder interface based on our backend model
interface Blog {
  id: number;
  title: string;
  slug: string;
  category_details?: { name: string };
  author_details?: { first_name: string; last_name: string };
  status: 'DRAFT' | 'PUBLISHED' | 'SCHEDULED' | 'ARCHIVED';
  views: number;
  created_at: string;
}

export const BlogList: React.FC = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('ALL');

  useEffect(() => {
    fetch('http://localhost:8000/api/admin/blogs/')
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data)) {
          setBlogs(data);
        } else {
          console.error('Expected array of blogs, got:', data);
          setBlogs([]);
        }
        setLoading(false);
      })
      .catch(err => {
        console.error('Failed to fetch blogs', err);
        setLoading(false);
      });
  }, []);

  const filteredBlogs = filter === 'ALL' ? blogs : blogs.filter(b => b.status === filter);

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <div>
          <h1 style={{ fontSize: '1.8rem', fontWeight: 700, color: '#0f172a', margin: '0 0 0.25rem 0' }}>Blog Posts</h1>
          <p style={{ color: '#64748b', margin: 0 }}>Manage your website's blog content and publications.</p>
        </div>
        <Link to="/admin/blogs/new" className="admin-btn-primary" style={{ textDecoration: 'none', background: '#2563eb', color: 'white', padding: '0.75rem 1.25rem', borderRadius: '8px', fontWeight: 600 }}>
          + Create Blog
        </Link>
      </header>

      <div style={{ background: 'white', borderRadius: '12px', border: '1px solid #e2e8f0', boxShadow: '0 1px 3px rgba(0,0,0,0.05)', overflow: 'hidden' }}>
        {/* Toolbar */}
        <div style={{ padding: '1.25rem 1.5rem', borderBottom: '1px solid #e2e8f0', display: 'flex', gap: '1rem', alignItems: 'center' }}>
          <div style={{ display: 'flex', gap: '0.5rem', background: '#f8fafc', padding: '0.25rem', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
            {['ALL', 'PUBLISHED', 'DRAFT', 'SCHEDULED'].map(status => (
              <button 
                key={status}
                onClick={() => setFilter(status)}
                style={{
                  padding: '0.5rem 1rem', border: 'none', borderRadius: '6px', fontSize: '0.85rem', fontWeight: 600, cursor: 'pointer',
                  background: filter === status ? 'white' : 'transparent',
                  color: filter === status ? '#0f172a' : '#64748b',
                  boxShadow: filter === status ? '0 1px 2px rgba(0,0,0,0.05)' : 'none'
                }}
              >
                {status.charAt(0) + status.slice(1).toLowerCase()}
              </button>
            ))}
          </div>
          <div style={{ flex: 1 }} />
          <input 
            type="text" 
            placeholder="Search blogs..." 
            style={{ padding: '0.6rem 1rem', borderRadius: '6px', border: '1px solid #cbd5e1', fontSize: '0.9rem', width: '250px' }}
          />
        </div>

        {/* Table */}
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
            <thead>
              <tr style={{ background: '#f8fafc', borderBottom: '1px solid #e2e8f0' }}>
                <th style={{ padding: '1rem 1.5rem', fontSize: '0.8rem', fontWeight: 600, color: '#64748b', textTransform: 'uppercase' }}>Title</th>
                <th style={{ padding: '1rem 1.5rem', fontSize: '0.8rem', fontWeight: 600, color: '#64748b', textTransform: 'uppercase' }}>Category</th>
                <th style={{ padding: '1rem 1.5rem', fontSize: '0.8rem', fontWeight: 600, color: '#64748b', textTransform: 'uppercase' }}>Status</th>
                <th style={{ padding: '1rem 1.5rem', fontSize: '0.8rem', fontWeight: 600, color: '#64748b', textTransform: 'uppercase' }}>Views</th>
                <th style={{ padding: '1rem 1.5rem', fontSize: '0.8rem', fontWeight: 600, color: '#64748b', textTransform: 'uppercase' }}>Date</th>
                <th style={{ padding: '1rem 1.5rem', fontSize: '0.8rem', fontWeight: 600, color: '#64748b', textTransform: 'uppercase', textAlign: 'right' }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr><td colSpan={6} style={{ padding: '2rem', textAlign: 'center', color: '#64748b' }}>Loading...</td></tr>
              ) : filteredBlogs.length === 0 ? (
                <tr><td colSpan={6} style={{ padding: '3rem 2rem', textAlign: 'center', color: '#64748b' }}>No blogs found.</td></tr>
              ) : (
                filteredBlogs.map(blog => (
                  <tr key={blog.id} style={{ borderBottom: '1px solid #e2e8f0' }}>
                    <td style={{ padding: '1rem 1.5rem', color: '#0f172a', fontWeight: 500 }}>
                      <Link to={`/admin/blogs/edit/${blog.id}`} style={{ color: '#0f172a', textDecoration: 'none' }}>{blog.title}</Link>
                    </td>
                    <td style={{ padding: '1rem 1.5rem', color: '#475569', fontSize: '0.9rem' }}>{blog.category_details?.name || 'Uncategorized'}</td>
                    <td style={{ padding: '1rem 1.5rem' }}>
                      <span style={{ 
                        padding: '0.25rem 0.6rem', borderRadius: '999px', fontSize: '0.75rem', fontWeight: 600,
                        background: blog.status === 'PUBLISHED' ? '#dcfce3' : blog.status === 'DRAFT' ? '#f1f5f9' : '#fef3c7',
                        color: blog.status === 'PUBLISHED' ? '#166534' : blog.status === 'DRAFT' ? '#475569' : '#92400e'
                      }}>
                        {blog.status}
                      </span>
                    </td>
                    <td style={{ padding: '1rem 1.5rem', color: '#475569', fontSize: '0.9rem' }}>{blog.views}</td>
                    <td style={{ padding: '1rem 1.5rem', color: '#475569', fontSize: '0.9rem' }}>{new Date(blog.created_at).toLocaleDateString()}</td>
                    <td style={{ padding: '1rem 1.5rem', textAlign: 'right' }}>
                      <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'flex-end' }}>
                        <button style={{ padding: '0.4rem 0.75rem', border: '1px solid #cbd5e1', background: 'white', borderRadius: '6px', cursor: 'pointer', fontSize: '0.85rem' }}>Edit</button>
                        <button style={{ padding: '0.4rem 0.75rem', border: '1px solid #cbd5e1', background: 'white', borderRadius: '6px', cursor: 'pointer', fontSize: '0.85rem', color: '#ef4444' }}>Delete</button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
