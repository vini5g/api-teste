const { Sequelize } = require('sequelize');
require('./dotenv.config');

const connection = new Sequelize({
    username: process.env.USER_NAME,
    password: process.env.USER_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: "mysql"
});

connection.authenticate()
    .then(() => console.log("Deu bom, conectou"),
          () => console.log("Moiô, não conectou"));

module.exports = connection;