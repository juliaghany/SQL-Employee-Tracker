const db = require('../db/db.js');
const inquirer = require('inquirer');

const viewAllEmployees = async () => {
    try {
        const [rows, fields] = await db.query('SELECT employee.id, employee.first_name, employee.last_name, roles.title, department.department_name, roles.salary, employee.manager_id FROM employee JOIN roles ON employee.id = roles.id JOIN department ON roles.department_id = department.id');
        console.table(rows);
    } catch (error) {
        console.error('Failed to fetch employees', error);
    }
};
// add first name, last name, role (choices), manager, console.log Added (employee name) to database 
// const addEmployee = async () => {
//     try {
//         const answers = await inquirer.prompt([
//             {
//                 type: "input",
//                 name: "first_name",
//                 message: "Enter employee's first name:"
//             }
//         ])
//     }
// };

const updateEmployeeRole = async () => {
    // add code here
    // choose employee to update, choose role to assign selected employe console.log Updated employee's role 
};

const viewAllRoles = async () => {
    try {
        const [rows, fields] = await db.query('SELECT roles.id, roles.title, department.department_name, roles.salary FROM roles JOIN department ON roles.department_id = department.id');
        console.table(rows);
    } catch (error) {
        console.error('Failed to fetch roles', error);
    }
};

const addRole = async () => {
    // add code here
    // Name of role, salary of role, what department does it belong to, console.log Added (role) to database
};

const viewAllDepartments = async () => {
    try {
        const [rows, fields] = await db.query('SELECT id, department_name FROM department');
        console.table(rows);
    } catch (error) {
        console.error('Failed to fetch departments', error);
    }
};

const addDepartment = async () => {

    const answers = await inquirer.prompt([
        {
            type: "input",
            name: "department_name",
            message: "Please enter department name:"
        }
    ]);

    const departmentName = answers.department_name;

    const [result] = await db.query('INSERT INTO department (department_name) VALUES (?)', [departmentName]);

    if (result.affectedRows === 1) {
        console.log(`Added ${departmentName} to database`);
    } else {
        console.log("Failed to add department")
    }
};

const quitEmployeeManager = async () => {
    try {
        console.log("Goodbye!");
        process.exit();
    } catch (error) {
        console.error("Failed to exit", error)
    }
};

module.exports = { viewAllEmployees, updateEmployeeRole, viewAllRoles, addRole, viewAllDepartments, addDepartment, quitEmployeeManager }