// Identifiants fictifs de connexion
const validUsername = "user123";
const validPassword = "1234";
const adminUsername = "admin123";
const adminPassword = "1234";

// Fonction de validation de la connexion
document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();

    if ((username === validUsername && password === validPassword) || 
        (username === adminUsername && password === adminPassword)) {
        
        // Définir le rôle dans le stockage local
        const role = (username === adminUsername) ? 'admin' : 'user';
        localStorage.setItem('role', role);

        alert("Connexion réussie !");
        
        // Rediriger vers une page en fonction du rôle
        if (role === 'admin') {
            window.location.href = "index.html"; // Page d'admin
        } 
        if (role === 'user') {
            window.location.href = "index.html"; // Page d'user
        } 
    } 
});

