// let carrito = ["sandía","manzana","pera","uva"]
// console.log(carrito)
// arreglo = ['jugo', 'queso', 'detergente', 'salame', 'shampoo']

// ● Agregar producto al carrito
const agregarProducto = () => {
    let agregarFrutaVerdura = prompt("¿Qué producto desea agregar?")
    carrito.push(agregarFrutaVerdura)
    console.log(carrito)
}
// ● Listar los productos del carrito
const listar = (arreglo) =>
{
    console.log("Los productos guardados en el carrito son: ")
    for (let i = 0; i < arreglo.length; i++) {
        console.log("Producto ", i+1)
        console.log(arreglo[i])
    }
}
// ● Buscar un producto en el carrito
const buscarProducto = (productos, buscado) => {
    for (let index = 0; index < productos.length; index++) {
        if (productos[index] === buscado) {
            return productos[index];
        }
    }
    return "Producto no existente";
}
// ● Filtrar productos que coincidan con una palabra, parte de ella o una letra
const filtrarProductos = (filtro) => {
    array = array.filter(producto => producto.includes(filtro));
    console.log(array);
}