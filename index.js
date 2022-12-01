const navbarContainer = document.getElementById("navbarContainer")
window.addEventListener("scroll", function () {
    navbarContainer.classList.toggle("scrollDown", window.scrollY > 0);
})
// Cierre propio para el mobileNavbar (offCanvas) debido a que el data-bs-dismiss de bootstrap no me permite realizar la navegación a través de la página, cierra el offCanvas y la navegación queda a medias.
const offCanvas = document.getElementById("offCanvas")
document.querySelectorAll('.mobileNavbarButton').forEach(item => {
    item.addEventListener('click', () => {
        document.body.removeAttribute("style")
        const offCanvasBackdrop = document.querySelector(".offcanvas-backdrop")
        offCanvas.classList.toggle("hiding")
        offCanvasBackdrop.classList.toggle("show")
        offCanvasBackdrop.remove()
        setTimeout(() => {
            offCanvas.removeAttribute("aria-modal")
            offCanvas.removeAttribute("role")
            offCanvas.classList.toggle("hiding")
            offCanvas.classList.toggle("show")
        }, 1000);

    })
})