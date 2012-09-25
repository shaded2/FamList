#!/bin/env node
// Node main application

var express = require('express');
// Create "express" server
var app = module.exports = express.createServer();
var fs = require('fs');
app.mongoose = require('mongoose');

var config = require('./config.js')(app, express);
var models = {};
models.examples = require('./models/example')(app.mongoose);

require('./routes')(app, models, app.mongoose);

//  Get the environment variables we need.
//  If you are running this locally with the IP address or port failing
//  to be resolved. Comment the next two lines and uncomment line next third
//  and fourth line.
var ipaddr  = process.env.OPENSHIFT_INTERNAL_IP;
var port    = process.env.OPENSHIFT_INTERNAL_PORT || 8080;
//var ipaddr  = '127.0.0.1';
//var port    = process.env.PORT || 8080;

if (typeof ipaddr === "undefined") {
    console.warn('No OPENSHIFT_INTERNAL_IP environment variable');
}

//  terminator === the termination handler.
function terminator(sig) {
    if (typeof sig === "string") {
        console.log('%s: Received %s - terminating Node server ...',
            Date(Date.now()), sig);
        process.exit(1);
    }
    console.log('%s: Node server stopped.', Date(Date.now()) );
}

//  Process on exit and signals.
process.on('exit', function() { terminator(); });

['SIGHUP', 'SIGINT', 'SIGQUIT', 'SIGILL', 'SIGTRAP', 'SIGABRT', 'SIGBUS',
    'SIGFPE', 'SIGUSR1', 'SIGSEGV', 'SIGUSR2', 'SIGPIPE', 'SIGTERM'
].forEach(function(element, index, array) {
        process.on(element, function() { terminator(element); });
    });

//  And start the app on that interface (and port).
app.listen(port, ipaddr, function() {
    console.log('%s: Node server started on %s:%d ...', Date(Date.now() ),
        ipaddr, port);
});

//log errors to cosole
app.use(function(err, req, res, next){
    console.error(err.stack);
    res.send(500, 'Something broke!');
});
