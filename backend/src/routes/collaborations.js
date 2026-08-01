// Purpose: Collaborations routes
const router = require("express").Router();
const {
  getCollaborations,
  getCollaborationById,
  createCollaboration,
  updateCollaboration,
  deleteCollaboration,
} = require("../controllers/collaborationController");
const { verifyToken, isAdmin } = require("../middleware/auth");

// Public routes
router.get("/", getCollaborations);
router.get("/:id", getCollaborationById);

// Admin only routes
router.post("/", verifyToken, isAdmin, createCollaboration);
router.put("/:id", verifyToken, isAdmin, updateCollaboration);
router.delete("/:id", verifyToken, isAdmin, deleteCollaboration);

module.exports = router;