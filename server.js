const express = require('express');
const app = express();

// Importar las rutas de misiones
const misionesRoutes = require('./routes/misiones');

// Usar middleware
app.use(express.json()); // Para procesar solicitudes JSON

// Definir la ruta raíz ("/") como prueba
app.get('/', (req, res) => {
  res.send('Bienvenido a la API de Misiones');
});

// Usar las rutas de misiones en /api/misiones
app.use('/api/misiones', misionesRoutes);

// Iniciar el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
