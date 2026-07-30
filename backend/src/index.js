// Purpose: Main server file
require("reflect-metadata");
const express = require("express");
const cors = require("cors");
const { AppDataSource } = require("./config/data-source");

const authRoutes = require("./routes/auth");
const facultyRoutes = require("./routes/faculty");
const publicationRoutes = require("./routes/publications");
const eventRoutes = require("./routes/events");
const researchAreaRoutes = require("./routes/researchAreas");
const facilityRoutes = require("./routes/facilities");
const observatoryRoutes = require("./routes/observatories");
const capacityRoutes = require("./routes/capacity");
const collaborationRoutes = require("./routes/collaborations");
const copilotRoutes = require("./routes/copilot");
const opportunityRoutes = require("./routes/opportunities");
const contactRoutes = require("./routes/contact");
const infrastructureRoutes = require("./routes/infrastructure");
const engagementRoutes = require("./routes/engagement");

const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/faculty", facultyRoutes);
app.use("/api/publications", publicationRoutes);
app.use("/api/events", eventRoutes);
app.use("/api/research-areas", researchAreaRoutes);
app.use("/api/facilities", facilityRoutes);
app.use("/api/observatories", observatoryRoutes);
app.use("/api/capacity", capacityRoutes);
app.use("/api/collaborations", collaborationRoutes);
app.use("/api/copilot", copilotRoutes);
app.use("/api/opportunities", opportunityRoutes);
app.use("/api/contact", contactRoutes);
app.use("/api/infrastructure", infrastructureRoutes);
app.use("/api/engagement", engagementRoutes);

// Health check
app.get("/api/health", (req, res) => {
  res.json({ status: "OK", message: "GNSS Server running" });
});

const PORT = process.env.PORT || 5000;

AppDataSource.initialize()
  .then(() => {
    console.log("✅ Database connected successfully!");
    app.listen(PORT, () => {
      console.log(`🚀 Server running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error("❌ Database connection failed:", err);
  });