/**
 * Created by Cain on 09-06-2015.
 */
function ModuleJade() {
    var self            = {};
    self.toString       = function() { return "[ModuleJade:" + port + "]"; };

    self.decorate       = function(app, router) {
        router.get('/jade', function (req, res) {
            res.render('jade/index.jade', { title: 'Express Tutorials', message: 'Express Tutorials'});
        });

        app.engine('.jade', require('jade').__express);
    };

    return self;
}

module.exports          = new ModuleJade();