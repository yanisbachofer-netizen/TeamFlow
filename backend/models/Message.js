class Message {
  constructor({ id, content, senderId, recipientIds = [] }) {
    this.id = id;
    this.content = content;
    this.senderId = senderId;
    this.recipientIds = recipientIds;
    this.createdAt = new Date().toLocaleString(); // Actual date
  }
}

module.exports = Message;
