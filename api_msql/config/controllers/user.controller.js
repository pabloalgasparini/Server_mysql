const ctrlUser = {};

const conexion = require("../conexion");

ctrlUser.getUser = async (req,res)=>{
    let sql = 'select* from user';
    await conexion.query(sql,(err,rows)=>{
        if (err) throw err;
        else{
            res.json(rows);
        }
    })
};

module.exports=ctrlUser;