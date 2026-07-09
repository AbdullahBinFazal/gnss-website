// Purpose: Defines Faculty table - stores faculty profiles
const { EntitySchema } = require("typeorm");

const Faculty = new EntitySchema({
  name: "Faculty",
  tableName: "faculty",
  columns: {
    id: { primary: true, type: Number, generated: "increment" },
    name: { type: String, nullable: false },
    designation: { type: String, nullable: false },
    researchInterests: { type: String, nullable: true },
    email: { type: String, nullable: false },
    photo: { type: String, nullable: true },
    bio: { type: String, nullable: true },
    order: { type: Number, default: 0 },
    createdAt: { type: Date, createDate: true },
    updatedAt: { type: Date, updateDate: true },
  },
});

module.exports = { Faculty };