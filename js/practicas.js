/*const valores = []
const cosas = [true, 56, "Hola", false, "chau", 100]
console.log(cosas[10])
for (let i = 0; i < cosas.length; i++) {
console.log(cosas [i])
}
/*
const garantiza la posición de memoria pero se puede pisar
cosas[0] = "Saludos"
*/ 

/*const alummnos =["camilo", "julieta", "santiago", "luca"]
//push no modifica los indices de los elementos
alummnos.push ("Roger")
//alummnos.unshift("PRINCIPIO") mueve todos los indices no usar
//alummno.shift() elimina primer elemento
//alummnos.pop() elimina el ultimo elemento
//const alummnosEliminados = alummnos.splice (3,3)
//console.log(alummnosEliminados)
console.log (alummnos)
alummnos.splice(2,2)
//console.log(alummnos)
//alumnos.splice(0,alummnos.length)
//revisar conformación*/

/*const impuestoPais = (producto) => producto * 1.30
const impuestoRetenciones = (producto) => producto * 1.35
const impuestoIVA = (producto) => producto * 1.21
const impuestoX = (producto) => producto * 1.10

function calcularImpuestoso (producto){
    return producto + impuestoPais(producto) + impuestoRetenciones(producto) +
    impuestoIVA(producto) + impuestoX (producto)

}
let precioFinal = calcularImpuestos (100)
console.log(precioFinal)*/
class Persona {
    constructor (nombre, apellido, edad, sueldo) {

        this.id = id
        this.nombre = nombre
        this.apellido = apellido
        this.edad = edad
        this.sueldo = sueldo    }

}
const persona1 = new Persona (1, "Pepe", "Perez", 30, 1000)
const persona2 = new Persona (2, "xxx", "xxxx", 36, 1777000)
const persona3 = new Persona (3, "yyy", "hhhh", 39, 104444)

const personas = [persona1,persona2,persona3]
//foreeach
personas.forEach(persona => {
//console.log(persona)
persona.sueldo *= 1.30    
console.log(persona)
})//lo mismo que for each flecha
//const personaArray = (persona) => console.log(persona)