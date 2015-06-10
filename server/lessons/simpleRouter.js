/**
 * Created by Cain on 09-06-2015.
 */
var express     = require('express');
var router      = express.Router();
var app         = express();

// Log access:
router.use(function(req, res, next) { console.log(req.ip + ":" + req.originalUrl); next(); });

// Static Assets
router.use('/', express.static('client/public'));

// 404
router.use(function(req, res, next) { res.status(404); res.send('Meh!'); });

app.use(router);
var server      = app.listen(3000, function() {
    var host    = server.address().address;
    var port    = server.address().port;
    console.log('Example app listening at http://%s:%s', host, port);
});
