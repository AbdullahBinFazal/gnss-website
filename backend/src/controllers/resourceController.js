// Purpose: Handles resource CRUD operations
const { AppDataSource } = require("../config/data-source");
const { Resource } = require("../entities/Resource");

// Get all resources
const getResources = async (req, res) => {
  try {
    const repo = AppDataSource.getRepository(Resource);
    const data = await repo.find({ 
      where: { isActive: true },
      order: { order: "ASC" } 
    });
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get single resource
const getResourceById = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const repo = AppDataSource.getRepository(Resource);
    const data = await repo.findOneBy({ id });
    if (!data) {
      return res.status(404).json({ error: "Resource not found" });
    }
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Create resource
const createResource = async (req, res) => {
  try {
    const { title, description, type, category, link, filePath, order, isActive } = req.body;
    const repo = AppDataSource.getRepository(Resource);
    const data = repo.create({ title, description, type, category, link, filePath, order, isActive });
    const saved = await repo.save(data);
    res.status(201).json(saved);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update resource
const updateResource = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const { title, description, type, category, link, filePath, order, isActive } = req.body;
    const repo = AppDataSource.getRepository(Resource);
    const data = await repo.findOneBy({ id });
    if (!data) {
      return res.status(404).json({ error: "Resource not found" });
    }
    if (title) data.title = title;
    if (description !== undefined) data.description = description;
    if (type !== undefined) data.type = type;
    if (category !== undefined) data.category = category;
    if (link !== undefined) data.link = link;
    if (filePath !== undefined) data.filePath = filePath;
    if (order !== undefined) data.order = order;
    if (isActive !== undefined) data.isActive = isActive;
    const updated = await repo.save(data);
    res.json(updated);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Delete resource
const deleteResource = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const repo = AppDataSource.getRepository(Resource);
    const result = await repo.delete(id);
    if (result.affected === 0) {
      return res.status(404).json({ error: "Resource not found" });
    }
    res.json({ message: "Resource deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { 
  getResources, 
  getResourceById,
  createResource, 
  updateResource, 
  deleteResource 
};