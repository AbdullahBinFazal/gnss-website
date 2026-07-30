// Purpose: Handles contact form submissions
const { AppDataSource } = require("../config/data-source");
const { ContactMessage } = require("../entities/ContactMessage");

// Get all contact messages (Admin only)
const getMessages = async (req, res) => {
  try {
    const messageRepo = AppDataSource.getRepository(ContactMessage);
    const messages = await messageRepo.find({ order: { createdAt: "DESC" } });
    res.json(messages);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get single contact message (Admin only)
const getMessageById = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const messageRepo = AppDataSource.getRepository(ContactMessage);
    const message = await messageRepo.findOneBy({ id });
    
    if (!message) {
      return res.status(404).json({ error: "Message not found" });
    }
    
    res.json(message);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Create new contact message (Public)
const createMessage = async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;
    const messageRepo = AppDataSource.getRepository(ContactMessage);

    const contactMessage = messageRepo.create({
      name,
      email,
      subject,
      message,
      status: "pending",
    });

    const saved = await messageRepo.save(contactMessage);
    res.status(201).json({ 
      success: true, 
      message: "Your message has been sent successfully!",
      data: saved 
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update message status (Admin only)
const updateMessageStatus = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const { status } = req.body;
    const messageRepo = AppDataSource.getRepository(ContactMessage);

    const message = await messageRepo.findOneBy({ id });
    if (!message) {
      return res.status(404).json({ error: "Message not found" });
    }

    if (status) message.status = status;

    const updated = await messageRepo.save(message);
    res.json(updated);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Delete message (Admin only)
const deleteMessage = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const messageRepo = AppDataSource.getRepository(ContactMessage);

    const result = await messageRepo.delete(id);
    if (result.affected === 0) {
      return res.status(404).json({ error: "Message not found" });
    }

    res.json({ message: "Message deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { 
  getMessages, 
  getMessageById,
  createMessage, 
  updateMessageStatus, 
  deleteMessage 
};