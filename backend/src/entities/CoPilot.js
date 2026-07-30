// Purpose: Defines CoPilot table - stores CoPilot feature information
const { EntitySchema } = require("typeorm");

const CoPilot = new EntitySchema({
  name: "CoPilot",
  tableName: "copilot",
  columns: {
    id: { primary: true, type: Number, generated: "increment" },
    name: { type: String, nullable: false },
    type: { type: String, nullable: false }, // Research, Navigation, Space Weather, Collaborative
    description: { type: String, nullable: true },
    detailedDescription: { type: String, nullable: true },
    features: { type: "text", nullable: true },
    image: { type: String, nullable: true },
    icon: { type: String, nullable: true },
    order: { type: Number, default: 0 },
    createdAt: { type: Date, createDate: true },
    updatedAt: { type: Date, updateDate: true },
  },
});

module.exports = { CoPilot };