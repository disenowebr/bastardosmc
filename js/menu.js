const nav = document.querySelector("#navegador");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");


function abrirMenu() {
    nav.classList.toggle("visible");
}

abrir.addEventListener("click", abrirMenu);
cerrar.addEventListener("click", abrirMenu);

const cerrarMenuLinks = document.querySelectorAll("#navegador a[href^='#']");
cerrarMenuLinks.forEach(cerrarMenuLinks => {
    cerrarMenuLinks.addEventListener('click', function () {
        nav.classList.remove("visible");
    })
})
