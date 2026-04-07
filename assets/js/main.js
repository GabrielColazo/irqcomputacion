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