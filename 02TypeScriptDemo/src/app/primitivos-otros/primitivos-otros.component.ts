import { Component } from '@angular/core';

@Component({
  selector: 'app-primitivos-otros',
  standalone: true,
  imports: [],
  templateUrl: './primitivos-otros.component.html',
  styleUrl: './primitivos-otros.component.css'
})
export class PrimitivosOtrosComponent {

  variables():void {
    //number
  let edad: number = 25;
  console.log(`La edad es ${edad}`);
  let precio: number = 19.99;
  console.log(`El precio es ${precio}`);
  //string
  let nombre: string = "Juan";
  let apellido: string = 'López';
  let mensaje: string = `Hola, 
                        ${nombre} ${apellido}`;
  console.log(mensaje);                 
  //boolean
  let esActivo: boolean = true;
  console.log(`Está activo -> ${esActivo}`);
  let tienePermiso: boolean = false;
  //null y undefined: Representan valores vacíos o no definidos.
  //null
  let sinValor: null = null;
  console.log(`Sin valor -> ${sinValor}`);
  // sinValor='hola'
  //undefined
  let noDefinido: undefined = undefined;
  console.log(`No definido -> ${noDefinido}`);
  // noDefinido=true;
  //any: Permite que una variable pueda contener cualquier tipo de dato, similar a JavaScript puro. 
  //Se usa cuando no se quiere o no se puede tipar de manera estricta.

  let variableFlexible: any = "texto";
  variableFlexible = 123;
  variableFlexible=true;  
  console.log(`Acepta diferentes tipos -> ${variableFlexible}`);// Correcto, sin errores.
}

tipadoEstatico(): void {
  //Explicación tipo estático
  let x: number; //* Explicitly declares x as a number type
  let y = 1; //* Implicitly declares y as a number type
  let z;
  console.log(`tipo de z -> ${typeof(z)}`);
  z=5; //* Implicitly declare
  console.log(`tipo de z -> ${typeof(z)}`);
  let flag: boolean;
  let yes = true;
  let no = false;
  let n: number = 123.456;
  
}

tiposAvanzados():void{
  //array (arreglos): Representa una colección de elementos del mismo tipo. Se puede definir de dos formas.
  let numeros: number[] = [1, 2, 3, 4];
  console.log(numeros);
  let nombres: Array<string> = ["Ana", "Juan", "Maria"];
  //tuple (tuplas): Permite definir un arreglo con un número fijo de elementos, donde cada uno puede tener un tipo distinto.
  let persona: [string, number] = ["Carlos", 30]; 
  let nombre: string = persona[0]; // "Calos"
  let edad: number = persona[1];   // 30
  console.log(`La edad es ${persona[1]}`);
 // Un string y un number
  // enum (enumeraciones): Define un conjunto de valores constantes con nombres descriptivos.
  enum Color {
    Rojo,
    Verde,
    Azul
  }
  let colorFavorito: Color = Color.Verde;
  console.log(`Color favorito ${colorFavorito}`);
  console.log(`color favorito -> ${Color[colorFavorito]}`);
  //union types (tipos de unión): Permite que una variable acepte más de un tipo de dato.
  let id: string | number;
  id = 101;  // Correcto
  id = "ABC";  // Correcto
  //iteral types (tipos literales): Restringe a una variable para que solo tome ciertos valores específicos.
  let direccion: "izquierda" | "derecha";
direccion = "izquierda";  // Correcto
// direccion = "arriba";  // Error: "arriba" no está permitido
// void: Usado principalmente en funciones para indicar que no devuelven ningún valor.

}

usoArrays():void{
  let numeros: number[] = [1, 2, 3, 4, 5];
  console.log(numeros);
  //Añadir
  numeros.push(6);  // [1, 2, 3, 4, 5, 6]
  console.log(`despues push ${numeros}`);
  numeros.unshift(0);  // [0, 1, 2, 3, 4, 5, 6]
  console.log(`despues unshift ${numeros}`);
  numeros.splice(2, 0, 99); //[0, 1, 99, 2, 3, 4, 5, 6]
  console.log(`despues splice ${numeros}`);

  //Eliminar elementos de array
  numeros.pop();  // [0, 1, 99, 2, 3, 4, 5] //ultimo
  console.log(`despues pop ${numeros}`);
  numeros.shift();  // [1, 99, 2, 3, 4, 5] //primero
  console.log(`despues shift ${numeros}`);
  numeros.splice(2, 1);  // Elimina un elemento desde el índice 2 [1,99,3,4,5]
  console.log(`despues splice ${numeros}`);

  //Modificando directamente usando el índice
  numeros[1] = 10;  // [1, 10, 4, 5]
  console.log(`despues modificar posición 1 ${numeros}`);
  console.log(numeros[0]);  // 1
  //IndexOf: Buscar la posición de un elemento Si el elemento no se encuentra, indexOf devuelve -1.
  //Comprobar si un elemento está en el array
  let existeNumero = numeros.includes(10);
  console.log(`Existe -> ${existeNumero}`);
  // true
  //find: Encontrar un elemento que cumpla con una condición
  let mayorQueTres = numeros.find(num => num > 3);  // Devuelve 4
  console.log(`mayor que tres -> ${mayorQueTres}`);
  // findIndex: Encontrar el índice de un elemento que cumpla con una condición
  console.log(`-- ${numeros}`);
  numeros.forEach((num, index) => {
    console.log(`Índice: ${index}, Valor: ${num}`);});
  //Ordenar
  numeros.sort((a, b) => a - b);  // Ordena los números en orden ascendente: [1, 4, 5, 10]
  console.log(numeros);

}

estructurasControl():void{
  // Estructura de Control: Condicional (if-else)
let numero: number = 10;

if (numero > 0) {
    console.log(`${numero} es positivo.`);
} else if (numero < 0) {
    console.log(`${numero} es negativo.`);
} else {
    console.log(`El número es cero.`);
}

// Estructura de Control: Switch
let dia: number = 3; // Suponiendo que 1=Domingo, 2=Lunes, ..., 7=Sábado

switch (dia) {
    case 1:
        console.log("Domingo");
        break;
    case 2:
        console.log("Lunes");
        break;
    case 3:
        console.log("Martes");
        break;
    case 4:
        console.log("Miércoles");
        break;
    case 5:
        console.log("Jueves");
        break;
    case 6:
        console.log("Viernes");
        break;
    case 7:
        console.log("Sábado");
        break;
    default:
        console.log("Número de día no válido.");
}

// Estructura de Control: Bucle for
console.log("Números del 1 al 5 usando un bucle for:");
for (let i = 1; i <= 5; i++) {
    console.log(i);
}

// Estructura de Control: Bucle while
let contador: number = 1;
console.log("Números del 1 al 5 usando un bucle while:");
while (contador <= 5) {
    console.log(contador);
    contador++;
}

// Estructura de Control: Bucle do-while
contador = 1; // Reiniciamos el contador
console.log("Números del 1 al 5 usando un bucle do-while:");
do {
    console.log(contador);
    contador++;
} while (contador <= 5);

// Estructura de Control: Bucle for...of
let frutas: string[] = ["Manzana", "Banana", "Naranja"];
console.log("Lista de frutas:");
for (let fruta of frutas) {
    console.log(fruta);
}

// Estructura de Control: Bucle for...in
let persona = { nombre: "Juan", edad: 30, ciudad: "Madrid" };
console.log("Propiedades de la persona:");
for (let propiedad in persona) {
    console.log(`${propiedad}: ${(<any>persona)[propiedad]}`);
}

}

usoInterfaces():void{
  interface Persona {
    nombre: string;
    edad: number;
    ciudad: string;
}

let persona: Persona = {
    nombre: "Juan",
    edad: 30,
    ciudad: "Madrid"
};

console.log(`Nombre: ${persona.nombre}`);
console.log(`Edad: ${persona.edad}`);
console.log(`Ciudad: ${persona.ciudad}`);

}


}
