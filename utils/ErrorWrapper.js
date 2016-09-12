/**
 * Created by Dhiman on 2/10/2016.
*/

var util = require('util');

function CustomError(code, replaceHints, replaceTexts) {
    
    var response = {};
    response.code = code;
    response.result = responseObj;
    if(code != 200){
        response.message = messages.statusMessages[code];
    }else{        
        response.message = message;
    }
    
    res.send(response);
    
}


///--- Exports
module.exports = {
    CustomError: CustomError
};
