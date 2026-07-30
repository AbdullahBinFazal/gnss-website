// Purpose: Handles infrastructure CRUD operations
const { AppDataSource } = require("../config/data-source");
const { Infrastructure } = require("../entities/Infrastructure");

// Get all infrastructure stats
const getInfrastructure = async (req, res) => {
  try {
    const repo = AppDataSource.getRepository(Infrastructure);
    const data = await repo.find({ order: { order: "ASC" } });
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get single infrastructure stat
const getInfrastructureById = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const repo = AppDataSource.getRepository(Infrastructure);
    const data = await repo.findOneBy({ id });
    if (!data) {
      return res.status(404).json({ error: "Infrastructure not found" });
    }
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Create infrastructure stat
const createInfrastructure = async (req, res) => {
  try {
    const { icon, value, label, color, order } = req.body;
    const repo = AppDataSource.getRepository(Infrastructure);
    const data = repo.create({ icon, value, label, color, order });
    const saved = await repo.save(data);
    res.status(201).json(saved);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update infrastructure stat
const updateInfrastructure = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const { icon, value, label, color, order } = req.body;
    const repo = AppDataSource.getRepository(Infrastructure);
    const data = await repo.findOneBy({ id });
    if (!data) {
      return res.status(404).json({ error: "Infrastructure not found" });
    }
    if (icon !== undefined) data.icon = icon;
    if (value) data.value = value;
    if (label) data.label = label;
    if (color !== undefined) data.color = color;
    if (order !== undefined) data.order = order;
    const updated = await repo.save(data);
    res.json(updated);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Delete infrastructure stat
const deleteInfrastructure = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const repo = AppDataSource.getRepository(Infrastructure);
    const result = await repo.delete(id);
    if (result.affected === 0) {
      return res.status(404).json({ error: "Infrastructure not found" });
    }
    res.json({ message: "Infrastructure deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { 
  getInfrastructure, 
  getInfrastructureById,
  createInfrastructure, 
  updateInfrastructure, 
  deleteInfrastructure 
};