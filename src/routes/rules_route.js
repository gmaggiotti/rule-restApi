var rule = require('../models/rule');

exports.findAll = function(req, res) {
    rule.get(res);
};

exports.findById = function(req, res){
    if( !isNaN(req.params.id) )
        var res = rule.getId(res, req.params.id)
    else
        res.status(400).send("400 Bad Request");

    console.log(req.params.id) ;
};