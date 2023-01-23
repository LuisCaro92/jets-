const fromEuroToDollar = function (valueInEuro) {
    // convertimos el valor a dolares
    let valueInDollar = valueInEuro * 1.2;
    // retornamos el valor
    return valueInDollar;
}

const fromDollarToyen = function (valueInDollar) {
    //
    let valueInToyen = valueInDollar * 127.9;
    return valueInToyen;
}

const fromYenToPound = function (valueInYenes) {

    let valueInPound = valueInYenes * 0.8;
    return valueInPound;
}





const sum = (a, b) => {
    return a + b
}

// solo un registro en consola para nosotros.
console.log(sum(7, 3))

// exporta la función para usarla en otros archivos 
// (similar a la palabra clave `export` cuando se usa webpack)
module.exports = { sum, fromEuroToDollar, fromDollarToyen, fromYenToPound };

let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}