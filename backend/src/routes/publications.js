// Purpose: Publication routes
const router = require("express").Router();
const {
  getPublications,
  createPublication,
  updatePublication,
  deletePublication,
} = require("../controllers/publicationController");
const { verifyToken, isAdmin } = require("../middleware/auth");

// Public routes
router.get("/", getPublications);

// Admin only routes
router.post("/", verifyToken, isAdmin, createPublication);
router.put("/:id", verifyToken, isAdmin, updatePublication);
router.delete("/:id", verifyToken, isAdmin, deletePublication);

module.exports = router;