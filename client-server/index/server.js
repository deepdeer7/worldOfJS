'use sctirct';

let http = require('http'),
    fs = require('fs');


http.createServer(function (request, response) {
    response.writeHead(200, {'Content-Type': 'text/html'});

    let file = fs.createReadStream('./index.html');
    file.pipe(response);

}).listen(8080);


