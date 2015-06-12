/**
 * Created by Cain on 09-06-2015.
 */
"use strict";
function PassportDecorator() {
    var _instance           = {};
    _instance.toString      = function() { return "[server.modules.passport.decorator]"; };

    _instance.decorate      = function(router) {
        router.all('/login', function (req, res) {
            if (req.params || req.body || req.query) console.log("\nPARAMS:" + req.params.username, "\nBODY:" + req.body +"\nQUERY:"+ req.query.username);
            var username    = "admin";
            res.render('jade/login/index.jade', { username: username});
        });
    };

    return _instance;
}

module.exports          = new PassportDecorator();