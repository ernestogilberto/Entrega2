const Contenedor = require('./contenedor.js');

let products = [
  {
    title: 'Escuadra',
    price: 123.45,
    thumbnail: 'pendiente'
  },
  {
    title: 'Calculadora',
    price: 234.56,
    thumbnail: 'pendiente'
  },
  {
    title: 'Globo Terráqueo',
    price: 345.67,
    thumbnail: 'pendiente'
  }
]

productManager = new Contenedor()

function guardar (product){
  productManager.save(product).then(result => console.log(result.message))
}

function obtenerPorId (id){
  productManager.getById(id).then(result => console.log(result.payload))
}

function obtenerTodos (){
  productManager.getAll().then(result => console.table(result.payload))
}

function borrarPorId (id){
  productManager.deleteById(id).then(result => console.log(result.message))
}

function borrarTodos(){
  productManager.deleteAll().then(result => console.log(result.message))
}

setTimeout(guardar, 50, products[0])
setTimeout(guardar, 100, products[1])
setTimeout(guardar, 150, products[2])

setTimeout(obtenerPorId, 200, 2)
setTimeout(obtenerTodos, 250)

setTimeout(borrarPorId, 300, 2)
setTimeout(obtenerTodos, 350)

// setTimeout(borrarTodos, 400)