const oiginalToupperCase = String.prototype.toUpperCase;

//sobreescribo el método toUpperCase
String.prototype.toUpperCase = function () {
  return "ESTO ESTA PROHIBIDO";
};

//uso
console.log("hola Soy Milagros".toUpperCase());
console.log("Hola mundo".toUpperCase());
