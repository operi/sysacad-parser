var Numeros = {
      "uno" : 1, "dos": 2, "tres": 3, "cuatro": 4, "cinco":5, "seis":6, "siete":7, "ocho":8, "nueve":9, "diez":10, "Ausen.":0, "Insc.":0, "Aprob.":0,
}

var cantidadMateriasFaltantes;
var numeroHTML;
var nota;
var notaTexto;
var cantidadMateriasTotalesCarreraSistemas = 43;
var sumaTotal = 0;
var sumaSinAplazos = 0;
var cantidadNotasConAplazos = 0;
var cantidadNotasSinAplazos = 0;

var elementos = document.getElementsByClassName("textoTabla")
for ( var i = 1; i < elementos.length; i++ ) {
  numeroHTML = elementos[i].getElementsByTagName("td")[2];
  if ( numeroHTML !== undefined ) {
    notaTexto = numeroHTML.innerText;
    if ( notaTexto !== "Ausen." && notaTexto !== "Insc." && notaTexto !== "Aprob." ) {
      nota = Numeros[notaTexto];
      // Notas a partir del 4 son contadas como aprobadas
      if ( nota >= 4 ) {
        sumaSinAplazos += nota;
        cantidadNotasSinAplazos += 1;
      }
      sumaTotal += nota;
      cantidadNotasConAplazos += 1;
    }
  }
}

cantidadMateriasFaltantes = cantidadMateriasTotalesCarreraSistemas - cantidadNotasSinAplazos;

console.log("Promedio con aplazos: " + (sumaTotal/cantidadNotasConAplazos).toFixed(2));
console.log("Promedio sin aplazos: " + (sumaSinAplazos/cantidadNotasSinAplazos).toFixed(2));
console.log("Cantidad de materias aprobadas: " + cantidadNotasSinAplazos);
console.log("Cantidad de materias faltantes: " + cantidadMateriasFaltantes);
console.log("Porcentaje de materias aprobadas: " + (cantidadNotasSinAplazos*100/cantidadMateriasTotalesCarreraSistemas).toFixed(2) + "%");
