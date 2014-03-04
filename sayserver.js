var http = require("http");
var url  = require('url');

var sys = require('sys');
var exec = require('child_process').exec;

http.createServer(function(request, response) {
    response.writeHead(200, {"Content-Type": "text/plain"});

    var url_parts = url.parse(request.url, true);
    var query = url_parts.query;

    console.log(query.message);

    if (!query.message) return;

    response.write("Saying: ");
    response.write("" + query.message);

    child = exec('(say || espeak)', function (error, stdout, stderr) {
        if (error !== null) {
            console.log('exec error: ' + error);
            console.log("STDOUT: " + stdout);
            console.log("STDERR: " + stderr);
            response.write("ERROR: " + error);
            response.write("STDOUT: " + stdout);
            response.write("STDERR: " + stderr);
        }
    });
    child.stdin.end(query.message);

    response.end("");

    return query.message;
}).listen(8888);
