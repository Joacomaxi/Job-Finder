document.addEventListener('DOMContentLoaded', () => {
    // Menú hamburguesa
    const burgerMenu = document.getElementById('burger-menu');
    const navMenu = document.getElementById('nav-menu');

    burgerMenu.addEventListener('click', () => {
        navMenu.classList.toggle('visible');
        navMenu.classList.toggle('show');
    });

    // Menú de perfil
    const profileIcon = document.getElementById('profile-icon');
    const profileMenu = document.getElementById('profile-menu');

    profileIcon.addEventListener('click', () => {
        profileMenu.classList.toggle('show');
    });

    // Cerrar los menús si se hace clic fuera de ellos
    window.addEventListener('click', (e) => {
        if (!burgerMenu.contains(e.target) && !navMenu.contains(e.target)) {
            navMenu.classList.remove('show');
        }
        if (!profileIcon.contains(e.target) && !profileMenu.contains(e.target)) {
            profileMenu.classList.remove('show');
        }
    });

    // Evitar cerrar el menú al hacer clic dentro de él
    profileMenu.addEventListener('click', (e) => {
        e.stopPropagation();
    });

    // Mapa
    const map = L.map('map').setView([-38.9516, -68.0591], 12); // Centrando el mapa en Neuquén capital

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    const servicios = [
        { lat: -38.9516, lng: -68.0591, tipo_servicio: 'Electricista', nombre: 'Juan Perez' },
        { lat: -38.9550, lng: -68.0630, tipo_servicio: 'Plomero', nombre: 'Carlos Lopez' },
        { lat: -38.9512188, lng: -68.1787894, tipo_servicio: 'Tecnico de Celulares', nombre: 'Maximiliano Sanchez' },
        { lat: -41.1338114, lng: -71.3107915, tipo_servicio: 'Macdonals', nombre: 'Bariloche' },
        // Agrega más servicios aquí
    ];

    servicios.forEach(servicio => {
        L.marker([servicio.lat, servicio.lng])
            .addTo(map)
            .bindPopup(`<b>${servicio.tipo_servicio}</b><br>${servicio.nombre}`);
    });

    document.addEventListener('scroll', () => {
        const footer = document.querySelector('footer');
        const scrollPosition = window.scrollY;

        // Ajusta el valor según la cantidad de scroll que deseas antes de mostrar el footer
        if (scrollPosition > 300) { // Cambia 300 por el valor deseado
            footer.style.bottom = '0';
        } else {
            footer.style.bottom = '-100px'; // Oculta el footer si no se ha alcanzado la posición deseada
        }
    });
});
