var Numeros = {
      "uno" : 1, 
      "dos": 2, 
      "tres": 3, 
      "cuatro": 4, 
      "cinco":5, 
      "seis":6, 
      "siete":7, 
      "ocho":8, 
      "nueve":9, 
      "diez":10, 
      "Ausen.":0, 
      "Insc.":0, 
      "Aprob.":0,
}
var electivasArray = [
  "Seguridad en Sistemas de Información(Ele",
  "Tecnología y Gestión Web(Elec.)",
  "Comunicación Profesional(Elec.)",
  "Responsabilidad Social Institucional(El",
  "Emprendedorismo(Elec.)",
  "Sistemas de Transmisión Inalámbricos (El",
  "Actualización Tecnológica e Innovación (",
  "Auditoría en Sistemas de Información(Ele",
  "Bioingeniería(Elec.)",
  "Tecnologías para la Explotación de Infor",
  "Metodología de la Investigación(Elec.)",
  "Aplicaciones Móviles(Elec.)",
  "Metodología Agiles (Elec.)",
  "Administración de Base de Datos(Elec.)",
  "Sistemas Operativos Avanzados(Elec.)",
  "Aplicaciones en Tiempo Real(Elec.)",
  "Interacción Hombre-Sistemas(Elec.)",
  "Internetworking(Elec.)",
  "Modelos de Calidad en la Industria del S",
  "Protocolos y Seguridad en redes inalámbr",
  "Tecnología de Información para la Gesti",
  "Ingeniería en Calidad(Elec.)",
];

var electivasObjeto = {
  "Seguridad en Sistemas de Información(Ele": 2,
  "Tecnología y Gestión Web(Elec.)": 2,
  "Comunicación Profesional(Elec.)": 3,
  "Responsabilidad Social Institucional(El": 2,
  "Emprendedorismo(Elec.)": 2,
  "Sistemas de Transmisión Inalámbricos (El": 2,
  "Actualización Tecnológica e Innovación(": 2,
  "Auditoría en Sistemas de Información(Ele": 2,
  "Bioingeniería(Elec.)": 2,
  "Tecnologías para la Explotación de la Infor": 2,
  "Metodología de la Investigación(Elec.)": 2,
  "Aplicaciones Móviles(Elec.)": 3,
  "Metodología Agiles (Elec.)": 3,
  "Administración de Base de Datos(Elec.)": 2,
  "Sistemas Operativos Avanzados(Elec.)": 2,
  "Aplicaciones en Tiempo Real(Elec.)": 5,
  "Interacción Hombre-Sistemas(Elec.)": 2,
  "Internetworking(Elec.)": 4,
  "Modelos de Calidad en la Industria del S": 2,
  "Protocolos y Seguridad en redes inalámbr": 2,
  "Tecnología de Información para la Gesti": 2,
  "Ingeniería en Calidad(Elec.)": 3,
}

var cantidadMateriasFaltantes;
var numeroHTML;
var nota;
var notaTexto;
// Este número depende de las electivasObjeto que se elijan. Pueden ser más.
var cantidadMateriasTotalesCarreraSistemas = 43;
var sumaTotal = 0;
var sumaSinAplazos = 0;
var cantidadNotasConAplazos = 0;
var cantidadNotasSinAplazos = 0;

var electivaHTML;
var electivaTexto;
var cantidadElectivasCursadas = 0;
var cantidadHorasElectivas = 0;
var cantidadHorasElectivasNecesarias = 22;

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

  // Se guarda la materia en la variable electivaHTML
  electivaHTML = elementos[i].getElementsByTagName("td")[1];
  if ( electivaHTML !== undefined ) {
    // Se convierte a texto el nombre de la materia
    electivaTexto = electivaHTML.innerText;

    // Se controla que la materia obtenida sea una Electiva
    for(var j=0; j < electivasArray.length; j++){

      if( electivaTexto === electivasArray[j]){
      
        horasElectiva = electivasObjeto[electivaTexto]; // Se obtienen las horas de la respectiva Electiva
        cantidadHorasElectivas += horasElectiva; // Se suman dichas horas al total
        cantidadElectivasCursadas += 1; // Se suma una electiva al total de electivas cursadas
      }
    }
  }
}

cantidadMateriasFaltantes = cantidadMateriasTotalesCarreraSistemas - cantidadNotasSinAplazos;
console.log("----------------------------------------------------------------")
console.log("----------------------------------------------------------------")
console.log("| Promedio Con Aplazos: " + (sumaTotal/cantidadNotasConAplazos).toFixed(2));
console.log("| Promedio Sin Aplazos: " + (sumaSinAplazos/cantidadNotasSinAplazos).toFixed(2));
console.log("| Cantidad de Materias Aprobadas: " + cantidadNotasSinAplazos);
console.log("| Cantidad de Materias Faltantes (Aprox.): " + cantidadMateriasFaltantes);
console.log("| Porcentaje de Materias Aprobadas: " + (cantidadNotasSinAplazos*100/cantidadMateriasTotalesCarreraSistemas).toFixed(2) + "%");

console.log("----------------------------------------------------------------")
console.log("----------------------------------------------------------------")
console.log("| Cantidad de Electivas Cursadas: " + cantidadElectivasCursadas);
console.log("| Cantidad de Horas de Electivas: " + cantidadHorasElectivas);
console.log("| Porcentaje del Total de Materias Electivas: " + (cantidadHorasElectivas*100/cantidadHorasElectivasNecesarias).toFixed(2) + "%");
console.log("| Cantidad de Horas de Electivas Faltantes: " + (cantidadHorasElectivasNecesarias - cantidadHorasElectivas));
console.log("----------------------------------------------------------------")
console.log("----------------------------------------------------------------")
