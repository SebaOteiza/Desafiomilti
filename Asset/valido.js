
document.write("<label>Ingrese un numero entre 1 y 20 <\/label>");
document.write("<input name=\"numero1\" id=\"numero1\" onblur=\"return validarRango(this);\" maxlength=\"2\">");

function validarRango(elemento){
    var numero = parseInt(elemento.value,10);
    //Validamos que se haya ingresado solo numeros

    if(isNaN(numero)){
      alert('Ingrese solo números.');
      //elemento.focus();
     // elemento.select();
      return false;
    }
    //Validamos que se cumpla el rango
    if(numero<1 || numero>20){
      alert('Solo se permite el siguiente rango: 1 - 20');

     }else {
      alert('Numero dentro de rango permitido');

    //  var numero = prompt("¿Qué tabla quieres imprimir?");

      for(var i = 1; i < 11; i++ ) { //el ciclo va a parar cuando sea 11 porque necesitamos imprimir 10 lineas que son las 10 multiplicaciones de la tabla - con el 1++ le decimos al ciclo que cada vez que itere lo incremente
         document.write (numero + " x " + i + " = " + (numero* i ) + "<br>"); // aquí se escribe cada línea aparte, una detrás de otra - tomamos el valor de tabla  y lo * por i 
          //con el <br> le estamos diciendo al html que vamos a saltar de línea 
      }
     // return false;
      }
      
    return true;
      
    }
 
    