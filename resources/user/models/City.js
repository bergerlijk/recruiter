/**
 * Created by Dhiman on 11/9/2016.
*/

// Model for the User 
module.exports = (function() {
    
    var City = sequelize.define('City', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        cityName: {
            type: Sequelize.STRING
        },
        stateCode: {
            type: Sequelize.STRING
        },
        state_id: {
            type: Sequelize.INTEGER,
            references: {
                model: 'State',
                key: 'id'
            }
        }
	}, {
        tableName: 'City'
    });
    
    //City.hasOne(State);
    
    sequelize.sync();
	
	return City;
})();

