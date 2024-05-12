document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('broadband-form');
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        const postalCode = document.getElementById('postal-code').value;
        const landlineNumber = document.getElementById('landline-number').value;
        // lets log the Postal Code and Landline Number
        console.log('Postal Code:', postalCode);
        console.log('Landline Number:', landlineNumber);
    });

    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const navLinks = document.querySelector('.nav-links');
    const navLinksList = document.querySelectorAll('.nav-links li a');

    // Toggle navigation links when hamburger menu is clicked
    hamburgerMenu.addEventListener('click', function () {
        navLinks.classList.toggle('show');
    });
    // Close sidebar when a navigation link is clicked
    navLinksList.forEach(function (link) {
        link.addEventListener('click', function () {
            navLinks.classList.remove('show');
        });
    });
});
