const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());
app.use(express.static('public'));

let misiones = [];
let idCounter = 1;

// Obtener todas las misiones
app.get('/misiones', (req, res) => {
    res.json(misiones);
});

// Crear una nueva misión
app.post('/misiones', (req, res) => {
    const { titulo, descripcion } = req.body;
    if (!titulo || !descripcion) {
        return res.status(400).json({ error: 'Título y descripción son requeridos' });
    }
    const nuevaMision = { id: idCounter++, titulo, descripcion };
    misiones.push(nuevaMision);
    res.status(201).json(nuevaMision);
});

// Eliminar una misión por ID
app.delete('/misiones/:id', (req, res) => {
    const { id } = req.params;
    misiones = misiones.filter(m => m.id !== parseInt(id));
    res.json({ mensaje: 'Misión eliminada' });
});

app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});
