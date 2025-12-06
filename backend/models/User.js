// backend/models/User.js
const { db } = require('../db');
const bcrypt = require('bcryptjs');

class User {

  constructor(data) {
    this.id = data.id;
    this.username = data.username; // Essential for login
    this.email = data.email;       // From base model
    this.password = data.password; // Will be hashed
    this.role = data.role || 'member'; // 'admin' or 'member'
  }

  static getAll() {
    // Safety check to ensure DB is loaded
    return db.data ? db.data.users : [];
  }

  static findById(id) {
    const users = this.getAll();
    return users.find(u => u.id === parseInt(id));
  }

  static async create(data) {
    const users = this.getAll();

    // Check for duplicates (username OR email)
    const exists = users.find(u => u.username === data.username || (data.email && u.email === data.email));
    if (exists) {
      throw new Error("Username or email already in use."); // Error message
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(data.password, 10);

    // ID management via lastUserId
    db.data.lastUserId++;
    
    const newUser = new User({
      id: db.data.lastUserId, // Use the global counter
      username: data.username,
      email: data.email,
      password: hashedPassword,
      role: data.role
    });

    // Add to list and save to disk
    users.push(newUser);
    await db.write();

    return newUser;
  }

  static async update(id, updates) {
    const userId = parseInt(id);
    const users = this.getAll();
    const userIndex = users.findIndex(u => u.id === userId);

    if (userIndex === -1) return null;

    // If password is being updated, re-hash it
    if (updates.password) {
      updates.password = await bcrypt.hash(updates.password, 10);
    }

    // Update object in memory
    const updatedUser = { ...users[userIndex], ...updates };
    users[userIndex] = updatedUser;

    // Save to disk
    await db.write();

    return new User(updatedUser);
  }

  static toSafeObject(user) {
    if (!user) return null;
    // Remove password before sending to frontend
    const { password, ...safeUser } = user;
    return safeUser;
  }
}

module.exports = User;