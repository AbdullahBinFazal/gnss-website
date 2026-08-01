// Purpose: Opportunities routes
const router = require("express").Router();
const {
  getOpportunities,
  getOpportunityById,
  createOpportunity,
  updateOpportunity,
  deleteOpportunity,
} = require("../controllers/opportunityController");
const { verifyToken, isAdmin } = require("../middleware/auth");

// Public routes
router.get("/", getOpportunities);
router.get("/:id", getOpportunityById);

// Admin only routes
router.post("/", verifyToken, isAdmin, createOpportunity);
router.put("/:id", verifyToken, isAdmin, updateOpportunity);
router.delete("/:id", verifyToken, isAdmin, deleteOpportunity);

module.exports = router;