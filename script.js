/**
 * Calcula la distancia en días entre dos fechas
 */
function calculateDistance() {
    const date1Input = document.getElementById('date1').value;
    const date2Input = document.getElementById('date2').value;
    const resultElement = document.getElementById('distanceResult');

    // Validación de entrada
    if (!date1Input || !date2Input) {
        resultElement.textContent = 'Por favor, ingrese ambas fechas.';
        resultElement.classList.add('error');
        return;
    }

    try {
        const date1 = new Date(date1Input);
        const date2 = new Date(date2Input);

        // Verificar que las fechas sean válidas
        if (isNaN(date1.getTime()) || isNaN(date2.getTime())) {
            throw new Error('Fecha inválida');
        }

        const diffTime = Math.abs(date2 - date1);
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

        resultElement.textContent = `La distancia es de ${diffDays} días.`;
        resultElement.classList.remove('error');
        
        // Para análisis - registrar uso de la función
        if (typeof gtag === 'function') {
            gtag('event', 'calculate_distance', {
                'event_category': 'calculadora',
                'event_label': 'distancia_fechas'
            });
        }
    } catch (error) {
        resultElement.textContent = 'Error al calcular. Por favor, verifique las fechas ingresadas.';
        resultElement.classList.add('error');
        console.error('Error en calculateDistance:', error);
    }
}

/**
 * Suma días a una fecha
 */
function addDays() {
    const dateInput = document.getElementById('dateAdd').value;
    const daysInput = document.getElementById('daysAdd').value;
    const resultElement = document.getElementById('addResult');

    // Validación de entrada
    if (!dateInput) {
        resultElement.textContent = 'Por favor, ingrese una fecha.';
        resultElement.classList.add('error');
        return;
    }

    if (!daysInput || isNaN(parseInt(daysInput, 10)) || parseInt(daysInput, 10) < 0) {
        resultElement.textContent = 'Por favor, ingrese un número válido de días (mayor o igual a 0).';
        resultElement.classList.add('error');
        return;
    }

    try {
        const date = new Date(dateInput);
        
        // Verificar que la fecha sea válida
        if (isNaN(date.getTime())) {
            throw new Error('Fecha inválida');
        }
        
        const days = parseInt(daysInput, 10);
        date.setDate(date.getDate() + days);

        // Obtenemos el día de la semana
        const weekdays = ['domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado'];
        const weekday = weekdays[date.getDay()];

        // Formatear la fecha en formato español
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const formattedDate = date.toLocaleDateString('es-ES', options);

        resultElement.textContent = `La nueva fecha es: ${formattedDate} (${weekday})`;
        resultElement.classList.remove('error');
        
        // Para análisis - registrar uso de la función
        if (typeof gtag === 'function') {
            gtag('event', 'add_days', {
                'event_category': 'calculadora',
                'event_label': 'sumar_dias'
            });
        }
    } catch (error) {
        resultElement.textContent = 'Error al calcular. Por favor, verifique los datos ingresados.';
        resultElement.classList.add('error');
        console.error('Error en addDays:', error);
    }
}

/**
 * Resta días a una fecha
 */
function subtractDays() {
    const dateInput = document.getElementById('dateSubtract').value;
    const daysInput = document.getElementById('daysSubtract').value;
    const resultElement = document.getElementById('subtractResult');

    // Validación de entrada
    if (!dateInput) {
        resultElement.textContent = 'Por favor, ingrese una fecha.';
        resultElement.classList.add('error');
        return;
    }

    if (!daysInput || isNaN(parseInt(daysInput, 10)) || parseInt(daysInput, 10) < 0) {
        resultElement.textContent = 'Por favor, ingrese un número válido de días (mayor o igual a 0).';
        resultElement.classList.add('error');
        return;
    }

    try {
        const date = new Date(dateInput);
        
        // Verificar que la fecha sea válida
        if (isNaN(date.getTime())) {
            throw new Error('Fecha inválida');
        }
        
        const days = parseInt(daysInput, 10);
        date.setDate(date.getDate() - days);

        // Obtenemos el día de la semana
        const weekdays = ['domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado'];
        const weekday = weekdays[date.getDay()];

        // Formatear la fecha en formato español
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const formattedDate = date.toLocaleDateString('es-ES', options);

        resultElement.textContent = `La nueva fecha es: ${formattedDate} (${weekday})`;
        resultElement.classList.remove('error');
        
        // Para análisis - registrar uso de la función
        if (typeof gtag === 'function') {
            gtag('event', 'subtract_days', {
                'event_category': 'calculadora',
                'event_label': 'restar_dias'
            });
        }
    } catch (error) {
        resultElement.textContent = 'Error al calcular. Por favor, verifique los datos ingresados.';
        resultElement.classList.add('error');
        console.error('Error en subtractDays:', error);
    }
}

// Inicialización de fechas con la fecha actual
document.addEventListener('DOMContentLoaded', function() {
    const today = new Date();
    const formattedDate = today.toISOString().split('T')[0];
    
    // Establecer valores por defecto para todas las entradas de fecha
    document.getElementById('date1').value = formattedDate;
    document.getElementById('date2').value = formattedDate;
    document.getElementById('dateAdd').value = formattedDate;
    document.getElementById('dateSubtract').value = formattedDate;
});

// Detectar y configurar tema oscuro si está habilitado en el sistema
function detectDarkMode() {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.body.classList.add('dark-mode');
    }
}

// Escuchar cambios en la configuración de tema
if (window.matchMedia) {
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', detectDarkMode);
    detectDarkMode();
}
