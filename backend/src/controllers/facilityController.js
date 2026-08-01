// Purpose: Handles facility CRUD operations
const { AppDataSource } = require("../config/data-source");
const { Facility } = require("../entities/Facility");

// Get all facilities
const getFacilities = async (req, res) => {
  try {
    const repo = AppDataSource.getRepository(Facility);
    const data = await repo.find({ 
      where: { isActive: true },
      order: { order: "ASC" } 
    });
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get single facility
const getFacilityById = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const repo = AppDataSource.getRepository(Facility);
    const data = await repo.findOneBy({ id });
    if (!data) {
      return res.status(404).json({ error: "Facility not found" });
    }
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Create facility
const createFacility = async (req, res) => {
  try {
    const { name, description, category, image, icon, features, isActive, order } = req.body;
    const repo = AppDataSource.getRepository(Facility);
    const data = repo.create({ name, description, category, image, icon, features, isActive, order });
    const saved = await repo.save(data);
    res.status(201).json(saved);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update facility
const updateFacility = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const { name, description, category, image, icon, features, isActive, order } = req.body;
    const repo = AppDataSource.getRepository(Facility);
    const data = await repo.findOneBy({ id });
    if (!data) {
      return res.status(404).json({ error: "Facility not found" });
    }
    if (name) data.name = name;
    if (description !== undefined) data.description = description;
    if (category !== undefined) data.category = category;
    if (image !== undefined) data.image = image;
    if (icon !== undefined) data.icon = icon;
    if (features !== undefined) data.features = features;
    if (isActive !== undefined) data.isActive = isActive;
    if (order !== undefined) data.order = order;
    const updated = await repo.save(data);
    res.json(updated);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Delete facility
const deleteFacility = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const repo = AppDataSource.getRepository(Facility);
    const result = await repo.delete(id);
    if (result.affected === 0) {
      return res.status(404).json({ error: "Facility not found" });
    }
    res.json({ message: "Facility deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { 
  getFacilities, 
  getFacilityById,
  createFacility, 
  updateFacility, 
  deleteFacility 
};