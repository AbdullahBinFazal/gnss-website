// Purpose: Handles Team CRUD operations
const { AppDataSource } = require("../config/data-source");
const { Team } = require("../entities/Team");

// Get all team members
const getTeam = async (req, res) => {
  try {
    const repo = AppDataSource.getRepository(Team);
    const data = await repo.find({ 
      where: { isActive: true },
      order: { order: "ASC" } 
    });
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get single team member
const getTeamById = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const repo = AppDataSource.getRepository(Team);
    const data = await repo.findOneBy({ id });
    if (!data) {
      return res.status(404).json({ error: "Team member not found" });
    }
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Create team member
const createTeam = async (req, res) => {
  try {
    const { name, designation, bio, image, order, isActive } = req.body;
    const repo = AppDataSource.getRepository(Team);
    const data = repo.create({ name, designation, bio, image, order, isActive });
    const saved = await repo.save(data);
    res.status(201).json(saved);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update team member
const updateTeam = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const { name, designation, bio, image, order, isActive } = req.body;
    const repo = AppDataSource.getRepository(Team);
    const data = await repo.findOneBy({ id });
    if (!data) {
      return res.status(404).json({ error: "Team member not found" });
    }
    if (name) data.name = name;
    if (designation !== undefined) data.designation = designation;
    if (bio !== undefined) data.bio = bio;
    if (image !== undefined) data.image = image;
    if (order !== undefined) data.order = order;
    if (isActive !== undefined) data.isActive = isActive;
    const updated = await repo.save(data);
    res.json(updated);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Delete team member
const deleteTeam = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const repo = AppDataSource.getRepository(Team);
    const result = await repo.delete(id);
    if (result.affected === 0) {
      return res.status(404).json({ error: "Team member not found" });
    }
    res.json({ message: "Team member deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { 
  getTeam, 
  getTeamById,
  createTeam, 
  updateTeam, 
  deleteTeam 
};