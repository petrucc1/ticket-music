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
    data: {
        type: Sequelize.DATE,
        allowNull: false
    },
    hora: {
        type: Sequelize.STRING,
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
    qtd_premium: {
        type: Sequelize.STRING,
        allowNull: false
    },
    qtd_pista: {
        type: Sequelize.STRING,
        allowNull: false
    },
    qtd_arquibancada:{
        type: Sequelize.STRING,
        allowNull: false
    },
    valor_premium: {
        type: Sequelize.STRING,
        allowNull: false
    },
    valor_pista: {
        type: Sequelize.STRING,
        allowNull: false
    },
    valor_arquibancada: {
        type: Sequelize.STRING,
        allowNull: false
    }

    

}, 
{
    timeStamps: false,
    createdAt: false,
    updatedAt: false
})

module.exports = evento