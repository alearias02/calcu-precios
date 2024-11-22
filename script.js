function calcularPrecio() {
    const piercings = document.getElementById('piercings').value;
    const jewelry = document.getElementById('jewelry').value;

    let precioBase = 20; // Precio base por perforación
    let multiplicador = 1;

    // Ajustar el multiplicador según el material de la joyería
    if (jewelry === 'titanio') {
        multiplicador = 1.5;
    } else if (jewelry === 'oro') {
        multiplicador = 2.5;
    }

    const precioTotal = piercings * precioBase * multiplicador;
    document.getElementById('cost').innerText = `El precio total aproximado de su perforación es de: $${precioTotal.toFixed(2)}`;
}