/**
 * Created by Cain on 09-06-2015.
 */
"use strict";
function Bootstrap(root, assets, views){
    global.__root           = root;
    global.include          = function(module) {
        return require(root + module.split(".").join("/"));
    };
    
    var controllerExpress   = include("server.modules.express.controller");
    var moduleJade          = include("server.modules.jade.decorator");
    var moduleEJS           = include("server.modules.ejs.decorator");
    var modulePassport      = include("server.modules.passport.decorator");

    var server              = new controllerExpress();
    server.setViews(root + views);                          // Sets the views root folder
    moduleJade.decorate(server.getApp());                   // Maps the .jade views to the Jade engine
    moduleEJS.decorate(server.getApp());                    // Maps the .ejs views to the EJS engine
    modulePassport.decorate(server.getRouter());            // Routes login targets to the login views
    server.setStatic(root + assets);
    server.set404('(404) What ya looking for?!');
    server.bindTo(3000);
}

module.exports              = Bootstrap;