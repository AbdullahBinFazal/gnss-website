// Purpose: CoPilot routes
const router = require("express").Router();
const {
  getCoPilotFeatures,
  getCoPilotFeatureById,
  createCoPilotFeature,
  updateCoPilotFeature,
  deleteCoPilotFeature,
} = require("../controllers/copilotController");
const { verifyToken, isAdmin } = require("../middleware/auth");

// Public routes
router.get("/", getCoPilotFeatures);
router.get("/:id", getCoPilotFeatureById);

// Admin only routes
router.post("/", verifyToken, isAdmin, createCoPilotFeature);
router.put("/:id", verifyToken, isAdmin, updateCoPilotFeature);
router.delete("/:id", verifyToken, isAdmin, deleteCoPilotFeature);

module.exports = router;