//Declarativas
/*se les aplica hoisting
podemos mandar llamar la función antes de que ésta sea declarada, y con la expresión de función,
 no, tendríamos que declararla primero, y después mandarla llamar. */
function miFuncion(nombre) {
    console.log(`Hola vale, ${nombre}`); //Esto se llama Plantillas literales ${variable} como los de java
}


//Expresión
/*se conocen como funciones anonimas pq el nombre que esta es de la variable, no de la funcion
dentro de la variable se guarda una function anonima que se llama mediante elnombre de la variable()
*/
var miFuncion = function(a,b) {
    return a+b;
}



