"use strict";

window.onload = function () {

    async function fetchGames() {
        const response = await fetch(`https://api.rawg.io/api/games?dates=2019-10-10,2020-10-10&ordering=-added&key=1f10bd3195bf40e7b89a3c607aefcdef`);
        const movies = await response.json();
        return movies;
    }

    fetchGames().then(data => {
        console.log(data);


        let gameName = data.results[0].name;
        let gameImg = data.results[0].background_image;
        let gameMetacritic = data.results[0].metacritic;
        let gameRelease = data.results[0].released;
        let container = document.getElementById("card");
        let htmlString = "";

        htmlString += `

         <img src="${gameImg}" id="gameImg"> 
         <div id="header">
        <h2 id="gameName">${gameName}</h2>
        <h3 id="gameMetacritic">${gameMetacritic}</h3>
        
        </div>
        <p id="gameRelease">Release : ${gameRelease}</p>
        `

        container.insertAdjacentHTML("beforeend", htmlString)

    })

}