
    const cuerdas = document.querySelectorAll('.lira__cuerda');

    //cada cuerda con su respectiva nota
    const notas = ['do', 're', 'fa', 'sol', 'la'];

    // hacer click para que pueda sonar
    document.addEventListener('click', habilitarAudio);

    function habilitarAudio() {
        document.removeEventListener('click', habilitarAudio);

        cuerdas.forEach((cuerda, index) => {
            cuerda.addEventListener('mouseover', function () {
                const nota = notas[index];
                reproducirNota(nota);
            });
        });
    }

    function reproducirNota(nota) {
        // carga audio de cada nota 
        const audio = new Audio(`audio/${nota}.wav`); 
        audio.play();
    }

   