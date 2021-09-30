"use strict";


window.onload = function () {

    console.log("loaded");

    document.getElementById("form").addEventListener("submit", e => {
        e.preventDefault();

        // Exercice 4&5 //

        // const name = document.getElementById("nameInput").value;
        // const email = document.getElementById("emailInput").value;
        // const order = document.getElementById("orderInput").value;

        // let person = {
        //     name: name,
        //     email: email,
        //     order: order
        // }

        // function printOrder(name, email, order) {

        //     let container = document.getElementById("container");

        //     let htmlString = `<p>The order for the customer <b>${name}</b> is the following: <b>${order}</b>. The customer may be notified by email: <b>${email}</b></p>`;

        //     container.insertAdjacentHTML("beforeend", htmlString);
        //     console.log(name);
        // }

        // printOrder(person.name, person.email, person.order);
    })

    //Exercice 6//


    document.getElementById("radioForm").addEventListener("submit", e => {
        e.preventDefault();

        const dishes = [];
        dishes.push({
            id: '1',
            name: 'Chicken wings',
            price: '10'
        })

        const radio = document.querySelectorAll('input[name="arrayForm"]');
        console.log(radio);

        console.log(dishes[0].name);
    })






}
window.onload();