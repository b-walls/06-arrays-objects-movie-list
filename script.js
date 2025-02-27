// Set up event listener for when the user selects a genre
document.getElementById("genre").addEventListener("change", function() {
  // Get the selected genre
  const selectedGenre = document.getElementById("genre").value;

  // Add movies to the movieList based on the selected genre
  if (selectedGenre === "Comedy") {
    console.log("You selected 'Comedy'");
  } else if (selectedGenre === "Action") {
    console.log("You selected 'Action'");
  } else if (selectedGenre === "Drama") {
    console.log("You selected 'Drama'");
  } else if (selectedGenre === "Sci-Fi") {
    console.log("You selected 'Sci-Fi'");
  }

  // Display the list of movies on the page
  document.getElementById("movieRecommendations").innerText = `Enjoy: !`;
});
