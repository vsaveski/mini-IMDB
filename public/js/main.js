

   


/*var button = document.getElementById("button");

var rainbow = ["red","orange","yellow","green","blue","indigo","violet"];


function change() {      
  document.body.style.background = rainbow[Math.floor(7*Math.random())];
}
button.addEventListener("click", change); 



// include the http module
var http = require('http');

// create a webserver
http.createServer(function (req, res) {

    // respond to any incoming http request
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello Vlatko...\nThe server is running and ready!\n');

})

// log what that we started listening on localhost:1337
console.log('Server running at 127.0.0.1:1337'); */

var http = require("http");
var fs = require('fs');
var server = http.createServer(function(request, response) {
  response.writeHead(200, {"Content-Type": "text/html"});

  fs.readFile('index.html', function(err, contents) {
  	console.log(contents);
  	response.write(contents);
  	response.end();
  });

  /* response.write("<html>");
  response.write("<head>");
  response.write("<title>Web page - NODE.js server ..vspimpa</title>");
  response.write("</head>");
  response.write("<body>");
  response.write("<h1>Hello Vlatko..</h1>\n");

  setTimeout(function() {
  	response.write("<h2>...the Server is Up and Running!</h2>");
  	response.write("</body>");
  	response.write("</html>");
  	response.end();
}, 3000);*/

});

server.listen(1337, '127.0.0.1');
console.log('Server running at 127.0.0.1:1337');