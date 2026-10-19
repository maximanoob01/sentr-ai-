import React, { useState, useEffect } from 'react';

interface DemoRequest {
  id: number;
  full_name: string;
  company: string;
  email: string;
  phone: string;
  industry: string;
  requirement: string;
  created_at: string;
  is_contacted: boolean;
  notes: string;
}

export const DemoRequestList: React.FC = () => {
  const [requests, setRequests] = useState<DemoRequest[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<'ALL' | 'PENDING' | 'CONTACTED'>('ALL');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRequest, setSelectedRequest] = useState<DemoRequest | null>(null);
  const [updatingId, setUpdatingId] = useState<number | null>(null);

  const fetchRequests = () => {
    setLoading(true);
    fetch('http://127.0.0.1:8000/api/admin/demo-requests/')
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setRequests(data);
        } else {
          setRequests([]);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching demo requests:', err);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchRequests();
  }, []);

  const toggleContacted = async (req: DemoRequest) => {
    setUpdatingId(req.id);
    try {
      const res = await fetch(`http://127.0.0.1:8000/api/admin/demo-requests/${req.id}/toggle_contacted/`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
      });
      if (res.ok) {
        const data = await res.json();
        setRequests((prev) =>
          prev.map((item) => (item.id === req.id ? { ...item, is_contacted: data.is_contacted } : item))
        );
        if (selectedRequest?.id === req.id) {
          setSelectedRequest((prev) => (prev ? { ...prev, is_contacted: data.is_contacted } : null));
        }
      }
    } catch (err) {
      console.error('Failed to toggle status:', err);
    } finally {
      setUpdatingId(null);
    }
  };

  const totalCount = requests.length;
  const pendingCount = requests.filter((r) => !r.is_contacted).length;
  const contactedCount = requests.filter((r) => r.is_contacted).length;

  const filteredRequests = requests.filter((r) => {
    if (filter === 'PENDING' && r.is_contacted) return false;
    if (filter === 'CONTACTED' && !r.is_contacted) return false;
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const matchName = r.full_name?.toLowerCase().includes(q);
      const matchComp = r.company?.toLowerCase().includes(q);
      const matchEmail = r.email?.toLowerCase().includes(q);
      const matchPhone = r.phone?.toLowerCase().includes(q);
      const matchReq = r.requirement?.toLowerCase().includes(q);
      return matchName || matchComp || matchEmail || matchPhone || matchReq;
    }
    return true;
  });

  return (
    <div className="demo-admin-page" style={{ maxWidth: '1280px', margin: '0 auto', paddingBottom: '3rem' }}>
      {/* Page Header */}
      <header style={{ marginBottom: '2rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <h1 style={{ fontSize: '1.85rem', fontWeight: 800, color: '#0f172a', margin: '0 0 0.25rem 0', letterSpacing: '-0.02em' }}>
              Aindri Demo Requests
            </h1>
            <p style={{ color: '#64748b', margin: 0, fontSize: '0.95rem' }}>
              Review, manage, and coordinate walkthroughs for inbound Aindri product inquiries.
            </p>
          </div>
          <button
            onClick={fetchRequests}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.6rem 1.2rem',
              background: '#ffffff',
              border: '1px solid #cbd5e1',
              borderRadius: '8px',
              fontSize: '0.88rem',
              fontWeight: 600,
              color: '#334155',
              cursor: 'pointer',
              transition: 'all 0.2s',
            }}
          >
            ↻ Refresh List
          </button>
        </div>
      </header>

      {/* KPI Stats Row */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.25rem', marginBottom: '2rem' }}>
        <div style={{ background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '14px', padding: '1.4rem 1.5rem', boxShadow: '0 2px 4px rgba(0,0,0,0.02)' }}>
          <div style={{ fontSize: '0.82rem', fontWeight: 600, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.5rem' }}>
            Total Inquiries
          </div>
          <div style={{ fontSize: '2rem', fontWeight: 800, color: '#0f172a', lineHeight: 1 }}>{totalCount}</div>
        </div>

        <div style={{ background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '14px', padding: '1.4rem 1.5rem', boxShadow: '0 2px 4px rgba(0,0,0,0.02)' }}>
          <div style={{ fontSize: '0.82rem', fontWeight: 600, color: '#f59e0b', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.5rem' }}>
            Pending Follow-Up
          </div>
          <div style={{ fontSize: '2rem', fontWeight: 800, color: '#d97706', lineHeight: 1 }}>{pendingCount}</div>
        </div>

        <div style={{ background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '14px', padding: '1.4rem 1.5rem', boxShadow: '0 2px 4px rgba(0,0,0,0.02)' }}>
          <div style={{ fontSize: '0.82rem', fontWeight: 600, color: '#16a34a', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.5rem' }}>
            Contacted & Scheduled
          </div>
          <div style={{ fontSize: '2rem', fontWeight: 800, color: '#15803d', lineHeight: 1 }}>{contactedCount}</div>
        </div>
      </div>

      {/* Main Table Card */}
      <div style={{ background: '#ffffff', borderRadius: '16px', border: '1px solid #e2e8f0', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)', overflow: 'hidden' }}>
        {/* Controls Toolbar */}
        <div style={{ padding: '1.25rem 1.5rem', borderBottom: '1px solid #e2e8f0', display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
          <div style={{ display: 'inline-flex', background: '#f1f5f9', padding: '0.25rem', borderRadius: '8px' }}>
            <button
              onClick={() => setFilter('ALL')}
              style={{
                border: 'none',
                background: filter === 'ALL' ? '#ffffff' : 'transparent',
                color: filter === 'ALL' ? '#0f172a' : '#64748b',
                fontWeight: 600,
                fontSize: '0.85rem',
                padding: '0.45rem 1rem',
                borderRadius: '6px',
                cursor: 'pointer',
                boxShadow: filter === 'ALL' ? '0 1px 3px rgba(0,0,0,0.1)' : 'none',
              }}
            >
              All ({totalCount})
            </button>
            <button
              onClick={() => setFilter('PENDING')}
              style={{
                border: 'none',
                background: filter === 'PENDING' ? '#ffffff' : 'transparent',
                color: filter === 'PENDING' ? '#0f172a' : '#64748b',
                fontWeight: 600,
                fontSize: '0.85rem',
                padding: '0.45rem 1rem',
                borderRadius: '6px',
                cursor: 'pointer',
                boxShadow: filter === 'PENDING' ? '0 1px 3px rgba(0,0,0,0.1)' : 'none',
              }}
            >
              Pending ({pendingCount})
            </button>
            <button
              onClick={() => setFilter('CONTACTED')}
              style={{
                border: 'none',
                background: filter === 'CONTACTED' ? '#ffffff' : 'transparent',
                color: filter === 'CONTACTED' ? '#0f172a' : '#64748b',
                fontWeight: 600,
                fontSize: '0.85rem',
                padding: '0.45rem 1rem',
                borderRadius: '6px',
                cursor: 'pointer',
                boxShadow: filter === 'CONTACTED' ? '0 1px 3px rgba(0,0,0,0.1)' : 'none',
              }}
            >
              Contacted ({contactedCount})
            </button>
          </div>

          <div style={{ flex: 1 }} />

          {/* Search Box */}
          <div style={{ position: 'relative', width: '320px', maxWidth: '100%' }}>
            <input
              type="text"
              placeholder="Search by name, company, email, phone..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                width: '100%',
                boxSizing: 'border-box',
                padding: '0.6rem 1rem 0.6rem 2.2rem',
                borderRadius: '8px',
                border: '1px solid #cbd5e1',
                fontSize: '0.88rem',
                background: '#f8fafc',
                outline: 'none',
              }}
            />
            <span style={{ position: 'absolute', left: '0.8rem', top: '50%', transform: 'translateY(-50%)', color: '#94a3b8', fontSize: '0.9rem' }}>
              🔍
            </span>
          </div>
        </div>

        {/* Table Content */}
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
            <thead>
              <tr style={{ background: '#f8fafc', borderBottom: '1px solid #e2e8f0' }}>
                <th style={{ padding: '0.9rem 1.5rem', fontSize: '0.78rem', fontWeight: 700, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                  Contact Name
                </th>
                <th style={{ padding: '0.9rem 1.5rem', fontSize: '0.78rem', fontWeight: 700, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                  Company
                </th>
                <th style={{ padding: '0.9rem 1.5rem', fontSize: '0.78rem', fontWeight: 700, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                  Phone
                </th>
                <th style={{ padding: '0.9rem 1.5rem', fontSize: '0.78rem', fontWeight: 700, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                  Submitted On
                </th>
                <th style={{ padding: '0.9rem 1.5rem', fontSize: '0.78rem', fontWeight: 700, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                  Status
                </th>
                <th style={{ padding: '0.9rem 1.5rem', fontSize: '0.78rem', fontWeight: 700, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.04em', textAlign: 'right' }}>
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr>
                  <td colSpan={6} style={{ padding: '3rem', textAlign: 'center', color: '#64748b' }}>
                    Loading demo requests...
                  </td>
                </tr>
              ) : filteredRequests.length === 0 ? (
                <tr>
                  <td colSpan={6} style={{ padding: '4rem 2rem', textAlign: 'center' }}>
                    <div style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>📭</div>
                    <div style={{ fontSize: '1.1rem', fontWeight: 700, color: '#0f172a', marginBottom: '0.25rem' }}>
                      No demo requests found
                    </div>
                    <p style={{ color: '#64748b', margin: 0, fontSize: '0.9rem' }}>
                      {searchQuery ? 'Try clearing your search query.' : 'New form submissions will automatically appear here.'}
                    </p>
                  </td>
                </tr>
              ) : (
                filteredRequests.map((req) => (
                  <tr key={req.id} style={{ borderBottom: '1px solid #f1f5f9', transition: 'background 0.15s' }}>
                    <td style={{ padding: '1rem 1.5rem' }}>
                      <div style={{ fontWeight: 700, color: '#0f172a', fontSize: '0.95rem' }}>{req.full_name}</div>
                      <a href={`mailto:${req.email}`} style={{ color: '#2563eb', fontSize: '0.82rem', textDecoration: 'none' }}>
                        {req.email}
                      </a>
                    </td>

                    <td style={{ padding: '1rem 1.5rem' }}>
                      <div style={{ fontWeight: 600, color: '#334155', fontSize: '0.9rem' }}>{req.company}</div>
                    </td>

                    <td style={{ padding: '1rem 1.5rem' }}>
                      <a href={`tel:${req.phone}`} style={{ color: '#0f172a', fontSize: '0.88rem', textDecoration: 'none', fontWeight: 500 }}>
                        {req.phone}
                      </a>
                    </td>

                    <td style={{ padding: '1rem 1.5rem', color: '#64748b', fontSize: '0.85rem' }}>
                      {new Date(req.created_at).toLocaleDateString('en-GB', {
                        day: '2-digit',
                        month: 'short',
                        year: 'numeric',
                        hour: '2-digit',
                        minute: '2-digit',
                      })}
                    </td>

                    <td style={{ padding: '1rem 1.5rem' }}>
                      {req.is_contacted ? (
                        <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', background: '#dcfce7', color: '#166534', padding: '0.3rem 0.75rem', borderRadius: '999px', fontSize: '0.75rem', fontWeight: 700 }}>
                          ✓ Contacted
                        </span>
                      ) : (
                        <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', background: '#fef3c7', color: '#92400e', padding: '0.3rem 0.75rem', borderRadius: '999px', fontSize: '0.75rem', fontWeight: 700 }}>
                          ● Pending
                        </span>
                      )}
                    </td>

                    <td style={{ padding: '1rem 1.5rem', textAlign: 'right' }}>
                      <div style={{ display: 'inline-flex', gap: '0.5rem', alignItems: 'center' }}>
                        <button
                          onClick={() => setSelectedRequest(req)}
                          style={{
                            padding: '0.45rem 0.9rem',
                            border: '1px solid #cbd5e1',
                            background: '#ffffff',
                            color: '#0f172a',
                            borderRadius: '6px',
                            fontSize: '0.82rem',
                            fontWeight: 600,
                            cursor: 'pointer',
                          }}
                        >
                          View Details
                        </button>

                        <button
                          onClick={() => toggleContacted(req)}
                          disabled={updatingId === req.id}
                          title={req.is_contacted ? 'Mark as Pending' : 'Mark as Contacted'}
                          style={{
                            padding: '0.45rem 0.8rem',
                            border: 'none',
                            background: req.is_contacted ? '#f1f5f9' : '#2563eb',
                            color: req.is_contacted ? '#475569' : '#ffffff',
                            borderRadius: '6px',
                            fontSize: '0.82rem',
                            fontWeight: 600,
                            cursor: 'pointer',
                            transition: 'all 0.15s',
                          }}
                        >
                          {req.is_contacted ? 'Undo' : 'Mark Done'}
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Detail Slideout / Modal */}
      {selectedRequest && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(15, 23, 42, 0.6)',
            backdropFilter: 'blur(4px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 9999,
            padding: '1.5rem',
          }}
          onClick={() => setSelectedRequest(null)}
        >
          <div
            style={{
              background: '#ffffff',
              borderRadius: '20px',
              maxWidth: '600px',
              width: '100%',
              padding: '2.25rem',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
              position: 'relative',
              maxHeight: '90vh',
              overflowY: 'auto',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem' }}>
              <div>
                <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#2563eb', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  Demo Request #{selectedRequest.id}
                </span>
                <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#0f172a', margin: '0.25rem 0 0' }}>
                  {selectedRequest.company}
                </h2>
              </div>
              <button
                onClick={() => setSelectedRequest(null)}
                style={{
                  background: '#f1f5f9',
                  border: 'none',
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  cursor: 'pointer',
                  fontSize: '1rem',
                  color: '#64748b',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                ✕
              </button>
            </div>

            {/* Content Fields */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', background: '#f8fafc', padding: '1.25rem', borderRadius: '12px', marginBottom: '1.5rem' }}>
              <div>
                <div style={{ fontSize: '0.75rem', fontWeight: 600, color: '#64748b' }}>Full Name</div>
                <div style={{ fontWeight: 700, color: '#0f172a', fontSize: '0.95rem' }}>{selectedRequest.full_name}</div>
              </div>
              <div>
                <div style={{ fontSize: '0.75rem', fontWeight: 600, color: '#64748b' }}>Phone Number</div>
                <a href={`tel:${selectedRequest.phone}`} style={{ fontWeight: 700, color: '#2563eb', fontSize: '0.95rem', textDecoration: 'none' }}>
                  {selectedRequest.phone}
                </a>
              </div>
              <div>
                <div style={{ fontSize: '0.75rem', fontWeight: 600, color: '#64748b' }}>Work Email</div>
                <a href={`mailto:${selectedRequest.email}`} style={{ fontWeight: 700, color: '#2563eb', fontSize: '0.95rem', textDecoration: 'none' }}>
                  {selectedRequest.email}
                </a>
              </div>
              <div>
                <div style={{ fontSize: '0.75rem', fontWeight: 600, color: '#64748b' }}>Status</div>
                <div style={{ marginTop: '0.2rem' }}>
                  {selectedRequest.is_contacted ? (
                    <span style={{ background: '#dcfce7', color: '#166534', padding: '0.2rem 0.6rem', borderRadius: '999px', fontSize: '0.75rem', fontWeight: 700 }}>
                      ✓ Contacted
                    </span>
                  ) : (
                    <span style={{ background: '#fef3c7', color: '#92400e', padding: '0.2rem 0.6rem', borderRadius: '999px', fontSize: '0.75rem', fontWeight: 700 }}>
                      ● Pending Follow-Up
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/* Brief Intro / Requirement */}
            <div style={{ marginBottom: '1.5rem' }}>
              <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#0f172a', marginBottom: '0.5rem' }}>
                Brief Intro About The Demo:
              </div>
              <div style={{ background: '#ffffff', border: '1.5px solid #e2e8f0', borderRadius: '10px', padding: '1rem', color: '#334155', fontSize: '0.92rem', lineHeight: 1.6, minHeight: '80px', whiteSpace: 'pre-wrap' }}>
                {selectedRequest.requirement ? selectedRequest.requirement : <span style={{ color: '#94a3b8', fontStyle: 'italic' }}>No additional notes provided.</span>}
              </div>
            </div>

            {/* Modal Actions */}
            <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'flex-end', borderTop: '1px solid #e2e8f0', paddingTop: '1.25rem' }}>
              <a
                href={`mailto:${selectedRequest.email}?subject=Aindri Demo Scheduling — Sentr AI`}
                style={{
                  padding: '0.65rem 1.25rem',
                  background: '#f8fafc',
                  border: '1px solid #cbd5e1',
                  borderRadius: '8px',
                  color: '#0f172a',
                  fontWeight: 600,
                  fontSize: '0.88rem',
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                }}
              >
                ✉ Email Lead
              </a>

              <a
                href={`tel:${selectedRequest.phone}`}
                style={{
                  padding: '0.65rem 1.25rem',
                  background: '#f8fafc',
                  border: '1px solid #cbd5e1',
                  borderRadius: '8px',
                  color: '#0f172a',
                  fontWeight: 600,
                  fontSize: '0.88rem',
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                }}
              >
                📞 Call Lead
              </a>

              <button
                type="button"
                onClick={() => toggleContacted(selectedRequest)}
                style={{
                  padding: '0.65rem 1.4rem',
                  background: selectedRequest.is_contacted ? '#64748b' : '#2563eb',
                  border: 'none',
                  borderRadius: '8px',
                  color: '#ffffff',
                  fontWeight: 700,
                  fontSize: '0.88rem',
                  cursor: 'pointer',
                }}
              >
                {selectedRequest.is_contacted ? 'Mark as Pending' : 'Mark as Contacted'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
