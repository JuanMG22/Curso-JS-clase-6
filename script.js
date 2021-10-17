// Creo una clase con el nombre Productos
class Productos {
    constructor(nombre, codigo, precio) {
        this.nombre = nombre;
        this.codigo = parseInt(codigo);
        this.precio = parseFloat(precio);
    }

}

const todosLosProductos = []; //creo un array vacío, donde despues agrego los productos.


// Creo función que inicia el proceso de carga de productos
function iniciar() {
    let nProductos = parseInt(prompt("Ingresa la cantidad de productos que quiere cargar"));

    if (nProductos > 0) {
        for (let i = 1; i <= nProductos; i++) {

            let nombreProducto = prompt("Ingrese nombre de producto");
            let codigoProducto = prompt("Ingrese codigo de producto");
            let precioProducto = prompt("Ingrese precio de producto");

            const newProducto = new Productos(nombreProducto, codigoProducto, precioProducto);
            todosLosProductos.push(newProducto); //Agrego el producto nuevo al array de productos.

            console.log(`Nombre de producto: ${newProducto.nombre}\nCodigo de Producto: ${newProducto.codigo}\nPrecio de Producto: $${newProducto.precio}`);
        }

    } else {
        alert("No ingresó un número válido")
    }
}


// Función para modificar producto
function modificarProducto() {
    //Pido que ingrese el producto que quiere modificar
    const nombre = prompt("Ingresa el nombre de producto que quiere modificar")
    //Encuentro la posición dentro del array de productos
    const indiceProducto = todosLosProductos.findIndex(e => e.nombre == nombre);
    //Pregunto qué propiedad quiere modificar
    const propiedadModificar = prompt("Ingresa La propiedad de producto que quiere modificar").toLowerCase();
    //Según la propiedad del producto, modifico
    if (propiedadModificar == "nombre") {
        //Uso el indice para modificarlo directamente del array
        todosLosProductos[indiceProducto].nombre = prompt("Ingrese nuevo nombre");
        //Muestro el producto modificado
        console.log("Producto modificado", todosLosProductos[indiceProducto]);

    } else if (propiedadModificar == "codigo") {
        todosLosProductos[indiceProducto].codigo = prompt("Ingrese nuevo codigo");
        console.log("Producto modificado", todosLosProductos[indiceProducto]);

    } else if (propiedadModificar == "precio") {
        todosLosProductos[indiceProducto].precio = prompt("Ingrese nuevo precio");
        console.log("Producto modificado", todosLosProductos[indiceProducto]);

    } else {
        alert("No eligio una propiedad disponible, intente nuevamente");
    }

    console.log("lista de productos actualizada", todosLosProductos); //Muestro actualización
}