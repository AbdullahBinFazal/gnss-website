// Purpose: Defines DigitalObservatory table - stores observatory data
const { EntitySchema } = require("typeorm");

const DigitalObservatory = new EntitySchema({
  name: "DigitalObservatory",
  tableName: "digital_observatory",
  columns: {
    id: { primary: true, type: Number, generated: "increment" },
    title: { type: String, nullable: false },
    description: { type: String, nullable: true },
    dataType: { type: String, nullable: true }, // GNSS, Space Weather, Ionospheric, etc.
    source: { type: String, nullable: true },
    link: { type: String, nullable: true },
    isActive: { type: Boolean, default: true },
    order: { type: Number, default: 0 },
    createdAt: { type: Date, createDate: true },
    updatedAt: { type: Date, updateDate: true },
  },
});

module.exports = { DigitalObservatory };