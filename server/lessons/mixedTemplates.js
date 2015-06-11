/**
 * Created by Cain on 09-06-2015.
 */
var express             = require('express');

// Constructor
function MixedTemplates(port) {
    var self            = {};
    self.id             = Math.round(Math.random() * 100);
    self.toString       = function() { return "[MixedTemplates:" + port + "]"; };

    var router          = express.Router();
    router.use(function(req, res, next) { console.log(req.ip + ":" + req.originalUrl); next(); });

    router.get('/jade', function (req, res) {
        res.render('jade/index.jade', { title: 'Express Tutorials', message: 'Express Tutorials'});
    });    
    
    router.get('/ejs', function (req, res) {
        res.render('ejs/index.ejs', { title: 'Express Tutorials', message: 'Express Tutorials'});
    });    
    
    router.use('/', express.static('client/public'));
    router.use(function(req, res, next) { res.status(404); res.send('Meh!'); });
    self.getRouter      = function() { return router; };

    var app             = express();
    app.locals.pretty   = true;
    app.set('views', __base + 'client/src');
    app.engine('.jade', require('jade').__express);
    app.engine('.ejs', require('ejs').renderFile);
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

module.exports          = MixedTemplates;