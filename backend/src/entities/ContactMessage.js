// Purpose: Defines ContactMessage table - stores contact form submissions
const { EntitySchema } = require("typeorm");

const ContactMessage = new EntitySchema({
  name: "ContactMessage",
  tableName: "contact_messages",
  columns: {
    id: { primary: true, type: Number, generated: "increment" },
    name: { type: String, nullable: false },
    email: { type: String, nullable: false },
    subject: { type: String, nullable: true },
    message: { type: String, nullable: false },
    status: { type: String, default: "pending" }, // pending, read, replied
    createdAt: { type: Date, createDate: true },
    updatedAt: { type: Date, updateDate: true },
  },
});

module.exports = { ContactMessage };