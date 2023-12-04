const mainDiv = document.getElementById('mainDiv');
const firstNameInp = document.getElementById('fName');
const lastNameInp = document.getElementById('lName');
const uNameInp = document.getElementById('uName');
const bDayInp = document.getElementById('bDay');



let users = fetch('../users.json')
    .then((response) => response.json())
    .then((json) =>{
        let urll = window.location.href;

        let editUrll = Number(urll.slice(-1));

        console.log(editUrll);

        //Elements
        const userDiv = document.createElement('div');

        // appends

        firstNameInp.value=json[editUrll].fName;
        lastNameInp.value=json[editUrll].lName;
        uNameInp.value=json[editUrll].uName;
        bDayInp.value=json[editUrll].bDay;

    })



