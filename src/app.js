var express = require('express');
var bodyparser = require('body-parser');
var connection = require('./connection');
var routes = require('./routes/routes');

var app = express();
app.use(bodyparser.urlencoded({extended: true}));
app.use(bodyparser.json());

//Production error handle
//will print stacktrace
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: err
    });
});


connection.init();
routes.configure(app);

var server = app.listen(8000, function() {
    console.log('Server listening on port ' + server.address().port);
});