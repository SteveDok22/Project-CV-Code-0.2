// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function () {
    console.log('Script loaded and DOM ready');

    // ===== HAMBURGER MENU FUNCTIONALITY =====
    const navToggle = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links a');
    const body = document.body;

    onsole.log('Navigation elements found:', {
        navToggle: !!navToggle,
        navMenu: !!navMenu,
        navLinks: navLinks.length
    });

     // Toggle mobile menu with better event handling
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function (e) {
            e.preventDefault();
            e.stopPropagation();

            console.log('Hamburger clicked - before toggle');
            console.log('Menu active before:', navMenu.classList.contains('active'));

            // Toggle classes
            navToggle.classList.toggle('active');
            navMenu.classList.toggle('active');

            console.log('Menu active after:', navMenu.classList.contains('active'));

            // Prevent body scroll when menu is open
            if (navMenu.classList.contains('active')) {
                body.style.overflow = 'hidden';
                console.log('Menu opened - body scroll disabled');
            } else {
                body.style.overflow = 'auto';
                console.log('Menu closed - body scroll enabled');
            }
        });
    } else {
        console.error('Navigation elements not found!');
    }

    // Close menu when clicking on a link
    navLinks.forEach((link, index) => {
        link.addEventListener('click', function (e) {
            console.log(`Nav link ${index + 1} clicked`);

            // Close the mobile menu
            if (navToggle && navMenu) {
                navToggle.classList.remove('active');
                navMenu.classList.remove('active');
                body.style.overflow = 'auto';
                console.log('Menu closed via nav link click');
            }
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', function (e) {
        if (navToggle && navMenu) {
            // Check if click is outside both toggle and menu
            const isClickInsideNav = navToggle.contains(e.target) || navMenu.contains(e.target);

            if (!isClickInsideNav && navMenu.classList.contains('active')) {
                navToggle.classList.remove('active');
                navMenu.classList.remove('active');
                body.style.overflow = 'auto';
                console.log('Menu closed via outside click');
            }
        }
    });