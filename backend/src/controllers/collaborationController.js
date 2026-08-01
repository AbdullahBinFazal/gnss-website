// Purpose: Handles collaboration CRUD operations
const { AppDataSource } = require("../config/data-source");
const { Collaboration } = require("../entities/Collaboration");

// Get all collaborations
const getCollaborations = async (req, res) => {
  try {
    const repo = AppDataSource.getRepository(Collaboration);
    const data = await repo.find({ 
      where: { isActive: true },
      order: { order: "ASC" } 
    });
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get single collaboration
const getCollaborationById = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const repo = AppDataSource.getRepository(Collaboration);
    const data = await repo.findOneBy({ id });
    if (!data) {
      return res.status(404).json({ error: "Collaboration not found" });
    }
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Create collaboration
const createCollaboration = async (req, res) => {
  try {
    const { title, description, partnerType, partnerName, logo, website, order, isActive } = req.body;
    const repo = AppDataSource.getRepository(Collaboration);
    const data = repo.create({ title, description, partnerType, partnerName, logo, website, order, isActive });
    const saved = await repo.save(data);
    res.status(201).json(saved);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update collaboration
const updateCollaboration = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const { title, description, partnerType, partnerName, logo, website, order, isActive } = req.body;
    const repo = AppDataSource.getRepository(Collaboration);
    const data = await repo.findOneBy({ id });
    if (!data) {
      return res.status(404).json({ error: "Collaboration not found" });
    }
    if (title) data.title = title;
    if (description !== undefined) data.description = description;
    if (partnerType !== undefined) data.partnerType = partnerType;
    if (partnerName !== undefined) data.partnerName = partnerName;
    if (logo !== undefined) data.logo = logo;
    if (website !== undefined) data.website = website;
    if (order !== undefined) data.order = order;
    if (isActive !== undefined) data.isActive = isActive;
    const updated = await repo.save(data);
    res.json(updated);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Delete collaboration
const deleteCollaboration = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const repo = AppDataSource.getRepository(Collaboration);
    const result = await repo.delete(id);
    if (result.affected === 0) {
      return res.status(404).json({ error: "Collaboration not found" });
    }
    res.json({ message: "Collaboration deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { 
  getCollaborations, 
  getCollaborationById,
  createCollaboration, 
  updateCollaboration, 
  deleteCollaboration 
};