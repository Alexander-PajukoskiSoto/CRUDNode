const mainDiv = document.getElementById('mainDiv');
let users = fetch('./users.json')
    .then((response) => response.json())
    .then((json) => json.forEach(item => {
        const userDiv = document.createElement('div');
        const userDivContent = document.createTextNode(item.fName + ' ' + item.lName + ' ' + item.uName + ' '
        + item.bDay)

        userDiv.appendChild(userDivContent);
        mainDiv.appendChild(userDiv)}));



