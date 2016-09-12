/*global async:true, require:true, console:true, process:true, logger:true, restify:true, NeoOperations:true, messages:true, SuccessWrapper:true, jwt:true, secret:true, config:true, ErrorWrapper:true, module:true, redisOperation:true  */

/**
 * Created by Dhiman on 11/9/2016.
*/

function EmployeeCtrl() {
    'use strict';

    var Country = require('../models/Country'),
        State = require('../models/State'),
        City = require('../models/City'),
        Address = require('../models/Address'),
        Project = require('../models/Project'),
        Designation = require('../models/Designation'),
        Employee = require('../models/Employee');
    
    this.AuthenticateUser = function (req, res, next) {
        res.send("Working");
    }
    
    return this;
 
}
 
module.exports = new EmployeeCtrl();