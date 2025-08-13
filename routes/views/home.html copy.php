<?php
session_start();
if (!isset($_SESSION['user'])) {
    header('Location: /');
    exit();
}
?>

<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>CargoFlow - Gestion de Cargaison</title>
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
                    animation: {
                        "fade-in": "fadeIn 0.5s ease-in-out",
                        "slide-up": "slideUp 0.3s ease-out",
                        "bounce-gentle": "bounceGentle 2s infinite",
                    },
                    keyframes: {
                        fadeIn: {
                            "0%": {
                                opacity: "0",
                                transform: "translateY(20px)"
                            },
                            "100%": {
                                opacity: "1",
                                transform: "translateY(0)"
                            },
                        },
                        slideUp: {
                            "0%": {
                                transform: "translateY(100%)"
                            },
                            "100%": {
                                transform: "translateY(0)"
                            },
                        },
                        bounceGentle: {
                            "0%, 100%": {
                                transform: "translateY(0)"
                            },
                            "50%": {
                                transform: "translateY(-5px)"
                            },
                        },
                    },
                },
            },
        };
    </script>
    <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
    <style>
        .glass {
            background: rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .status-en-attente {
            @apply bg-yellow-100 text-yellow-800 border-yellow-300;
        }

        .status-en-cours {
            @apply bg-blue-100 text-blue-800 border-blue-300;
        }

        .status-arrive {
            @apply bg-green-100 text-green-800 border-green-300;
        }

        .status-recupere {
            @apply bg-purple-100 text-purple-800 border-purple-300;
        }

        .status-perdu {
            @apply bg-red-100 text-red-800 border-red-300;
        }

        .status-archive {
            @apply bg-gray-100 text-gray-800 border-gray-300;
        }
    </style>
</head>

<body
    class="bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-slate-800 dark:to-indigo-900 min-h-screen transition-all duration-300">
    <!-- Sidebar -->
    <div
        id="sidebar"
        class="fixed left-0 top-0 h-full w-64 bg-white/95 dark:bg-slate-800/95 backdrop-blur-xl shadow-2xl border-r border-slate-200 dark:border-slate-700 z-50 transform -translate-x-full lg:translate-x-0 transition-transform duration-300">
        <!-- Logo -->
        <div class="p-6 border-b border-slate-200 dark:border-slate-700">
            <div class="flex items-center space-x-3">
                <div
                    class="w-10 h-10 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center">
                    <i class="fas fa-shipping-fast text-white text-lg"></i>
                </div>
                <div>
                    <h1
                        class="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                        CargoFlow
                    </h1>
                    <p class="text-xs text-slate-500 dark:text-slate-400">
                        Gestion de Cargaison
                    </p>
                </div>
            </div>
        </div>

        <!-- Navigation -->
        <nav class="p-4 space-y-2">
            <a href="#" class="nav-item active" data-section="dashboard">
                <i class="fas fa-tachometer-alt"></i>
                <span>Dashboard</span>
            </a>
            <a href="#" class="nav-item" data-section="cargaisons">
                <i class="fas fa-ship"></i>
                <span>Cargaisons</span>
            </a>
            <a href="#" class="nav-item" data-section="colis">
                <i class="fas fa-boxes"></i>
                <span>Colis</span>
            </a>
            <a href="#" class="nav-item" data-section="clients">
                <i class="fas fa-users"></i>
                <span>Clients</span>
            </a>
            <a href="#" class="nav-item" data-section="tracking">
                <i class="fas fa-map-marker-alt"></i>
                <span>Suivi Public</span>
            </a>
            <a href="#" class="nav-item" data-section="reports">
                <i class="fas fa-chart-bar"></i>
                <span>Rapports</span>
            </a>
            <a href="#" class="nav-item" data-section="settings">
                <i class="fas fa-cog"></i>
                <span>Paramètres</span>
            </a>
        </nav>

        <!-- User Info -->
        <div class="absolute bottom-4 left-4 right-4">
            <div
                class="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl p-3 text-white">
                <div class="flex items-center space-x-3">
                    <div
                        class="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                        <i class="fas fa-user text-sm"></i>
                    </div>
                    <div class="text-sm">
                        <p class="font-medium">
                            <?php
                            echo isset($_SESSION['user']) ? htmlspecialchars($_SESSION['user']) : 'Gestionnaire';
                            ?>
                        </p>
                        <p class="text-blue-100 text-xs">En ligne</p>
                    </div>

                </div>
            </div>
        </div>
    </div>

    <!-- Main Content -->
    <div class="lg:ml-64">
        <!-- Header -->
        <header
            class="bg-white/90 dark:bg-slate-800/90 backdrop-blur-xl shadow-lg border-b border-slate-200 dark:border-slate-700 px-6 py-4 sticky top-0 z-40">
            <div class="flex items-center justify-between">
                <div class="flex items-center space-x-4">
                    <button
                        id="sidebar-toggle"
                        class="lg:hidden text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100">
                        <i class="fas fa-bars text-xl"></i>
                    </button>
                    <h2
                        id="page-title"
                        class="text-2xl font-bold text-slate-800 dark:text-slate-200">
                        Dashboard
                    </h2>
                </div>

                <div class="flex items-center space-x-4">
                    <!-- Search -->
                    <div class="relative">
                        <input
                            type="search"
                            placeholder="Rechercher colis/cargaison..."
                            class="w-80 px-4 py-2 pl-10 bg-slate-100 dark:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all" />
                        <i class="fas fa-search absolute left-3 top-3 text-slate-400"></i>
                    </div>

                    <!-- Notifications -->
                    <button
                        class="relative p-2 rounded-xl bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-600 transition-all">
                        <i class="fas fa-bell"></i>
                        <span
                            class="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">3</span>
                    </button>

                    <!-- Theme Toggle -->
                    <button
                        id="theme-toggle"
                        class="p-2 rounded-xl bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-600 transition-all">
                        <i class="fas fa-moon dark:hidden"></i>
                        <i class="fas fa-sun hidden dark:block"></i>
                    </button>
                </div>
            </div>
        </header>

        <!-- Content Sections -->
        <main class="p-6">
            <!-- Dashboard Section -->
            <div id="dashboard-section" class="content-section">
                <!-- Stats Cards -->
                <div
                    class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    <div
                        class="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-xl border border-slate-200 dark:border-slate-700 animate-fade-in">
                        <div class="flex items-center justify-between">
                            <div>
                                <p class="text-slate-500 dark:text-slate-400 text-sm">
                                    Cargaisons Actives
                                </p>
                                <p
                                    class="text-3xl font-bold text-slate-800 dark:text-slate-200">
                                    24
                                </p>
                                <p class="text-green-500 text-sm">
                                    <i class="fas fa-arrow-up mr-1"></i>+12%
                                </p>
                            </div>
                            <div
                                class="w-12 h-12 bg-blue-100 dark:bg-blue-900/20 rounded-xl flex items-center justify-center">
                                <i class="fas fa-ship text-blue-500 text-xl"></i>
                            </div>
                        </div>
                    </div>

                    <div
                        class="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-xl border border-slate-200 dark:border-slate-700 animate-fade-in"
                        style="animation-delay: 0.1s">
                        <div class="flex items-center justify-between">
                            <div>
                                <p class="text-slate-500 dark:text-slate-400 text-sm">
                                    Colis en Transit
                                </p>
                                <p
                                    class="text-3xl font-bold text-slate-800 dark:text-slate-200">
                                    1,247
                                </p>
                                <p class="text-yellow-500 text-sm">
                                    <i class="fas fa-clock mr-1"></i>En cours
                                </p>
                            </div>
                            <div
                                class="w-12 h-12 bg-yellow-100 dark:bg-yellow-900/20 rounded-xl flex items-center justify-center">
                                <i class="fas fa-boxes text-yellow-500 text-xl"></i>
                            </div>
                        </div>
                    </div>

                    <div
                        class="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-xl border border-slate-200 dark:border-slate-700 animate-fade-in"
                        style="animation-delay: 0.2s">
                        <div class="flex items-center justify-between">
                            <div>
                                <p class="text-slate-500 dark:text-slate-400 text-sm">
                                    Clients Actifs
                                </p>
                                <p
                                    class="text-3xl font-bold text-slate-800 dark:text-slate-200">
                                    856
                                </p>
                                <p class="text-purple-500 text-sm">
                                    <i class="fas fa-user-plus mr-1"></i>Nouveau
                                </p>
                            </div>
                            <div
                                class="w-12 h-12 bg-purple-100 dark:bg-purple-900/20 rounded-xl flex items-center justify-center">
                                <i class="fas fa-users text-purple-500 text-xl"></i>
                            </div>
                        </div>
                    </div>

                    <div
                        class="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-xl border border-slate-200 dark:border-slate-700 animate-fade-in"
                        style="animation-delay: 0.3s">
                        <div class="flex items-center justify-between">
                            <div>
                                <p class="text-slate-500 dark:text-slate-400 text-sm">
                                    Revenus Mensuel
                                </p>
                                <p
                                    class="text-3xl font-bold text-slate-800 dark:text-slate-200">
                                    €45.2K
                                </p>
                                <p class="text-green-500 text-sm">
                                    <i class="fas fa-arrow-up mr-1"></i>+8.2%
                                </p>
                            </div>
                            <div
                                class="w-12 h-12 bg-green-100 dark:bg-green-900/20 rounded-xl flex items-center justify-center">
                                <i class="fas fa-euro-sign text-green-500 text-xl"></i>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Quick Actions -->
                <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
                    <div class="lg:col-span-2">
                        <div
                            class="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-xl border border-slate-200 dark:border-slate-700">
                            <h3
                                class="text-xl font-semibold text-slate-800 dark:text-slate-200 mb-4">
                                Actions Rapides
                            </h3>
                            <div class="grid grid-cols-2 gap-4">
                                <button
                                    class="action-btn bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700">
                                    <i class="fas fa-plus-circle text-2xl mb-2"></i>
                                    <span>Nouvelle Cargaison</span>
                                </button>
                                <button
                                    class="action-btn bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700">
                                    <i class="fas fa-box text-2xl mb-2"></i>
                                    <span>Ajouter Colis</span>
                                </button>
                                <button
                                    class="action-btn bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700">
                                    <i class="fas fa-user-plus text-2xl mb-2"></i>
                                    <span>Nouveau Client</span>
                                </button>
                                <button
                                    class="action-btn bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700">
                                    <i class="fas fa-search text-2xl mb-2"></i>
                                    <span>Rechercher</span>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div class="space-y-6">
                        <!-- Alerts -->
                        <div
                            class="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-xl border border-slate-200 dark:border-slate-700">
                            <h3
                                class="text-lg font-semibold text-slate-800 dark:text-slate-200 mb-4">
                                Alertes
                            </h3>
                            <div class="space-y-3">
                                <div
                                    class="flex items-center p-3 bg-red-50 dark:bg-red-900/20 rounded-xl border border-red-200 dark:border-red-800">
                                    <i
                                        class="fas fa-exclamation-triangle text-red-500 mr-3"></i>
                                    <div>
                                        <p
                                            class="text-sm font-medium text-red-800 dark:text-red-200">
                                            3 colis en retard
                                        </p>
                                        <p class="text-xs text-red-600 dark:text-red-300">
                                            Cargaison MAR-001
                                        </p>
                                    </div>
                                </div>
                                <div
                                    class="flex items-center p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-xl border border-yellow-200 dark:border-yellow-800">
                                    <i class="fas fa-clock text-yellow-500 mr-3"></i>
                                    <div>
                                        <p
                                            class="text-sm font-medium text-yellow-800 dark:text-yellow-200">
                                            5 cargaisons à fermer
                                        </p>
                                        <p class="text-xs text-yellow-600 dark:text-yellow-300">
                                            Avant départ
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Recent Activities -->
                <div
                    class="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-xl border border-slate-200 dark:border-slate-700">
                    <h3
                        class="text-xl font-semibold text-slate-800 dark:text-slate-200 mb-6">
                        Activités Récentes
                    </h3>
                    <div class="space-y-4">
                        <div
                            class="flex items-center p-4 bg-slate-50 dark:bg-slate-700/50 rounded-xl">
                            <div
                                class="w-10 h-10 bg-blue-100 dark:bg-blue-900/20 rounded-full flex items-center justify-center mr-4">
                                <i class="fas fa-ship text-blue-500"></i>
                            </div>
                            <div class="flex-1">
                                <p class="font-medium text-slate-800 dark:text-slate-200">
                                    Nouvelle cargaison maritime créée
                                </p>
                                <p class="text-sm text-slate-500 dark:text-slate-400">
                                    MAR-024 • Dakar → Marseille • Il y a 2 heures
                                </p>
                            </div>
                            <span
                                class="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 rounded-full text-xs">Maritime</span>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Suivi Public Section -->
            <div id="tracking-section" class="content-section hidden">
                <div class="max-w-2xl mx-auto">
                    <div
                        class="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-2xl border border-slate-200 dark:border-slate-700">
                        <div class="text-center mb-8">
                            <div
                                class="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                                <i class="fas fa-search-location text-white text-2xl"></i>
                            </div>
                            <h2
                                class="text-3xl font-bold text-slate-800 dark:text-slate-200 mb-2">
                                Suivi de Colis
                            </h2>
                            <p class="text-slate-500 dark:text-slate-400">
                                Entrez votre code de suivi pour connaître l'état de votre
                                colis
                            </p>
                        </div>

                        <div class="mb-6">
                            <div class="relative">
                                <input
                                    type="text"
                                    id="tracking-code"
                                    placeholder="Entrez votre code de suivi (ex: CF240808001)"
                                    class="w-full px-6 py-4 bg-slate-100 dark:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-center text-lg font-mono tracking-wider transition-all" />
                                <button
                                    id="track-btn"
                                    class="absolute right-2 top-2 bottom-2 px-6 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-xl hover:from-blue-600 hover:to-indigo-700 transition-all">
                                    <i class="fas fa-search"></i>
                                </button>
                            </div>
                        </div>

                        <!-- Résultat du suivi -->
                        <div id="tracking-result" class="hidden">
                            <div
                                class="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-2xl p-6 border border-green-200 dark:border-green-800">
                                <div class="flex items-center justify-between mb-6">
                                    <div>
                                        <h3
                                            class="text-xl font-semibold text-green-800 dark:text-green-200">
                                            Colis CF240808001
                                        </h3>
                                        <p class="text-green-600 dark:text-green-300">
                                            De: Dakar, SN → À: Marseille, FR
                                        </p>
                                    </div>
                                    <span
                                        id="status-badge"
                                        class="px-4 py-2 rounded-full text-sm font-medium status-en-cours">En cours</span>
                                </div>

                                <!-- Timeline -->
                                <div class="space-y-4">
                                    <div class="flex items-center">
                                        <div class="w-4 h-4 bg-green-500 rounded-full mr-4"></div>
                                        <div class="flex-1">
                                            <p
                                                class="font-medium text-slate-800 dark:text-slate-200">
                                                Colis enregistré
                                            </p>
                                            <p class="text-sm text-slate-500 dark:text-slate-400">
                                                08/08/2024 14:30
                                            </p>
                                        </div>
                                    </div>
                                    <div class="flex items-center">
                                        <div class="w-4 h-4 bg-green-500 rounded-full mr-4"></div>
                                        <div class="flex-1">
                                            <p
                                                class="font-medium text-slate-800 dark:text-slate-200">
                                                Cargaison fermée
                                            </p>
                                            <p class="text-sm text-slate-500 dark:text-slate-400">
                                                08/08/2024 18:00
                                            </p>
                                        </div>
                                    </div>
                                    <div class="flex items-center">
                                        <div
                                            class="w-4 h-4 bg-blue-500 rounded-full mr-4 animate-pulse"></div>
                                        <div class="flex-1">
                                            <p
                                                class="font-medium text-slate-800 dark:text-slate-200">
                                                En transit
                                            </p>
                                            <p class="text-sm text-blue-600 dark:text-blue-400">
                                                Arrivée prévue dans 3 jours
                                            </p>
                                        </div>
                                    </div>
                                    <div class="flex items-center opacity-50">
                                        <div class="w-4 h-4 bg-gray-300 rounded-full mr-4"></div>
                                        <div class="flex-1">
                                            <p
                                                class="font-medium text-slate-600 dark:text-slate-400">
                                                Arrivé à destination
                                            </p>
                                            <p class="text-sm text-slate-500 dark:text-slate-400">
                                                En attente
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <!-- Info colis -->
                                <div
                                    class="mt-6 p-4 bg-white/60 dark:bg-slate-800/60 rounded-xl">
                                    <h4
                                        class="font-semibold text-slate-800 dark:text-slate-200 mb-2">
                                        Informations du colis
                                    </h4>
                                    <div class="grid grid-cols-2 gap-4 text-sm">
                                        <div>
                                            <p class="text-slate-500 dark:text-slate-400">Poids:</p>
                                            <p
                                                class="font-medium text-slate-800 dark:text-slate-200">
                                                2.5 kg
                                            </p>
                                        </div>
                                        <div>
                                            <p class="text-slate-500 dark:text-slate-400">Type:</p>
                                            <p
                                                class="font-medium text-slate-800 dark:text-slate-200">
                                                Électronique
                                            </p>
                                        </div>
                                        <div>
                                            <p class="text-slate-500 dark:text-slate-400">
                                                Cargaison:
                                            </p>
                                            <p
                                                class="font-medium text-slate-800 dark:text-slate-200">
                                                MAR-024
                                            </p>
                                        </div>
                                        <div>
                                            <p class="text-slate-500 dark:text-slate-400">
                                                Type transport:
                                            </p>
                                            <p
                                                class="font-medium text-slate-800 dark:text-slate-200">
                                                Maritime
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Autres sections (masquées par défaut) -->
            <div id="cargaisons-section" class="content-section hidden">
                <div
                    class="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-xl border border-slate-200 dark:border-slate-700">
                    <div class="flex items-center justify-between mb-6">
                        <h3 class="text-2xl font-bold text-slate-800 dark:text-slate-200">
                            Gestion des Cargaisons
                        </h3>
                        <button
                            class="px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-xl hover:from-blue-600 hover:to-indigo-700 transition-all">
                            <i class="fas fa-plus mr-2"></i>Nouvelle Cargaison
                        </button>
                    </div>
                    <p class="text-slate-600 dark:text-slate-400">
                        Interface de gestion des cargaisons à développer...
                    </p>
                </div>
            </div>

            <div id="colis-section" class="content-section hidden">
                <div
                    class="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-xl border border-slate-200 dark:border-slate-700">
                    <h3
                        class="text-2xl font-bold text-slate-800 dark:text-slate-200 mb-4">
                        Gestion des Colis
                    </h3>
                    <p class="text-slate-600 dark:text-slate-400">
                        Interface de gestion des colis à développer...
                    </p>
                </div>
            </div>

            <div id="clients-section" class="content-section hidden">
                <div
                    class="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-xl border border-slate-200 dark:border-slate-700">
                    <h3
                        class="text-2xl font-bold text-slate-800 dark:text-slate-200 mb-4">
                        Gestion des Clients
                    </h3>
                    <p class="text-slate-600 dark:text-slate-400">
                        Interface de gestion des clients à développer...
                    </p>
                </div>
            </div>

            <div id="reports-section" class="content-section hidden">
                <div
                    class="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-xl border border-slate-200 dark:border-slate-700">
                    <h3
                        class="text-2xl font-bold text-slate-800 dark:text-slate-200 mb-4">
                        Rapports et Statistiques
                    </h3>
                    <p class="text-slate-600 dark:text-slate-400">
                        Interface des rapports à développer...
                    </p>
                </div>
            </div>

            <div id="settings-section" class="content-section hidden">
                <div
                    class="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-xl border border-slate-200 dark:border-slate-700">
                    <h3
                        class="text-2xl font-bold text-slate-800 dark:text-slate-200 mb-4">
                        Paramètres
                    </h3>
                    <p class="text-slate-600 dark:text-slate-400">
                        Interface des paramètres à développer...
                    </p>
                </div>
            </div>
        </main>
    </div>

    <!-- Modal Overlay -->
    <div
        id="modal-overlay"
        class="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 hidden items-center justify-center">
        <div
            id="modal-content"
            class="bg-white dark:bg-slate-800 rounded-2xl p-6 max-w-lg w-full mx-4 animate-slide-up">
            <!-- Modal content will be inserted here -->
        </div>
    </div>

    <script>
        // État de l'application
        let currentSection = "dashboard";
        let darkMode = false;

        // Éléments du DOM
        const sidebar = document.getElementById("sidebar");
        const sidebarToggle = document.getElementById("sidebar-toggle");
        const themeToggle = document.getElementById("theme-toggle");
        const pageTitle = document.getElementById("page-title");
        const navItems = document.querySelectorAll(".nav-item");
        const contentSections = document.querySelectorAll(".content-section");
        const trackBtn = document.getElementById("track-btn");
        const trackingCode = document.getElementById("tracking-code");
        const trackingResult = document.getElementById("tracking-result");

        // Configuration des types de cargaison
        const cargoTypes = {
            maritime: {
                icon: "fas fa-ship",
                color: "cargo-maritime",
                label: "Maritime",
            },
            aerien: {
                icon: "fas fa-plane",
                color: "cargo-aerien",
                label: "Aérien",
            },
            routier: {
                icon: "fas fa-truck",
                color: "cargo-routier",
                label: "Routier",
            },
        };

        // Styles pour les éléments de navigation
        const navItemBaseClasses =
            "flex items-center space-x-3 px-4 py-3 rounded-xl text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 transition-all duration-200";
        const navItemActiveClasses =
            "flex items-center space-x-3 px-4 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-500 text-white shadow-lg";

        // Styles pour les boutons d'action
        const actionBtnClasses =
            "text-white p-6 rounded-2xl text-center transition-all duration-200 transform hover:scale-105 shadow-lg flex flex-col items-center justify-center min-h-[120px]";

        // Initialisation
        document.addEventListener("DOMContentLoaded", function() {
            initializeTheme();
            setupEventListeners();
            updateNavigation();
        });

        // Configuration du thème
        function initializeTheme() {
            const savedTheme = localStorage.getItem("theme");
            if (
                savedTheme === "dark" ||
                (!savedTheme &&
                    window.matchMedia("(prefers-color-scheme: dark)").matches)
            ) {
                darkMode = true;
                document.documentElement.classList.add("dark");
            }
        }

        // Configuration des écouteurs d'événements
        function setupEventListeners() {
            // Toggle sidebar
            sidebarToggle.addEventListener("click", () => {
                sidebar.classList.toggle("-translate-x-full");
            });

            // Toggle theme
            themeToggle.addEventListener("click", toggleTheme);

            // Navigation
            navItems.forEach((item) => {
                item.addEventListener("click", (e) => {
                    e.preventDefault();
                    const section = item.dataset.section;
                    if (section) {
                        switchSection(section);
                    }
                });
            });

            // Suivi de colis
            trackBtn.addEventListener("click", handleTracking);
            trackingCode.addEventListener("keypress", (e) => {
                if (e.key === "Enter") {
                    handleTracking();
                }
            });

            // Fermer sidebar sur mobile lors du clic à l'extérieur
            document.addEventListener("click", (e) => {
                if (
                    window.innerWidth < 1024 &&
                    !sidebar.contains(e.target) &&
                    !sidebarToggle.contains(e.target)
                ) {
                    sidebar.classList.add("-translate-x-full");
                }
            });

            // Actions rapides
            setupQuickActions();
        }

        // Configuration des actions rapides
        function setupQuickActions() {
            const actionButtons = document.querySelectorAll(".action-btn");
            actionButtons.forEach((btn) => {
                btn.className =
                    actionBtnClasses +
                    " " +
                    btn.className
                    .split(" ")
                    .filter((c) => c.includes("bg-gradient"))
                    .join(" ");

                btn.addEventListener("click", function() {
                    const text = this.querySelector("span").textContent;
                    showNotification("Action: " + text, "info");
                });
            });
        }

        // Basculer le thème
        function toggleTheme() {
            darkMode = !darkMode;
            document.documentElement.classList.toggle("dark");
            localStorage.setItem("theme", darkMode ? "dark" : "light");
        }

        // Changer de section
        function switchSection(section) {
            currentSection = section;

            // Cacher toutes les sections
            contentSections.forEach((s) => s.classList.add("hidden"));

            // Afficher la section demandée
            const targetSection = document.getElementById(`${section}-section`);
            if (targetSection) {
                targetSection.classList.remove("hidden");
            }

            // Mettre à jour la navigation
            updateNavigation();

            // Mettre à jour le titre
            updatePageTitle(section);

            // Fermer la sidebar sur mobile
            if (window.innerWidth < 1024) {
                sidebar.classList.add("-translate-x-full");
            }
        }

        // Mettre à jour la navigation
        function updateNavigation() {
            navItems.forEach((item) => {
                const section = item.dataset.section;
                if (section === currentSection) {
                    item.className = navItemActiveClasses;
                } else {
                    item.className = navItemBaseClasses;
                }
            });
        }

        // Mettre à jour le titre de la page
        function updatePageTitle(section) {
            const titles = {
                dashboard: "Dashboard",
                cargaisons: "Gestion des Cargaisons",
                colis: "Gestion des Colis",
                clients: "Gestion des Clients",
                tracking: "Suivi Public",
                reports: "Rapports et Statistiques",
                settings: "Paramètres",
            };

            pageTitle.textContent = titles[section] || "CargoFlow";
        }

        // Gérer le suivi de colis
        function handleTracking() {
            const code = trackingCode.value.trim();

            if (!code) {
                showNotification("Veuillez entrer un code de suivi", "error");
                return;
            }

            // Validation du format du code
            const codePattern = /^CF\d{9}$/;
            if (!codePattern.test(code)) {
                showNotification(
                    "Format de code invalide. Utilisez le format: CF240808001",
                    "error"
                );
                return;
            }

            // Simulation d'une recherche
            trackBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i>';
            trackBtn.disabled = true;

            setTimeout(() => {
                // Réinitialiser le bouton
                trackBtn.innerHTML = '<i class="fas fa-search"></i>';
                trackBtn.disabled = false;

                // Vérifier si le code existe (simulation)
                if (code === "CF240808001") {
                    showTrackingResult(code);
                } else {
                    showTrackingNotFound(code);
                }
            }, 1500);
        }

        // Afficher le résultat du suivi
        function showTrackingResult(code) {
            trackingResult.classList.remove("hidden");
            trackingResult.scrollIntoView({
                behavior: "smooth",
                block: "nearest"
            });
            showNotification("Colis trouvé!", "success");
        }

        // Afficher colis non trouvé
        function showTrackingNotFound(code) {
            const resultDiv = document.getElementById("tracking-result");
            resultDiv.className =
                "bg-gradient-to-r from-red-50 to-pink-50 dark:from-red-900/20 dark:to-pink-900/20 rounded-2xl p-6 border border-red-200 dark:border-red-800";
            resultDiv.innerHTML = `
                <div class="text-center">
                    <div class="w-16 h-16 bg-red-100 dark:bg-red-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <i class="fas fa-exclamation-triangle text-red-500 text-2xl"></i>
                    </div>
                    <h3 class="text-xl font-semibold text-red-800 dark:text-red-200 mb-2">Colis non trouvé</h3>
                    <p class="text-red-600 dark:text-red-300 mb-4">Le code de suivi "${code}" n'existe pas ou le colis a été annulé.</p>
                    <button onclick="resetTracking()" class="px-6 py-2 bg-red-500 text-white rounded-xl hover:bg-red-600 transition-all">
                        Nouvelle recherche
                    </button>
                </div>
            `;
            resultDiv.classList.remove("hidden");
            resultDiv.scrollIntoView({
                behavior: "smooth",
                block: "nearest"
            });
        }

        // Réinitialiser le suivi
        function resetTracking() {
            trackingResult.classList.add("hidden");
            trackingCode.value = "";
            trackingCode.focus();
        }

        // Système de notifications
        function showNotification(message, type = "info") {
            const notification = document.createElement("div");
            const colors = {
                success: "bg-green-500",
                error: "bg-red-500",
                info: "bg-blue-500",
                warning: "bg-yellow-500",
            };

            notification.className = `fixed top-4 right-4 ${colors[type]} text-white px-6 py-3 rounded-xl shadow-lg z-50 animate-fade-in`;
            notification.textContent = message;

            document.body.appendChild(notification);

            setTimeout(() => {
                notification.remove();
            }, 3000);
        }

        // Données simulées pour le dashboard
        const simulatedData = {
            cargaisons: [{
                    id: "MAR-024",
                    type: "maritime",
                    status: "en-cours",
                    departure: "Dakar",
                    arrival: "Marseille",
                    packages: 45,
                },
                {
                    id: "AER-012",
                    type: "aerien",
                    status: "en-attente",
                    departure: "Casablanca",
                    arrival: "Paris",
                    packages: 12,
                },
                {
                    id: "ROU-056",
                    type: "routier",
                    status: "arrive",
                    departure: "Bamako",
                    arrival: "Abidjan",
                    packages: 78,
                },
            ],
            colis: [{
                    code: "CF240808001",
                    status: "en-cours",
                    weight: 2.5,
                    type: "Électronique",
                },
                {
                    code: "CF240808002",
                    status: "arrive",
                    weight: 1.2,
                    type: "Vêtements",
                },
                {
                    code: "CF240808003",
                    status: "perdu",
                    weight: 0.8,
                    type: "Documents",
                },
            ],
        };

        // Animation des statistiques au chargement
        function animateStats() {
            const stats = document.querySelectorAll(".text-3xl");
            stats.forEach((stat, index) => {
                setTimeout(() => {
                    stat.style.transform = "scale(1.1)";
                    setTimeout(() => {
                        stat.style.transform = "scale(1)";
                    }, 200);
                }, index * 100);
            });
        }

        // Appeler l'animation après le chargement
        setTimeout(animateStats, 500);

        // Gestion du responsive
        window.addEventListener("resize", () => {
            if (window.innerWidth >= 1024) {
                sidebar.classList.remove("-translate-x-full");
            } else {
                sidebar.classList.add("-translate-x-full");
            }
        });

        // Mise à jour automatique des données (simulation)
        setInterval(() => {
            // Simulation de mise à jour en temps réel
            const notifications = document
                .querySelector(".fas.fa-bell")
                .parentElement.querySelector("span");
            const currentCount = parseInt(notifications.textContent);
            if (Math.random() > 0.95) {
                // 5% de chance
                notifications.textContent = currentCount + 1;
                notifications.classList.add("animate-bounce");
                setTimeout(() => {
                    notifications.classList.remove("animate-bounce");
                }, 1000);
            }
        }, 5000);

        // Fonctions utilitaires
        function formatDate(date) {
            return new Intl.DateTimeFormat("fr-FR", {
                day: "2-digit",
                month: "2-digit",
                year: "numeric",
                hour: "2-digit",
                minute: "2-digit",
            }).format(date);
        }

        function generateTrackingCode() {
            const timestamp = Date.now().toString().slice(-9);
            return `CF${timestamp}`;
        }

        // Initialisation complète
        console.log("CargoFlow Interface initialisée avec succès!");

        // Événements de débogage (à supprimer en production)
        if (
            typeof window !== "undefined" &&
            window.location.hostname === "localhost"
        ) {
            console.log("Mode développement activé");
            window.cargoDebug = {
                currentSection,
                darkMode,
                simulatedData,
                switchSection,
                showNotification,
            };
        }
    </script>

    <style>
        /* Styles personnalisés additionnels */
        .nav-item {
            position: relative;
            overflow: hidden;
        }

        .nav-item::before {
            content: "";
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg,
                    transparent,
                    rgba(255, 255, 255, 0.2),
                    transparent);
            transition: left 0.5s;
        }

        .nav-item:hover::before {
            left: 100%;
        }

        .action-btn {
            position: relative;
            overflow: hidden;
        }

        .action-btn::after {
            content: "";
            position: absolute;
            top: 50%;
            left: 50%;
            width: 0;
            height: 0;
            background: rgba(255, 255, 255, 0.3);
            border-radius: 50%;
            transform: translate(-50%, -50%);
            transition: width 0.6s, height 0.6s;
        }

        .action-btn:active::after {
            width: 300px;
            height: 300px;
        }

        /* Animation de chargement */
        .loading-spinner {
            border: 3px solid rgba(255, 255, 255, 0.3);
            border-radius: 50%;
            border-top: 3px solid #ffffff;
            width: 20px;
            height: 20px;
            animation: spin 1s linear infinite;
        }

        @keyframes spin {
            0% {
                transform: rotate(0deg);
            }

            100% {
                transform: rotate(360deg);
            }
        }

        /* Amélioration des scrollbars */
        ::-webkit-scrollbar {
            width: 6px;
        }

        ::-webkit-scrollbar-track {
            background: transparent;
        }

        ::-webkit-scrollbar-thumb {
            background: rgba(148, 163, 184, 0.5);
            border-radius: 3px;
        }

        ::-webkit-scrollbar-thumb:hover {
            background: rgba(148, 163, 184, 0.7);
        }

        /* Animation des cartes au survol */
        .shadow-xl {
            transition: all 0.3s ease;
        }

        .shadow-xl:hover {
            transform: translateY(-2px);
            box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
        }

        /* Style pour les codes de suivi */
        input[type="text"]#tracking-code {
            text-transform: uppercase;
            letter-spacing: 2px;
        }

        /* Amélioration des badges de statut */
        [class*="status-"] {
            font-weight: 600;
            font-size: 0.75rem;
            padding: 0.25rem 0.75rem;
            border-radius: 9999px;
            border-width: 1px;
            text-transform: uppercase;
            letter-spacing: 0.05em;
        }
    </style>
</body>

</html>