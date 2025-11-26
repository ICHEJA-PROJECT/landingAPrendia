/**
 * Utility to format and translate backend validation errors
 */

const FIELD_NAMES = {
    numeroTelefono: 'El número de teléfono',
    telefono: 'El teléfono',
    nombre: 'El nombre',
    apellidos: 'Los apellidos',
    email: 'El correo electrónico',
    municipio: 'El municipio',
    estado: 'El estado',
    comunidad: 'La comunidad',
    otraComunidad: 'La comunidad específica',
    motivo: 'El motivo',
    password: 'La contraseña',
};

const ERROR_MESSAGES = {
    'should not be empty': 'es requerido',
    'must be an email': 'debe ser un correo válido',
    'must be longer than or equal to': 'debe tener al menos',
    'must be shorter than or equal to': 'debe tener máximo',
    'must be a string': 'debe ser texto',
    'must be a number': 'debe ser un número',
    'must be a boolean': 'debe ser verdadero o falso',
    'must be an array': 'debe ser una lista',
    'must be a date': 'debe ser una fecha válida',
    'characters': 'caracteres',
    'El número de teléfono debe contener solo dígitos': 'El número de teléfono solo debe contener números',
};

export const formatValidationMessage = (message) => {
    if (!message) return 'Error desconocido';

    // Si es un array, formatear cada mensaje
    if (Array.isArray(message)) {
        return message.map(formatValidationMessage).join(', ');
    }

    let formattedMessage = message;

    // Reemplazar nombres de campos
    Object.keys(FIELD_NAMES).forEach(field => {
        const regex = new RegExp(`\\b${field}\\b`, 'g');
        formattedMessage = formattedMessage.replace(regex, FIELD_NAMES[field]);
    });

    // Reemplazar mensajes de error comunes
    Object.keys(ERROR_MESSAGES).forEach(error => {
        const regex = new RegExp(error, 'g');
        formattedMessage = formattedMessage.replace(regex, ERROR_MESSAGES[error]);
    });

    // Capitalizar primera letra
    return formattedMessage.charAt(0).toUpperCase() + formattedMessage.slice(1);
};
