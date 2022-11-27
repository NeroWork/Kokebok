alert("empieza algoritmo");

import {crearStock,inicializarGaleria} from './productos.js';
import {crearCarrito, modificarCarrito, inicializarCarrito} from './operCarrito.js';

function inicializar(){
    alert("Dom cargado");
    inicializarGaleria();
    crearStock();
    inicializarCarrito();
    alert("entra en if"); 
    if(localStorage.getItem("vectorCarrito")){
        alert("iftrue");
        let jsonCarrito = localStorage.getItem("vectorCarrito");
        let vecCarrito = JSON.parse(jsonCarrito);
        alert("entra a mod");
        modificarCarrito(vecCarrito);
    } else{
        alert("ifalse");
        crearCarrito();
    }
}
//MAIN
alert("main");
document.addEventListener('DOMContentLoaded',inicializar);