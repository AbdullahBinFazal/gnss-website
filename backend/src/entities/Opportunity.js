// Purpose: Defines Opportunity table - stores opportunity information
const { EntitySchema } = require("typeorm");

const Opportunity = new EntitySchema({
  name: "Opportunity",
  tableName: "opportunities",
  columns: {
    id: { primary: true, type: Number, generated: "increment" },
    title: { type: String, nullable: false },
    description: { type: String, nullable: true },
    type: { type: String, nullable: true }, // Research, Scholarship, Career, Internship, etc.
    location: { type: String, nullable: true },
    link: { type: String, nullable: true },
    deadline: { type: Date, nullable: true },
    isOpen: { type: Boolean, default: true },
    order: { type: Number, default: 0 },
    isActive: { type: Boolean, default: true },
    createdAt: { type: Date, createDate: true },
    updatedAt: { type: Date, updateDate: true },
  },
});

module.exports = { Opportunity };