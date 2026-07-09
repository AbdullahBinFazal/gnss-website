// Purpose: Faculty routes
const router = require("express").Router();
const {
  getFaculty,
  createFaculty,
  updateFaculty,
  deleteFaculty,
} = require("../controllers/facultyController");
const { verifyToken, isAdmin } = require("../middleware/auth");

// Public routes
router.get("/", getFaculty);

// Admin only routes
router.post("/", verifyToken, isAdmin, createFaculty);
router.put("/:id", verifyToken, isAdmin, updateFaculty);
router.delete("/:id", verifyToken, isAdmin, deleteFaculty);

module.exports = router;