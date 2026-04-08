let areaActiva = 'panaderia';
let intervaloRotacion;
let timeoutCierreMenu;

window.onload = () => {
    cambiarArea('panaderia'); // Carga inicial
};

function cambiarArea(nombreArea) {
    areaActiva = nombreArea;
    clearInterval(intervaloRotacion); // Detener cualquier rotación previa
    
    const todas = document.querySelectorAll('.ricky-panel');
    todas.forEach(p => {
        p.classList.remove('active');
        p.style.display = 'none';
    });

    const laminasArea = document.querySelectorAll(`.ricky-panel[data-area="${nombreArea}"]`);
    
    if (laminasArea.length > 0) {
        let indiceInterno = 0;
        mostrarLamina(laminasArea, indiceInterno);

        // Si hay más de una lámina en esta categoría, rotar cada 8 segundos
        if (laminasArea.length > 1) {
            intervaloRotacion = setInterval(() => {
                laminasArea[indiceInterno].classList.remove('active');
                setTimeout(() => {
                    laminasArea[indiceInterno].style.display = 'none';
                    indiceInterno = (indiceInterno + 1) % laminasArea.length;
                    mostrarLamina(laminasArea, indiceInterno);
                }, 1000); // Duración de la transición de opacidad
            }, 8000);
        }
    }

    // Al seleccionar, cerrar el menú lateral
    document.getElementById('sidebar').classList.remove('active');
    clearTimeout(timeoutCierreMenu);
}

function mostrarLamina(grupo, indice) {
    grupo[indice].style.display = 'block';
    setTimeout(() => {
        grupo[indice].classList.add('active');
    }, 50);
}

function toggleMenu() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('active');

    if (sidebar.classList.contains('active')) {
        clearTimeout(timeoutCierreMenu);
        timeoutCierreMenu = setTimeout(() => {
            sidebar.classList.remove('active');
        }, 5000); // Autocierre en 5 segundos
    }
}