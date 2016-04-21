'use strict';

var http = require('http');
var dispatcher = require('httpdispatcher');
var fs = require('fs');
var server = null;

const PORT = 8080;

function handleRequest(request, response) {
    try {
        console.log(request.url);
        dispatcher.dispatch(request, response);
    } catch (err) {
        console.log(err);
    }
}

server = http.createServer(handleRequest);

dispatcher.onGet("/", function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    fs.readFile('./index.html', function (err, data) {
        if (err) {
            throw err;
        }
        res.write(data);
        res.end();
    });
});

dispatcher.onGet("/layout.css", function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/css' });
    fs.readFile('./layout.css', function (err, data) {
        if (err) {
            throw err;
        }
        res.write(data);
        res.end();
    });
});

dispatcher.onGet("/script.js", function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/javascript' });
    fs.readFile('./script.js', function (err, data) {
        if (err) {
            throw err;
        }
        res.write(data);
        res.end();
    });
});

dispatcher.onGet("/data", function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    fs.readFile('./data.html', function (err, data) {
        if (err) {
            throw err;
        }
        res.write(data);
        res.end();
    });
});

server.listen(PORT, function () {
    console.log("Server listening on: http://localhost: " + PORT);
});