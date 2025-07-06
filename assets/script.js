// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function () {
    console.log('Script loaded and DOM ready');

    // ===== HAMBURGER MENU FUNCTIONALITY =====
    const navToggle = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links a');
    const body = document.body;