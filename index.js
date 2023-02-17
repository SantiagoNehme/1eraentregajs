let comidas = prompt("Ingrese que quiere comer: ");
switch (comidas) {
    case "hamburgesa":console.log(alert("La hamburgesa doble con cheddar cuesta $1500"));
                break;
    case "pizza":console.log(alert("Las pizzas de cualquier tipo cuestan $1300"));
    break;
    case "lomito":console.log(alert("El Lomito completo cuesta $1600"));
    break;
    case "papas fritas": console.log(alert("La porción de fritas cuestan $600"));
    break;
    case "chocotorta":console.log(alert("La porción de chocotorta cuesta $500"));
    break;
    default:console.log(alert("Por el momento no trabajamos con " + comidas +" como producto"));
        break;
}


class Bebida{
    constructor(nombre, cantidad){
        this.nombre = nombre;
        this.cantidad = cantidad;
    }
}
const listaDeBebidasEncargadas = [];
let opcion = prompt("Quiere comprar algo para tomar? en caso contrario escriba NO para salir");

while(opcion != "NO"){
    const nombre = prompt("Ingrese nombre");
    
    const cantidad = parseInt(prompt("Ingrese el stock"));
    
    const bebida = new Bebida(nombre, cantidad);
    
    listaDeBebidasEncargadas.push(Bebida);
    opcion = prompt("Ingrese otra Bebida o NO para salir");
}

console.log(alert("Las bebidas cuestan $300") + listaDeBebidasEncargadas);

let precioBebidas = 300;
if(comidas == "hamburgesa"){
    let totalAPagar = precioBebidas + 1500;
    console.log(alert("El total a pagar con la bebida es: $"+totalAPagar+"."))
}else if(comidas == "pizza"){
    let totalAPagar = precioBebidas + 1300;
    console.log(alert("El total a pagar con la bebida es: $"+totalAPagar+"."))
}else if(comidas == "lomito"){
    let totalAPagar = precioBebidas + 1600;
    console.log(alert("El total a pagar con la bebida es: $"+totalAPagar+"."))
}else if(comidas == "papas fritas"){
    let totalAPagar = precioBebidas + 600;
    console.log(alert("El total a pagar con la bebida es: $"+totalAPagar+"."))
}else if(comidas == "chocotorta"){
    let totalAPagar = precioBebidas + 600;
    console.log(alert("El total a pagar con la bebida es: $"+totalAPagar+"."))
}

const metodosDePago = [{id:1,  metodo: "Efectivo"},
                       {id: 2, metodo: "Tarjeta de débito"},
                       {id: 3, metodo: "Tarjeta de crédito"},
                       {id: 4, metodo: "Transferencia bancaria"}
]

const listaDePagos = metodosDePago.map(metodo => metodo.metodo)

console.log(listaDePagos);