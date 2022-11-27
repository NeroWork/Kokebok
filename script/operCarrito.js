import{getStock} from "./productos.js";

class productoEnCarrito{
    constructor(productin, cantidad){
        this.producto = productin;
        this.cantidad = cantidad;
        this.preciototal = productin.precio*this.cantidad;
    }
    actualizarPrecio(){
        let nuevoPrecio = this.producto.precio*this.cantidad;
        alert("nuevo precio: "+nuevoPrecio);
        return nuevoPrecio;
    };
}

function inicializarCarrito(){
    let objLimpiar = document.querySelector(".carrito__limpiar");
    objLimpiar.addEventListener("click",() => {limpiarCarrito();});
}

function crearCarrito(){
    let vectorCarrito = [];
    let vecaux = JSON.stringify(vectorCarrito);
    localStorage.setItem("vectorCarrito", vecaux);
    dibujarCarrito();
}

function getCarrito(){
    let jsonaux = localStorage.getItem("vectorCarrito");
    let vecaux = JSON.parse(jsonaux);
    alert("tipo getcarrito: "+typeof(vecaux));
    let vecCarritox = [];
    alert("se empiezan a insertar los elementos");
    for (const elem of vecaux) {
        let aux = new productoEnCarrito(elem.producto, elem.cantidad);
        vecCarritox.push(aux);
    }
    alert("se terminaron de insertar elementos");
    return vecCarritox;
}

function modificarCarrito(nuevoCarrito){
    let jsonaux = JSON.stringify(nuevoCarrito);
    localStorage.setItem("vectorCarrito", jsonaux);
    alert("entra a dibujar");
    dibujarCarrito();
}

function agregarAlCarrito(idProducto){
    alert("intentando agregar al carrito");
    let vectorProductos = getStock();
    for (const producto of vectorProductos) {
        if(producto.id === idProducto){
            let vecCarrito = getCarrito();
            let encontrado = false;
            let contadorAux = 0;
            let contador = -1;
            for (const prodaux of vecCarrito) {
                if(prodaux.producto.id === idProducto){
                    encontrado = true;
                    contador = contadorAux;
                }
                contadorAux++;
            }
            if(encontrado === true){
                alert("encontrado en "+contador);
                vecCarrito[contador].cantidad = vecCarrito[contador].cantidad + 1;
                vecCarrito[contador].preciototal = vecCarrito[contador].actualizarPrecio();
                alert("precioActualizado: "+vecCarrito[contador].preciototal);
                modificarCarrito(vecCarrito);
            } else{
                let nuevoProducto = new productoEnCarrito(producto, 1);
                vecCarrito.push(nuevoProducto);
                modificarCarrito(vecCarrito);
                // let elementoaux = document.querySelector("producto__x"+((vecCarrito.lenght)-1));
                // elementoaux.addEventListener("click", () => {eliminarDelCarrito(idProducto);});
            }
        }
    }
}

// function eliminarDelCarrito(itemID){
//     alert("intentando eliminar");
//     let vecCarrito = getCarrito();
//     let contador = -1;
//     let contadorAux = 0;
//     for (const prod of vecCarrito) {
//         if(prod.producto.id === itemID){
//             contador = contadorAux;
//         }
//         contadorAux++;
//     }
//     if(contador != -1){
//         vecCarrito.splice(contador,1);
//         modificarCarrito(vecCarrito);
//     }
// }

function limpiarCarrito(){
    let vecaux = [];
    localStorage.setItem("vectorCarrito",JSON.stringify(vecaux));
    dibujarCarrito();
}

function dibujarCarrito(){
    let contenedorDeProductos = document.querySelector(".divCarrito__divProductos");
    alert("empieza a dibujar");
    if(contenedorDeProductos){
        contenedorDeProductos.innerHTML = "";
        let vecCarritox = getCarrito();
        let largovector = vecCarritox.length;
        alert("tamaño de vector: "+ largovector);
        if(largovector < 1){
            alert("entra en if < 1");
            contenedorDeProductos.innerHTML =  `<div class="producto__nombre col-8 text-start">
                                                    <p>Vacio</p>
                                                </div>
                                                <div class="col">
                                                    <div class="producto__precio">
                                                        <p>0</p>
                                                        <p>$0</p>
                                                    </div>
                                                </div>
                                                <div class="producto__x col text-center">
                                                    <p>X</p>
                                                </div>`
                                                alert("if < 1 ejecutado");
        } else{
            alert("entra en if >= 1");
            let contador = 0;
            for (const prod of vecCarritox) {
                contenedorDeProductos.innerHTML +=  `<div class="producto__nombre col-8 text-start">
                                                        <p>${prod.producto.nombre}</p>
                                                    </div>
                                                    <div class="col">
                                                        <div class="producto__precio">
                                                            <p>${prod.cantidad}</p>
                                                            <p>$${prod.preciototal}</p>
                                                        </div>
                                                    </div>
                                                    <div class="producto__x${contador} col text-center">
                                                        <p>X</p>
                                                    </div>`
                contador++;
            }
        }
    }
}  

export{limpiarCarrito, crearCarrito, modificarCarrito, getCarrito, agregarAlCarrito, dibujarCarrito, eliminarDelCarrito,inicializarCarrito};

// //Empieza funcion VER CARRITO;
// function verCarrito(array1){
//     const carrito = [];
//     const cantidades = [];
//     for(const x of array1){
//         let encontrado = false;
//         for(const z of carrito){
//             if(z.nombre === x.nombre){
//                 encontrado = true;
//             }
//         }
//         if(encontrado === false){
//             let contaux = 0;
//             for(const y of array1){
//                 if (y.nombre === x.nombre){
//                     contaux++;
//                 }
//             }
//             carrito.push(x);
//             cantidades.push(contaux);
//         }
//     }
//     for(var it = 0; it != carrito.length; it++){
//         let nombreAux = carrito[it].nombre;
//         let precioAux = carrito[it].precio;
//         let cantidadAux = cantidades[it];
//         alert("Compraste "+cantidadAux+" "+nombreAux+" por $"+(precioAux*cantidadAux)+".");
//     }
// }//Termina funcion revisar carrito;

// //Empieza funcion modificar compra;
// function modificarCompra(vectorPedidos1){
//     let boolModificarCompra = true;

//     while(boolModificarCompra){
//         let cambio = prompt("Desea agregar o eliminar un producto?","ej: Agregar");
//         if(cambio.toLowerCase() === "agregar"){
//             alert("inicia agregacion");
//             let productoActual = prompt("Queres Lemonpie, Torta, o Alfajor?");
//             let precioNuevo = definirProducto(productoActual);
//             const productoaux = new Producto(productoActual.toLowerCase(), precioNuevo);
//             vectorPedidos1.push(productoaux);
//             alert("Agregado");
//         }
//         if(cambio.toLowerCase() === "eliminar"){
//             alert("Inicia eliminacion");
//             let productoActual = prompt("Que producto desea eliminar?","Ej: lemonpie");
//             productoActual = productoActual.toLowerCase();
//             const iterador = vectorPedidos1.findIndex(x => x.nombre === productoActual);
//             alert(iterador);
//             if (iterador != -1){
//                 vectorPedidos1.splice(iterador,1);
//                 alert("Eliminado");
//             } else{
//                 alert("No se encontro");
//             }
//         }

//         let montoAcumulado = getMontoAcumulado(vectorPedidos1);

//         let verificarCompra = confirm("Desea revisar el carrito?");
//         if(verificarCompra){
//             verCarrito(vectorPedidos1);
//             alert("Monto total: $"+montoAcumulado);
//         }

//         boolModificarCompra = confirm("Desea modificar la compra?");
//     }
//     alert("se retorna");
//     return vectorPedidos1;
// }