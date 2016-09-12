/**
 * Created by Dhiman on 11/9/2016.
*/

// Model for the User 
module.exports = (function() {
 
	var Employee = sequelize.define('Employee', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
		firstName: {
            type: Sequelize.STRING, 
            required: true
        },
        lastName: {
            type: Sequelize.STRING,
            required: true
        },
		email: {
            type: Sequelize.STRING,
            required: true
        },
        mobile: {
            type: Sequelize.STRING,
            required: true
        },
		designation_id: {
            type: Sequelize.INTEGER,
            references: {
                model: 'Designation',
                key: 'id'
            }
        },
        project_id: {
            type: Sequelize.INTEGER,
            references: {
                model: 'Project',
                key: 'id'
            }
        },
        address_id: {
            type: Sequelize.INTEGER,
            references: {
                model: 'Address',
                key: 'id'
            }
        }
	}, {
        tableName: 'Employee'
    });
    
    /*Employee.hasOne(Designation);
    Employee.hasOne(Project);
    Employee.hasOne(Address);*/
    
    sequelize.sync();
	
	return Employee;
})();

