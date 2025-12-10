const BASE_URL = "http://localhost:5000/tasks";

export async function getFilteredTasks(filters) {
  const params = new URLSearchParams(filters).toString();
  const res = await fetch(`${BASE_URL}/filter?${params}`);
  if (!res.ok) throw new Error("Failed to fetch tasks");
  return res.json();
}
