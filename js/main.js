const productos = [
    {
        id : 1,
        nombre : "papa",
        precio : 1200
    },
    {
        id : 2,
        nombre : "lechuga",
        precio : 1800
    },
    {
        id : 3,
        nombre : "tomate",
        precio : 1600
    }
    
];

let carrito = 0;
let terminarcompra;

do{
    let numero = prompt(`Elija su compra con el numero que corresponda
    1- ${productos[0].nombre} 1kg ${productos[0].precio}
    2- ${productos[1].nombre} 1kg ${productos[1].precio}
    3- ${productos[2].nombre} 1kg ${productos[2].precio}`)

    carrito += productos[numero - 1].precio;

    if(!terminarcompra){
        terminarcompra = confirm("?desea terminar su compra?");
    }
} while(!terminarcompra);
    

alert("El total a pagar es de: " + carrito);

