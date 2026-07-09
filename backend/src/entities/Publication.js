// Purpose: Defines Publication table - stores research papers
const { EntitySchema } = require("typeorm");

const Publication = new EntitySchema({
  name: "Publication",
  tableName: "publications",
  columns: {
    id: { primary: true, type: Number, generated: "increment" },
    title: { type: String, nullable: false },
    authors: { type: String, nullable: false },
    journal: { type: String, nullable: true },
    year: { type: Number, nullable: false },
    link: { type: String, nullable: true },
    createdAt: { type: Date, createDate: true },
    updatedAt: { type: Date, updateDate: true },
  },
});

module.exports = { Publication };