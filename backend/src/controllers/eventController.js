// Purpose: Handles event CRUD operations
const { AppDataSource } = require("../config/data-source");
const { Event } = require("../entities/Event");

const getEvents = async (req, res) => {
  try {
    const eventRepo = AppDataSource.getRepository(Event);
    const events = await eventRepo.find({ order: { createdAt: "DESC" } });
    res.json(events);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const createEvent = async (req, res) => {
  try {
    const { title, date, location, description, image } = req.body;
    const eventRepo = AppDataSource.getRepository(Event);

    const event = eventRepo.create({ title, date, location, description, image });
    const saved = await eventRepo.save(event);
    res.status(201).json(saved);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const updateEvent = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const { title, date, location, description, image } = req.body;
    const eventRepo = AppDataSource.getRepository(Event);

    const event = await eventRepo.findOneBy({ id });
    if (!event) {
      return res.status(404).json({ error: "Event not found" });
    }

    if (title) event.title = title;
    if (date) event.date = date;
    if (location !== undefined) event.location = location;
    if (description !== undefined) event.description = description;
    if (image !== undefined) event.image = image;

    const updated = await eventRepo.save(event);
    res.json(updated);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const deleteEvent = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const eventRepo = AppDataSource.getRepository(Event);

    const result = await eventRepo.delete(id);
    if (result.affected === 0) {
      return res.status(404).json({ error: "Event not found" });
    }

    res.json({ message: "Event deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { getEvents, createEvent, updateEvent, deleteEvent };