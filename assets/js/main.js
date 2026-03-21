document.addEventListener('DOMContentLoaded', () => {
    // 1. Gestion du menu mobile
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mainNav = document.querySelector('.main-nav');

    if (mobileMenuBtn && mainNav) {
        mobileMenuBtn.addEventListener('click', () => {
            mainNav.classList.toggle('show');
            mobileMenuBtn.innerHTML = mainNav.classList.contains('show') ? '✕' : '☰';
        });
    }

    // 2. Gestion basique des formulaires (empêche le rechargement par défaut pour la démo)
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            // Ici, vous pouvez ajouter une requête fetch/AJAX vers votre backend PHP ou API
            alert('Merci pour votre demande. Notre équipe vous recontactera sous 24h.');
            form.reset();
        });
    });

    // 3. Smooth scroll pour les ancres internes (ex: #services)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if(targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();
                // Fermer le menu mobile si ouvert
                if (mainNav && mainNav.classList.contains('show')) {
                    mainNav.classList.remove('show');
                    mobileMenuBtn.innerHTML = '☰';
                }
                
                // Scroll avec offset pour le header sticky
                const headerOffset = 80;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
  
                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
            }
        });
    });
});