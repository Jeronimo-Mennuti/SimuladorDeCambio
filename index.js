let monedaInicial = prompt("Que moneda quieres cambiar? ARS/USD/EUR").toLowerCase
let monedaFinal = prompt("A que moneda quieres cambiar?").toLowerCase
let cantidad = parseInt(prompt("Ingrese importe a cambiar"))


if ((monedaInicial == "ars".toLowerCase) && (monedaFinal == "usd".toLowerCase)){
    resultado = (cantidad / 294)
    console.log("Recibes " + "usd" + (resultado))
}
else if ((monedaInicial == "usd".toLowerCase) && (monedaFinal == "ars".toLowerCase)){
    resultado = (cantidad * 294)
    console.log("Recibes " + "ars" + (resultado))
}
else if ((monedaInicial == "ars".toLowerCase) && (monedaFinal == "eur".toLowerCase)){
    resultado = (cantidad / 294)
    console.log("Recibes " + "eur" + (resultado))
}
else if ((monedaInicial == "eur".toLowerCase) && (monedaFinal == "ars".toLowerCase)){
    resultado = (cantidad * 290)
    console.log("Recibes " + "ars" + (resultado))
}

else if ((monedaInicial == "usd".toLowerCase) && (monedaFinal == "eur".toLowerCase)){
    resultado = (cantidad * 1,2)
    console.log("Recibes " + "eur" + (resultado))
}

else if ((monedaInicial == "eur".toLowerCase) && (monedaFinal == "usd".toLowerCase)){
    resultado = (cantidad / 0,988507)
    console.log("Recibes " + "usd" + (resultado))
}
else {
    alert("ingrese una cantidad valida")
}

