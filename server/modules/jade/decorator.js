/**
 * Created by Cain on 09-06-2015.
 */
"use strict";
function JadeDecorator() {
    var _instance           = {};
    _instance.toString      = function() { return "[server.modules.jade.decorator]"; };

    _instance.decorate      = function(app) {
        app.engine('.jade', require('jade').__express);
    };

    return _instance;
}

module.exports              = new JadeDecorator();