let http = require('http');
let dt = require('./custom.js');

http.createServer(function(req,res){
    res.writeHead(200,{'Content-type' : 'text/html'});
    res.write('Today is the :' + dt.myDate());
    res.end();
}).listen(8080);