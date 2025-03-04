const mongoose = require("mongoose");

const misionSchema = new mongoose.Schema({
  nombre: String,
  descripcion: String,
});

const Mision = mongoose.model("Mision", misionSchema);
module.exports = Mision;
