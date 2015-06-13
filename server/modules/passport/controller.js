"use strict";
var LocalStrategy           = require('passport-local').Strategy;
var passport                = require('passport');
var sqlite3                 = require('sqlite3');
var authHelper              = include('server/helpers/auth');
var db                      = new sqlite3.Database(__root + 'data/users.db');

function PassportController() {
    var strategy            = new LocalStrategy(
        function (username, password, done) {
            var hash = authHelper.hashPassword(password);
            db.get('SELECT username, id FROM users WHERE username = ? AND password = ?', username, hash, function(err, row) {
                if (!row) return done(null, false);
                return done(null, row);
            });
        }
    );
    passport.use(strategy);
    passport.serializeUser(function(user, done) {
        return done(null, user.id);
    });
    passport.deserializeUser(function(id, done) {
        db.get('SELECT id, username FROM users WHERE id = ?', id, function(err, row) {
            if (!row) return done(null, false);
            return done(null, row);
        });
    });    
    
    var _instance = {};
    _instance.toString      = function() { return "[server.modules.passport.controller]"; };
    _instance.decorate      = function(router) {
        router.use(passport.initialize());
        router.use(passport.session());
    };
    
    return _instance;
}

module.exports = new PassportController();