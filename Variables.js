var nombre = "johana";
 

//inicializar
edad = 24;


//array
var elementos = ["pc","celu"];

// = operador asigna valor


//objeto

var persona = {
    nombre: "Joha",
    edad: 24
}


/*SCOPE
El alcance de las variables:
si la creas dentro de una funcion, solo vive dentro de esa function

Scope Global 
    puede utilizar todas sus variables globales pero no las locales

Scope Local
    Puede utilizar las locales y las globales 
    
    

Si haces referencia a una variable, el motor de JavaScript buscará su declaración 
en el entorno más cercano, y seguirá buscando en entornos más lejanos hasta llegar 
a la línea de código que la variable esté declarada, pero no en viceversa. A este 
proceso se lo denomina cadena de scope (scope chaining).

El scope local puede ser de función o de bloque. Un bloque es toda porción de código 
que está encerrada entre llaves {}, estos pueden ser los bloques: función, if, else, while, y for.

JS busca la variable desde el SCOPE mas chico al mas grande, desde el scope primero de bloque
luego de funcion, luego global. PREVALECE EL VALOR ENCONTRADO PRIMERO EN EL ENTORNO MAS CHICO*/



/* COERCION */

var a = 4 + "7"; //Coercion implicita (concatenacion)
typeof a; //String


var b = 4 * "7"; //Coercion implicita 
typeof b; //number

var c = 20;
var d = String(c); //coercion explicita. Es como el toString 
typeof d;

var e = Number(d);//coercion explicita. Mismo pero a la inversa
typeof e;
