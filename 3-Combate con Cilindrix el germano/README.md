1. Crea un juego de combate que muestre 2 personajes ASTERIX y CILINDRIX.
2. Cada un tiene un objeto con sus datos.
asterix = {
   image: "url-a-asterix",
   weapons: {
        puño: "1",
        pierna:"2",
        bofetada:"3",
        sentadilla:"4",
        pocion: null
   }
}

cilindrix = {
   image: "url-a-cilindrix,
   weapons: {
      llave: "1",
      luxacion:"2",
      bofetada:"3",
      sentadilla:"4"
   }
}

 3. Crea un botón central que muestre el texto FIGHT! 
    - Cada vez que se pulse ambos jugadores relizarán un ataque leyendo datos aleatoriamente de la propiedad weapons y compararán sus valores. 
    - El valor mayor hará que el jugador sume 1 punto.
    - Si hay empate no se suma.
    - La imagen de cada jugador debe mostrar con posicion absoluta el ataque empleado (en cada ataque) y el valor de puntos (en todo momento).
    - Cuando un jugador llegue a 5 puntos el juego debe resaltarlo con un recuadro con el texto WINNER.