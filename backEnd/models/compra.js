const Sequelize = require("sequelize")
const database = require("../database/index")

const compra = database.define('compra', {
    cod_compra: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    id_evento: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    id_usuario: {
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