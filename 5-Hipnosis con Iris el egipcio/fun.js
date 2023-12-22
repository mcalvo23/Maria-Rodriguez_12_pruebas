    // capturqr elementos
    const hypnosisButton = document.querySelector('.hypnosis-button');
    const leftEyeShine = document.querySelector('.left-eye');
    const rightEyeShine = document.querySelector('.right-eye');
    const speechBubble = document.querySelector('.speech-bubble');
    const irisImg = document.querySelector('.iris-img');
    let hasClicked = false;

    // funcion al hacer click
    hypnosisButton.addEventListener('click', function() {
        if (!hasClicked) {
            //  animación ojos de Iris
            leftEyeShine.style.opacity = '1';
            rightEyeShine.style.opacity = '1';

            // crear el comentario 
            speechBubble.textContent = '¡Oh, la mirada de Iris el egipcio!';
            speechBubble.style.display = 'block';

            hasClicked = true;
        }
    });

  