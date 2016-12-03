var rule_route = require('./../services/rule_service');
var ping_route = require('./../services/ping');
var default_route = require('./../services/default');

exports.configure = function(app) {
    app.use( default_route.before);

    app.get('/rules', rule_route.findAll);
    app.get('/rules/:id', rule_route.findById);
    app.get('/ping', ping_route.ping);

    //Production error handle
    // will print stacktrace
    app.use(default_route.error());
}
