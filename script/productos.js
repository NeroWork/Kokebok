import{agregarAlCarrito} from "./operCarrito.js";

//DEFINICION DE CLASE PRODUCTO
class Producto{
    constructor(nombre, precio, id){
        this.nombre = nombre;
        this.precio = precio;
        this.id = id;
    }
} //TERMINA DECLARACION CLASE PRODUCTO

async function crearStock(){
    let vectorProductos = [];
    let prodaux;

    const resp = await fetch('../stock.json');
    const data = await resp.json();

    data.forEach((product) => {
        let stringaux = product.nombre.charAt(0).toUpperCase() + product.nombre.slice(1);
        prodaux = new Producto(stringaux,product.precio,product.id);
        vectorProductos.push(prodaux);
    })
    let vecjson = JSON.stringify(vectorProductos);
    localStorage.setItem("vectorProductos",vecjson);
}

function getStock(){
    let vecjson = localStorage.getItem("vectorProductos");
    let vectoraux = JSON.parse(vecjson);
    let vectorfinal = [];
    for (const elem of vectoraux) {
        let aux = new Producto(elem.nombre, elem.precio, elem.id);
        vectorfinal.push(aux);
    }
    return vectorfinal;
}

function inicializarGaleria(){
    if(document.querySelector(".prod1")){
        for(let i = 0; i < 8; i++){
            let objaux = document.querySelector(`.prod${i+1}`);
            objaux.addEventListener("click", () => {agregarAlCarrito(i);});
        }
    }
}


export{getStock,crearStock,inicializarGaleria};