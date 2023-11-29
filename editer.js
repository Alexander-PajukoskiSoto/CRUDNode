const mainDiv = document.getElementById('mainDiv');



let users = fetch('./users.json')
    .then((response) => response.json())
    .then((json) =>{
        let urll = window.location.href;

        let editUrll = Number(urll.slice(-1));

        console.log(editUrll);


        const userDiv = document.createElement('div');
        const editBtn = document.createElement('a');

        //Textnodes
        const userDivContent = document.createTextNode(json[editUrll].fName + ' ' + json[editUrll].lName + ' ' + json[editUrll].uName + ' ' + json[editUrll].bDay);

        // appends
        userDiv.append(userDivContent,editBtn);
        mainDiv.appendChild(userDiv);
        editBtn.appendChild(editContent);

        //attributes
        editBtn.setAttribute('href',`edit${index}`);
        editBtn.setAttribute('id',`user${index}`);
    })



