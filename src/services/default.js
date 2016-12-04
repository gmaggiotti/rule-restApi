var logger = require('restify-logger');

exports.log = logger('dev', {
    skip: function (req) {
        return process.env.NODE_ENV === "test" || req.method === "OPTIONS" || req.url === "/status";
    }});

exports.before = function(request, response, next) {
    //TODO: trap al common suff before executing specific routes
    console.log("before");
    next();
};



