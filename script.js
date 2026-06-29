window.onload = function () {
    alert("Welcome to Pavithra's Portfolio 🤍");
};

const sections = document.querySelectorAll("section");

sections.forEach((section) => {
    section.addEventListener("mouseenter", () => {
        section.style.transform = "scale(1.02)";
        section.style.transition = "0.3s";
    });

    section.addEventListener("mouseleave", () => {
        section.style.transform = "scale(1)";
    });
});