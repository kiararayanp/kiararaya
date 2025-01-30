function toggleMenu() {
    var navLinks = document.getElementById("nav-links");
    navLinks.classList.toggle("active");
}

// Close menu when clicking on a nav link or background
function closeMenu() {
    var navLinks = document.getElementById("nav-links");
    if (navLinks.classList.contains("active")) {
        navLinks.classList.remove("active");
    }
}

// Close menu if clicking outside the navbar
document.addEventListener("click", function(event) {
    var nav = document.querySelector("nav");
    var menu = document.getElementById("nav-links");
    var hamburger = document.querySelector(".hamburger");

    if (!nav.contains(event.target) && menu.classList.contains("active")) {
        menu.classList.remove("active");
    }
});
