// Purpose: GNSS Academy routes
const router = require("express").Router();
const {
  getAcademy,
  getAcademyById,
  createAcademy,
  updateAcademy,
  deleteAcademy,
} = require("../controllers/gnssAcademyController");
const { verifyToken, isAdmin } = require("../middleware/auth");

// Public routes
router.get("/", getAcademy);
router.get("/:id", getAcademyById);

// Admin only routes
router.post("/", verifyToken, isAdmin, createAcademy);
router.put("/:id", verifyToken, isAdmin, updateAcademy);
router.delete("/:id", verifyToken, isAdmin, deleteAcademy);

module.exports = router;