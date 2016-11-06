var rule = require('../models/rule');

exports.findAll = function(request, response) {
    rule.get(response);
};

exports.findById = function(request, response){
    if (request.method === 'GET') {
        if (!isNaN(request.params.id))
            rule.getId(response, request.params.id);
        else
            response.status(400).send("400 Bad Request");
        console.log(request.params.id);
    }
};