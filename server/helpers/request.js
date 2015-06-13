'use strict';

function RequestHelper() {
    var _instance       = {};
    _instance.toString      = function() { return "[server.helpers.request]"; };

    _instance.getParam  = function (req, name, defVal) {
        if (req.hasOwnProperty("body") && req.body && req.body.hasOwnProperty(name) && req.body[name]) return req.body[name];
        if (req.hasOwnProperty("query") && req.query && req.query.hasOwnProperty(name) && req.query[name]) return req.query[name];
        //
        return defVal;
    };
    return _instance;
}



module.exports = new RequestHelper();
