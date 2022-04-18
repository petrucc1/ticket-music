module.exports = {
    up: async (queryInterface, Sequelize) => {
        return queryInterface.createTable("cadastro", {
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
        return queryInterface.dropTable("cadastro");
    },
};
