import Cleave from 'cleave.js';
require('cleave.js/dist/addons/cleave-phone.BE');

window.onload = function () {

    var cleave = new Cleave('.nameInput', {
        prefix: 'STUDENT',
        delimiter: '-',
        blocks: [7, 5, 6],
        uppercase: true
    });

    var cleave = new Cleave('.dateInput', {
        date: true,
        delimiter: '-',
        datePattern: ['d', 'm', 'Y']
    });

    var cleave = new Cleave('.rrnInput', {
        delimiter: '-',
        blocks: [2, 2, 2, 3, 2],

    });

    new Cleave('.ageInput', {
        numeral: true,
        numeralPositiveOnly: true
    });

    var cleave = new Cleave('.phoneInput', {
        phone: true,
        phoneRegionCode: 'BE'
    });

    let form = document.getElementById("form");
    form.addEventListener("submit", function (e) {
        e.preventDefault();

        let nameInput = document.getElementById("nameInput").value;

        let dateInput = document.getElementById("dateInput").value;
        let rrnInput = document.getElementById("rrnInput").value;
        let ageInput = document.getElementById("ageInput").value;
        let phoneInput = document.getElementById("phoneInput").value;
        console.log(nameInput);

        let htmlString = "";
        let containerResult = document.getElementById("containerResult");

        htmlString = htmlString += `
        <p>Your name : ${nameInput}</p>
        <p>Your birthdate: ${dateInput}</p>
        <p>Your RRN : ${rrnInput}</p>
        <p>Your age : ${ageInput}</p>
        <p>Your phone number : ${phoneInput}</p>
    
        `

        containerResult.insertAdjacentHTML("beforeend", htmlString);



    })

}