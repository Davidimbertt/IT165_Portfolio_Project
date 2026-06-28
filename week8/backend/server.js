const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const employeeRoutes = require("./routes/employees");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Employee Management API is running");
});

app.get("/test", (req, res) => {
  res.send("Test route works");
});

app.use("/api/employees", employeeRoutes);

const PORT = process.env.PORT || 5000;

console.log("SERVER FILE LOADED");

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected");
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("MongoDB connection error:", error);
  });