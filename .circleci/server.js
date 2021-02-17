// Specification for http server
var http = require('http'), 
	fs = require('fs'), 
 	url = require('url'),
  	port = 8080;

/* Global variables */
var listingData, server;

var requestHandler = function(request, response) {
  	var parsedUrl = url.parse(request.url);

  	/*
    	This request handler should send listingData in the JSON format if a GET request 
    	is sent to the '/listings' path. Otherwise, it should send a 404 error.
    
   */
   
   if (parsedUrl.pathname == '/listings') {
  		response.write(listingData);
  		response.end();
  	} 
  	
  	else {
  		response.writeHead(404, {"Content-Type": "text/plain"});
  		response.write('404, Page Not Found');
  		response.end();
  	}
};

// Server initialization
var server = http.createServer(requestHandler);

fs.readFile('listings.json', 'utf8', function(err, data) {
  	/*
   	This callback function should save the data in the listingData variable, 
    	then start the server. 
   */
   // error and data handling
  	if(err) throw err;
  
  	listingData = data;

	// Start the server
  	server.listen(port, function() {
		console.log('Server listening on: http://127.0.0.1:' + port);   
	});
   
});
