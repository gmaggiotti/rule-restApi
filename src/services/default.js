
exports.before = function(request, response, next) {
    //TODO: trap al common suff before executing specific routes
    console.log("before");
    next();
};


//Production error handle
// will print stacktrace
exports.error = function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
};

