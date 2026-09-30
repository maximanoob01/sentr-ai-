import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

interface Application {
  id: number;
  candidate_name: string;
  job_title: string;
  status: 'NEW' | 'REVIEW' | 'SHORTLISTED' | 'INTERVIEW' | 'SELECTED' | 'REJECTED';
  experience: string;
  applied_at: string;
}

export const ApplicationList: React.FC = () => {
  const [applications, setApplications] = useState<Application[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('ALL');

  useEffect(() => {
    setTimeout(() => {
      setApplications([
        { id: 101, candidate_name: 'Jane Smith', job_title: 'Senior Cloud Architect', status: 'NEW', experience: '8 Years', applied_at: '2026-10-01T08:30:00Z' },
        { id: 102, candidate_name: 'Alex Johnson', job_title: 'Frontend Developer (React)', status: 'REVIEW', experience: '3 Years', applied_at: '2026-09-30T14:15:00Z' },
        { id: 103, candidate_name: 'Michael Chen', job_title: 'Senior Cloud Architect', status: 'INTERVIEW', experience: '10 Years', applied_at: '2026-09-28T09:45:00Z' },
        { id: 104, candidate_name: 'Sarah Williams', job_title: 'Frontend Developer (React)', status: 'REJECTED', experience: '1 Year', applied_at: '2026-09-27T11:20:00Z' },
      ]);
      setLoading(false);
    }, 400);
  }, []);

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'NEW': return <span className="app-badge badge-new">New</span>;
      case 'REVIEW': return <span className="app-badge badge-review">Reviewing</span>;
      case 'SHORTLISTED': return <span className="app-badge badge-shortlisted">Shortlisted</span>;
      case 'INTERVIEW': return <span className="app-badge badge-interview">Interview</span>;
      case 'SELECTED': return <span className="app-badge badge-selected">Selected</span>;
      case 'REJECTED': return <span className="app-badge badge-rejected">Rejected</span>;
      default: return <span className="app-badge">{status}</span>;
    }
  };

  const filteredApps = filter === 'ALL' ? applications : applications.filter(a => a.status === filter);

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <button onClick={() => window.history.back()} style={{ background: 'none', border: 'none', fontSize: '1.2rem', cursor: 'pointer', color: '#64748b' }}>←</button>
          <div>
            <h1 style={{ fontSize: '1.8rem', fontWeight: 700, color: '#0f172a', margin: '0 0 0.25rem 0' }}>Applications</h1>
            <p style={{ color: '#64748b', margin: 0 }}>Review and manage candidate applications.</p>
          </div>
        </div>
      </header>

      <div style={{ background: 'white', borderRadius: '12px', border: '1px solid #e2e8f0', boxShadow: '0 1px 3px rgba(0,0,0,0.05)', overflow: 'hidden' }}>
        <div style={{ padding: '1.25rem 1.5rem', borderBottom: '1px solid #e2e8f0', display: 'flex', gap: '1rem', alignItems: 'center' }}>
          <select 
            value={filter} 
            onChange={e => setFilter(e.target.value)}
            style={{ padding: '0.6rem 1rem', borderRadius: '6px', border: '1px solid #cbd5e1', fontSize: '0.9rem', background: 'white', fontWeight: 500 }}
          >
            <option value="ALL">All Statuses</option>
            <option value="NEW">New</option>
            <option value="REVIEW">Reviewing</option>
            <option value="SHORTLISTED">Shortlisted</option>
            <option value="INTERVIEW">Interview</option>
            <option value="SELECTED">Selected</option>
            <option value="REJECTED">Rejected</option>
          </select>
          <div style={{ flex: 1 }} />
          <input 
            type="text" 
            placeholder="Search candidates or jobs..." 
            style={{ padding: '0.6rem 1rem', borderRadius: '6px', border: '1px solid #cbd5e1', fontSize: '0.9rem', width: '300px' }}
          />
        </div>

        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
            <thead>
              <tr style={{ background: '#f8fafc', borderBottom: '1px solid #e2e8f0' }}>
                <th style={{ padding: '1rem 1.5rem', fontSize: '0.8rem', fontWeight: 600, color: '#64748b', textTransform: 'uppercase' }}>Candidate</th>
                <th style={{ padding: '1rem 1.5rem', fontSize: '0.8rem', fontWeight: 600, color: '#64748b', textTransform: 'uppercase' }}>Applied For</th>
                <th style={{ padding: '1rem 1.5rem', fontSize: '0.8rem', fontWeight: 600, color: '#64748b', textTransform: 'uppercase' }}>Experience</th>
                <th style={{ padding: '1rem 1.5rem', fontSize: '0.8rem', fontWeight: 600, color: '#64748b', textTransform: 'uppercase' }}>Applied Date</th>
                <th style={{ padding: '1rem 1.5rem', fontSize: '0.8rem', fontWeight: 600, color: '#64748b', textTransform: 'uppercase' }}>Status</th>
                <th style={{ padding: '1rem 1.5rem', fontSize: '0.8rem', fontWeight: 600, color: '#64748b', textTransform: 'uppercase', textAlign: 'right' }}>Action</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr><td colSpan={6} style={{ padding: '2rem', textAlign: 'center', color: '#64748b' }}>Loading...</td></tr>
              ) : filteredApps.length === 0 ? (
                <tr><td colSpan={6} style={{ padding: '3rem 2rem', textAlign: 'center', color: '#64748b' }}>No applications found.</td></tr>
              ) : (
                filteredApps.map(app => (
                  <tr key={app.id} style={{ borderBottom: '1px solid #e2e8f0' }}>
                    <td style={{ padding: '1rem 1.5rem', color: '#0f172a', fontWeight: 600 }}>
                      <Link to={`/admin/careers/applications/${app.id}`} style={{ color: '#0f172a', textDecoration: 'none' }}>
                        {app.candidate_name}
                      </Link>
                    </td>
                    <td style={{ padding: '1rem 1.5rem', color: '#475569', fontSize: '0.9rem' }}>{app.job_title}</td>
                    <td style={{ padding: '1rem 1.5rem', color: '#475569', fontSize: '0.9rem' }}>{app.experience}</td>
                    <td style={{ padding: '1rem 1.5rem', color: '#475569', fontSize: '0.9rem' }}>{new Date(app.applied_at).toLocaleDateString()}</td>
                    <td style={{ padding: '1rem 1.5rem' }}>{getStatusBadge(app.status)}</td>
                    <td style={{ padding: '1rem 1.5rem', textAlign: 'right' }}>
                      <Link to={`/admin/careers/applications/${app.id}`} style={{ padding: '0.4rem 0.75rem', border: '1px solid #cbd5e1', background: 'white', borderRadius: '6px', cursor: 'pointer', fontSize: '0.85rem', textDecoration: 'none', color: '#0f172a', fontWeight: 500 }}>
                        Review
                      </Link>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      <style>{`
        .app-badge { padding: 0.25rem 0.6rem; border-radius: 999px; font-size: 0.75rem; font-weight: 600; display: inline-block; }
        .badge-new { background: #dbeafe; color: #1e40af; }
        .badge-review { background: #fef3c7; color: #92400e; }
        .badge-shortlisted { background: #e0e7ff; color: #3730a3; }
        .badge-interview { background: #fae8ff; color: #86198f; }
        .badge-selected { background: #dcfce3; color: #166534; }
        .badge-rejected { background: #fee2e2; color: #991b1b; }
      `}</style>
    </div>
  );
};
