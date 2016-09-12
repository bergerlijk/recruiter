/**
 * Created by Dhiman on 11/9/2016.
*/

// Model for the User 
module.exports = (function() {
    
    var State = sequelize.define('State', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        stateName: {
            type: Sequelize.STRING
        },
        stateCode: {
            type: Sequelize.STRING
        },
        country_id: {
            type: Sequelize.INTEGER,
            references: {
                model: 'Country',
                key: 'id'
            }
        }
	}, {
        tableName: 'State'
    });
    
    //State.hasOne(Country);
    
    sequelize.sync();
	
	return State;
})();

