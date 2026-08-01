// Purpose: Defines CapacityBuilding table - stores capacity building information
const { EntitySchema } = require("typeorm");

const CapacityBuilding = new EntitySchema({
  name: "CapacityBuilding",
  tableName: "capacity_building",
  columns: {
    id: { primary: true, type: Number, generated: "increment" },
    title: { type: String, nullable: false },
    description: { type: String, nullable: true },
    programType: { type: String, nullable: true }, // Training, Workshop, Seminar, etc.
    duration: { type: String, nullable: true },
    eligibility: { type: String, nullable: true },
    startDate: { type: Date, nullable: true },
    endDate: { type: Date, nullable: true },
    link: { type: String, nullable: true },
    isOpen: { type: Boolean, default: true },
    order: { type: Number, default: 0 },
    isActive: { type: Boolean, default: true },
    createdAt: { type: Date, createDate: true },
    updatedAt: { type: Date, updateDate: true },
  },
});

module.exports = { CapacityBuilding };