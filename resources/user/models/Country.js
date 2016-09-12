/**
 * Created by Dhiman on 11/9/2016.
*/

// Model for the User 
module.exports = (function() {
 
	var Country = sequelize.define('Country', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        countryName: {
            type: Sequelize.STRING
        },
        countryCode: {
            type: Sequelize.STRING
        }
	}, {
        tableName: 'Country'
    });
	
    sequelize.sync();
    
	return Country;
})();

