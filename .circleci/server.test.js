const { assert } = require('console');
const { Server } = require('http');
var should = require('should'), 
    fs = require('fs'),
    request = require('request');

/* Globals */
var listings;

/*
  Describe blocks organize your unit tests into distinct categories of functionality.
  
  They can be nested.
 */
describe('UF Directory Server Unit Tests', function() {

  /*
    This before hook loads the JSON data to the listings variable, so that we can compare 
    the response to 'http://localhost:8080/listings' to the data we expect to recieve. 
   */
  before(function(done) {
    fs.readFile('listings.json', 'utf8', function(err, data) {
      listings = JSON.parse(data);

      /*
        Calling done() will pass code execution to the next appropriate block of code. 
        In this case, execution will pass to the first it() statement.  
       */
      done();
    });
  });

  describe('Server responds to requests', function() {
    it('should respond', function(done) {
      /*
        The request module allows us to make HTTP requests. This module could also be useful in 
        making API calls to web services you make use of in your application, such as Google Maps. 
       */
      request.get('http://localhost:8080', function(error, response, body) {
        /*
          The 'should' module is an assertion library. Assertions allow us to compare the functions
          that we are testing to the values we expect to receive back. 
          
          In this unit test we are only testing the existence of a response, and are not concerned 
          with what is contained in the response. We can view this as a very general, binary check, not specific. 
          
          In first statement, assert what we should not see
          In the second, assert what we should  see.
          Finally, call "done();" to move on to the next test.
        */
         
        var assert = require('assert').strict;
        try {
            assert(response);
        } catch(error) {
            console.log("We should not see this");
        }
        done();
      });
    });
  });


	// In these tests, we will be checking more specific content using object and primitive comparisons that have specific values.
  describe('Server provides listing data as JSON on proper request', function() {
    it('responds correctly to a GET request to "/listings"', function(done) {
      request.get('http://localhost:8080/listings', function(error, response, body) {
      	
      	// First let's assert that the body being passed by the get request actually exists or not with our general assertions, similar to the previous test:
        var assert = require('assert').strict;
        try {
          assert(body);
      } catch(error) {
          console.log("Body does not exist");
      }

			// Next, use deepEquals() for object level comparison. We want to assert that the "listings" JSON provided by the get request is the same as the JSON file provided by the test (bodyData)
			// Finally, call "done();" to move onto the next test
        	bodyData = JSON.parse(body);
          
          assert.deepEqual(bodyData, listings);
          
          done();
      });
    });

	// For the last test, let's use make primitive value comparisons
    it('responds with a 404 error to other GET requests', function(done) {
      request.get('http://localhost:8080/pizza', function(error, response, body) {
      	// First, assert that the status code is what it's supposed to be (exactly 404) if the listing were missing.
        var assert = require('assert');
        
        assert.equal(response.statusCode, 404);

        // For the last assertion, check that the string output is the same message server.js outputs when a listing is missing:
        // Finally, call "done();" to finish!

        assert.equal(body, '404, Page Not Found');
        
        done();
      });
    });
  });

});