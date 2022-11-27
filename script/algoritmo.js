import {crearStock,inicializarGaleria} from './productos.js';
import {crearCarrito, modificarCarrito, inicializarCarrito} from './operCarrito.js';

function inicializar(){
    inicializarGaleria();
    crearStock();
    inicializarCarrito();
    if(localStorage.getItem("vectorCarrito")){
        let jsonCarrito = localStorage.getItem("vectorCarrito");
        let vecCarrito = JSON.parse(jsonCarrito);
        modificarCarrito(vecCarrito);
    } else{
        crearCarrito();
    }
}
//MAIN
document.addEventListener('DOMContentLoaded',inicializar);