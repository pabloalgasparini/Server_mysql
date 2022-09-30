
const router = require("express").Router();
// Importando controladores
const {
    getUser,
    postUser
}=require('../controllers/user.controller');

// Definir rutas

// Ruta para obtener todos los usuarios
router.get('/user',getUser);

// Crear Usuario
// router.post('/user', postUser);

module.exports=router;