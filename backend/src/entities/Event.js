
const { EntitySchema } = require("typeorm");

const Event = new EntitySchema({
  name: "Event",
  tableName: "events",
  columns: {
    id: { primary: true, type: Number, generated: "increment" },
    title: { type: String, nullable: false },
    date: { type: String, nullable: false },
    location: { type: String, nullable: true },
    description: { type: String, nullable: true },
    image: { type: String, nullable: true },
    createdAt: { type: Date, createDate: true },
    updatedAt: { type: Date, updateDate: true },
  },
});

module.exports = { Event };