const { EntitySchema } = require("typeorm");

const User = new EntitySchema({
  name: "User",
  tableName: "users",
  columns: {
    id: { primary: true, type: Number, generated: "increment" },
    email: { type: String, unique: true, nullable: false },
    password: { type: String, nullable: false },
    name: { type: String, nullable: false },
    role: { type: String, default: "user" }, // "admin" or "user"
    createdAt: { type: Date, createDate: true },
    updatedAt: { type: Date, updateDate: true },
  },
});

module.exports = { User };