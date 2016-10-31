var rule_routes = require('./rules_route');

exports.configure = function(app) {
    app.get('/rules/', rule_routes.findAll);
    app.get('/rules/:id', rule_routes.findById);
}
