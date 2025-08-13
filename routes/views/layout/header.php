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