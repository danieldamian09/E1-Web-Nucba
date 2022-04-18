  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está


  function existe(array, elemento) {
    var existe = false;
    for (var i = 0; i < array.length; i++) {
      if (array[i] == elemento) {
        existe = true;
      } else {
        existe = false;
      }
    }
    return existe;
}
  

console.log(existe([1, 2, 3, 4], 7));

//convertir un array en un string

function arrayToString(array) {
  var string = "";
  for (var i = 0; i < array.length; i++) {
    string += array[i];
  }
  return string;
}

console.log(arrayToString(["hola", "como", "estas"]));