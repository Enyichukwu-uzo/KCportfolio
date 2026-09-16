(function () {
    'use strict';

    // Certificate data. If `image` points to a real file in assets/certificates/,
    // it's shown instead of the styled text fallback.
    const credentialsData = {
        'bsce-mls': {
            title: 'Bachelor of Science',
            subtitle: 'Medical Laboratory Science',
            name: 'Amaechi Kelechi Assumpta',
            detail: 'Awarded by Imo State University for the successful completion of the four-year Medical Laboratory Science programme, with coursework in haematology, clinical chemistry, microbiology, and immunology.',
            year: '2020',
            seal: '🎓',
            image: 'assets/certificates/bsc-mls.jpg'
        },
        'opticianry': {
            title: 'Opticianry Certification',
            subtitle: 'Professional Dispensing Optician',
            name: 'Amaechi Kelechi Assumpta',
            detail: 'Certified by the Nigerian Opticianry Institute for excellence in lens dispensing, frame fitting, and patient optical care. Includes advanced training in corrective lens technology and patient communication.',
            year: '2021',
            seal: '👓',
            image: 'assets/certificates/opticianry.jpg'
        },
        'ai-prompt': {
            title: 'Certification in AI Prompt Engineering',
            subtitle: 'Human-AI Interaction Design',
            name: 'Amaechi Kelechi Assumpta',
            detail: 'Awarded by the AI Institute of Professional Studies for advanced proficiency in prompt design, AI workflow optimisation, and ethical AI implementation across research and creative domains.',
            year: '2024',
            seal: '🤖',
            image: "assets/images/KC's cert.jpeg"
        },
        'teaching': {
            title: 'Postgraduate Certificate in Education',
            subtitle: 'Science Education & Pedagogy',
            name: 'Amaechi Assumpta',
            detail: 'Professional copy writing qualification specialising in science education, curriculum design, and inclusive pedagogy for diverse learning environments.',
            year: '2022',
            seal: '📜',
            image: 'assets/images/copywritingcert.jpeg'
        }
    };

    const modalOverlay = document.getElementById('credentialModal');
    const modalClose = document.getElementById('modalClose');
    const modalContent = document.getElementById('modalContent');
    let lastFocusedEl = null;

    function openCredentialModal(certId) {
        const cert = credentialsData[certId];
        if (!cert) return;

        modalContent.innerHTML = `
            <div class="certificate-display">
                <img class="cert-image" src="${cert.image}" alt="${cert.title} certificate"
                     onerror="this.remove();" />
        `;

        lastFocusedEl = document.activeElement;
        modalOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
        modalClose.focus();
    }

    function closeCredentialModal() {
        modalOverlay.classList.remove('active');
        document.body.style.overflow = '';
        if (lastFocusedEl) lastFocusedEl.focus();
    }

    document.querySelectorAll('.cred-view-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            openCredentialModal(btn.getAttribute('data-cert'));
        });
    });

    modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) closeCredentialModal();
    });
    modalClose.addEventListener('click', closeCredentialModal);

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modalOverlay.classList.contains('active')) {
            closeCredentialModal();
        }
        // Basic focus trap
        if (e.key === 'Tab' && modalOverlay.classList.contains('active')) {
            const focusable = modalOverlay.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
            if (!focusable.length) return;
            const first = focusable[0];
            const last = focusable[focusable.length - 1];
            if (e.shiftKey && document.activeElement === first) {
                e.preventDefault(); last.focus();
            } else if (!e.shiftKey && document.activeElement === last) {
                e.preventDefault(); first.focus();
            }
        }
    });
})();