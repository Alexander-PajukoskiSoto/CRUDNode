const user = require('./users.json');
const fs = require('fs');
const http = require('http');
const express = require('express');

const app = express();
const port = 3000;

const statusMessage ='all good, hehe';
app.get('/', (req, res) => {
    res.writeHead(200,[statusMessage]);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})

/*  EDIT FILE
    EDIT FILE
    EDIT FILE
    EDIT FILE
    EDIT FILE
    EDIT FILE
    EDIT FILE 
    EDIT FILE
    EDIT FILE
    EDIT FILE
    EDIT FILE   
    EDIT FILE*/ 
fs.readFile('users.json', 'utf8', function(err, data){

const newValue = data.replace(user[0].fName, 'mario');

fs.writeFile('users.json', newValue, function(){

console.log(newValue);

});

});

console.log('You have modified the file ');
/*  EDIT FILE
    EDIT FILE
    EDIT FILE
    EDIT FILE
    EDIT FILE
    EDIT FILE
    EDIT FILE 
    EDIT FILE
    EDIT FILE
    EDIT FILE
    EDIT FILE   
    EDIT FILE*/ 