//DEFINICION DE CLASE PRODUCTO
class Producto{
    constructor(nombre, precio){
        this.nombre = nombre;
        this.precio = precio;
    }
} //TERMINA DECLARACION CLASE PRODUCTO


//Empiza funcion GET MONTO ACUMULADO
function getMontoAcumulado(arrayProductos){
    let montoAcumulado = 0;

    // for(const x of arrayProductos){ SERIA DEMASIADO FACIL;
    //     montoAcumulado = montoAcumulado + x.precio;
    // }

    for(var i = 0; i != arrayProductos.length; i++){
        montoAcumulado = montoAcumulado + arrayProductos[i].precio;
    }
    return montoAcumulado;
} //TERMINA FUNCION GET MONTO ACUMULADO

//EMPIEZA FUNCION INICIAR COMPRA
function iniciarCompra(){
    let vectorPedidos = [];
    let cantidadDeProductos = parseInt(prompt('Cuantos Productos queres comprar?'));
    if (cantidadDeProductos !== 0 && !isNaN(cantidadDeProductos)){
        for(var i = 0; i != cantidadDeProductos; i++){
            let productoActual = prompt("Queres Lemonpie, Torta, o Alfajor?");
            let precioNuevo = definirProducto(productoActual);
            const productoaux = new Producto(productoActual.toLowerCase(), precioNuevo);
            vectorPedidos.push(productoaux);

        }
        let montoAcumulado = getMontoAcumulado(vectorPedidos);

        let verificarCompra = confirm("Desea revisar el carrito?");
        if(verificarCompra){
            verCarrito(vectorPedidos);
        }

        let boolModificarCompra = confirm("Desea modificar la compra?");
        if(boolModificarCompra){
            vectorPedidos = modificarCompra(vectorPedidos);
            alert("se retorno bien");
            montoAcumulado = getMontoAcumulado(vectorPedidos);
        }

        let montoConDescuento = aplicarDescuento(montoAcumulado);
        let montoConIVA = aplicarIVA(montoConDescuento);
        let montoConIntereses = aplicarCuotas(montoConIVA);

        let SeguirComprando = confirm("Desea seguir comprando?");
        if (SeguirComprando){
            iniciarCompra();
        } else{
            alert("Gracias por su compra, vuelva pronto!");
        }
    } else{
        alert("Compra Finalizada");
    }
    return vectorPedidos;
}//TERMINA FUNCION INICIAR COMPRA

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


//Empieza FUNCION DEFINIR PRODUCTO;
function definirProducto(Producto){
    let precioLemonpie = 200, precioTorta = 300, precioAlfajor = 50;
    if(Producto.toLowerCase() === "lemonpie"){
        alert("Lemon elegido");
        return precioLemonpie;
    }
    if(Producto.toLowerCase() === "torta"){
        alert("Torta elegido");
        return precioTorta;
    }
    if(Producto.toLowerCase() === "alfajor"){
        alert("Alfajor elegido");
        return precioAlfajor;
    }
    alert("No elegiste nada");
    return 0;
} // TERMINA FUNCION DEFINIR PRODUCTO

//EMPIEZA FUNCION APLICAR DESCUENTO
function aplicarDescuento(montoAcumulado){
let tieneDescuento = confirm("Tiene algun descuento?");
if(tieneDescuento){
    let porcetajeDescuento = parseInt(prompt("Que porcentaje de descuento tiene?"));
    let montito = (montoAcumulado*porcetajeDescuento)/100;
    montoAcumulado = montoAcumulado - montito;
    alert(montoAcumulado);
    return montoAcumulado;
} else{
    alert("Ningun descuento aplicado");
    return montoAcumulado;
}
} //TERMINA FUNCION APLICAR DESCUENTO

//EMPIEZA FUNCION APLICAR IVA
function aplicarIVA(montoAcumulado){
    alert("Aplicando IVA");
    let iva = (montoAcumulado*21)/100;
    montoAcumulado = montoAcumulado + iva;
    alert("Monto con iva: " + montoAcumulado);
    return montoAcumulado;
}

//EMPIEZA FUNCION APLICAR CUOTAS
function aplicarCuotas(montoAcumulado){
    let cantidadCuotas = parseInt(prompt("En cuantas cuotas desea realizar el pago?","1 - 3 - 6"));
    let cantidadIntereses, cuotasIndividuales;
    if(cantidadCuotas === 1){
        alert("Pagara 1 cuota de $" + montoAcumulado);
        return montoAcumulado;
    }
    if(cantidadCuotas === 3){
        cantidadIntereses = montoAcumulado * 0.02 * 3; //tasa de 2%
        montoAcumulado = montoAcumulado + cantidadIntereses;
        cuotasIndividuales = montoAcumulado / cantidadCuotas;
        cuotasIndividuales = cuotasIndividuales.toFixed(2);
        alert("Pagara 3 cuotas de $" + cuotasIndividuales);
        return montoAcumulado;
    }
    if(cantidadCuotas === 6){
        cantidadIntereses = montoAcumulado * 0.04 * 6; //Tasa de 4%
        montoAcumulado = montoAcumulado + cantidadIntereses;
        cuotasIndividuales = montoAcumulado / cantidadCuotas;
        cuotasIndividuales = cuotasIndividuales.toFixed(2);
        alert("Pagara 6 cuotas de $" + cuotasIndividuales);
        return montoAcumulado;
    }
    alert("Cantidad de cuotas invalida, se aplicara el pago en una cuota");
    alert("Pagara 1 cuota de $" + montoAcumulado);
    return montoAcumulado;
}




//MAIN
const vectorCompra = iniciarCompra();
