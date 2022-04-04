module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('evento', [{
            id_evento: '',
            nome_evento: '',
            data_hora: '',
            descricao: '',
            link_img: '',
            valor_ingresso: '',
            created_at: new Date(),
            updated_at: new Date(),
        }]);
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('evento', null, {});
    }
};