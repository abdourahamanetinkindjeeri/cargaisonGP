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
                        <span>
                            <?php
                            echo isset($_SESSION['profile']) ? htmlspecialchars($_SESSION['profile']) : 'Invite';
                            ?>
                        </span>
                    </p>
                    <p class="text-blue-100 text-xs">En ligne</p>
                </div>

            </div>
        </div>
    </div>
</div>