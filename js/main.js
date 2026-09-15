// (function () {
//     'use strict';

//     // main.js coordinates page-level behavior that doesn't belong in
//     // navigation.js, certificates.js, or animations.js.

//     document.addEventListener('DOMContentLoaded', () => {
//         initContactForm();
//         printConsoleGreeting();
//     });

//     function initContactForm() {
//         const form = document.getElementById('contactForm');
//         if (!form) return;

//         form.addEventListener('submit', (e) => {
//             e.preventDefault();
//             const feedback = document.getElementById('formFeedback');
//             const name = form.querySelector('#name').value.trim();
//             const email = form.querySelector('#email').value.trim();

//             if (!name || !email) {
//                 feedback.textContent = 'Please fill in your name and email.';
//                 feedback.classList.add('error');
//                 return;
//             }

//             // Frontend-only simulation — wire this to a real backend or
//             // form service (Formspree, Netlify Forms, etc.) when ready.
//             feedback.classList.remove('error');
//             feedback.textContent = `Thank you, ${name}! Your message has been received. I'll get back to you at ${email} within 48 hours.`;
//             form.reset();

//             setTimeout(() => { feedback.textContent = ''; }, 6000);
//         });
//     }

//     function printConsoleGreeting() {
//         console.log('%c🔬 Precision Meets Expression ✨', 'font-size:16px;font-weight:bold;color:#4f6df5;');
//         console.log('%cAmara Okafor — Copywriter · Educator · Optician · MLS · AI Prompt Engineer', 'font-size:12px;color:#6b7280;');
//     }
// })();
(function () {
    'use strict';

    // ────────────────────────────────────────
    // THEME TOGGLE — respects system preference,
    // remembers manual choice in localStorage
    // ────────────────────────────────────────
    const themeToggle = document.getElementById('themeToggle');
    const root = document.documentElement;
    const mql = window.matchMedia('(prefers-color-scheme: dark)');

    function applyTheme(theme) {
        root.setAttribute('data-theme', theme);
    }

    themeToggle.addEventListener('click', () => {
        const current = root.getAttribute('data-theme');
        const next = current === 'dark' ? 'light' : 'dark';
        applyTheme(next);
        localStorage.setItem('theme', next);
    });

    // If the user hasn't manually chosen a theme, follow system changes live
    mql.addEventListener('change', (e) => {
        if (!localStorage.getItem('theme')) {
            applyTheme(e.matches ? 'dark' : 'light');
        }
    });

    // ────────────────────────────────────────
    // CONTACT FORM (front-end only — wire up
    // Formspree/EmailJS/your backend here)
    // ────────────────────────────────────────
    const contactForm = document.getElementById('contactForm');
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const form = e.target;
        const feedback = document.getElementById('formFeedback');
        const name = form.querySelector('input[name="name"]').value.trim();
        const email = form.querySelector('input[name="email"]').value.trim();

        if (!name || !email) {
            feedback.textContent = 'Please fill in your name and email.';
            feedback.style.color = '#e53e3e';
            return;
        }

        feedback.textContent = `Thank you, ${name}! Your message has been received. I'll get back to you at ${email} within 48 hours.`;
        feedback.style.color = 'var(--accent-gold-deep)';
        form.reset();

        setTimeout(() => { feedback.textContent = ''; }, 6000);
    });

    console.log('%c🔬 Precision Meets Expression ✨', 'font-size: 16px; font-weight: bold; color: #c0392b;');
    console.log('%cAmaechi Assumpta — Copywriter · Educator · Optician · MLS · AI Prompt Engineer', 'font-size: 12px; color: #736556;');
})();