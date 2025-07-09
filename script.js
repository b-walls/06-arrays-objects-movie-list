// Arrays holding movie objects for each genre
const comedyMovies = [
  { title: "Deadpool", year: 2016, description: "A wisecracking antihero seeks revenge." },
  { title: "Step Brothers", year: 2008, description: "Two grown men become step brothers and cause chaos." },
  { title: "Anchorman", year: 2004, description: "A 1970s news anchor faces new competition." },
  { title: "The Hangover", year: 2009, description: "Friends try to piece together a wild night in Vegas." }
];

const actionMovies = [
  { title: "Mad Max: Fury Road", year: 2015, description: "A post-apocalyptic road battle for survival." },
  { title: "John Wick", year: 2014, description: "A retired hitman seeks vengeance." },
  { title: "Die Hard", year: 1988, description: "A cop battles terrorists in a skyscraper." },
  { title: "The Dark Knight", year: 2008, description: "Batman faces the Joker in Gotham City." }
];

const dramaMovies = [
  { title: "The Shawshank Redemption", year: 1994, description: "A man finds hope in prison." },
  { title: "Forrest Gump", year: 1994, description: "A simple man witnesses key moments in history." },
  { title: "Fight Club", year: 1999, description: "An office worker forms an underground club." },
  { title: "The Godfather", year: 1972, description: "A mafia family struggles with power and loyalty." }
];

const sciFiMovies = [
  { title: "Inception", year: 2010, description: "A thief enters dreams to steal secrets." },
  { title: "The Matrix", year: 1999, description: "A hacker discovers reality is a simulation." },
  { title: "Interstellar", year: 2014, description: "Astronauts travel through a wormhole to save humanity." },
  { title: "Blade Runner 2049", year: 2017, description: "A new blade runner uncovers hidden secrets." }
];

// Get the genre dropdown and movie recommendations elements
const genreDropdown = document.getElementById("genre");
const movieRecommendations = document.getElementById("movieRecommendations");

// Set up event listener for when the user selects a genre
genreDropdown.addEventListener("change", function() {
  // Get the selected genre
  const selectedGenre = genreDropdown.value;

  // Variable to hold the list of movies
  let movieList = [];

  // Assign movies to the movieList based on the selected genre
  if (selectedGenre === "Comedy") {
    movieList = comedyMovies;
  } else if (selectedGenre === "Action") {
    movieList = actionMovies;
  } else if (selectedGenre === "Drama") {
    movieList = dramaMovies;
  } else if (selectedGenre === "Sci-Fi") {
    movieList = sciFiMovies;
  }

  // Clear previous recommendations
  movieRecommendations.innerHTML = "";

  // Create a new unordered list element
  const ul = document.createElement("ul");

  // Loop through the movieList array and create a list item for each movie
  for (let i = 0; i < movieList.length; i++) {
    // Get the current movie object
    const movie = movieList[i];

    // Create a list item element
    const li = document.createElement("li");

    // Set the text to show title, year, and description
    li.innerText = `${movie.title} (${movie.year}): ${movie.description}`;

    // Add the list item to the unordered list
    ul.appendChild(li);
  }

  // Add the unordered list to the page
  movieRecommendations.appendChild(ul);
});