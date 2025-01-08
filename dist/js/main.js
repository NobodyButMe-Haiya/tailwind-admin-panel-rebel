const darkModeToggle = document.getElementById("dark-mode-toggle");
const darkModeIcon = document.getElementById("dark-mode-icon");

darkModeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    darkModeIcon.textContent = document.body.classList.contains("dark-mode") ? "🌞" : "🌙";
});

const submenuToggles = document.querySelectorAll(".submenu-toggle");
const toggleIcon = document.getElementById("toggleIcon");
submenuToggles.forEach(toggle => {
    toggle.addEventListener("click", () => {
        toggle.classList.toggle("open");
        const submenu = toggle.nextElementSibling;
        submenu.classList.toggle("open");
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const sidebar = document.getElementById("sidebar");
    const content = document.getElementById("content");
    const toggleButton = document.getElementById("toggleSidebar");

    toggleButton.addEventListener("click", function () {
        if (sidebar.style.display === "none") {
            // Show sidebar
            sidebar.style.display = "block";
            content.style.marginLeft = "16rem"; // Adjust to match sidebar width (e.g., 64 * 0.25rem)
        } else {
            // Hide sidebar
            sidebar.style.display = "none";
            content.style.marginLeft = "0";
        }
    });
});

