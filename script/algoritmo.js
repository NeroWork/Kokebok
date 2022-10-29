//EMPIEZA FUNCION INICIAR COMPRA
function iniciarCompra(){
    let cantidadDeProductos = parseInt(prompt('Cuantos Productos queres comprar?'));
    if (cantidadDeProductos !== 0 && !isNaN(cantidadDeProductos)){
        let montoAcumulado = 0;
        for(var i = 0; i != cantidadDeProductos; i++){
            let productoActual = prompt("Queres Lemonpie, Torta, o Alfajor?");
            let precioNuevo = definirProducto(productoActual);
    
            montoAcumulado = montoAcumulado + precioNuevo;
        }
        
        alert("El total de la compra es de "+montoAcumulado);
        let montoConDescuento = aplicarDescuento(montoAcumulado);
        let montoConIVA = aplicarIVA(montoConDescuento);
        aplicarCuotas(montoConIVA);

        let SeguirComprando = confirm("Desea seguir comprando?");
        if (SeguirComprando){
            iniciarCompra();
        } else{
            alert("Gracias por su compra, vuelva pronto!");
        }
    } else{
        alert("Compra Finalizada");
    }
}//TERMINA FUNCION INICIAR COMPRA

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
iniciarCompra();