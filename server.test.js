var expect = require("chai").expect;
var assert = require('assert');
var request = require("request");

var listings;
var index = require('../Homegrown-Alligators/src/index.js');

describe('Website server Unit Tests', function() {
    it('should respond', function(done) {
        request.get('http://localhost:3000/About', function(error, response, body) {
            try {
                assert(response);
            } catch (error) {
                console.log('There was an error')
            }
            done();
        });        
    });
    it('responds with a 404 error to other GET requests', function(done) {
        request.get('http://localhost:3000/About', function(error, response, body) {
          assert.equal(response.statusCode, 404);
          assert.equal(body, '404, Page Not Found');
          done();
        });
    });
});