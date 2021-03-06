var chai = require('chai');
var should = chai.should();
var request = require('supertest');
var restify = require('restify');
var ping_route = require('../src/services/ping');

var app = restify.createServer();
app.get('/ping/', ping_route.ping);

module.exports = app;

describe('Test for ping', function() {

    it('/ping return pong', function(done) {
        request(app)
            .get('/ping')
            .expect(200, "\"pong\"")
            .end(function(err, res){
                if (err) throw err;
                done();
            });
        });
});