const inquirer = require("inquirer");
const path = require('path');
const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: 'root',

  // Be sure to update with your own MySQL password!
  password: 'Ratamacue2289!',
  database: 'greatBayDB',
});

const questions = [
{
   
    type: 'list',
    name: 'item',
    message: 'Pick your poison!',
    choices: ["POST ITEM" , "BID ON ITEM", "EXIT"]
},
{
     type: 'input',
     name: 'bid',
     message: 'What is your starting BID?'
 },
 {
     type: 'input',
     name: 'install',
     message: 'What are the installation instructions?',
 },
 {
     type: 'input',
     name: 'usage',
     message: 'What is the usage and or uses for your application'
 },
]


if