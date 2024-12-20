// Récupérer l'ID depuis l'URL
const params = new URLSearchParams(window.location.search);
const id = params.get("id"); // Obtenir l'ID de la query string

// Fonction pour créer la carte utilisateur
function movieCard(movie) {
  // Vérifier s'il y a un élément <main> ou le créer
  let main = document.querySelector("main");
  if (!main) {
    main = document.createElement("main");
    document.body.appendChild(main);
  }

  // Créer la carte utilisateur
  const card = document.createElement("div");
  card.className = "card";

  // Création de l'élément contenant l'image
  const logoDiv = document.createElement("div");
  logoDiv.className = "photo";
  const photoImg = document.createElement("img");
  photoImg.src = movie.affiche;
  photoImg.alt = "Avatar";

  logoDiv.appendChild(photoImg);

  // Création du contenu utilisateur
  const contenuDiv = document.createElement("div");
  contenuDiv.className = "contenu";
  contenuDiv.innerHTML = `
        <p>NOM : ${movie.titre}</p>
        <p>Réalisateur : ${movie.realisateur}</p>
        <p>Année : ${movie.annee}</p>
        <p>Genre : ${movie.genre}</p>
        <p>Durée : ${movie.duree}</p>
        <p>Synopsis : ${movie.synopsis}</p>

    `;

  // Ajouter les éléments à la carte
  card.appendChild(logoDiv);
  card.appendChild(contenuDiv);

  // Ajouter la carte au <main>
  main.appendChild(card);
}

// Fetch pour récupérer les données de l'utilisateur
fetch("http://localhost:3000/films")
  .then((response) => response.json())
  .then((data) => {
    // Trouver l'utilisateur correspondant à l'ID
    const movie = data.find((item) => item.id == id);
    if (!movie) {
      document.body.innerHTML = "<h1>Utilisateur non trouvé</h1>";
    } else {
      movieCard(movie);
    }
  })
  .catch((err) => {
    console.error("Erreur lors de la récupération des données :", err);
    document.body.innerHTML = "<h1>Une erreur s'est produite</h1>";
  });
