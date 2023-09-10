let url = "json.json";
const movies = document.querySelector('.Movies')
fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        data.forEach(card => {
            movies.innerHTML +=
                `<div
            class="movie column is-2 is-8-mobile is-shadowless mt-6 mx-2 p-0">
            <div class="movie_Img"><a href="${card.Movie}" target="_blank">
                <img src="${card.Poster}" alt="img_movie"/></a>
            </div>
            <div class="px-4 content">
            <div class="movie_Info pt-4">
                <h3 class="is-size-5 ">${card.Title}<span>${card.Year}</span></h3>
            </div>
            </div>
            </div>`
        });
    })

const btnSearch = document.querySelector(".search");
const contentSearch = document.querySelector(".input");
console.log(btnSearch);
btnSearch.addEventListener("click", (e) => {
    let inputSearch = contentSearch.value;
    console.log(inputSearch);
    if (inputSearch) {
        movies.innerHTML = "";
        fetch(url)
            .then(response => response.json())
            .then(data => {
                data.forEach(card => {

                    if (!(inputSearch.substr(1, 2) == card.Title.substr(1, 2))) {
                        console.log(movies);
                    }
                    else {

                        movies.innerHTML +=
                            `<div
            class="movie column is-2 is-8-mobile is-shadowless mt-6 mx-2 p-0">
            <div class="movie_Img"><a href="${card.Movie}" target="_blank">
                <img src="${card.Poster}" alt="img_movie"/></a>
            </div>
            <div class="px-4 content">
            <div class="movie_Info pt-4">
                <h3 class="is-size-5 ">${card.Title}<span>${card.Year}</span></h3>
            </div>
            </div>
            </div>`}
                })
            })
    }
    contentSearch.value = "";

})

