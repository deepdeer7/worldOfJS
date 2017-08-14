'use strict';

let fs = require('fs');

function getTime (response) {
	response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("14:06");
      alert('s');
    s();
    response.end();
}

function s () {
    console.log('s');
}

function getDate (response) {
  	response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("10/20/2017");
    response.end();
}

function uploadIndex (response) {
    fs.readFile("./index.html", function (error, file) {
        if (error) {
            response.writeHead(500, {"Content-Type": "text/plain"});
            response.write(error + "\n");
            response.end();
        } else {
            response.writeHead(200, {"Content-Type": "text/html"});
            response.write(file);
            response.end();
        }
  });
}

exports.time = getTime;
exports.date = getDate;
exports.uploadIndex = uploadIndex;