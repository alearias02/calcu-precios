function calcularPrecio() {
    const piercingsSelect = document.getElementById('piercings');
    const piercings = parseInt(piercingsSelect.value, 10);
    const jewelry = document.getElementById('jewelry').value;

    let precioBase = 0;

    // Precios según material y tipo de perforación
    const precios = {
        acero: [16000, 29000, 43500, 58000], // Por número de perforaciones
        acero316L: [16000, 27000, 39000, 50000], // Por número de perforaciones (Acero quirúrgico 316L)
        titanio: [20000, 35000, 52500, 70000], // Por número de perforaciones
        "cartilago-basico": 33000, // Precio fijo por perforación de cartílago (básico)
        "cartilago-lujo": 38000,  // Precio fijo por perforación de cartílago (lujo)
    };

    // Verificar si se seleccionó cartílago
    if (jewelry === 'cartilago-basico' || jewelry === 'cartilago-lujo') {
        piercingsSelect.disabled = true; // Deshabilitar selector de cantidad
        precioBase = precios[jewelry]; // Precio fijo para cartílago
        document.getElementById('cost').innerText = `El precio total aproximado de su perforación es de: ₡${precioBase}`;
        return;
    } else {
        piercingsSelect.disabled = false; // Habilitar selector de cantidad
        precioBase = precios[jewelry][piercings - 1];
    }

    document.getElementById('cost').innerText = `El precio total aproximado de su perforación es de: ₡${precioBase}`;
}