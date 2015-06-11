/**
 * Created by Cain on 09-06-2015.
 */
var express             = require('express');

function StaticFiles(port) {
    var self        = {};
    self.toString   = function() { return "[StaticFiles:" + port + "]"; };

    self.decorate   = function(app, router) {
        router.use('/', express.static(__base + 'client/public'));
    };

    return self;
}

module.exports      = new StaticFiles();