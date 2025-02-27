// Arrays holding movie objects for each genre
const comedyMovies = [
  { title: "Deadpool", year: 2016, description: "A wisecracking mercenary gets experimented on and becomes immortal but ugly." },
  { title: "Step Brothers", year: 2008, description: "Two aimless middle-aged losers still living at home are forced against their will to become roommates when their parents marry." },
  { title: "Anchorman", year: 2004, description: "Ron Burgundy is San Diego's top-rated newsman in the male-dominated broadcasting of the 1970s, but that's all about to change for Ron and his cronies when an ambitious woman is hired as a new anchor." },
  { title: "The Hangover", year: 2009, description: "Three buddies wake up from a bachelor party in Las Vegas, with no memory of the previous night and the bachelor missing." }
];
const actionMovies = [
  { title: "Mad Max: Fury Road", year: 2015, description: "In a post-apocalyptic wasteland, Max teams up with a mysterious woman, Furiosa, to try and survive." },
  { title: "John Wick", year: 2014, description: "An ex-hitman comes out of retirement to track down the gangsters that killed his dog and took everything from him." },
  { title: "Die Hard", year: 1988, description: "An NYPD officer tries to save his wife and several others taken hostage by German terrorists during a Christmas party at the Nakatomi Plaza in Los Angeles." },
  { title: "The Dark Knight", year: 2008, description: "When the menace known as the Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham." }
];
const dramaMovies = [
  { title: "The Shawshank Redemption", year: 1994, description: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency." },
  { title: "Forrest Gump", year: 1994, description: "The presidencies of Kennedy and Johnson, the events of Vietnam, Watergate, and other historical events unfold from the perspective of an Alabama man with an IQ of 75." },
  { title: "Fight Club", year: 1999, description: "An insomniac office worker and a devil-may-care soap maker form an underground fight club that evolves into much more." },
  { title: "The Godfather", year: 1972, description: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son." }
];
const sciFiMovies = [
  { title: "Inception", year: 2010, description: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O." },
  { title: "The Matrix", year: 1999, description: "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers." },
  { title: "Interstellar", year: 2014, description: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival." },
  { title: "Blade Runner 2049", year: 2017, description: "A young blade runner's discovery of a long-buried secret leads him to track down former blade runner Rick Deckard, who's been missing for thirty years." }
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

  // Display the list of movies on the page
  movieRecommendations.innerHTML = ""; // Clear previous recommendations

  // Create a new unordered list element
  const ul = document.createElement("ul");

  // Loop through the movieList array and create list items
  for (let i = 0; i < movieList.length; i++) {
    const li = document.createElement("li");
    li.textContent = `${movieList[i].title} (${movieList[i].year}): ${movieList[i].description}`;
    ul.appendChild(li);
  }

  // Append the unordered list to the movieRecommendations div
  movieRecommendations.appendChild(ul);
});