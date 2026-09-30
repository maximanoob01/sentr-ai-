import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

interface Job {
  id: number;
  title: string;
  department: string;
  location: string;
  employment_type: string;
  status: 'DRAFT' | 'PUBLISHED' | 'CLOSED';
  applications_count: number;
  created_at: string;
}

export const JobList: React.FC = () => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Placeholder data
    setTimeout(() => {
      setJobs([
        { id: 1, title: 'Senior Cloud Architect', department: 'Engineering', location: 'Noida, India', employment_type: 'Full-time', status: 'PUBLISHED', applications_count: 12, created_at: '2026-09-20T10:00:00Z' },
        { id: 2, title: 'Frontend Developer (React)', department: 'Engineering', location: 'Remote', employment_type: 'Full-time', status: 'PUBLISHED', applications_count: 45, created_at: '2026-09-25T11:00:00Z' },
        { id: 3, title: 'Cybersecurity Analyst', department: 'Security', location: 'Hybrid', employment_type: 'Contract', status: 'DRAFT', applications_count: 0, created_at: '2026-10-01T09:00:00Z' },
      ]);
      setLoading(false);
    }, 500);
  }, []);

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <div>
          <h1 style={{ fontSize: '1.8rem', fontWeight: 700, color: '#0f172a', margin: '0 0 0.25rem 0' }}>Job Openings</h1>
          <p style={{ color: '#64748b', margin: 0 }}>Manage career opportunities and job listings.</p>
        </div>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <Link to="/admin/careers/applications" className="admin-btn-outline" style={{ textDecoration: 'none', background: 'white', border: '1px solid #cbd5e1', color: '#0f172a', padding: '0.75rem 1.25rem', borderRadius: '8px', fontWeight: 600 }}>
            View Applications
          </Link>
          <Link to="/admin/careers/jobs/new" className="admin-btn-primary" style={{ textDecoration: 'none', background: '#2563eb', color: 'white', padding: '0.75rem 1.25rem', borderRadius: '8px', fontWeight: 600 }}>
            + Create Job
          </Link>
        </div>
      </header>

      <div style={{ background: 'white', borderRadius: '12px', border: '1px solid #e2e8f0', boxShadow: '0 1px 3px rgba(0,0,0,0.05)', overflow: 'hidden' }}>
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
            <thead>
              <tr style={{ background: '#f8fafc', borderBottom: '1px solid #e2e8f0' }}>
                <th style={{ padding: '1rem 1.5rem', fontSize: '0.8rem', fontWeight: 600, color: '#64748b', textTransform: 'uppercase' }}>Job Title</th>
                <th style={{ padding: '1rem 1.5rem', fontSize: '0.8rem', fontWeight: 600, color: '#64748b', textTransform: 'uppercase' }}>Department</th>
                <th style={{ padding: '1rem 1.5rem', fontSize: '0.8rem', fontWeight: 600, color: '#64748b', textTransform: 'uppercase' }}>Location</th>
                <th style={{ padding: '1rem 1.5rem', fontSize: '0.8rem', fontWeight: 600, color: '#64748b', textTransform: 'uppercase' }}>Status</th>
                <th style={{ padding: '1rem 1.5rem', fontSize: '0.8rem', fontWeight: 600, color: '#64748b', textTransform: 'uppercase', textAlign: 'center' }}>Apps</th>
                <th style={{ padding: '1rem 1.5rem', fontSize: '0.8rem', fontWeight: 600, color: '#64748b', textTransform: 'uppercase', textAlign: 'right' }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr><td colSpan={6} style={{ padding: '2rem', textAlign: 'center', color: '#64748b' }}>Loading...</td></tr>
              ) : jobs.length === 0 ? (
                <tr><td colSpan={6} style={{ padding: '3rem 2rem', textAlign: 'center', color: '#64748b' }}>No jobs found.</td></tr>
              ) : (
                jobs.map(job => (
                  <tr key={job.id} style={{ borderBottom: '1px solid #e2e8f0' }}>
                    <td style={{ padding: '1rem 1.5rem', color: '#0f172a', fontWeight: 500 }}>
                      <Link to={`/admin/careers/jobs/edit/${job.id}`} style={{ color: '#0f172a', textDecoration: 'none' }}>
                        {job.title}
                      </Link>
                      <div style={{ fontSize: '0.8rem', color: '#64748b', marginTop: '0.25rem' }}>{job.employment_type}</div>
                    </td>
                    <td style={{ padding: '1rem 1.5rem', color: '#475569', fontSize: '0.9rem' }}>{job.department}</td>
                    <td style={{ padding: '1rem 1.5rem', color: '#475569', fontSize: '0.9rem' }}>{job.location}</td>
                    <td style={{ padding: '1rem 1.5rem' }}>
                      <span style={{ 
                        padding: '0.25rem 0.6rem', borderRadius: '999px', fontSize: '0.75rem', fontWeight: 600,
                        background: job.status === 'PUBLISHED' ? '#dcfce3' : job.status === 'DRAFT' ? '#f1f5f9' : '#fee2e2',
                        color: job.status === 'PUBLISHED' ? '#166534' : job.status === 'DRAFT' ? '#475569' : '#991b1b'
                      }}>
                        {job.status}
                      </span>
                    </td>
                    <td style={{ padding: '1rem 1.5rem', textAlign: 'center' }}>
                      <span style={{ display: 'inline-block', background: '#eff6ff', color: '#2563eb', fontWeight: 600, padding: '0.2rem 0.6rem', borderRadius: '4px', fontSize: '0.85rem' }}>
                        {job.applications_count}
                      </span>
                    </td>
                    <td style={{ padding: '1rem 1.5rem', textAlign: 'right' }}>
                      <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'flex-end' }}>
                        <button style={{ padding: '0.4rem 0.75rem', border: '1px solid #cbd5e1', background: 'white', borderRadius: '6px', cursor: 'pointer', fontSize: '0.85rem' }}>Edit</button>
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
