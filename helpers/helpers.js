// import required modules 

const db = require('../db/db.js');
const inquirer = require('inquirer');

// import question classes for inquirer prompts

const { ListQuestion, InputQuestion } = require("./questionClass.js"); 

// function to view all employees

const viewAllEmployees = async () => {
    try {
        const [rows, fields] = await db.query("SELECT employee.id, employee.first_name, employee.last_name, roles.title AS role_title, department.department_name, roles.salary, CONCAT(manager.first_name, ' ', manager.last_name) AS manager_name FROM employee JOIN roles ON employee.role_id = roles.id JOIN department ON roles.department_id = department.id LEFT JOIN employee AS manager ON employee.manager_id = manager.id ORDER BY employee.id ASC");
        console.table(rows);
    } catch (error) {
        console.error(`Failed to fetch employees`, error);
    }
};

// function to add an employee

const addEmployee = async () => {
    try {
        const answers = await inquirer.prompt([
            new InputQuestion("first_name", "Please enter employee's first name:"),
            new InputQuestion("last_name", "Please enter employee's last name:"),
            new ListQuestion("role", "Please select this employee's role", await getRoles()),
            new ListQuestion("manager_name", "Please select employee's manager", await getEmployees())
        ]);

        const [result] = await db.query("INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)", [answers.first_name, answers.last_name, answers.role, answers.manager_name]);

        if (result.affectedRows === 1) {
            console.log(`Added ${answers.first_name + " " + answers.last_name} to database`);
        } else {
            console.log(`Could not add ${answers.first_name + " " + answers.last_name} to database`);
        }
    } catch (error) {
        console.error(`Failed to add employee`, error);
    }
};

// function to update an employee's role

const updateEmployeeRole = async () => {

    try {
        const answers = await inquirer.prompt([
            new ListQuestion("employee_name", "Please select the employee whose role you'd like to update:", await getEmployees()),
            new ListQuestion("employee_role", "Please select the role you'd like to assign to this employee:", await getRoles())
        ]);

        const [result] = await db.query(`UPDATE employee SET role_id = ${answers.employee_role} WHERE id = ${answers.employee_name};`);
        if (result.affectedRows >= 1) {
            console.log(`Updated employee's role`);
        } else {
            console.log(`Could not update employee's role`);
        }
    }

    catch (error) {
        console.log(`Failed to update employee's role`, error);
    }
};

// function to remove an employee

const removeEmployee = async () => {
    try {
        const answers = await inquirer.prompt([
            new ListQuestion("employee_name", "Please select which employee you would like to remove from the database:", await getEmployees())
        ]);

        const [result] = await db.query(`DELETE FROM employee WHERE id = ${answers.employee_name}`);
        if (result.changedRows >= 1) {
            console.log(`Removed ${answers.employee_name} from database`);
        } else {
            console.log(`Employee not found in database`);
        }

    } catch (error) {
        console.log(`Failed to remove employee`, error);
    }
};

// function to view all roles

const viewAllRoles = async () => {
    try {
        const [rows, fields] = await db.query(`SELECT roles.id, roles.title, department.department_name, roles.salary FROM roles JOIN department ON roles.department_id = department.id`);
        console.table(rows);
    } catch (error) {
        console.error(`Failed to fetch roles`, error);
    }
};

// function to add a role 

const addRole = async () => {
    try {
        const departments = await db.query(`SELECT id AS value, department_name AS name FROM department`)
        const answers = await inquirer.prompt([
            new InputQuestion("role", "Please enter the title of the role:"),
            new InputQuestion("salary", "Please enter the salary for this role:"),
            new ListQuestion("department", "Please select the department for the role:", departments[0])
        ]);
        const [result] = await db.query("INSERT INTO roles (title, salary, department_id) VALUES (?, ?, ?)", [answers.role, answers.salary, answers.department]);

        if (result.affectedRows === 1) {
            console.log(`Added ${answers.role} to database`);
        }
    } catch (error) {
        console.error(`Failed to add role`, error);
    }
};

// function to view all departments

const viewAllDepartments = async () => {
    try {
        const [rows, fields] = await db.query(`SELECT id, department_name FROM department`);
        console.table(rows);
    } catch (error) {
        console.error(`Failed to fetch departments`, error);
    }
};

// function to add a department

const addDepartment = async () => {

    const answers = await inquirer.prompt([
    new InputQuestion("department_name", "Please enter department name:")
    ]);

    const departmentName = answers.department_name;

    const [result] = await db.query("INSERT INTO department (department_name) VALUES (?)", [departmentName]);

    if (result.affectedRows === 1) {
        console.log(`Added ${departmentName} to database`);
    } else {
        console.log(`Failed to add department`);
    }
};

// function to end the application when user selects quit 

const quitEmployeeManager = async () => {
    try {
        console.log(`Goodbye!`);
        process.exit();
    } catch (error) {
        console.error(`Failed to exit`, error);
    }
};

// helper function for getting roles 

const getRoles = async () => {
    try {
        const roles = await db.query(`SELECT title AS name, id AS value FROM roles`)
        return roles[0]
    } catch (error) {
        console.error(`Failed to fetch roles`, error);
        return [];
    }
};

// helper function for getting employees 

const getEmployees = async () => {
    try {
        const employee = await db.query(`SELECT CONCAT(first_name, ' ', last_name) AS name, id AS value FROM employee`)
        employee[0].push({ name: "None", value: null });
        return employee[0];
    } catch (error) {
        console.error(`Failed to fetch employees`, error);
        return [];
    }
};

// exports all of the helper functions to be used in index.js file

module.exports = { viewAllEmployees, addEmployee, updateEmployeeRole, removeEmployee, viewAllRoles, addRole, viewAllDepartments, addDepartment, quitEmployeeManager, getRoles, getEmployees }