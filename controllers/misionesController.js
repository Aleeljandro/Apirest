const getMisiones = (req, res) => {
    res.json({ message: 'Obteniendo misiones' });
  };
  
  const createMision = (req, res) => {
    res.json({ message: 'Misión creada' });
  };
  
  module.exports = { getMisiones, createMision };
  