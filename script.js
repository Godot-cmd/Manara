
const toggleBtn = document.querySelector('.toggle_btn');
const toggleBtnIcon = document.querySelector('.toggle_btn i');
const dropdownMenu = document.querySelector('.dropdown_menu');

// Toggle dropdown on button click
toggleBtn.onclick = function () {
    dropdownMenu.classList.toggle('open');

    const isOpen = dropdownMenu.classList.contains('open');
    toggleBtnIcon.classList = isOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars';
};

// Handle window resize to reset dropdown state
window.addEventListener('resize', () => {
    if (window.innerWidth > 992) {
        dropdownMenu.classList.remove('open'); // Close the dropdown menu
        toggleBtnIcon.classList = 'fa-solid fa-bars'; // Reset toggle icon
    }
});
