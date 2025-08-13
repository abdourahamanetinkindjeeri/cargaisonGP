<!-- <!DOCTYPE html>
<html lang="fr">

<head>
  <meta charset="UTF-8">
  <title>Connexion</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <script defer src="/public/login.js"></script>
</head>

<body class="flex items-center justify-center h-screen bg-gray-100">
  <form id="loginForm" class="bg-white p-6 rounded shadow-md w-80">
    <h2 class="text-xl mb-4">Connexion</h2>
    <input type="email" id="email" placeholder="Email" class="w-full border px-3 py-2 mb-3 rounded" required>
    <input type="password" id="password" placeholder="Mot de passe" class="w-full border px-3 py-2 mb-3 rounded" required>
    <button type="submit" class="w-full bg-blue-500 text-white py-2 rounded">Se connecter</button>
    <p id="alert" class="mt-3 text-center"></p>
  </form>

</body>
<script defer src="/public/login.js"></script>

</html> -->

<!DOCTYPE html>
<html lang="fr">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>CargoFlow - Connexion</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {
      darkMode: "class",
      theme: {
        extend: {
          colors: {
            primary: {
              50: "#eff6ff",
              500: "#3b82f6",
              600: "#2563eb",
              700: "#1d4ed8",
              900: "#1e3a8a",
            },
            cargo: {
              maritime: "#0ea5e9",
              aerien: "#8b5cf6",
              routier: "#10b981",
            },
          },
        },
      },
    };
  </script>
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
</head>

<body
  class="min-h-screen bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 flex items-center justify-center p-4 overflow-hidden">
  <!-- Particles for background effect -->
  <div class="fixed inset-0 pointer-events-none">
    <div
      class="absolute w-2 h-2 bg-white/20 rounded-full animate-float top-1/4 left-1/4"></div>
    <div
      class="absolute w-3 h-3 bg-white/20 rounded-full animate-float top-3/4 left-3/4"
      style="animation-delay: 1s"></div>
    <div
      class="absolute w-2 h-2 bg-white/20 rounded-full animate-float top-1/2 left-1/2"
      style="animation-delay: 2s"></div>
  </div>

  <!-- Login Page -->
  <div id="login-page" class="w-full max-w-md z-10">
    <!-- Login Card -->
    <div
      class="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8 shadow-2xl transform transition-all duration-500 ease-out scale-95 opacity-0 animate-[fadeIn_0.6s_ease-out_forwards]">
      <!-- Logo Section -->
      <div class="text-center mb-8">
        <div
          class="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4 transform transition-transform hover:scale-110">
          <i class="fas fa-shipping-fast text-white text-3xl"></i>
        </div>
        <h1
          class="text-3xl font-bold text-white mb-2 overflow-hidden whitespace-nowrap animate-[typing_3.5s_steps(40,end)]">
          CargoFlow
        </h1>
        <p class="text-white/80 text-sm">Connectez-vous à votre espace</p>
      </div>

      <!-- Login Form -->
      <form id="login-form" class="space-y-6">
        <div class="space-y-4">
          <div class="relative group">
            <input
              type="email"
              id="email"
              placeholder="Email"
              class="w-full px-4 py-4 bg-white/10 border border-white/30 rounded-2xl text-white placeholder-white/70 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 group-hover:shadow-[0_0_15px_rgba(59,130,246,0.5)]"
              required />
            <i
              class="fas fa-user absolute right-4 top-1/2 transform -translate-y-1/2 text-white/70 group-hover:text-primary-500 transition-colors"></i>
          </div>

          <div class="relative group">
            <input
              type="password"
              id="password"
              placeholder="Mot de passe"
              class="w-full px-4 py-4 bg-white/10 border border-white/30 rounded-2xl text-white placeholder-white/70 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 group-hover:shadow-[0_0_15px_rgba(59,130,246,0.5)]"
              required />
            <i
              class="fas fa-lock absolute right-4 top-1/2 transform -translate-y-1/2 text-white/70 group-hover:text-primary-500 transition-colors"></i>
          </div>
        </div>

        <div class="flex items-center justify-between text-sm">
          <label class="flex items-center text-white/80">
            <input
              type="checkbox"
              class="mr-2 rounded border-white/30 text-primary-500 focus:ring-primary-500" />
            Se souvenir de moi
          </label>
          <a
            href="#"
            class="text-white/90 hover:text-primary-500 transition-colors">Mot de passe oublié ?</a>
        </div>

        <button
          type="submit"
          class="w-full py-4 bg-gradient-to-r from-primary-500 to-purple-600 text-white rounded-2xl font-semibold shadow-lg hover:from-primary-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 relative overflow-hidden group">
          <span class="relative z-10">Se connecter</span>
          <span
            class="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-1000 group-hover:animate-shimmer"></span>
        </button>
      </form>

      <div class="mt-6 text-center">
        <p class="text-white/70 text-sm">
          Pas encore de compte ?
          <a
            href="#"
            class="text-white font-semibold hover:text-primary-500 transition-colors hover:underline">S'inscrire</a>
        </p>
      </div>
    </div>

    <!-- Demo Credentials -->
    <div class="mt-6 text-center">
      <div
        class="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-4 transform transition-all duration-500 ease-out scale-95 opacity-0 animate-[fadeIn_0.6s_ease-out_forwards_0.2s]">
        <p class="text-white/90 text-sm mb-2">
          Identifiants de démonstration :
        </p>
        <p class="text-white/70 text-xs">Email: admin@cargoflow.com</p>
        <p class="text-white/70 text-xs">Mot de passe: admin123</p>
      </div>
    </div>
  </div>

  <style>
    @keyframes fadeIn {
      0% {
        opacity: 0;
        transform: translateY(30px) scale(0.95);
      }

      100% {
        opacity: 1;
        transform: translateY(0) scale(1);
      }
    }

    @keyframes typing {
      from {
        width: 0;
      }

      to {
        width: 100%;
      }
    }

    @keyframes shimmer {
      0% {
        transform: translateX(-100%);
      }

      100% {
        transform: translateX(100%);
      }
    }

    @keyframes float {

      0%,
      100% {
        transform: translateY(0);
      }

      50% {
        transform: translateY(-20px);
      }
    }
  </style>
</body>
<script defer src="/public/login.js"></script>

</html>