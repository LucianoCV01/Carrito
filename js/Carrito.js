// ● Agregar producto al carrito
const agregarProducto = (carrito) => {
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
const filtrarProductos = (array, filtro) => {
    array = array.filter(producto => producto.includes(filtro));
    console.log(array);
}
// ● Eliminar producto del carrito
let almacenarProductoNuevo = []
const eliminar =(frutas1) => {
    listar(frutas1);
    posicion = parseInt(prompt("Fruta a eliminar?"));

    if (posicion >= 1 && posicion <= frutas1.length) {
        frutas1.splice(posicion - 1, 1);
    }
    listar(frutas1);
}
// ■ Crear una aplicación de carrito de compras donde se ingresen productos como elementos en un array.
let productos = ["sandía","manzana","pera","uva", "pomelo"];
const carritoCompras = (opcion) => {
    switch (opcion) {
        case 1:
            agregarProducto(productos);
            break;
        case 2: 
            listar(productos);
            break;
        case 3:
            buscado = prompt("Producto a buscar?");
            console.log(buscarProducto(productos, buscado));
            break;
        case 4:
            palabra = prompt("Filtrar por: ");
            filtrarProductos(productos, palabra);
        case 5:
            eliminar(productos);
        default:
            break;
    }
}
opcion = parseInt(prompt(" 1- Agregar Producto \n 2- Listar Producto \n 3- Buscar Producto \n 4- Filtrar Producto \n 5- Eliminar Producto \n Ingrese opcion: "));
carritoCompras(opcion);