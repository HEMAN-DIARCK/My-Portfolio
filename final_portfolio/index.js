const darkModeToggle = document.getElementById('darkModeToggle');
const body = document.body;

darkModeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    body.classList.toggle('light-mode');

    const isDarkMode = body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', isDarkMode);
});

// Check for saved dark mode preference
const isDarkMode = localStorage.getItem('darkMode') === 'true';

if (isDarkMode) {
    body.classList.add('dark-mode');
} else {
    body.classList.add('light-mode');
}
