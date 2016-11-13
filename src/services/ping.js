
exports.ping = function(req, res){
    if (req.method === 'GET') {
        res.send(200,"pong");
    }
    console.log(req.params.id) ;
};