// Toggle navigation menu for small screens
function toggleNav() {
    const nav = document.querySelector('nav');
    nav.classList.toggle('active');
}

// Close the menu if clicked outside
window.addEventListener('click', function(event) {
    const hamburger = document.getElementById('hamburger-menu');
    const navLinks = document.getElementById('nav-links');
    if (!hamburger.contains(event.target) && !navLinks.contains(event.target)) {
        document.querySelector('nav').classList.remove('active');
    }
});

// Close the menu on clicking a nav item
const navItems = document.querySelectorAll('nav a');
navItems.forEach(item => {
    item.addEventListener('click', () => {
        document.querySelector('nav').classList.remove('active');
    });
});
