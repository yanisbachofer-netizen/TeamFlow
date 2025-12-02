const express = require('express');
const router = express.Router();
const { db } = require("../db");

// GET /messages (return the list of messages sorted by date)
router.get("/", async (req, res) => {
  await db.read(); // read db.json and load datas in db
  const messages = db.data.messages; // get the list of messages in the database
  messages.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)); // sort the message from the newer to the older
  res.json(messages);
});

module.exports = router;
