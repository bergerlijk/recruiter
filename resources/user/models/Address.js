/**
 * Created by Dhiman on 11/9/2016.
*/

// Model for the User 
module.exports = (function() {
 
	var Address = sequelize.define('Address', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
		address: {
            type: Sequelize.STRING
        },
        city_id: {
            type: Sequelize.INTEGER,
            references: {
                model: 'City',
                key: 'id'
            }
        },
        state_id: {
            type: Sequelize.INTEGER,
            references: {
                model: 'State',
                key: 'id'
            }
        },
        country_id: {
            type: Sequelize.INTEGER,
            references: {
                model: 'Country',
                key: 'id'
            }
        },
        zipcode: {
            type: Sequelize.INTEGER
        }
	}, {
        tableName: 'Address'
    });
    
	/*Address.hasOne(City);
    Address.hasOne(State);
    Address.hasOne(Country);*/
    
    sequelize.sync();
    
	return Address;
})();

