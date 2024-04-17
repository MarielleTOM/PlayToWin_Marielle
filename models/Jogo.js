const conn=require("../db/conn");
const {DataType, DataTypes}=require('sequelize');

const Jogo = conn.define('Jogo',{
    titulo:{
        type:DataTypes.STRING,
        required:false
    },
    descricao:{
        type:DataTypes.INTEGER,
        required:true
    },
    precoBase:{
        type:DataTypes.DOUBLE,
        required:true
    },
});

module.exports = Jogo;