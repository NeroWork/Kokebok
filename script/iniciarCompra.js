//EMPIEZA FUNCION INICIAR COMPRA
function iniciarCompra(){
    alert("entra a compra");
}//TERMINA FUNCION INICIAR COMPRA



// //Empieza FUNCION DEFINIR PRODUCTO;
// function definirProducto(Producto){
//     let precioLemonpie = 200, precioTorta = 300, precioAlfajor = 50;
//     if(Producto.toLowerCase() === "lemonpie"){
//         alert("Lemon elegido");
//         return precioLemonpie;
//     }
//     if(Producto.toLowerCase() === "torta"){
//         alert("Torta elegido");
//         return precioTorta;
//     }
//     if(Producto.toLowerCase() === "alfajor"){
//         alert("Alfajor elegido");
//         return precioAlfajor;
//     }
//     alert("No elegiste nada");
//     return 0;
// } // TERMINA FUNCION DEFINIR PRODUCTO

// function iniciarCompra(){
//     let cantidadDeProductos = document.querySelector(".c_cantidadPedidos").value;
//     let vectorPedidos = [];
//     if (cantidadDeProductos !== 0 && !isNaN(cantidadDeProductos)){
//         for(var i = 0; i != cantidadDeProductos; i++){
//             let productoActual = prompt("Queres Lemonpie, Torta, o Alfajor?");
//             let precioNuevo = definirProducto(productoActual);
//             if(precioNuevo != 0){
//                 const productoaux = new Producto(productoActual.toLowerCase(), precioNuevo);
//                 vectorPedidos.push(productoaux);
//             }
//         }
//         let montoAcumulado = getMontoAcumulado(vectorPedidos);

//         let verificarCompra = confirm("Desea revisar el carrito?");
//         if(verificarCompra){
//             verCarrito(vectorPedidos);
//         }

//         let boolModificarCompra = confirm("Desea modificar la compra?");
//         if(boolModificarCompra){
//             vectorPedidos = modificarCompra(vectorPedidos);
//             alert("se retorno bien");
//             montoAcumulado = getMontoAcumulado(vectorPedidos);
//         }

//         let montoConDescuento = aplicarDescuento(montoAcumulado);
//         let montoConIVA = aplicarIVA(montoConDescuento);
//         let montoConIntereses = aplicarCuotas(montoConIVA);

//         let SeguirComprando = confirm("Desea seguir comprando?");
//         if (SeguirComprando){
//             iniciarCompra();
//         } else{
//             alert("Gracias por su compra, vuelva pronto!");
//         }
//     } else{
//         alert("Compra Finalizada");
//     }
//     return vectorPedidos;
// }
// function getPantallaPedido(){
//     let code= '<label for="Pedido">Postre:</label><select class="estilo__input c_select" name="Pedido"><option value="Lemonpie">Lemon-Pie</option><option value="Tarta">Tarta de Bombon</option><option value="Alfajor">Alfajor de Maicena</option></select>'
//     return code;
// }

// function pushPedido(e){
//     e.preventDefault();
//     alert("entro a pedido");
//     let nombrePedido = document.querySelector(".c_select").value;
//     let precioNuevo = definirProducto(nombrePedido);
//     let productoaux = new Producto(nombrePedido.toLowerCase(), precioNuevo);
//     vectorPedidos.push(productoaux);
// }

export{iniciarCompra};