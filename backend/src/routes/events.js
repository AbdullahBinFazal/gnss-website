// Purpose: Event routes
const router = require("express").Router();
const {
  getEvents,
  createEvent,
  updateEvent,
  deleteEvent,
} = require("../controllers/eventController");
const { verifyToken, isAdmin } = require("../middleware/auth");

// Public routes
router.get("/", getEvents);

// Admin only routes
router.post("/", verifyToken, isAdmin, createEvent);
router.put("/:id", verifyToken, isAdmin, updateEvent);
router.delete("/:id", verifyToken, isAdmin, deleteEvent);

module.exports = router;