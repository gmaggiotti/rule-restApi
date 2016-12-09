module.exports = function (db, cb) {
    db.define('rule', {
        version     : {type: 'integer'},
        bucket_size : {type: 'integer'},
        isme        : {type: 'integer'},
        ismp        : {type: 'integer'},
        segment     : String,
        site_id     : String
    });

    return cb();
};