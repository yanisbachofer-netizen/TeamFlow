const API_BASE = (typeof process !== 'undefined' && process.env && process.env.REACT_APP_API_BASE) ? process.env.REACT_APP_API_BASE : '';

async function handleResponse(res) {
  const text = await res.text();
  let data;
  try {
    data = text ? JSON.parse(text) : null;
  } catch (e) {
    data = text;
  }
  if (!res.ok) {
    const err = new Error(data && data.message ? data.message : res.statusText || 'API Error');
    err.status = res.status;
    err.data = data;
    throw err;
  }
  return data;
}

/**
 * GET /tasks
 * Returns: array of task objects
 */
export async function getTasks() {
  const res = await fetch(`${API_BASE}/tasks`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
  });
  return handleResponse(res);
}

export async function updateTask(task) {
  const res = await fetch(`${API_BASE}/tasks`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
    body: JSON.stringify(task),
  });
  return handleResponse(res);
