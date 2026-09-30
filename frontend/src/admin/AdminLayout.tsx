import React, { useState } from 'react';
import { Outlet, Link, useLocation, useNavigate } from 'react-router-dom';
import './AdminLayout.css';

export const AdminLayout: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = (e: React.MouseEvent) => {
    e.preventDefault();
    // TODO: implement logout logic
    navigate('/admin/login');
  };

  const menuItems = [
    { label: 'Dashboard', path: '/admin/dashboard', icon: '📊' },
    { label: 'Content', path: '/admin/content', icon: '📝' },
    { label: 'Blogs', path: '/admin/blogs', icon: '✍️' },
    { label: 'Careers', path: '/admin/careers', icon: '💼' },
    { label: 'Media', path: '/admin/media', icon: '🖼️' },
    { label: 'SEO', path: '/admin/seo', icon: '🔍' },
    { label: 'Settings', path: '/admin/settings', icon: '⚙️' },
  ];

  return (
    <div className="admin-layout">
      {/* Mobile Overlay */}
      {sidebarOpen && <div className="admin-sidebar-overlay" onClick={() => setSidebarOpen(false)} />}
      
      {/* Sidebar */}
      <aside className={`admin-sidebar ${sidebarOpen ? 'open' : ''}`}>
        <div className="admin-sidebar-header">
          <Link to="/admin/dashboard" className="admin-logo">
            Sentr AI <span>Admin</span>
          </Link>
          <button className="admin-close-btn" onClick={() => setSidebarOpen(false)}>×</button>
        </div>
        
        <nav className="admin-nav">
          <ul>
            {menuItems.map(item => (
              <li key={item.path}>
                <Link 
                  to={item.path} 
                  className={`admin-nav-link ${location.pathname.startsWith(item.path) ? 'active' : ''}`}
                  onClick={() => setSidebarOpen(false)}
                >
                  <span className="admin-nav-icon">{item.icon}</span>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="admin-sidebar-footer">
          <div className="admin-user-info">
            <div className="admin-avatar">SA</div>
            <div className="admin-user-details">
              <strong>Super Admin</strong>
              <span>admin@sentrai.in</span>
            </div>
          </div>
          <button onClick={handleLogout} className="admin-logout-btn">
            Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="admin-main">
        {/* Top Header */}
        <header className="admin-header">
          <button className="admin-menu-toggle" onClick={() => setSidebarOpen(true)}>
            ☰
          </button>
          <div className="admin-header-right">
            <button className="admin-header-btn">🔔</button>
            <Link to="/" target="_blank" className="admin-header-link">View Site ↗</Link>
          </div>
        </header>

        {/* Dynamic Page Content */}
        <div className="admin-content-area">
          <Outlet />
        </div>
      </main>
    </div>
  );
};
