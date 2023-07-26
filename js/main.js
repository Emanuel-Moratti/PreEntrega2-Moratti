// Monedas disponibles
function mostrarMonedas(monedas) {
    monedas.forEach((moneda) => {
        console.log(`Nombre: ${moneda.nombre} - Valor: ${moneda.valor}${moneda.simbolo} - País: ${moneda.pais}`);
    });
}

// Filtrar moneda por nombre
function filtrarMoneda(nombreMoneda) {
    const resultado = monedas.filter((moneda) => moneda.nombre.toLowerCase() === nombreMoneda.toLowerCase());
    return resultado;
}

// Convertir pesos a la moneda seleccionada
function convertirPesosAMoneda(pesos, valorTasaCambio) {
    return pesos / valorTasaCambio;
}

// Función principal
function convertir() {
    let continuar = true;

    while (continuar) {
        // Obtener la moneda en la que se desea convertir los pesos
        const nombreMoneda = prompt("Ingrese la moneda que quiere obtener (Dolar - Euro - Libra Esterlina - Yen Japones - Real):");

        // Filtrar la moneda por nombre
        const monedaFiltrada = filtrarMoneda(nombreMoneda);

        // Verificar si la moneda existe en la lista de monedas
        if (monedaFiltrada.length === 0) {
            console.log("Moneda no encontrada");
            continue;
        }
        // Para poder usar el simbolo en el console.log
        simboloMoneda = monedaFiltrada[0].simbolo;

        // Mostrar la información de la moneda obtenida del array
        mostrarMonedas(monedaFiltrada);

        // Obtener la cantidad de pesos argentinos a convertir
        const pesosArgentinos = parseFloat(prompt("Ingrese la cantidad de pesos argentinos a convertir:"));

        // Verificar si ingresó un monto válido
        if (isNaN(pesosArgentinos) || pesosArgentinos <= 0) {
            console.log("Por favor, ingrese una cantidad válida mayor a 0.");
            continue;
        }

        // Obtener la tasa de cambio de la moneda seleccionada
        const tasaCambioMoneda = monedaFiltrada[0].valor;

        // Convertir pesos argentinos a la moneda seleccionada
        const cantidadMoneda = convertirPesosAMoneda(pesosArgentinos, tasaCambioMoneda);
        console.log(`${pesosArgentinos} pesos argentinos son equivalentes a ${simboloMoneda}${cantidadMoneda.toFixed(2)}.`);

        // Preguntar al usuario si desea continuar
        const opcion = prompt("¿Desea realizar otra conversión? (s/n)");
        if (opcion.toLowerCase() !== "s") {
            continuar = false;
        }
    }
}
convertir();
