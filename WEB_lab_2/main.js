const OPEN_CLASSNAME = "open";
const navLinks = document.querySelector(".nav-links");

document.getElementById("menu-toggle").addEventListener("change", function () {
    if (this.checked) {
        navLinks.classList.add(OPEN_CLASSNAME);
    } else {
        navLinks.classList.remove(OPEN_CLASSNAME);
    }
});