// script.js - interactividad del portafolio

// cuando la pagina carga, muestro un mensaje de bienvenida
document.addEventListener("DOMContentLoaded", function () {

    console.log("Bienvenido al portafolio");

// creo un div para el banner y lo agrego arriba de todo
    const banner = document.createElement("div");
    banner.id = "banner-bienvenida";
    banner.textContent = "¡Bienvenido a mi portafolio!";
    document.body.prepend(banner);

// despues de 3 segundos lo hago desaparecer
// esto se hace con un setTimeout, que espera 3 segundos y 
// luego cambia la opacidad del banner a 0, 
    setTimeout(function () {
        banner.style.opacity = "0";
        setTimeout(function () {
            banner.remove();
        }, 600);
    }, 3000);
});


// boton contactame - al hacer clic cambia el texto del parrafo
// Al hacer clic en el botón "Contáctame", 
// el texto del párrafo "Sobre mí" cambia para mostrar un mensaje de contacto.
const btnContactame = document.getElementById("btn-contactame");
const parrafoSobreMi = document.getElementById("texto-sobremi");

if (btnContactame && parrafoSobreMi) {
    const textoOriginal = parrafoSobreMi.textContent;
    let mostrandoOriginal = true;

    btnContactame.addEventListener("click", function () {
        if (mostrandoOriginal) {
            parrafoSobreMi.textContent = 
                "¡Hola! Me encantaría trabajar contigo. Puedes escribirme a través del formulario de contacto o encontrarme en LinkedIn. ¡Hablemos!";
            btnContactame.textContent = "Ver descripción";
        } else {
            parrafoSobreMi.textContent = textoOriginal;
            btnContactame.textContent = "Contáctame";
        }
        mostrandoOriginal = !mostrandoOriginal;
    });
}


// boton descargar cv - muestra u oculta un mensaje
// Al hacer clic en el botón "Descargar CV", 
// se muestra un mensaje con información adicional sobre el CV.Tambien permite
// que el PDF pueda ser descargado, y al hacer clic nuevamente, 
// el mensaje se oculta y el botón vuelve a su estado original.
const btnCV = document.getElementById("btn-cv");
const mensajeCV = document.getElementById("mensaje-cv");

if (btnCV && mensajeCV) {
    btnCV.addEventListener("click", function () {
        if (mensajeCV.style.display === "none" || mensajeCV.style.display === "") {
            mensajeCV.style.display = "block";
            btnCV.textContent = "Ocultar info";
        } else {
            mensajeCV.style.display = "none";
            btnCV.textContent = "Descargar CV";
        }
    });
}

// MENU HAMBURGUESA
//Esta parte es la que ayuda almenú hambuerguesa a ocultar los
// botones al momento de pasar a un formato de celular.
// Es una función que se ejecuta cuando haces clic en el botón del menú hamburguesa.

const menuToggle = document.getElementById("menu-toggle");
const menu = document.getElementById("menu");

if (menuToggle && menu) {
    menuToggle.addEventListener("click", () => {
        menu.classList.toggle("activo");
    });
}