// Función para calcular el costo del estacionamiento
function calcularCosto(tipoVehiculo, horas) {
    // Definimos las tarifas base por hora según el tipo de vehículo
    const tarifas = {
        'automovil': 2000,
        'motocicleta': 1000,
        'camion': 3000
    };
    
    // Obtener la tarifa base según el tipo de vehículo
    let tarifaBase = tarifas[tipoVehiculo.toLowerCase()];
    
    // Si el tipo de vehículo no es válido
    if (!tarifaBase) {
        console.log("Tipo de vehículo no válido.");
        
    }

    // Si el tiempo de estadía es menor o igual a 0
    if (horas <= 0) {
        console.log("El tiempo de estadía debe ser mayor a 0.");
        
    }

    // Calculo del costo base
    let costoBase = tarifaBase * horas;
    
    // Aplicación de descuento progresivo
    let descuento = 0; // Inicialmente no hay descuento

    // Descuento si las horas están entre 6 y 9 (mayor a 5 y menor a 10)
    if (horas > 5 && horas < 10) {
        descuento = 0.05; // 5% de descuento
    }
    
    // Descuento si las horas son mayores o iguales a 10
    if (horas >= 10) {
        descuento = 0.10; // 10% de descuento
    }

    // Calcular el costo final aplicando el descuento
    let costoFinal = costoBase * (1 - descuento);

    // Mostrar los resultados en la consola
    console.log(`El costo base es: ${costoBase} pesos.`);
    if (descuento > 0) {
        console.log(`Se ha aplicado un descuento del ${descuento * 100}%.`);
    }
    console.log(`El costo total para un ${tipoVehiculo} estacionado por ${horas} horas es: ${costoFinal} pesos.`);
}

// Función principal para interactuar con el usuario
function main() {
    const tipoVehiculo = prompt("Ingrese el tipo de vehículo (automóvil, motocicleta, camión):").toLowerCase();
    const horas = parseInt(prompt("Ingrese el número de horas de estadía:"), 10);

    // Calcular el costo e imprimir los resultados en consola
    calcularCosto(tipoVehiculo, horas);
}

// Ejecutar la función principal cuando la página se cargue
main();
