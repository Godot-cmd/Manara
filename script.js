const toggleBtn = document.querySelector('.toggle_btn');
const toggleBtnIcon = document.querySelector('.toggle_btn i');
const dropdownMenu = document.querySelector('.dropdown_menu');

// Toggle dropdown on button click or tap
toggleBtn.onclick = toggleBtn.ontouchstart = function (e) {
    e.stopPropagation();  // Prevent event from bubbling up to the document
    dropdownMenu.classList.toggle('open');

    const isOpen = dropdownMenu.classList.contains('open');
    toggleBtnIcon.classList = isOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars';
};

// Close dropdown if clicked or tapped outside of it
const closeDropdown = (e) => {
    if (!dropdownMenu.contains(e.target) && !toggleBtn.contains(e.target)) {
        dropdownMenu.classList.remove('open');
        toggleBtnIcon.classList = 'fa-solid fa-bars';  // Reset toggle icon
    }
};

// Listen for both click and touchstart events on document
document.addEventListener('click', closeDropdown);
document.addEventListener('touchstart', closeDropdown);

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




