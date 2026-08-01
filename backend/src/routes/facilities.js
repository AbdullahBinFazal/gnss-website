// Purpose: Facilities routes
const router = require("express").Router();
const {
  getFacilities,
  getFacilityById,
  createFacility,
  updateFacility,
  deleteFacility,
} = require("../controllers/facilityController");
const { verifyToken, isAdmin } = require("../middleware/auth");

// Public routes
router.get("/", getFacilities);
router.get("/:id", getFacilityById);

// Admin only routes
router.post("/", verifyToken, isAdmin, createFacility);
router.put("/:id", verifyToken, isAdmin, updateFacility);
router.delete("/:id", verifyToken, isAdmin, deleteFacility);

module.exports = router;