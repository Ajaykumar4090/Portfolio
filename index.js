// toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

// scroll section
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                document.querySelector('header nav a[href*="' + id + '"]').classList.add('active');
            });
        }
    });
};


// sticky header

window.onscroll = () => {
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
}





const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// Check and apply the saved theme or set default to dark
const savedTheme = localStorage.getItem('theme') || 'dark';
body.classList.add(savedTheme);

// Update the toggle icon based on the current theme
const updateIcon = () => {
    themeToggle.innerHTML = body.classList.contains('dark')
        ? '<i class="bx bx-sun"></i>'
        : '<i class="bx bx-moon"></i>';
};
updateIcon();

// Toggle theme on button click
themeToggle.addEventListener('click', () => {
    const currentTheme = body.classList.contains('dark') ? 'dark' : 'light';
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

    // Switch theme
    body.classList.remove(currentTheme);
    body.classList.add(newTheme);

    // Update the toggle icon
    updateIcon();

    // Save the theme in localStorage
    localStorage.setItem('theme', newTheme);
});


