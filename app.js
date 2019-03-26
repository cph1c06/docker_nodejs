const http = require('http');
const os = require('os');

console.log("Kubia server starting...");

var handler = function(request, response) {
  console.log("Received requewst from " + request.connection.remoteAddress);
  response.writeHead(200);
  response.end("You've hit " + os.hostname() + "\n");
};
//var sleep = require('system-sleep');
//sleep(10*1000);

var Rollbar = require("rollbar");
var rollbar = new Rollbar({
  accessToken: '632b93a2e0924631be6e3fd4a9195ab7',
  captureUncaught: true,
  captureUnhandledRejections: true
});

// record a generic message and send it to Rollbar
rollbar.log("Hello world!");


var www = http.createServer(handler);
www.listen(8080);
