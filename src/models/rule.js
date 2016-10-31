var connection = require('../connection');

function Rule() {
    this.get = function(res) {
        connection.acquire(function(err, con) {
            con.query('select * from rule', function(err, result) {
                con.release();
                res.send(result);
            });
        });
    };

    this.getId = function(res, id) {
        connection.acquire(function(err, con) {
           resu= con.query('select * from rule where id='+id, function(err, result) {
                con.release();
                res.send(result);
            });
        });
    };
}

module.exports = new Rule();


