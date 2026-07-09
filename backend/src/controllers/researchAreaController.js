// Purpose: Handles research area CRUD operations
const { AppDataSource } = require("../config/data-source");
const { ResearchArea } = require("../entities/ResearchArea");

// Get all research areas
const getResearchAreas = async (req, res) => {
  try {
    const areaRepo = AppDataSource.getRepository(ResearchArea);
    const areas = await areaRepo.find({ order: { order: "ASC" } });
    res.json(areas);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Create new research area
const createResearchArea = async (req, res) => {
  try {
    const { title, description, icon, order } = req.body;
    const areaRepo = AppDataSource.getRepository(ResearchArea);

    const area = areaRepo.create({ title, description, icon, order });
    const saved = await areaRepo.save(area);
    res.status(201).json(saved);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update research area
const updateResearchArea = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const { title, description, icon, order } = req.body;
    const areaRepo = AppDataSource.getRepository(ResearchArea);

    const area = await areaRepo.findOneBy({ id });
    if (!area) {
      return res.status(404).json({ error: "Research area not found" });
    }

    if (title) area.title = title;
    if (description !== undefined) area.description = description;
    if (icon !== undefined) area.icon = icon;
    if (order !== undefined) area.order = order;

    const updated = await areaRepo.save(area);
    res.json(updated);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Delete research area
const deleteResearchArea = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const areaRepo = AppDataSource.getRepository(ResearchArea);

    const result = await areaRepo.delete(id);
    if (result.affected === 0) {
      return res.status(404).json({ error: "Research area not found" });
    }

    res.json({ message: "Research area deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  getResearchAreas,
  createResearchArea,
  updateResearchArea,
  deleteResearchArea,
};