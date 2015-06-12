/**
 * Created by Cain on 09-06-2015.
 */
function EJSDecorator() {
    var _instance           = {};
    _instance.toString      = function() { return "[server.module.ejs.decorator]"; };

    _instance.decorate      = function(app) {
        app.engine('.ejs', require('ejs').renderFile);
    };

    return _instance;
}

module.exports              = new EJSDecorator();