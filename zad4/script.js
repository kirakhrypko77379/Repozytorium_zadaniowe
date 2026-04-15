
const themeBtn = document.getElementById("themeBtn");
const link = document.getElementById("themeStylesheet");

let isGreen = true;

themeBtn.addEventListener("click", () => {
    if (isGreen) {
        link.href = "red.css";
    } else {
        link.href = "green.css";
    }

    isGreen = !isGreen;
});


const toggleBtn = document.getElementById("toggleSkills");
const skillsSection = document.getElementById("umiejetnosci");

toggleBtn.addEventListener("click", () => {
    if (skillsSection.style.display === "none") {
        skillsSection.style.display = "block";
    } else {
        skillsSection.style.display = "none";
    }
});