var chai = require('chai');
var should = chai.should();
var request = require('supertest');
var restify = require('restify');
var routes = require('../src/routes/routes');
var sinon = require('sinon');

var rule_routes = require('../src/services/rule_service');

var app = restify.createServer();
app.use('/rules/', rule_routes.findAll);

module.exports = app;

describe('Test for ping', function() {

    it('/rules return pong', function(done) {
        request(app)
            .get('/ping/')
            .expect(200, "pong")
            .end(function(err, res){
                if (err) throw err;

                done();
            });
    });
});