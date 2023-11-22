let frutas = ["manzana", "banana", "pera", "naranja"]
let almacenarProductoNuevo = []
const carrito =(frutas1) => {
    almacenarProductoNuevo = frutas1.slice(0, 3)
    console.log(almacenarProductoNuevo)
}
carrito(frutas)