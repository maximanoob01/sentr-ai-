import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { AdminLayout } from './AdminLayout';
import { AdminLogin } from './pages/AdminLogin';
import { AdminDashboard } from './pages/AdminDashboard';
import { BlogList } from './pages/BlogList';
import { BlogEditor } from './pages/BlogEditor';
import { JobList } from './pages/JobList';
import { JobEditor } from './pages/JobEditor';
import { ApplicationList } from './pages/ApplicationList';
import { ApplicationDetail } from './pages/ApplicationDetail';

// Placeholder component for unimplemented pages
const Placeholder: React.FC<{ title: string }> = ({ title }) => (
  <div style={{ padding: '2rem', textAlign: 'center', background: 'white', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
    <h2 style={{ color: '#0f172a', marginBottom: '1rem' }}>{title}</h2>
    <p style={{ color: '#64748b' }}>This module is currently being built.</p>
  </div>
);

export const AdminApp: React.FC = () => {
  return (
    <Routes>
      <Route path="login" element={<AdminLogin />} />
      <Route path="/" element={<AdminLayout />}>
        <Route index element={<Navigate to="dashboard" replace />} />
        <Route path="dashboard" element={<AdminDashboard />} />
        
        {/* Module Placeholders */}
        <Route path="content" element={<Placeholder title="Page Content Management" />} />
        
        {/* Blog CMS */}
        <Route path="blogs" element={<BlogList />} />
        <Route path="blogs/new" element={<BlogEditor />} />
        <Route path="blogs/edit/:id" element={<BlogEditor />} />

        {/* Careers CMS */}
        <Route path="careers" element={<JobList />} />
        <Route path="careers/jobs/new" element={<JobEditor />} />
        <Route path="careers/jobs/edit/:id" element={<JobEditor />} />
        <Route path="careers/applications" element={<ApplicationList />} />
        <Route path="careers/applications/:id" element={<ApplicationDetail />} />

        <Route path="media/*" element={<Placeholder title="Media Library" />} />
        <Route path="seo/*" element={<Placeholder title="SEO Settings" />} />
        <Route path="settings/*" element={<Placeholder title="Global Settings" />} />
      </Route>
    </Routes>
  );
};
