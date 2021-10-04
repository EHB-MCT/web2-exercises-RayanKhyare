"use strict";

window.onload = function () {

    console.log("loaded");

    const dishes = [];

    dishes.push(...[{
        id: '1',
        name: 'Chicken wings',
        price: '10'
    }, {
        id: '2',
        name: 'Banana',
        price: '7'
    }])



    console.log(dishes);

    let radiobtn = "";
    const radioContainer = document.getElementById("radioContainer");


    dishes.forEach(dish => {
        console.log(dish);

        radiobtn += `<label for="dishRadio">${dish.name}</label>
            <input type="radio" id="dishRadio" name="arrayForm" value="${dish.name}">`
    })

    radioContainer.insertAdjacentHTML("beforeend", radiobtn);



    document.getElementById("form").addEventListener("submit", e => {
        e.preventDefault();

        // Exercice 4&5 //

        const name = document.getElementById("nameInput").value;
        const email = document.getElementById("emailInput").value;
        // const order = document.getElementById("orderInput").value;

        const radioValue = document.querySelector('input[name="arrayForm"]:checked').value;

        let person = {
            name: name,
            email: email,
            order: radioValue
        }

        function printOrder(name, email, order) {

            let container = document.getElementById("container");

            let htmlString = `<p>The order for the customer <b>${name}</b> is the following: <b>${order}</b>. The customer may be notified by email: <b>${email}</b></p>`;

            container.insertAdjacentHTML("beforeend", htmlString);
            console.log(name);
        }


        printOrder(person.name, person.email, person.order);
    })

    //Exercice 6//











}
window.onload();