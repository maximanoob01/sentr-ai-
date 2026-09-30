import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

export const ApplicationDetail: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [status, setStatus] = useState('NEW');
  const [internalNote, setInternalNote] = useState('');
  
  // Mock data for demo
  const application = {
    id: id || '101',
    job_title: 'Senior Cloud Architect',
    candidate: {
      name: 'Jane Smith',
      email: 'jane.smith@example.com',
      phone: '+91 9876543210',
      current_role: 'Cloud Engineer at TechCorp',
      experience: '8 Years',
      location: 'New Delhi, India',
      linkedin: 'https://linkedin.com/in/janesmith',
      portfolio: '',
      github: 'https://github.com/janesmith'
    },
    applied_at: '2026-10-01T08:30:00Z',
    cover_letter: 'I am highly interested in the Senior Cloud Architect role. I have spent the last 8 years building scalable AWS and Azure architectures for enterprise clients...',
    notes: [
      { id: 1, author: 'Super Admin', date: '2026-10-01T10:00:00Z', text: 'Strong AWS background. Looks like a solid fit.' }
    ]
  };

  const handleStatusChange = (newStatus: string) => {
    setStatus(newStatus);
    // TODO: Update via API
  };

  const handleAddNote = () => {
    if (!internalNote.trim()) return;
    // TODO: Add via API
    setInternalNote('');
  };

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', paddingBottom: '4rem' }}>
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <button onClick={() => navigate('/admin/careers/applications')} style={{ background: 'none', border: 'none', fontSize: '1.2rem', cursor: 'pointer', color: '#64748b' }}>←</button>
          <div>
            <h1 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#0f172a', margin: '0 0 0.25rem 0' }}>{application.candidate.name}</h1>
            <p style={{ color: '#64748b', margin: 0, fontSize: '0.9rem' }}>Application for {application.job_title} • Submitted {new Date(application.applied_at).toLocaleDateString()}</p>
          </div>
        </div>
        <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
          <span style={{ fontSize: '0.85rem', fontWeight: 600, color: '#475569' }}>Status:</span>
          <select 
            value={status} 
            onChange={(e) => handleStatusChange(e.target.value)}
            style={{ padding: '0.5rem 1rem', borderRadius: '6px', border: '1px solid #cbd5e1', fontSize: '0.9rem', background: 'white', fontWeight: 600, color: '#0f172a', cursor: 'pointer' }}
          >
            <option value="NEW">New</option>
            <option value="REVIEW">Under Review</option>
            <option value="SHORTLISTED">Shortlisted</option>
            <option value="INTERVIEW">Interview</option>
            <option value="SELECTED">Selected</option>
            <option value="REJECTED">Rejected</option>
            <option value="WITHDRAWN">Withdrawn</option>
          </select>
        </div>
      </header>

      <div style={{ display: 'flex', gap: '2rem' }}>
        {/* Left Column: Candidate Info */}
        <div style={{ flex: 2, display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          
          <div style={{ background: 'white', borderRadius: '12px', border: '1px solid #e2e8f0', padding: '2rem', boxShadow: '0 1px 3px rgba(0,0,0,0.02)' }}>
            <h2 style={{ fontSize: '1.1rem', fontWeight: 600, color: '#0f172a', margin: '0 0 1.5rem 0', borderBottom: '1px solid #e2e8f0', paddingBottom: '0.75rem' }}>Candidate Information</h2>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
              <div>
                <span style={{ display: 'block', fontSize: '0.8rem', color: '#64748b', fontWeight: 600, textTransform: 'uppercase', marginBottom: '0.25rem' }}>Email</span>
                <span style={{ color: '#0f172a', fontWeight: 500 }}>{application.candidate.email}</span>
              </div>
              <div>
                <span style={{ display: 'block', fontSize: '0.8rem', color: '#64748b', fontWeight: 600, textTransform: 'uppercase', marginBottom: '0.25rem' }}>Phone</span>
                <span style={{ color: '#0f172a', fontWeight: 500 }}>{application.candidate.phone}</span>
              </div>
              <div>
                <span style={{ display: 'block', fontSize: '0.8rem', color: '#64748b', fontWeight: 600, textTransform: 'uppercase', marginBottom: '0.25rem' }}>Current Role</span>
                <span style={{ color: '#0f172a', fontWeight: 500 }}>{application.candidate.current_role}</span>
              </div>
              <div>
                <span style={{ display: 'block', fontSize: '0.8rem', color: '#64748b', fontWeight: 600, textTransform: 'uppercase', marginBottom: '0.25rem' }}>Experience</span>
                <span style={{ color: '#0f172a', fontWeight: 500 }}>{application.candidate.experience}</span>
              </div>
              <div>
                <span style={{ display: 'block', fontSize: '0.8rem', color: '#64748b', fontWeight: 600, textTransform: 'uppercase', marginBottom: '0.25rem' }}>Location</span>
                <span style={{ color: '#0f172a', fontWeight: 500 }}>{application.candidate.location}</span>
              </div>
              <div>
                <span style={{ display: 'block', fontSize: '0.8rem', color: '#64748b', fontWeight: 600, textTransform: 'uppercase', marginBottom: '0.25rem' }}>Links</span>
                <div style={{ display: 'flex', gap: '1rem' }}>
                  {application.candidate.linkedin && <a href={application.candidate.linkedin} target="_blank" rel="noreferrer" style={{ color: '#2563eb', textDecoration: 'none', fontWeight: 500 }}>LinkedIn</a>}
                  {application.candidate.github && <a href={application.candidate.github} target="_blank" rel="noreferrer" style={{ color: '#2563eb', textDecoration: 'none', fontWeight: 500 }}>GitHub</a>}
                </div>
              </div>
            </div>
          </div>

          <div style={{ background: 'white', borderRadius: '12px', border: '1px solid #e2e8f0', padding: '2rem', boxShadow: '0 1px 3px rgba(0,0,0,0.02)' }}>
            <h2 style={{ fontSize: '1.1rem', fontWeight: 600, color: '#0f172a', margin: '0 0 1.5rem 0', borderBottom: '1px solid #e2e8f0', paddingBottom: '0.75rem' }}>Cover Letter / Message</h2>
            <div style={{ color: '#334155', lineHeight: 1.6, fontSize: '0.95rem' }}>
              {application.cover_letter}
            </div>
          </div>

        </div>

        {/* Right Column: Actions & Notes */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          
          <div style={{ background: 'white', borderRadius: '12px', border: '1px solid #e2e8f0', padding: '1.5rem', boxShadow: '0 1px 3px rgba(0,0,0,0.02)' }}>
            <h3 style={{ fontSize: '1rem', fontWeight: 600, color: '#0f172a', margin: '0 0 1rem 0' }}>Resume</h3>
            <div style={{ border: '1px solid #e2e8f0', borderRadius: '8px', padding: '1rem', display: 'flex', alignItems: 'center', gap: '1rem', background: '#f8fafc', marginBottom: '1rem' }}>
              <div style={{ fontSize: '1.5rem' }}>📄</div>
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: 600, fontSize: '0.9rem', color: '#0f172a' }}>jane_smith_resume.pdf</div>
                <div style={{ fontSize: '0.75rem', color: '#64748b' }}>Uploaded securely</div>
              </div>
            </div>
            <button style={{ width: '100%', padding: '0.6rem', border: 'none', background: '#2563eb', color: 'white', borderRadius: '6px', fontWeight: 600, fontSize: '0.9rem', cursor: 'pointer' }}>
              Download Resume
            </button>
            <p style={{ fontSize: '0.75rem', color: '#64748b', textAlign: 'center', marginTop: '0.75rem' }}>Downloads are securely logged.</p>
          </div>

          <div style={{ background: 'white', borderRadius: '12px', border: '1px solid #e2e8f0', padding: '1.5rem', boxShadow: '0 1px 3px rgba(0,0,0,0.02)' }}>
            <h3 style={{ fontSize: '1rem', fontWeight: 600, color: '#0f172a', margin: '0 0 1rem 0' }}>Internal Notes</h3>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '1.5rem' }}>
              {application.notes.map(note => (
                <div key={note.id} style={{ background: '#f8fafc', padding: '1rem', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                    <span style={{ fontSize: '0.8rem', fontWeight: 600, color: '#0f172a' }}>{note.author}</span>
                    <span style={{ fontSize: '0.75rem', color: '#64748b' }}>{new Date(note.date).toLocaleDateString()}</span>
                  </div>
                  <p style={{ margin: 0, fontSize: '0.85rem', color: '#334155', lineHeight: 1.5 }}>{note.text}</p>
                </div>
              ))}
            </div>

            <textarea 
              value={internalNote}
              onChange={(e) => setInternalNote(e.target.value)}
              placeholder="Add a private note (not visible to candidate)..."
              rows={3}
              style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '0.85rem', resize: 'vertical', marginBottom: '0.75rem' }}
            />
            <button 
              onClick={handleAddNote}
              style={{ width: '100%', padding: '0.5rem', border: '1px solid #cbd5e1', background: 'white', color: '#0f172a', borderRadius: '6px', fontWeight: 600, fontSize: '0.85rem', cursor: 'pointer' }}
            >
              Add Note
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};
