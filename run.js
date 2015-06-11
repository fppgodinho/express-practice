/**
 * Created by Cain on 09-06-2015.
 */
global.__base           = __dirname + '/';

var moduleJade          = new require(__base + "server/modules/moduleJade");
var moduleEJS           = new require(__base + "server/modules/moduleEJS");
var controllerServer    = new require(__base + "server/controllerServer");

var server              = new controllerServer(3000);
moduleJade.decorate(server.app, server.router);
moduleEJS.decorate(server.app, server.router);
server.start();





console.log("All up and running!");