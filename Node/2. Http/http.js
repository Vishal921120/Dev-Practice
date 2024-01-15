let http = require('http');

http.createServer(function(req,res){
    res.writeHead(200, {'Content-Type' : 'text/html'}); // Http header
    res.write(`${req.url}`);// chunk must be string
    res.end();
}).listen(3000);