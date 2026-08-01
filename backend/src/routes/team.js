// Purpose: Team routes
const router = require("express").Router();
const {
  getTeam,
  getTeamById,
  createTeam,
  updateTeam,
  deleteTeam,
} = require("../controllers/teamController");
const { verifyToken, isAdmin } = require("../middleware/auth");

// Public routes
router.get("/", getTeam);
router.get("/:id", getTeamById);

// Admin only routes
router.post("/", verifyToken, isAdmin, createTeam);
router.put("/:id", verifyToken, isAdmin, updateTeam);
router.delete("/:id", verifyToken, isAdmin, deleteTeam);

module.exports = router;