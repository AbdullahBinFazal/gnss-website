// Purpose: Defines ResearchArea table - stores research themes
const { EntitySchema } = require("typeorm");

const ResearchArea = new EntitySchema({
  name: "ResearchArea",
  tableName: "research_areas",
  columns: {
    id: { primary: true, type: Number, generated: "increment" },
    title: { type: String, nullable: false },
    description: { type: String, nullable: true },
    icon: { type: String, nullable: true },
    order: { type: Number, default: 0 },
    createdAt: { type: Date, createDate: true },
    updatedAt: { type: Date, updateDate: true },
  },
});

module.exports = { ResearchArea };