import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const AdminLogin: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // TODO: Connect to backend authentication
    setTimeout(() => {
      setLoading(false);
      navigate('/admin/dashboard');
    }, 1000);
  };

  return (
    <div style={{ display: 'flex', height: '100vh', width: '100vw', background: '#f8fafc', alignItems: 'center', justifyContent: 'center', fontFamily: 'Inter, sans-serif' }}>
      <div style={{ width: '100%', maxWidth: '400px', background: 'white', padding: '2.5rem', borderRadius: '12px', boxShadow: '0 10px 25px -5px rgba(0,0,0,0.1), 0 8px 10px -6px rgba(0,0,0,0.1)' }}>
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <div style={{ fontSize: '1.5rem', fontWeight: 800, color: '#0f172a', marginBottom: '0.5rem' }}>
            Sentr AI <span style={{ color: '#2563eb' }}>Admin</span>
          </div>
          <p style={{ color: '#64748b', fontSize: '0.9rem' }}>Sign in to manage your website</p>
        </div>

        <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          <div>
            <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#334155', marginBottom: '0.5rem' }}>Email</label>
            <input 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '1rem', outline: 'none', boxSizing: 'border-box' }}
              placeholder="admin@sentrai.in"
            />
          </div>
          <div>
            <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#334155', marginBottom: '0.5rem' }}>Password</label>
            <input 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '1rem', outline: 'none', boxSizing: 'border-box' }}
              placeholder="••••••••"
            />
          </div>
          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <a href="#" style={{ fontSize: '0.8rem', color: '#2563eb', textDecoration: 'none', fontWeight: 500 }}>Forgot Password?</a>
          </div>
          <button 
            type="submit" 
            disabled={loading}
            style={{ 
              width: '100%', padding: '0.875rem', background: '#2563eb', color: 'white', border: 'none', borderRadius: '8px', fontSize: '1rem', fontWeight: 600, cursor: loading ? 'not-allowed' : 'pointer', marginTop: '0.5rem', transition: 'background 0.2s', opacity: loading ? 0.7 : 1
            }}
          >
            {loading ? 'Signing in...' : 'Sign In'}
          </button>
        </form>
      </div>
    </div>
  );
};
