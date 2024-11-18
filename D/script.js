function calcularCosto() {
    const horas = parseInt(document.getElementById('horas').value) || 0;
    const minutos = parseInt(document.getElementById('minutos').value) || 0;

    const totalMinutos = (horas * 60) + minutos;

    let costo = 0

    // Cálculo del costo basado en el total de minutos
    if (totalMinutos <= 180) {
        costo = 2000; // Costo mínimo 
    } else if (totalMinutos < 1440) {
        const horasFacturables = Math.ceil((totalMinutos - 180) / 60); // Horas adicionales después de las 3 horas
        costo = 2000 + (horasFacturables * 1500); // Costo adicional por hora extra
    } else {
        costo = 10000; // Costo máximo
    }

    document.getElementById('resultado').innerHTML = `El costo total es: ${costo} COP`;
}