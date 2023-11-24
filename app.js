const user = require('./users.json');
const fs = require('fs');

userStream = fs.createWriteStream('./users.json');
loluser = user[0].lNAme='Alexander';
userStream.write(user);

console.log(loluser);
