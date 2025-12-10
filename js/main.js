// main.js

// Scroll Progress Indicator
window.addEventListener('scroll', () => {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    const scrollIndicator = document.querySelector('.scroll-indicator');
    if (scrollIndicator) {
        scrollIndicator.style.width = scrolled + '%';
    }
});

// Set 'active' class on current page's nav link
document.addEventListener('DOMContentLoaded', () => {
    const currentPage = window.location.pathname.split('/').pop();
    if (currentPage === '' || currentPage === 'index.html') {
        // You might want to handle the root case differently, e.g. homepage.html
        document.querySelector('nav a[href="homepage.html"]').classList.add('active');
    } else {
        const activeLink = document.querySelector(`nav a[href="${currentPage}"]`);
        if (activeLink) {
            activeLink.classList.add('active');
        }
    }
});
