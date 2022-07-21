// Array de productos practica integral
const productos = {
    producto1: {
      nombre: 'Seguro Automotor Terceros +',
      precio: '133.50',
      descripcion: 'Seguro contra tercero completo, incluye granizo, cristales y cerraduras por el 10% del valor',
      srcImg: './images/auto1.jpg'
    },
    producto2: {
      nombre: 'Seguro completo Automotor',
      precio: '1500.00',
      descripcion: 'La mejor cobertura en el mercado de todo riesgo y asistencia mecánica integral',
      srcImg: './images/autoplus.jpg'
    },
    producto3: {
      nombre: 'Camión Seguro Completo',
      precio: '178995.50',
      descripcion: 'Cobertura integral para el transporte de carga. El mejor del mercado incluye remolque y vidrios',
      srcImg: './images/camion.jpg'
    },
    producto4: {
      nombre: 'Vida',
      precio: '8987.50',
      descripcion: 'Cobertura de seguro de vida para toda la familia hasta en los momentos de vacaciones',
      srcImg: './images/vida.jpg'
    },
    producto5: {
      nombre: 'Seguro Integral Hogar',
      precio: '19875.00',
      descripcion: 'La mejor cobertura para todo tipo de evento en tu hogar. Que nada te sorpenda',
      srcImg: './images/casa.jpg'
    }
    
  }
  // Se captura productos agarralo que se escapa ja
  const templateProd = document.getElementById('template-prod').content
  const contenedorProd = document.querySelector('.contenedor-productos')
  const fragment = document.createDocumentFragment()
  
  
  // Dom.........lo que mas me costo 
  Object.values(productos).forEach( producto => {
    templateProd.querySelector('.div-info .nombre-prod').textContent = producto.nombre
    templateProd.querySelector('.div-precio-boton .precio').textContent = producto.precio
    templateProd.querySelector('.div-info .descripcion-prod').textContent = producto.descripcion
    templateProd.querySelector('.contenedor-img img').setAttribute('alt', producto.nombre)
    templateProd.querySelector('.contenedor-img img').setAttribute('src', producto.srcImg)
    const clone = templateProd.cloneNode(true)
    fragment.appendChild(clone)
  })
  contenedorProd.appendChild(fragment)
  
  // al carro para sumar
  let carrito = {}
  const templateTabla = document.getElementById('agregar-producto-al-carro').content
  const tbodyCarrito = document.getElementById('carrito-body')
  const fragmentTabla = document.createDocumentFragment()
  const templateFoot = document.getElementById('tfooter').content
  const tfootCarrito = document.getElementById('footer')
  
  contenedorProd.addEventListener('click', e => {
    
    if(e.target.textContent === "Agregar") {
      setCarrito(e.target.parentElement.parentElement)
    }
    e.stopPropagation();
  })
  const setCarrito = e => {
    const pivoteCarrito = {
      nombre: e.querySelector('.div-info .nombre-prod').textContent,
      precio: e.querySelector('.div-precio-boton .precio').textContent,
      cantidad: 1
    }
    if(carrito.hasOwnProperty(pivoteCarrito.nombre)){
      carrito[pivoteCarrito.nombre].cantidad += 1
    } else {
      carrito[pivoteCarrito.nombre] = {...pivoteCarrito}
    }
    pintarTabla(carrito)
  }
  
  const pintarTabla = objetoCarrito => {
    Object.values(objetoCarrito).forEach( objeto => {
      const cloneTabla = templateTabla.cloneNode(true)
      cloneTabla.getElementById('producto').textContent = objeto.nombre
      cloneTabla.getElementById('cant').textContent = objeto.cantidad
      cloneTabla.getElementById('precio-uni').textContent = objeto.precio
      let precioTotal = parseFloat(objeto.precio) * objeto.cantidad
      cloneTabla.getElementById('precio-total-prod').textContent = precioTotal.toFixed(2)
      fragmentTabla.appendChild(cloneTabla)
    })
    tbodyCarrito.innerHTML = ''
    tbodyCarrito.appendChild(fragmentTabla)
    pintarFooter()
  }
  const pintarFooter = () => {
    tfootCarrito.innerHTML = ''
    if(Object.keys(carrito).length === 0) {
      tfootCarrito.innerHTML = '<tr><td colspan = 4>¡No hay ningun elemento en el carrito!</td></tr>'
    } else {
      const total = Object.values(carrito).reduce((acc, {cantidad, precio}) => acc + (cantidad * precio),0)
      templateFoot.getElementById('total-a-pagar').textContent = total.toFixed(2)
      const cloneFoot = templateFoot.cloneNode(true)
      fragment.appendChild(cloneFoot)
      tfootCarrito.appendChild(fragment)
      //Boton Vaciar carrito
      const botonVaciar = document.getElementById('vaciar-tabla')
  botonVaciar.addEventListener('click', () => {
        carrito = {}
        pintarTabla(carrito)
        pintarFooter()
      })
      
      //Botones aumentar y disminuir cantidades
      
    }
  }
  tbodyCarrito.addEventListener('click', e => {
    
    if(e.target.classList.contains('button')) {
      aumentarDisminuir(e.target)
    }
  })
  const aumentarDisminuir = boton => {
    if(boton.textContent === '+'){
      const indicador = boton.parentElement.parentElement.firstElementChild.textContent
      Object.values(carrito).forEach( elemento => {
        if(elemento.nombre === indicador) {
        carrito[elemento.nombre].cantidad++  
        }
      })
    }
    if(boton.textContent === '-') {
      const indicador = boton.parentElement.parentElement.firstElementChild.textContent
      Object.values(carrito).forEach( elemento => {
        if(elemento.nombre === indicador) {
        carrito[elemento.nombre].cantidad--
          if(carrito[elemento.nombre].cantidad === 0) {
            delete carrito[elemento.nombre]
          }
        }
      })
    }
    pintarTabla(carrito)
    pintarFooter()
  }
  
//formulario
let formulario = document.querySelector("#formulario");
let box = document.querySelector(".box");
box.style.display = "none";

formulario.addEventListener('submit',function(){
 
  let nombre = document.querySelector("#nombre").value;
  let apellido = document.querySelector("#apellidos").value;
  let edad =  parseInt(document.querySelector("#edad").value);
  
  if(nombre.trim() == null || nombre.trim().length == 0){
   alert ('El nombre no es válido');
    return false;
  }
  
 if(apellido.trim() == null || apellido.trim().length == 0){
   alert ('El apellido no es válido');
    return false;
  }
  
  if(edad == null || edad <= 0 || isNaN(edad)){
   alert ('La edad no es válido');
    return false;
  }
  
  
  
  box.style.display = "block";
  
  let p_nombre = document.querySelector("#p_nombre span");
  let p_apellido = document.querySelector("#p_apellidos span");
  let p_edad = document.querySelector("#p_edad span");
  
  
  p_nombre.innerHTML = nombre;
  p_apellido.innerHTML = apellido;
  p_edad.innerHTML = edad;
  
})