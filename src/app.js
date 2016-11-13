var restify = require('restify');
var bodyparser = require('body-parser');
var connection = require('./connection');
var routes = require('./routes/routes');
var logger = require('restify-logger');

var app = restify.createServer();

app.use(logger('custom', {
    skip: function (req) {
        return process.env.NODE_ENV === "test" || req.method === "OPTIONS" || req.url === "/status";
    }
}));

app.use(restify.bodyParser());

connection.init();
routes.configure(app);

app.listen(8000, function () {
    console.log("App online on localhost:8000");
});