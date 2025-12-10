const { db } = require("../db");

// Filter helper
function filterTasks({ userId, status, assignedTo, search }) {
    let tasks = db.data.tasks;

    // Only tasks visible by this user
    tasks = tasks.filter(t =>
        t.userAllowedIds &&
        t.userAllowedIds.map(String).includes(String(userId))
    );

    // Filter by status
    if (status) {
        tasks = tasks.filter(t => t.status === status);
    }

    // Filter by assigned user
    if (assignedTo) {
        tasks = tasks.filter(t => String(t.assignedTo) === String(assignedTo));
    }

    // Search in title/description
    if (search) {
        const keyword = search.toLowerCase();
        tasks = tasks.filter(t =>
            (t.title && t.title.toLowerCase().includes(keyword)) ||
            (t.description && t.description.toLowerCase().includes(keyword))
        );
    }

    return tasks;
}

module.exports = { filterTasks };
