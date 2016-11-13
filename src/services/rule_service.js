var rule = require('../models/rule');

exports.findAll = function(request, response) {
    rule.get( function (result) {
        response.send(result);
    });
};

exports.findById = function(request, response){
    if (request.method === 'GET') {
        var n = request.params.id;
        if (!isNaN(parseFloat(n)) && isFinite(n))
            rule.getId( function (result) {
                response.send(result);
            }, request.params.id);
        else
            response.send(400,"400 Bad Request");
        console.log(request.params.id);
    }
};