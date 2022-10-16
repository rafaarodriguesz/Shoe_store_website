const Sequelize = require ('sequelize');

const sequelize = new Sequelize('celke', 'root', '969696', {
    host: 'localhost',
    dialect:'mysql'
});

sequelize.authenticate()
.then(function(){
    console.log("conectou com o database");
}).catch(function(){
    console.log("Não conectou com o banco de dados");
});

module.exports = sequelize;