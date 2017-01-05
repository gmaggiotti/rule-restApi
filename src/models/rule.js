var connection = require('../connection');

exports.get = function (response ) {
    connection.acquire(function (err, con) {
        con.query('select * from rule', function (err, result) {
            con.release();
            response(result);
        });
    });
};

exports.getId = function (response, id ) {
    connection.acquire(function (err, con) {
        con.query('select * from rule where id=' + id, function (err, result) {
            con.release();
            response(result);
        });
    });
};

exports.put = function (rule) {
    connection.acquire(function (err, con) {
        con.query('insert into rule(version,bucket_size,isme,ismp,segment, site_id) values(' +
            rule.version + ',' +
            rule.bucket_size + ',' +
            rule.isme + ',' +
            rule.ismp + ', "' +
            rule.segment + '" , "' +
            rule.site_id + '")' );
    });
};


