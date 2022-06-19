
const { Sequelize, Model } = require('sequelize');


const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './storepass.db'
});

(async() => {
    try {
        await sequelize.authenticate();
    	console.log('Connection has been established successfully.');

        class Project extends Model {}

        Project.init({
            title: Sequelize.STRING,
            description: Sequelize.TEXT
        }, { sequelize, modelName: 'project' });
        Project.sync({})

        await Project.create({
            title: 'StorePass',
            description: 'Store Password Management'
        });

        const projects = await Project.findAll();
        console.log(JSON.stringify(projects, null, 2));
    } catch (error) {
    	console.error('Unable to connect to the database:', error);
    }
})();


