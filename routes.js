var rule_routes = require('./routes/rules');


module.exports = {
    configure: function(app) {

        app.get('/rules/', rule_routes.findAll);

        app.get('/rules/:id', rule_routes.findById);

    }
};