// Selección de elementos del DOM
const botonEncriptar = document.querySelector(".btn-encriptar");
const botonDesencriptar = document.querySelector(".btn-desencriptar");
const contenedorMunieco = document.querySelector(".contenedor-munieco");
const contenedorParrafo = document.querySelector(".contenedor-parrafo");
const resultado = document.querySelector("#mensaje");
const btnCopiar = document.querySelector(".btn-copiar");
const alertaError = document.querySelector("#alertaError");
const textArea = document.querySelector("#textoInput");

// Event listeners para los botones
botonEncriptar.addEventListener("click", encriptar);
botonDesencriptar.addEventListener("click", desencriptar);
btnCopiar.addEventListener("click", copiarAlPortapapeles);

function encriptar() {
    ocultarAdelante();
    const texto = recuperarTexto();
    resultado.value = encriptarTexto(texto);
}

function desencriptar() {
    ocultarAdelante();
    const texto = recuperarTexto();
    resultado.value = desencriptarTexto(texto);
}

function recuperarTexto() {
    return textArea.value;
}

function ocultarAdelante() {
    contenedorMunieco.classList.add("ocultar");
    contenedorParrafo.classList.add("ocultar");
}

function encriptarTexto(mensaje) {
    return mensaje
        .replace(/a/g, "ai")
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
}

function desencriptarTexto(mensaje) {
    // Desencriptar en el orden inverso
    return mensaje
        .replace(/ufat/g, "u")
        .replace(/ober/g, "o")
        .replace(/imes/g, "i")
        .replace(/enter/g, "e")
        .replace(/ai/g, "a");
}

function copiarAlPortapapeles() {
    const contenido = resultado.value;
    navigator.clipboard.writeText(contenido)
        .then(() => alert("Texto copiado al portapapeles."))
        .catch(err => console.error("Error al copiar: ", err));
}
