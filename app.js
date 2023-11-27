const user = require('./users.json');
const fs = require('fs');
const http = require('http');
const express = require('express');
const { json } = require('body-parser');
editChecker=false;
addChecker= false;
viewChecker = true;
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

        // parse, make array
        const userList = JSON.parse(data);

        // replace from array
        userList[1].fName='123123';
        userList[1].lName='akjndkjad';


        // stringify
        const newValueString = JSON.stringify(userList);

        //Formatting
        const stringUserSpace = newValueString.replaceAll(',',',\n')
        const formatedUserList = stringUserSpace.replaceAll('},','},\n\n')


        console.log(formatedUserList);

        fs.writeFile('users.json', formatedUserList, function(){

        // console.log(newValue);

        });

        });}

/*  EDIT FILE END
    EDIT FILE END
    EDIT FILE END
    EDIT FILE END
    EDIT FILE END
    EDIT FILE END
    EDIT FILE END
    EDIT FILE END
    EDIT FILE END*/

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
    const formatedUserList = stringUserSpace.replaceAll('},','},\n\n')

    // prints to users.json
    fs.writeFile('users.json', formatedUserList, function(){

         console.log(formatedUserList);

         });

});
}


// ADD NEW USER END 
// ADD NEW USER END 
// ADD NEW USER END 
// ADD NEW USER END 
if(viewChecker==true){fs.readFile('users.json', 'utf8', function(err, data){

    // make list out of json
    userList = JSON.parse(data);

    userList.forEach(item => {
        console.log(item.lName);
    });
})}
