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
// formContacto
const formContacto = document.getElementById("formContacto")
const nombre = document.getElementById("nombre")
const email = document.getElementById("email")
formContacto.addEventListener("submit", (e) => {
    e.preventDefault()
    console.log("hi")
    Swal.fire({
        icon: 'success',
        title: '¡Formulario enviado!',
        text: `Excelente ${nombre.value}, recibirás una respuesta lo antes posible a través de ${email.value}.`,
        footer: `<a href="https://api.whatsapp.com/send?phone=1164679257">También nos podés contactar vía WhatsApp haciendo click acá!</a>`
    })
})

/*Swal.fire({
    icon: 'error',
    title: '¡Faltan datos!',
    text: 'Por favor, completálos así nos podemos contactar mas eficientemente.',
})*/
/*Swal.fire({
    icon: 'success',
    title: '¡Formulario enviado!',
    text: `Excelente ${formData.get("nombre")}, recibirás una respuesta lo antes posible a través de ${formData.get("email")}.`,
    footer: `<a href="https://api.whatsapp.com/send?phone=1164679257">También nos podés contactar vía WhatsApp haciendo click acá!</a>`
})*/
