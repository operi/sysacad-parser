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

var cantidadMateriasFaltantes;
var cantidadMateriasAprobadas;
var numeroHTML;
var nota;
var notaTexto;
// Este número depende de las electivasObjeto que se elijan. Como mínimo serían 42 y como máximo 46. Se elige 44 como promedio.
var cantidadMateriasTotalesCarreraSistemas = 44;
var sumaTotal = 0;
var sumaSinAplazos = 0;
var cantidadNotasConAplazos = 0;
var cantidadNotasSinAplazos = 0;

var electivaHTML;
var electivaTexto;
var cantidadElectivasCursadas = 0;
var cantidadHorasElectivas = 0;
var cantidadHorasElectivasNecesarias = 22;

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

cantidadMateriasFaltantes = cantidadMateriasTotalesCarreraSistemas - cantidadNotasSinAplazos - cantidadMateriasEquivalencias;
cantidadMateriasAprobadas = cantidadNotasSinAplazos + cantidadMateriasEquivalencias;

console.log("________________________________________________________________")
console.log("________________________________________________________________")
console.log("_______$$$_____$$$_____$$$$$$$$$$$$$$$_____$$$$_______$$$_______");
console.log("_______$$$_____$$$___________$$$___________$$$$$______$$$_______") 
console.log("_______$$$_____$$$___________$$$___________$$$_$$$____$$$_______") 
console.log("_______$$$_____$$$___________$$$___________$$$__$$$___$$$_______") 
console.log("_______$$$_____$$$___________$$$___________$$$___$$$__$$$_______") 
console.log("_______$$$_____$$$___________$$$___________$$$____$$$_$$$_______") 
console.log("_______$$$$$$$$$$$___________$$$___________$$$______$$$$$_______") 
console.log("________________________________________________________________")
console.log("________________________________________________________________")
console.log("| Cantidad de Materias del Plan: " + cantidadMateriasTotalesCarreraSistemas + " (Aprox.)");
console.log("| Promedio Con Aplazos: " + (sumaTotal/cantidadNotasConAplazos).toFixed(2));
console.log("| Promedio Sin Aplazos: " + (sumaSinAplazos/cantidadNotasSinAplazos).toFixed(2));
console.log("| Cantidad de Materias Aprobadas: " + cantidadMateriasAprobadas);
console.log("| Cantidad de Materias Faltantes (Aprox.): " + cantidadMateriasFaltantes);
console.log("| Porcentaje de Materias Aprobadas: " + (cantidadMateriasAprobadas*100/cantidadMateriasTotalesCarreraSistemas).toFixed(2) + "%");

console.log("----------------------------------------------------------------")
console.log("----------------------------------------------------------------")
console.log("| Cantidad de Electivas Necesarias: " + cantidadHorasElectivasNecesarias);
console.log("| Cantidad de Electivas Cursadas: " + cantidadElectivasCursadas);
console.log("| Cantidad de Horas de Electivas: " + cantidadHorasElectivas);
console.log("| Cantidad de Horas de Electivas Faltantes: " + (cantidadHorasElectivasNecesarias - cantidadHorasElectivas));
console.log("| Porcentaje del Total de Materias Electivas: " + (cantidadHorasElectivas*100/cantidadHorasElectivasNecesarias).toFixed(2) + "%");
console.log("----------------------------------------------------------------")
console.log("----------------------------------------------------------------")

var tablaPrincipal = document.getElementsByTagName("table")[1];
var tablaPromedios = document.createElement("table");

//promedio con aplazos
var promedioConAplazosRow = tablaPromedios.insertRow(0);
var promedioConAplazosNombre = promedioConAplazosRow.insertCell(0);
var promedioConAplazosValor = promedioConAplazosRow.insertCell(1);

promedioConAplazosNombre.innerHTML = "Promedio Con Aplazos";
promedioConAplazosValor.innerHTML = (sumaTotal/cantidadNotasConAplazos).toFixed(2);
// promedio sin aplazos
var promedioSinAplazosRow = tablaPromedios.insertRow(1);
var promedioSinAplazosNombre = promedioSinAplazosRow.insertCell(0);
var promedioSinAplazosValor = promedioSinAplazosRow.insertCell(1);

promedioSinAplazosNombre.innerHTML = "Promedio Sin Aplazos";
promedioSinAplazosValor.innerHTML = (sumaSinAplazos/cantidadNotasSinAplazos).toFixed(2);
// cantidad de materias aprobadas
var cantidadMateriasAprobadasRow = tablaPromedios.insertRow(2);
var cantidadMateriasAprobadasNombre = cantidadMateriasAprobadasRow.insertCell(0);
var cantidadMateriasAprobadasValor = cantidadMateriasAprobadasRow.insertCell(1);

cantidadMateriasAprobadasNombre.innerHTML = "Cantidad de Materias Aprobadas";
cantidadMateriasAprobadasValor.innerHTML = cantidadNotasSinAplazos;
// cantidad de materias faltantes (aprox)
var cantidadMateriasFaltantesRow = tablaPromedios.insertRow(3);
var cantidadMateriasFaltantesNombre = cantidadMateriasFaltantesRow.insertCell(0);
var cantidadMateriasFaltantesValor = cantidadMateriasFaltantesRow.insertCell(1);

cantidadMateriasFaltantesNombre.innerHTML = "Cantidad de Materias Faltantes (Aprox)";
cantidadMateriasFaltantesValor.innerHTML = cantidadMateriasFaltantes;
// porcentaje de materias aprobadas
var porcentajeMateriasAprobadasRow = tablaPromedios.insertRow(4);
var porcentajeMateriasAprobadasNombre = porcentajeMateriasAprobadasRow.insertCell(0);
var porcentajeMateriasAprobadasValor = porcentajeMateriasAprobadasRow.insertCell(1);

porcentajeMateriasAprobadasNombre.innerHTML = "Porcentaje de Materias Aprobadas";
porcentajeMateriasAprobadasValor.innerHTML = (cantidadNotasSinAplazos*100/cantidadMateriasTotalesCarreraSistemas).toFixed(2) + "%";
// cantidad de electivas cursadas
var cantidadElectivasCursadasRow = tablaPromedios.insertRow(5);
var cantidadElectivasCursadasNombre = cantidadElectivasCursadasRow.insertCell(0);
var cantidadElectivasCursadasValor = cantidadElectivasCursadasRow.insertCell(1);

cantidadElectivasCursadasNombre.innerHTML = "Cantidad de Electivas Cursadas";
cantidadElectivasCursadasValor.innerHTML = cantidadElectivasCursadas;
// cantidad de horas de electivas
var cantidadHorasElectivasRow = tablaPromedios.insertRow(6);
var cantidadHorasElectivasNombre = cantidadHorasElectivasRow.insertCell(0);
var cantidadHorasElectivasValor = cantidadHorasElectivasRow.insertCell(1);

cantidadHorasElectivasNombre.innerHTML = "Cantidad de Horas de Electivas";
cantidadHorasElectivasValor.innerHTML = cantidadHorasElectivas;
// porcentaje del total de materias electivas
var porcentajeDelTotalDeMateriasElectivasRow = tablaPromedios.insertRow(7);
var porcentajeDelTotalDeMateriasElectivasNombre = porcentajeDelTotalDeMateriasElectivasRow.insertCell(0);
var porcentajeDelTotalDeMateriasElectivasValor = porcentajeDelTotalDeMateriasElectivasRow.insertCell(1);

porcentajeDelTotalDeMateriasElectivasNombre.innerHTML = "Porcentaje del Total de Materias Electivas";
porcentajeDelTotalDeMateriasElectivasValor.innerHTML = (cantidadHorasElectivas*100/cantidadHorasElectivasNecesarias).toFixed(2) + "%";
// cantidad de horas de electivas faltantes
var cantidadHorasElectivasFaltantesRow = tablaPromedios.insertRow(8);
var cantidadHorasElectivasFaltantesNombre = cantidadHorasElectivasFaltantesRow.insertCell(0);
var cantidadHorasElectivasFaltantesValor = cantidadHorasElectivasFaltantesRow.insertCell(1);

cantidadHorasElectivasFaltantesNombre.innerHTML = "Cantidad de Horas de Electivas Faltantes";
cantidadHorasElectivasFaltantesValor.innerHTML = (cantidadHorasElectivasNecesarias - cantidadHorasElectivas);

tablaPromedios.style.border = 'solid 1px black';
tablaPrincipal.append(tablaPromedios);
