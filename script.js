let videoteca = [
   {
      nome: "Space Jam",
      id: 1,
      completato: true,
   },
   {
      nome: "Sword Art Online",
      id: 2,
      completato: false,
   },
   {
      nome: "The last of us",
      id: 3,
      completato: true,
   },
   {
      nome: "Il ciclone",
      id: 4,
      completato: false,
   },
]



const themeToggleBtn = document.getElementById('themeToggle');

// aggiungo il click al bottone tema scuro e chiaro
themeToggleBtn.addEventListener('click', function () {
    // Alterna la classe 'dark-mode' sul body
    document.body.classList.toggle('dark-mode');

    // Cambia il testo e l'icona dentro il bottone
    if (document.body.classList.contains('dark-mode')) {
        themeToggleBtn.innerHTML = '<i class="fas fa-sun"></i> Tema Chiaro';
    } else {
        themeToggleBtn.innerHTML = '<i class="fas fa-moon"></i> Tema Scuro';
    }
});