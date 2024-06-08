document.addEventListener('DOMContentLoaded', () => {
    // Code to switch themes
    const themeSwitchButton = document.getElementById('themeSwitchButton');
    const icon = themeSwitchButton.querySelector('.material-icons');

    themeSwitchButton.addEventListener('click', () => {
        if (document.body.getAttribute('data-bs-theme') === 'dark') {
            document.body.setAttribute('data-bs-theme', 'light');
            icon.textContent = 'light_mode';
            icon.style.color = 'white'; // Ensure sun icon stays white
        } else {
            document.body.setAttribute('data-bs-theme', 'dark');
            icon.textContent = 'dark_mode';
            icon.style.color = ''; // Reset color
        }
    });

    // Code to change the job tile dynamically every 2 seconds
    const jobTitles = [
        "Senior Cloud Engineer",
        "Software Engineer",
        "Game Designer and Developer"
    ];
    
    let currentIndex = 0;
    const jobTitleElement = document.getElementById('job-title');
    let isDeleting = false;
    let charIndex = 0;
    const typingSpeed = 100;
    const deletingSpeed = 50;
    const delayBetweenTitles = 2000;

    function type() {
        const currentTitle = jobTitles[currentIndex];
        if (isDeleting) {
            jobTitleElement.textContent = currentTitle.substring(0, charIndex--);
            if (charIndex < 0) {
                isDeleting = false;
                currentIndex = (currentIndex + 1) % jobTitles.length;
                setTimeout(type, 500); // Wait before starting to type the new title
            } else {
                setTimeout(type, deletingSpeed);
            }
        } else {
            jobTitleElement.textContent = currentTitle.substring(0, charIndex++);
            if (charIndex > currentTitle.length) {
                isDeleting = true;
                setTimeout(type, delayBetweenTitles); // Wait before starting to delete
            } else {
                setTimeout(type, typingSpeed);
            }
        }
    }

    setTimeout(type, 500); // Initial delay before starting the typing effect
});
