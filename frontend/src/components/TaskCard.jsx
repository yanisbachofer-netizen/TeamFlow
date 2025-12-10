export default function TaskCard({ task }) {
  const statusColor = {
    todo: "#FACC15",        // Yellow
    "in-progress": "#4F46E5", // Indigo
    done: "#22C55E",        // Green
  };

  return (
    <div style={styles.card}>
      <div style={{ ...styles.statusBar, backgroundColor: statusColor[task.status] }} />
      <h4 style={styles.title}>{task.title}</h4>
      <p style={styles.desc}>{task.description}</p>

      <div style={styles.footer}>
        <span style={styles.assigned}>👤 {task.assignedTo || "Unassigned"}</span>
        <button style={styles.editBtn}>✏️ Edit</button>
      </div>
    </div>
  );
}

const styles = {
  card: {
    background: "#FFFFFF",
    borderRadius: "12px",
    border: "1px solid #E5E7EB",
    boxShadow: "0 4px 8px rgba(0,0,0,0.03)",
    padding: "16px",
    marginBottom: "16px",
  },
  statusBar: {
    height: "6px",
    borderRadius: "999px",
    marginBottom: "10px",
  },
  title: {
    fontSize: "16px",
    fontWeight: "600",
    color: "#111827",
    marginBottom: "6px",
  },
  desc: {
    fontSize: "14px",
    color: "#6B7280",
    marginBottom: "12px",
  },
  footer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  assigned: {
    fontSize: "12px",
    color: "#6B7280",
  },
  editBtn: {
    background: "#F9FAFB",
    border: "1px solid #E5E7EB",
    borderRadius: "8px",
    padding: "6px 10px",
    cursor: "pointer",
    fontSize: "12px",
  },
};
