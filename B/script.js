document.getElementById('salary-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const salarioBasico = parseFloat(document.getElementById('salario-basico').value);
    const horasExtrasDiurnas = parseFloat(document.getElementById('horas-extras-diurnas').value);
    const horasExtrasNocturnas = parseFloat(document.getElementById('horas-extras-nocturnas').value);
    const horasExtrasFestivas = parseFloat(document.getElementById('horas-extras-festivas').value);
    const horasExtrasDominicales = parseFloat(document.getElementById('horas-extras-dominicales').value);
    const diasFaltados = parseInt(document.getElementById('dias-faltados').value);
    const valorHoraNormal = salarioBasico / (30 * 8);
    const valorHoraExtraDiurna = valorHoraNormal * 1.25;
    const valorHoraExtraNocturna = valorHoraNormal * 1.35;
    const valorHoraExtraFestiva = valorHoraNormal * 1.75;
    const valorHoraExtraDominical = valorHoraNormal * 2;
    const totalIngresosHorasExtras = (horasExtrasDiurnas * valorHoraExtraDiurna) + (horasExtrasNocturnas * valorHoraExtraNocturna) + (horasExtrasFestivas * valorHoraExtraFestiva) + (horasExtrasDominicales * valorHoraExtraDominical);
    const descuentoSalud = (salarioBasico + totalIngresosHorasExtras) * 0.04;
    const descuentoPension = (salarioBasico + totalIngresosHorasExtras) * 0.04;
    const totalAPagar = (salarioBasico - (diasFaltados * valorHoraNormal * 8)) + totalIngresosHorasExtras - descuentoSalud - descuentoPension;

    document.getElementById('salario-basico-result').querySelector('span').textContent = salarioBasico.toFixed(2);
    document.getElementById('total-ingresos-horas-extras-result').querySelector('span').textContent = totalIngresosHorasExtras.toFixed(2);
    document.getElementById('descuento-salud-result').querySelector('span').textContent = descuentoSalud.toFixed(2);
    document.getElementById('descuento-pension-result').querySelector('span').textContent = descuentoPension.toFixed(2);
    document.getElementById('total-a-pagar-result').querySelector('span').textContent = totalAPagar.toFixed(2);
    document.getElementById('result').style.display = 'block';
});