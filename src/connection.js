var orm = require("orm");

function Connection() {
    this.Rule = null;

    this.init = function() {
        var opts = {
            host:     'localhost',
            database: 'tx',
            protocol: 'mysql',
            port:     '3306',
            query:    {pool: true}
        };

        orm.connect(opts, function (err, db) {
            if (err) throw err;

            db.load("./models/rule", function (err) {
                // loaded!
                var Rule = db.models.rule;
                this.Rule = Rule
            });

        });
    };
}

module.exports = new Connection();