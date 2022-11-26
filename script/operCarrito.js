//Empieza funcion modificar compra;
function modificarCompra(vectorPedidos1){
    let boolModificarCompra = true;

    while(boolModificarCompra){
        let cambio = prompt("Desea agregar o eliminar un producto?","ej: Agregar");
        if(cambio.toLowerCase() === "agregar"){
            alert("inicia agregacion");
            let productoActual = prompt("Queres Lemonpie, Torta, o Alfajor?");
            let precioNuevo = definirProducto(productoActual);
            const productoaux = new Producto(productoActual.toLowerCase(), precioNuevo);
            vectorPedidos1.push(productoaux);
            alert("Agregado");
        }
        if(cambio.toLowerCase() === "eliminar"){
            alert("Inicia eliminacion");
            let productoActual = prompt("Que producto desea eliminar?","Ej: lemonpie");
            productoActual = productoActual.toLowerCase();
            const iterador = vectorPedidos1.findIndex(x => x.nombre === productoActual);
            alert(iterador);
            if (iterador != -1){
                vectorPedidos1.splice(iterador,1);
                alert("Eliminado");
            } else{
                alert("No se encontro");
            }
        }

        let montoAcumulado = getMontoAcumulado(vectorPedidos1);

        let verificarCompra = confirm("Desea revisar el carrito?");
        if(verificarCompra){
            verCarrito(vectorPedidos1);
            alert("Monto total: $"+montoAcumulado);
        }

        boolModificarCompra = confirm("Desea modificar la compra?");
    }
    alert("se retorna");
    return vectorPedidos1;
}


//Empieza funcion VER CARRITO;
function verCarrito(array1){
    const carrito = [];
    const cantidades = [];
    for(const x of array1){
        let encontrado = false;
        for(const z of carrito){
            if(z.nombre === x.nombre){
                encontrado = true;
            }
        }
        if(encontrado === false){
            let contaux = 0;
            for(const y of array1){
                if (y.nombre === x.nombre){
                    contaux++;
                }
            }
            carrito.push(x);
            cantidades.push(contaux);
        }
    }
    for(var it = 0; it != carrito.length; it++){
        let nombreAux = carrito[it].nombre;
        let precioAux = carrito[it].precio;
        let cantidadAux = cantidades[it];
        alert("Compraste "+cantidadAux+" "+nombreAux+" por $"+(precioAux*cantidadAux)+".");
    }
}//Termina funcion revisar carrito;

export{modificarCompra, verCarrito};