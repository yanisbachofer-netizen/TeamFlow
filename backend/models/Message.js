class Message {
  constructor({ id, content, senderId }) {
    this.id = id;
    this.content = content;
    this.senderId = senderId;
    this.createdAt = new Date().toLocaleString(); // Actual date
  }
}

module.exports = Message;
