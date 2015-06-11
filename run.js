/**
 * Created by Cain on 09-06-2015.
 */
global.__base           = __dirname + '/';

var express             = require('express');
var moduleJade          = new require(__base + "server/modules/moduleJade");
var moduleEJS           = new require(__base + "server/modules/moduleEJS");
var moduleStaticFiles   = new require(__base + "server/modules/moduleStaticFiles");
var controllerServer    = new require(__base + "server/controllerServer");


var server              = new controllerServer();
moduleJade.decorate(server.getApp(), server.getRouter());
moduleEJS.decorate(server.getApp(), server.getRouter());
moduleStaticFiles.decorate(server.getApp(), server.getRouter());
server.start(3000, __base + 'client/src', '(404) What ya looking for?!');
