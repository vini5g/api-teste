const connection = require('../configs/db.connection');
const { DataTypes } = require('sequelize');

const Clients = connection.define('clientes', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nome: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "Campo nome não pode ser vazio"
            },
            notNull: {
                msg: "Por favor informe seu nome"
            }
        },
    },
    email: {
        type: DataTypes.TEXT,
        unique: true,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "Campo e-mail não pode ser vazio"
            },
            notNull: {
                msg: "Por favor informe seu e-mail"
            },
            isEmail: {
                msg: "Informe um e-mail válido"
            }
        }
    },
    telefone: {
        type: DataTypes.TEXT,
    },
    caracteristicas: {
        type: DataTypes.TEXT,
    }
}, {
    underscored: true,
    modelName: "clientes",
    freezeTableName: true,
    timestamps: false,
    defaultScope: false
});

module.exports = Clients;