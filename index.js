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
            // based on their answer, call the appropriate function
            switch (answer.main) {
                case 'Add Department':
                    addDept();
                    break;
                case 'Add Role':
                    addRole();
                    break;
                case 'Add Employee':
                    addEmp();
                case 'View Departments':
                    viewDepts();
                    break;
                case 'View Employees by Role':
                    empRoles();
                    break;
                case 'View all Employees':
                    allEmployees();
                    break;
                case 'Update Roles':
                    updateRole();
                    break;
                case 'Exit':
                    connection.end();
                    break;
            };
        })
};

function allEmployees() {
    connection.query("SELECT first_name, last_name FROM employee", function (err, results) {
        if (err) throw err;
        console.table(results);
    })
}

function addDept() {
    inquirer.prompt([
        {
            name: "department",
            type: "input",
            message: "What is the name of the department?",
        }])
        .then(function (answer) {

            connection.query("INSERT INTO department SET ?", { name: answer.department }, function (err) {
                if (err) throw err;
                console.log("Dept. Sucessfully added.");
            });

        })
};

function addRole() {
    inquirer.prompt([
        {
            name: "role",
            type: "input",
            message: "What is the name of the role?",
        }])
        .then(function (answer) {

            connection.query("INSERT INTO department SET ?", { name: answer.department }, function (err) {
                if (err) throw err;
                console.log("Dept. Sucessfully added.");
            });
            mainMenu();

        })
};

function viewDepts() {
    connection.query("SELECT name FROM department", function (err, results) {
        if (err) throw err;
        console.table(results);
    });
    mainMenu();
}