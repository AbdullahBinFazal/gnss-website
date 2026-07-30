// Purpose: Handles CoPilot CRUD operations
const { AppDataSource } = require("../config/data-source");
const { CoPilot } = require("../entities/CoPilot");

// Get all CoPilot features
const getCoPilotFeatures = async (req, res) => {
  try {
    const copilotRepo = AppDataSource.getRepository(CoPilot);
    const features = await copilotRepo.find({ order: { order: "ASC" } });
    res.json(features);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get single CoPilot feature
const getCoPilotFeatureById = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const copilotRepo = AppDataSource.getRepository(CoPilot);
    const feature = await copilotRepo.findOneBy({ id });
    
    if (!feature) {
      return res.status(404).json({ error: "Feature not found" });
    }
    
    res.json(feature);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Create CoPilot feature
const createCoPilotFeature = async (req, res) => {
  try {
    const { name, type, description, detailedDescription, features, image, icon, order } = req.body;
    const copilotRepo = AppDataSource.getRepository(CoPilot);

    const copilot = copilotRepo.create({
      name,
      type,
      description,
      detailedDescription,
      features: features ? JSON.stringify(features) : null,
      image,
      icon,
      order,
    });

    const saved = await copilotRepo.save(copilot);
    res.status(201).json(saved);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update CoPilot feature
const updateCoPilotFeature = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const { name, type, description, detailedDescription, features, image, icon, order } = req.body;
    const copilotRepo = AppDataSource.getRepository(CoPilot);

    const feature = await copilotRepo.findOneBy({ id });
    if (!feature) {
      return res.status(404).json({ error: "Feature not found" });
    }

    if (name) feature.name = name;
    if (type) feature.type = type;
    if (description !== undefined) feature.description = description;
    if (detailedDescription !== undefined) feature.detailedDescription = detailedDescription;
    if (features !== undefined) feature.features = JSON.stringify(features);
    if (image !== undefined) feature.image = image;
    if (icon !== undefined) feature.icon = icon;
    if (order !== undefined) feature.order = order;

    const updated = await copilotRepo.save(feature);
    res.json(updated);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Delete CoPilot feature
const deleteCoPilotFeature = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const copilotRepo = AppDataSource.getRepository(CoPilot);

    const result = await copilotRepo.delete(id);
    if (result.affected === 0) {
      return res.status(404).json({ error: "Feature not found" });
    }

    res.json({ message: "CoPilot feature deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { 
  getCoPilotFeatures, 
  getCoPilotFeatureById,
  createCoPilotFeature, 
  updateCoPilotFeature, 
  deleteCoPilotFeature 
};