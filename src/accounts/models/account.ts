
const { Sequelize, Model } = require('sequelize');


const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './storepass.db'
});

// (async() => {
//     try {
        // await sequelize.authenticate();
    	// console.log('Connection has been established successfully.');

        class Account extends Model {}

        Account.init({
            name: Sequelize.STRING,
            pass: Sequelize.TEXT
        }, { sequelize, modelName: 'account' });
        Account.sync({})

        export default Account

//         const accounts = await Account.findAll();
//         console.log(JSON.stringify(accounts, null, 2));
//     } catch (error) {
//     	console.error('Unable to connect to the database:', error);
//     }
// })();


