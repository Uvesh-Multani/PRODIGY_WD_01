const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".fixed-nav nav");

hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("active");
    hamburger.classList.toggle("click");
});

// Change nav background on scroll
window.addEventListener("scroll", () => {
    const header = document.querySelector(".fixed-nav");
    if (window.scrollY > 50) {
        header.style.backgroundColor = "#282c34"; // Darker background when scrolling
    } else {
        header.style.backgroundColor = "rgba(50, 50, 50, 0.9)"; // Original semi-transparent background
    }
});
