/**
 * Created by Cain on 09-06-2015.
 */
function ModuleEJS(port) {
    var self            = {};
    self.toString       = function() { return "[ModuleEJS:" + port + "]"; };

    self.decorate       = function(app, router) {
        router.get('/ejs', function (req, res) {
            res.render('ejs/index.ejs', { title: 'Express Tutorials', message: 'Express Tutorials'});
        });

        app.engine('.ejs', require('ejs').renderFile);
    };

    return self;
}

module.exports          = new ModuleEJS();