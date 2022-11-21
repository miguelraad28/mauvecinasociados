const navbar = document.getElementById("navbar")
window.addEventListener("scroll", function(){
    navbar.classList.toggle("scrollDown", window.scrollY > 0);
})