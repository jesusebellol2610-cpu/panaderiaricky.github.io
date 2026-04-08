// Obtenemos todas las secciones del menú RICKY PAN
const seccionesRicky = document.querySelectorAll('.ricky-panel');
let indiceRicky = 0;

function rotarMenuRicky() {
    // 1. Ocultamos el panel actual
    seccionesRicky[indiceRicky].classList.remove('active');
    
    // 2. Pasamos al siguiente índice
    indiceRicky = (indiceRicky + 1) % seccionesRicky.length;
    
    // 3. Mostramos el nuevo panel
    seccionesRicky[indiceRicky].classList.add('active');
}

// Activa la rotación automática cada 7 segundos (7000 milisegundos)
setInterval(rotarMenuRicky, 7000);