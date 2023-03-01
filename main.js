const searchButton = document.querySelector("button");
const input = document.querySelector(".input");
const display = document.querySelector(".display-area-container");
const message = document.querySelector(".message");

async function getMovies() {
  try {
    if (!input.value) {
      alert("Please enter a movie name");
    }
    let response = await fetch(
      `http://www.omdbapi.com/?apikey=6aaaa222&s=${input.value}`
    );
    let data = await response.json();
    if (data.Response === "False") {
      message.textContent = data.Error;
    }

    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
}

const createMovieCard = (movie) => {
  const { Title, Poster, Year, Type } = movie;

  console.log(Title, Poster, Year, Type);
  const card = document.createElement("div");
  card.classList.add("movie-card");

  const imgElem = document.createElement("img");
  imgElem.src = Poster;
  imgElem.alt = " movie poster";
  card.appendChild(imgElem);

  const titleElem = document.createElement("h2");
  titleElem.textContent = Title;
  titleElem.classList.add("title");
  card.appendChild(titleElem);

  const typeElem = document.createElement("p");
  typeElem.textContent = Type;
  card.appendChild(typeElem);

  const yearElem = document.createElement("p");
  yearElem.textContent = Year;
  card.appendChild(yearElem);

  return card;
};

const displayMovies = async () => {
  const payload = await getMovies();
  if (payload.Response === "False") {
    display.textContent = payload.Error;
  } else {
    display.textContent = "";
  }

  const fragment = document.createDocumentFragment();
  payload.Search.forEach((movie) => {
    const card = createMovieCard(movie);
    fragment.appendChild(card);
  });

  display.appendChild(fragment);
};

searchButton.addEventListener("click", displayMovies);
