var local = {
  vendedoras: ["Ada", "Grace", "Hedy", "Sheryl"],

  ventas: [
    {
      fecha: new Date(2019, 1, 4),
      nombreVendedora: "Grace",
      componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1500"]
    },
    {
      fecha: new Date(2019, 0, 1),
      nombreVendedora: "Ada",
      componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1500"]
    },
    {
      fecha: new Date(2019, 0, 2),
      nombreVendedora: "Grace",
      componentes: ["Monitor ASC 543", "Motherboard MZI"]
    },
    {
      fecha: new Date(2019, 0, 10),
      nombreVendedora: "Ada",
      componentes: ["Monitor ASC 543", "Motherboard ASUS 1200"]
    },
    {
      fecha: new Date(2019, 0, 12),
      nombreVendedora: "Grace",
      componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1200"]
    }
  ],

  precios: [
    { componente: "Monitor GPRS 3000", precio: 200 },
    { componente: "Motherboard ASUS 1500", precio: 120 },
    { componente: "Monitor ASC 543", precio: 250 },
    { componente: "Motherboard ASUS 1200", precio: 100 },
    { componente: "Motherboard MZI", precio: 30 },
    { componente: "HDD Toyiva", precio: 90 },
    { componente: "HDD Wezter Dishital", precio: 75 },
    { componente: "RAM Quinston", precio: 110 },
    { componente: "RAM Quinston Fury", precio: 230 }
  ]
};

//                                                                  PUNTO 1:

/* Función para identificar el precio de una máquina que es la suma de los precios de los componentes. Primero recorre el array que se paso en
el parámetro de la función y luego recorre el array local.precios.componente. Hay que usar dos for y luego un if para guardar el dato.
*/
function precioMaquina(componente) {
  var plata = 0;
  for (var i = 0; i < componente.length; i++) {
    for (var j = 0; j < local.precios.length; j++) {
      if (componente[i] == local.precios[j].componente) {
        plata = local.precios[j].precio + plata;
      }
    }
  }

  return plata;
};

console.log(precioMaquina(["Monitor GPRS 3000", "Motherboard ASUS 1500"]));
console.log(precioMaquina(["Monitor ASC 543", "Motherboard MZI"]));
console.log(precioMaquina(["Monitor ASC 543", "Motherboard ASUS 1200"]));
console.log(precioMaquina(["Monitor GPRS 3000", "Motherboard ASUS 1200"]));

// funciona la primera función.

                                  /* Función que me permite conocer cuantas veces se vendió un componente
 */
function cantidadVentasComponentes(componente) {
  var componenteVendido = 0;
  for (var i = 0; i < local.ventas.length; i++) {
    for (var j = 0; j < local.ventas[i].componentes.length; j++) {
      if (componente == local.ventas[i].componentes[j]) {
        componenteVendido = componenteVendido + 1;
      }
    }
  }
  return componenteVendido;
};

console.log(cantidadVentasComponentes("Monitor GPRS 3000"));
console.log(cantidadVentasComponentes("Motherboard ASUS 1500"));
console.log(cantidadVentasComponentes("Monitor ASC 543"));
console.log(cantidadVentasComponentes("Motherboard MZI"));
console.log(cantidadVentasComponentes("Motherboard ASUS 1200"));

/*
fin de la función cantidad de componentes vendidos. 
FUNCIONA
*/

                                              /*Comienzo de la función "vendedoraDel mes"
                             Acá hay qe pasar dos parámetros numéricos (mes, anio) y devuelve el nombre de la vendedora 
                          que más vendió en plata en el mes. Lo que importa es el importe total de las ventas. El importe
                          de la venta es el indicado en la función precioMaquina()
*/

function vendedoraDelMes(mes, anio) {
  var adaVendio = [];
  var graceVendio = [];
  var contadorAda = 0;
  var contadorGrace = 0;
  for (var i = 0; i < local.ventas.length; i++) {
    if (local.ventas[i].fecha.getMonth() + 1 == mes && local.ventas[i].fecha.getFullYear() == anio) {

      if (local.ventas[i].nombreVendedora === "Ada") {
        adaVendio.push(local.ventas[i].componentes);
      } else if (local.ventas[i].nombreVendedora === "Grace") {
        graceVendio.push(local.ventas[i].componentes);
      }
      
      for (var x = 0; x < adaVendio.length; x++) {
        contadorAda += precioMaquina(adaVendio[x]);
      }


      for (var y = 0; y < graceVendio.length; y++){
        contadorGrace += precioMaquina(graceVendio[y]);
      }
    }
  }
  var vendedoraEstrella = " ";
  if (contadorGrace > contadorAda) {
    vendedoraEstrella += 'Grace'
  } else if (contadorAda > contadorGrace) {
    vendedoraEstrella += 'Ada'
  }

  return 'La vendedora del mes fue: ' +  vendedoraEstrella;
};

console.log(vendedoraDelMes(2, 2019));

//Funciona esta función horrible.

                            /* Comienza la función: ventasMes(mes, anio). Obtener las ventas de un mes.
*/

function ventasMes (mes, anio){
  var ventasDelMes = 0;
  for (var i = 0; i < local.ventas.length; i++) {
    var mesAlgo = local.ventas[i].fecha.getMonth() + 1;
    var anioAlgo = local.ventas[i].fecha.getFullYear();
    if (mes === mesAlgo && anio === anioAlgo) {
      ventasDelMes += precioMaquina(local.ventas[i].componentes);
    }
  }
return ventasDelMes;
}
console.log(ventasMes(1, 2019));
console.log(ventasMes(2, 2019));

                            /* Comienza la función: ventasVendedora(nombre). Devuelve las ventas totales
                                realizadas por una vendedora sin límite de fecha
*/

function ventasVendedora(nombre) {
  vendedora= 0;
  for (var i = 0; i < local.ventas.length; i++) {
    if (nombre === local.ventas[i].nombreVendedora) {
      vendedora += precioMaquina(local.ventas[i].componentes);
    } 
  }
  return vendedora;
}
console.log(ventasVendedora('Grace') + ' vendió Grace en total');
console.log(ventasVendedora('Ada') + ' vendió Ada en total');

/* Fin función ventasVendedora()*/

                             /* componenteMasVendido(): Devuelve el nombre del componente que más ventas tuvo historicamente. 
                                  El dato de la cantidad de ventas es el que indica la función cantidadVentasComponente
*/ 

function componenteMasVendido() {
  var componenteMasVendido = 0;
  for (var i = 0; i < local.ventas.length; i++) {
    for (var j = 0; j < local.ventas[i].componentes.length; j++) {
      if (local.ventas[i].componentes[j] == local.ventas[i].componentes[j]) {
        componenteMasVendido += ;
      }
    }
  }
  return componenteMasVendido;
}

console.log(componenteMasVendido());

/* Fin de la función componenteMasVendido(). HACERLA PORQUE NO FUNCIONA
*/

/*                            huboVentas(mes, anio): que indica si hubo ventas en un mes determinado.
*/

function huboVentas() {
  
}