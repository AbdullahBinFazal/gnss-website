// Purpose: Contact routes
const router = require("express").Router();
const {
  getMessages,
  getMessageById,
  createMessage,
  updateMessageStatus,
  deleteMessage,
} = require("../controllers/contactController");
const { verifyToken, isAdmin } = require("../middleware/auth");

// Public routes
router.post("/", createMessage);

// Admin only routes
router.get("/", verifyToken, isAdmin, getMessages);
router.get("/:id", verifyToken, isAdmin, getMessageById);
router.put("/:id", verifyToken, isAdmin, updateMessageStatus);
router.delete("/:id", verifyToken, isAdmin, deleteMessage);

module.exports = router;