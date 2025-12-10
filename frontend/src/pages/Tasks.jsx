import { useEffect, useState } from "react";
import TaskCard from "../components/TaskCard";
import { getFilteredTasks } from "../services/taskService";

export default function Tasks() {
  const [tasks, setTasks] = useState([]);

  const USER_ID = 1;

  const loadTasks = async (filters = {}) => {
    const data = await getFilteredTasks({ userId: USER_ID, ...filters });
    setTasks(data);
  };

  useEffect(() => {
    loadTasks();
  }, []);

  const filterByStatus = (status) => {
    loadTasks({ status });
  };

  const columns = {
    todo: tasks.filter((t) => t.status === "todo"),
    "in-progress": tasks.filter((t) => t.status === "in-progress"),
    done: tasks.filter((t) => t.status === "done"),
  };

  return (
    <div style={styles.page}>
      <h2 style={styles.title}>Task Board</h2>

      {/* FILTER BAR */}
      <div style={styles.filterBar}>
        <button style={styles.filterBtn} onClick={() => loadTasks()}>All</button>
        <button style={styles.filterBtn} onClick={() => filterByStatus("todo")}>To Do</button>
        <button style={styles.filterBtn} onClick={() => filterByStatus("in-progress")}>In Progress</button>
        <button style={styles.filterBtn} onClick={() => filterByStatus("done")}>Done</button>
      </div>

      {/* KANBAN BOARD */}
      <div style={styles.board}>
        {Object.keys(columns).map((key) => (
          <div key={key} style={styles.column}>
            <h3 style={styles.columnTitle}>{key.replace("-", " ").toUpperCase()}</h3>
            {columns[key].map((task) => (
              <TaskCard key={task.id} task={task} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  page: {
    background: "#F9FAFB",
    minHeight: "100vh",
    padding: "24px",
    fontFamily: "Inter, system-ui",
  },
  title: {
    fontSize: "24px",
    fontWeight: "700",
    marginBottom: "20px",
    color: "#111827",
  },
  filterBar: {
    display: "flex",
    gap: "12px",
    marginBottom: "24px",
  },
  filterBtn: {
    background: "#61DAFB",
    border: "none",
    borderRadius: "10px",
    padding: "10px 16px",
    fontWeight: "600",
    cursor: "pointer",
    boxShadow: "0 4px 8px rgba(0,0,0,0.05)",
  },
  board: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "20px",
  },
  column: {
    background: "#FFFFFF",
    borderRadius: "16px",
    padding: "16px",
    border: "1px solid #E5E7EB",
  },
  columnTitle: {
    fontSize: "16px",
    fontWeight: "600",
    marginBottom: "12px",
    color: "#0B253A",
  },
};
