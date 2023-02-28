const movieCard = document.querySelector(".movie-card");
const title = document.querySelector(".title");
const poster = document.querySelector(".poster");
const year = document.querySelector(".year");

async function getMovies() {
  try {
    let response = await fetch(
      `http://www.omdbapi.com/?apikey=6aaaa222&s=rambo`
    );
    let data = await response.json();
    console.log(data);

    data.Search.map((movie) => {
      title.textContent = movie.Title;
      poster.src = movie.Poster;
      year.textContent = movie.Year;
    });
  } catch (error) {
    console.log(error);
  }
}

getMovies();
// movieCard = {
//   title: data.Search.Title,
//   poster: data.Search.Poster,
//   genre: data.Search.Genre,
//   rating: data.Search.imdbRating
// };
