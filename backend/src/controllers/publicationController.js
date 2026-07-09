// Purpose: Handles publication CRUD operations
const { AppDataSource } = require("../config/data-source");
const { Publication } = require("../entities/Publication");

const getPublications = async (req, res) => {
  try {
    const pubRepo = AppDataSource.getRepository(Publication);
    const publications = await pubRepo.find({ order: { year: "DESC" } });
    res.json(publications);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const createPublication = async (req, res) => {
  try {
    const { title, authors, journal, year, link } = req.body;
    const pubRepo = AppDataSource.getRepository(Publication);

    const pub = pubRepo.create({ title, authors, journal, year, link });
    const saved = await pubRepo.save(pub);
    res.status(201).json(saved);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const updatePublication = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const { title, authors, journal, year, link } = req.body;
    const pubRepo = AppDataSource.getRepository(Publication);

    const pub = await pubRepo.findOneBy({ id });
    if (!pub) {
      return res.status(404).json({ error: "Publication not found" });
    }

    if (title) pub.title = title;
    if (authors) pub.authors = authors;
    if (journal !== undefined) pub.journal = journal;
    if (year) pub.year = year;
    if (link !== undefined) pub.link = link;

    const updated = await pubRepo.save(pub);
    res.json(updated);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const deletePublication = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const pubRepo = AppDataSource.getRepository(Publication);

    const result = await pubRepo.delete(id);
    if (result.affected === 0) {
      return res.status(404).json({ error: "Publication not found" });
    }

    res.json({ message: "Publication deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { getPublications, createPublication, updatePublication, deletePublication };