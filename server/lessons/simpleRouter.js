/**
 * Created by Cain on 09-06-2015.
 */
var express         = require('express');

// Constructor
function SimpleRouter(port) {
    var self        = {};
    self.id         = Math.round(Math.random() * 100);
    self.toString   = function() { return "[SimpleRouter:" + port + "]"; };

    var router      = express.Router();
    router.use(function(req, res, next) { console.log(req.ip + ":" + req.originalUrl); next(); });
    router.use('/', express.static('client/public'));
    router.use(function(req, res, next) { res.status(404); res.send('Meh!'); });
    self.getRouter  = function() { return router; };

    var app         = express();
    app.use(router);
    self.getApp     = function() { return app; };

    var server      = app.listen(port, function() {
        var host    = server.address().address;
        var port    = server.address().port;
        console.log('Example app listening at http://%s:%s', host, port);
    });
    self.getServer  = function() { return server; };

    return self;
}

module.exports      = SimpleRouter;