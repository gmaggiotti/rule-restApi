var rule_route = require('./../services/rule_service');
var ping_route = require('./../services/ping');
var default_route = require('./../services/default');

exports.configure = function(app) {

    app.use( default_route.before);
    app.use(default_route.log);

    app.get('/rules', rule_route.findAll);
    app.get('/rules/:id', rule_route.findById);
    app.post('/rules', rule_route.createRule)
    app.get('/ping', ping_route.ping);

    //Production error handle
    // will print stacktrace
    var myerror = function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: {}
        });
    }
    app.use(myerror);
}
