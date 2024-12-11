const express = require('express');
const app = express();
const ActividadesRouter = require('./router/ActividadesRouter');
const AlumnosRouter = require('./router/AlumnosRouter');
const MaestroRouter = require('./router/MaestroRouter');
const UsuariosRouter = require('./router/UsuariosRouter');
const cors = require('cors');

// Configuración del puerto
const puerto = 5000;

// Middlewares
app.use(cors());
app.use(express.json());  // Usando express.json() en lugar de body-parser

// Rutas
app.use('/actividades', ActividadesRouter);
app.use('/alumnos', AlumnosRouter);
app.use('/maestros', MaestroRouter);
app.use('/usuarios', UsuariosRouter);

// Manejo de errores - Middleware global
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Algo salió mal' });
});

// Iniciar servidor
app.listen(puerto, () => {
    console.log(`Servidor ejecutándose en el puerto ${puerto}`);
});
