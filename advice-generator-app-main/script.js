// Seleccionar elementos del DOM
const adviceText = document.getElementById('advice');
const adviceId = document.getElementById('advice-id');
const getAdviceButton = document.getElementById('get-advice');

// Función para obtener un consejo
async function fetchAdvice() {
    try {
        const response = await fetch('https://api.adviceslip.com/advice');
        if (!response.ok) {
            throw new Error('Error al obtener el consejo');
        }
        const data = await response.json();
        // Mostrar el consejo y el ID
        adviceText.textContent = `"${data.slip.advice}"`;
        adviceId.textContent = data.slip.id;
    } catch (error) {
        console.error(error);
        adviceText.textContent = 'Hubo un problema al obtener el consejo. Intenta nuevamente.';
        adviceId.textContent = '';
    }
}

// Asignar evento al botón
getAdviceButton.addEventListener('click', fetchAdvice);
