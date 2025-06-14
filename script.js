// Variables con datos personales al azar
const datosAleatorios = {
    nombre: "Sebas Avila",
    edad: 24,
    fechaNacimiento: "2001-03-10"
};

// Función para calcular días vividos
function calcularDiasVividos(fechaNacimiento) {
    const nacimiento = new Date(fechaNacimiento);
    const hoy = new Date();
    const diferencia = hoy - nacimiento;
    return Math.floor(diferencia / (1000 * 60 * 60 * 24));
}

// Mostrar mensaje de bienvenida con datos aleatorios
alert(`¡Bienvenido/a ${datosAleatorios.nombre}!`);

// Solicitar datos al usuario
const nombre = prompt("Por favor, ingresa tu nombre:");
const fechaNacimiento = prompt("Por favor, ingresa tu fecha de nacimiento (formato: YYYY-MM-DD):");

// Mostrar mensaje de bienvenida con los datos ingresados
alert(`¡Bienvenido/a ${nombre}!`);

// Calcular y mostrar días vividos
const diasVividos = calcularDiasVividos(fechaNacimiento);
alert(`Has vivido aproximadamente ${diasVividos} días.`); 