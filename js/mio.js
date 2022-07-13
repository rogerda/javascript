class Producto {
    constructor(id, nombre, marca, precio,stock) {
        this.id = id
        this.nombre = nombre
        this.marca = marca
        this.precio = precio
        this.stock = stock
    }
}

const producto1 = new Producto(1, "Seguro Auto", "Mapfre", 1400, 20)
const producto2 = new Producto(2, "Seguro Hogar", "Antartida", 1100, 25)
const producto3 = new Producto(3, "Seguro Auto Completo", "Rivadavia", 2500, 22)
const producto4 = new Producto(4, "Seguro Vida", "Rivadavia", 22200, 15)
const producto5 = new Producto(5, "Seguro ART", "ARTLife", 2050, 30)

const productos = [producto1, producto2, producto3, producto4, producto5]

const divProductos = document.getElementById('productos')

productos.forEach(productoArray => {
    divProductos.innerHTML += `
        <div class="card productos" id="producto${productoArray.id}" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">${productoArray.nombre}</h5>
                <p class="card-text">Marca: ${productoArray.marca}</p>
                <p class="card-text">Precio: $${productoArray.precio}</p>
                <p class="card-text">Stock: ${productoArray.stock}</p>
        </div>
        </div>
    
    `
})