const Sequelize = require("sequelize")
const database = require("../database/index")

const compra = database.define('compra', {
    codcompra: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true
    },

    idevento: {
        type: Sequelize.INTEGER,
        allowNull: false
    },

    cpf: {
        type: Sequelize.STRING,
        allowNull: false
    },
    qtd_premium: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    qtd_pista: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    qtd_arquibancada: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
},

{
    timeStamps: false,
    createdAt: false,
    updatedAt: false
})

module.exports = compra