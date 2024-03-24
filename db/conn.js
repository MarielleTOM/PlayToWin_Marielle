const {Sequelize} = require('sequelize');

const sequelize = new Sequelize(
    process.env.DB_USERNOME,
    process.env.DB_PASSWORD,
    {
        host: process.env.DB_HOTS,
        port: process.env.DB_PORT,
        dialect: process.env.DB_DIALECT,
    }
);

module.exports = sequelize