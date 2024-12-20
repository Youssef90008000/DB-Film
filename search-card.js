export default function userSearch(movies) {
    const movieContainer = document.getElementById("movies");
    const genreSearch = document.getElementById("genreSearch");
  
    // Fonction pour afficher les films
    function displayMovies(filteredMovies) {
      movieContainer.innerHTML = ""; // Réinitialiser l'affichage
      filteredMovies.forEach((movie) => {
        const movieDiv = document.createElement("div");
        movieDiv.className = "movie";
        movieDiv.textContent = `${movie.titre} (${movie.genre})`; // Assurez-vous d'utiliser les bons champs
        movieContainer.appendChild(movieDiv);
      });
    }
  
    // Filtrer les films en fonction de l'entrée utilisateur
    function filterMovies() {
      const genreValue = genreSearch.value.toLowerCase();
  
      const filteredMovies = movies.filter((movie) =>
        movie.genre.toLowerCase().includes(genreValue)
      );
  
      displayMovies(filteredMovies);
    }
  
    // Ajouter un écouteur d'événement sur le champ de recherche
    genreSearch.addEventListener("input", filterMovies);
  
    // Afficher tous les films initialement
    displayMovies(movies);
  }
  