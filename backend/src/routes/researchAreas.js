// Purpose: Research area routes
const router = require("express").Router();
const {
  getResearchAreas,
  createResearchArea,
  updateResearchArea,
  deleteResearchArea,
} = require("../controllers/researchAreaController");
const { verifyToken, isAdmin } = require("../middleware/auth");

// Public routes - anyone can view research areas
router.get("/", getResearchAreas);

// Admin only routes - only admin can create, update, delete
router.post("/", verifyToken, isAdmin, createResearchArea);
router.put("/:id", verifyToken, isAdmin, updateResearchArea);
router.delete("/:id", verifyToken, isAdmin, deleteResearchArea);

module.exports = router;