// Purpose: Database connection configuration for GNSS website
require("reflect-metadata");
const { DataSource } = require("typeorm");
require("dotenv").config();

const { User } = require("../entities/User");
const { Faculty } = require("../entities/Faculty");
const { Publication } = require("../entities/Publication");
const { Event } = require("../entities/Event");
const { ResearchArea } = require("../entities/ResearchArea");
const { Facility } = require("../entities/Facility");
const { Observatory } = require("../entities/Observatory");
const { CapacityProgram } = require("../entities/CapacityProgram");
const { Collaboration } = require("../entities/Collaboration");
const { CoPilot } = require("../entities/CoPilot");
const { Opportunity } = require("../entities/Opportunity");
const { ContactMessage } = require("../entities/ContactMessage");
const { Infrastructure } = require("../entities/Infrastructure");
const { Engagement } = require("../entities/Engagement");
const { Resource } = require("../entities/Resource");
const { Collaboration } = require("../entities/Collaboration");
const { Opportunity } = require("../entities/Opportunity");
const { CapacityBuilding } = require("../entities/CapacityBuilding");
const { DigitalObservatory } = require("../entities/DigitalObservatory");
const { Facility } = require("../entities/Facility");

const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT),
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  synchronize: true, 
  logging: true,
  entities: [User, Faculty, Publication, Event, ResearchArea],
});

module.exports = { AppDataSource };