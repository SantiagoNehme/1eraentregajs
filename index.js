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
        this.precio = 300;
    }
}
const listaDeBebidasEncargadas = [];
let opcion = prompt("Quiere comprar algo para tomar? en caso contrario escriba NO para salir");

if(opcion != "no"){
    console.log(alert("Las bebidas cuestan $300") + listaDeBebidasEncargadas);
    
    const nombre = prompt("Ingrese nombre");
    
    const cantidad = parseInt(prompt("Ingrese el stock"));
    
    const bebida = new Bebida(nombre, cantidad);
    
    listaDeBebidasEncargadas.push(Bebida);
    
}else{
    console.log("No pidió bebidas")
}




let precioBebidas = 300;
if(comidas == "hamburgesa" && opcion == "si"){
    let totalAPagar = precioBebidas + 1500;
    console.log(alert("El total a pagar con la bebida es: $"+totalAPagar+"."))
}else if(comidas == "hamburgesa" && opcion == "no"){
    console.log(alert("El total a pagar sin la bebida es: $" + 1500))
}
else if(comidas == "pizza" && opcion == "si"){
    let totalAPagar = precioBebidas + 1300;
    console.log(alert("El total a pagar con la bebida es: $"+totalAPagar+"."))
}else if(comidas == "pizza" && opcion == "no"){
    console.log(alert("El total a pagar sin la bebida es: $" + 1300))
}
else if(comidas == "lomito" && opcion == "si"){
    let totalAPagar = precioBebidas + 1600;
    console.log(alert("El total a pagar con la bebida es: $"+totalAPagar+"."))
}else if(comidas == "lomito" && opcion == "no"){
    console.log(alert("El total a pagar sin la bebida es: $" + 1600))
}
else if(comidas == "papas fritas" && opcion == "si"){
    let totalAPagar = precioBebidas + 600;
    console.log(alert("El total a pagar con la bebida es: $"+totalAPagar+"."))
}else if(comidas == "papas fritas" && opcion == "no"){
    console.log(alert("El total a pagar sin la bebida es: $" + 600))
}
else if(comidas == "chocotorta" && opcion == "si"){
    let totalAPagar = precioBebidas + 600;
    console.log(alert("El total a pagar con la bebida es: $"+totalAPagar+"."))
}else if(comidas == "chocotorta" && opcion == "no"){
    console.log(alert("El total a pagar sin la bebida es: $" + 600))
}

const metodosDePago = [{id:1,  metodo: "Efectivo"},
                       {id: 2, metodo: "Tarjeta de débito"},
                       {id: 3, metodo: "Tarjeta de crédito"},
                       {id: 4, metodo: "Transferencia bancaria"}
]

const listaDePagos = metodosDePago.map(metodo => metodo.metodo)

console.log(listaDePagos);