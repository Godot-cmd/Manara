const toggleBtn = document.querySelector('.toggle_btn');
const toggleBtnIcon = document.querySelector('.toggle_btn i');
const dropdownMenu = document.querySelector('.dropdown_menu');

// Toggle dropdown on button click
toggleBtn.onclick = function (e) {
    e.stopPropagation();  // Prevent click event from bubbling up to the document
    dropdownMenu.classList.toggle('open');

    const isOpen = dropdownMenu.classList.contains('open');
    toggleBtnIcon.classList = isOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars';
};

// Close dropdown if clicked outside of it
document.addEventListener('click', function (e) {
    if (!dropdownMenu.contains(e.target) && !toggleBtn.contains(e.target)) {
        dropdownMenu.classList.remove('open');
        toggleBtnIcon.classList = 'fa-solid fa-bars';  // Reset toggle icon
    }
});

// Handle window resize to reset dropdown state
window.addEventListener('resize', () => {
    if (window.innerWidth > 992) {
        dropdownMenu.classList.remove('open'); // Close the dropdown menu
        toggleBtnIcon.classList = 'fa-solid fa-bars'; // Reset toggle icon
    }
});



document.getElementById('action_btn').addEventListener('click', function (e) {
    e.preventDefault(); // Prevent the default action of the button (if any)
    document.getElementById('contact').scrollIntoView({
        behavior: 'smooth'
    });
});

document.querySelectorAll('.scroll-link').forEach(function (link) {
    link.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent the default anchor link behavior
        const targetId = link.getAttribute('href'); // Get the target section's id
        document.querySelector(targetId).scrollIntoView({
            behavior: 'smooth' // Smooth scroll effect
        });
    });
});

// Get the current year and set it in the footer
document.getElementById('current-year').textContent = new Date().getFullYear();




