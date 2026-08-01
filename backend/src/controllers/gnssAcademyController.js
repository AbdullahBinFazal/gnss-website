// Purpose: Handles GNSS Academy CRUD operations
const { AppDataSource } = require("../config/data-source");
const { GNSSAcademy } = require("../entities/GNSSAcademy");

// Get all academy data
const getAcademy = async (req, res) => {
  try {
    const repo = AppDataSource.getRepository(GNSSAcademy);
    const data = await repo.find({ 
      where: { isActive: true },
      order: { order: "ASC" } 
    });
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get single academy entry
const getAcademyById = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const repo = AppDataSource.getRepository(GNSSAcademy);
    const data = await repo.findOneBy({ id });
    if (!data) {
      return res.status(404).json({ error: "Academy entry not found" });
    }
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Create academy entry
const createAcademy = async (req, res) => {
  try {
    const { title, description, programs, order, isActive } = req.body;
    const repo = AppDataSource.getRepository(GNSSAcademy);
    const data = repo.create({ title, description, programs, order, isActive });
    const saved = await repo.save(data);
    res.status(201).json(saved);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update academy entry
const updateAcademy = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const { title, description, programs, order, isActive } = req.body;
    const repo = AppDataSource.getRepository(GNSSAcademy);
    const data = await repo.findOneBy({ id });
    if (!data) {
      return res.status(404).json({ error: "Academy entry not found" });
    }
    if (title) data.title = title;
    if (description !== undefined) data.description = description;
    if (programs !== undefined) data.programs = programs;
    if (order !== undefined) data.order = order;
    if (isActive !== undefined) data.isActive = isActive;
    const updated = await repo.save(data);
    res.json(updated);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Delete academy entry
const deleteAcademy = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const repo = AppDataSource.getRepository(GNSSAcademy);
    const result = await repo.delete(id);
    if (result.affected === 0) {
      return res.status(404).json({ error: "Academy entry not found" });
    }
    res.json({ message: "Academy entry deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { 
  getAcademy, 
  getAcademyById,
  createAcademy, 
  updateAcademy, 
  deleteAcademy 
};