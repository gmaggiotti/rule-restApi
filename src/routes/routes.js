var rule_route = require('./../services/rule_service');
var ping_route = require('./../services/ping');

exports.configure = function(app) {
    app.get('/rules/', rule_route.findAll);
    app.get('/rules/:id', rule_route.findById);
    app.get('/ping', ping_route.ping);

    //Production error handle
    // will print stacktrace
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: {}
        });
    });
}
