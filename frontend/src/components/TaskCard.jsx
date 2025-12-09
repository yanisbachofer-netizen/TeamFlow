import React from "react";

const TaskCard = ({ task, onStatusChange }) => {
  const getStatusColor = (status) => {
    switch (status) {
      case "todo":
        return "bg-gray-100 border-gray-300";
      case "in-progress":
        return "bg-blue-100 border-blue-300";
      case "done":
        return "bg-green-100 border-green-300";
      default:
        return "bg-white border-gray-200";
    }
  };

  return (
    <div className={`p-4 border rounded-lg shadow-sm ${getStatusColor(task.status)}`}>
      <h3 className="font-semibold text-lg mb-1">{task.title}</h3>
      <p className="text-sm text-gray-600 mb-2">{task.description}</p>

      <div className="flex items-center justify-between">
        <span className="text-xs font-medium bg-gray-200 px-2 py-1 rounded">
          {task.status}
        </span>

        <select
          className="text-sm border rounded px-2 py-1"
          value={task.status}
          onChange={(e) => onStatusChange(task.id, e.target.value)}
        >
          <option value="todo">To do</option>
          <option value="in-progress">In progress</option>
          <option value="done">Done</option>
        </select>
      </div>
    </div>
  );
};

export default TaskCard;
