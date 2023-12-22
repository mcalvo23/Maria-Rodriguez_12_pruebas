
  // contador de lanzados
  let throws = 0;

  // click en el botón de lanzar jabalina
  document.querySelector(".game-container__throw-javelin").addEventListener("click", function() {
    
    throws++;

    // si no se han realizado más de 10 lanzamientos
    if (throws <= 10) {

      const javelin = document.createElement("div");
      javelin.classList.add("javelin");
      document.querySelector(".game-container").appendChild(javelin);

      // posición random
      const x = Math.random() * 100;
      const y = Math.random() * 100;

      // pone el punto rojo
      javelin.style.left = `${x}%`;
      javelin.style.top = `${y}%`;

      setTimeout(() => {
        javelin.remove();

        // 'juego terminado' al final de los 10 lanzamientos
        if (throws === 10) {
          document.querySelector(".game-container__result-label").innerHTML = "Juego Terminado"; 
          document.querySelector(".game-container__result-label").style.display = "block"; 
        }
      }, 1000);
    }
  });
