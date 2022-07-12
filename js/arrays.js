/*selecciona dias con arrays*/
/*let dias = ["lunes", "martes", "miércoles", "jueves", "viernes", "sabado",
"domingo"];
 console.log();("<h2>Días de la semana</h2>");

 dato = window.prompt("Introduce número del 0 al 6", "0");
 num = parseInt(dato);
 console.log(` <br> El dia introducido es: ${dias[num]} `);*/

 let alum = ["China", "Pollo", "Migue", "David", "Clara", "Enzo"];
 let notas = [];
 for (let i = 0; i < 6; i++){
 notas.push(5);
 }

 function mostrar()
 {
 document.write(`<h2>Notas actuales: </h2>`);
 for (let i = 0; i < 5; i++){
 document.write(`${i} - ${alum[i]}: ${notas[i]} <br>`);
 }
 }

 function modificar(numAlumno){
 nuevaNota = window.prompt(`Introduzca su nueva nota`, `0`);
 nuevaNota = parseInt(nuevaNota);
 notas[numAlumno] = nuevaNota;
 } 
 


 