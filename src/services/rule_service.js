var rule = require('../models/rule');

exports.findAll = function(request, response) {
    rule.get( function (result) {
        response.send(result);
    });
};

exports.findById = function(request, response){
    if (request.method === 'GET') {
        if (!isNaN(request.params.id))
            rule.getId( function (result) {
                response.send(result);
            }, request.params.id);
        else
            response.status(400).send("400 Bad Request");
        console.log(request.params.id);
    }
};