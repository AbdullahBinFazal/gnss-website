// Purpose: Handles opportunity CRUD operations
const { AppDataSource } = require("../config/data-source");
const { Opportunity } = require("../entities/Opportunity");

// Get all opportunities
const getOpportunities = async (req, res) => {
  try {
    const repo = AppDataSource.getRepository(Opportunity);
    const data = await repo.find({ 
      where: { isActive: true, isOpen: true },
      order: { order: "ASC" } 
    });
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get single opportunity
const getOpportunityById = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const repo = AppDataSource.getRepository(Opportunity);
    const data = await repo.findOneBy({ id });
    if (!data) {
      return res.status(404).json({ error: "Opportunity not found" });
    }
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Create opportunity
const createOpportunity = async (req, res) => {
  try {
    const { title, description, type, location, link, deadline, isOpen, order, isActive } = req.body;
    const repo = AppDataSource.getRepository(Opportunity);
    const data = repo.create({ title, description, type, location, link, deadline, isOpen, order, isActive });
    const saved = await repo.save(data);
    res.status(201).json(saved);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update opportunity
const updateOpportunity = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const { title, description, type, location, link, deadline, isOpen, order, isActive } = req.body;
    const repo = AppDataSource.getRepository(Opportunity);
    const data = await repo.findOneBy({ id });
    if (!data) {
      return res.status(404).json({ error: "Opportunity not found" });
    }
    if (title) data.title = title;
    if (description !== undefined) data.description = description;
    if (type !== undefined) data.type = type;
    if (location !== undefined) data.location = location;
    if (link !== undefined) data.link = link;
    if (deadline !== undefined) data.deadline = deadline;
    if (isOpen !== undefined) data.isOpen = isOpen;
    if (order !== undefined) data.order = order;
    if (isActive !== undefined) data.isActive = isActive;
    const updated = await repo.save(data);
    res.json(updated);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Delete opportunity
const deleteOpportunity = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const repo = AppDataSource.getRepository(Opportunity);
    const result = await repo.delete(id);
    if (result.affected === 0) {
      return res.status(404).json({ error: "Opportunity not found" });
    }
    res.json({ message: "Opportunity deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { 
  getOpportunities, 
  getOpportunityById,
  createOpportunity, 
  updateOpportunity, 
  deleteOpportunity 
};