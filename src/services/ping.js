
exports.ping = function(req, res){
    if (req.method === 'GET') {
        res.send("pong");
    }
    console.log(req.params.id) ;
};