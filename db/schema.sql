-- drop employees_db if it exists 

DROP DATABASE IF EXISTS employees_db;

-- create new database named employee_db

CREATE DATABASE employees_db;

USE employees_db;

-- create department table

CREATE TABLE department (
    id INT PRIMARY KEY auto_increment NOT NULL,
    department_name VARCHAR(30) NOT NULL
);

-- create roles table

CREATE TABLE roles (
    id INT PRIMARY KEY auto_increment NOT NULL,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL NOT NULL,
    department_id INT NOT NULL,
    FOREIGN KEY (department_id) REFERENCES department(id) ON DELETE CASCADE
);

-- create employee table

CREATE TABLE employee (
    id INT PRIMARY KEY auto_increment NOT NULL,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INT NOT NULL,
    manager_id INT,
    FOREIGN KEY (role_id) REFERENCES roles(id) ON DELETE CASCADE,
    FOREIGN KEY (manager_id) REFERENCES employee(id) ON DELETE SET NULL
);

