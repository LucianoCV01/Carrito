// ● Buscar un producto en el carrito
const buscarProducto = (productos, buscado) => {
    for (let index = 0; index < productos.length; index++) {
        if (productos[index] === buscado) {
            return productos[index];
        }
    }
    return "Producto no existente";
}