
// Variables de JS necesarias (Promedio de vida)
const lifeExpectancy = 80;

//  Objetos de JS y Arrays
const etapasDeVida = [
    { edadMin: 0, edadMax: 17, mensaje: "¡Estás muy chiquito! invierte en ti mismo tu salud y tu conocimiento" }, // Objeto 1
    { edadMin: 18, edadMax: 29, mensaje: "¡Aprovechá a viajar ya con lo que tengas a mano!!" }, // Objeto 2
    { edadMin: 30, edadMax: 39, mensaje: "¡A trabajar inteligentemente que aqui comienza lo bueno!" }, // Objeto 3
    { edadMin: 40, edadMax: 59, mensaje: "¡A esta edad resien fueron millonarios muchas personas famosas, no te des por vencido! :(" }, // Objeto 4
    { edadMin: 60, edadMax: 79, mensaje: "O quizas más años pero a ejercitarse y ser saludable!" } // Objeto 5
];

// Funciones esenciales del proceso a simular
function CuantoTeQueda() {
    // Captura entradas mediante prompt()
    const birthYear = prompt("Ingresá tu año de nacimiento:");
    const currentYear = new Date().getFullYear();

    if (birthYear === null || birthYear === "") {
        alert("Dale! ingresá bien!.");
        return;
    }

    // Crear funciones y/o métodos para realizar operaciones (suma, resta, concatenación, división, porcentaje, etc).
    const age = currentYear - parseInt(birthYear);
    const yearsLeft = lifeExpectancy - age;
    let message = `Tenés ${age} años. Te quedarían supuestamente ${yearsLeft} años de vida, aprovechálos al máximo!.`;
    const Inmortal = currentYear - 122;

    // Métodos de búsqueda y filtrado sobre el Array
    // Utilizando un for loop encontramos el mensaje adecuado segunn la edad
    for (let etapa of etapasDeVida) {
        if (age >= etapa.edadMin && age <= etapa.edadMax) {
            message += " " + etapa.mensaje;
            break;
        }
    }

    if (age >= lifeExpectancy) {
        message += " ¡Ya estas en negativo! si te sigues cuidando llegaras aun mas lejos!";
    }

    if (birthYear > currentYear) {
        alert("Para si todavia ni naciste!");
        return;
    }    

    if (Inmortal > birthYear) {
        alert("Bueno parece que tenemos un nuevo record.. eso o alguien no recuerda su fecha de nacimiento ");
        return;
    }    

    // Efectuar una salida, que es el resultado de los datos procesados, la cual puede hacerse por alert() o console.log().
    alert(message);
}
