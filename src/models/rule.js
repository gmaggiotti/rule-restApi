var connection = require('../connection');

exports.get = function (response) {
    connection.acquire(function (err, con) {
        con.query('select * from rule', function (err, result) {
            con.release();
            response.send(result);
        });
    });
};

exports.getId = function (response, id) {
    connection.acquire(function (err, con) {
        con.query('select * from rule where id=' + id, function (err, result) {
            con.release();
            response.send(result);
        });
    });
};



