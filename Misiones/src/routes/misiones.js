const express = require("express");
const Mision = require("../models/Mision");

const router = express.Router();

// Crear una misión
router.post("/", async (req, res) => {
  try {
    const nuevaMision = new Mision(req.body);
    await nuevaMision.save();
    res.status(201).json(nuevaMision);
  } catch (error) {
    res.status(500).json({ error: "Error al crear la misión" });
  }
});

// Obtener todas las misiones
router.get("/", async (req, res) => {
  const misiones = await Mision.find();
  res.json(misiones);
});

module.exports = router;
