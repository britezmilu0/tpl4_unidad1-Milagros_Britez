// agrego mi método al protype de string
String.prototype.concatenarPalabra = function (palabra) {
  return `${this} ${palabra}`;
};

//uso
let saludo = "Hola";
let saludoConcatenado = saludo.concatenarPalabra("soy Milagros.");
console.log(saludoConcatenado);
