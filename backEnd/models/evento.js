const Sequelize = require("sequelize")
const database = require("../database/index")

const evento = database.define('evento', {
    id_evento: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    nome_evento: {
        type: Sequelize.STRING,
        allowNull: false
    },
    data_hora: {
        type: Sequelize.DATE,
        allowNull: false
    },
    descricao: {
        type: Sequelize.STRING,
        allowNull: false
    },
    link_img: {
        type: Sequelize.STRING,
        allowNull: false
    },
    valor_ingresso: {
        type: Sequelize.FLOAT,
        allowNull: false
    },
}, 
{
    timeStamps: false,
    createdAt: false,
    updatedAt: false
})

module.exports = evento