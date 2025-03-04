const express = require('express');
const cors = require('cors');
const app = express();
const { MongoClient, ServerApiVersion } = require('mongodb');

const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());
app.use(express.static('public'));

// let misiones = [];
// let idCounter = 1;

const uri = "mongodb+srv://ajimenezmunoz:ALUZJTcSnMNLRAl9@aleeljandro.zclf9.mongodb.net/?retryWrites=true&w=majority&appName=AleelJandro";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    // await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
}

run().catch(console.dir);

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
    const nuevaMision = { nombre: titulo, descripcion };

    client.db("Misiones").collection("misiones").insertOne(nuevaMision);

    // misiones.push(nuevaMision);
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
