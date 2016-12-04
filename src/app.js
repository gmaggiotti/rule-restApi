var restify = require('restify');
var bodyparser = require('body-parser');
var connection = require('./connection');
var routes = require('./routes/routes');

var app = restify.createServer();

app.use(restify.bodyParser());
app.pre(restify.pre.sanitizePath());

connection.init();
routes.configure(app);

app.listen(8000, function () {
    console.log("App online on localhost:8000");
});

