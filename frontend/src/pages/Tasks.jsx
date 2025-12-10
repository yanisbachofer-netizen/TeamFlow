import React, { useEffect, useMemo, useState } from 'react';
import { getTasks, updateTask } from '../services/api';
import TaskCard from '../components/TaskCard';

const STATUS_ORDER = ['todo', 'in-progress', 'done'];
const STATUS_LABELS = {
  'todo': 'To Do',
  'in-progress': 'In Progress',
  'done': 'Done',
};

export default function Tasks() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Filters
  const [q, setQ] = useState('');
  const [statusFilter, setStatusFilter] = useState('');
  const [assigneeFilter, setAssigneeFilter] = useState('');

  const fetchTasks = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await getTasks();
      // Expecting array; if wrapped, adapt accordingly
      setTasks(Array.isArray(data) ? data : []);
    } catch (err) {
      setError(err.message || 'Failed to load tasks');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const assignees = useMemo(() => {
    const setA = new Set();
    tasks.forEach(t => { if (t.assignee) setA.add(t.assignee); });
    return Array.from(setA).sort();
  }, [tasks]);

  const filtered = useMemo(() => {
    const qLower = q.trim().toLowerCase();
    return tasks.filter(t => {
      if (statusFilter && t.status !== statusFilter) return false;
      if (assigneeFilter && t.assignee !== assigneeFilter) return false;
      if (!qLower) return true;
      const hay = `${t.title || ''} ${t.description || ''}`.toLowerCase();
      return hay.includes(qLower);
    });
  }, [tasks, q, statusFilter, assigneeFilter]);

  const grouped = useMemo(() => {
    const map = { 'todo': [], 'in-progress': [], 'done': [] };
    filtered.forEach(t => {
      const key = t.status && map[t.status] ? t.status : 'todo';
      map[key].push(t);
    });
    return map;
  }, [filtered]);

  const handleStatusChange = async (task, newStatus) => {
    if (!task) return;
    const updated = { ...task, status: newStatus };
    // Optimistic update locally
    setTasks(prev => prev.map(t => t.id === task.id ? updated : t));
    try {
      await updateTask(updated);
      // Refresh from server to get authoritative data/ordering
      await fetchTasks();
    } catch (err) {
      // revert optimistic update if error
      setTasks(prev => prev.map(t => t.id === task.id ? task : t));
      console.error('Failed to update task:', err);
      setError(err.message || 'Failed to update task');
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Task Board</h2>

      <div style={{
        marginBottom: 16,
        display: 'flex',
        gap: 12,
        alignItems: 'center',
        flexWrap: 'wrap'
      }}>
        <input
          placeholder="Search title or description..."
          value={q}
          onChange={(e) => setQ(e.target.value)}
          style={{ padding: '8px 10px', borderRadius: 6, border: '1px solid #e2e8f0', minWidth: 220 }}
        />

        <select value={statusFilter} onChange={e => setStatusFilter(e.target.value)} style={{ padding: '8px', borderRadius: 6 }}>
          <option value="">All statuses</option>
          <option value="todo">To Do</option>
          <option value="in-progress">In Progress</option>
          <option value="done">Done</option>
        </select>

        <select value={assigneeFilter} onChange={e => setAssigneeFilter(e.target.value)} style={{ padding: '8px', borderRadius: 6 }}>
          <option value="">All assignees</option>
          {assignees.map(a => <option key={a} value={a}>{a}</option>)}
        </select>

        <button onClick={fetchTasks} style={{ padding: '8px 10px', borderRadius: 6 }}>Refresh</button>
      </div>

      {error && <div style={{ color: 'crimson', marginBottom: 8 }}>{error}</div>}
      {loading && <div style={{ marginBottom: 8 }}>Loading tasks...</div>}

      <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
        {STATUS_ORDER.map(statusKey => (
          <div key={statusKey} style={{
            flex: 1,
            minWidth: 240,
            background: '#f7fafc',
            padding: 12,
            borderRadius: 8,
            maxHeight: '70vh',
            overflowY: 'auto'
          }}>
            <div style={{ fontWeight: 700, marginBottom: 8 }}>{STATUS_LABELS[statusKey]} ({grouped[statusKey].length})</div>

            {grouped[statusKey].length === 0 && <div style={{ color: '#718096', fontSize: 13 }}>No tasks</div>}

            {grouped[statusKey].map(task => (
              <TaskCard key={task.id} task={task} onStatusChange={handleStatusChange} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
