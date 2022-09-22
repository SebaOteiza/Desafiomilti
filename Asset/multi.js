
var tabla = prompt("¿Qué tabla quieres imprimir?");

for(var i = 1; i < 11; i++ ) { //el ciclo va a parar cuando sea 11 porque necesitamos imprimir 10 lineas que son las 10 multiplicaciones de la tabla - con el 1++ le decimos al ciclo que cada vez que itere lo incremente
   document.write (tabla + " x " + i + " = " + (tabla * i ) + "<br>"); // aquí se escribe cada línea aparte, una detrás de otra - tomamos el valor de tabla  y lo * por i 
    //con el <br> le estamos diciendo al html que vamos a saltar de línea 
}
