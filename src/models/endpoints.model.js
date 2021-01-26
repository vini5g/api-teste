const connection = require('../configs/db.connection');
const { DataTypes } = require('sequelize');

const Endpoints = connection.define('endpoints', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nome: {
        type: DataTypes.TEXT,
    },
    nome_tabela: {
        type: DataTypes.TEXT,
    }
}, {
    underscored: true,
    modelName: "endpoints",
    freezeTableName: true,
    timestamps: false,
    defaultScope: false
});

module.exports = Endpoints;