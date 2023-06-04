function calcularStock(cantidadDisponible, cantidadVendida, cantidadConsumida) {
    // Pedir al usuario el stock inicial
    let stock = cantidadDisponible - cantidadVendida - cantidadConsumida;
    
    if (stock >= 0) {
      return stock;
    } else {
      return "No hay suficiente stock";
    }
  }
  //pedir al usuario que ingrese el codigo del articulo
  function obtenerNumeroIngresado(codigo) {
    let codigo = parseInt(prompt(codigo));
    
    while (isNaN(codigo)) {
      codigo = parseInt(prompt("Valor invalido. Por favor, ingrese un numero valido:"));
    }
    
    return codigo;
  }
  // Pedir al usuario las cantidades disponibles, vendidas y consumidas
  let cantidadDisponible = obtenerNumeroIngresado("Ingrese la cantidad disponible de cerveza:");
  let cantidadVendida = obtenerNumeroIngresado("Ingrese la cantidad vendida de cerveza:");
  let cantidadConsumida = obtenerNumeroIngresado("Ingrese la cantidad consumida de cerveza:");
  
  let stockCalculado = calcularStock(cantidadDisponible, cantidadVendida, cantidadConsumida);

  
console.log("El stock de cerveza es: " + stockCalculado);
  
  

