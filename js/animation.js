(function () {
    'use strict';

    // Scroll reveal via Intersection Observer
    const revealElements = document.querySelectorAll('.reveal');
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                revealObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

    revealElements.forEach(el => revealObserver.observe(el));

    // Orbital item positioning (responsive radius)
    function adjustOrbitalForScreen() {
        const width = window.innerWidth;
        const items = document.querySelectorAll('.orbital-item');
        let radius = 170;
        if (width <= 1024) radius = 140;
        if (width <= 768) radius = 110;
        if (width <= 480) radius = 80;

        items.forEach((item) => {
            const angle = parseFloat(item.getAttribute('data-angle')) || 0;
            const rad = (angle * Math.PI) / 180;
            const x = Math.cos(rad) * radius;
            const y = Math.sin(rad) * radius;
            item.style.transform = `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`;
        });
    }

    adjustOrbitalForScreen();
    window.addEventListener('resize', adjustOrbitalForScreen);
})();