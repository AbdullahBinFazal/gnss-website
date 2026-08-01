// Purpose: Resources routes
const router = require("express").Router();
const {
  getResources,
  getResourceById,
  createResource,
  updateResource,
  deleteResource,
} = require("../controllers/resourceController");
const { verifyToken, isAdmin } = require("../middleware/auth");

// Public routes
router.get("/", getResources);
router.get("/:id", getResourceById);

// Admin only routes
router.post("/", verifyToken, isAdmin, createResource);
router.put("/:id", verifyToken, isAdmin, updateResource);
router.delete("/:id", verifyToken, isAdmin, deleteResource);

module.exports = router;