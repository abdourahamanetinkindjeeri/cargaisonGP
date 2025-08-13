const form = document.getElementById("loginForm") as HTMLFormElement;
const alertEl = document.getElementById("alert") as HTMLParagraphElement;

function showAlert(message: string, ok = true) {
  if (!alertEl) return;
  alertEl.textContent = message;
  alertEl.className = ok
    ? "mt-3 text-center text-green-600"
    : "mt-3 text-center text-red-600";
  setTimeout(() => {
    alertEl.textContent = "";
  }, 3000);
}

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const email = (
    document.getElementById("email") as HTMLInputElement
  ).value.trim();
  const password = (
    document.getElementById("password") as HTMLInputElement
  ).value.trim();
  alert(password);
  if (!email || !password) {
    showAlert("Veuillez remplir tous les champs", false);
    return;
  }

  try {
    const res = await fetch("http://localhost:4000/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
    const data = await res.json();
    showAlert(data.message, data.success);
    if (data.success) {
      setTimeout(() => {
        window.location.href = "/routes/dashboard.php";
      }, 1200);
    }
  } catch (err) {
    showAlert("Erreur réseau ou serveur", false);
  }
});
