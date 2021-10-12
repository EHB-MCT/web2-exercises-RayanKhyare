"use strict"

window.onload = function () {



    document.getElementById("searchform").addEventListener("submit", function (e) {
        e.preventDefault();

        let inputTitle = document.getElementById("inputTitle").value;
        console.log(inputTitle);

        async function fetchMovie() {
            const response = await fetch(`http://www.omdbapi.com/?t=${inputTitle}&apikey=3ef24b4d`);
            const movies = await response.json();
            return movies;
        }

        fetchMovie().then(movie => {
            console.log(movie);

        


            let container = document.getElementById("container");
            let htmlString = ""

            htmlString += ` <div class="card mb-3" style="max-width: 540px;">
            <div class="row no-gutters">
                <div class="col-md-4">
                    <img src="${movie.Poster}" class="card-img" alt="...">
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                    <button type="addRuntime" class="btn btn-primary mb-2">+</button>
                        <h5 class="card-title">${movie.Title}</h5>
                        <p class="card-text"><b>Director : ${movie.Director}</b></p>
                        <p class="card-text">${movie.Plot}</p>

                        <p class="card-text"><b>Runtime :</b> ${apiRuntime}</p>
                        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                </div>
            </div>
        </div>`
            container.insertAdjacentHTML("beforeend", htmlString);
        })


    })

}