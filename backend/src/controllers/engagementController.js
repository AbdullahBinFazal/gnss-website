// Purpose: Handles engagement CRUD operations
const { AppDataSource } = require("../config/data-source");
const { Engagement } = require("../entities/Engagement");

// Get all engagements
const getEngagements = async (req, res) => {
  try {
    const repo = AppDataSource.getRepository(Engagement);
    const data = await repo.find({ 
      where: { isActive: true },
      order: { order: "ASC" } 
    });
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get single engagement
const getEngagementById = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const repo = AppDataSource.getRepository(Engagement);
    const data = await repo.findOneBy({ id });
    if (!data) {
      return res.status(404).json({ error: "Engagement not found" });
    }
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Create engagement
const createEngagement = async (req, res) => {
  try {
    const { title, description, type, link, order, isActive } = req.body;
    const repo = AppDataSource.getRepository(Engagement);
    const data = repo.create({ title, description, type, link, order, isActive });
    const saved = await repo.save(data);
    res.status(201).json(saved);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update engagement
const updateEngagement = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const { title, description, type, link, order, isActive } = req.body;
    const repo = AppDataSource.getRepository(Engagement);
    const data = await repo.findOneBy({ id });
    if (!data) {
      return res.status(404).json({ error: "Engagement not found" });
    }
    if (title) data.title = title;
    if (description !== undefined) data.description = description;
    if (type !== undefined) data.type = type;
    if (link !== undefined) data.link = link;
    if (order !== undefined) data.order = order;
    if (isActive !== undefined) data.isActive = isActive;
    const updated = await repo.save(data);
    res.json(updated);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Delete engagement
const deleteEngagement = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const repo = AppDataSource.getRepository(Engagement);
    const result = await repo.delete(id);
    if (result.affected === 0) {
      return res.status(404).json({ error: "Engagement not found" });
    }
    res.json({ message: "Engagement deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { 
  getEngagements, 
  getEngagementById,
  createEngagement, 
  updateEngagement, 
  deleteEngagement 
};