import {crearStock,inicializarGaleria} from './productos.js';
import {crearCarrito, modificarCarrito, inicializarCarrito} from './operCarrito.js';

function inicializar(){
    inicializarGaleria();
    crearStock();
    inicializarCarrito();

    localStorage.getItem("vectorCarrito") ? cargarCarro() : crearCarrito();


    function cargarCarro(){
        let jsonCarrito = localStorage.getItem("vectorCarrito");
        let vecCarrito = JSON.parse(jsonCarrito);
        modificarCarrito(vecCarrito);
    }
    // if(localStorage.getItem("vectorCarrito")){

    // } else{
    //     crearCarrito();
    // }
}
//MAIN
document.addEventListener('DOMContentLoaded',inicializar);