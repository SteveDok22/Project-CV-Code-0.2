// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function () {
    console.log('Script loaded and DOM ready');

    // ===== HAMBURGER MENU FUNCTIONALITY =====
    const navToggle = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links a');
    const body = document.body;

    console.log('Navigation elements found:', {
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

    // Handle window resize
    window.addEventListener('resize', function () {
        if (window.innerWidth > 768 && navToggle && navMenu) {
            navToggle.classList.remove('active');
            navMenu.classList.remove('active');
            body.style.overflow = 'auto';
            console.log('Menu closed via window resize');
        }
    });

    // ===== SMOOTH SCROLL FOR INTERNAL LINKS =====
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const target = document.querySelector(targetId);

            if (target) {
                const offsetTop = target.offsetTop - 100; // Account for fixed navbar
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
                console.log(`Smooth scrolling to ${targetId}`);
            }
        });
    });

    // ===== ACTIVE STATE ON SCROLL =====
    const sections = document.querySelectorAll('.section');

    function updateActiveNav() {
        let current = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.pageYOffset >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + current) {
                link.classList.add('active');
            }
        });
    }

    // Throttled scroll event for better performance
    let scrollTimeout;
    window.addEventListener('scroll', function () {
        if (scrollTimeout) {
            clearTimeout(scrollTimeout);
        }
        scrollTimeout = setTimeout(updateActiveNav, 10);
    });

    // Initial call to set active state
    updateActiveNav();

    // ===== ANIMATION TRIGGER ON SCROLL =====
    const sectionsToAnimate = document.querySelectorAll('.section');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'slideUp 0.8s ease-out';
            }
        });
    }, { threshold: 0.1 });

    sectionsToAnimate.forEach(section => {
        observer.observe(section);
    });

    // ===== FLOATING ELEMENTS CREATION =====
    const floatingContainer = document.querySelector('.floating-elements');

    function createFloatingElement() {
        if (!floatingContainer) return;

        const element = document.createElement('div');
        element.className = 'floating-element';
        element.style.width = Math.random() * 60 + 40 + 'px';
        element.style.height = element.style.width;
        element.style.left = Math.random() * 100 + '%';

        // Random gradient colors
        const colors = [
            'linear-gradient(45deg, #ff6b6b, #ee5a24)',
            'linear-gradient(45deg, #4ecdc4, #00b894)',
            'linear-gradient(45deg, #45b7d1, #0984e3)',
            'linear-gradient(45deg, #96ceb4, #00b894)',
            'linear-gradient(45deg, #ffeaa7, #fdcb6e)'
        ];

        element.style.background = colors[Math.floor(Math.random() * colors.length)];
        element.style.animationDuration = Math.random() * 10 + 10 + 's';
        element.style.animationDelay = Math.random() * 5 + 's';

        floatingContainer.appendChild(element);

        setTimeout(() => {
            if (element.parentNode) {
                element.remove();
            }
        }, 20000);
    }

    // Create floating elements periodically
    setInterval(createFloatingElement, 3000);

    // Create initial floating elements
    for (let i = 0; i < 3; i++) {
        setTimeout(() => createFloatingElement(), i * 1000);
    }

    // ===== MOBILE TOUCH HANDLING =====
    let touchStartX = 0;
    let touchStartY = 0;
    let touchStartTime = 0;

    document.addEventListener('touchstart', function (e) {
        touchStartX = e.touches[0].clientX;
        touchStartY = e.touches[0].clientY;
        touchStartTime = Date.now();
    }, { passive: true });

    document.addEventListener('touchmove', function (e) {
        // Only prevent scrolling when menu is active
        if (navMenu && navMenu.classList.contains('active')) {
            e.preventDefault();
        }
    }, { passive: false });

    // Add swipe gesture to close menu
    document.addEventListener('touchend', function (e) {
        if (navMenu && navMenu.classList.contains('active')) {
            const touchEndX = e.changedTouches[0].clientX;
            const touchEndY = e.changedTouches[0].clientY;
            const touchEndTime = Date.now();

            const deltaX = touchEndX - touchStartX;
            const deltaY = touchEndY - touchStartY;
            const deltaTime = touchEndTime - touchStartTime;

            // Check for swipe left gesture (close menu)
            if (deltaTime < 300 && Math.abs(deltaX) > 50 && Math.abs(deltaY) < 100 && deltaX < 0) {
                navToggle.classList.remove('active');
                navMenu.classList.remove('active');
                body.style.overflow = 'auto';
                console.log('Menu closed via swipe gesture');
            }
        }
    }, { passive: true });

    // ===== CARD HOVER EFFECTS =====
    const cards = document.querySelectorAll('.card, .skill-box, .timeline-item, .project-card, .reference-card');

    cards.forEach(card => {
        card.addEventListener('mouseenter', function () {
            this.style.transform = 'translateY(-10px)';
        });

        card.addEventListener('mouseleave', function () {
            this.style.transform = '';
        });
    });

    // ===== DOWNLOAD BUTTON ANALYTICS =====
    const downloadBtns = document.querySelectorAll('.download-btn');

    downloadBtns.forEach(btn => {
        btn.addEventListener('click', function (e) {
            const btnType = this.classList.contains('secondary') ? 'email' : 'pdf';
            console.log(`Download button clicked: ${btnType}`);

            // You can add analytics tracking here
            // Example: gtag('event', 'download', { 'event_category': 'CV', 'event_label': btnType });
        });
    });

    // ===== PERFORMANCE MONITORING =====
    // Monitor page load performance
    window.addEventListener('load', function () {
        const loadTime = performance.now();
        console.log(`Page fully loaded in ${loadTime.toFixed(2)}ms`);
    });

    // ===== DEBUG INFORMATION =====
    console.log('Script initialization complete');
    console.log('Viewport width:', window.innerWidth);
    console.log('User agent:', navigator.userAgent);

    // Test function for debugging
    window.testHamburger = function () {
        console.log('Testing hamburger menu...');
        if (navToggle && navMenu) {
            navToggle.click();
            console.log('Hamburger clicked programmatically');
        } else {
            console.error('Navigation elements not found for test');
        }
    };

    // Expose useful functions for debugging
    window.portfolioDebug = {
        toggleMenu: () => navToggle?.click(),
        scrollToSection: (id) => {
            const element = document.querySelector(id);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        },
        createFloatingElement: createFloatingElement,
        getActiveSection: () => {
            let current = '';
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                if (window.pageYOffset >= sectionTop - 200) {
                    current = section.getAttribute('id');
                }
            });
            return current;
        }
    };
});