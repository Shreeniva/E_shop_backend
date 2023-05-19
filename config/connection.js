'use strict';

const mysql = require('mysql');
const { db_host, db_user, db_password, db_name, timezone, port } = require('./db_config');


const connection = mysql.createConnection({
    host: db_host,
    user: db_user,
    password: db_password,
    database: db_name,
   // port: port,
    //timezone: timezone,
    multipleStatements: true,
    waitForConnections: true,
    connectTimeout: 20000
});
console.log(db_host)
connection.connect(function(err) {
if (err) {
    console.error('error connecting MYSQL : ' + err.stack);
    return;
}
console.log('MYSQL connected as id : ' + connection.threadId);
});

module.exports = connection;
