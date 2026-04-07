document.addEventListener('DOMContentLoaded', () => {
    const banner = document.getElementById('demo-banner');

    window.addEventListener('scroll', () => {
        // Si el scroll baja más de 50px
        if (window.scrollY > 50) {
            banner.classList.add('hidden-banner');
        } else {
            banner.classList.remove('hidden-banner');
        }
    });
});

document.addEventListener('click', function (event) {
    const navbarCollapse = document.getElementById('navbarNav'); // El ID de tu menú
    const navbarToggler = document.querySelector('.navbar-toggler'); // El botón hamburguesa
    
    // Verificamos si el menú está desplegado (Bootstrap usa la clase 'show')
    const isMenuOpen = navbarCollapse.classList.contains('show');
    
    // Verificamos si el click fue FUERA del menú y FUERA del botón hamburguesa
    const clickOutsideMenu = !navbarCollapse.contains(event.target);
    const clickOutsideToggler = !navbarToggler.contains(event.target);

    if (isMenuOpen && clickOutsideMenu && clickOutsideToggler) {
        // Usamos la API de Bootstrap para cerrar el menú programáticamente
        const bsCollapse = new bootstrap.Collapse(navbarCollapse);
        bsCollapse.hide();
    }
});

// Extra: Cerrar el menú automáticamente cuando hacés click en un link (ancla)
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        const navbarCollapse = document.getElementById('navbarNav');
        if (navbarCollapse.classList.contains('show')) {
            const bsCollapse = new bootstrap.Collapse(navbarCollapse);
            bsCollapse.hide();
        }
    });
});