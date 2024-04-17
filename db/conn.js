const {Sequelize} = require("sequelize");


const sequelize = new Sequelize(
    process.env.DB_DATABASE,
    process.env.DB_USERNAME,
    
    {
        password: "postgresql",
        host: process.env.DB_HOST, 
        port: process.env.DB_PORT, 
        dialect: process.env.DB_DIALECT,
    }
);

module.exports = sequelize;
