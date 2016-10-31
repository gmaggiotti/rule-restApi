var chai = require('chai');
var should = chai.should();
var request = require('supertest');
var express = require('express');
var routes = require('../src/routes/routes');
var sinon = require('sinon');

var rule_routes = require('../src/routes/rules_route');

var app = express();
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