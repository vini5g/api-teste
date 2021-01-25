const connection = require('../configs/db.connection');
const { DataTypes } = require('sequelize');

const Providers = connection.define('fornecedores', {
    id: {
        type: DataTypes.TEXT,
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
    modelName: "fornecedores",
    freezeTableName: true,
    timestamps: false,
    defaultScope: false
});

module.exports = Providers;