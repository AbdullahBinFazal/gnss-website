// Purpose: Handles faculty CRUD operations
const { AppDataSource } = require("../config/data-source");
const { Faculty } = require("../entities/Faculty");

// Get all faculty
const getFaculty = async (req, res) => {
  try {
    const facultyRepo = AppDataSource.getRepository(Faculty);
    const faculty = await facultyRepo.find({ order: { order: "ASC" } });
    res.json(faculty);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Create faculty
const createFaculty = async (req, res) => {
  try {
    const { name, designation, researchInterests, email, photo, bio } = req.body;
    const facultyRepo = AppDataSource.getRepository(Faculty);

    const faculty = facultyRepo.create({
      name,
      designation,
      researchInterests,
      email,
      photo,
      bio,
    });

    const saved = await facultyRepo.save(faculty);
    res.status(201).json(saved);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update faculty
const updateFaculty = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const { name, designation, researchInterests, email, photo, bio, order } = req.body;
    const facultyRepo = AppDataSource.getRepository(Faculty);

    const faculty = await facultyRepo.findOneBy({ id });
    if (!faculty) {
      return res.status(404).json({ error: "Faculty not found" });
    }

    if (name) faculty.name = name;
    if (designation) faculty.designation = designation;
    if (researchInterests !== undefined) faculty.researchInterests = researchInterests;
    if (email) faculty.email = email;
    if (photo !== undefined) faculty.photo = photo;
    if (bio !== undefined) faculty.bio = bio;
    if (order !== undefined) faculty.order = order;

    const updated = await facultyRepo.save(faculty);
    res.json(updated);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Delete faculty
const deleteFaculty = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const facultyRepo = AppDataSource.getRepository(Faculty);

    const result = await facultyRepo.delete(id);
    if (result.affected === 0) {
      return res.status(404).json({ error: "Faculty not found" });
    }

    res.json({ message: "Faculty deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { getFaculty, createFaculty, updateFaculty, deleteFaculty };