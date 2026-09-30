import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

export const BlogEditor: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState<'CONTENT' | 'SEO' | 'SETTINGS'>('CONTENT');
  const [loading, setLoading] = useState(false);
  const [initialLoading, setInitialLoading] = useState(!!id);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [existingImage, setExistingImage] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    title: '',
    slug: '',
    category: '',
    short_description: '',
    content: '',
    seo_title: '',
    seo_description: '',
    seo_keywords: '',
    allow_comments: false,
    is_featured: false,
  });

  useEffect(() => {
    if (id) {
      fetch(`http://localhost:8000/api/admin/blogs/${id}/`)
        .then(res => res.json())
        .then(data => {
          setFormData({
            title: data.title || '',
            slug: data.slug || '',
            category: data.category || '',
            short_description: data.short_description || '',
            content: data.content || '',
            seo_title: data.seo_title || '',
            seo_description: data.seo_description || '',
            seo_keywords: data.seo_keywords || '',
            allow_comments: data.allow_comments || false,
            is_featured: data.is_featured || false,
          });
          setExistingImage(data.featured_image);
          setInitialLoading(false);
        })
        .catch(err => {
          console.error('Failed to load blog', err);
          setInitialLoading(false);
        });
    }
  }, [id]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const val = type === 'checkbox' ? (e.target as HTMLInputElement).checked : value;
    
    setFormData(prev => ({
      ...prev,
      [name]: val,
      // Auto-generate slug from title if slug hasn't been manually edited yet (simplistic approach for demo)
      ...(name === 'title' && prev.slug === '' ? { slug: value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '') } : {})
    }));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImageFile(e.target.files[0]);
    }
  };

  const handleSave = async (status: 'DRAFT' | 'PUBLISHED') => {
    setLoading(true);
    
    try {
      const formPayload = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        if (value !== '' && value !== false) {
          formPayload.append(key, value.toString());
        }
      });
      formPayload.append('status', status);
      if (imageFile) {
        formPayload.append('featured_image', imageFile);
      }
      
      const method = id ? 'PUT' : 'POST';
      const url = id ? `http://localhost:8000/api/admin/blogs/${id}/` : 'http://localhost:8000/api/admin/blogs/';
      
      const response = await fetch(url, {
        method: method,
        body: formPayload,
      });
      
      if (!response.ok) throw new Error('Failed to save blog');
      
      navigate('/admin/blogs');
    } catch (err) {
      console.error(err);
      alert('Error saving blog.');
    } finally {
      setLoading(false);
    }
  };

  if (initialLoading) {
    return <div style={{ padding: '2rem', textAlign: 'center' }}>Loading Editor...</div>;
  }

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', paddingBottom: '4rem' }}>
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <button onClick={() => navigate('/admin/blogs')} style={{ background: 'none', border: 'none', fontSize: '1.2rem', cursor: 'pointer', color: '#64748b' }}>←</button>
          <h1 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#0f172a', margin: 0 }}>
            {id ? 'Edit Blog Post' : 'Create New Blog Post'}
          </h1>
        </div>
        <div style={{ display: 'flex', gap: '0.75rem' }}>
          <button onClick={() => handleSave('DRAFT')} disabled={loading} style={{ background: 'white', border: '1px solid #cbd5e1', color: '#0f172a', padding: '0.6rem 1.25rem', borderRadius: '8px', fontWeight: 600, cursor: 'pointer' }}>
            Save Draft
          </button>
          <button onClick={() => handleSave('PUBLISHED')} disabled={loading} style={{ background: '#2563eb', border: 'none', color: 'white', padding: '0.6rem 1.25rem', borderRadius: '8px', fontWeight: 600, cursor: 'pointer' }}>
            {loading ? 'Publishing...' : 'Publish Now'}
          </button>
        </div>
      </header>

      <div style={{ display: 'flex', gap: '2rem' }}>
        {/* Main Editor Column */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          
          {/* Tabs */}
          <div style={{ display: 'flex', gap: '1.5rem', borderBottom: '1px solid #e2e8f0' }}>
            {['CONTENT', 'SEO', 'SETTINGS'].map(tab => (
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
            
            {activeTab === 'CONTENT' && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div>
                  <label style={{ display: 'block', fontWeight: 600, color: '#334155', marginBottom: '0.5rem', fontSize: '0.9rem' }}>Blog Title *</label>
                  <input type="text" name="title" value={formData.title} onChange={handleChange} placeholder="e.g. The Future of AI in Manufacturing" style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '1rem' }} />
                </div>
                
                <div style={{ display: 'flex', gap: '1.5rem' }}>
                  <div style={{ flex: 1 }}>
                    <label style={{ display: 'block', fontWeight: 600, color: '#334155', marginBottom: '0.5rem', fontSize: '0.9rem' }}>URL Slug *</label>
                    <input type="text" name="slug" value={formData.slug} onChange={handleChange} style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '0.9rem', color: '#64748b' }} />
                  </div>
                  <div style={{ flex: 1 }}>
                    <label style={{ display: 'block', fontWeight: 600, color: '#334155', marginBottom: '0.5rem', fontSize: '0.9rem' }}>Category *</label>
                    <select name="category" value={formData.category} onChange={handleChange} style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '0.9rem', background: 'white' }}>
                      <option value="">Select Category</option>
                      <option value="1">Technology</option>
                      <option value="2">Cybersecurity</option>
                      <option value="3">Enterprise IT</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label style={{ display: 'block', fontWeight: 600, color: '#334155', marginBottom: '0.5rem', fontSize: '0.9rem' }}>Short Description *</label>
                  <textarea name="short_description" value={formData.short_description} onChange={handleChange} rows={3} placeholder="A brief summary for blog cards and listings..." style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '0.9rem', resize: 'vertical' }} />
                </div>

                <div>
                  <label style={{ display: 'block', fontWeight: 600, color: '#334155', marginBottom: '0.5rem', fontSize: '0.9rem' }}>Content *</label>
                  {/* Fake Rich Text Toolbar */}
                  <div style={{ border: '1px solid #cbd5e1', borderBottom: 'none', borderRadius: '8px 8px 0 0', padding: '0.5rem', display: 'flex', gap: '0.5rem', background: '#f8fafc' }}>
                    <button type="button" style={{ background: 'white', border: '1px solid #e2e8f0', padding: '0.25rem 0.5rem', borderRadius: '4px', cursor: 'pointer' }}><strong>B</strong></button>
                    <button type="button" style={{ background: 'white', border: '1px solid #e2e8f0', padding: '0.25rem 0.5rem', borderRadius: '4px', cursor: 'pointer' }}><em>I</em></button>
                    <button type="button" style={{ background: 'white', border: '1px solid #e2e8f0', padding: '0.25rem 0.5rem', borderRadius: '4px', cursor: 'pointer' }}>H2</button>
                    <div style={{ width: '1px', background: '#cbd5e1', margin: '0 0.25rem' }} />
                    <button type="button" style={{ background: 'white', border: '1px solid #e2e8f0', padding: '0.25rem 0.5rem', borderRadius: '4px', cursor: 'pointer' }}>🖼️ Image</button>
                    <button type="button" style={{ background: 'white', border: '1px solid #e2e8f0', padding: '0.25rem 0.5rem', borderRadius: '4px', cursor: 'pointer' }}>🔗 Link</button>
                  </div>
                  <textarea name="content" value={formData.content} onChange={handleChange} rows={15} placeholder="Write your blog post here..." style={{ width: '100%', padding: '1rem', borderRadius: '0 0 8px 8px', border: '1px solid #cbd5e1', fontSize: '1rem', resize: 'vertical', fontFamily: 'inherit', lineHeight: 1.6 }} />
                </div>
              </div>
            )}

            {activeTab === 'SEO' && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div>
                  <label style={{ display: 'block', fontWeight: 600, color: '#334155', marginBottom: '0.5rem', fontSize: '0.9rem' }}>SEO Title</label>
                  <input type="text" name="seo_title" value={formData.seo_title} onChange={handleChange} placeholder="If left blank, the blog title will be used." style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '0.9rem' }} />
                </div>
                <div>
                  <label style={{ display: 'block', fontWeight: 600, color: '#334155', marginBottom: '0.5rem', fontSize: '0.9rem' }}>Meta Description</label>
                  <textarea name="seo_description" value={formData.seo_description} onChange={handleChange} rows={3} style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '0.9rem', resize: 'vertical' }} />
                  <p style={{ fontSize: '0.75rem', color: '#64748b', marginTop: '0.25rem' }}>Optimal length is 150-160 characters.</p>
                </div>
                <div>
                  <label style={{ display: 'block', fontWeight: 600, color: '#334155', marginBottom: '0.5rem', fontSize: '0.9rem' }}>Keywords</label>
                  <input type="text" name="seo_keywords" value={formData.seo_keywords} onChange={handleChange} placeholder="e.g. AI, manufacturing, cloud" style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '0.9rem' }} />
                </div>
              </div>
            )}

            {activeTab === 'SETTINGS' && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <label style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', cursor: 'pointer' }}>
                  <input type="checkbox" name="is_featured" checked={formData.is_featured} onChange={handleChange} style={{ width: '1.2rem', height: '1.2rem' }} />
                  <span style={{ fontWeight: 600, color: '#334155', fontSize: '0.9rem' }}>Feature this post on Homepage</span>
                </label>
                <label style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', cursor: 'pointer' }}>
                  <input type="checkbox" name="allow_comments" checked={formData.allow_comments} onChange={handleChange} style={{ width: '1.2rem', height: '1.2rem' }} />
                  <span style={{ fontWeight: 600, color: '#334155', fontSize: '0.9rem' }}>Allow Comments</span>
                </label>
              </div>
            )}

          </div>
        </div>

        {/* Sidebar Column */}
        <div style={{ width: '300px', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          
          {/* Featured Image */}
          <div style={{ background: 'white', borderRadius: '12px', border: '1px solid #e2e8f0', padding: '1.5rem' }}>
            <h3 style={{ fontSize: '1rem', fontWeight: 600, color: '#0f172a', margin: '0 0 1rem 0' }}>Featured Image *</h3>
            <label style={{ border: '2px dashed #cbd5e1', borderRadius: '8px', padding: '2rem 1rem', textAlign: 'center', cursor: 'pointer', background: '#f8fafc', display: 'block' }}>
              <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>📸</div>
              <p style={{ color: '#2563eb', fontWeight: 600, fontSize: '0.9rem', margin: 0 }}>
                {imageFile ? imageFile.name : (existingImage ? 'Replace current image' : 'Click to upload image')}
              </p>
              {existingImage && !imageFile && (
                <img src={existingImage} alt="Current" style={{ width: '100%', marginTop: '1rem', borderRadius: '4px' }} />
              )}
              <p style={{ color: '#64748b', fontSize: '0.75rem', marginTop: '0.25rem' }}>JPG, PNG or WebP (Max. 5MB)</p>
              <input type="file" accept="image/*" onChange={handleImageChange} style={{ display: 'none' }} />
            </label>
          </div>

          {/* Publishing Info */}
          <div style={{ background: 'white', borderRadius: '12px', border: '1px solid #e2e8f0', padding: '1.5rem' }}>
            <h3 style={{ fontSize: '1rem', fontWeight: 600, color: '#0f172a', margin: '0 0 1rem 0' }}>Publishing</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.85rem', color: '#475569' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span>Status:</span>
                <span style={{ fontWeight: 600, color: '#92400e', background: '#fef3c7', padding: '0.1rem 0.5rem', borderRadius: '4px' }}>Draft</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span>Visibility:</span>
                <span style={{ fontWeight: 600, color: '#0f172a' }}>Public</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span>Publish Date:</span>
                <span style={{ fontWeight: 600, color: '#2563eb', cursor: 'pointer' }}>Immediately</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
