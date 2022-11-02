//CASA DE CAMBIO

let salir
do{

let monedaInicial = prompt("Que moneda quieres cambiar? ARS/USD/EUR").toLowerCase
let monedaFinal = prompt("A que moneda quieres cambiar?").toLowerCase
let cantidad = parseInt(prompt("Ingrese importe a cambiar"))


    if ((monedaInicial == "ars".toLowerCase) && (monedaFinal == "usd".toLowerCase)) {
        resultado1 = (cantidad / 294)
        console.log("Recibes " + "usd" + (resultado1))
}
    else if ((monedaInicial == "usd".toLowerCase) && (monedaFinal == "ars".toLowerCase)) {
        resultado2 = (cantidad * 294)
        console.log("Recibes " + "ars" + (resultado2))
}
    else if ((monedaInicial == "ars".toLowerCase) && (monedaFinal == "eur".toLowerCase)) {
        resultado3 = (cantidad / 294)
        console.log("Recibes " + "eur" + (resultado3))
}
    else if ((monedaInicial == "eur".toLowerCase) && (monedaFinal == "ars".toLowerCase)) {
        resultado4 = (cantidad * 290)
        console.log("Recibes " + "ars" + (resultado4))
}

    else if ((monedaInicial == "usd".toLowerCase) && (monedaFinal == "eur".toLowerCase)) {
        resultado5 = (cantidad * 1, 2)
        console.log("Recibes " + "eur" + (resultado5))
}

    else if ((monedaInicial == "eur".toLowerCase) && (monedaFinal == "usd".toLowerCase)) {
        resultado6 = (cantidad / 0, 988507)
        console.log("Recibes " + "usd" + (resultado6))
}
    else {
        alert("ingrese una cantidad valida")
    }

 salir = parseInt(prompt("Para hacer otro cambio ingresa 1, para salir cualquier tecla"))

} while (salir == 1)