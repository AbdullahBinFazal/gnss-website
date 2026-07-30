// Purpose: Infrastructure routes
const router = require("express").Router();
const {
  getInfrastructure,
  getInfrastructureById,
  createInfrastructure,
  updateInfrastructure,
  deleteInfrastructure,
} = require("../controllers/infrastructureController");
const { verifyToken, isAdmin } = require("../middleware/auth");

// Public routes
router.get("/", getInfrastructure);
router.get("/:id", getInfrastructureById);

// Admin only routes
router.post("/", verifyToken, isAdmin, createInfrastructure);
router.put("/:id", verifyToken, isAdmin, updateInfrastructure);
router.delete("/:id", verifyToken, isAdmin, deleteInfrastructure);

module.exports = router;