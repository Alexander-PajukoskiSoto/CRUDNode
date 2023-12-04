const mainDiv = document.getElementById('mainDiv');
let users = fetch('./users.json')
    .then((response) => response.json())
    .then((json) => json.forEach((item,index) => {
        const userDiv = document.createElement('div');
        const editBtn = document.createElement('a');

        //Textnodes
        const userDivContent = document.createTextNode(item.fName + ' ' + item.lName + ' ' + item.uName + ' '
        + item.bDay);
        const editContent = document.createTextNode('edit');

        // appends
        userDiv.append(userDivContent,editBtn);
        mainDiv.appendChild(userDiv);
        editBtn.appendChild(editContent);

        //attributes
        editBtn.setAttribute('href',`edit/${index}`);
        editBtn.setAttribute('id',`user${index}`);
    }));


