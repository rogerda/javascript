let jugadores = [
    {
        nombre: 'Mencho Medina',
        pais : 'Argentina',
        camiseta: 10,
        equipo : 'Barcelona',
        imagen:'images/proteger.png'
    },
    {
        nombre: 'Payaso',
        pais : 'brasil',
        camiseta: 10,
        equipo : 'Barcelona',
        imagen:'images/gira.gif'
    },

];
let miLista = document.getElementById("miListaDeJugadores");
for (let jugador of jugadores){
miLista.innerHTML += `
<div class= "div-padre">
<h3>${jugador.nombre}</h3>
<p>${jugador.pais}</p>
<p>${jugador.camiseta}</p>
<div class="imagen"><img src="${jugador.imagen}"></div>
</div>
`
}