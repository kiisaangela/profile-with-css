document.addEventListener("DOMContentLoaded", function () {
    const themeSwitch = document.getElementById("theme-switch");
    const darkIcon = document.getElementById("dark-icon");
    const lightIcon = document.getElementById("light-icon");
    const body = document.body;

    // Set initial icon states based on current theme
    if (localStorage.getItem("theme") === "light") {
        // If light mode is active, show the dark mode icon (moon)
        body.classList.add("light-mode");
        darkIcon.style.display = "block";
        lightIcon.style.display = "none";
    } else {
        // Default dark mode, show the light mode icon (sun)
        darkIcon.style.display = "none";
        lightIcon.style.display = "block";
    }

    // Toggle Light/Dark mode
    themeSwitch.addEventListener("click", function () {
        body.classList.toggle("light-mode");

        if (body.classList.contains("light-mode")) {
            // When in light mode, show the dark mode icon (moon)
            localStorage.setItem("theme", "light");
            darkIcon.style.display = "block";
            lightIcon.style.display = "none";
        } else {
            // When in dark mode, show the light mode icon (sun)
            localStorage.setItem("theme", "dark");
            darkIcon.style.display = "none";
            lightIcon.style.display = "block";
        }
    });
});