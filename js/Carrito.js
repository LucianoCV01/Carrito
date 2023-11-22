let carrito = ["sandía","manzana","pera","uva"]
console.log(carrito)

const agregarProducto = () => {
    let agregarFrutaVerdura = prompt("¿Qué producto desea agregar?")
    carrito.push(agregarFrutaVerdura)
    console.log(carrito)
}
agregarProducto()