var mysql = require('mysql');
var inquirer = require('inquirer');

// database connection

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "2",
    database: "Bamazon"
})

connection.connect(function(err) {

	// check if database is connected

    if (err) throw err;

    console.log("connected as id " + connection.threadId);
})