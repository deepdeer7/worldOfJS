let server = require("./server");
let router = require("./router");
let requestHandlers = require("./requestHandlers");

let handle = {};

handle["/"] = requestHandlers.uploadIndex;
handle["/time"] = requestHandlers.time;
handle["/date"] = requestHandlers.date;

server.start(router.route, handle);