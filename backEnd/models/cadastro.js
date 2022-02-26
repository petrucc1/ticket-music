const Sequelize = require("sequelize")
const database = require("../database/index")

const cadastro = database.define('cadastro', {
    CPF: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true
    },

    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },

    email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    telefone: {
        type: Sequelize.STRING,
        allowNull: false
    },
    senha: {
        type: Sequelize.STRING,
        allowNull: false
    }

}, 
{
    timeStamps: false,
    createdAt: false,
    updatedAt: false
})

module.exports = cadastro