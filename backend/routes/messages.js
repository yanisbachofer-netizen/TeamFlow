const express = require('express');
const router = express.Router();
const { db } = require("../db");
const Message = require("../models/Message")

// TO ADD WHEN AUTHENTIFICATION ENABLED : const authMiddleware = require("../utils/auth");

// GET /messages (return the list of messages the current user can see, sorted by date)
// TO MODIFY WHEN AUTHENTIFICATION ENABLED : router.get("/", authMiddleware, async (req, res) => {
router.get("/", async (req, res) => {
    await db.read(); // update db object with db.json

    // TO MODIFY WHEN AUTHENTIFICATION ENABLED : const userId = req.user.id;
    const { userId } = req.body; // get body from the request, body has to contain the id of the current logged user

    if (!userId) {
        return res.status(400).json({ error: "Need a userId."}) // error case: no userId
    }
    
    const messages = db.data.messages.filter(m =>
        m.senderId == userId || m.recipientIds.includes(userId)
    ); // get in the database the list of messages the current user can see as a sender or a recipient

    messages.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)); // sort the message from the newer to the older

    res.json(messages); // response
});

// POST /messages (create a new message)
// TO MODIFY WHEN AUTHENTIFICATION ENABLED : router.post("/", authMiddleware, async (req, res) => {
router.post("/", async (req, res) => {
    await db.read(); // update db object with db.json

    // TO MODIFY WHEN AUTHENTIFICATION ENABLED : const userId = req.user.id; const { content, recipientIds } = req.body;
    const { content, senderId, recipientIds } = req.body; // get body from the request, body has to contain "content", "senderId" and "recipientIds"     

    // TO DELETE WHEN AUTHENTIFICATION ENABLED
    if (!senderId) {            
        return res.status(400).json({ error: "Need a senderId."}) // error case: no senderId
    }

    if (!content || content.trim() === "") {
        return res.status(400).json({ error: "Message can't be empty." }); // error case: empty message
    }
    if (!recipientIds || recipientIds.length === 0) {
        return res.status(400).json({ error: "Need one or several recipientIds."}) // error case: no recipientIds
    }

    const currentMessageId = db.data.lastMessageId + 1; // Define the message id

    const newMessage = new Message({ id: currentMessageId, content: content, senderId: senderId, recipientIds: recipientIds }) // create a new message

    db.data.messages.push(newMessage); // push the new message in the db
    db.data.lastMessageId = currentMessageId; // update the lastMessageId with the actual id

    await db.write(); // save the modifications in db.json
    res.status(201).json(newMessage); // status of a successfull creation + send the newMessage object in response
})

module.exports = router;
