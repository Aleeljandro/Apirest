// Definir el modelo de la misión, si es necesario usar base de datos
const mongoose = require('mongoose');

const misionSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  date: { type: Date, default: Date.now }
});

const Mision = mongoose.model('Mision', misionSchema);

module.exports = Mision;
