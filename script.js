document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector("nav ul");
    const navItems = document.querySelectorAll("nav ul li a");

    // Toggle mobile menu
    hamburger.addEventListener("click", function () {
        navLinks.classList.toggle("active");
    });

    // Close menu when clicking on a menu item
    navItems.forEach(item => {
        item.addEventListener("click", function () {
            navLinks.classList.remove("active");
        });
    });

    // Close menu when clicking outside the nav
    document.addEventListener("click", function (event) {
        if (!hamburger.contains(event.target) && !navLinks.contains(event.target)) {
            navLinks.classList.remove("active");
        }
    });
});
