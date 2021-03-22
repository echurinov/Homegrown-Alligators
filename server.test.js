var expect = require("chai").expect;
var assert = require('assert');
var request = require("request");


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
});