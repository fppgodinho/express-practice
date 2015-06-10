/**
 * Created by Cain on 09-06-2015.
 */
global.__base   = __dirname + '/';

var helloWorld      = new require(__base + "lessons/helloWorld")(3000);
var staticFiles     = new require(__base + "lessons/staticFiles")(3001);
var basicRouting    = new require(__base + "lessons/basicRouting")(3002);
var simpleRouter    = new require(__base + "lessons/simpleRouter")(3003);

console.log("All up and running!");