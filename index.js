var mysql = require("mysql");
var inquirer = require("inquirer");
const table = require("console.table")

// create the connection information for the sql database
var connection = mysql.createConnection({
    host: "localhost",

    // Your port; if not 3306
    port: 3306,

    // Your username
    user: "root",

    // Your password
    password: "Theboss1@",
    database: "employee_db"
});

// connect to the mysql server and sql database
connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId + "\n");
    mainMenu();
});

function mainMenu() {
    inquirer
        .prompt({
            name: "main",
            type: "list",
            message: "Welcome to Employee_Tracker. What would you like to do?",
            choices: [
                "Add Department",
                "Add Role",
                "Add Employee",
                "View Departments",
                "View Employees by Role",
                "View all Employees",
                "Update Roles",
                "Exit"
            ]
        })
        .then(function (answer) {
            // based on their answer, either call the bid or the post functions
            switch (answer.main) {
                case 'Add Department':
                    addDept();
                    break;
                case 'Add Role':
                    addRole()
                    break;
                case 'Add Employee':
                    addEmp()
                case 'View Departments':
                    viewDepts()
                    break;
                case 'View Employees by Role':
                    empRoles()
                    break;
                case 'View all Employees':
                    allEmployees()
                case 'Update Roles':
                    updateRole();
                    break;
                case 'Exit':
                    connection.end();
                    break;
            };
        })
};