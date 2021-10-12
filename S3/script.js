"use strict";

window.onload = function () {


    const btn = document.getElementById("btn");
    const randomNumber = Math.floor(Math.random() * 21)
    console.log(randomNumber);

    const form = document.getElementById("form");
    form.addEventListener("submit", e => {
        e.preventDefault()
        let inputField = document.getElementById("input").value;
        console.log(inputField);
        compareNumber(inputField);
    })

    function compareNumber(nr) {
        let promise = new Promise(function (resolve, reject) {
            if (nr > randomNumber && nr < 20) {
                return reject("The mystery number is lower. Guess again!")
            } else if (nr < randomNumber && nr > 0) {
                return reject("The mystery number is higher. Guess again!")
            } else if (nr == randomNumber) {
                return resolve("You have guessed the mystery number!")
            } else if (nr < 0 || nr > 20) {
                return reject("That is not a valid number (Error)")
            }
        })

        promise.then(
            result => document.getElementById("container").innerText = result,
            error => document.getElementById("container").innerText = error
        )

    }
    console.log(btn)
}