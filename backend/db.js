const path = require('path');

// Internal private database instance
let _dbInstance;

// "Proxy" object compatible with the rest of the project (CommonJS style)
// It redirects calls to the real instance (_dbInstance) once initialized
const db = {
  get data() { return _dbInstance ? _dbInstance.data : null; },
  set data(v) { if (_dbInstance) _dbInstance.data = v; },
  read: async () => _dbInstance ? _dbInstance.read() : null,
  write: async () => _dbInstance ? _dbInstance.write() : null
};

async function initDB() {
  // Dynamic import to load Lowdb v7 (which is ESM only)
  // This bypasses the "ERR_REQUIRE_ESM" error in a CommonJS environment
  const { Low } = await import('lowdb');
  const { JSONFile } = await import('lowdb/node');

  const file = path.join(__dirname, 'db.json');
  const adapter = new JSONFile(file);

  // Default database structure
  const defaultData = {
    users: [],
    lastUserId: 0,
    tasks: [],
    lastTaskId: 0,
    messages: [],
    lastMessageId: 0
  };

  _dbInstance = new Low(adapter, defaultData);
  
  // Initial read
  await _dbInstance.read();

  // Initialize with default data if db.json is missing or empty
  if (!_dbInstance.data) {
    _dbInstance.data = defaultData;
    await _dbInstance.write();
  }
}

module.exports = { db, initDB };