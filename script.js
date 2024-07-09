        //STRING
let frase = 'Bienvenidos al mundo de la programación';

// Método 1: split
let palabras = frase.split(' ');
console.log(palabras); // ["Bienvenidos", "al", "mundo", "de", "la", "programación"]

// Método 2: toLowerCase
console.log(frase.toLowerCase()); // "bienvenidos al mundo de la programación"

// Método 3: charAt
console.log(frase.charAt(5)); // "n"

        //NUMBER
let temperatura = 36.6;

// Método 1: toPrecision
console.log(temperatura.toPrecision(3)); // "36.6"

// Método 2: isNaN
let noNumero = "abc";
console.log(isNaN(noNumero)); // true

// Método 3: parseFloat
let decimalString = "123.456";
console.log(parseFloat(decimalString)); // 123.456

        //BOOL