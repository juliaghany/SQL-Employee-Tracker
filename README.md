# SQL Challenge: Employee Tracker

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Link to demonstration video: 

## Description 

This Node.js command-line application allows users to manage a company's employees using a MySQL database. Users of this application can view, add, and update employees, departments, and roles. Users can remove employees as well. 

## Table Of Contents 
- [Installation](#installation)<br>
- [Usage](#usage)<br>
- [License](#license)<br>
- [Credits](#credits)<br>

## Installation

In order to use this application, you will need to install the following programs on your computer: 

- [Visual Studio Code](https://code.visualstudio.com/) 
- [Node.js](https://nodejs.org/en) 
- [MySQL](https://dev.mysql.com/downloads/mysql/)
- [Git Bash](https://gitforwindows.org/)

Once you've completed installing the above programs onto your computer, initialize the application following these steps:

1. Follow the instructions on this webpage to [clone the repository](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository).
   
2. Next, you'll want to open GitBash and run the following commands in the terminal: 
   
3. "npm init -y" to create a package.json file that will store your dependencies

4. "npm install" to install Node Package Manager.
   
5. "npm i inquirer@8.2.4" to install the inquirer package.

6. "npm i dotenv" to store the name of the database, your username, and your password for MySQL connection.

7. "npm i mysql2" 

8. Once all of the dependencies are installed, you will need to configure your MySQL database. Go [here](https://dev.mysql.com/downloads/mysql/) to install MySQL, and follow the directions listed [here](https://coding-boot-camp.github.io/full-stack/mysql/mysql-installation-guide) for help. 
   
9. After installing MySQL, open the terminal window and run the command "mysql -u root -p" to initialize MySQL. Enter your username and password when prompted to log in. 

10. Once you are logged in, run the command "source db/schema.sql" to create the database schema for this application, and "source db/seeds.sql" to populate the database with inital data. 

## Usage

Now that you've installed the necessary programs and Node.js packages, follow these steps to use this application: 

1. In the command line, make sure that you are in the correct directory and use the command "node index" to invoke the application. 

2. Select an action from the list of options and follow the prompts. Once you have completed following the prompts, you can select another option from the list if you'd like. 

3. When you are done using the application, you can select "Quit" from the list of options and exit the application.

## License 

This application is covered under the [MIT License](https://opensource.org/license/mit/).

## Credits

- My tutor, Alex Gonzalez, helped me create foreign keys in my schmea.sql file. He also helped me create the questionClass.js file and showed me how classes would clean up my helpers.js file. Alex also helped me with my getRoles() and getEmployees() functions and showed me where I could reuse that code in other functions that I created. He also helped me connect to MySQL database.

- My instructor, Diego, helped me figure out how I was unable to console.log the success message for certain functions in my helpers.js file. 

- AskBCS helped me solve the issue I was having on line 108 of my helpers.js file. I was having trouble with my addRole() function; it was setting the department ID to null, which cannot be set to null. AskBCS helped me figure out why that was happening. 

- I referenced Module 12 Activity 17 for schema.sql file

- I referenced Module 12 Activity 26 for seeds.sql file

- I referenced this website for use of console.table: https://developer.mozilla.org/en-US/docs/Web/API/console/table

- I referenced this webiste for using INSERT: https://www.w3schools.com/sql/sql_insert.asp#:~:text=INSERT%20INTO%20Syntax,%2C%20column3%2C%20...

- I referenced this website for the EXIT node process for my quitEmployeeManager() function: https://nodejs.org/api/process.html#event-exit

- I referenced this website for using LEFT JOIN: https://www.w3schools.com/sql/sql_join_left.asp

- I referenced this website for using switch statement: https://www.w3schools.com/js/js_switch.asp

## Questions

If you'd like to view more of my work, please visit my GitHub profile: [juliaghany](https://github.com/juliaghany)

If you have any questions about my work, you can reach me at: juliaghany@msn.com
