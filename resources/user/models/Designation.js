/**
 * Created by Dhiman on 11/9/2016.
*/

// Model for the User 
module.exports = (function() {
    
    var Designation = sequelize.define('Designation', {
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
	}, {
        tableName: 'Designation'
    });
    
    sequelize.sync();
	
	return Designation;
})();

