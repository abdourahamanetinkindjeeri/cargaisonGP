document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("login-form");

  // Création d'un élément pour afficher les messages
  const alertEl = document.createElement("p");
  alertEl.id = "alert";
  alertEl.className = "mt-3 text-center";
  form.appendChild(alertEl);

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    // Réinitialiser le message
    alertEl.textContent = "";
    alertEl.className = "mt-3 text-center";

    // Récupérer les valeurs du formulaire
    const email = form.email.value.trim();
    const password = form.password.value.trim();

    // Vérification côté client
    if (!email || !password) {
      alertEl.textContent = "Veuillez remplir tous les champs.";
      alertEl.classList.add("text-red-500");
      return;
    }

    try {
      // Envoi des données au backend PHP
      const response = await fetch("/login.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      // Récupération de la réponse JSON
      const data = await response.json();

      if (!response.ok) {
        alertEl.textContent = data.message || "Erreur lors de la connexion.";
        alertEl.classList.add("text-red-500");
        return;
      }

      // Connexion réussie
      alertEl.textContent = "Connexion réussie ! Redirection...";
      alertEl.classList.add("text-green-500");

      // Redirection après 1.5 secondes
      setTimeout(() => {
        window.location.href = "index.php?page=home";
      }, 1500);
    } catch (error) {
      alertEl.textContent = "Erreur réseau ou serveur indisponible.";
      alertEl.classList.add("text-red-500");
    }
  });
});
