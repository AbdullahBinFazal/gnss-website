// Purpose: Engagement routes
const router = require("express").Router();
const {
  getEngagements,
  getEngagementById,
  createEngagement,
  updateEngagement,
  deleteEngagement,
} = require("../controllers/engagementController");
const { verifyToken, isAdmin } = require("../middleware/auth");

// Public routes
router.get("/", getEngagements);
router.get("/:id", getEngagementById);

// Admin only routes
router.post("/", verifyToken, isAdmin, createEngagement);
router.put("/:id", verifyToken, isAdmin, updateEngagement);
router.delete("/:id", verifyToken, isAdmin, deleteEngagement);

module.exports = router;