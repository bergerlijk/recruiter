var EmployeeCtrl = require('./controllers/EmployeeCtrl');

module.exports = function (app) {
    /* Temp used for testing the server is up or not */
    app.get("/", function (req, res, next) {
        console.log("Hererreerrerererererererere");
        res.send({"status": "success", "message": "Server is accessible"});
    });
    
    app.post("/v1/login", EmployeeCtrl.AuthenticateUser);
};