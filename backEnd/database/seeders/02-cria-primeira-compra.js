module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('compra', [{
            cod_compra: '',
            id_evento:'',
            id_usuario: '',
            created_at: new Date(),
            updated_at: new Date(),
        }]);
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('compra', null, {});
    }
};