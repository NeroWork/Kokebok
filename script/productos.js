import{agregarAlCarrito} from "./operCarrito.js";

//DEFINICION DE CLASE PRODUCTO
class Producto{
    constructor(nombre, precio, id){
        this.nombre = nombre;
        this.precio = precio;
        this.id = id;
    }
} //TERMINA DECLARACION CLASE PRODUCTO

function crearStock(){
    let vectorProductos = [];
    let prodaux = new Producto("lemonpie",1200,0);
    vectorProductos.push(prodaux);
    prodaux = new Producto("alfajor",80,1);
    vectorProductos.push(prodaux);
    prodaux = new Producto("tartabombon",1300,2);
    vectorProductos.push(prodaux);
    prodaux = new Producto("pastafrola",1100,3);
    vectorProductos.push(prodaux);
    prodaux = new Producto("tiramisu",1000,4);
    vectorProductos.push(prodaux);
    prodaux = new Producto("cupcake",150,5);
    vectorProductos.push(prodaux);
    prodaux = new Producto("cheesecake",1050,6);
    vectorProductos.push(prodaux);
    prodaux = new Producto("tartafrutilla",1400,7);
    vectorProductos.push(prodaux);
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