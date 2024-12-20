document
  .getElementById("userForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    // Récupérer les valeurs du formulaire
    const formData = {
      titre: document.getElementById("titre").value,
      realisateur: document.getElementById("realisateur").value,
      annee: document.getElementById("annee").value,
      genre: document.getElementById("genres").value,
      synopsis: document.getElementById("synopsis").value,
      affiche: document.getElementById("affiche").value,
      duree: document.getElementById("duree").value,
    };

    // Envoi des données à l'API via une requête AJAX
    fetch("http://localhost:3000/films", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (response.ok) {
          alert("Données envoyées avec succès !");
        } else {
          alert("Erreur lors de l'envoi des données.");
        }
      })
      .catch((error) => console.error("Erreur :", error));
  });
