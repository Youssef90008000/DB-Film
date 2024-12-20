const validUsernameEnter = document.getElementById("username");
const validPasswordEnter = document.getElementById("password");

// Récupération des identifiants depuis l'API
fetch("http://localhost:3000/users")
  .then((response) => response.json())
  .then((users) => {
    // Ajouter un écouteur d'événement pour la soumission du formulaire
    document.getElementById("loginForm").addEventListener("submit", function (e) {
      e.preventDefault(); // Empêcher le rechargement de la page

      const username = validUsernameEnter.value;
      const password = validPasswordEnter.value;

      // Vérifier si un utilisateur correspond aux identifiants saisis
      const user = users.find(
        (utilisateur) => utilisateur.username === username && utilisateur.userpassword === password
      );

      if (user) {
        // Stocker le type d'utilisateur dans le localStorage
        localStorage.setItem("role", user.type);

        alert("Connexion réussie !");

        // Rediriger vers la même page pour tous les types d'utilisateurs
        window.location.href = "index.html";
      } else {
        alert("Identifiant ou mot de passe incorrect !");
      }
    });
  })
  .catch((err) => {
    console.error("Erreur lors de la récupération des utilisateurs :", err);
  });

