// js/homepage.js
window.addEventListener('load', () => {
    const animation = document.getElementById('opening-animation');
    
    // Wait for animation to finish, then hide it
    setTimeout(() => {
        document.body.classList.add('loaded');
    }, 2500); // Animation duration (1.5s) + delay (1s)
});

