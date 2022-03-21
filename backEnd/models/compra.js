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
 },

{
    timeStamps: false,
    createdAt: false,
    updatedAt: false
})

module.exports = compra