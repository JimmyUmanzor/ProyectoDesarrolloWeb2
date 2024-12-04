const bodyParser = require('body-parser')
const express = require('express')
const app = express()
const ActividadesRouter = require('./router/ActividadesRouter');
const AlumnosRouter = require('./router/AlumnosRouter');
const MaestroRouter = require('./router/MaestroRouter');
const UsuariosRouter = require('./router/UsuariosRouter');

var puerto=5000;

app.use(bodyParser.json())

app.use('/actividades',ActividadesRouter);
app.use('/alumnos',AlumnosRouter);
app.use('/maestros',MaestroRouter);
app.use('/usuarios',UsuariosRouter);

app.listen(puerto,()=>{
    console.log('Ejecutando en puerto 5000')
});