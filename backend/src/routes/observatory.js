// Purpose: Digital Observatory routes
const router = require("express").Router();
const {
  getObservatoryData,
  getObservatoryDataById,
  createObservatoryData,
  updateObservatoryData,
  deleteObservatoryData,
} = require("../controllers/observatoryController");
const { verifyToken, isAdmin } = require("../middleware/auth");

// Public routes
router.get("/", getObservatoryData);
router.get("/:id", getObservatoryDataById);

// Admin only routes
router.post("/", verifyToken, isAdmin, createObservatoryData);
router.put("/:id", verifyToken, isAdmin, updateObservatoryData);
router.delete("/:id", verifyToken, isAdmin, deleteObservatoryData);

module.exports = router;