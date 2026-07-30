// Purpose: Defines Infrastructure table - stores infrastructure statistics
const { EntitySchema } = require("typeorm");

const Infrastructure = new EntitySchema({
  name: "Infrastructure",
  tableName: "infrastructure",
  columns: {
    id: { primary: true, type: Number, generated: "increment" },
    icon: { type: String, nullable: true },
    value: { type: String, nullable: false },
    label: { type: String, nullable: false },
    color: { type: String, nullable: true },
    order: { type: Number, default: 0 },
    createdAt: { type: Date, createDate: true },
    updatedAt: { type: Date, updateDate: true },
  },
});

module.exports = { Infrastructure };