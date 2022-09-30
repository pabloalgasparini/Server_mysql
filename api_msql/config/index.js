require("./conexion");
const express = require("express");
const dotenv = require('dotenv');
const path = require('path');
//const cors = require("cors");
const morgan = require('morgan');
const port = process.env.PORT || 3000;
// app.use(dotenv)
const app = express();

// admitir tipos de datos Meddleaweres
app.use(express.json());
//app.use(cors());
app.use(morgan('dev'));

// Directorios de archivos estáticos
app.use(express.static(path.join(__dirname, 'api_msql/public')));

// Importando rutas
app.use(require("./routes/user.routes"));
// app.use(require("./config/routes/productos.routes"));

// Configurandi puerto
app.listen(port, ()=>{
    console.log(`Servidor corriendo en http//localhost:${port}`);
})
