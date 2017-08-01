function getTime (response) {
	response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("14:06");
    response.end();
}

function getDate (response) {
  	response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("10/20/2017");
    response.end();
}

exports.time = getTime;
exports.date = getDate;