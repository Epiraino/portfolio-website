// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
});

// Mobile menu toggle
const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
const navContainer = document.querySelector('.nav-container');

mobileMenuToggle.addEventListener('click', () => {
    navContainer.classList.toggle('open');
    mobileMenuToggle.setAttribute('aria-expanded', navContainer.classList.contains('open'));
});

// Skills filtering
const skillFilter = document.getElementById('skill-filter');
const skillItems = document.querySelectorAll('#skills li');

skillFilter.addEventListener('change', (event) => {
    const selectedCategory = event.target.value;

    skillItems.forEach((skill) => {
        if (selectedCategory === 'all') {
            skill.style.display = 'block';
        } else if (skill.dataset.category === selectedCategory) {
            skill.style.display = 'block';
        } else {
            skill.style.display = 'none';
        }
    });
});
