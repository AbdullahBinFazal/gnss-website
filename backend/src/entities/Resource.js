// Purpose: Defines Resource table - stores resource information
const { EntitySchema } = require("typeorm");

const Resource = new EntitySchema({
  name: "Resource",
  tableName: "resources",
  columns: {
    id: { primary: true, type: Number, generated: "increment" },
    title: { type: String, nullable: false },
    description: { type: String, nullable: true },
    type: { type: String, nullable: true },
    category: { type: String, nullable: true },
    link: { type: String, nullable: true },
    filePath: { type: String, nullable: true },
    order: { type: Number, default: 0 },
    isActive: { type: Boolean, default: true },
    createdAt: { type: Date, createDate: true },
    updatedAt: { type: Date, updateDate: true },
  },
});

module.exports = { Resource };