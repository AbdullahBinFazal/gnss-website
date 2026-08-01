// Purpose: Defines Team table - stores team information
const { EntitySchema } = require("typeorm");

const Team = new EntitySchema({
  name: "Team",
  tableName: "team",
  columns: {
    id: { primary: true, type: Number, generated: "increment" },
    name: { type: String, nullable: false },
    designation: { type: String, nullable: true },
    bio: { type: String, nullable: true },
    image: { type: String, nullable: true },
    order: { type: Number, default: 0 },
    isActive: { type: Boolean, default: true },
    createdAt: { type: Date, createDate: true },
    updatedAt: { type: Date, updateDate: true },
  },
});

module.exports = { Team };