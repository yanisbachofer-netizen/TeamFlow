const API_BASE_URL = "http://localhost:5000";

/**
 * Get all tasks for a user
 * @param {number|string} userId
 */
export const getTasks = async (userId) => {
  try {
    const res = await fetch(`${API_BASE_URL}/tasks?userId=${userId}`);
    if (!res.ok) throw new Error("Failed to fetch tasks");
    return await res.json();
  } catch (err) {
    console.error("Error fetching tasks:", err);
    return [];
  }
};

/**
 * Update a task by id
 * @param {number} taskId
 * @param {object} updates
 */
export const updateTask = async (taskId, updates) => {
  try {
    const res = await fetch(`${API_BASE_URL}/tasks/${taskId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(updates)
    });

    if (!res.ok) throw new Error("Failed to update task");
    return await res.json();
  } catch (err) {
    console.error("Error updating task:", err);
    return null;
  }
};
