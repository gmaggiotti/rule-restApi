
exports.ping = function(req, res){
    if (req.method === 'GET') {
        res.status(200).send("pong");
    }
    console.log(req.params.id) ;
};