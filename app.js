const user = require('./users.json');
const fs = require('fs');
const http = require('http');
const express = require('express');
const { json } = require('body-parser');
editChecker=true;
addChecker= false;

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
    if(editChecker==true){
        fs.readFile('users.json', 'utf8', function(err, data){

        const userList = JSON.parse(data)

        const newValue = data.replace(user[5].fName, 'luigii');
        
        fs.writeFile('users.json', newValue, function(){
        
        console.log(newValue);
        
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

    // sample names
    newFName = 'Dedan';
    newLName = 'Doodan';

    // parse get list B)
    userList = JSON.parse(data);

    // push sample data 
    userList.push({fName: newFName,lName: newLName});

    // makes string (json)
    const stringUserList =JSON.stringify(userList);

    // Formatting
    const stringUserSpace = stringUserList.replaceAll(',',',\n')
    formatedUserList = stringUserSpace.replaceAll('},','},\n\n')

    // prints to users.json
    fs.writeFile('users.json', formatedUserList, function(){

         console.log(formatedUserList);

         });
    
});
}



