/**
 * Created by Cain on 09-06-2015.
 */
var express             = require('express');

function ControllerServer() {
    var self            = {};
    self.id             = Math.round(Math.random() * 100);
    self.toString       = function() { return "[ControllerServer:" + port + "]"; };

    var _router         = express.Router();
    _router.use(function(req, res, next) { console.log(req.ip + ":" + req.originalUrl); next(); });
    self.getRouter      = function() { return _router; };

    var _app            = express();
    self.getApp         = function() { return _app; };
    _app.locals.pretty  = true;
    _app.use(_router);

    self.start          = function(port, views, message404) {
        _router.use(function(req, res, next) {
            res.status(404);
            res.send(message404);
        });

        _app.set('views', views);

        var _server     = _app.listen(port, function() {
            var host    = _server.address().address;
            var port    = _server.address().port;
            console.log('Example app listening at http://%s:%s', host, port);
        });
        self.getServer  = function() { return _server; };
    };

    return self;
}

module.exports      = ControllerServer;