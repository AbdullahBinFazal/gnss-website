// Purpose: Defines Facility table - stores facility information
const { EntitySchema } = require("typeorm");

const Facility = new EntitySchema({
  name: "Facility",
  tableName: "facilities",
  columns: {
    id: { primary: true, type: Number, generated: "increment" },
    name: { type: String, nullable: false },
    description: { type: String, nullable: true },
    category: { type: String, nullable: true }, // Lab, Equipment, Infrastructure, etc.
    image: { type: String, nullable: true },
    icon: { type: String, nullable: true },
    features: { type: "text", nullable: true },
    isActive: { type: Boolean, default: true },
    order: { type: Number, default: 0 },
    createdAt: { type: Date, createDate: true },
    updatedAt: { type: Date, updateDate: true },
  },
});

module.exports = { Facility };