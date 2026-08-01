// Purpose: Capacity Building routes
const router = require("express").Router();
const {
  getCapacityPrograms,
  getCapacityProgramById,
  createCapacityProgram,
  updateCapacityProgram,
  deleteCapacityProgram,
} = require("../controllers/capacityController");
const { verifyToken, isAdmin } = require("../middleware/auth");

// Public routes
router.get("/", getCapacityPrograms);
router.get("/:id", getCapacityProgramById);

// Admin only routes
router.post("/", verifyToken, isAdmin, createCapacityProgram);
router.put("/:id", verifyToken, isAdmin, updateCapacityProgram);
router.delete("/:id", verifyToken, isAdmin, deleteCapacityProgram);

module.exports = router;