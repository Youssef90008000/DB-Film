document.getElementById("registerForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Empêcher le rechargement de la page

    // Récupérer les valeurs des champs du formulaire
    const username = document.getElementById("newUsername").value.trim();
    const userpassword = document.getElementById("newPassword").value.trim();

    // Validation des champs
    if (!username || !userpassword) {
      alert("Veuillez remplir tous les champs !");
      return;
    }

    // Préparer les données pour l'envoi
    const formData = {
      username: username,
      userpassword: userpassword,
      type: "user", // Type par défaut
    };

    // Envoyer les données via une requête POST
    fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (response.ok) {
          alert("Utilisateur enregistré avec succès !");
          // Réinitialiser le formulaire
          document.getElementById("registerForm").reset();
        } else {
          alert("Erreur lors de l'enregistrement de l'utilisateur.");
        }
      })
      .catch((error) => {
        console.error("Erreur :", error);
        alert("Une erreur est survenue lors de la requête.");
      });
  });
