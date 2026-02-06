document.addEventListener('DOMContentLoaded', () => {
    // 1. Gestion du lien "Accueil"
    const linkAccueil = document.querySelector('a[href="index.html"]');
    if (linkAccueil) {
        linkAccueil.addEventListener('click', (e) => {
            // Pas besoin de e.preventDefault() ici si vous voulez aller sur la page
            alert("Bienvenue sur l'accueil !");
        });
    }

    // 2. Gestion du lien "Portfolio"
    const linkPortfolio = document.querySelector('a[href="#portfolio"]');
    if (linkPortfolio) {
        linkPortfolio.addEventListener('click', (e) => {
            e.preventDefault(); // Empêche le changement de page
            alert("Voici mes projets...");
        });
    }

    // 3. Gestion du lien "Contact" (avec vos infos)
    const linkContact = document.querySelector('a[href="#contact"]');
    if (linkContact) {
        linkContact.addEventListener('click', (e) => {
            e.preventDefault(); // Empêche le changement de page
            
            // Affichage de vos informations dans une alerte
            alert("Contactez-moi :\n\n" +
                  "Email : Bamba Yacouba.030@gmail.com\n" +
                  "WhatsApp : 0171143387\n" +
                  "Téléphone : 0594437192");
        });
    }

    // 4. Effet visuel sur tous les boutons (À propos et Passion)
    const boutons = document.querySelectorAll('.btn-blue');

    boutons.forEach(btn => {
        btn.addEventListener('mouseenter', () => {
            btn.style.transition = "all 0.2s ease";
            btn.style.transform = "scale(1.1) rotate(2deg)";
        });

        btn.addEventListener('mouseleave', () => {
            btn.style.transform = "scale(1) rotate(0deg)";
        });
    });
});