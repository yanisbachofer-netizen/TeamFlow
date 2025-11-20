class Message {
  constructor({ id, content, senderId, createdAt }) {
    this.id = id;
    this.content = content;
    this.senderId = senderId;
    this.createdAt = createdAt || new Date().toISOString();
  }
}
module.exports = Message;
