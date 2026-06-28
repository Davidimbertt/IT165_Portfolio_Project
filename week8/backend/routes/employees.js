const express = require("express");
const Employee = require("../models/Employee");

const router = express.Router();

// Create employee
router.post("/", async (req, res) => {
  try {
    const employee = new Employee(req.body);
    const savedEmployee = await employee.save();
    res.status(201).json(savedEmployee);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Get all employees
router.get("/", async (req, res) => {
  try {
    const employees = await Employee.find().sort({ createdAt: -1 });
    res.json(employees);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get one employee
router.get("/:id", async (req, res) => {
  try {
    const employee = await Employee.findById(req.params.id);

    if (!employee) {
      return res.status(404).json({ message: "Employee not found" });
    }

    res.json(employee);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Update employee
router.put("/:id", async (req, res) => {
  try {
    const updatedEmployee = await Employee.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!updatedEmployee) {
      return res.status(404).json({ message: "Employee not found" });
    }

    res.json(updatedEmployee);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Delete employee
router.delete("/:id", async (req, res) => {
  try {
    const deletedEmployee = await Employee.findByIdAndDelete(req.params.id);

    if (!deletedEmployee) {
      return res.status(404).json({ message: "Employee not found" });
    }

    res.json({ message: "Employee deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;