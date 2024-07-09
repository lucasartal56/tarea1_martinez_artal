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
        let isAvailable = false;

        // Método 1: Boolean constructor
        console.log(Boolean(0)); // false
        
        // Método 2: typeof
        console.log(typeof isAvailable); // "boolean"
        
        // Método 3: Double Negation
        console.log(!!1); // true
        
        //OBJECT
        let persona = {
            nombre: 'Juan',
            edad: 30,
            profesion: 'Ingeniero',
            direccion: {
                ciudad: 'Madrid',
                pais: 'España'
            },
            saludar: function() {
                return `Hola, mi nombre es ${this.nombre}`;
            }
        };
        
        // Método 1: Object.assign
        let copiaPersona = Object.assign({}, persona);
        console.log(copiaPersona); // Copia del objeto persona
        
        // Método 2: Object.freeze
        Object.freeze(persona);
        persona.edad = 31; // No se puede modificar
        console.log(persona.edad); // 30
        
        // Método 3: Object.hasOwn
        console.log(Object.hasOwn(persona, 'nombre')); // true
        