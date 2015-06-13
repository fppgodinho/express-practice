"use strict";
var sqlite3     = require('sqlite3');
var authHelper  = require('./server/helpers/auth');

var db      = new sqlite3.Database('./data/users.db');
db.serialize(function() {
    db.run(
            'CREATE TABLE "users" ('
            + '"id" INTEGER PRIMARY KEY AUTOINCREMENT,'
            + '"username" TEXT,'
            + '"password" TEXT'
            + ')'
    );
    db.run("INSERT INTO users('username', 'password') VALUES (?, ?)", ["admin", authHelper.hashPassword("teste")]);
});
db.close();