/**
 * Created by Cain on 09-06-2015.
 */
var express         = require('express');

// Constructor
function BasicRouting(port) {
    var self        = {};
    self.id         = Math.round(Math.random() * 100);
    self.toString   = function() { return "[BasicRouting:" + port + "]"; };

    var app         = express();
    // respond with "Hello World!" on the homepage
    app.get('/', function (req, res) {
        res.send('Hello World!');
    });

    // accept POST request on the homepage
    app.post('/', function (req, res) {
        res.send('Got a POST request');
    });

    // accept PUT request at /user
    app.put('/user', function (req, res) {
        res.send('Got a PUT request at /user');
    });

    // accept DELETE request at /user
    app.delete('/user', function (req, res) {
        res.send('Got a DELETE request at /user');
    });
    self.getApp     = function() { return app; };

    var server      = app.listen(port, function() {
        var host    = server.address().address;
        var port    = server.address().port;
        console.log('Example app listening at http://%s:%s', host, port);
    });
    self.getServer  = function() { return server; };

    return self;
}

module.exports      = BasicRouting;
