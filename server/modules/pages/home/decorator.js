"use strict";

function HomePage() {
    var _instance = {};
    _instance.toString      = function() { return "[server.modules.pages.home.decorator]"; };

    _instance.decorate      = function(router) {
        router.all('/home', function (req, res) {
            res.render('jade/home/index.jade');
        });
    };
    
    return _instance;
}


module.exports = new HomePage();