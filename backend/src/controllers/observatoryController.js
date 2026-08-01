// Purpose: Handles digital observatory CRUD operations
const { AppDataSource } = require("../config/data-source");
const { DigitalObservatory } = require("../entities/DigitalObservatory");

// Get all observatory data
const getObservatoryData = async (req, res) => {
  try {
    const repo = AppDataSource.getRepository(DigitalObservatory);
    const data = await repo.find({ 
      where: { isActive: true },
      order: { order: "ASC" } 
    });
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get single observatory data
const getObservatoryDataById = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const repo = AppDataSource.getRepository(DigitalObservatory);
    const data = await repo.findOneBy({ id });
    if (!data) {
      return res.status(404).json({ error: "Data not found" });
    }
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Create observatory data
const createObservatoryData = async (req, res) => {
  try {
    const { title, description, dataType, source, link, isActive, order } = req.body;
    const repo = AppDataSource.getRepository(DigitalObservatory);
    const data = repo.create({ title, description, dataType, source, link, isActive, order });
    const saved = await repo.save(data);
    res.status(201).json(saved);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update observatory data
const updateObservatoryData = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const { title, description, dataType, source, link, isActive, order } = req.body;
    const repo = AppDataSource.getRepository(DigitalObservatory);
    const data = await repo.findOneBy({ id });
    if (!data) {
      return res.status(404).json({ error: "Data not found" });
    }
    if (title) data.title = title;
    if (description !== undefined) data.description = description;
    if (dataType !== undefined) data.dataType = dataType;
    if (source !== undefined) data.source = source;
    if (link !== undefined) data.link = link;
    if (isActive !== undefined) data.isActive = isActive;
    if (order !== undefined) data.order = order;
    const updated = await repo.save(data);
    res.json(updated);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Delete observatory data
const deleteObservatoryData = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const repo = AppDataSource.getRepository(DigitalObservatory);
    const result = await repo.delete(id);
    if (result.affected === 0) {
      return res.status(404).json({ error: "Data not found" });
    }
    res.json({ message: "Data deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { 
  getObservatoryData, 
  getObservatoryDataById,
  createObservatoryData, 
  updateObservatoryData, 
  deleteObservatoryData 
};