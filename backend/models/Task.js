class Task {
  constructor({ id, title, description, status, assignedTo }) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.status = status || 'todo';
    this.assignedTo = assignedTo || null;
  }
}
module.exports = Task;
