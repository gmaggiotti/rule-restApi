exports.findAll = function (request, response) {
    try {
        Rule.find({}, function (err, rule) {
            if (err) throw err;
            response.send(rule);
        });
    } catch (err) {
        response.send(500, "Internal Error");
    }
};


exports.findById = function (request, response) {
    try {
        if (request.method === 'GET') {
            var n = request.params.id;
            if (!isNaN(parseFloat(n)) && isFinite(n))
                Rule.find({id: request.params.id}, function (err, rule) {
                    if (err) throw err;
                    response.send(rule);
                });
            else
                response.send(400, "400 Bad Request");
            console.log(request.params.id);
        }
    } catch (err) {
        response.send(500, "Internal Error")
    }
};