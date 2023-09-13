const nombre = 'Cesar';
const apellido = 'Luna';

//formas de concatenar
const nombreCompleto1 = nombre + ' ' + apellido;

//template strings
const nombreCompleto2 = `${nombre} ${apellido}`
/*
si usamos el salto de linea(enter) en los template strings hace el salto de 
linea cuando muestra el string, ademas se pueden hacer operaciones dentro de los
template
*/

//tambien se puede concatenar funciones
function getSaludo() {
    return 'Hola';
}

console.log(`Este es un saludo: ${getSaludo()} ${nombre} ${apellido}`);