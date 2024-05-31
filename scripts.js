document.addEventListener('DOMContentLoaded', () => {
    const themeSwitchButton = document.getElementById('themeSwitchButton');
    const body = document.body;
    const lightIcon = 'light_mode';
    const darkIcon = 'dark_mode';

    themeSwitchButton.addEventListener('click', () => {
        const isDarkMode = body.getAttribute('data-bs-theme') === 'dark';
        body.setAttribute('data-bs-theme', isDarkMode ? 'light' : 'dark');
        themeSwitchButton.innerHTML = `<span class="material-icons">${isDarkMode ? lightIcon : darkIcon}</span>`;
    });
});
