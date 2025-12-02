class Task {
  constructor({ id, title, description, status, assignedTo, userAllowedIds = [] }) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.status = status || 'todo';
    this.assignedTo = assignedTo || null;
    this.userAllowedIds = userAllowedIds; // tab of the users id who can see this task
  }
}
module.exports = Task;
