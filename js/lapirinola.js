
// la pirinola Roger Caballero

// declaro variables

let dinero= 100, acumulado = 0 , apuesta=1, numero=0;

//ciclo de dinero y apuesta

while (dinero > 0 && apuesta >0)
{

    //lanzar dados
    let dado = Math.floor(Math.random() * 6) + 1;

    //ingreso de numero en 1 a 6
    let num = prompt(`Ingrese número a postar del 1 al 6 `); numero = parseInt(num);

    // si no es ente 1 a 6
    if (numero >=7)
    {
      alert("Ingresar número entre 1 y 6 VOLVER A COMENZAR")
      break;
    }

    if (numero ==0)
    {
      alert ("Ingresar número entre 1 y 6 VOLVER A COMENZAR")
      break;
    }

    if (isNaN) {
        alert ("No ingreso Valor, Vuelva  a empezar")
        break;
            }
    // si es entre 1 a 6 let go! usuario

    else {
        alert ("Juguemos a la Pirinola hace tu apuesta!!!")
    }

    //cantidad de guita

    let cantidad = prompt(`Cantidad que quiere apostar tienes:$${dinero}`); apuesta = parseInt(cantidad);

    // si no apuesta
    if (apuesta ==0 ) {
        alert ("Ud no Aposto volver a comenzar")
        break;
    }
    // prueba de control nan
    if (isNaN) {
        alert ("Por Favor Ingrese Valor, vuelva a empezar")
        break;
    }

    //salen los numeros ramdom
        console.log (`Ha salido el número: ${dado} <br>`);
    if (numero == dado)
    {

    // si sale apuesta se multiplica el doble
        dinero = dinero + apuesta*2 
        alert(`Felicitaciones GANASTE!!! ${dinero}`)
    }

    else
    {

    // si no sale pierde
        dinero = dinero - apuesta
        alert(`Perdiste! ${apuesta} te quedo: $${dinero}`)
    }

    //si baja la cantidad de guita 0 chau
    if (dinero <= 0) 
    { 
        alert("Hasta la vista Baby, perdiste!") 
        break;
    }

    // le pongo limite de ganancias
    if (dinero >= 300) 
    { 
        alert("Ganaste TODO") 
        break;
    }
}
    