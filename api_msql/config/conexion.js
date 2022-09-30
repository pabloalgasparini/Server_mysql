const mysql = require("mysql");
const conexion = mysql.createConnection({
    user: "root",
    password:'',
    host: 'localhost',
    database:'server_mysql'
});

conexion.connect((err)=>{
    if (err){
        console.log('ha ocurrido un error'+ err);
    }else{
        console.log('la base de datos se conectó');
    }
});

module.exports = conexion;