function calculateDistance() {
    const date1Input = document.getElementById('date1').value;
    const date2Input = document.getElementById('date2').value;
    const resultElement = document.getElementById('distanceResult');

    if (!date1Input || !date2Input) {
        resultElement.textContent = 'Por favor, ingrese ambas fechas.';
        return;
    }

    const date1 = new Date(date1Input);
    const date2 = new Date(date2Input);
    const diffTime = Math.abs(date2 - date1);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    resultElement.textContent = `La distancia es de ${diffDays} días.`;
}

function addDays() {
    const dateInput = document.getElementById('dateAdd').value;
    const daysInput = document.getElementById('daysAdd').value;
    const resultElement = document.getElementById('addResult');

    if (!dateInput || !daysInput) {
        resultElement.textContent = 'Por favor, ingrese una fecha y un número de días.';
        return;
    }

    const date = new Date(dateInput);
    const days = parseInt(daysInput, 10);
    date.setDate(date.getDate() + days);

    // Obtenemos el día de la semana
    const weekdays = ['domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado'];
    const weekday = weekdays[date.getDay()];

    resultElement.textContent = `La nueva fecha es: ${date.toLocaleDateString('es-ES')} (${weekday})`;
}

function subtractDays() {
    const dateInput = document.getElementById('dateSubtract').value;
    const daysInput = document.getElementById('daysSubtract').value;
    const resultElement = document.getElementById('subtractResult');

    if (!dateInput || !daysInput) {
        resultElement.textContent = 'Por favor, ingrese una fecha y un número de días.';
        return;
    }

    const date = new Date(dateInput);
    const days = parseInt(daysInput, 10);
    date.setDate(date.getDate() - days);

    // Obtenemos el día de la semana
    const weekdays = ['domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado'];
    const weekday = weekdays[date.getDay()];

    resultElement.textContent = `La nueva fecha es: ${date.toLocaleDateString('es-ES')} (${weekday})`;
}
