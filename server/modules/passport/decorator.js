"use strict";
var passport                = require('passport');
var requestHelper           = include("server.helpers.request");
var passportController      = include("server.modules.passport.controller");

function PassportDecorator() {
    var _instance           = {};
    _instance.toString      = function() { return "[server.modules.passport.decorator]"; };

    _instance.decorate      = function(router) {
        passportController.decorate(router);
        
        router.all('/login', function (req, res) {
            var username    = requestHelper.getParam(req, "username", "admin");
            //
            res.render('jade/login/index.jade', { username: username});
        });
        
        router.all('/login/validate', passport.authenticate('local', {
            successRedirect:    '/home',
            failureRedirect:    '/login',
            failureFlash:       true
        }));
        
        
    };

    return _instance;
}

module.exports          = new PassportDecorator();