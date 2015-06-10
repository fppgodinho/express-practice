/**
 * Created by Cain on 09-06-2015.
 */
var express             = require('express');

// Constructor
function JadeTemplates(port) {
    var self            = {};
    self.id             = Math.round(Math.random() * 100);
    self.toString       = function() { return "[JadeTemplates:" + port + "]"; };

    var router          = express.Router();
    router.use(function(req, res, next) { console.log(req.ip + ":" + req.originalUrl); next(); });
    router.get('/', function (req, res) {
        res.render('index', { title: 'Express Tuturials', message: 'Express Tuturials'});
    });
    router.use('/', express.static('client/public'));
    router.use(function(req, res, next) { res.status(404); res.send('Meh!'); });
    self.getRouter      = function() { return router; };

    var app             = express();
    app.locals.pretty   = true;
    app.set('views', __base + 'client/src/views');
    app.set('view engine', 'jade');
    app.use(router);
    self.getApp         = function() { return app; };

    var server          = app.listen(port, function() {
        var host        = server.address().address;
        var port        = server.address().port;
        console.log('Example app listening at http://%s:%s', host, port);
    });
    self.getServer      = function() { return server; };

    return self;
}

module.exports      = JadeTemplates;