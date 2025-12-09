import React, { useEffect, useState } from "react";
import TaskCard from "../components/TaskCard";
import { getTasks, updateTask } from "../services/api";

const Tasks = () => {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all");

  // Simulated logged user id (replace with real one from auth later)
  const userId = 1;

  const loadTasks = async () => {
    const data = await getTasks(userId);
    setTasks(data);
  };

  useEffect(() => {
    loadTasks();
  }, []);

  const handleStatusChange = async (taskId, newStatus) => {
    await updateTask(taskId, { status: newStatus });
    loadTasks();
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === "all") return true;
    return task.status === filter;
  });

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Task Board</h1>

      {/* Filter bar */}
      <div className="flex gap-2 mb-6">
        {["all", "todo", "in-progress", "done"].map((status) => (
          <button
            key={status}
            className={`px-4 py-2 rounded border ${
              filter === status
                ? "bg-blue-600 text-white border-blue-600"
                : "bg-white text-gray-700"
            }`}
            onClick={() => setFilter(status)}
          >
            {status}
          </button>
        ))}
      </div>

      {/* Task list */}
      {filteredTasks.length === 0 ? (
        <p className="text-gray-500">No tasks found.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredTasks.map((task) => (
            <TaskCard
              key={task.id}
              task={task}
              onStatusChange={handleStatusChange}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Tasks;
