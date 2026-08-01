// Purpose: Handles capacity building CRUD operations
const { AppDataSource } = require("../config/data-source");
const { CapacityBuilding } = require("../entities/CapacityBuilding");

// Get all capacity building programs
const getCapacityPrograms = async (req, res) => {
  try {
    const repo = AppDataSource.getRepository(CapacityBuilding);
    const data = await repo.find({ 
      where: { isActive: true },
      order: { order: "ASC" } 
    });
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get single capacity program
const getCapacityProgramById = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const repo = AppDataSource.getRepository(CapacityBuilding);
    const data = await repo.findOneBy({ id });
    if (!data) {
      return res.status(404).json({ error: "Program not found" });
    }
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Create capacity program
const createCapacityProgram = async (req, res) => {
  try {
    const { title, description, programType, duration, eligibility, startDate, endDate, link, isOpen, order, isActive } = req.body;
    const repo = AppDataSource.getRepository(CapacityBuilding);
    const data = repo.create({ title, description, programType, duration, eligibility, startDate, endDate, link, isOpen, order, isActive });
    const saved = await repo.save(data);
    res.status(201).json(saved);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update capacity program
const updateCapacityProgram = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const { title, description, programType, duration, eligibility, startDate, endDate, link, isOpen, order, isActive } = req.body;
    const repo = AppDataSource.getRepository(CapacityBuilding);
    const data = await repo.findOneBy({ id });
    if (!data) {
      return res.status(404).json({ error: "Program not found" });
    }
    if (title) data.title = title;
    if (description !== undefined) data.description = description;
    if (programType !== undefined) data.programType = programType;
    if (duration !== undefined) data.duration = duration;
    if (eligibility !== undefined) data.eligibility = eligibility;
    if (startDate !== undefined) data.startDate = startDate;
    if (endDate !== undefined) data.endDate = endDate;
    if (link !== undefined) data.link = link;
    if (isOpen !== undefined) data.isOpen = isOpen;
    if (order !== undefined) data.order = order;
    if (isActive !== undefined) data.isActive = isActive;
    const updated = await repo.save(data);
    res.json(updated);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Delete capacity program
const deleteCapacityProgram = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const repo = AppDataSource.getRepository(CapacityBuilding);
    const result = await repo.delete(id);
    if (result.affected === 0) {
      return res.status(404).json({ error: "Program not found" });
    }
    res.json({ message: "Program deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { 
  getCapacityPrograms, 
  getCapacityProgramById,
  createCapacityProgram, 
  updateCapacityProgram, 
  deleteCapacityProgram 
};