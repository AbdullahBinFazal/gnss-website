// Purpose: Defines GNSSAcademy table - stores academy information
const { EntitySchema } = require("typeorm");

const GNSSAcademy = new EntitySchema({
  name: "GNSSAcademy",
  tableName: "gnss_academy",
  columns: {
    id: { primary: true, type: Number, generated: "increment" },
    title: { type: String, nullable: false },
    description: { type: String, nullable: true },
    programs: { type: "text", nullable: true },
    order: { type: Number, default: 0 },
    isActive: { type: Boolean, default: true },
    createdAt: { type: Date, createDate: true },
    updatedAt: { type: Date, updateDate: true },
  },
});

module.exports = { GNSSAcademy };