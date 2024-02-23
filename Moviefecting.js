let api = "https://www.omdbapi.com/?apikey=e6fbe56b&t="

function searchmovie() {
    let moviename = document.getElementById("mysearch")
    let title = document.getElementById('movietitle')
    let date = document.getElementById('date')
    let runtime = document.getElementById('runtime')
    let genre = document.getElementById('genre')
    let director = document.getElementById('director')
    let writer = document.getElementById('writer')
    let actors = document.getElementById('actors')
    let discription = document.getElementById('discription')
    let language = document.getElementById('language')
    let awards = document.getElementById('awards')
    let country = document.getElementById('country')
    let collections = document.getElementById('collections')
    let poster = document.getElementById('poster')

    let query = api + moviename.value;

    fetch(query).then((data) => {
        return data.json()
    }).then((data) => {
        console.log(data);
        title.innerText = data.Title;
        runtime.innerText = data.Runtime;
        date.innerText = data.Released
        genre.innerText = data.Genre
        director.innerText = data.Director
        writer.innerText = data.Writer
        actors.innerText = data.Actors
        discription.innerText = data.Plot
        language.innerText = data.Language
        awards.innerText = data.Awards
        country.innerText = data.Country
        collections.innerText = data.BoxOffice
        poster.src=data.Poster
    })

    moviename.value = ""
}