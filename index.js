const navbarContainer = document.getElementById("navbarContainer")
window.addEventListener("scroll", function () {
    navbarContainer.classList.toggle("scrollDown", window.scrollY > 0);
})
const navbar = document.getElementById("navbar")
window.addEventListener("scroll", function () {
    navbar.classList.toggle("scrollDownShadow", window.scrollY > 0);
})