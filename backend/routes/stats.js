const express = require('express');
const router = express.Router();
const { db } = require('../db');

/**
 * GET /stats
 * Returns project statistics
 */
router.get('/', async (req, res) => {
  try {
    await db.read();
    
    const tasks = Array.isArray(db.data.tasks) ? db.data.tasks : [];
    const users = Array.isArray(db.data.users) ? db.data.users : [];
    const messages = Array.isArray(db.data.messages) ? db.data.messages : [];
    
    // Calculate statistics
    const stats = {
      totalTasks: tasks.length,
      completedTasks: tasks.filter(t => t.status === 'done').length,
      inProgressTasks: tasks.filter(t => t.status === 'in-progress').length,
      pendingTasks: tasks.filter(t => t.status === 'todo').length,
      totalTeamMembers: users.length,
      activeProjects: 1 // Can be made dynamic if you have projects collection
    };
    
    res.json(stats);
  } catch (error) {
    console.error('Error fetching statistics:', error);
    res.status(500).json({ message: 'Failed to fetch statistics', error: error.message });
  }
});

module.exports = router;