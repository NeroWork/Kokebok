import {iniciarCompra} from './iniciarCompra.js';
import {aplicarCuotas, aplicarDescuento, aplicarIVA} from './modificarPrecio.js';
import {modificarCompra, verCarrito} from './operCarrito.js';



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



function checkearDato(e){
    alert("chequea");
    e.preventDefault();
    let cantDef = localStorage.getItem('cantidadDefinida');
    if(cantDef){
        procesarPedidoNuevo();
    } else{
        let inputaux = document.querySelector(".c_cantidadPedidos");
        if(inputaux != null){
            alert("si");
            if(inputaux.value > 0){
                localStorage.setItem("cantidadDefinida", true);
                iniciarCompra();
            } else{
                alert("Ingrese cantidad valida");
            }
        } else{
            alert("Ingrese cantidad valida");
        }

    }

}


//MAIN
localStorage.clear();
localStorage.setItem('cantidadDefinida',false);
let form = document.querySelector(".c_form");
form.addEventListener("submit", checkearDato);