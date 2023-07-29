// Función de validación del formulario
function validarFormulario(event) {
    event.preventDefault(); // Evita el envío del formulario si no pasa la validación

    // Obtenemos los valores ingresados por el usuario
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const mensaje = document.getElementById('mensaje').value;

    // Expresión regular para validar el formato del correo electrónico
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Verificamos si todos los campos están completos
    if (nombre.trim() === '' || email.trim() === '' || mensaje.trim() === '') {
        alert('Por favor, completa todos los campos requeridos.');
        return;
    }

    // Validamos el formato del correo electrónico
    if (!emailRegex.test(email)) {
        alert('Ingresa un correo electrónico válido.');
        return;
    }

    // Si todo está en orden, se puede enviar el formulario
    alert('¡Formulario enviado correctamente!');
    document.getElementById('formulario').reset(); // Limpiamos el formulario
}

// Agregamos el evento de submit al formulario
document.getElementById('formulario').addEventListener('submit', validarFormulario);
