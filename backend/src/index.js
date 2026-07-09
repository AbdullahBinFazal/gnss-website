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

const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/faculty", facultyRoutes);
app.use("/api/publications", publicationRoutes);
app.use("/api/events", eventRoutes);
app.use("/api/research-areas", researchAreaRoutes);

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