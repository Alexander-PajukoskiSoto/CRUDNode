const user = require('./users.json');
const fs = require('fs');
const http = require('http');
const express = require('express');
const { json } = require('body-parser');
editChecker=false;
addChecker= true;
viewChecker = false;
deleteChecker = false;



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
        userList[1].fName='Mike';
        userList[1].lName='Wazowski';


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
    newFName = 'Lol';
    newLName = 'Lollers';

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

/* READ
   READ
   READ
   READ
   READ
   READ
   READ
 */
if(viewChecker==true){fs.readFile('users.json', 'utf8', function(err, data){

    if(err){
        console.log(err);
    }

    // make list out of json
    let userList = JSON.parse(data);

    userList.forEach(item => {
        console.log(item.fName);
        console.log(item.lName);
    });
})}
/* READ END
   READ END
   READ END
   READ END
   READ END
   READ END
   READ END
 */

//DELETE 
//DELETE 
//DELETE 
//DELETE 
//DELETE 
//DELETE 
//DELETE 

if(deleteChecker==true){fs.readFile('users.json', 'utf8', function(err, data){

    // users.json to array, hehe 
    let userList = JSON.parse(data);
    // delete specific array slot (will later be dynamic with link .get maybe idk)
    userList.splice(1,1);
    // back to string (json)
    let stringUserList = JSON.stringify(userList);
    // formatting
    const stringUserSpace = stringUserList.replaceAll(',',',\n');
    const formatedUserList = stringUserSpace.replaceAll('},','},\n\n');

    // print to file
    fs.writeFile('users.json', formatedUserList, function(){
        // logs
        console.log(formatedUserList);
        });
})};

//DELETE END
//DELETE END
//DELETE END
//DELETE END
//DELETE END
//DELETE END
//DELETE END