document.getElementById('salary-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Obtener valores del formulario
    const basicSalary = parseFloat(document.getElementById('basic-salary').value);
    const extraHoursDiurna = parseFloat(document.getElementById('extra-hours-diurna').value);
    const extraHoursNocturna = parseFloat(document.getElementById('extra-hours-nocturna').value);
    const extraHoursFestiva = parseFloat(document.getElementById('extra-hours-festiva').value);
    const extraHoursDominical = parseFloat(document.getElementById('extra-hours-dominical').value);
    const daysMissed = parseInt(document.getElementById('days-missed').value);

    // Calcular el valor por hora
    const dailyHours = 8;
    const workDays = 30;
    const hourlyRate = basicSalary / (workDays * dailyHours); // Cálculo del valor de la hora normal

    // Calcular ingresos por horas extras
    const extraIncomeDiurna = extraHoursDiurna * hourlyRate * 1.25; // 25% más
    const extraIncomeNocturna = extraHoursNocturna * hourlyRate * 1.35; // 35% más
    const extraIncomeFestiva = extraHoursFestiva * hourlyRate * 1.75; // 75% más
    const extraIncomeDominical = extraHoursDominical * hourlyRate * 2; // 100% más

    const totalExtraIncome = extraIncomeDiurna + extraIncomeNocturna + extraIncomeFestiva + extraIncomeDominical;

    // Calcular descuento por días faltantes
    const dailySalary = basicSalary / workDays;
    const deductionForMissedDays = dailySalary * daysMissed;

    // Calcular el salario total antes de descuentos
    const totalSalary = basicSalary - deductionForMissedDays + totalExtraIncome;

    // Calcular descuentos (4% para salud y 4% para pensión)
    const healthDeduction = totalSalary * 0.04;
    const pensionDeduction = totalSalary * 0.04;
    const totalDeductions = healthDeduction + pensionDeduction;

    // Calcular total a pagar
    const totalPay = totalSalary - totalDeductions;

    // Mostrar resultados
    document.getElementById('basic-salary-result').querySelector('span').textContent = basicSalary.toFixed(2);
    document.getElementById('extra-income-result').querySelector('span').textContent = totalExtraIncome.toFixed(2);
    document.getElementById('discounts-result').querySelector('span').textContent = totalDeductions.toFixed(2);
    document.getElementById('total-pay-result').querySelector('span').textContent = totalPay.toFixed(2);

    // Mostrar la sección de resultados
    document.getElementById('result').style.display = 'block';
});