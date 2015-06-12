/**
 * Created by Cain on 09-06-2015.
 */
function PassportDecorator() {
    var _instance           = {};
    _instance.toString      = function() { return "[server.modules.passport.decorator]"; };

    _instance.decorate      = function(router) {
        router.get('/ejs/login', function (req, res) {
            var username    = "admin";
            res.render('ejs/login/index.ejs', { username: username});
        });
        router.get('/jade/login', function (req, res) {
            var username    = "admin";
            res.render('jade/login/index.jade', { username: username});
        });
    };

    return _instance;
}

module.exports          = new PassportDecorator();