/**
 * Created by Dhiman on 11/9/2016.
*/

// Model for the User 
module.exports = (function() {
    
    var Project = sequelize.define('Project', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
		shortName: {
            type: Sequelize.STRING
        },
        fullName: {
            type: Sequelize.STRING
        },
        description: {
            type: Sequelize.TEXT
        }
	}, {
        tableName: 'Project'
    });
    
    sequelize.sync();
	
	return Project;
})();

