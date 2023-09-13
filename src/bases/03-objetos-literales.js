const persona = {
    nombre: 'Cesar',
    apellido: 'Luna',
    edad: 25,
    direccion: {
        ciudad: "CDMX",
        delegacion: "GAM",
        cp: "07240"
    }
};

//se accede al valor del objeto por medio de .
console.log(persona.nombre);
//en este ejemplo accedimos al valor de nombre entonces regresa el console Cesar que es el valor

//si quisieramos hacer una copia de mi objeto persona y lo hacemos de la siguiente forma
const persona2 = persona;
//y luego queremos cambiar un valor del objeto
persona2.nombre = 'Joseph';
//si imprimimos los dos objetos nos podremos dar cuenta que el cambio del atributo nombre se cambio en ambos objetos es algo en lo que tener cuidado
console.log(persona);
console.log(persona2);

//si se quiere hacer un clon de un objeto existe el operador spread
const persona3 = {...persona}
console.log(persona3);
