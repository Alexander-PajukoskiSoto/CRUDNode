const user = require('./users.json');
const fs = require('fs');
const http = require('http');
const multer = require("multer");
let upload = multer({ dest: "uploads/" });


const bodyParser = require('body-parser');

const express = require('express');
const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
    extended: true
  }));
// parse application/json
app.use(bodyParser.json())

editChecker=false;
addChecker= false;
viewChecker = false;
deleteChecker = false;


const data = fs.readFileSync('users.json', 'utf8');
const users = JSON.parse(data);

const serveIndex = require('serve-index');
const { url } = require('inspector');

app.use(express.static(__dirname));

app.use(express.json());

app.use(bodyParser.urlencoded({extended:true}));

app.use(bodyParser.json());


app.get('/', (req, res) => {
    res.sendFile(__dirname+"/index.html");
});
// SHOW USER 
app.get('/show', (req, res) => {
    res.sendFile(__dirname+"/html/show.html");
  });
// CREATE USER
app.get('/create', (req, res) => {
    res.sendFile(__dirname+"./html/create.html");
});
app.post('/create',(req,res)=>{
    console.log(req.body,'hhehe');


        // sample names
        newFName = req.body.fName;
        newLName = req.body.lName;
        newUName = req.body.uName;
        newBDay = req.body.bDay;

        
        // push sample data
        users.push({fName: newFName,lName: newLName, uName: newUName, bDay: newBDay});

        // makes string (json)
        const stringUserList =JSON.stringify(users);

        // Formatting
        const stringUserSpace = stringUserList.replaceAll(',',',\n')
        const formatedUserList = stringUserSpace.replaceAll('},','},\n\n')

        // prints to users.json
        fs.writeFile('users.json', formatedUserList, function(){

        console.log(formatedUserList);

        });
        res.sendFile(__dirname+"/html/create.html")
    


  
})
// EDIT USER 
app.get('/edit', (req, res) => {
    res.sendFile(__dirname+"/html/edit.html");
});

app.get('/edit', (req, res) => {
    res.sendFile(__dirname + '/html/editer.html');
  
    const query = url.parse(req.url, true).query;
    selectedUser = users[query.user];
    console.log(selectedUser);
  });



app.get('/users',(req,res)=>{
    res.json(users);
   });

app.listen(3030, () => console.log('Example app is listening on port 3030.'));


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