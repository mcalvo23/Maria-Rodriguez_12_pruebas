//capturar elementos
const ProgressBar = document.querySelector(".progress__bar--progress");
const ImgContainer = document.querySelector(".image__container img");

// click en el botón
function run() {

    let currentWidth = parseFloat(ProgressBar.style.width) || 0;

    // incremento con cada click
    const incrementAmount = 10;

    //limite de incremento
    const maxProgress = 100;

    //tiempo limite para completar
    const timeLimit = 3000; 

    //inicia la carrera
    const startTime = Date.now();

    //funcion para actualizar la barra de progreso
    function updateProgressBar() {
        //obtener el tiempo que pasa desde que comienza
        const currentTime = Date.now();
        const elapsedTime = currentTime - startTime;

        //verificar si la barra no esta completada y el tiempo limite
        if (currentWidth < maxProgress && elapsedTime < timeLimit) {
            currentWidth += incrementAmount;

            //aplicar el nuevo ancho a la barra
            ProgressBar.style.width = currentWidth + "%";
        } else {

            //verificar si la barra esta completa
            if (currentWidth >= maxProgress) {

                //cambiar la imagen
                ImgContainer.src = "end.png";
            }

            //reiniciar la barra
            resetProgressBar();
        }
    }

    updateProgressBar();
}

//funcion para reiniciar 
function resetProgressBar() {
    ProgressBar.style.width = "0%";
    document.querySelector(".button").onclick = run;

}