const { Low } = require('lowdb');
const { JSONFile } = require('lowdb/node');
const path = require('path');

const file = path.join(__dirname, 'db.json');
const adapter = new JSONFile(file);

const defaultData = {
  users: [],
  tasks: [],
  messages: []
};

const db = new Low(adapter, defaultData);

async function initDB() {
  await db.read();
  if (!db.data) { // if db is empty, we fill it with defaultData
    db.data = defaultData;
    await db.write();
  }
}

module.exports = { db, initDB };
