import React from 'react';

const statusLabels = {
  'todo': 'To Do',
  'in-progress': 'In Progress',
  'done': 'Done',
};

const priorityColors = {
  low: '#9ae6b4',
  medium: '#fbd38d',
  high: '#feb2b2',
};

export default function TaskCard({ task, onStatusChange, compact = false }) {
  const { title, description, assignee, status, priority, dueDate } = task || {};

  const handleChange = (e) => {
    const newStatus = e.target.value;
    if (onStatusChange) onStatusChange(task, newStatus);
  };

  return (
    <div className="task-card" style={{
      background: '#fff',
      borderRadius: 8,
      padding: compact ? '8px' : '12px',
      boxShadow: '0 1px 3px rgba(0,0,0,0.06)',
      marginBottom: 12,
      border: '1px solid rgba(0,0,0,0.04)'
    }}>
      <div className="task-card-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ fontWeight: 600, fontSize: compact ? 14 : 16 }}>{title}</div>
        <div style={{ display: 'flex', gap: 6, alignItems: 'center' }}>
          {priority && (
            <div style={{
              padding: '3px 6px',
              borderRadius: 6,
              fontSize: 12,
              background: priorityColors[priority] || '#e2e8f0'
            }}>{priority}</div>
          )}
          <select value={status || 'todo'} onChange={handleChange} style={{ fontSize: 12, padding: '4px 6px' }}>
            <option value="todo">{statusLabels['todo']}</option>
            <option value="in-progress">{statusLabels['in-progress']}</option>
            <option value="done">{statusLabels['done']}</option>
          </select>
        </div>
      </div>

      {!compact && (
        <div className="task-card-body" style={{ marginTop: 8, color: '#4a5568', fontSize: 14 }}>
          {description && <div style={{ marginBottom: 8 }}>{description}</div>}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
              {assignee && <div style={{ fontSize: 13, color: '#2d3748' }}>👤 {assignee}</div>}
            </div>
            <div style={{ fontSize: 12, color: '#718096' }}>
              {dueDate ? `Due: ${new Date(dueDate).toLocaleDateString()}` : null}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
