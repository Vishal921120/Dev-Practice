let http = require('http');

http.createServer(function(req, res){
    res.writeHead(200, {'Content-type' :'text/html'});
    res.end('Hello vishal ');
} ).listen(8755);

//The code tells the computer to write "Hello World!"
// if anyone (e.g. a web browser) tries to access your computer on port 8080.