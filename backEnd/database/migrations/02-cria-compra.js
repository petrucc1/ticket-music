"use strict";

module.exports = {
    up: async (queryInterface, Sequelize) => {
        return queryInterface.createTable("compra", {
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
        return queryInterface.dropTable("compra");
    },
};
