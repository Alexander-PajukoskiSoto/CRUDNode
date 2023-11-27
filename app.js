const user = require('./users.json');
const fs = require('fs');
const http = require('http');
const express = require('express');
const { json } = require('body-parser');
editChecker=false;
addChecker= true;

// const app = express();
// const port = 3000;

// const statusMessage ='all good, hehe';
// app.get('/', (req, res) => {
//     res.writeHead(200,[statusMessage]);
// })

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`);
// })

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
    if(editChecker==true){fs.readFile('users.json', 'utf8', function(err, data){

        const newValue = data.replace(user[0].fName, 'luigii');
        
        fs.writeFile('users.json', newValue, function(){
        
        // console.log(newValue);
        
        });
        
        });}

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

// ADD NEW USER
// ADD NEW USER
// ADD NEW USER
// ADD NEW USER
// ADD NEW USER

if(addChecker==true){fs.readFile('users.json', 'utf8', function(err, data){

    newFName = 'Dedan';
    newLName = 'Doodan';
    userList = JSON.parse(data);

    userList.push({fName: newFName,lName: newLName});

    const stringUserList =JSON.stringify(userList);
    console.log(stringUserList);
    fs.writeFile('users.json', stringUserList, function(){

        // console.log(newValue);
        
        });
    
})}



