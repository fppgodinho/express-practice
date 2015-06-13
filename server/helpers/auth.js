"use strict";
var crypto                  = require('crypto');
var _salt                   = "senas";

function AuthHelper() {
    var _instance           = {};
    _instance.toString      = function() { return "[server.helpers.auth]"; };

    _instance.getSalt       = function() { return _salt; };
    
    _instance.hashPassword  = function(password) {
        var hash            = crypto.createHash('sha256');
        hash.update(password);
        hash.update(_salt);
        return hash.digest('hex');
    };
    
    return _instance;
}

module.exports = new AuthHelper();