// Purpose: Defines Collaboration table - stores collaboration information
const { EntitySchema } = require("typeorm");

const Collaboration = new EntitySchema({
  name: "Collaboration",
  tableName: "collaborations",
  columns: {
    id: { primary: true, type: Number, generated: "increment" },
    title: { type: String, nullable: false },
    description: { type: String, nullable: true },
    partnerType: { type: String, nullable: true }, // Academic, Industry, Government, Research
    partnerName: { type: String, nullable: true },
    logo: { type: String, nullable: true },
    website: { type: String, nullable: true },
    order: { type: Number, default: 0 },
    isActive: { type: Boolean, default: true },
    createdAt: { type: Date, createDate: true },
    updatedAt: { type: Date, updateDate: true },
  },
});

module.exports = { Collaboration };