const sequelize = require("sequelize")
const { FLOAT } = require("sequelize")
const Sequelize = require("sequelize")
const database = require("../database/index")

const cadastro = database.define('cadastro', {
    id_user:{
        type:sequelize.INTEGER,
        allownull:false,
        primaryKey:true
    }, 
    CPF: {
        type: Sequelize.STRING,
        allowNull: false,
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