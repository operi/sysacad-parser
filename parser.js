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

var electivasObjeto = {
"Seguridad en Sistemas de Información(Ele": 2,
"Tecnología y Gestión Web(Elec.)": 2,
"Comunicación Profesional(Elec.)": 3,
"Responsabilidad Social Institucional(El": 2,
"Emprendedorismo(Elec.)": 2,
"Sistemas de Transmisión Inalámbricos (El": 2,
"Actualización Tecnológica e Innovación (": 2,
"Auditoría en Sistemas de Información(Ele": 2,
"Bioingeniería(Elec.)": 2,
"Tecnologías para la Explotación de Infor": 2,
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
// Este número depende de las electivasObjeto que se elijan. Como mínimo serían 42 y como máximo 46. Se elige 44 como promedio.
var CANTIDAD_MATERIAS_TOTALES_CARRERA_SISTEMAS = 44;
var CANTIDAD_HORAS_ELECTIVAS_NECESARIAS = 22;

var cantidadMateriasFaltantes;
var cantidadMateriasAprobadas;
var numeroHTML;
var nota;
var notaTexto;
var sumaTotal = 0;
var sumaSinAplazos = 0;
var cantidadNotasConAplazos = 0;
var cantidadNotasSinAplazos = 0;
var electivaHTML;
var electivaTexto;
var cantidadElectivasCursadas = 0;
var cantidadHorasElectivas = 0;

var cantidadMateriasEquivalencias = 0;

var elementos = document.getElementsByClassName("textoTabla")
for ( var i = 1; i < elementos.length; i++ ) {
numeroHTML = elementos[i].getElementsByTagName("td")[2];
if ( numeroHTML !== undefined ) {
notaTexto = numeroHTML.innerText;
if ( notaTexto !== "Ausen." && notaTexto !== "Insc.") {
  if (notaTexto === "Aprob."){
    cantidadMateriasEquivalencias += 1;
  }
  else{
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

// Se guarda la materia en la variable electivaHTML
electivaHTML = elementos[i].getElementsByTagName("td")[1];
if ( electivaHTML !== undefined ) {
// Se convierte a texto el nombre de la materia
electivaTexto = electivaHTML.innerText;

numeroHTML = elementos[i].getElementsByTagName("td")[2];
if ( numeroHTML !== undefined) {
  notaTexto = numeroHTML.innerText;
  // Se corrobora que no cuente una inscripción o una ausencia como una electiva aprobada
  if ( notaTexto !== "Ausen." && notaTexto !== "Insc."){
    // Se controla que la materia obtenida sea una Electiva
    for(var key in electivasObjeto){
        //Sistemas Operativos colisiona con Sistemas Operativos Avanzados
        if( key.toLowerCase().replace(/ /g,"").indexOf(electivaTexto.toLowerCase().replace(/ /g,"")) !== -1 && electivaTexto !== "Sistemas Operativos"){
            horasElectiva = electivasObjeto[key]; // Se obtienen las horas de la respectiva Electiva
            cantidadHorasElectivas += horasElectiva; // Se suman dichas horas al total
            cantidadElectivasCursadas += 1; // Se suma una electiva al total de electivas cursadas
        }
    }
  }
}
}
}

cantidadMateriasFaltantes = CANTIDAD_MATERIAS_TOTALES_CARRERA_SISTEMAS - cantidadNotasSinAplazos - cantidadMateriasEquivalencias;
cantidadMateriasAprobadas = cantidadNotasSinAplazos + cantidadMateriasEquivalencias;

console.log("| Cantidad de Materias del Plan: " + CANTIDAD_MATERIAS_TOTALES_CARRERA_SISTEMAS + " (Aprox.)");
console.log("| Promedio Con Aplazos: " + (sumaTotal/cantidadNotasConAplazos).toFixed(2));
console.log("| Promedio Sin Aplazos: " + (sumaSinAplazos/cantidadNotasSinAplazos).toFixed(2));
console.log("| Cantidad de Materias Aprobadas: " + cantidadMateriasAprobadas);
console.log("| Cantidad de Materias Faltantes (Aprox.): " + cantidadMateriasFaltantes);
console.log("| Porcentaje de Materias Aprobadas: " + (cantidadMateriasAprobadas*100/CANTIDAD_MATERIAS_TOTALES_CARRERA_SISTEMAS).toFixed(2) + "%");

console.log("| Cantidad de Electivas Necesarias: " + CANTIDAD_HORAS_ELECTIVAS_NECESARIAS);
console.log("| Cantidad de Electivas Cursadas: " + cantidadElectivasCursadas);
console.log("| Cantidad de Horas de Electivas: " + cantidadHorasElectivas);
console.log("| Cantidad de Horas de Electivas Faltantes: " + (CANTIDAD_HORAS_ELECTIVAS_NECESARIAS - cantidadHorasElectivas));
console.log("| Porcentaje del Total de Materias Electivas: " + (cantidadHorasElectivas*100/CANTIDAD_HORAS_ELECTIVAS_NECESARIAS).toFixed(2) + "%");

var HTML_PROMEDIOS = "<table width=\"100%\" align=\"center\" border=\"1\" cellspacing=\"0\" cellpadding=\"1\" bgcolor=\"#000000\"> <tbody> <tr style=\"border: 1px solid black;\"> <td>Cantidad de Materias del Plan</td> <td>${cantidad-materias-plan}</td> </tr> <tr style=\"border: 1px solid black;\"> <td>Promedio Con Aplazos</td> <td>${promedio-con-aplazos}</td> </tr> <tr style=\"border: 1px solid black;\"> <td>Promedio Sin Aplazos</td> <td>${promedio-sin-aplazos}</td> </tr> <tr style=\"border: 1px solid black;\"> <td>Cantidad de Materias Aprobadas</td> <td>${cantidad-materias-aprobadas}</td> </tr> <tr style=\"border: 1px solid black;\"> <td>Cantidad de Materias Faltantes (aprox.)</td> <td>${cantidad-materias-faltantes}</td> </tr> <tr style=\"border: 1px solid black;\"> <td>Porcentaje de Materias Aprobadas</td> <td>${porcentaje-materias-aprobadas}</td> </tr> <tr style=\"border: 1px solid black;\"> <td>Cantidad de Electivas Necesarias</td> <td>${cantidad-electivas-necesarias}</td> </tr> <tr style=\"border: 1px solid black;\"> <td>Cantidad de Electivas Cursadas</td> <td>${cantidad-electivas-cursadas}</td> </tr> <tr style=\"border: 1px solid black;\"> <td>Cantidad de Horas de Electivas</td> <td>${cantidad-horas-electivas}</td> </tr> <tr style=\"border: 1px solid black;\"> <td>Porcentaje del Total de Materias Electivas</td> <td>${porcentaje-total-materias-electivas}</td> </tr> <tr style=\"border: 1px solid black;\"> <td>Cantidad de Horas de Electivas Faltantes</td> <td>${cantidad-horas-electivas-faltantes}</td> </tr> </tbody> </table>"
var tablaPrincipal = document.getElementsByTagName("table")[1];
var tablaPromedios = document.createElement("table");
HTML_PROMEDIOS = HTML_PROMEDIOS.replace("${cantidad-materias-plan}", CANTIDAD_MATERIAS_TOTALES_CARRERA_SISTEMAS + " (Aprox.)");
HTML_PROMEDIOS = HTML_PROMEDIOS.replace("${promedio-con-aplazos}", (sumaTotal/cantidadNotasConAplazos).toFixed(2));
HTML_PROMEDIOS = HTML_PROMEDIOS.replace("${promedio-sin-aplazos}", (sumaSinAplazos/cantidadNotasSinAplazos).toFixed(2));
HTML_PROMEDIOS = HTML_PROMEDIOS.replace("${cantidad-materias-aprobadas}", cantidadMateriasAprobadas);
HTML_PROMEDIOS = HTML_PROMEDIOS.replace("${cantidad-materias-faltantes}", cantidadMateriasFaltantes);
HTML_PROMEDIOS = HTML_PROMEDIOS.replace("${porcentaje-materias-aprobadas}", (cantidadMateriasAprobadas*100/CANTIDAD_MATERIAS_TOTALES_CARRERA_SISTEMAS).toFixed(2) + "%");
HTML_PROMEDIOS = HTML_PROMEDIOS.replace("${cantidad-electivas-necesarias}", CANTIDAD_HORAS_ELECTIVAS_NECESARIAS);
HTML_PROMEDIOS = HTML_PROMEDIOS.replace("${cantidad-electivas-cursadas}", cantidadElectivasCursadas);
HTML_PROMEDIOS = HTML_PROMEDIOS.replace("${cantidad-horas-electivas}", cantidadHorasElectivas);
HTML_PROMEDIOS = HTML_PROMEDIOS.replace("${cantidad-horas-electivas-faltantes}", (CANTIDAD_HORAS_ELECTIVAS_NECESARIAS - cantidadHorasElectivas));
HTML_PROMEDIOS = HTML_PROMEDIOS.replace("${porcentaje-total-materias-electivas}", (CANTIDAD_HORAS_ELECTIVAS_NECESARIAS - cantidadHorasElectivas));
tablaPromedios.innerHTML = HTML_PROMEDIOS;
tablaPrincipal.append(tablaPromedios);
