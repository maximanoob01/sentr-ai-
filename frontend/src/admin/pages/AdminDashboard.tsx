import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export const AdminDashboard: React.FC = () => {
  const [stats, setStats] = useState({
    total_blogs: 0,
    published_blogs: 0,
    open_positions: 0,
    new_applications: 0,
    recent_applications: [] as any[],
    recent_blogs: [] as any[],
    recent_activity: [] as any[]
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:8000/api/admin/dashboard-stats/')
      .then(res => res.json())
      .then(data => {
        setStats(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Failed to fetch dashboard stats', err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="admin-dashboard" style={{ maxWidth: '1200px', margin: '0 auto' }}>
      <header style={{ marginBottom: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <h1 style={{ fontSize: '1.8rem', fontWeight: 700, color: '#0f172a', marginBottom: '0.25rem' }}>Dashboard</h1>
          <p style={{ color: '#64748b' }}>Welcome back. Here's what's happening today.</p>
        </div>
        <div style={{ display: 'flex', gap: '0.75rem' }}>
          <Link to="/admin/blogs/new" className="admin-btn-primary">+ New Blog</Link>
          <Link to="/admin/careers/new" className="admin-btn-outline">+ Add Job</Link>
        </div>
      </header>

      {/* Summary Cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem', marginBottom: '2.5rem' }}>
        <div className="admin-stat-card">
          <div className="stat-label">Total Blogs</div>
          <div className="stat-value">{loading ? '...' : stats.total_blogs}</div>
        </div>
        <div className="admin-stat-card">
          <div className="stat-label">Published</div>
          <div className="stat-value">{loading ? '...' : stats.published_blogs}</div>
        </div>
        <div className="admin-stat-card">
          <div className="stat-label">Open Positions</div>
          <div className="stat-value">{loading ? '...' : stats.open_positions}</div>
        </div>
        <div className="admin-stat-card">
          <div className="stat-label">New Applications</div>
          <div className="stat-value" style={{ color: '#2563eb' }}>{loading ? '...' : stats.new_applications}</div>
        </div>
      </div>

      {/* Tables Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '2rem' }}>
        
        {/* Recent Applications */}
        <section className="admin-panel">
          <div className="admin-panel-header">
            <h3>Recent Applications</h3>
            <Link to="/admin/careers/applications">View All</Link>
          </div>
          <div className="admin-table-container">
            <table className="admin-table">
              <thead>
                <tr>
                  <th>Candidate</th>
                  <th>Position</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {stats.recent_applications.length === 0 ? (
                  <tr><td colSpan={3} style={{ textAlign: 'center', color: '#64748b' }}>No recent applications</td></tr>
                ) : (
                  stats.recent_applications.map(app => (
                    <tr key={app.id}>
                      <td><strong>{app.first_name} {app.last_name}</strong><br/><span style={{fontSize: '0.8rem', color: '#64748b'}}>{new Date(app.applied_at).toLocaleDateString()}</span></td>
                      <td>{app.job_details?.title || 'Unknown Position'}</td>
                      <td>
                        <span className={`admin-badge badge-${app.status.toLowerCase()}`}>
                          {app.status}
                        </span>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </section>

        {/* Recent Blogs */}
        <section className="admin-panel">
          <div className="admin-panel-header">
            <h3>Recent Blogs</h3>
            <Link to="/admin/blogs">View All</Link>
          </div>
          <div className="admin-table-container">
            <table className="admin-table">
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Status</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                {stats.recent_blogs.length === 0 ? (
                  <tr><td colSpan={3} style={{ textAlign: 'center', color: '#64748b' }}>No recent blogs</td></tr>
                ) : (
                  stats.recent_blogs.map(blog => (
                    <tr key={blog.id}>
                      <td><strong>{blog.title}</strong><br/><span style={{fontSize: '0.8rem', color: '#64748b'}}>{blog.category_details?.name || 'Uncategorized'}</span></td>
                      <td>
                        <span className={`admin-badge badge-${blog.status.toLowerCase()}`}>
                          {blog.status}
                        </span>
                      </td>
                      <td>{new Date(blog.created_at).toLocaleDateString()}</td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </section>

      </div>
      
      {/* Some styles local to dashboard components for now */}
      <style>{`
        .admin-btn-primary {
          background: #2563eb; color: white; padding: 0.5rem 1rem; border-radius: 6px; text-decoration: none; font-weight: 500; font-size: 0.9rem;
        }
        .admin-btn-primary:hover { background: #1d4ed8; }
        .admin-btn-outline {
          background: white; border: 1px solid #cbd5e1; color: #0f172a; padding: 0.5rem 1rem; border-radius: 6px; text-decoration: none; font-weight: 500; font-size: 0.9rem;
        }
        .admin-btn-outline:hover { background: #f8fafc; }
        
        .admin-stat-card {
          background: white; padding: 1.5rem; border-radius: 12px; border: 1px solid #e2e8f0; box-shadow: 0 1px 3px rgba(0,0,0,0.05);
        }
        .stat-label { font-size: 0.85rem; font-weight: 600; color: #64748b; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 0.5rem; }
        .stat-value { font-size: 2.5rem; font-weight: 700; color: #0f172a; line-height: 1; }
        
        .admin-panel {
          background: white; border-radius: 12px; border: 1px solid #e2e8f0; box-shadow: 0 1px 3px rgba(0,0,0,0.05); overflow: hidden;
        }
        .admin-panel-header {
          padding: 1.25rem 1.5rem; border-bottom: 1px solid #e2e8f0; display: flex; justify-content: space-between; alignItems: center;
        }
        .admin-panel-header h3 { font-size: 1.1rem; font-weight: 600; margin: 0; }
        .admin-panel-header a { font-size: 0.85rem; color: #2563eb; text-decoration: none; font-weight: 500; }
        
        .admin-table-container { width: 100%; overflow-x: auto; }
        .admin-table { width: 100%; border-collapse: collapse; text-align: left; }
        .admin-table th { padding: 0.75rem 1.5rem; font-size: 0.75rem; font-weight: 600; color: #64748b; text-transform: uppercase; border-bottom: 1px solid #e2e8f0; background: #f8fafc; }
        .admin-table td { padding: 1rem 1.5rem; border-bottom: 1px solid #e2e8f0; font-size: 0.9rem; color: #0f172a; vertical-align: middle; }
        .admin-table tr:last-child td { border-bottom: none; }
        
        .admin-badge { padding: 0.25rem 0.5rem; border-radius: 9999px; font-size: 0.75rem; font-weight: 600; }
        .badge-new { background: #dbeafe; color: #1e40af; }
        .badge-review { background: #fef3c7; color: #92400e; }
        .badge-published { background: #dcfce3; color: #166534; }
        .badge-draft { background: #f1f5f9; color: #475569; }
      `}</style>
    </div>
  );
};
