// arreglo = ['jugo', 'queso', 'detergente', 'salame', 'shampoo']
const listar = (arreglo) =>
{
    console.log("Los productos guardados en el carrito son: ")
    for (let i = 0; i < arreglo.length; i++) {
        console.log("Producto ", i+1)
        console.log(arreglo[i])
    }
}
listar(arreglo)