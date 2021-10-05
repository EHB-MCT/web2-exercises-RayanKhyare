"use strict";
import Team from "./Team.js";


let team1 = new Team();



class Pokemon {
    constructor() {

    }

    fetcher() {

        fetch(`https://pokeapi.co/api/v2/pokemon?limit=151`)
            .then(response => response.json())
            .then(data => {
                console.log(data.results[0].url);

                let container = document.getElementById("boxes");


                let list = data.results;

                list.forEach(poke => {
                    fetch(poke.url)
                        .then(response => response.json())
                        .then(data => {
                            console.log(data);

                            let pokeName = data.name;
                            let pokeImg = data.sprites.front_default;
                            let pokeType = data.types[0].type.name
                            let htmlString = ""
                            htmlString += `
                    <section id="box">
                             <img src="${pokeImg}">
                              <h2>${pokeName}</h2>
                             <p>${pokeType}</p>
                         <button type="button">Add</button>
                    </section> `
                            container.insertAdjacentHTML("beforeend", htmlString);

                        })
                })
            })
    }

    refreshteam() {

    }
}



let pokemon = new Pokemon()

pokemon.fetcher();