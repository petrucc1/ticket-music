module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('cadastro', [{
            id_user: '',
            CPF: '',
            nome: '',
            email: '',
            telefone: '',
            senha: '',
            created_at: new Date(),
            updated_at: new Date()
        }]);
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('cadastro', null, {});
    }
};