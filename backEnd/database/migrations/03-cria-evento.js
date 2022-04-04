"use strict";

module.exports = {
    up: async (queryInterface, Sequelize) => {
        return queryInterface.createTable("evento", {
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

            created_at: {
                allowNull: false,
                type: Sequelize.DATE,
            },

            updated_at: {
                allowNull: false,
                type: Sequelize.DATE,
            },
        });
    },

    down: async (queryInterface) => {
        return queryInterface.dropTable("evento");
    },
};