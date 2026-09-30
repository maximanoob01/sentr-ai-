import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const JobEditor: React.FC = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<'DETAILS' | 'DESCRIPTION' | 'SEO'>('DETAILS');
  const [loading, setLoading] = useState(false);

  // Form State
  const [formData, setFormData] = useState({
    title: '',
    slug: '',
    department: '',
    location: '',
    work_mode: 'On-site',
    employment_type: 'Full-time',
    experience_required: '',
    salary_range: '',
    description: '',
    responsibilities: '',
    requirements: '',
    preferred_skills: '',
    benefits: '',
    seo_title: '',
    seo_description: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
      ...(name === 'title' && prev.slug === '' ? { slug: value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '') } : {})
    }));
  };

  const handleSave = (status: 'DRAFT' | 'PUBLISHED') => {
    setLoading(true);
    // TODO: Connect to backend API
    setTimeout(() => {
      setLoading(false);
      navigate('/admin/careers');
    }, 800);
  };

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', paddingBottom: '4rem' }}>
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <button onClick={() => navigate('/admin/careers')} style={{ background: 'none', border: 'none', fontSize: '1.2rem', cursor: 'pointer', color: '#64748b' }}>←</button>
          <h1 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#0f172a', margin: 0 }}>Create Job Opening</h1>
        </div>
        <div style={{ display: 'flex', gap: '0.75rem' }}>
          <button onClick={() => handleSave('DRAFT')} disabled={loading} style={{ background: 'white', border: '1px solid #cbd5e1', color: '#0f172a', padding: '0.6rem 1.25rem', borderRadius: '8px', fontWeight: 600, cursor: 'pointer' }}>
            Save Draft
          </button>
          <button onClick={() => handleSave('PUBLISHED')} disabled={loading} style={{ background: '#2563eb', border: 'none', color: 'white', padding: '0.6rem 1.25rem', borderRadius: '8px', fontWeight: 600, cursor: 'pointer' }}>
            {loading ? 'Publishing...' : 'Publish Job'}
          </button>
        </div>
      </header>

      <div style={{ display: 'flex', gap: '2rem' }}>
        {/* Main Editor Column */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          
          <div style={{ display: 'flex', gap: '1.5rem', borderBottom: '1px solid #e2e8f0' }}>
            {['DETAILS', 'DESCRIPTION', 'SEO'].map(tab => (
              <button 
                key={tab}
                onClick={() => setActiveTab(tab as any)}
                style={{
                  background: 'none', border: 'none', padding: '0.75rem 0', fontWeight: 600, cursor: 'pointer',
                  color: activeTab === tab ? '#2563eb' : '#64748b',
                  borderBottom: activeTab === tab ? '2px solid #2563eb' : '2px solid transparent',
                  marginBottom: '-1px'
                }}
              >
                {tab.charAt(0) + tab.slice(1).toLowerCase()}
              </button>
            ))}
          </div>

          <div style={{ background: 'white', borderRadius: '12px', border: '1px solid #e2e8f0', padding: '2rem', boxShadow: '0 1px 3px rgba(0,0,0,0.02)' }}>
            
            {activeTab === 'DETAILS' && (
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                <div style={{ gridColumn: '1 / -1' }}>
                  <label style={{ display: 'block', fontWeight: 600, color: '#334155', marginBottom: '0.5rem', fontSize: '0.9rem' }}>Job Title *</label>
                  <input type="text" name="title" value={formData.title} onChange={handleChange} placeholder="e.g. Senior Software Engineer" style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '1rem' }} />
                </div>
                
                <div>
                  <label style={{ display: 'block', fontWeight: 600, color: '#334155', marginBottom: '0.5rem', fontSize: '0.9rem' }}>Department *</label>
                  <input type="text" name="department" value={formData.department} onChange={handleChange} placeholder="e.g. Engineering" style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '0.9rem' }} />
                </div>
                <div>
                  <label style={{ display: 'block', fontWeight: 600, color: '#334155', marginBottom: '0.5rem', fontSize: '0.9rem' }}>Location *</label>
                  <input type="text" name="location" value={formData.location} onChange={handleChange} placeholder="e.g. Noida, India" style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '0.9rem' }} />
                </div>

                <div>
                  <label style={{ display: 'block', fontWeight: 600, color: '#334155', marginBottom: '0.5rem', fontSize: '0.9rem' }}>Work Mode *</label>
                  <select name="work_mode" value={formData.work_mode} onChange={handleChange} style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '0.9rem', background: 'white' }}>
                    <option value="On-site">On-site</option>
                    <option value="Hybrid">Hybrid</option>
                    <option value="Remote">Remote</option>
                  </select>
                </div>
                <div>
                  <label style={{ display: 'block', fontWeight: 600, color: '#334155', marginBottom: '0.5rem', fontSize: '0.9rem' }}>Employment Type *</label>
                  <select name="employment_type" value={formData.employment_type} onChange={handleChange} style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '0.9rem', background: 'white' }}>
                    <option value="Full-time">Full-time</option>
                    <option value="Part-time">Part-time</option>
                    <option value="Contract">Contract</option>
                    <option value="Internship">Internship</option>
                  </select>
                </div>

                <div>
                  <label style={{ display: 'block', fontWeight: 600, color: '#334155', marginBottom: '0.5rem', fontSize: '0.9rem' }}>Experience Required</label>
                  <input type="text" name="experience_required" value={formData.experience_required} onChange={handleChange} placeholder="e.g. 3-5 Years" style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '0.9rem' }} />
                </div>
                <div>
                  <label style={{ display: 'block', fontWeight: 600, color: '#334155', marginBottom: '0.5rem', fontSize: '0.9rem' }}>Salary / Compensation (Optional)</label>
                  <input type="text" name="salary_range" value={formData.salary_range} onChange={handleChange} placeholder="e.g. Competitive" style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '0.9rem' }} />
                </div>
              </div>
            )}

            {activeTab === 'DESCRIPTION' && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div>
                  <label style={{ display: 'block', fontWeight: 600, color: '#334155', marginBottom: '0.5rem', fontSize: '0.9rem' }}>Job Description *</label>
                  <textarea name="description" value={formData.description} onChange={handleChange} rows={5} style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '0.9rem', resize: 'vertical' }} />
                </div>
                <div>
                  <label style={{ display: 'block', fontWeight: 600, color: '#334155', marginBottom: '0.5rem', fontSize: '0.9rem' }}>Responsibilities *</label>
                  <textarea name="responsibilities" value={formData.responsibilities} onChange={handleChange} rows={5} placeholder="Use bullet points or text..." style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '0.9rem', resize: 'vertical' }} />
                </div>
                <div>
                  <label style={{ display: 'block', fontWeight: 600, color: '#334155', marginBottom: '0.5rem', fontSize: '0.9rem' }}>Requirements *</label>
                  <textarea name="requirements" value={formData.requirements} onChange={handleChange} rows={5} style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '0.9rem', resize: 'vertical' }} />
                </div>
                <div>
                  <label style={{ display: 'block', fontWeight: 600, color: '#334155', marginBottom: '0.5rem', fontSize: '0.9rem' }}>Benefits (Optional)</label>
                  <textarea name="benefits" value={formData.benefits} onChange={handleChange} rows={4} style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '0.9rem', resize: 'vertical' }} />
                </div>
              </div>
            )}

            {activeTab === 'SEO' && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div>
                  <label style={{ display: 'block', fontWeight: 600, color: '#334155', marginBottom: '0.5rem', fontSize: '0.9rem' }}>URL Slug *</label>
                  <input type="text" name="slug" value={formData.slug} onChange={handleChange} style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '0.9rem' }} />
                </div>
                <div>
                  <label style={{ display: 'block', fontWeight: 600, color: '#334155', marginBottom: '0.5rem', fontSize: '0.9rem' }}>SEO Title</label>
                  <input type="text" name="seo_title" value={formData.seo_title} onChange={handleChange} style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '0.9rem' }} />
                </div>
                <div>
                  <label style={{ display: 'block', fontWeight: 600, color: '#334155', marginBottom: '0.5rem', fontSize: '0.9rem' }}>Meta Description</label>
                  <textarea name="seo_description" value={formData.seo_description} onChange={handleChange} rows={3} style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '0.9rem', resize: 'vertical' }} />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
