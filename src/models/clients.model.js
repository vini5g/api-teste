const connection = require('../configs/db.connection');
const { DataTypes } = require('sequelize');

const Clients = connection.define('clientes', {
    id: {
        type: DataTypes.TEXT,
        primaryKey: true
    },
    nome: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "Name field cannot be empty"
            },
            notNull: {
                msg: "Please enter your name"
            }
        },
    },
    email: {
        type: DataTypes.TEXT,
        unique: true,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "E-mail field cannot be empty"
            },
            notNull: {
                msg: "Please enter your e-mail"
            },
            isEmail: {
                msg: "Please type a valid e-mail"
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