let challenge = "30 days of javascript";
console.log(challenge);

//longitud
console.log(challenge.length);

//mayusculas
console.log(challenge.toUpperCase());

//minusculas
console.log(challenge.toLowerCase());

//Extraer las primeras 2 palabras
console.log(challenge.substring(3,98));

//Extraer el 30
console.log(challenge.substring(0,2));

//Verificar Script
console.log(challenge.includes("script"))

//divir cadena
console.log(challenge.split())

//divir cadena por palabra xd
console.log(challenge.split(" "))

//cambiar la cadena de array y divirlo
let cadena = "Facebook, google, microsoft, apple, ibm, oracle, amazon"
console.log(cadena.split(","))

//cambia la cadena 3o dias a node 
console.log(challenge.replace("javascript", "node"))

//buscar caracter
console.log(challenge.charAt(15))

//buscar cual es codigo de acci j
console.log(challenge.charAt("j"))

//posicion
console.log(challenge.indexOf("a"))

//posicion ultima
console.log(challenge.lastIndexOf("a"))

//oración 2
let oracion = "No puedes terminar una oración con porque porque porque es una 'conjunción'"
console.log(oracion.indexOf('porque'))

//oracion ultima porque
console.log(oracion.lastIndexOf('porque'))

console.log(oracion.search('porque'))

//quitar espacios
console.log(challenge.trim(' '))

//starwith 
console.log(challenge.startsWith('3'))

//endWith
console.log(challenge.endsWith('t'));

//match
console.log(challenge.match("a"));

//concat
let con = "30 dias de ";
let con2 = "javascript";

console.log(con.concat(con2));

//repetir
console.log(challenge.repeat(2));