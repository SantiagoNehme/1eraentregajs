function CalcularPromedio(){
    let v1 = document.getElementById("n1").value;
    let v2 = document.getElementById("n2").value;
    let v3 = document.getElementById("n3").value;
    let pro = (parseFloat(v1)+parseFloat(v2)+parseFloat(v3))/3;
    document.getElementById("promedio").innerHTML = pro;
}

let nombre = "Papas fritas"
let cantidad = 1

let precioProducto



if(nombre == "Papas fritas"){
    precioProducto = 400
    let precioTotal = cantidad * precioProducto
    console.log("Tiene que pagar " + precioTotal + " Pesos")
}else if(nombre == "Pizza"){
    precioProducto = 250
    let precioTotal = cantidad * precioProducto
    console.log("Tiene que pagar " + precioTotal + " Pesos")
}else if(nombre == "Chocotorta"){
    precioProducto = 450
    let precioTotal = cantidad * precioProducto
    console.log("Tiene que pagar " + precioTotal + " Pesos")
}
else if(nombre == "Hamburgesa doble"){
    precioProducto = 1200
    let precioTotal = cantidad * precioProducto
    console.log("Tiene que pagar " + precioTotal + " Pesos")
}
else if(nombre == "Lomito completo"){
    precioProducto = 1500
    let precioTotal = cantidad * precioProducto
    console.log("Tiene que pagar " + precioTotal + " Pesos")
}else if(nombre == "Empanadas"){
    precioProducto = 150
    let precioTotal = cantidad * precioProducto
    console.log("Tiene que pagar " + precioTotal + " Pesos")
}
else{
    console.log("Producto no disponible/válido")
}

let cantidadDeProductos = Number(prompt("Ingrese la cantidad de productos"))

let acumulador = 0

for(let i = 0; i < cantidadDeProductos; i++){
    let productoA = Number(prompt("Ingrese el valor del producto"))
    acumulador = acumulador + productoA
}

alert("El total a pagar es: " + acumulador)
