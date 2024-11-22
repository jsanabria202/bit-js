//let miNombre ="Javier Sanabria" ; 6
//const miEdad = 22 ;
//console.log('hola, soy '+ miNombre +" y tengo " + miEdad + " años.");

//Crear una función llamada presentarme, dentro crear una variable y asignarle su nombre, crear una constante y asignarle su edad, luego imprimir en consola
/*function presentarme() {
  let miNombre = "Javier Sanabria";
  const miEdad = 22;
  console.log("hola, soy " + miNombre + " y tengo " + miEdad + " años.");
}
presentarme();
*/

//3. Crear una función que reciba un nombre y edad por parámetros, luego imprimir en consola: Hola, soy ____ y tengo ____ años.
/*function presentacion(nombre, edad) {
  console.log("hola, soy " + nombre + " y tengo " + edad + " años.");
}
presentacion("javier sanabria", 22);
*/
/*4. Crear una función que reciba un nombre, un apellido y una edad por parámetros,
la función debe imprimir en consola: Su nombre es ____ y usted tiene ____ años,
si no se recibe la edad imprimir: Su nombre es ____ y usted tiene 100 años.
*/
function presentar(nombre, apellido, años = 100) {
  console.log(
    "su nombre es " + nombre + apellido + " y usted tiene " + años + " años"
  );
}
presentar("Javier ", "Sanabria", 22);
presentar("Javier ", "Sanabria");
