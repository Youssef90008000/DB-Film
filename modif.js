// Récupérer l'ID depuis l'URL
const params = new URLSearchParams(window.location.search);
const id = params.get("id"); // Obtenir l'ID de la query string

// Variable pour stocker le film sélectionné
let movie;

// Fetch pour récupérer les données de l'utilisateur
fetch("http://localhost:3000/films")
  .then((response) => response.json())
  .then((data) => {
    // Trouver le film correspondant à l'ID
    movie = data.find((item) => item.id == id);
    if (movie) {
      console.log(movie);

      // Pré-remplir le formulaire avec les données du film
      document.getElementById("titre").value = movie.titre;
      document.getElementById("realisateur").value = movie.realisateur;
      document.getElementById("annee").value = movie.annee;
      document.getElementById("synopsis").value = movie.synopsis;
      document.getElementById("genres").value = movie.genre;
      document.getElementById("affiche").value = movie.affiche;
      document.getElementById("duree").value = movie.duree;
    } else {
      console.error("Film non trouvé");
      document.body.innerHTML = "<h1>Film introuvable</h1>";
    }
  })
  .catch((err) => {
    console.error("Erreur lors de la récupération des données :", err);
    document.body.innerHTML = "<h1>Une erreur s'est produite</h1>";
  });

// Gestionnaire d'événement pour le formulaire
const form = document.getElementById("userForm");
form.addEventListener("submit", function (event) {
  event.preventDefault();

  // Vérifier que le film est chargé
  if (!movie) {
    alert("Aucun film chargé pour mise à jour.");
    return;
  }

  // Mettre à jour les données du film avec les valeurs du formulaire
  const updatedMovie = {
    titre: document.getElementById("titre").value || movie.titre,
    realisateur: document.getElementById("realisateur").value || movie.realisateur,
    annee: document.getElementById("annee").value || movie.annee,
    genre: document.getElementById("genres").value.split(",").map((g) => g.trim()) || movie.genre,
    synopsis: document.getElementById("synopsis").value || movie.synopsis,
    affiche: document.getElementById("affiche").value || movie.affiche,
    duree: document.getElementById("duree").value || movie.duree,
  };

  // Envoyer les données mises à jour à l'API
  fetch(`http://localhost:3000/films/${id}`, {
    method: "PUT", // Utiliser PUT ou PATCH pour une mise à jour
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updatedMovie),
  })
    .then((response) => {
      if (response.ok) {
        alert("Film mis à jour avec succès !");
      } else {
        alert("Erreur lors de la mise à jour du film.");
      }
    })
    .catch((error) => console.error("Erreur :", error));
});
