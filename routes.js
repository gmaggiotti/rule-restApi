var rule = require('./models/rule');


module.exports = {
    configure: function(app) {
        app.get('/rule/', function(req, res) {
            rule.get(res);
        });
    }
};