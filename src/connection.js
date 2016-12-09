var orm = require("orm");

function Connection() {
    this.Rule = null;

    this.init = function() {
        orm.connect("mysql://root@localhost/tx", function (err, db) {
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