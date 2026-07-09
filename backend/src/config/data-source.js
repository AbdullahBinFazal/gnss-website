// Purpose: Database connection configuration for GNSS website
require("reflect-metadata");
const { DataSource } = require("typeorm");
require("dotenv").config();

const { User } = require("../entities/User");
const { Faculty } = require("../entities/Faculty");
const { Publication } = require("../entities/Publication");
const { Event } = require("../entities/Event");
const { ResearchArea } = require("../entities/ResearchArea");

const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT),
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  synchronize: true, // Auto-creates tables in development
  logging: true,
  entities: [User, Faculty, Publication, Event, ResearchArea],
});

module.exports = { AppDataSource };