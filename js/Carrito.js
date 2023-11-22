// arreglo = ['jugo', 'queso', 'detergente', 'salame', 'shampoo']
// ● Listar los productos del carrito
const listar = (arreglo) =>
{
    console.log("Los productos guardados en el carrito son: ")
    for (let i = 0; i < arreglo.length; i++) {
        console.log("Producto ", i+1)
        console.log(arreglo[i])
    }
}
// listar(arreglo)
// ● Buscar un producto en el carrito
const buscarProducto = (productos, buscado) => {
    for (let index = 0; index < productos.length; index++) {
        if (productos[index] === buscado) {
            return productos[index];
        }
    }
    return "Producto no existente";
}