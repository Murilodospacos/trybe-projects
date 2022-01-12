module.exports = {
up: async (queryInterface, Sequelize) => {
await queryInterface.bulkInsert('sales',
[
{
user_id: 3,
seller_id: 2,
total_price: 59.9,
delivery_address: 'Rua da Graça',
delivery_number: '13',
sale_date: '2022-01-05',
status: 'Pendente',
},
{
user_id: 3,
seller_id: 2,
total_price: 71.5,
delivery_address: 'Rua da Felicidade',
delivery_number: '69',
sale_date: '2022-01-06',
status: 'Preparando',
}, {
user_id: 3,
seller_id: 2,
total_price: 39.9,
delivery_address: 'Travessa Marota',
delivery_number: '171',
sale_date: '2022-01-07',
status: 'Entregue',
},

], { timestamps: false });
},

down: async (queryInterface, Sequelize) => {
await queryInterface.bulkDelete('sales', null, {});
},
};